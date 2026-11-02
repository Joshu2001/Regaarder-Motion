// V67: separately editable money, street and shoulder-covered room lead-in.
// Stage coordinates are 960 x 540. Artwork is illustrative, not archival media.
export const commerceBridgeDefaults={
 bridgeEnabled:true,bridgeDuration:10.5,bridgeCashDuration:2.7,
 bridgeRoomRevealStart:5.6,bridgeRoomRevealEnd:7.1,
 bridgeCashCount:45,bridgeCashSeed:67,bridgeCashSize:250,
 bridgeCashTimeScale:1.3,bridgeCashLead:.2,bridgeCashGravity:300,bridgeCashSpin:1.2,bridgeCashBlur:2.4,
 bridgeStreetPush:.055,bridgeSubjectX:580,bridgeSubjectY:85,
 bridgeSubjectWidth:480,bridgeSubjectInitialScale:1.95,
 bridgeShoulderWidth:1420,bridgeShoulderY:-440,bridgeShoulderBlur:5,
 bridgeRoomPan:140,bridgeRoomStartScale:1.14,bridgeLayerEdits:{},
 bridgeSourceBindings:{},bridgeCashDirection:'down'
};
export const commerceBridgeSources={bridgeStreet:'commerce-street-v67.png',bridgeSubject:'commerce-suited-man-v67.png',bridgeShoulder:'commerce-shoulder-v67.png',bridgeCash:'commerce-money-v67.png'};
export const commerceBridgeStages=[['bridge-cash',0,2.7],['bridge-street-exchange',2.7,5.6],['bridge-shoulder-room',5.6,7.1],['bridge-room-lead-in',7.1,10.5]].map(([id,a,b])=>({id,from:111.727+a,to:111.727+b,duration:b-a}));
const clamp=x=>Math.max(0,Math.min(1,x)),lerp=(a,b,q)=>a+(b-a)*q;
export const bridgeEase=x=>{x=clamp(x);return x*x*(3-2*x)};
const hash=(n,seed)=>{const x=Math.sin(n*127.1+seed*311.7)*43758.5453123;return x-Math.floor(x)};
export function bridgeState(t,input={}){
 const f={...commerceBridgeDefaults,...input};
 if(!Number.isFinite(t)||!(f.bridgeDuration>0)||!(f.bridgeRoomRevealEnd>f.bridgeRoomRevealStart)||!(f.bridgeRoomRevealStart>f.bridgeCashDuration))throw Error('Invalid commerce bridge timeline');
 return {time:t,active:t>=0&&t<f.bridgeDuration,cash:t<f.bridgeCashDuration,street:bridgeEase((t-f.bridgeCashDuration)/(f.bridgeRoomRevealStart-f.bridgeCashDuration)),reveal:bridgeEase((t-f.bridgeRoomRevealStart)/(f.bridgeRoomRevealEnd-f.bridgeRoomRevealStart)),room:bridgeEase((t-f.bridgeRoomRevealEnd)/(f.bridgeDuration-f.bridgeRoomRevealEnd))};
}
export function bridgeCashPose(i,t,input={}){
 const f={...commerceBridgeDefaults,...input},r=n=>hash(i*13+n,f.bridgeCashSeed),near=i%5===0,
 delay=r(1)*.72-.28,a=t*f.bridgeCashTimeScale+f.bridgeCashLead-delay,z=near?1.65+r(2)*.8:.44+r(2)*1.05,
 speed=125+r(3)*170,initialY=-90-r(4)*450,initialX=-80+r(5)*1120;
 return {id:i,x:initialX+(r(6)-.5)*180*a,y:Math.min(initialY+speed*a+f.bridgeCashGravity*a*a*.5,520+r(11)*100),
 width:f.bridgeCashSize*z,rotation:r(7)*6.28+(r(8)-.5)*f.bridgeCashSpin*a,
 tilt:Math.max(.25,Math.abs(Math.cos(r(9)*6.28+a*(r(10)-.5)*2))),
 blur:near?f.bridgeCashBlur*z:.25,depth:z,visible:a>=0&&a<4,flip:i%2===0};
}
function media(images,f,key){return images[f.bridgeSourceBindings?.[key]||f.historySourceBindings?.[key]||key];}
function draw(c,im,key,rect,f,options={}){
 if(!(im?.naturalWidth||im?.width))return;
 const e=f.bridgeLayerEdits?.[key]||{},[x,y,w,h]=rect,sc=e.scale??1;
 c.save();c.globalAlpha*=e.opacity??1;c.filter=`brightness(${e.light??1}) blur(${(options.blur||0)+(e.blur||0)}px)`;
 c.translate(x+w/2+(e.x||0),y+h/2+(e.y||0));c.rotate((e.rotation||0)*Math.PI/180+(options.rotation||0));
 c.scale(sc*(options.flip?-1:1),sc*(options.tilt??1));c.drawImage(im,-w/2,-h/2,w,h);c.restore();
}
export function paintBridgeCash(c,t,images,input={}){
 const f={...commerceBridgeDefaults,...input},im=media(images,f,'bridgeCash'),iw=im?.naturalWidth||im?.width,ih=im?.naturalHeight||im?.height;
 if(!iw)return;
 const poses=Array.from({length:Math.min(100,Math.max(0,Math.round(f.bridgeCashCount)))},(_,i)=>bridgeCashPose(i,t,f)).sort((a,b)=>a.depth-b.depth);
 for(const p of poses){if(!p.visible||p.y>900)continue;const h=p.width*ih/iw;
  // Small deterministic temporal samples soften fast motion without a blurred baked plate.
  const taps=p.depth>1.4?3:1;
  for(let n=taps-1;n>=0;n--){const lag=n*.012,old=bridgeCashPose(p.id,Math.max(0,t-lag),f);c.save();c.globalAlpha=taps===1?1:n===0?.7:.15;draw(c,im,'bridgeCash',[old.x-old.width/2,old.y-h/2,old.width,h],f,{rotation:old.rotation,tilt:old.tilt,blur:old.blur,flip:old.flip});c.restore();}
 }
}
export function paintBridgeStreet(c,t,images,input={}){
 const f={...commerceBridgeDefaults,...input},s=bridgeState(t,f),im=media(images,f,'bridgeStreet'),z=1+f.bridgeStreetPush*s.street;
 c.fillStyle='#575143';c.fillRect(0,0,960,540);
 draw(c,im,'bridgeStreet',[480-480*z-9*s.street,270-270*z,960*z,540*z],f,{blur:.7});
 const person=media(images,f,'bridgeSubject'),w=f.bridgeSubjectWidth*lerp(f.bridgeSubjectInitialScale,1,s.street),h=w*(person?.naturalHeight||person?.height||1)/(person?.naturalWidth||person?.width||1),x=f.bridgeSubjectX+22*s.street;
 draw(c,person,'bridgeSubject',[x-w/2,f.bridgeSubjectY-42*(1-s.street),w,h],f);
}
export function paintCommerceBridge(c,t,images,input={},paintDiagram=()=>{},paintRoom=()=>{}){
 const f={...commerceBridgeDefaults,...input},s=bridgeState(t,f);if(!f.bridgeEnabled||t<0)return false;
 if(s.cash){paintDiagram(c);paintBridgeCash(c,t,images,f);return s;}
 // No whole-frame dissolve: the shoulder is opaque across the moving scene boundary.
 const reveal=s.reveal,edge=lerp(-55,1460,reveal);
 if(reveal<1){c.save();if(reveal>0){c.beginPath();c.rect(edge,0,2000,540);c.clip();}paintBridgeStreet(c,t,images,f);c.restore();}
 if(reveal>0){c.save();c.beginPath();c.rect(0,0,Math.min(960,Math.max(0,edge)),540);c.clip();
  const remaining=1-s.room,z=1+(f.bridgeRoomStartScale-1)*remaining;
  c.translate(480-f.bridgeRoomPan*remaining,270);c.scale(z,z);c.translate(-480,-270);paintRoom(c,s.room);c.restore();}
 if(reveal<1){const im=media(images,f,'bridgeShoulder'),w=f.bridgeShoulderWidth,h=w*(im?.naturalHeight||im?.height||1)/(im?.naturalWidth||im?.width||1),center=reveal>0?edge:-150+95*s.street;
  draw(c,im,'bridgeShoulder',[center-w/2,f.bridgeShoulderY,w,h],f,{blur:f.bridgeShoulderBlur});}
 return s;
}
export function mountBridgeControls(host,params,{save=()=>{},replace=()=>{},preview=()=>{}}={}){
 const box=document.createElement('details');box.open=true;box.innerHTML='<summary>Missing passage · money → street → room</summary>';host.append(box);
 const button=(label,action)=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=action;box.append(b);};
 const field=(parent,key,label,target,min,max,step)=>{const row=document.createElement('label'),input=document.createElement('input');row.textContent=label;input.type='number';input.value=target[key]??commerceBridgeDefaults[key]??0;input.min=min;input.max=max;input.step=step;input.onchange=()=>{const n=Number(input.value);if(Number.isFinite(n)){target[key]=Math.max(min,Math.min(max,n));save();}};row.append(input);parent.append(row);};
 for(const [at,name]of [[.8,'Money burst'],[3.8,'Street exchange'],[6.3,'Shoulder passage'],[8.8,'Room entrance']])button('Preview '+name,()=>preview(at));
 for(const [key,label]of Object.entries({bridgeStreet:'Street',bridgeSubject:'Suited man',bridgeShoulder:'Foreground shoulder',bridgeCash:'Money bundle'})){
  const d=document.createElement('details');d.innerHTML='<summary>'+label+' · replace, move, resize</summary>';box.append(d);const b=document.createElement('button');b.type='button';b.textContent='Replace '+label+'…';b.onclick=()=>replace(key);d.append(b);
  params.bridgeLayerEdits??={};const e=params.bridgeLayerEdits[key]??={};for(const [k,l,min,max,step]of [['x','Left / right (px)',-2000,2000,1],['y','Up / down (px)',-2000,2000,1],['scale','Size (×)',.05,10,.01],['opacity','Visibility (0–1)',0,1,.01]]){if(e[k]===undefined)e[k]=['scale','opacity'].includes(k)?1:0;field(d,k,l,e,min,max,step);}
 }
 const advanced=document.createElement('details');advanced.innerHTML='<summary>Advanced motion, focus and timing</summary>';box.append(advanced);
 for(const [k,v]of Object.entries(commerceBridgeDefaults))if(typeof v==='number')field(advanced,k,k.replace('bridge','').replace(/([a-z])([A-Z])/g,'$1 $2'),params,/Gravity|X|Y/.test(k)?-2000:0,/Count/.test(k)?100:3000,.01);
 return box;
}
