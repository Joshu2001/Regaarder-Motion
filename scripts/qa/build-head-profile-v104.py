import json
from pathlib import Path
root=Path(__file__).resolve().parents[2];r=json.loads((root/'review-v104/fit-result.json').read_text());data=json.loads((root/'review-v104/fit-input.json').read_text());vertices=json.loads((root/'review-v104/head-sculpt.json').read_text());h=2166136261
for i in data['indices']:h=((h^i)*16777619)&0xffffffff
profile={'shape':r['fitted'],'pitchOffsetTrack':r['pitchOffsetTrack'],'sculpt':{'topology':str(len(data['vertices'])//3)+':'+str(h),'vertices':vertices}}
(root/'dist/native3d-v97/head-fit-v104.js').write_text('''// Measured blue-head profile. Shape, sculpt and bone tracks remain editable.
import{sampleTrack}from'./scene.js';
export const headFitProfile='''+json.dumps(profile,separators=(',',':'))+''';
export function applyHeadFit(n){Object.assign(n.shape,headFitProfile.shape);n.sculpt??={};n.sculpt.head=structuredClone(headFitProfile.sculpt);const old=structuredClone(n.boneTracks.head),offsets=headFitProfile.pitchOffsetTrack.map(k=>({time:k.time,value:k.degrees,ease:'linear'}));n.boneTracks.head=Array.from({length:181},(_,i)=>{const t=i/30,v=sampleTrack(old,t,[0,0,0]);v[0]+=sampleTrack(offsets,t,0);return{time:t,value:v,ease:'linear'};});return n;}
''')
print('Built head profile:',len(vertices),'editable vertices')
