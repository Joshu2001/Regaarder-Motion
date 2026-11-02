import {paintExterior} from './exterior-scene.js?v=motion-v70';
import {precisionDefaults,precisionState} from './precision-motion.js?v=motion-v70';
import {recordSceneAsset,alphaFor} from './scene-geometry.js?v=motion-v70';
const clamp=q=>Math.max(0,Math.min(1,q));const ease=q=>{q=clamp(q);return q*q*(3-2*q)};
function plate(c,im,scale,x,y){const k=Math.max(960/im.naturalWidth,540/im.naturalHeight)*scale;c.drawImage(im,480-im.naturalWidth*k/2+x,270-im.naturalHeight*k/2+y,im.naturalWidth*k,im.naturalHeight*k)}
function record(c,kind,name,rect=[0,0,960,540],alpha=null){recordSceneAsset(c,{id:kind,kind,name,assetSlot:kind},rect,alpha)}
export function createPrecisionVillage(images,nursery){let glass;
 return {paint(c,s,input){const f={...precisionDefaults,...input},p=precisionState(s,f),customTown=/^(data:|blob:)/.test(images.villageTown?.src||'')&&!/^(data:|blob:)/.test(images.precisionArchitecture?.src||''),architecture=customTown?images.villageTown:images.precisionArchitecture;
 paintExterior(c,s,f,images);
 if(s.window<1){glass||=Object.assign(document.createElement('canvas'),{width:960,height:540});const b=glass.getContext('2d');b.globalCompositeOperation='source-over';b.globalAlpha=1;nursery.paint(b,s.previousEnd,{...f,_portalApproach:true,_portalStage:s,windowBoysOpacity:(f.windowBoysEnabled?(f.windowBoysOpacity??.64):0)+(1-(f.windowBoysEnabled?(f.windowBoysOpacity??.64):0))*p.transmission});
 // The same exterior texture passes through the panes and resolves to the full-frame view.
 c.save();c.globalAlpha*=1-p.glassClear;const z=1+s.window*(f.villageWindowZoom-1);c.translate(480+(f.villageWindowX-480)*(1-s.window),270+(f.villageWindowY-270)*(1-s.window));c.scale(z,z);c.translate(-f.villageWindowX,-f.villageWindowY);c.filter=`blur(${s.window*f.villageWindowBlur*.45}px)`;c.drawImage(glass,0,0);c.restore();
 if(p.light>0){c.save();c.globalCompositeOperation='screen';c.globalAlpha*=p.light;const g=c.createRadialGradient(470,195,10,470,195,520);g.addColorStop(0,'#d6efff');g.addColorStop(.35,'#b9dcea88');g.addColorStop(1,'#b9dcea00');c.fillStyle=g;c.fillRect(0,0,960,540);c.restore()}
 }
 if(p.title>0){c.save();c.globalAlpha*=p.title;c.font=`800 ${f.villageTitleSize*f.precisionTitleScale}px Arial, sans-serif`;c.textAlign='center';const g=c.createLinearGradient(f.villageTitleX-230,0,f.villageTitleX+230,0);g.addColorStop(0,f.villageTitleAccent);g.addColorStop(1,f.villageTitleColor);c.fillStyle=g;c.shadowColor='#09203966';c.shadowBlur=4;c.fillText(f.villageTownTitle,f.villageTitleX,f.villageTitleY-(1-p.title)*f.precisionTitleDrop);c.restore()}
 return p;
 }};
}
