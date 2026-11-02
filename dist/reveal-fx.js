import {paintCloudAtmosphere} from './living-sky.js?v=motion-v70';
import {syncMediaClip} from './media-clip.js?v=motion-v70';
const clamp=q=>Math.max(0,Math.min(1,q));let mediaPool={},bank;
export function setEffectMedia(media){mediaPool=media||{};}
export function effectMedia(slot){return mediaPool[slot];}
export function fireRects([x,y,w,h],iw,ih){const sw=iw*.78,sh=ih*.665,fw=h*sw/sh,count=Math.max(1,Math.ceil(w/fw));return Array.from({length:count},(_,i)=>[x+i*(w/count)-fw*.08,y,fw,h]);}
export function paintFire(c,time,rect,strength=.65,media=null,options={}){
 media||=mediaPool.warFire;if(media?.duration)media=syncMediaClip(media,time,{loop:true,playing:globalThis.motionAtelierPlaying===true,end:media.duration});if(media?._offlineFrame)media=media._offlineFrame(time);
 const iw=media?.videoWidth||media?.naturalWidth||media?.width,ih=media?.videoHeight||media?.naturalHeight||media?.height;if(!iw||!ih)return;
 const [x,y,w,h]=rect;c.save();c.beginPath();c.rect(x,y,w,h);c.clip();c.globalCompositeOperation='screen';c.globalAlpha*=strength;
 for(const [i,r]of fireRects(rect,iw,ih).entries()){c.save();if(i%2){c.translate(r[0]+r[2],0);c.scale(-1,1);c.drawImage(media,iw*.13,ih*.12,iw*.78,ih*.665,0,r[1],r[2],r[3]);}else c.drawImage(media,iw*.13,ih*.12,iw*.78,ih*.665,...r);c.restore();}c.restore();
 const glow=options.glow??.12;if(glow>0){c.save();c.globalCompositeOperation='screen';c.globalAlpha*=strength*glow*(.85+.1*Math.sin(time*7.7)+.05*Math.sin(time*13.3));const g=c.createRadialGradient(x+w*.5,y+h,0,x+w*.5,y+h,w*.6);g.addColorStop(0,'#ff9c42');g.addColorStop(1,'#ff9c4200');c.fillStyle=g;c.fillRect(x,y-h*.5,w,h*1.5);c.restore();}
}
function wave(x){return Math.sin(x*.009)*18+Math.sin(x*.023+1.2)*12+Math.sin(x*.047+.4)*5;}
export function cloudTravelProgress(fraction,direction='up'){const horizontal=['left','right'].includes(direction),a=horizontal?1160:740,b=horizontal?1100:900,d=(a+b)*clamp(fraction);return d<=a?d/a:1+(d-a)/b;}
export function cloudBankY(progress){return progress<=1?600-740*clamp(progress):-140-900*clamp(progress-1);}
export function paintCloudVeil(c,time,progress,{opacity=1,texture=mediaPool.transitionClouds,brightness=1,drift=12,scale=1,direction='up',evolution=0,wind=12}={}){
 const iw=texture?.naturalWidth||texture?.width,ih=texture?.naturalHeight||texture?.height;if(!iw||!ih||progress<=0||progress>=2)return;
 bank||=document.createElement('canvas');bank.width=1100;bank.height=900;const b=bank.getContext('2d');b.clearRect(0,0,1100,900);b.save();b.beginPath();if(direction==='left'||direction==='right'){b.moveTo(70+wave(0),-20);for(let y=0;y<=920;y+=16)b.lineTo(70+wave(y+time*drift),y);b.lineTo(1020,920);for(let y=920;y>=-20;y-=16)b.lineTo(1020+wave(y+time*drift*.7),y);}else{b.moveTo(-20,70+wave(0));for(let x=0;x<=1120;x+=16)b.lineTo(x,70+wave(x+time*drift));b.lineTo(1120,820);for(let x=1120;x>=-20;x-=16)b.lineTo(x,820+wave(x+time*drift*.7));}b.closePath();b.clip();
 b.filter=`brightness(${Math.max(.05,brightness)})`;const k=Math.max(1100/iw,900/ih)*Math.max(1,scale),w=iw*k,h=ih*k,dx=((time*drift)%w+w)%w;for(let i=-1;i<=1;i++)b.drawImage(texture,i*w-dx,(900-h)/2,w,h);b.globalAlpha=.22;b.globalCompositeOperation='soft-light';for(let i=-1;i<=1;i++)b.drawImage(texture,i*w+dx*.45-w,30,w,h);if(evolution>0){b.save();b.scale(1100/960,900/540);paintCloudAtmosphere(b,time,{skyCloudColor:'#eeece8',skyEvolution:evolution,skyWind:wind,skyLayers:2,skyOpacity:.35,skyDensity:.62});b.restore();}b.restore();
 c.save();c.globalAlpha*=opacity;c.filter='blur(5px)';const y=cloudBankY(progress),horizontal=direction==='left'||direction==='right',x=progress<=1?1020-1160*clamp(progress):-140-1100*clamp(progress-1);c.drawImage(bank,horizontal?(direction==='right'?960-x-1100:x):-70,horizontal?-180:direction==='down'?540-y-900:y);c.restore();
}
export function revealProgress(age,duration=3){return clamp(age/Math.max(.1,duration));}
