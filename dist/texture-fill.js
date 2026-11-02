// Reusable alpha-mask fill. Source artwork and fill media remain independent.
export const textureDefaults={laundryTitleFill:'image',laundryTitleFillColor:'#64c4e0',laundryTitleTextureSpeed:16,laundryTitleTextureScale:1,laundryTitleTextureOpacity:.65};
let mask,fill;
export function paintTextureFill(c,paintMask,rect,source,options={},time=0){
 const [x,y,w,h]=rect;if(w<=0||h<=0)return;
 mask||=document.createElement('canvas');fill||=document.createElement('canvas');
 for(const b of [mask,fill]){if(b.width!==Math.ceil(w))b.width=Math.ceil(w);if(b.height!==Math.ceil(h))b.height=Math.ceil(h);}
 const m=mask.getContext('2d'),f=fill.getContext('2d');m.clearRect(0,0,w,h);m.save();m.translate(-x,-y);paintMask(m);m.restore();f.clearRect(0,0,w,h);f.globalCompositeOperation='source-over';f.fillStyle=options.color||'#d8f7ff';f.fillRect(0,0,w,h);
 const im=source?._offlineFrame?source._offlineFrame(time):source,iw=im?.videoWidth||im?.naturalWidth||im?.width,ih=im?.videoHeight||im?.naturalHeight||im?.height;
 if(options.mode!=='color'&&iw&&ih){const k=Math.max(w/iw,h/ih)*Math.max(1,options.scale||1),tw=iw*k,th=ih*k,offset=((time*(options.speed??16))%tw+tw)%tw;f.save();f.globalAlpha=Math.max(0,Math.min(1,options.opacity??1));for(let j=-1;j<=1;j++)f.drawImage(im,j*tw-offset,(h-th)/2,tw,th);f.restore();}
 f.globalCompositeOperation='destination-in';f.drawImage(mask,0,0);f.globalCompositeOperation='source-over';c.drawImage(fill,x,y,w,h);
}
