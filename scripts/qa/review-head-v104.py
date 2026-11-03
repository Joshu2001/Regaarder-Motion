from PIL import Image,ImageDraw,ImageFont
import json,numpy as np,cv2
from pathlib import Path
root=Path(__file__).resolve().parents[2];r=root/'review-v104';out=Image.new('RGB',(1280,850),'#11151b');d=ImageDraw.Draw(out);font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',17);title=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',23)
d.text((18,12),'V104 — held-out head contours',font=title,fill='white');d.text((18,45),'Green: reference  |  Magenta: native 3D contour  |  Center-aligned; fixed torso scale',font=font,fill='#c6ccd6')
ns={'__file__':str(root/'scripts/qa/fit-head-v104.py')};exec((root/'scripts/qa/fit-head-v104.py').read_text().split('x0=np.array(')[0],ns);metrics=json.loads((root/'docs/v104/native-validation.json').read_text());native=json.loads((r/'native-heads.json').read_text())
for k,t in enumerate([.5,.7,2.6,3.]):
 f=next(f for f in ns['FRAMES'] if f['frame']['time']==t);ref=f['contour'];lo=ref.min(0);hi=ref.max(0);cx,cy=(lo+hi)/2;side=max(hi-lo)+20;box=(round(cx-side/2),round(cy-side/2),round(cx+side/2),round(cy+side/2));row=next(z for z in metrics['nativeMetrics'] if z['localTime']==t)
 for j,mode in enumerate(['before','after']):
  raw=np.array(next(x['points'] for x in native['rows'] if x['mode']==mode and x['time']==t));p=(raw-f['neck'])*f['scale']+f['anchor'];p+=(ref.min(0)+ref.max(0)-p.min(0)-p.max(0))/2
  im=f['image'].copy();cv2.polylines(im,[np.round(ref).astype('int32')],True,(0,255,0),1);cv2.polylines(im,[np.round(ns['contour'](p)).astype('int32')],True,(255,80,255),1);im=Image.fromarray(cv2.cvtColor(im,cv2.COLOR_BGR2RGB)).crop(box).resize((280,280));x=k*320+20;y=125+j*365;out.paste(im,(x,y));d.text((x,y-27),f'{mode.upper()}  source {900+t:.1f}s',font=font,fill='white');d.text((x,y+288),f"IoU {row[mode]['convexIoU']:.3f} | {row[mode]['supportMAE_px']:.2f} px",font=font,fill='#c6ccd6')
d.text((18,820),'Head-shape measurement only; camera placement, shading and hidden 3D surfaces are not scored.',font=font,fill='#c6ccd6');out.save(root.parent/'V104-head-fit-review.png')
