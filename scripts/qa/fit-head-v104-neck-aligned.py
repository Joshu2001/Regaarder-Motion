"""Offline deterministic head fitting. No reference pixels become app assets.
CPU skinning mirrors native rest-shape and bone transforms. Image calibration
is a fixed translation/uniform scale derived from neck/waist anchors, not a
per-candidate head resize. Only training frames enter the objective.
"""
import json,math
from pathlib import Path
import numpy as np, cv2
from scipy.spatial.transform import Rotation
from scipy.optimize import least_squares
ROOT=Path(__file__).resolve().parents[2];OUT=ROOT/'review-v104';DATA=json.loads((OUT/'fit-input.json').read_text())
V=np.array(DATA['vertices']).reshape(-1,3);REST=np.array(DATA['rest']);PARENTS=DATA['parents'];BASE=DATA['shape'];SI=np.array(DATA['skinIndex']).reshape(-1,4);SW=np.array(DATA['skinWeight']).reshape(-1,4)
SELECT=V[:,1]>=1.65;ALL_V=V.copy();SI=SI[SELECT];SW=SW[SELECT];V=V[SELECT]
FIELDS=['cranialHeight','cranialDepth','chinProjection']
TRAIN=[.4,.6,2.4,2.8,3.2]
# Manually identified neck cut endpoints and waist seam y, in original 640x360 pixels.
ANNOT={.4:([135,70],[165,85],239),.5:([144,78],[172,94],244),.6:([151,84],[178,100],247),.7:([154,87],[182,104],253),2.4:([201,102],[228,117],276),2.6:([186,119],[213,133],292),2.8:([169,144],[197,157],308),3.0:([160,166],[183,176],328),3.2:([164,196],[188,205],346)}
def smooth(x,a,b):
 t=np.clip((x-a)/(b-a),0,1);return t*t*(3-2*t)
def shape(p,s):
 x,y,z=np.array(p).T.copy();bell=lambda c,w:np.exp(-((y-c)/w)**2);f=lambda k:s.get(k,0)
 width=f('shoulders')*bell(1.43,.13)+f('chest')*bell(1.32,.12)+f('waist')*bell(1.13,.12)+f('hips')*bell(.94,.12)+f('pelvis')*bell(.87,.10)+f('thighs')*bell(.66,.18)+f('calves')*bell(.29,.16)+f('headWidth')*bell(1.74,.10)+f('jaw')*bell(1.65,.04)+f('neckWidth')*bell(1.605,.045)
 arm=np.where(abs(x)>.20,f('upperArms')*bell(1.31,.17)+f('forearms')*bell(1.05,.16),0);x*=1+width;z*=1+arm
 z*=1+f('neckDepth')*bell(1.605,.045)+f('headDepth')*bell(1.74,.1)+f('chest')*bell(1.34,.12)*.5+f('pelvis')*bell(.87,.10)*.5
 z+=np.where(z>0,f('abdomen')*.12*bell(1.13,.14),-f('glutes')*.12*bell(.88,.10));x*=1+f('build')*.5;y*=1+f('height');z*=1+f('build')*.65
 original=y.copy();neck=np.exp(-((y-1.605)/.065)**2);skull=smooth(y,1.655,1.71);lower=np.exp(-((y-1.67)/.045)**2)
 x*=1+f('neckThickness')*neck+f('cranialWidth')*skull+f('jawWidth')*lower;z=.035+(z-.035)*(1+f('neckThickness')*neck+f('cranialDepth')*skull);front=smooth(z,-.01,.08)
 z+=f('throatVolume')*.045*neck*front-f('napeVolume')*.045*neck*(1-front)+f('chinProjection')*.05*lower*front+f('cranialTilt')*(y-1.64)*skull
 y+=f('cranialHeight')*(y-1.655)*skull-f('neckShortening')*.16*smooth(original,1.53,1.68)
 return np.stack([x,y,z],1)
def matrix(a):return np.array(a).reshape(4,4).T
def project(p,frame):
 q=np.c_[p,np.ones(len(p))]@matrix(frame['camera']).T;return np.c_[((q[:,0]/q[:,3])+1)*320,(1-q[:,1]/q[:,3])*180]
BASE_REST=shape(REST,BASE)
def basis(p):
 y=p[:,1];z=p[:,2];front=smooth(z,.025,.08);back=1-smooth(z,-.04,.015);seam=smooth(y,1.64,1.675);jaw=np.exp(-((y-1.675)/.035)**2)*front*seam;occ=np.exp(-((y-1.755)/.055)**2)*back*seam;b=np.zeros((len(p),3,3));b[:,0,2]=jaw;b[:,1,1]=-jaw;b[:,2,2]=-occ;return b
BASIS=basis(V);SCULPT=np.zeros(3)
def world(shape_values,pitch,frame):
 new=shape(REST,shape_values);mats=[];group=matrix(frame['group'])
 for i,b in enumerate(frame['bones']):
  parent=PARENTS[i];old_delta=BASE_REST[i]-(BASE_REST[parent] if parent>=0 else 0);new_delta=new[i]-(new[parent] if parent>=0 else 0)
  pos=np.array(b['position'])+new_delta-old_delta;rot=Rotation.from_quat(b['quaternion'])
  if DATA['joints'][i]=='head':rot=rot*Rotation.from_euler('x',pitch,degrees=True)
  m=np.eye(4);m[:3,:3]=rot.as_matrix()@np.diag(b['scale']);m[:3,3]=pos;mats.append((mats[parent] if parent>=0 else group)@m)
 skin=[]
 for i,m in enumerate(mats):
  inv=np.eye(4);inv[:3,3]=-new[i];skin.append(m@inv)
 skin=np.array(skin);pts=np.c_[shape(V,shape_values)+np.einsum('nkj,k->nj',BASIS,SCULPT),np.ones(len(V))];out=np.zeros((len(V),4))
 for j in range(4):out+=np.einsum('nij,nj->ni',skin[SI[:,j]],pts)*SW[:,j,None]
 return out[:,:3],mats
def target(t):
 im=cv2.imread(str(ROOT.parent/'reference'/'frames'/f'{round(t*30)+1:04d}.png'));a,b,waist=ANNOT[t];a=np.array(a);b=np.array(b);yy,xx=np.indices(im.shape[:2]);cut=a[1]+(xx-a[0])*(b[1]-a[1])/(b[0]-a[0]);v=im.max(2);mask=((v>90)&(im[:,:,0]>im[:,:,2]*1.06)&(xx>a[0]-40)&(xx<b[0]+45)&(yy<cut)&(yy>b[1]-105)).astype('uint8')
 n,lab,stats,_=cv2.connectedComponentsWithStats(mask);idx=1+np.argmax(stats[1:,4]);mask=(lab==idx).astype('uint8');cont=cv2.findContours(mask,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_NONE)[0][0][:,0,:].astype(float)
 return im,mask,cont,(a+b)/2,waist
FRAMES=[]
for f in DATA['frames']:
 t=f['time'];im,mask,cont,anchor,waist=target(t);base_world,mats=world(BASE,0,f);neck=project(np.array([mats[DATA['joints'].index('neck03')][:3,3]]),f)[0];wi=DATA['joints'].index('spine05');waist_world=(mats[wi]@np.r_[np.array([0,1.05,.035])-BASE_REST[wi],1])[:3];waist_p=project(np.array([waist_world]),f)[0];scale=(waist-anchor[1])/(waist_p[1]-neck[1]);FRAMES.append(dict(frame=f,image=im,mask=mask,contour=cont,anchor=anchor,neck=neck,scale=scale))
def contour(points):return cv2.convexHull(points.astype('float32'))[:,0,:].astype(float)
ANGLES=np.linspace(0,2*np.pi,96,endpoint=False);DIR=np.c_[np.cos(ANGLES),np.sin(ANGLES)]
def support(points,origin):return ((points-origin)@DIR.T).max(0)
def aligned(s,pitch,r):
 w,_=world(s,pitch,r['frame']);p=project(w,r['frame']);return (p-r['neck'])*r['scale']+r['anchor']
def residual(x,training=True):
 global SCULPT;SCULPT=x[8:11];s={**BASE,**dict(zip(FIELDS,x[:3]))};pitch=x[3:8];res=[]
 for r in FRAMES:
  if r['frame']['time'] not in TRAIN:continue
  pp=contour(aligned(s,float(np.interp(r['frame']['time'],TRAIN,pitch)),r));ref=contour(r['contour']);res.extend((support(pp,r['anchor'])-support(ref,r['anchor']))/2)
 # Keep weakly constrained anatomy near the starting shape; pitch is shared across frames.
 res.extend((x[:3]-np.array([BASE.get(k,0) for k in FIELDS]))*.7);res.extend(pitch*.025);res.extend(np.diff(pitch)*.15);res.extend(SCULPT/.004)
 return res
def metrics(s,pitch,r):
 pp=contour(aligned(s,pitch,r));ref=contour(r['contour']);a=np.zeros((360,640),np.uint8);b=a.copy();cv2.fillConvexPoly(a,np.round(pp).astype('int32'),1);cv2.fillConvexPoly(b,np.round(ref).astype('int32'),1);iou=float(np.logical_and(a,b).sum()/np.logical_or(a,b).sum());err=float(np.mean(abs(support(pp,r['anchor'])-support(ref,r['anchor']))));return {'contourSupportMAE_px':err,'convexSilhouetteIoU':iou}
def jac(x):
 columns=[]
 for k,step in enumerate([.002,.002,.002,.2,.2,.2,.2,.2,.0003,.0003,.0003]):
  a=x.copy();b=x.copy();a[k]+=step;b[k]-=step;columns.append((np.array(residual(a))-np.array(residual(b)))/(2*step))
 return np.array(columns).T
x0=np.array([BASE.get(k,0) for k in FIELDS]+[0.,0.,0.,0.,0.,0.,0.,0.]);fit=least_squares(residual,x0,bounds=([-.2,-.2,-.2,-15,-15,-15,-15,-15,-.008,-.008,-.008],[.2,.2,.25,15,15,15,15,15,.008,.008,.008]),jac=jac,max_nfev=90,xtol=1e-5,ftol=1e-5)
S={**BASE,**dict(zip(FIELDS,fit.x[:3]))};pitch=fit.x[3:8];coefficients=fit.x[8:11].copy();rows=[]
for r in FRAMES:
 t=r['frame']['time'];SCULPT=np.zeros(3);before=metrics(BASE,0,r);SCULPT=coefficients;after=metrics(S,float(np.interp(t,TRAIN,pitch)),r);rows.append({'localTime':t,'sourceTime':900+t,'set':'fit' if t in TRAIN else 'held-out','scaleCalibration':r['scale'],'before':before,'after':after})
 for state,s,p in [('before',BASE,0),('after',S,float(np.interp(t,TRAIN,pitch)))]:
  SCULPT=coefficients if state=='after' else np.zeros(3);im=r['image'].copy();cv2.polylines(im,[np.round(r['contour']).astype('int32')],True,(0,255,0),1);cv2.polylines(im,[np.round(contour(aligned(s,p,r))).astype('int32')],True,(255,80,255),1);cv2.putText(im,f'{state} source {900+t:.3f} local {t:.3f}',(8,20),cv2.FONT_HERSHEY_SIMPLEX,.5,(255,255,255),1);cv2.imwrite(str(OUT/f'{t}-{state}.png'),im)
report={'fields':FIELDS,'initial':dict(zip(FIELDS,x0[:5])),'fitted':{k:float(S[k]) for k in FIELDS},'pitchOffsetTrack':[{'time':t,'degrees':float(v)} for t,v in zip(TRAIN,pitch)],'sculptCoefficientsMeters':coefficients.tolist(),'rows':rows,'optimizer':{'success':bool(fit.success),'evaluations':int(fit.nfev),'cost':float(fit.cost)},'calibration':'Fixed per-frame image-space translation and uniform scale from manually marked neck junction and waist seam. Not recovered full-scene camera.','limitations':['Convex silhouettes discard local concavities.','Manual neck-cut anchors have pixel uncertainty.','Depth and yaw are underconstrained by mostly side views.','CPU predictor omits dynamic neck DQ prewarping; verify actual native render.']}
(OUT/'fit-result.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))

offsets=np.einsum('nkj,k->nj',basis(ALL_V),coefficients);layer={str(i):[float(v) for v in d] for i,d in enumerate(offsets) if np.linalg.norm(d)>1e-6};(OUT/'head-sculpt.json').write_text(json.dumps(layer));print('sculpt vertices',len(layer),'maximum meters',np.linalg.norm(offsets,axis=1).max())
