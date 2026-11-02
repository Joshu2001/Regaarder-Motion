import {drawAssetMedia} from './effect-library.js?v=motion-v70';
import {mediaClipDefaults,syncMediaClip,mediaReady} from './media-clip.js?v=motion-v70';
import {createLayeredGesture} from './gesture-layers.js?v=motion-v70';
import {createGestureScene} from './gesture-scene.js?v=motion-v70';
import {precisionDefaults} from './precision-motion.js?v=motion-v70';
import {createPrecisionVillage} from './precision-scene.js?v=motion-v70';
import {villageDefaults,villageState} from './village-motion.js?v=motion-v70';
import {nurseryEase} from './nursery-motion.js?v=motion-v70';
import {createNurseryScene} from './nursery-scene.js?v=motion-v70';
import {recordSceneAsset,alphaFor} from './scene-geometry.js?v=motion-v70';
const clamp=q=>Math.max(0,Math.min(1,q));
function plate(c,im,scale=1,x=0,y=0,f={},age=0){const k=Math.max(960/im.naturalWidth,540/im.naturalHeight)*scale;drawAssetMedia(c,im,[480-im.naturalWidth*k/2+x,270-im.naturalHeight*k/2+y,im.naturalWidth*k,im.naturalHeight*k],f,age)}
function record(c,kind,name,rect=[0,0,960,540],alpha=null){recordSceneAsset(c,{id:kind,kind,name,assetSlot:kind},rect,alpha)}
function veil(c,f,age){c.save();const v=c.createRadialGradient(480,260,160,480,270,580);v.addColorStop(0,'#0000');v.addColorStop(1,`rgba(0,0,0,${clamp(f.villageVignette)})`);c.fillStyle=v;c.fillRect(0,0,960,540);c.fillStyle='#e8dfc6';for(let i=0;i<Math.round(f.villageDust);i++){c.globalAlpha=.025+(i%3)*.012;c.beginPath();c.arc((i*137.7+age*(1+i%3)*1.1)%960,(i*79.3-age*.6+1080)%540,.4+(i%2)*.2,0,7);c.fill()}c.restore()}
export function createVillageScene(images={}){
 const gesture=createLayeredGesture(images);const nursery=createNurseryScene(images),precision=createPrecisionVillage(images,nursery);let buffer;
 function room(c,kind,progress,f,elapsed=0){f={...mediaClipDefaults,...f};if(kind==='villageSeamstress'&&f.gestureVideoEnabled&&mediaReady(images.gestureVideo)){const video=syncMediaClip(images.gestureVideo,elapsed,{start:f.gestureVideoIn,end:f.gestureVideoOut,rate:f.gestureVideoRate,loop:f.gestureVideoLoop,playing:globalThis.motionAtelierPlaying===true}),w=video.videoWidth||video.naturalWidth||video.width,h=video.videoHeight||video.naturalHeight||video.height,k=Math.max(960/w,540/h)*f.gestureVideoScale;c.save();c.translate(f.gestureVideoX,f.gestureVideoY);drawAssetMedia(c,video,[480-w*k/2,270-h*k/2,w*k,h*k],f,Math.max(0,elapsed));c.restore();record(c,'gestureVideo','Hand and blouse · uploaded video');return;}const prefix=kind==='villageWorkshop'?'villageWorkshop':'villageSeamstress',im=kind==='villageSeamstress'&&f.precisionEnabled&&(!/^(data:|blob:)/.test(images[kind]?.src||'')||/^(data:|blob:)/.test(images.precisionSeamstress?.src||''))?images.precisionSeamstress:images[kind];c.save();c.filter=`blur(${Math.max(0,f[prefix+'Blur'])}px) brightness(${f[prefix+'Brightness']}) saturate(${f.villageSaturation})`;if(kind==='villageSeamstress'&&f.gestureEnabled&&!f.gestureVideoEnabled){const scale=f[prefix+'Scale']+progress*f[prefix+'Push'];c.translate(480+f[prefix+'X']+progress*f[prefix+'Travel'],270+f[prefix+'Y'],f,elapsed);c.scale(scale,scale);c.translate(-480,-270);gesture.paint(c,im,elapsed,f)}else plate(c,im,f[prefix+'Scale']+progress*f[prefix+'Push'],f[prefix+'X']+progress*f[prefix+'Travel'],f[prefix+'Y'],f,elapsed);c.restore();record(c,kind,kind==='villageWorkshop'?'Shoemaker workshop':'Woman and blouse')}
 function crossing(c,q,kind,hold,f,elapsed=0){
  if(q<=0)return;if(q>=1){room(c,kind,hold,f,elapsed);return}
  const useFace=f.precisionEnabled&&f.precisionCraftFace&&kind==='villageWorkshop',x=1600-q*Math.max(2240,f.villagePassTravel),im=useFace?images.precisionFace:images.nurseryPasser;
  c.save();if(f.villageTransition==='dissolve')c.globalAlpha*=q;else{c.beginPath();c.rect(Math.max(0,x),0,960,540);c.clip()}room(c,kind,hold,f,elapsed);c.restore();
  if(f.villageTransition==='occlude'&&im?.naturalWidth){const w=useFace?f.precisionFaceWidth:f.villagePassWidth,h=w*im.naturalHeight/im.naturalWidth,cy=useFace?f.precisionFaceY:f.villagePassY;c.save();c.filter=`blur(${Math.max(0,useFace?f.precisionFaceBlur:f.villagePassBlur)}px) brightness(${f.villagePassBrightness})`;drawAssetMedia(c,im,[x-w/2,cy-h/2,w,h],f,elapsed);c.restore();record(c,useFace?'precisionFace':'villagePasser',useFace?'Close foreground face':'Foreground cloth passage',[x-w/2,cy-h/2,w,h]);
   if(f.villageEdgeLight>0){c.save();c.globalCompositeOperation='screen';c.globalAlpha*=f.villageEdgeLight*Math.sin(q*Math.PI);const g=c.createLinearGradient(x-130,0,x+30,0);g.addColorStop(0,'#ffc45a00');g.addColorStop(.65,'#f1c776');g.addColorStop(.85,'#a4c9c3');g.addColorStop(1,'#a4c9c300');c.fillStyle=g;c.fillRect(x-130,0,160,540);c.restore()}
  }
 }
 return {paint(c,t,input={}){const f={...precisionDefaults,...villageDefaults,...input},s=villageState(t,f);if(s.age<0||!f.villageEnabled)return s;if(s.age===0){nursery.paint(c,s.previousEnd,f);return s;}
 c.canvas.sceneAssets=[];
 // Only require the assets visible at this stage. Later missing assets cannot block the boys.
 const required=[];if(s.craft<1){required.push('villageTown');if(f.precisionEnabled){if(!/^(data:|blob:)/.test(images.villageTown?.src||''))required.push('precisionArchitecture');required.push('precisionClouds','precisionMasonry')}if(s.boysExit<1)required.push('villageBoys')}if(s.craft>0&&s.cloth<1)required.push('villageWorkshop');if(s.cloth>0){required.push('villageSeamstress');if(f.precisionEnabled&&!/^(data:|blob:)/.test(images.villageSeamstress?.src||''))required.push('precisionSeamstress')}if(f.villageTransition==='occlude'&&((s.craft>0&&s.craft<1)||(s.cloth>0&&s.cloth<1)))required.push(f.precisionEnabled&&f.precisionCraftFace&&s.craft>0&&s.craft<1?'precisionFace':'nurseryPasser');
 if(s.window<1)required.push('nurseryMother','nurseryCradle','nurseryPasser');
 const missing=required.filter(k=>!images[k]?.naturalWidth);
 if(missing.length){c.fillStyle='#11100f';c.fillRect(0,0,960,540);c.fillStyle='#e8dcc7';c.font='16px Arial';c.textAlign='center';c.fillText(missing.some(k=>images[k]?._loadError)?'Continuation image unavailable · reload in scene tools':'Loading boys, town and workshop images…',480,455);return {...s,missing}}
 c.fillStyle='#000';c.fillRect(0,0,960,540);if(s.alpha<=0)return s;
 c.save();c.globalAlpha*=s.alpha;
 if(s.craft<1){
  if(f.precisionEnabled)precision.paint(c,s,f);else{
  c.save();c.filter=`blur(${Math.max(0,f.villageTownBlur+(1-s.window)*1.5)}px) brightness(${f.villageTownBrightness}) saturate(${f.villageSaturation})`;plate(c,images.villageTown,f.villageTownScale+s.town*f.villageTownPush,f.villageTownX,f.villageTownY);c.restore();record(c,'villageTown','Bavarian town square');
  if(s.boysExit<1){const im=images.villageBoys,push=1+clamp(s.age/Math.max(.1,s.townAt))*f.villageBoysPush+s.boysExit*f.villageBoysExitZoom,w=f.villageBoysWidth*push,h=w*im.naturalHeight/im.naturalWidth,x=f.villageBoysX+s.boysExit*f.villageBoysExitX,y=f.villageBoysY+s.boysExit*f.villageBoysExitY;
   c.save();c.globalAlpha*=f.villageBoysOpacity;c.filter=`blur(${Math.max(0,f.villageBoysBlur+s.boysExit*2)}px) saturate(${f.villageSaturation})`;c.drawImage(im,x-w/2,y-h/2,w,h);c.restore();record(c,'villageBoys','Rudi and Adi',[x-w/2,y-h/2,w,h],alphaFor(im));
   const names=nurseryEase((s.window-f.villageNameDelay)/Math.max(.05,1-f.villageNameDelay));c.save();c.globalAlpha*=names*(1-nurseryEase(s.boysExit*2))*f.villageBoysOpacity;c.fillStyle=f.villageNameColor;c.font=`800 ${f.villageNameSize}px Arial`;c.textAlign='center';c.shadowColor='#10151b';c.shadowBlur=5;c.translate(x,y);c.scale(push,push);c.fillText(f.villageLeftName,f.villageLeftNameX-f.villageBoysX,f.villageNameY-f.villageBoysY);c.fillText(f.villageRightName,f.villageRightNameX-f.villageBoysX,f.villageNameY-f.villageBoysY);c.restore();
  }
  if(s.boysExit>0){c.save();c.globalAlpha*=nurseryEase(s.boysExit);c.font=`800 ${f.villageTitleSize}px Arial`;c.textAlign='center';c.shadowColor='#0d152b55';c.shadowBlur=5;const g=c.createLinearGradient(f.villageTitleX-230,0,f.villageTitleX+230,0);g.addColorStop(0,f.villageTitleAccent);g.addColorStop(1,f.villageTitleColor);c.fillStyle=g;c.fillText(f.villageTownTitle,f.villageTitleX,f.villageTitleY+(1-s.boysExit)*12);c.restore()}
  if(s.window<1){
   buffer||=Object.assign(document.createElement('canvas'),{width:960,height:540});const b=buffer.getContext('2d');
   // Freeze the exact previous end, including any user-authored final nursery fade.
   nursery.paint(b,s.previousEnd,f);c.save();const zoom=1+s.window*(f.villageWindowZoom-1);c.globalAlpha*=1-nurseryEase((s.window-.28)/.64);c.filter=`blur(${s.window*f.villageWindowBlur}px)`;c.translate(480+(f.villageWindowX-480)*(1-s.window),270+(f.villageWindowY-270)*(1-s.window));c.scale(zoom,zoom);c.translate(-f.villageWindowX,-f.villageWindowY);c.drawImage(buffer,0,0);c.restore();
  }
 }
 }
 if(s.craft>0)crossing(c,s.craft,'villageWorkshop',s.craftHold,f);
 if(s.cloth>0)crossing(c,s.cloth,'villageSeamstress',s.seamstressHold,f,s.age-s.seamstressAt);
 c.save();c.globalAlpha*=s.window;veil(c,f,s.age);c.restore();c.restore();return s;
 }};
}
