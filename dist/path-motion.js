// Reusable deterministic path strokes and whole-layer motion. All path points
// are normalized; lengths, widths and dash motion use 960 x 540 stage pixels.
export const pathMotionDefaults={pathPoints:[[.15,.65],[.37,.3],[.61,.62],[.84,.32]],pathShape:'curve',pathStyle:'dashed',pathAnimation:'draw-flow',pathColor:'#ece9df',pathWidth:2.5,pathDash:6,pathGap:7,pathSpeed:22,pathDirection:'forward',pathDrawStart:0,pathDrawDuration:1.6,pathLoop:false,pathLoopPause:.4,pathOpacity:1,pathArrow:'none',pathArrowSize:12,pathArrowSpacing:48,pathPulseHz:1,pathTraceFraction:.2,pathArch:32,pathTrimStart:0,pathTrimEnd:1};
export const objectMotionDefaults={objectMotionPreset:'none',objectMotionStart:0,objectMotionDuration:4,objectMotionLoop:true,objectMotionDirection:'forward',objectMotionDistance:30,objectMotionAmount:.12,objectMotionSpin:45,objectMotionFollowTangent:false};
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),fract=x=>((x%1)+1)%1,lerp=(a,b,q)=>a+(b-a)*q;
const geometries=new Map();
export function validatePathSettings(input={}){
 const f={...pathMotionDefaults,...input};
 if(!Array.isArray(f.pathPoints)||f.pathPoints.length<2||f.pathPoints.length>512||f.pathPoints.some(p=>!Array.isArray(p)||p.length!==2||p.some(v=>!Number.isFinite(v)||Math.abs(v)>20)))throw Error('A path needs 2–512 finite normalized XY points.');
 for(const k of ['pathWidth','pathDash','pathGap','pathSpeed','pathDrawStart','pathDrawDuration','pathOpacity','pathArrowSize','pathArrowSpacing','pathPulseHz','pathTraceFraction','pathArch','pathTrimStart','pathTrimEnd','pathLoopPause'])if(!Number.isFinite(f[k]))throw Error('Invalid path number: '+k);
 if(f.pathWidth<=0||f.pathDrawDuration<=0||f.pathDash<0||f.pathGap<0||f.pathArrowSpacing<=0||f.pathArrowSize<=0||f.pathTrimStart<0||f.pathTrimEnd>1||f.pathTrimStart>f.pathTrimEnd||f.pathOpacity<0||f.pathOpacity>1||f.pathTraceFraction<=0||f.pathTraceFraction>1||f.pathLoopPause<0)throw Error('Invalid path width, duration, spacing, opacity or trim.');
 if(typeof f.pathLoop!=='boolean')throw Error('Path loop must be Boolean.');if(!['line','polyline','curve','arched','rectangle','ellipse'].includes(f.pathShape)||!['solid','dashed','dotted','arrows'].includes(f.pathStyle)||!['none','draw','flow','draw-flow','pulse','trace'].includes(f.pathAnimation)||!['forward','reverse'].includes(f.pathDirection)||!['none','start','end','both'].includes(f.pathArrow))throw Error('Unknown path style or motion.');
 return f;
}
export function pathGeometry(input={}){
 const f=validatePathSettings(input),key=JSON.stringify([f.pathPoints,f.pathShape,f.pathArch]);if(geometries.has(key))return geometries.get(key);
 const points=f.pathPoints.map(([x,y])=>[x*960,y*540]),p=[];let closed=false;
 if(f.pathShape==='line')p.push(points[0],points.at(-1));
 else if(f.pathShape==='polyline')p.push(...points);
 else if(f.pathShape==='rectangle'){const [a,b]=[points[0],points.at(-1)];p.push(a,[b[0],a[1]],b,[a[0],b[1]],a);closed=true;}
 else if(f.pathShape==='ellipse'){const [a,b]=[points[0],points.at(-1)],cx=(a[0]+b[0])/2,cy=(a[1]+b[1])/2;for(let i=0;i<=240;i++){const q=i/240*Math.PI*2;p.push([cx+(b[0]-a[0])/2*Math.cos(q),cy+(b[1]-a[1])/2*Math.sin(q)]);}closed=true;}
 else for(let i=0;i<points.length-1;i++)for(let j=0;j<64;j++){
  const t=j/64,a=points[Math.max(0,i-1)],b=points[i],c=points[i+1],d=points[Math.min(points.length-1,i+2)];
  p.push(f.pathShape==='arched'?[lerp(b[0],c[0],t),lerp(b[1],c[1],t)-Math.sin(t*Math.PI)*f.pathArch]:[0,1].map(k=>.5*(2*b[k]+(-a[k]+c[k])*t+(2*a[k]-5*b[k]+4*c[k]-d[k])*t*t+(-a[k]+3*b[k]-3*c[k]+d[k])*t*t*t)));
 }
 if(['curve','arched'].includes(f.pathShape))p.push(points.at(-1));
 const lengths=[0];for(let i=1;i<p.length;i++)lengths.push(lengths.at(-1)+Math.hypot(p[i][0]-p[i-1][0],p[i][1]-p[i-1][1]));
 const result={points:p,lengths,length:lengths.at(-1),closed};if(geometries.size>=64)geometries.delete(geometries.keys().next().value);geometries.set(key,result);return result;
}
export function pointOnPath(g,progress){
 const distance=clamp(progress)*g.length;let lo=1,hi=g.lengths.length-1;while(lo<hi){const m=(lo+hi)>>1;if(g.lengths[m]<distance)lo=m+1;else hi=m;}
 const i=Math.max(1,lo),a=g.points[i-1],b=g.points[i],q=(distance-g.lengths[i-1])/Math.max(1e-9,g.lengths[i]-g.lengths[i-1]);return {x:lerp(a[0],b[0],q),y:lerp(a[1],b[1],q),angle:Math.atan2(b[1]-a[1],b[0]-a[0]),distance};
}
export function pathMotionState(time,input={}){
 const f=validatePathSettings(input);if(!Number.isFinite(time))throw Error('Path time must be finite.');
 const age=time-f.pathDrawStart,drawClock=f.pathLoop?fract(age/(f.pathDrawDuration+f.pathLoopPause))*(f.pathDrawDuration+f.pathLoopPause):age,
 reveal=age<0?0:['draw','draw-flow'].includes(f.pathAnimation)?clamp(drawClock/f.pathDrawDuration):1,
 direction=f.pathDirection==='reverse'?-1:1,offset=-age*f.pathSpeed*direction,
 flow=['flow','draw-flow','trace'].includes(f.pathAnimation),pulse=f.pathAnimation==='pulse'?.35+.65*(.5+.5*Math.sin(age*Math.PI*2*f.pathPulseHz)):1;
 return {age,reveal,offset:flow?offset:0,opacity:f.pathOpacity*pulse,active:age>=0,direction};
}
function segment(c,g,start,end){const a=pointOnPath(g,start),b=pointOnPath(g,end);c.beginPath();c.moveTo(a.x,a.y);for(let i=1;i<g.points.length;i++)if(g.lengths[i]>start*g.length&&g.lengths[i]<end*g.length)c.lineTo(...g.points[i]);c.lineTo(b.x,b.y);}
function arrow(c,p,size,reverse=false){c.save();c.translate(p.x,p.y);c.rotate(p.angle+(reverse?Math.PI:0));c.beginPath();c.moveTo(-size,-size*.55);c.lineTo(0,0);c.lineTo(-size,size*.55);c.stroke();c.restore();}
export function paintPathMotion(c,time,input={},options={}){
 const f=validatePathSettings(input),g=pathGeometry(f),s=pathMotionState(time,f);if(!s.active||!g.length)return s;
 const reveal=clamp(options.reveal??s.reveal);let start=f.pathTrimStart,end=f.pathTrimEnd;if(s.direction<0)start=end-(end-start)*reveal;else end=start+(end-start)*reveal;if(end<=start)return s;
 c.save();c.strokeStyle=f.pathColor;c.globalAlpha*=s.opacity;c.lineWidth=f.pathWidth;c.lineJoin='round';c.lineCap=f.pathStyle==='dotted'?'round':'butt';
 c.setLineDash(f.pathStyle==='dashed'?[Math.max(.01,f.pathDash),f.pathGap]:f.pathStyle==='dotted'?[.01,Math.max(.1,f.pathGap+f.pathWidth)]:[]);c.lineDashOffset=s.offset;
 let spans=[[start,end]];
 if(f.pathAnimation==='trace'){const head=fract(s.age*f.pathSpeed/Math.max(1,g.length))*(s.direction<0?-1:1),h=fract(head),tail=h-f.pathTraceFraction;spans=tail<0?[[start,Math.min(end,h)],[Math.max(start,1+tail),end]]:[[Math.max(start,tail),Math.min(end,h)]];}
 if(f.pathStyle!=='arrows')for(const [a,b]of spans)if(b>a){segment(c,g,a,b);c.stroke();}
 c.setLineDash([]);c.lineDashOffset=0;
 if(f.pathStyle==='arrows'){const spacing=f.pathArrowSpacing,phase=(((-s.offset)%spacing)+spacing)%spacing;for(let d=start*g.length+phase;d<end*g.length;d+=spacing)if(spans.some(([a,b])=>d>=a*g.length&&d<=b*g.length))arrow(c,pointOnPath(g,d/g.length),f.pathArrowSize,s.direction<0);}
 if(f.pathArrow==='start'||f.pathArrow==='both')arrow(c,pointOnPath(g,start),f.pathArrowSize,true);
 if(f.pathArrow==='end'||f.pathArrow==='both')arrow(c,pointOnPath(g,end),f.pathArrowSize);
 c.restore();return {...s,length:g.length,reveal};
}
export function sampleObjectMotion(time,input={}){
 const f={...objectMotionDefaults,...input};if(!Number.isFinite(time)||!Number.isFinite(f.objectMotionDuration)||f.objectMotionDuration<=0)throw Error('Object motion needs a finite time and positive duration.');
 for(const key of ['objectMotionStart','objectMotionDistance','objectMotionAmount','objectMotionSpin'])if(!Number.isFinite(f[key]))throw Error('Invalid object motion: '+key);if(typeof f.objectMotionLoop!=='boolean'||typeof f.objectMotionFollowTangent!=='boolean')throw Error('Object motion flags must be Boolean.');if(!['none','follow-path','float','pulse','spin','shake','fade'].includes(f.objectMotionPreset)||!['forward','reverse'].includes(f.objectMotionDirection))throw Error('Unknown object motion.');const age=Math.max(0,time-f.objectMotionStart),cycleTime=f.objectMotionLoop?age:Math.min(age,f.objectMotionDuration),raw=age/f.objectMotionDuration,q=f.objectMotionLoop?fract(raw):clamp(raw),u=f.objectMotionDirection==='reverse'?1-q:q,phase=cycleTime/f.objectMotionDuration*Math.PI*2,out={x:0,y:0,scale:1,rotation:0,opacity:1};
 if(time<f.objectMotionStart)return out;if(f.objectMotionPreset==='follow-path'){const p=pointOnPath(pathGeometry(f),u);out.x=p.x-480;out.y=p.y-270;if(f.objectMotionFollowTangent)out.rotation=p.angle*180/Math.PI+(f.objectMotionDirection==='reverse'?180:0);}
 else if(f.objectMotionPreset==='float')out.y=Math.sin(phase)*f.objectMotionDistance;
 else if(f.objectMotionPreset==='pulse')out.scale=Math.max(.01,1+Math.sin(phase)*f.objectMotionAmount);
 else if(f.objectMotionPreset==='spin')out.rotation=cycleTime*f.objectMotionSpin*(f.objectMotionDirection==='reverse'?-1:1);
 else if(f.objectMotionPreset==='shake'){out.x=(Math.sin(phase*17)+Math.sin(phase*29)*.35)*f.objectMotionDistance*.5;out.y=(Math.sin(phase*23)+Math.sin(phase*11)*.35)*f.objectMotionDistance*.5;}
 else if(f.objectMotionPreset==='fade')out.opacity=Math.sin(Math.PI*u);
 return out;
}
