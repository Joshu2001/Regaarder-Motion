import {paintTextureFill,textureDefaults} from './texture-fill.js?v=motion-v70';
import {defaultRoutes} from './route-motion.js?v=motion-v70';
import {routeDefaults} from './route-scene.js?v=motion-v70';
import {paintLaundryRoutes} from './route-scene.js?v=motion-v70';
import {drawAssetMedia} from './effect-library.js?v=motion-v70';
import {precisionDefaults} from './precision-motion.js?v=motion-v70';
import {laundryState} from './laundry-motion.js?v=motion-v70';
import {recordSceneAsset} from './scene-geometry.js?v=motion-v70';
const clamp=q=>Math.max(0,Math.min(1,q));const ease=q=>{q=clamp(q);return q*q*(3-2*q)};
function plate(c,im,k,f={},age=0){const fit=Math.max(960/im.naturalWidth,540/im.naturalHeight)*k;drawAssetMedia(c,im,[480-im.naturalWidth*fit/2,270-im.naturalHeight*fit/2,im.naturalWidth*fit,im.naturalHeight*fit],f,age)}
export function createLaundryScene(images,previous){let buffer;
 return {paint(c,t,input={}){const f={...textureDefaults,...routeDefaults,...precisionDefaults,...input},s=laundryState(t,f);if(s.age<0||!f.laundryEnabled)return s;c.canvas.sceneAssets=[];c.fillStyle='#101013';c.fillRect(0,0,960,540);
 const required=['precisionAerial','precisionLinen','precisionClouds'];const missing=required.filter(k=>!images[k]?.naturalWidth);if(missing.length){c.save();c.fillStyle='#e8dcc7';c.font='16px Arial';c.textAlign='center';c.fillText(missing.some(k=>images[k]?._loadError)?'Laundry image unavailable · retry in scene tools':'Loading the aerial laundry scene…',480,455);c.restore();return {...s,missing}}if(s.alpha<=0)return s;
 c.save();c.globalAlpha*=s.alpha;
 c.save();c.translate(480+f.laundryMapX,270+f.laundryMapY);c.rotate(f.laundryMapRotation*Math.PI/180);c.translate(-480,-270);c.filter=`brightness(${f.laundryMapBrightness}) saturate(${f.laundryMapSaturation})`;plate(c,images.precisionAerial,Math.max(s.mapScale,Math.abs(Math.cos(f.laundryMapRotation*Math.PI/180))+Math.abs(Math.sin(f.laundryMapRotation*Math.PI/180))*960/540),f,s.age);c.restore();recordSceneAsset(c,{id:'precisionAerial',kind:'precisionAerial',name:'Aerial town',assetSlot:'precisionAerial'},[0,0,960,540]);
 const im=images.precisionLinen,count=Math.max(1,Math.min(12,Math.round(f.laundryGarmentCount))),mapProgress=clamp(s.age/Math.max(.1,s.titleAt)),size=f.laundryGarmentStartWidth+(f.laundryGarmentWidth-f.laundryGarmentStartWidth)*s.pull;
 if(f.laundryRoutesEnabled){
 const targetScale=Math.max(s.mapScale,Math.abs(Math.cos(f.laundryMapRotation*Math.PI/180))+Math.abs(Math.sin(f.laundryMapRotation*Math.PI/180))*960/540);
 if(s.pull<1){const main=(f.laundryRoutes||defaultRoutes)[0]||defaultRoutes[0],source=images[main.slot]||im,p=main.points[0],dx=(p[0]*960-480)*targetScale,dy=(p[1]*540-270)*targetScale,r=f.laundryMapRotation*Math.PI/180,tx=480+f.laundryMapX+Math.cos(r)*dx-Math.sin(r)*dy,ty=270+f.laundryMapY+Math.sin(r)*dx+Math.cos(r)*dy,targetWidth=(main.startSize??f.laundryRouteStartSize)*targetScale,w=f.laundryGarmentStartWidth+(targetWidth-f.laundryGarmentStartWidth)*s.pull,h=w*source.naturalHeight/source.naturalWidth,x=f.laundryGarmentX+(tx-f.laundryGarmentX)*s.pull,y=f.laundryGarmentY+(ty-f.laundryGarmentY)*s.pull;c.save();c.translate(x,y);c.rotate((f.laundryMapRotation+(main.rotation||0))*s.pull*Math.PI/180);drawAssetMedia(c,source,[-w/2,-h/2,w,h],f,s.age);c.restore()}
 else{c.save();c.translate(480+f.laundryMapX,270+f.laundryMapY);c.rotate(f.laundryMapRotation*Math.PI/180);c.scale(targetScale,targetScale);c.translate(-480,-270);paintLaundryRoutes(c,images,s.age-f.laundryPullTime,f);c.restore()}
 recordSceneAsset(c,{id:'precisionLinen',kind:'precisionLinen',name:'Route images',assetSlot:'precisionLinen'},[0,0,960,540]);
 }else{
 c.save();c.globalAlpha*=f.laundryGarmentOpacity;for(let i=0;i<count;i++){
  const reveal=i===0?1:ease((s.age-.5-i*.12)/.5);if(!reveal)continue;const shrink=1-mapProgress*.3,w=(i===0?size:f.laundryGarmentWidth)*shrink,h=w*im.naturalHeight/im.naturalWidth,x=f.laundryGarmentX+(480-f.laundryGarmentX)*s.pull+(i%2?-.5:.5)*i*36*shrink,y=f.laundryGarmentY+(i===0?0:i%2?-(i+1)/2:i/2)*f.laundryGarmentSpread*s.pull*shrink;
  c.save();c.globalAlpha*=reveal;c.translate(x,y);c.rotate(Math.sin(s.age*.75+i)*f.laundryGarmentSway*Math.PI/180);drawAssetMedia(c,im,[-w/2,-h/2,w,h],f,s.age);c.restore();
 }c.restore();recordSceneAsset(c,{id:'precisionLinen',kind:'precisionLinen',name:'Laundry garments',assetSlot:'precisionLinen'},[300,0,360,540]);
}
 if(s.pull<1){buffer||=Object.assign(document.createElement('canvas'),{width:960,height:540});const b=buffer.getContext('2d');previous.paint(b,s.previousEnd,f);c.save();c.globalAlpha*=1-ease(s.pull/.55);c.drawImage(buffer,0,0);c.restore()}
 // Clouds are on a nearer plane and continue moving during the title hold.
 const clouds=images.precisionClouds,cloudAlpha=ease((s.age-f.laundryCloudStart)/1.6)*f.laundryCloudOpacity;c.save();c.globalAlpha*=cloudAlpha;const w=f.laundryCloudWidth,h=w*clouds.naturalHeight/clouds.naturalWidth;
 for(const [x,y,flip,speed]of [[-330,-250,1,1],[650,-70,-1,-.6],[-180,270,1,.45],[580,300,-1,-.3]]){c.save();c.translate(x+s.age*f.laundryCloudSpeed*speed,y);c.scale(flip,1);drawAssetMedia(c,clouds,[flip===1?0:-w,0,w,h],f,s.age);c.restore()}c.restore();
 if(s.title>0){const drawText=b=>{b.save();b.fillStyle='#fff';b.font=`800 ${f.laundryTitleSize}px Arial, sans-serif`;b.textAlign='left';const text=String(f.laundryTitle),spacing=f.laundryTitleTracking,total=[...text].reduce((sum,ch)=>sum+b.measureText(ch).width+spacing,0)-spacing;let x=f.laundryTitleX-total/2;for(let i=0;i<Math.ceil(text.length*s.title);i++){b.fillText(text[i],x,f.laundryTitleY);x+=b.measureText(text[i]).width+spacing;}b.restore();};paintTextureFill(c,drawText,[0,0,960,540],images.titleTexture||images.precisionClouds,{mode:f.laundryTitleFill,color:f.laundryTitleFill==='color'?f.laundryTitleColor:f.laundryTitleFillColor,speed:f.laundryTitleTextureSpeed,scale:f.laundryTitleTextureScale,opacity:f.laundryTitleTextureOpacity},s.age);}

 c.save();c.globalAlpha*=s.pull;const g=c.createRadialGradient(480,260,200,480,270,590);g.addColorStop(0,'#0000');g.addColorStop(1,`rgba(0,0,0,${clamp(f.laundryVignette)})`);c.fillStyle=g;c.fillRect(0,0,960,540);c.restore();c.restore();return s;
 }};
}
