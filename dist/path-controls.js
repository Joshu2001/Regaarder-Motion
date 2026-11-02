import {pathMotionDefaults,objectMotionDefaults,paintPathMotion,pathGeometry,sampleObjectMotion,validatePathSettings} from './path-motion.js?v=motion-v70';
export function mountPathControls(host,params,{save=()=>{},title='Animated line / shape',open=false,geometryOnly=false}={}){
 const box=document.createElement('details');box.open=open;const summary=document.createElement('summary');summary.textContent=title;box.append(summary);host.append(box);
 for(const [k,v]of Object.entries(pathMotionDefaults))if(params[k]===undefined)params[k]=structuredClone(v);
 const row=(label,node)=>{const l=document.createElement('label');l.textContent=label;l.append(node);box.append(l);};
 const select=(key,label,choices)=>{if(geometryOnly&&key!=='pathShape')return;const el=document.createElement('select');for(const [v,text]of choices){const o=document.createElement('option');o.value=v;o.textContent=text;el.append(o);}el.value=params[key];el.onchange=()=>{params[key]=el.value;save();paint();};row(label,el);return el;};
 select('pathStyle','Line style',[['solid','Solid'],['dashed','Dashes'],['dotted','Dots'],['arrows','Travelling arrows']]);
 select('pathAnimation','Animation',[['draw-flow','Draw on + travel'],['draw','Draw on'],['flow','Travel continuously'],['pulse','Pulse'],['trace','Moving trace'],['none','Still']]);
 select('pathShape','Path / shape',[['line','Straight segment'],['polyline','Connected segments'],['curve','Smooth curve'],['arched','Arched connectors'],['rectangle','Rectangle outline'],['ellipse','Ellipse outline']]);
 select('pathDirection','Direction',[['forward','Forward'],['reverse','Reverse']]);
 select('pathArrow','Arrowheads',[['none','None'],['end','End'],['start','Start'],['both','Both ends']]);
 const number=(parent,key,label,min,max,step)=>{if(geometryOnly&&key!=='pathArch')return;const l=document.createElement('label');l.textContent=label;const e=document.createElement('input');e.type='number';Object.assign(e,{min,max,step,value:params[key]});e.onchange=()=>{const v=Number(e.value);if(!Number.isFinite(v))return;const previous=params[key];params[key]=Math.max(min,Math.min(max,v));try{validatePathSettings(params);}catch(error){params[key]=previous;e.value=previous;status.textContent=error.message;return;}e.value=params[key];save();paint();};l.append(e);parent.append(l);};
 const color=document.createElement('input');color.type='color';color.value=params.pathColor;color.oninput=()=>{params.pathColor=color.value;save();paint();};if(!geometryOnly)row('Color',color);
 number(box,'pathWidth','Thickness (px)',.1,100,.1);number(box,'pathSpeed','Travel speed (px/s)',0,2000,1);number(box,'pathDrawDuration','Draw duration (s)',.05,600,.05);
 const canvas=document.createElement('canvas');canvas.width=720;canvas.height=405;canvas.style.cssText='width:100%;aspect-ratio:16/9;display:block;background:#131720;touch-action:none;cursor:crosshair;border-radius:8px';canvas.setAttribute('aria-label','Edit path: drag handles, or enable Add points and click');box.append(canvas);
 const help=document.createElement('p');help.textContent='Drag handles to reshape the path. Straight, rectangle and ellipse use the first and last handles.';box.append(help);
 const action=document.createElement('select');for(const [v,text]of [['move','Move handles'],['add','Add points']]){const o=document.createElement('option');o.value=v;o.textContent=text;action.append(o);}row('Edit path',action);
 const tools=document.createElement('div');box.append(tools);const button=(name,fn)=>{const b=document.createElement('button');b.type='button';b.textContent=name;b.onclick=fn;tools.append(b);};
 let selected=-1,dragging=false,previewTime=0,live=false,last=0;
 if(!geometryOnly)button('Play / pause preview',()=>{live=!live;last=0;if(live)requestAnimationFrame(tick);});
 button('Remove selected point',()=>{if(selected>=0&&params.pathPoints.length>2){params.pathPoints.splice(selected,1);selected=-1;save();paint();}});
 button('Reset path',()=>{params.pathPoints=structuredClone(pathMotionDefaults.pathPoints);selected=-1;save();paint();});
 const scrub=document.createElement('input');scrub.type='range';scrub.min=0;scrub.max=12;scrub.step=.01;scrub.value=0;scrub.oninput=()=>{live=false;previewTime=Number(scrub.value);paint();};if(!geometryOnly)row('Preview time (s)',scrub);
 const advanced=document.createElement('details');advanced.innerHTML='<summary>Advanced · spacing, arrows, opacity, trim and loop</summary>';box.append(advanced);
 for(const [k,label,min,max,step]of [['pathDash','Dash length (px)',.01,300,.1],['pathGap','Gap (px)',0,300,.1],['pathArrowSize','Arrowhead size (px)',1,100,.1],['pathArrowSpacing','Arrow spacing (px)',1,500,1],['pathDrawStart','Start delay (s)',0,600,.05],['pathOpacity','Opacity',0,1,.01],['pathPulseHz','Pulse cycles / second',0,20,.05],['pathTraceFraction','Moving trace fraction',.01,1,.01],['pathArch','Arch height (px)',-300,300,1],['pathLoopPause','Loop hold (s)',0,20,.05],['pathTrimStart','Trim start (0–1)',0,1,.01],['pathTrimEnd','Trim end (0–1)',0,1,.01]])number(advanced,k,label,min,max,step);
 const loop=document.createElement('input');loop.type='checkbox';loop.checked=params.pathLoop;loop.onchange=()=>{params.pathLoop=loop.checked;save();paint();};const lab=document.createElement('label');lab.textContent='Repeat draw-on';lab.append(loop);if(!geometryOnly)advanced.append(lab);
 const json=document.createElement('textarea');json.value=JSON.stringify(params.pathPoints);json.setAttribute('aria-label','Normalized path points JSON');advanced.append(json);
 const apply=document.createElement('button');apply.type='button';apply.textContent='Apply points JSON';apply.onclick=()=>{try{const next=JSON.parse(json.value);validatePathSettings({...params,pathPoints:next});params.pathPoints=next;save();paint();}catch(e){status.textContent=e.message;}};advanced.append(apply);
 const status=document.createElement('p');box.append(status);
 const xy=e=>{const r=canvas.getBoundingClientRect();return [Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))];};
 canvas.onpointerdown=e=>{const p=xy(e);selected=params.pathPoints.findIndex(q=>Math.hypot((q[0]-p[0])*720,(q[1]-p[1])*405)<15);if(action.value==='add'&&selected<0&&params.pathPoints.length<512){params.pathPoints.push(p);selected=params.pathPoints.length-1;save();}dragging=selected>=0;if(dragging)canvas.setPointerCapture?.(e.pointerId);paint();};
 canvas.onpointermove=e=>{if(!dragging)return;params.pathPoints[selected]=xy(e);save();paint();};canvas.onpointerup=canvas.onpointercancel=()=>{dragging=false;};
 function paint(){try{const c=canvas.getContext('2d');c.setTransform(.75,0,0,.75,0,0);c.clearRect(0,0,960,540);paintPathMotion(c,previewTime,geometryOnly?{...params,pathAnimation:'none'}:params);for(let i=0;i<params.pathPoints.length;i++){const [x,y]=params.pathPoints[i];c.fillStyle=i===selected?'#f5cb78':'#a4b7df';c.beginPath();c.arc(x*960,y*540,7,0,Math.PI*2);c.fill();}json.value=JSON.stringify(params.pathPoints);status.textContent='Preview '+previewTime.toFixed(2)+'s · '+Math.round(pathGeometry(params).length)+' px';}catch(e){status.textContent=e.message;}}
 function tick(now){if(!live||!box.isConnected)return;previewTime=(previewTime+(last?(now-last)/1000:0))%12;last=now;scrub.value=previewTime;paint();requestAnimationFrame(tick);}
 paint();return box;
}
export function mountObjectMotionControls(host,settings,{save=()=>{}}={}){
 const box=document.createElement('details');box.innerHTML='<summary>Animate this object / shape</summary>';host.append(box);
 for(const [k,v]of Object.entries(objectMotionDefaults))if(settings[k]===undefined)settings[k]=v;
 const preset=document.createElement('select');for(const [value,text]of [['none','None'],['follow-path','Follow a path'],['float','Float'],['pulse','Pulse size'],['spin','Spin'],['shake','Shake'],['fade','Fade in / out']]){const o=document.createElement('option');o.value=value;o.textContent=text;preset.append(o);}preset.value=settings.objectMotionPreset;box.append(preset);
 const body=document.createElement('div');box.append(body);preset.onchange=()=>{settings.objectMotionPreset=preset.value;save();draw();};
 function draw(){body.replaceChildren();if(settings.objectMotionPreset==='none')return;
  const field=(key,label,min,max,step)=>{const l=document.createElement('label');l.textContent=label;const i=document.createElement('input');Object.assign(i,{type:'number',min,max,step,value:settings[key]});i.onchange=()=>{const n=Number(i.value);if(Number.isFinite(n)){settings[key]=Math.max(min,Math.min(max,n));save();}};l.append(i);body.append(l);};
  field('objectMotionStart','Start delay (s)',0,600,.05);field('objectMotionDuration','Cycle / travel duration (s)',.05,600,.05);
  if(['float','shake'].includes(settings.objectMotionPreset))field('objectMotionDistance','Distance (px)',0,1000,1);
  if(settings.objectMotionPreset==='pulse')field('objectMotionAmount','Scale amount (fraction)',0,.95,.01);
  if(settings.objectMotionPreset==='spin')field('objectMotionSpin','Spin (degrees / s)',-720,720,1);
  const loop=document.createElement('input');loop.type='checkbox';loop.checked=settings.objectMotionLoop;loop.onchange=()=>{settings.objectMotionLoop=loop.checked;save();};const lab=document.createElement('label');lab.textContent='Loop motion';lab.append(loop);body.append(lab);
  const direction=document.createElement('select');for(const value of ['forward','reverse']){const o=document.createElement('option');o.value=value;o.textContent=value;direction.append(o);}direction.value=settings.objectMotionDirection;direction.onchange=()=>{settings.objectMotionDirection=direction.value;save();};body.append(direction);
  if(settings.objectMotionPreset==='follow-path'){const tangent=document.createElement('input');tangent.type='checkbox';tangent.checked=settings.objectMotionFollowTangent;tangent.onchange=()=>{settings.objectMotionFollowTangent=tangent.checked;save();};const l=document.createElement('label');l.textContent='Orient object along the path';l.append(tangent);body.append(l);mountPathControls(body,settings,{save,title:'Edit travel path',geometryOnly:true});}
 }
 draw();return box;
}
export function mountShoePathControls(host,settings,{save=()=>{}}={}){
 const map={pathStyle:'expansionRouteStyle',pathAnimation:'expansionRouteAnimation',pathSpeed:'expansionRouteSpeed',pathDash:'expansionRouteDash',pathGap:'expansionRouteGap',pathWidth:'expansionRouteWidth',pathColor:'expansionRouteColor',pathDirection:'expansionRouteDirection',pathArrow:'expansionRouteArrow',pathShape:'expansionRouteShape',pathArch:'expansionRouteArch',pathArrowSize:'expansionRouteArrowSize',pathArrowSpacing:'expansionRouteArrowSpacing',pathDrawDuration:'expansionRouteDrawTime',pathDrawStart:'expansionRouteDrawStart',pathOpacity:'expansionRouteOpacity',pathPulseHz:'expansionRoutePulseHz',pathTraceFraction:'expansionRouteTraceFraction',pathTrimStart:'expansionRouteTrimStart',pathTrimEnd:'expansionRouteTrimEnd',pathLoop:'expansionRouteLoop',pathLoopPause:'expansionRouteLoopPause'};
 const p=structuredClone(pathMotionDefaults);p.pathPoints=(settings.expansionRoutePoints||[[160,340],[355,215],[565,325],[780,205]]).map(([x,y])=>[x/960,y/540]);p.pathShape='arched';for(const [key,target]of Object.entries(map))if(settings[target]!==undefined)p[key]=settings[target];
 return mountPathControls(host,p,{title:'Shoe connectors · line style and animation',save:()=>{settings.expansionRoutePoints=p.pathPoints.map(([x,y])=>[x*960,y*540]);for(const [key,target]of Object.entries(map))settings[target]=p[key];save();}});
}
