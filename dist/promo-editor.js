import {duration,masterStart,scenes,defaults,paint} from './promo-sequence.js';
import {decodeMedia,loadPromo,syncPromo} from './promo-media.js';
const $=id=>document.getElementById(id), c=$('stage').getContext('2d');
const base=await loadPromo();
let config=structuredClone(defaults), media={...base}, time=0, playing=false, last=0;
const setStatus=s=>$('status').textContent=s;
function draw(){
 const t=Math.min(duration,Math.max(0,config.reverse?duration-time*config.speed:time*config.speed));
 const index=scenes.findLastIndex(([,label])=>t>=config.cues[label]);
 const [start,label]=scenes[index], [end,next]=scenes[index+1]||[duration,null];
 const mapped=start+(end-start)*(t-config.cues[label])/((next?config.cues[next]:duration)-config.cues[label]);
 syncPromo(media,mapped,draw);paint(c,time,media,config);
 const stamp=masterStart+t;
 $('clock').value=Math.floor(stamp/60)+':'+(stamp%60).toFixed(2).padStart(5,'0');
 $('time').value=time;
}
function field(host,name,obj,key,limits){
 const l=document.createElement('label'),i=document.createElement('input');l.append(name,i);host.append(l);
 const oldType=typeof obj[key];i.type=oldType==='boolean'?'checkbox':limits?'number':'text';
 if(limits)[i.min,i.max,i.step]=limits;
 if(i.type==='checkbox')i.checked=obj[key];else i.value=obj[key];
 i.onchange=()=>{const old=obj[key];obj[key]=i.type==='checkbox'?i.checked:limits?i.valueAsNumber:i.value;
  try{if(limits&&(!Number.isFinite(obj[key])||obj[key]<+i.min||obj[key]>+i.max))throw Error('Value outside range');validate(config);draw();setStatus('Updated '+name)}
  catch(e){obj[key]=old;i.value=old;setStatus(e.message)}
 };
}
function validate(v){
 let last=-1;for(const [,label] of scenes){const n=v.cues[label];if(!Number.isFinite(n)||n<=last||n>=duration||(last===-1&&n!==0))throw Error('Scene cues must start at zero and stay in order');last=n}
 if(!Number.isFinite(v.speed)||v.speed<.05||v.speed>4||![-1,1].includes(v.direction))throw Error('Invalid motion settings');
 for(const k of ['travel','particles','glow','exposure'])if(!Number.isFinite(v[k])||v[k]<0||v[k]>2)throw Error('Invalid '+k);
 for(const [id,l] of Object.entries(v.layers)){if(!defaults.layers[id]||['x','y','scale','rotation','opacity','blur','depth'].some(k=>!Number.isFinite(l[k]))||l.scale<=0||l.opacity<0||l.opacity>1||l.blur<0)throw Error('Invalid layer '+id)}
}
function layers(){
 const host=$('layerControls');host.replaceChildren();const l=config.layers[$('layer').value];
 for(const [n,k,min,max,step] of [['X','x',-960,960,1],['Y','y',-540,540,1],['Scale','scale',.05,5,.01],['Rotation','rotation',-180,180,1],['Opacity','opacity',0,1,.01],['Blur','blur',0,40,.1],['Depth','depth',0,4,.1]])field(host,n,l,k,[min,max,step]);field(host,'Visible',l,'visible');
}
function controls(){
 for(const id of ['motion','cues','copy'])$(id).replaceChildren();
 for(const [key,limits] of Object.entries({speed:[.05,4,.05],direction:[-1,1,2],travel:[0,2,.05],particles:[0,2,.05],glow:[0,2,.05],exposure:[0,1,.01]}))field($('motion'),key,config,key,limits);
 field($('motion'),'Reverse',config,'reverse');
 for(const [,name] of scenes.slice(1))field($('cues'),name,config.cues,name,[.01,119.99,.01]);
 for(const key of Object.keys(config.copy))field($('copy'),key,config.copy,key,key==='counter'?[0,999999999,1]:null);
 layers();
}
$('scene').append(...scenes.map(([,label])=>new Option(label,label)));
$('layer').append(...Object.keys(defaults.layers).map(id=>new Option(id,id)));
function seek(t){playing=false;$('play').textContent='Play';time=t;draw()}
$('scene').onchange=()=>seek(Math.min(duration,((config.reverse?duration-config.cues[$('scene').value]:config.cues[$('scene').value])+.001)/config.speed));
$('time').oninput=()=>seek(+$('time').value);$('layer').onchange=layers;
$('play').onclick=()=>{if(time>=duration)time=0;playing=!playing;last=0;$('play').textContent=playing?'Pause':'Play'};
$('reset').onclick=()=>{config=structuredClone(defaults);media={...base};controls();seek(0);setStatus('Reset')};
$('replace').onchange=async e=>{try{
 const file=e.target.files[0];if(!file)return;const id=$('layer').value;
 if(!/^image\/(png|jpeg|webp)$/.test(file.type)&&!(['host','flame'].includes(id)&&/^video\/(mp4|webm)$/.test(file.type)))throw Error('Choose an image, or a video for host/flame');
 const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)});
 const asset=await decodeMedia(id,data);media[id]=asset;(config.media??={})[id]=data;draw();setStatus('Replaced '+id+' · motion retained');
 }catch(err){setStatus(err.message)}finally{e.target.value=''}};
$('save').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(config,null,2)],{type:'application/json'}));a.download='regaarder-v129-preset.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
$('load').onchange=async e=>{try{
 const file=e.target.files[0];if(!file)return;const v=JSON.parse(await file.text());validate(v);
 const replacements={};for(const [id,data] of Object.entries(v.media||{})){if(!defaults.layers[id]||!/^data:(image\/(png|jpeg|webp)|video\/(mp4|webm));base64,/.test(data))throw Error('Invalid media binding');replacements[id]=await decodeMedia(id,data)}
 config=v;media={...base,...replacements};controls();draw();setStatus('Preset loaded');
 }catch(err){setStatus(err.message)}finally{e.target.value=''}};
function tick(now){if(playing){if(last)time=Math.min(duration,time+(now-last)/1000);draw();if(time>=duration)seek(duration)}last=now;requestAnimationFrame(tick)}
controls();draw();setStatus('Ready');window.promoEditor={seek,get config(){return config}};requestAnimationFrame(tick);
