import {drawAssetMedia} from './effect-library.js?v=motion-v70';
import {paintWindowPresence} from './window-presence.js?v=motion-v70';
import {nurseryDefaults,nurseryState} from './nursery-motion.js?v=motion-v70';
import {recordSceneAsset} from './scene-geometry.js?v=motion-v70';
// Editable hand-drawn numerals. Each continuous trace reveals progressively.
const digits={
 '0':[[18,1],[8,3],[3,16],[3,37],[9,49],[20,48],[27,34],[27,13],[22,3],[15,1]],
 '1':[[5,13],[16,3],[14,17],[13,35],[12,48],[9,49],[22,49]],
 '2':[[3,11],[9,3],[21,3],[27,10],[23,20],[10,32],[3,47],[26,47]],
 '3':[[3,6],[14,2],[26,5],[24,17],[14,24],[23,27],[28,38],[22,48],[8,49],[2,44]],
 '4':[[21,1],[3,30],[27,30],[29,27],[20,31],[20,49]],
 '5':[[28,3],[7,3],[4,23],[17,21],[27,28],[26,42],[18,49],[6,47]],
 '6':[[24,3],[13,5],[6,20],[3,37],[9,49],[22,47],[27,36],[22,26],[10,26],[4,33]],
 '7':[[2,4],[27,4],[20,18],[13,34],[8,49]],
 '8':[[14,25],[5,18],[4,8],[13,2],[25,6],[24,17],[14,25],[4,33],[4,43],[13,50],[25,44],[26,34],[14,25]],
 '9':[[24,22],[14,27],[4,22],[3,10],[12,3],[24,7],[26,20],[22,35],[14,49],[8,48]]
};
const curveCache=new WeakMap();
function smoothTrace(points){if(curveCache.has(points))return curveCache.get(points);const out=[];for(let i=0;i<points.length-1;i++){const p0=points[Math.max(0,i-1)],p1=points[i],p2=points[i+1],p3=points[Math.min(points.length-1,i+2)];for(let j=0;j<10;j++){const t=j/10;out.push([0,1].map(k=>.5*((2*p1[k])+(-p0[k]+p2[k])*t+(2*p0[k]-5*p1[k]+4*p2[k]-p3[k])*t*t+(-p0[k]+3*p1[k]-3*p2[k]+p3[k])*t*t*t)))}}out.push(points.at(-1));curveCache.set(points,out);return out}
function trace(c,points,q){points=smoothTrace(points);let total=0;const lengths=points.slice(1).map((p,i)=>{const n=Math.hypot(p[0]-points[i][0],p[1]-points[i][1]);total+=n;return n});let left=total*Math.max(0,Math.min(1,q));c.beginPath();c.moveTo(...points[0]);for(let i=0;i<lengths.length&&left>0;i++){const a=points[i],b=points[i+1],k=Math.min(1,left/lengths[i]);c.lineTo(a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k);left-=lengths[i]}c.stroke()}
function paintDate(c,s,f){const text=String(f.nurseryDate),size=f.nurseryDateSize/60,travel=s.room*1050;c.save();c.translate(f.nurseryDateX-travel,f.nurseryDateY);c.scale(size,size);c.globalAlpha*=f.nurseryDateMode==='fade'?s.write:1;c.strokeStyle=f.nurseryDateColor;c.fillStyle=f.nurseryDateColor;c.lineWidth=f.nurseryDateWidth;c.lineJoin='round';c.lineCap='round';c.shadowColor=f.nurseryDateColor;c.shadowBlur=f.nurseryDateGlow;c.filter=`blur(${f.nurseryDateBlur}px)`;
 if(f.nurseryDateMode==='stroke'&&[...text].every(v=>digits[v]||v===' ')){const total=text.length*38;[...text].forEach((v,i)=>{if(!digits[v])return;c.save();c.translate(-total/2+i*38,-27);c.rotate(Math.sin(i*3.3)*.035);trace(c,digits[v],s.write*text.length-i);c.restore()})}
 else{c.font='italic 60px Georgia, serif';c.textAlign='center';c.textBaseline='middle';const visible=f.nurseryDateMode==='type'||f.nurseryDateMode==='stroke'?Math.ceil(text.length*s.write):text.length;if(visible)c.fillText(text.slice(0,visible),0,0)}c.restore()}
function plate(c,im,scale,x=0,y=0,f={},age=0){const k=Math.max(960/im.naturalWidth,540/im.naturalHeight)*scale;drawAssetMedia(c,im,[480-im.naturalWidth*k/2+x,270-im.naturalHeight*k/2+y,im.naturalWidth*k,im.naturalHeight*k],f,age)}
export function createNurseryScene(images={}){
 const slots=['nurseryMother','nurseryCradle','nurseryPasser'];
 return {paint(c,t,input={}){const f={...nurseryDefaults,...input},s=nurseryState(t,f);c.canvas.sceneAssets=[];c.fillStyle='#000';c.fillRect(0,0,960,540);if(s.alpha<=0)return s;
 c.save();c.globalAlpha=s.alpha;
 if(s.room<1)paintDate(c,s,f);
 if(s.room>0){
  const required=f.nurseryTransition==='occlude'?slots:slots.slice(0,2),ready=required.every(k=>images[k]?.naturalWidth);
  if(!ready){c.save();c.fillStyle='#e8dcc7';c.font='16px Arial';c.textAlign='center';c.fillText(slots.some(k=>images[k]?._loadError)?'Nursery asset unavailable · reload in scene tools':'Loading the nursery scene…',480,455);c.restore();c.restore();return s}
  const entryX=(1-s.room)*960,blur=Math.max(0,f.nurseryMotherBlur+f.nurseryEntranceBlur*s.focus),motherScale=f.nurseryMotherScale+s.motherPush*f.nurseryMotherPush;
  c.save();c.beginPath();c.rect(entryX,0,960-entryX,540);c.clip();c.filter=`blur(${blur}px) brightness(${f.nurseryRoomBrightness}) saturate(${f.nurserySaturation})`;c.globalAlpha*=f.nurseryMotherOpacity;plate(c,images.nurseryMother,motherScale,entryX+f.nurseryMotherX-s.pass*f.nurseryCameraTravel,f.nurseryMotherY,f,s.age);c.restore();
  recordSceneAsset(c,{id:'nursery-mother',kind:'nurseryMother',name:'Mother and newborn room',assetSlot:'nurseryMother'},[entryX,0,960-entryX,540]);
  if(s.pass>0){
   c.save();if(f.nurseryTransition==='occlude'){c.beginPath();c.rect(Math.max(0,s.passX),0,960,540);c.clip()}else c.globalAlpha*=s.pass;
   c.filter=`blur(${Math.max(0,f.nurseryCradleBlur)}px) brightness(${f.nurseryRoomBrightness}) saturate(${f.nurserySaturation})`;c.globalAlpha*=f.nurseryCradleOpacity;plate(c,images.nurseryCradle,f.nurseryCradleScale+s.hold*f.nurseryCradlePush,f.nurseryCradleX+(1-s.pass)*45,f.nurseryCradleY,f,s.age);c.restore();
   const lead=Math.max(.1,input.windowBoysLead??1.4);if(s.pass===1)paintWindowPresence(c,images,(t-(s.end-lead))/lead,{...input,_portalClock:t-s.end,_paneImageScale:(f.nurseryCradleScale+s.hold*f.nurseryCradlePush)/1.05,_paneImageX:f.nurseryCradleX,_paneImageY:f.nurseryCradleY});
   recordSceneAsset(c,{id:'nursery-cradle',kind:'nurseryCradle',name:'Cradle and window',assetSlot:'nurseryCradle'},[0,0,960,540]);
  }
  // Gentle window scatter follows the image, with the rest of the room in shadow.
  c.save();c.beginPath();c.rect(entryX,0,960,540);c.clip();c.globalCompositeOperation='screen';c.globalAlpha*=f.nurseryWindowLight*s.room;const light=c.createRadialGradient(f.nurseryLightX,f.nurseryLightY,1,f.nurseryLightX,f.nurseryLightY,440);light.addColorStop(0,'#b9d7ee');light.addColorStop(1,'#b9d7ee00');c.fillStyle=light;c.fillRect(0,0,960,540);c.restore();
  if(s.pass>0&&s.pass<1&&f.nurseryTransition==='occlude'&&f.nurseryPassOpacity>0){const im=images.nurseryPasser,w=f.nurseryPassWidth,h=w*im.naturalHeight/im.naturalWidth;c.save();c.globalAlpha*=f.nurseryPassOpacity;c.filter=`blur(${Math.max(0,f.nurseryPassBlur)}px) brightness(${f.nurseryPassBrightness}) saturate(${f.nurserySaturation})`;drawAssetMedia(c,im,[s.passX-w/2,f.nurseryPassY-h/2,w,h],f,s.age);c.restore();recordSceneAsset(c,{id:'nursery-passer',kind:'nurseryPasser',name:'Passing foreground figure',assetSlot:'nurseryPasser'},[s.passX-w/2,f.nurseryPassY-h/2,w,h])}
  c.save();c.beginPath();c.rect(entryX,0,960,540);c.clip();c.fillStyle='#dfd7b5';for(let i=0;i<Math.round(f.nurseryParticles);i++){const x=(i*137.7+s.age*(1+i%3)*1.4)%960,y=(i*53.9-s.age*.7+1080)%540;c.globalAlpha=s.alpha*(.025+(i%3)*.014);c.beginPath();c.arc(x,y,.35+(i%2)*.25,0,7);c.fill()}c.restore();
  c.save();c.beginPath();c.rect(entryX,0,960,540);c.clip();const vig=c.createRadialGradient(500,260,190,480,270,590);vig.addColorStop(0,'#0000');vig.addColorStop(1,`rgba(0,0,0,${f.nurseryVignette})`);c.fillStyle=vig;c.fillRect(0,0,960,540);c.restore();
 }
 c.restore();return s;
 }}
}
