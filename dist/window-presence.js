import {panePolygons} from './window-calibration.js?v=motion-v70';
import {villageDefaults} from './village-motion.js?v=motion-v70';
import {precisionDefaults} from './precision-motion.js?v=motion-v70';
import {paintExterior} from './exterior-scene.js?v=motion-v70';
import {villageState} from './village-motion.js?v=motion-v70';
const clamp=q=>Math.max(0,Math.min(1,q));
let texture;
// A portal is a view of the same scene, rather than a second copy of its subjects.
export function paintWindowPresence(c,images,progress,input={}){
 const f={...villageDefaults,...precisionDefaults,...input};if(!images.villageBoys?.naturalWidth)return 0;if((!f.windowBoysEnabled&&!input._portalApproach)||progress<=0)return 0;
 const s=input._portalStage||villageState(f.villageStart??99.2,f),q=clamp(input._portalStage?.window||0);
 texture||=Object.assign(document.createElement('canvas'),{width:1920,height:1080});const b=texture.getContext('2d');texture.sceneAssets=[];b.setTransform(1,0,0,1,0,0);b.fillStyle=f.precisionSkyTop;b.fillRect(0,0,1920,1080);b.translate(480,270);
 const stage=input._portalStage||{...s,age:input._portalClock??0,window:0,boysExit:0,town:0};paintExterior(b,stage,f,images);
 const alpha=clamp(progress)*f.windowBoysOpacity;
 c.save();c.beginPath();for(const polygon of panePolygons(f)){polygon.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.closePath()}c.clip();
 // The jug overlaps the lower-right pane and must stay in front of transmitted imagery.
 c.beginPath();c.rect(-2000,-2000,5000,5000);c.ellipse(554,279,29,28,-.1,0,Math.PI*2,true);c.clip('evenodd');c.globalAlpha*=alpha;
 const nominal=(f.windowPortalScale??.38)*(1-q)+q/Math.max(1,f.villageWindowZoom),scale=f.windowPortalCover===false?nominal:(.6+.4*(1-(1-q)**2))/(1+q*(f.villageWindowZoom-1)),x=(f.windowPortalX??440)*(1-q)+q*f.villageWindowX,y=(f.windowPortalY??165)*(1-q)+q*f.villageWindowY;
 c.filter=`blur(${Math.max(0,f.windowBoysBlur)*(1-q)}px) saturate(${.7+.3*q})`;const left=x-960*scale,top=y-540*scale,w=1920*scale,h=1080*scale;c.fillStyle=f.precisionSkyTop;c.fillRect(-2000,-2000,5000,5000);c.drawImage(texture,left,top,w,h);c.filter='none';
 c.globalAlpha*=f.windowBoysGlare*(1-q);c.fillStyle='#c4dfec';c.fillRect(f.precisionPaneX,f.precisionPaneY,f.precisionPaneWidth,f.precisionPaneHeight);c.restore();return alpha;
}
