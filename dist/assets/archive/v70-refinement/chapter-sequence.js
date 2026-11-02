import {sampleObjectMotion} from './path-motion.js?v=motion-v70';
// Layer-first continuation. Source identity, movement and timing remain independent.
import {paintLivingSky} from './living-sky.js?v=motion-v70';
import {paintTextureFill} from './texture-fill.js?v=motion-v70';
import {paintFire,effectMedia} from './reveal-fx.js?v=motion-v70';
export const chapterSequenceDefaults={
 chapterSequenceEnabled:true,chapterLayerEdits:{},chapterSourceBindings:{},chapterEdgeAlpha:110,
 chapterRoomDirection:1,chapterTreeDirection:'left',chapterPoseDirection:'left',chapterJoinDirection:'right',chapterPosePixelsPerSecond:1400,
 chapterSalesText:'SALES',chapterManufacturingText:'MANUFACTURING',chapterTitleSmall:'CHAPTER 2:',chapterTitleText:'THE NAZI OLYMPICS',
 chapterSalesFont:250,chapterManufacturingFont:104,chapterTitleFont:58,chapterTitleColor:'#f6c55b',chapterRoleColor:'#e5edf4',
 chapterRoleFillMode:'image',chapterTitleFillMode:'color',chapterTextureSpeed:12,chapterTextureScale:1,
 chapterSalesStart:.15,chapterSalesReveal:1.1,chapterRoomSwapStart:3,chapterRoomSwapEnd:4.4,
 chapterManufactureStart:7.1,chapterManufactureEnd:8.7,chapterPairStart:10.7,chapterWireStart:13.1,
 chapterFactoryCut:16.45,chapterRivalryStart:20.6,chapterEyeFireStart:21.8,chapterGroundFireStart:22.1,
 chapterFadeStart:28.7,chapterBlackStart:30.3,chapterTitleStart:32.8,chapterTitleAssembleEnd:34.2,
 chapterTitleRetreatEnd:39.5,chapterTitleBlack:41.2,chapterSportsStart:42.2,chapterSalesmanStart:43.4,chapterSalesmanEnd:44.8,
 chapterTreeStart:47.8,chapterTreeEnd:49.4,chapterPoseStart:52.1,chapterSequenceDuration:52.95,
 chapterFactoryInitialZoom:4.8,chapterFactoryDecay:1.4,chapterFactoryWidth:500,chapterFactoryY:145,
 chapterGroundHorizon:425,chapterGroundTextureScale:1,chapterGroundRoughness:.72,chapterGroundForegroundDarkness:.48,
 chapterGroundGrayscale:1,chapterGroundBrightness:.9,chapterGroundContactShadow:.62,chapterGroundDepthStrength:1,
 chapterFactoryBaseY:445,chapterFenceScale:.72,chapterBikeScale:.58,chapterBikeX:380,chapterBikeY:378,
 chapterWindowRecess:48,chapterWindowPerspective:1,chapterFactoryEntryLift:0,chapterBikeGroundY:445,chapterFenceGroundY:475,
 chapterRoomRetreat:.16,chapterFactoryRetreat:.3,chapterTitleRetreat:.3,chapterSportsRetreat:.18,
 chapterHeadSize:520,chapterHeadYaw:84,chapterPanelBlue:'#113b58',chapterPanelRed:'#621221',
 chapterLeftEyeU:.78,chapterLeftEyeV:.48,chapterRightEyeU:.29,chapterRightEyeV:.48,
 chapterEyeFireSize:74,chapterFireStrength:.82,chapterFireHeight:180,chapterHeadLight:.85,
 chapterTitleScatterX:560,chapterTitleScatterY:200,chapterTitleBlur:22,chapterGlyphDelay:.018,
 chapterPropCount:8,chapterPropSpeed:36,chapterPropSeed:17,chapterSkyWind:19,chapterSkyEvolution:.12,
 chapterHorizonBlur:7,chapterTeamCount:12,chapterSalesmanSize:390,chapterTreeWidth:600,chapterTreeBlur:1.4,
 chapterMarkerEnabled:false,chapterMarkerColor:'#3857ff',chapterMarkerSize:22,
 chapterJoinDuration:1.042,chapterBridgeStatus:'authored; original diagram-to-room bridge not supplied'
};
export const chapterSequenceSources={
 chapterRoom:'room-color-v62.png',chapterWindow:'room-color-v62.png',chapterPot1:'portrait-room-vase-v53.png',chapterPot2:'portrait-room-vase-v53.png',chapterPot3:'portrait-room-vase-v53.png',chapterYoungRudi:'young-portraits-v65.png',chapterYoungAdi:'young-portraits-v65.png',
 chapterShelf:'chapter-props-v65.png',chapterVase:'portrait-room-vase-v53.png',chapterSill:'portrait-room-cloth-v53.png',
 chapterFactoryOld:'period-factory-v65.png',chapterFence:'chapter-props-v65.png',chapterBike:'chapter-bike-v65.png',
 chapterGround:'dark-earth-v63.png',chapterSky:'war-sky-v43.png',chapterHeadAdi:'rivalry-heads-v65.png',chapterHeadRudi:'rivalry-heads-v65.png',
 chapterBrandAdi:'adidas-wordmark.svg',chapterBrandRudi:'puma-lockup.svg',chapterRoleTexture:'title-cloud-fill-v44.png',
 chapterTitleTexture:'title-cloud-fill-v44.png',chapterFireTexture:'fire.png',chapterHorizon:'athletics-horizon-v65.png',
 chapterSalesman:'club-salesman-v65.png',chapterTree:'foreground-tree-v65.png',
 chapterOlderAdi:'older-brothers-poses-v65.png',chapterOlderRudi:'older-brothers-poses-v65.png',
 chapterOpenAdi:'older-brothers-poses-v65.png',chapterOpenRudi:'older-brothers-poses-v65.png',chapterFactoryNew:'factory-front-v65.png',
 chapterProp1:'salvage-brown-shoe-v58.png',chapterProp2:'salvage-cream-shoe-v58.png',chapterProp3:'shoe-solid-default-v56.png',chapterProp4:'salvage-cream-shoe-v58.png',
 chapterProp5:'salvage-brown-shoe-v58.png',chapterProp6:'salvage-cream-shoe-v58.png',chapterProp7:'shoe-solid-default-v56.png',chapterProp8:'salvage-cream-shoe-v58.png'
};
for(let i=1;i<=12;i++)chapterSequenceSources['chapterAthlete'+i]='athletics-team-v65.png';
export const chapterAtlasRects={
 chapterWindow:[.027,0,.307,.59],chapterYoungRudi:[0,0,.5,1],chapterYoungAdi:[.5,0,.5,1],chapterShelf:[0,0,.5,1],chapterFence:[.5,0,.5,1],
 chapterHeadAdi:[0,0,.5,1],chapterHeadRudi:[.5,0,.5,1],
 chapterOlderAdi:[0,0,.5,.52],chapterOlderRudi:[.5,0,.5,.52],chapterOpenAdi:[0,.52,.5,.48],chapterOpenRudi:[.5,.52,.5,.48]
};
for(let i=1;i<=12;i++)chapterAtlasRects['chapterAthlete'+i]=[(i-1)/12,0,1/12,1];
export const chapterSequenceStages=[
 ['chapter-role-sales',0,3.4],['chapter-role-manufacturing',3.4,10.7],['chapter-team-formation',10.7,16.45],
 ['chapter-factory-pullback',16.45,20.6],['chapter-rivalry',20.6,30.3],['chapter-two-title',30.3,42.2],
 ['chapter-sports-outreach',42.2,49.4],['chapter-factory-growth',49.4,52.1],['chapter-pose-handoff',52.1,52.95]
].map(([id,a,b])=>({id,from:122.227+a,to:122.227+b,duration:b-a}));
const sceneOf=k=>/Young|Room|Window|Shelf|Vase|Pot|Sill|RoleTexture/.test(k)?'room':/Head|Brand|Fire/.test(k)?'rivalry':/Prop|Title/.test(k)?'title':/Horizon|Team|Athlete|Salesman|Tree/.test(k)?'sports':/Older|Open|FactoryNew/.test(k)?'growth':'factory';
export const chapterLayerCatalog=Object.keys(chapterSequenceSources).map(slot=>({slot,label:slot.replace('chapter','').replace(/([a-z])([A-Z])/g,'$1 $2'),scene:sceneOf(slot),representation:'independent image layer',defaultDepth:/Room|Horizon|Sky/.test(slot)?5:/Fence|Tree|Salesman/.test(slot)?1.1:2}));
export const chapterClamp=x=>Math.max(0,Math.min(1,x)),chapterEase=x=>{x=chapterClamp(x);return x*x*(3-2*x)};
const mix=(a,b,q)=>a+(b-a)*q,span=(t,a,b)=>chapterEase((t-a)/Math.max(.001,b-a));
export function chapterSequenceState(time,input={}){const f={...chapterSequenceDefaults,...input};let scene='room';if(time>=f.chapterFactoryCut)scene='factory';if(time>=f.chapterRivalryStart)scene='rivalry';if(time>=f.chapterBlackStart)scene='black';if(time>=f.chapterTitleStart)scene='title';if(time>=f.chapterTitleBlack)scene='black';if(time>=f.chapterSportsStart)scene='sports';if(time>=f.chapterTreeEnd)scene='growth';if(time>=f.chapterPoseStart)scene='pose';return {time,scene,active:time>=0&&time<=f.chapterSequenceDuration,duration:f.chapterSequenceDuration};}
const restoredChapterMedia=new Map();function restoreChapterImage(key){if(restoredChapterMedia.has(key))return restoredChapterMedia.get(key);if(typeof Image==='undefined'||typeof indexedDB==='undefined')return null;const image=new Image();image.onload=()=>globalThis.motionChapterMediaLoaded?.();restoredChapterMedia.set(key,image);const request=indexedDB.open('motion-local-assets',1);request.onsuccess=()=>{const db=request.result;if(!db.objectStoreNames.contains('assets')){db.close();return;}const q=db.transaction('assets').objectStore('assets').get(key);q.onsuccess=()=>{if(q.result)image.src=q.result;db.close();};};return image;}
export function resolveChapterMedia(images,input,slot){const key=input.chapterSourceBindings?.[slot]||input.historySourceBindings?.[slot]||slot;const image=images[key]||(key!==slot?restoreChapterImage(key):null)||images[slot],src=typeof image?.src==='string'?image.src:'';return {image,whole:key!==slot||input.chapterFullSources?.[slot]===true||!!(src&&chapterSequenceSources[slot]&&!src.includes(chapterSequenceSources[slot]))};}
const cutoutCache=new WeakMap();
export function chapterCutout(image,rect=null,threshold=110){
 if(!(image?.naturalWidth||image?.width))return null;const key=JSON.stringify([rect,threshold,image.src,image._assetRevision]),cached=cutoutCache.get(image);if(cached?.has(key))return cached.get(key);
 const W=image.naturalWidth||image.width,H=image.naturalHeight||image.height,r=rect||[0,0,1,1],cv=Object.assign(document.createElement('canvas'),{width:Math.max(1,Math.round(W*r[2])),height:Math.max(1,Math.round(H*r[3]))}),c=cv.getContext('2d');
 c.drawImage(image,W*r[0],H*r[1],W*r[2],H*r[3],0,0,cv.width,cv.height);const p=c.getImageData(0,0,cv.width,cv.height);let l=cv.width,u=cv.height,rr=0,b=0;
 for(let y=0;y<cv.height;y++)for(let x=0;x<cv.width;x++){const i=(y*cv.width+x)*4;if(p.data[i+3]<threshold){p.data[i+3]=0;continue;}p.data[i+3]=255;l=Math.min(l,x);rr=Math.max(rr,x);u=Math.min(u,y);b=Math.max(b,y);}
 if(rr<l||b<u)return null;c.putImageData(p,0,0);const result=Object.assign(document.createElement('canvas'),{width:rr-l+1,height:b-u+1});result.getContext('2d').drawImage(cv,l,u,result.width,result.height,0,0,result.width,result.height);const map=cached||new Map();map.set(key,result);cutoutCache.set(image,map);return result;
}
export function chapterLayerRect(slot,rect,input={},camera={}){const edit=input.chapterLayerEdits?.[slot]||{},def=chapterLayerCatalog.find(x=>x.slot===slot),depth=Math.max(.2,Number(edit.depth??def?.defaultDepth??2)),base=def?.defaultDepth??2,delta=camera.calibrated?1/depth-1/base:1/depth,z=Math.max(.05,1+(camera.zoom??0)*delta),[x,y,w,h]=rect,motion=sampleObjectMotion(input.chapterMotionTime||0,edit.motion||{}),scale=Math.max(.02,(edit.scale??1)*motion.scale);return [motion.x+480+(x+w/2-480+(edit.x||0))*z-(camera.x||0)*delta-w*z*scale/2,motion.y+270+(y+h/2-270+(edit.y||0))*z-(camera.y||0)*delta-h*z*scale/2,w*z*scale,h*z*scale];}
function sprite(c,images,f,slot,x,y,w,opts={}){
 const source=resolveChapterMedia(images,f,slot),edit=f.chapterLayerEdits?.[slot]||{},crop=edit.crop===null||source.whole?null:edit.crop||chapterAtlasRects[slot]||null,im=chapterCutout(source.image,crop,f.chapterEdgeAlpha);if(!im)return null;
 const h=opts.height??w*im.height/im.width,r=chapterLayerRect(slot,[x,y,w,h],f,opts.camera),motion=sampleObjectMotion(f.chapterMotionTime||0,edit.motion||{}),rot=(opts.rotation||0)+((edit.rotation||0)+motion.rotation)*Math.PI/180,alpha=chapterClamp((opts.alpha??1)*(edit.opacity??1)*motion.opacity),light=(opts.light??1)*(edit.light??1),blur=(opts.blur||0)+(edit.blur||0),gray=opts.gray??0;c.save();c.globalAlpha*=alpha;c.filter='grayscale('+gray+') brightness('+light+') blur('+blur+'px)';c.translate(r[0]+r[2]/2,r[1]+r[3]/2);c.rotate(rot);c.scale(opts.flip?-1:1,1);c.drawImage(im,-r[2]/2,-r[3]/2,r[2],r[3]);c.restore();return {rect:r,image:im,slot};
}
function imageLayer(c,images,f,slot,rect,opts={}){const {image}=resolveChapterMedia(images,f,slot);if(!(image?.naturalWidth||image?.width))return;const r=chapterLayerRect(slot,rect,f,opts.camera),edit=f.chapterLayerEdits?.[slot]||{};c.save();const motion=sampleObjectMotion(f.chapterMotionTime||0,edit.motion||{});c.globalAlpha*=(opts.alpha??1)*(edit.opacity??1)*motion.opacity;c.filter='brightness('+(opts.light??1)*(edit.light??1)+') blur('+((opts.blur||0)+(edit.blur||0))+'px)';c.translate(r[0]+r[2]/2,r[1]+r[3]/2);c.rotate(((edit.rotation||0)+sampleObjectMotion(f.chapterMotionTime||0,edit.motion||{}).rotation)*Math.PI/180);c.drawImage(image,-r[2]/2,-r[3]/2,r[2],r[3]);c.restore();}
function vignette(c,strength=.4){const g=c.createRadialGradient(480,250,100,480,270,620);g.addColorStop(0,'#0000');g.addColorStop(1,'rgba(0,0,0,'+strength+')');c.fillStyle=g;c.fillRect(0,0,960,540);}
function black(c,alpha=1){c.save();c.globalAlpha*=chapterClamp(alpha);c.fillStyle='#000';c.fillRect(0,0,960,540);c.restore();}
const surfaceBuffers=new Map();function editedSurface(c,f,slot,paint,camera={}){const edit=f.chapterLayerEdits?.[slot]||{};if(!Object.keys(edit).length){paint(c);return;}let cv=surfaceBuffers.get(slot);if(!cv){cv=Object.assign(document.createElement('canvas'),{width:960,height:540});surfaceBuffers.set(slot,cv);}const q=cv.getContext('2d');q.clearRect(0,0,960,540);paint(q);const r=chapterLayerRect(slot,[0,0,960,540],f,camera);c.save();c.globalAlpha*=(edit.opacity??1)*sampleObjectMotion(f.chapterMotionTime||0,edit.motion||{}).opacity;c.filter='brightness('+(edit.light??1)+') blur('+(edit.blur||0)+'px)';c.translate(r[0]+r[2]/2,r[1]+r[3]/2);c.rotate(((edit.rotation||0)+sampleObjectMotion(f.chapterMotionTime||0,edit.motion||{}).rotation)*Math.PI/180);c.drawImage(cv,-r[2]/2,-r[3]/2,r[2],r[3]);c.restore();}
function sky(c,t,images,f,mode='blue'){editedSurface(c,f,'chapterSky',q=>skyRaw(q,t,images,f,mode),{calibrated:true,x:t*f.chapterSkyWind*.3,zoom:.12});}
function ground(c,images,f,horizon=310,camera={zoom:1,x:0,y:0}){editedSurface(c,f,'chapterGround',q=>groundRaw(q,images,f,horizon,camera),{...camera,zoom:(camera.zoom||1)-1,calibrated:true});}
function skyRaw(c,t,images,f,mode='blue'){paintLivingSky(c,t,{salvageSky:resolveChapterMedia(images,f,'chapterSky').image},{skyColor:mode==='red'?'#3c0926':'#6f94a4',skyCloudColor:mode==='red'?'#100b2a':'#c9d5d7',skyWind:f.chapterSkyWind,skyEvolution:f.chapterSkyEvolution,skyDensity:.62,skyOpacity:.85,skyLayers:2,skyLight:.45,skyScale:1.1});if(mode==='red'){const g=c.createLinearGradient(0,0,960,0);g.addColorStop(0,'#071331b0');g.addColorStop(1,'#6b091a55');c.fillStyle=g;c.fillRect(0,0,960,540);}}
function groundRaw(c,images,f,horizon=f.chapterGroundHorizon,camera={zoom:1,x:0,y:0}){
 const {image}=resolveChapterMedia(images,f,'chapterGround'),W=image?.naturalWidth||image?.width||512,H=image?.naturalHeight||image?.height||512;
 const z=camera.zoom||1,hy=455+(horizon-455)*z+(camera.y||0),depth=Math.max(.2,f.chapterGroundDepthStrength),camX=camera.x||0;
 c.save();c.beginPath();c.moveTo(0,hy);for(let x=0;x<=960;x+=8)c.lineTo(x,hy+Math.sin(x*.021)*4+Math.sin(x*.071)*2);c.lineTo(960,hy);c.lineTo(1180,560);c.lineTo(-220,560);c.closePath();c.clip();
 const grad=c.createLinearGradient(0,hy,0,540);grad.addColorStop(0,'#555653');grad.addColorStop(.28,'#484946');grad.addColorStop(.72,'#343531');grad.addColorStop(1,'#242522');c.fillStyle=grad;c.fillRect(0,hy,960,540-hy);
 if(image){c.save();c.globalAlpha=1;c.filter=`grayscale(${f.chapterGroundGrayscale}) brightness(${f.chapterGroundBrightness*1.55}) contrast(1.2)`;for(let j=0;j<160;j++){const a=j/160,b=(j+1)/160,yy=hy+(540-hy)*a,YY=hy+(540-hy)*b,srcY=H*a,srcH=Math.max(2,H/160),width=(960+620*a)*depth*f.chapterGroundTextureScale;c.drawImage(image,0,Math.min(H-srcH,srcY),W,srcH,480-width/2-camX*.15*a,yy,width,Math.max(2,YY-yy+1));}c.restore();}
 // Broken, irregular dark patches bind the repeating texture into one earth surface.
 let seed=7919;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 c.save();c.globalAlpha=f.chapterGroundRoughness*.3;c.fillStyle='#151613';for(let i=0;i<48;i++){const yy=hy+rand()*(540-hy),xx=rand()*960,rx=3+rand()*26*(.3+(yy-hy)/(540-hy)),ry=1+rand()*5;c.beginPath();c.ellipse(xx,yy,rx,ry,rand()*.2,0,Math.PI*2);c.fill();}c.restore();
 // Perspective contact shade at the common building/fence/bicycle ground line.
 const y=455+(f.chapterFactoryBaseY-455)*z+(camera.y||0),shade=c.createLinearGradient(0,y-18,0,y+45);shade.addColorStop(0,'#11120fa8');shade.addColorStop(.38,'#15161178');shade.addColorStop(1,'#17181200');c.globalAlpha=f.chapterGroundContactShadow;c.fillStyle=shade;c.fillRect(0,y-18,960,63);
 c.restore();
}
function roleWord(c,t,text,amount,y,size,images,f,alpha=1){const letters=Array.from(text),n=Math.max(0,Math.min(letters.length,amount*letters.length));c.save();c.globalAlpha*=alpha;c.font='900 '+size+'px Arial';const width=c.measureText(text).width,fit=Math.min(1,920/width),x=480-width/2,shown=letters.slice(0,Math.ceil(n)).join('');c.translate(480,y);c.scale(fit,fit);c.translate(-480,-y);paintTextureFill(c,m=>{m.font='900 '+size+'px Arial';m.textBaseline='middle';m.fillStyle='#fff';m.fillText(shown,x,y);},[x-3,y-size*.7,width+6,size*1.4],resolveChapterMedia(images,f,'chapterRoleTexture').image,{mode:f.chapterRoleFillMode,color:f.chapterRoleColor,opacity:.9,speed:f.chapterTextureSpeed,scale:f.chapterTextureScale},t);c.restore();}
const roomBackCache=new WeakMap();
function roomBack(image){if(!(image?.naturalWidth||image?.width))return image;const key=String(image.src)+image._assetRevision,old=roomBackCache.get(image);if(old?.key===key)return old.canvas;const W=image.naturalWidth||image.width,H=image.naturalHeight||image.height,cv=Object.assign(document.createElement('canvas'),{width:W,height:H}),c=cv.getContext('2d');c.drawImage(image,W*.60,0,W*.39,H*.73,0,0,W,H);c.save();c.beginPath();c.moveTo(0,H);c.lineTo(W*.575,H*.77);c.lineTo(W,H*.8);c.lineTo(W,H);c.closePath();c.clip();c.drawImage(image,0,0);c.restore();const shade=c.createLinearGradient(0,0,W,0);shade.addColorStop(0,'#bb976626');shade.addColorStop(1,'#0007');c.fillStyle=shade;c.fillRect(0,0,W,H);roomBackCache.set(image,{key,canvas:cv});return cv;}
function room(c,t,images,f){
 const q=span(t,f.chapterRoomSwapStart,f.chapterRoomSwapEnd),retreat=span(t,f.chapterRoomSwapEnd,6.5),pair=Number.isFinite(f.chapterLeadInProgress)?1-chapterClamp(f.chapterLeadInProgress):span(t,f.chapterPairStart,12.6),dir=f.chapterRoomDirection,cam={x:(-220*q-280*retreat+360*pair)*dir,zoom:-.6*retreat+.6*pair};
 const resolved=resolveChapterMedia(images,f,'chapterRoom'),back=roomBack(resolved.image);c.fillStyle='#211a12';c.fillRect(0,0,960,540);const source=Object.create(images);source.chapterRoom=back;imageLayer(c,source,{...f,chapterSourceBindings:{...f.chapterSourceBindings,chapterRoom:'chapterRoom'},historySourceBindings:{...f.historySourceBindings,chapterRoom:'chapterRoom'}},'chapterRoom',[-180,-100,1320,740],{camera:cam,light:.78});
 const wr=chapterLayerRect('chapterWindow',[-20,-100,450,450],f,cam),recess=f.chapterWindowRecess,shift=(q*.65-retreat*.3+pair*.25)*recess*f.chapterWindowPerspective*dir;
 c.save();const [wx,wy,ww,wh]=wr,poly=(points,color)=>{c.fillStyle=color;c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill();};
 poly([[wx-recess,wy-recess],[wx+ww+recess,wy-recess],[wx+ww+recess,wy+wh+recess],[wx-recess,wy+wh+recess]],'#504533');
 poly([[wx-recess,wy-recess],[wx+shift,wy],[wx+shift,wy+wh],[wx-recess,wy+wh+recess]],'#b3a17d');
 poly([[wx+ww+recess,wy-recess],[wx+ww+shift,wy],[wx+ww+shift,wy+wh],[wx+ww+recess,wy+wh+recess]],'#312b21');
 poly([[wx-recess,wy+wh+recess],[wx+shift,wy+wh],[wx+ww+shift,wy+wh],[wx+ww+recess,wy+wh+recess]],'#c4b18c');c.restore();
 sprite(c,images,f,'chapterWindow',-20+shift,-100,450,{height:450,camera:cam,light:.94});
 sprite(c,images,f,'chapterShelf',805,-45,265,{camera:cam,light:.6});
 for(let i=1;i<=3;i++)sprite(c,images,f,'chapterPot'+i,835+(i%2)*75,100+(i-1)*145,70,{camera:cam,light:.65});
 sprite(c,images,f,'chapterSill',40,235,165,{camera:cam,light:.7});
 const rudiX=mix(mix(295,1010,q),535,pair),rudiW=mix(mix(550,390,q),475,pair),rudiY=mix(55,95,pair);
 sprite(c,images,f,'chapterYoungRudi',dir<0?960-rudiX-rudiW:rudiX,rudiY,rudiW,{light:.79,camera:{...cam,calibrated:true}});
 const lead=Number.isFinite(f.chapterLeadInProgress),leadEnter=span(f.chapterLeadInProgress,0,.15),leadExit=span(f.chapterLeadInProgress,.4,.85);const adiW=lead?650:mix(mix(760,680,q)*(1-f.chapterRoomRetreat*retreat),500,pair),adiX=lead?-780+870*leadEnter*(1-leadExit):mix(mix(-780,0,q)+160*retreat,90,pair),adiY=mix(mix(50,-40,q)+60*retreat,50,pair);
 if(q>0||pair>0)sprite(c,images,f,'chapterYoungAdi',dir<0?960-adiX-adiW:adiX,adiY,adiW,{light:.86,camera:{...cam,calibrated:true}});
 if(t<4)roleWord(c,t,f.chapterSalesText,span(t,f.chapterSalesStart,f.chapterSalesStart+f.chapterSalesReveal),260,f.chapterSalesFont,images,f,1-span(t,3.05,3.95));
 if(t>=f.chapterManufactureStart&&t<f.chapterPairStart+.7)roleWord(c,t,f.chapterManufacturingText,span(t,f.chapterManufactureStart,f.chapterManufactureEnd),280,f.chapterManufacturingFont,images,f,1-span(t,f.chapterPairStart,f.chapterPairStart+.7));
 if(t>=f.chapterWireStart){const draw=span(t,f.chapterWireStart,f.chapterWireStart+.8),x=100,end=100+770*draw,y=438;c.strokeStyle='#eef6f5';c.lineWidth=1.25;c.beginPath();c.moveTo(x,y);c.lineTo(end,y);c.stroke();for(let a=x+8;a<end;a+=19){c.beginPath();c.moveTo(a-3,y+4);c.lineTo(a+3,y-4);c.moveTo(a,y-4);c.lineTo(a+5,y+3);c.stroke();}if(f.chapterMarkerEnabled){const p=span(t,f.chapterWireStart,f.chapterFactoryCut),mx=100+p*770,s=f.chapterMarkerSize;c.strokeStyle=f.chapterMarkerColor;c.lineWidth=2;c.beginPath();c.moveTo(mx-s*.5,y-s);c.lineTo(mx+s*.5,y-s);c.lineTo(mx,y-s*.3);c.closePath();c.moveTo(mx,y-s*.3);c.lineTo(mx,y+s);c.stroke();}}
 vignette(c,.45);
}
function transformFactoryRect(rect,z,dy=0,dx=0){return [480+(rect[0]-480)*z+dx,455+(rect[1]-455)*z+dy,rect[2]*z,rect[3]*z];}
function factory(c,t,images,f,{background=true,zoom=null,offsetX=0,offsetY=0}={}){
 const a=Math.max(0,t-f.chapterFactoryCut),z=zoom??1+(f.chapterFactoryInitialZoom-1)*Math.exp(-a*f.chapterFactoryDecay),dy=offsetY-f.chapterFactoryEntryLift*Math.exp(-a*5),dx=offsetX-50*Math.exp(-a*3);
 if(background){sky(c,t,images,f);ground(c,images,f,f.chapterGroundHorizon,{zoom:z,y:dy,x:dx});}
 const building=transformFactoryRect([265,f.chapterFactoryY,f.chapterFactoryWidth,300],z,dy,dx),fence=transformFactoryRect([80,f.chapterFenceGroundY-205*f.chapterFenceScale,335*f.chapterFenceScale,205*f.chapterFenceScale],z,dy,dx),bike=transformFactoryRect([f.chapterBikeX,f.chapterBikeGroundY-90*f.chapterBikeScale,115*f.chapterBikeScale,90*f.chapterBikeScale],z,dy,dx);
 if(background){const contact=(x,y,w,rx,ry,alpha)=>{c.save();c.globalAlpha=alpha;c.fillStyle='#11120f';c.filter=`blur(${ry}px)`;c.beginPath();c.ellipse(x+w/2,y+ry*.25,rx,ry,0,0,Math.PI*2);c.fill();c.restore();};contact(building[0],building[1]+building[3]-12,building[2],building[2]*.46,14,f.chapterGroundContactShadow);contact(fence[0],fence[1]+fence[3]-3,fence[2],fence[2]*.48,9,f.chapterGroundContactShadow*.8);contact(bike[0],bike[1]+bike[3]-4,bike[2],bike[2]*.48,6,f.chapterGroundContactShadow*.9);}
 sprite(c,images,f,'chapterFactoryOld',building[0],building[1],building[2],{height:building[3],camera:{calibrated:true,zoom:z-1,x:dx,y:dy},gray:1,light:t>=f.chapterGroundFireStart?1.05:.9});
 sprite(c,images,f,'chapterFence',fence[0],fence[1],fence[2],{height:fence[3],camera:{calibrated:true,zoom:z-1,x:dx,y:dy},gray:1,light:.9});
 sprite(c,images,f,'chapterBike',bike[0],bike[1],bike[2],{height:bike[3],camera:{calibrated:true,zoom:z-1,x:dx,y:dy},gray:1,light:.72});
 if(background)vignette(c,.32);
}
function fireMedia(images,f){const bind=f.chapterSourceBindings?.chapterFireTexture||f.historySourceBindings?.chapterFireTexture;return bind?resolveChapterMedia(images,f,'chapterFireTexture').image:images.chapterFireVideo||effectMedia('warFire')||resolveChapterMedia(images,f,'chapterFireTexture').image;}
export function chapterEyePoint(layer,u,v,rotation=0){const r=layer.rect,cx=r[0]+r[2]/2,cy=r[1]+r[3]/2,x=(u-.5)*r[2],y=(v-.5)*r[3];return [cx+x*Math.cos(rotation)-y*Math.sin(rotation),cy+x*Math.sin(rotation)+y*Math.cos(rotation)];}
function eyeFire(c,t,images,f,layer,u,v){if(!layer)return;const edit=f.chapterLayerEdits?.[layer.slot]||{},rotation=(edit.rotation||0)*Math.PI/180,p=chapterEyePoint(layer,u,v,rotation),s=f.chapterEyeFireSize*(edit.scale??1);c.save();c.translate(...p);c.rotate(rotation);c.beginPath();c.ellipse(0,0,s*.72,s*.2,0,0,Math.PI*2);c.clip();paintFire(c,t,[-s,-s*.45,s*2,s*.8],.95,fireMedia(images,f),{glow:.2});c.restore();c.save();c.globalCompositeOperation='screen';c.globalAlpha=.6+Math.sin(t*14)*.1;c.fillStyle='#ffbb32';c.shadowColor='#ff5e00';c.shadowBlur=16;c.beginPath();c.ellipse(p[0],p[1],s*.43,s*.045,rotation,0,Math.PI*2);c.fill();c.restore();}
function rivalry(c,t,images,f){
 sky(c,t,images,f);const q=span(t,f.chapterRivalryStart,f.chapterRivalryStart+1.65);
 for(const [i,color]of [f.chapterPanelBlue,f.chapterPanelRed].entries()){const turn=span(t,f.chapterRivalryStart+i*.18,f.chapterRivalryStart+1.4+i*.18),w=430*Math.max(.025,Math.cos((1-turn)*f.chapterHeadYaw*Math.PI/180)),center=i?760:200;c.fillStyle=color;c.fillRect(center-w/2,0,w,540);sprite(c,images,f,i?'chapterBrandRudi':'chapterBrandAdi',center-w*.3,82,w*.6,{light:.72,alpha:turn});}
 factory(c,t,images,f,{background:false,zoom:1+f.chapterFactoryRetreat*.6*q,offsetY:0});const size=f.chapterHeadSize;
 const leftTurn=span(t,f.chapterRivalryStart,f.chapterRivalryStart+1.5),rightTurn=span(t,f.chapterRivalryStart+.18,f.chapterRivalryStart+1.7),leftWidth=size*Math.max(.04,Math.cos((1-leftTurn)*f.chapterHeadYaw*Math.PI/180)),rightWidth=size*Math.max(.04,Math.cos((1-rightTurn)*f.chapterHeadYaw*Math.PI/180));
 const L=sprite(c,images,f,'chapterHeadAdi',80-leftWidth*.5,-38,leftWidth,{height:625,light:f.chapterHeadLight,alpha:leftTurn}),R=sprite(c,images,f,'chapterHeadRudi',875-rightWidth*.5,-38,rightWidth,{height:625,light:f.chapterHeadLight,alpha:rightTurn});
 if(t>=f.chapterEyeFireStart){eyeFire(c,t,images,f,L,f.chapterLeftEyeU,f.chapterLeftEyeV);eyeFire(c,t,images,f,R,f.chapterRightEyeU,f.chapterRightEyeV);}
 if(t>=f.chapterGroundFireStart){const strength=span(t,f.chapterGroundFireStart,f.chapterGroundFireStart+.75)*f.chapterFireStrength;paintFire(c,t,[0,540-f.chapterFireHeight,960,f.chapterFireHeight],strength,fireMedia(images,f),{glow:.28});}
 vignette(c,.26);black(c,span(t,f.chapterFadeStart,f.chapterBlackStart));
}
function glyph(c,ch,x,y,size,images,f,t,blur,angle,color){c.save();c.translate(x,y);c.rotate(angle);c.filter='blur('+blur+'px)';c.font='900 '+size+'px Arial';c.textAlign='center';c.textBaseline='middle';c.shadowColor=color;c.shadowBlur=14;if(f.chapterTitleFillMode==='image'){const w=Math.max(12,c.measureText(ch).width+8);paintTextureFill(c,m=>{m.font='900 '+size+'px Arial';m.textAlign='center';m.textBaseline='middle';m.fillText(ch,0,0);},[-w/2,-size*.7,w,size*1.4],resolveChapterMedia(images,f,'chapterTitleTexture').image,{mode:'image',color,opacity:1,speed:f.chapterTextureSpeed,scale:f.chapterTextureScale},t);}else{const g=c.createLinearGradient(0,-size*.5,0,size*.6);g.addColorStop(0,'#fff5d7');g.addColorStop(1,color);c.fillStyle=g;c.fillText(ch,0,0);}c.restore();}
function chapterTitle(c,t,images,f){
 sky(c,t,images,f,'red');for(let i=0;i<5;i++){c.save();c.translate(100+i*190,230+Math.sin(t*.15+i)*70);c.rotate(t*.025+i);c.fillStyle=i%2?'#6524332b':'#433b8e25';c.fillRect(-70,-95,140,190);c.restore();}
 const age=t-f.chapterTitleStart;for(let i=0;i<Math.min(8,f.chapterPropCount);i++){const seed=(i*97+f.chapterPropSeed)%331,angle=seed*.071,radius=180+((seed*3+age*f.chapterPropSpeed)%650),x=480+Math.cos(angle+age*.018)*radius*1.4,y=270+Math.sin(angle+age*.018)*radius*.8,w=45+(radius-180)*.24;sprite(c,images,f,'chapterProp'+(i+1),x-w/2,y-w*.3,w,{rotation:seed*.1+age*(i%2?-.08:.08),blur:Math.max(0,(w-100)*.07),alpha:.75});}
 const retreat=1-f.chapterTitleRetreat*span(t,f.chapterTitleAssembleEnd,f.chapterTitleRetreatEnd);c.save();c.translate(480,270);c.scale(retreat,retreat);c.translate(-480,-270);
 for(const [row,text,size,y]of [[0,f.chapterTitleSmall,24,226],[1,f.chapterTitleText,f.chapterTitleFont,284]]){c.font='900 '+size+'px Arial';const total=c.measureText(text).width;let x=480-total/2;Array.from(text).forEach((ch,i)=>{const w=c.measureText(ch).width,p=span(t,f.chapterTitleStart+i*f.chapterGlyphDelay,f.chapterTitleAssembleEnd),j=i+row*29,sx=Math.sin(j*9.7)*f.chapterTitleScatterX,sy=Math.cos(j*5.4)*f.chapterTitleScatterY;glyph(c,ch,x+w/2+sx*(1-p),y+sy*(1-p),size*(1+(1-p)*1.1),images,f,t,(1-p)*f.chapterTitleBlur,(1-p)*Math.sin(j)*.8,row?f.chapterTitleColor:'#f4eee5');x+=w;});}
 c.restore();vignette(c,.27);black(c,span(t,f.chapterTitleRetreatEnd,f.chapterTitleBlack));
}
function personAt(c,images,f,slot,center,feet,height,opts={}){const s=resolveChapterMedia(images,f,slot),im=chapterCutout(s.image,s.whole?null:chapterAtlasRects[slot]||null,f.chapterEdgeAlpha);if(!im)return;const w=height*im.width/im.height;return sprite(c,images,f,slot,center-w/2,feet-height,w,{...opts,height});}
function sports(c,t,images,f){
 sky(c,t,images,f);const reveal=span(t,f.chapterSportsStart,f.chapterSportsStart+1.2),out=span(t,f.chapterSportsStart+1.3,46.8),scale=1-f.chapterSportsRetreat*out;ground(c,images,f,300);
 sprite(c,images,f,'chapterHorizon',-90+45*out,60,1140*(1-.15*out),{blur:f.chapterHorizonBlur,gray:1,light:.83});
 const feet=mix(720,520,reveal)-65*out,spacing=56*scale,count=Math.min(12,Math.max(1,Math.round(f.chapterTeamCount)));
 for(let i=0;i<count;i++)personAt(c,images,f,'chapterAthlete'+(i+1),480+(i-(count-1)/2)*spacing,feet,(208+(i%3-1)*6)*scale,{gray:1,light:.9});
 const entry=span(t,f.chapterSalesmanStart,f.chapterSalesmanEnd);if(entry>0)personAt(c,images,f,'chapterSalesman',480,mix(1050,630,entry),f.chapterSalesmanSize,{gray:1,light:.83});
 vignette(c,.33);black(c,1-reveal);
}
function growthTableau(c,t,images,f,{offsetX=0,offsetY=0,scale=1,open=false}={}){
 c.save();c.translate(480+offsetX,420+offsetY);c.scale(scale,scale);c.translate(-480,-420);
 if(open){sprite(c,images,f,'chapterOpenAdi',205,-12,430,{light:.9});sprite(c,images,f,'chapterOpenRudi',775,-12,480,{light:.88});sprite(c,images,f,'chapterFactoryOld',425,245,480,{gray:1,light:.95});sprite(c,images,f,'chapterFence',190,397,350,{height:160,gray:1});}
 else{sprite(c,images,f,'chapterOlderAdi',235,26,300,{light:.91});sprite(c,images,f,'chapterOlderRudi',470,26,300,{light:.9});sprite(c,images,f,'chapterFactoryNew',285,267,405,{height:180,light:.9});}
 c.restore();
}
function growth(c,t,images,f){sky(c,t,images,f);ground(c,images,f,365);const q=span(t,f.chapterTreeEnd,f.chapterPoseStart),s=1+.15*q;growthTableau(c,t,images,f,{scale:s});vignette(c,.24);}
export function chapterOcclusionEdge(progress,direction){const horizontal=direction==='left'||direction==='right',size=horizontal?960:540,forward=direction==='right'||direction==='down';return {horizontal,forward,size,edge:forward?mix(-80,size+80,progress):mix(size+80,-80,progress)};}
function clipSide(c,state,after){const {horizontal,forward,edge,size}=state,low=forward?after:!after;c.beginPath();if(horizontal)c.rect(low?0:edge,0,low?edge:960-edge,540);else c.rect(0,low?0:edge,960,low?edge:540-edge);c.clip();}
function treePass(c,t,images,f){const q=span(t,f.chapterTreeStart,f.chapterTreeEnd),edge=chapterOcclusionEdge(q*q,f.chapterTreeDirection),margin=f.chapterTreeWidth*.7;edge.edge=edge.forward?-margin+(edge.size+margin*2)*q*q:edge.size+margin-(edge.size+margin*2)*q*q;c.save();clipSide(c,edge,false);sports(c,t,images,f);c.restore();c.save();clipSide(c,edge,true);growth(c,t,images,f);c.restore();sprite(c,images,f,'chapterTree',edge.horizontal?edge.edge-f.chapterTreeWidth/2:-80,edge.horizontal?-190:edge.edge-620,f.chapterTreeWidth,{blur:f.chapterTreeBlur});}
function poseHandoff(c,t,images,f){sky(c,t,images,f);const age=Math.max(0,t-f.chapterPoseStart),amount=age*f.chapterPosePixelsPerSecond,dir=f.chapterPoseDirection,dx=dir==='right'?amount:dir==='left'?-amount:0,dy=dir==='down'?amount:dir==='up'?-amount:0;ground(c,images,f,365,{x:dx*.1});growthTableau(c,t,images,f,{offsetX:dx,offsetY:dy,scale:1.15+age*.45});growthTableau(c,t,images,f,{offsetX:dx+(dir==='left'?1100:dir==='right'?-1100:0),offsetY:dy+(dir==='up'?650:dir==='down'?-650:0),scale:1.1,open:true});vignette(c,.25);}
export function paintChapterSequence(c,time,images,input={}){
 const f={...chapterSequenceDefaults,...input,chapterMotionTime:time},s=chapterSequenceState(time,f);if(!f.chapterSequenceEnabled||time<0)return s;c.save();black(c);
 if(time<f.chapterFactoryCut)room(c,time,images,f);else if(time<f.chapterRivalryStart)factory(c,time,images,f);else if(time<f.chapterBlackStart)rivalry(c,time,images,f);else if(time>=f.chapterTitleStart&&time<f.chapterTitleBlack)chapterTitle(c,time,images,f);else if(time>=f.chapterSportsStart&&time<f.chapterTreeStart)sports(c,time,images,f);else if(time>=f.chapterTreeStart&&time<f.chapterTreeEnd)treePass(c,time,images,f);else if(time>=f.chapterTreeEnd&&time<f.chapterPoseStart)growth(c,time,images,f);else if(time>=f.chapterPoseStart)poseHandoff(c,time,images,f);c.restore();return s;
}
export function paintChapterWindowJoin(c,progress,images,input,before,after){const f={...chapterSequenceDefaults,...input},edge=chapterOcclusionEdge(chapterClamp(progress),f.chapterJoinDirection);c.save();clipSide(c,edge,false);before();c.restore();c.save();clipSide(c,edge,true);after();c.restore();c.save();c.fillStyle='#3c3023';if(edge.horizontal){c.fillRect(edge.edge-33,0,66,540);c.fillStyle='#8e7753';c.fillRect(edge.edge-24,0,7,540);c.fillStyle='#181713';c.fillRect(edge.edge+22,0,6,540);}else{c.fillRect(0,edge.edge-32,960,64);c.fillStyle='#8e7753';c.fillRect(0,edge.edge-24,960,7);}c.restore();}

// Entry-only staging reuses approved portrait/room sources and converges exactly to room(t=0).
export function paintChapterRoomLeadIn(c,progress,images,input={}){room(c,0,images,{...chapterSequenceDefaults,...input,chapterLeadInProgress:progress,chapterSalesStart:999});}
