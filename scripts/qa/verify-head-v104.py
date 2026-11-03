import json
from pathlib import Path
import numpy as np,cv2
root=Path(__file__).resolve().parents[2];src=(root/'scripts/qa/fit-head-v104.py').read_text();ns={'__file__':str(root/'scripts/qa/fit-head-v104.py')};exec(src.split('x0=np.array(')[0],ns)
fit=json.loads((root/'review-v104/fit-result.json').read_text());native=json.loads((root/'review-v104/native-heads.json').read_text());s={**ns['BASE'],**fit['fitted']};coeff=np.array(fit['sculptCoefficientsMeters']);times=[x['time'] for x in fit['pitchOffsetTrack']];degrees=[x['degrees'] for x in fit['pitchOffsetTrack']];rows=[]
def measure(p,r):
 pp=ns['contour'](p);ref=ns['contour'](r['contour']);a=np.zeros((360,640),np.uint8);b=a.copy();cv2.fillConvexPoly(a,np.round(pp).astype('int32'),1);cv2.fillConvexPoly(b,np.round(ref).astype('int32'),1)
 return {'supportMAE_px':float(np.mean(abs(ns['support'](pp,r['anchor'])-ns['support'](ref,r['anchor'])))),'convexIoU':float(np.logical_and(a,b).sum()/np.logical_or(a,b).sum())}
for r in ns['FRAMES']:
 t=r['frame']['time'];row={'localTime':t,'sourceTime':900+t,'set':'fit' if t in ns['TRAIN'] else 'held-out'}
 for mode in ['before','after']:
  raw=np.array(next(x['points'] for x in native['rows'] if x['mode']==mode and x['time']==t));ns['SCULPT']=coeff if mode=='after' else np.zeros(3);ss=s if mode=='after' else ns['BASE'];pitch=float(np.interp(t,times,degrees)) if mode=='after' else 0
  predicted=ns['project'](ns['world'](ss,pitch,r['frame'])[0],r['frame']);row[mode+'PredictorMax_px']=float(np.linalg.norm(predicted-raw,axis=1).max());p=(raw-r['neck'])*r['scale']+r['anchor'];ref=r['contour'];delta=(ref.min(0)+ref.max(0)-p.min(0)-p.max(0))/2;row[mode+'PlacementOffset_px']=delta.tolist();p+=delta;row[mode]=measure(p,r)
  im=r['image'].copy();cv2.polylines(im,[np.round(r['contour']).astype('int32')],True,(0,255,0),1);cv2.polylines(im,[np.round(ns['contour'](p)).astype('int32')],True,(255,80,255),1);cv2.putText(im,f'NATIVE {mode} source {900+t:.3f} / local {t:.3f}',(8,20),cv2.FONT_HERSHEY_SIMPLEX,.5,(255,255,255),1);cv2.imwrite(str(root/'review-v104'/f'native-overlay-{mode}-{t}.png'),im)
 rows.append(row)
held=[r for r in rows if r['set']=='held-out'];before=float(np.mean([r['before']['supportMAE_px'] for r in held]));after=float(np.mean([r['after']['supportMAE_px'] for r in held]));report={'nativeMetrics':rows,'heldOutMeanSupportErrorBefore_px':before,'heldOutMeanSupportErrorAfter_px':after,'heldOutErrorReductionPercent':100*(1-after/before),'heldOutMeanIoUBefore':float(np.mean([r['before']['convexIoU'] for r in held])),'heldOutMeanIoUAfter':float(np.mean([r['after']['convexIoU'] for r in held])),'browserErrors':native['errors'],'definition':'Center-aligned head-only convex silhouettes at fixed torso-calibrated scale. Position errors recorded separately. Not full-scene image similarity or unique 3D recovery.'}
report['accepted']=bool(after<before*.75 and all(r['after']['convexIoU']>r['before']['convexIoU'] for r in held) and max(r['afterPredictorMax_px'] for r in rows)<3 and not native['errors'])
(root/'docs/v104/native-validation.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
if not report['accepted']:raise SystemExit('Candidate did not meet acceptance gate')
