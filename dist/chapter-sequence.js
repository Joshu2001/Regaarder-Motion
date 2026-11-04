import {paintShoe} from './chapter-shoes.js';
import {sources,shots} from './chapter-data.js';
export {sources};
export const masterStart=1409, duration=205.632;
export const scenes=shots.map(([t,name])=>[t,name]);
const names=['titles','beam','particles','vortex','markers','chapterShoes'];
export const defaults={speed:1,reverse:false,direction:1,travel:1,particles:1,glow:1,exposure:1,cues:Object.fromEntries(scenes.map(([t,n])=>[n,t])),copy:{label:'CHAPTER 7',title:'THE FINAL CHAPTER',distress:'BUT REVIVING THEM WOULDN’T BE',easy:'EASY',robert:'ROBERT LOUIS-DREYFUS',zeitz:'JOCHEN ZEITZ',mcqueen:'ALEXANDER McQUEEN',profession:'FASHION DESIGNER',rihanna:'RIHANNA',adidasHQ:'ADIDAS HEADQUARTERS',pumaHQ:'PUMA HEADQUARTERS'},layers:Object.fromEntries([...Object.keys(sources),...names].map(id=>[id,{x:0,y:0,scale:1,rotation:0,opacity:1,blur:0,depth:1,visible:true}]))};
const clamp=x=>Math.min(1,Math.max(0,x));
const ease=x=>{const a=clamp(x);return a*a*(3-2*a)};
const turns=Math.PI/180;
const overlap=.64;
export function paint(ctx,raw,media,f=defaults){
 const time=Math.max(0,Math.min(duration,f.reverse?duration-raw*f.speed:raw*f.speed));
 const index=Math.max(0,shots.findLastIndex(([,name])=>time>=f.cues[name]));
 function layer(id,x,y,scale,rotation,alpha,draw,blend='source-over'){
  const l=f.layers[id];
  if(!l?.visible||alpha<=0)return;
  ctx.save();
  ctx.translate(x+l.x+(x-480)*(l.depth-1)*.17,y+l.y+(y-270)*(l.depth-1)*.17);
  ctx.rotate((rotation+l.rotation)*turns);
  ctx.scale(scale*l.scale,scale*l.scale);
  ctx.globalAlpha*=clamp(alpha*l.opacity);
  ctx.globalCompositeOperation=blend;
  if(l.blur)ctx.filter='blur('+l.blur+'px)';
  draw();
  ctx.restore();
 }
 function title(text,x,y,size,color,opacity){
  layer('titles',x,y,1,0,opacity,()=>{
   ctx.font='900 '+size+'px system-ui';ctx.textAlign='center';ctx.fillStyle=color;
   ctx.shadowColor='#000';ctx.shadowBlur=9;ctx.fillText(text,0,0,880);
  });
 }
 function light(x,y,r,color){
  const g=ctx.createRadialGradient(x,y,0,x,y,r);
  g.addColorStop(0,color);g.addColorStop(1,'transparent');
  ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);
 }
 function scene(i,entrance){
  const [start,name,items]=shots[i];
  const span=(shots[i+1]?.[0]??duration)-start;
  const editedSpan=(shots[i+1]?f.cues[shots[i+1][1]]:duration)-f.cues[name];
  const q=(time-f.cues[name])*span/editedSpan;
  const p=(q+overlap)/(span+overlap);
  const travel=f.direction*f.travel;
  ctx.save();
  if(entrance<1){
   const amount=ease(entrance);
   ctx.beginPath();
   if(name==='Nike vortex'){
    const radius=amount*650;
    for(let n=0;n<=96;n++){
     const a=n*Math.PI/48, r=radius*(1+.13*Math.sin(3*a+7*amount)+.07*Math.sin(7*a-4*amount));
     ctx.lineTo(480+Math.cos(a)*r,270+Math.sin(a)*r);
    }
   }else if(['Burning shoe','Predator','Yeezy'].includes(name)){
    ctx.rect(0,540*(1-amount),960,540*amount);
   }else if(['Sponsorship','Family archive','Peace football'].includes(name)){
    ctx.rect(travel<0?0:960*(1-amount),0,960*amount,540);
   }else{
    ctx.globalAlpha*=amount;
    ctx.rect(0,0,960,540);
   }
   ctx.clip();
  }
  ctx.fillStyle='#050508';ctx.fillRect(0,0,960,540);
  if(name==='Final rivalry'){
   const spin=ease((q-(span-1.0))/.95);
   ctx.translate(480,270);ctx.rotate(spin*4*travel);ctx.scale(1-.94*spin,1-.94*spin);ctx.translate(-480,-270);
  }
  for(let [id,x,y,w,h,dx,dy,z,delay,fade,r,blend] of items){
   let fashionOpacity=1;
   if(name==='McQueen and Rihanna'){
    const switchSide=ease((q-1.85)/.4), pull=ease((q-6.15)/2.4), arrival=ease((q-9.55)/1.2);
    if(id==='mcqueen'){
     fashionOpacity=(1-switchSide)+switchSide*pull;
     x=350-87*pull; y=310+26*pull; w*=1.41-.73*pull; h*=1.41-.73*pull;
    }
    if(id==='rihanna'){
     fashionOpacity=switchSide;
     x=545+164*pull; y=300+42*pull; w*=1-.33*pull; h*=1-.33*pull;
    }
    if(id==='zeitz'){fashionOpacity=arrival;y+=38*(1-arrival);}
    if(id==='fashionDisplay'){
     const close=1-pull;
     y+=close*124;w*=1+close*.72;h*=1+close*.72;
    }
   }
   if(name==='Red shoeboxes'){
    if(id==='fashionDisplay'||id==='store'){
     const push=1+.32*clamp(q/span);
     x=480+(x-480)*push;y=220+(y-220)*push;w*=push;h*=push;
    }
    if(id==='fire'){x+=105*Math.sin(q*15);y-=470*q;r+=12*Math.sin(q*19);w*=1+q*.8;}
   }
   const introShoe=name==='Final Chapter'&&id==='hotShoe';
   if(introShoe&&!media.chapterShoes){
    layer('chapterShoes',x,y,1,0,.55,()=>paintShoe(ctx,q,{id:'final-'+x,x:0,y:0,size:140,phase:x/137,yaw:r,yawSpeed:38*travel,depthTravel:1.4,driftX:32,driftY:26,brightness:.85}));
    continue;
   }
   const img=introShoe?media.chapterShoes:media[id];
   if(!img)continue;
   const video=Boolean(img.videoWidth);
   const iw=img.videoWidth||img.naturalWidth||img.width, ih=img.videoHeight||img.naturalHeight||img.height;
   if(!iw||!ih)continue;
   if(video){
    const seek=Math.max(0,Math.min(img.duration-.04,q));
    if(!img.seeking&&Math.abs(img.currentTime-seek)>.045)img.currentTime=seek;
   }
   const motion=delay?ease((q-delay)/Math.max(fade,span-delay)):p;
   const reveal=delay?ease((q-delay)/fade):1;
   const wobble=['adidasCard','pumaCard','kanye','yeezy'].includes(id)?Math.sin(q*3.1+x)*2.3:0;
   const fire=/Fire$|^fire$/.test(id);
   const flicker=fire?.83+.15*Math.sin(q*9+x):1;
   const grade=name==='Final Chapter'&&id==='clouds'?.36:
      name==='Final Chapter'&&id==='pumaRed'?.2:
      name.startsWith('Nike')?(id==='amber'?.24:id==='gold'?.32:.85):
      name==='Red shoeboxes'&&id==='fire'?1-ease(q/.42):
      name==='Jochen Zeitz'&&id!=='zeitz'?.22+.78*ease(q/2.4):1;
   const k=(w>=960&&h>=540?Math.max:Math.min)(w/iw,h/ih);
   const posY=y+dy*motion+wobble;
   const angle=r+(name==='Final Chapter'&&id==='hotShoe'?q*38*travel:wobble);
   layer(introShoe?'chapterShoes':id,x+dx*motion*travel,posY,Math.max(.05,1+z*motion*f.travel),angle,reveal*flicker*grade*fashionOpacity,()=>{
    if(name==='Financial distress'&&['adidasCard','pumaCard'].includes(id)){
     const stripes=24, step=iw/stripes, angle=q*2.4+(id==='pumaCard'?1.2:0);
     for(let n=0;n<stripes;n++){
      const bend=Math.max(0,n/stripes-.53);
      const lift=bend*bend*Math.sin(angle+n*.17)*94;
      ctx.drawImage(img,n*step,0,step,ih,(-iw/2+n*step)*k,-ih*k/2+lift,step*k+.6,ih*k*(1-.22*bend));
     }
    }else ctx.drawImage(img,-iw*k/2,-ih*k/2,iw*k,ih*k);
   },blend);
  }
  if(name==='Final Chapter'){
   const dim=1-ease((q-6.7)/1.8);
   title(f.copy.label,480,237-22*(1-ease(q/1.2)),23,'#fff5da',dim*ease(q/.8));
   title(f.copy.title,480,298+52*(1-ease(q/1.5)),57,'#ffdc88',dim*ease(q/.85));
   layer('beam',480,270,1,0,ease((q-6)/.6)*dim*f.glow,()=>light(0,0,53,'#ffe7ac90'),'screen');
   ctx.fillStyle='rgba(0,0,0,'+(1-dim)+')';ctx.fillRect(0,0,960,540);
  }
  if(name==='Financial distress'){
   const a=ease((q-10)/1.3);
   title(f.copy.distress,510,414,37,'#fff',a);
   title(f.copy.easy,510,470,52,'#ff3448',a);
  }
  if(name==='Louis-Dreyfus'){
   const [first,...rest]=f.copy.robert.split(' ');
   const opacity=1-ease((q-4.8)/1.3);
   title(first,330-115*p,303,61,'#fff',opacity);
   title(rest.join(' '),330-115*p,331,22,'#fff',opacity);
  }
  if(name==='Jochen Zeitz')title(f.copy.zeitz,240,388,37,'#fff',ease((q-2)/1.5));
  if(name==='McQueen and Rihanna'){
   title(f.copy.mcqueen,677,232,30,'#fff',ease(q/.8)*(1-ease((q-1.65)/.45)));
   title(f.copy.profession,677,259,17,'#ddd',ease((q-.55)/.55)*(1-ease((q-1.65)/.45)));
   title(f.copy.rihanna,226,335,35,'#fff',ease((q-2.2)/.8)*(1-ease((q-5.7)/.8)));
  }
  if(name==='Headquarters'){
   for(const [x,y,d,color,label] of [[410,219,0,'#2c57ff',f.copy.adidasHQ],[516,409,3.2,'#ff2748',f.copy.pumaHQ]]){
    const a=ease((q-d)/1.2), size=1-.29*p;
    layer('markers',480+(x-480)*size,270+(y-270)*size+61*p,size,0,a,()=>{
     ctx.beginPath();ctx.arc(0,0,27,-Math.PI/2,Math.PI*2*a-Math.PI/2);ctx.strokeStyle=color;ctx.lineWidth=7;ctx.stroke();
     ctx.fillStyle='#fff';ctx.font='bold 21px system-ui';ctx.fillText(label,35,5);
    });
   }
  }
  if(['Nike vortex','Nike return','Final rivalry'].includes(name)){
   const strength=name==='Final rivalry'?ease((q-(span-1.1))/.85):1-ease((q-.3)/2.4);
   layer('vortex',480,270,1,0,strength*f.glow,()=>light(0,0,305,'#fff0b78a'),'screen');
   layer('particles',480,270,1,0,strength*f.particles,()=>{
    for(let n=1;n<=72;n++){
     const theta=n*2.39996+q*.19, radius=(n*71+q*92)%480;
     ctx.fillStyle=n%3?'#fbd68c9c':'#d4edffb0';
     ctx.fillRect(Math.cos(theta)*radius,Math.sin(theta)*radius*.62,2,1.4);
    }
   },'screen');
  }
  ctx.restore();
 }
 ctx.save();ctx.fillStyle='#050508';ctx.fillRect(0,0,960,540);
 const clipBoundary=(i)=>['Usain Bolt','Red shoeboxes','McQueen and Rihanna','Peace portraits','Headquarters','End'].includes(shots[i]?.[1]);
 if(index>0&&!clipBoundary(index)&&time-f.cues[shots[index][1]]<overlap/2){
  scene(index-1,1);scene(index,(time-f.cues[shots[index][1]])/overlap+.5);
 }else{
  scene(index,1);
  const next=shots[index+1];
  if(next&&!clipBoundary(index+1)&&time>f.cues[next[1]]-overlap/2)scene(index+1,(time-f.cues[next[1]])/overlap+.5);
 }
 if(f.exposure<1){ctx.fillStyle='rgba(0,0,0,'+(1-f.exposure)+')';ctx.fillRect(0,0,960,540)}
 ctx.restore();
}
