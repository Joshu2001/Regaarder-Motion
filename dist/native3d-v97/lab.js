import{loadHumanoid}from'./engine.js';
import{mountNativeEditor}from'./editor.js';
import{createNativeScene,validateScene}from'./scene.js';
import{createFinalHandshake}from'./final-scenes.js';
import{exportNativeGLB,downloadGLB}from'./export.js';
const key='motion-native3d-lab-v100';
try{
 const data=await loadHumanoid();let scene,warning='';
 const raw=localStorage.getItem(key);
 if(raw)try{scene=JSON.parse(raw);validateScene(scene);}catch(e){localStorage.setItem(key+'-recovery-'+Date.now(),raw);scene=null;warning='The saved scene could not be opened. Its original data has been retained for recovery.';}
 const api=mountNativeEditor(document.querySelector('#native3d'),scene||createFinalHandshake(),data,{onSave:s=>localStorage.setItem(key,JSON.stringify(s)),onExportGLB:async s=>downloadGLB(await exportNativeGLB(s,data))});
 const bar=document.querySelector('.n3-toolbar'),add=(label,fn)=>{const b=document.createElement('button');b.textContent=label;b.onclick=fn;bar.append(b);};
 add('Load updated handshake',()=>api.setScene(createFinalHandshake()));
 const previous=localStorage.getItem('motion-native3d-lab-v98')||localStorage.getItem('motion-native3d-lab-v97');
 if(previous)add('Restore previous saved scene',()=>{try{const s=JSON.parse(previous);validateScene(s);api.setScene(s);}catch(e){document.querySelector('.n3-state').textContent='Previous scene could not be opened: '+e.message;}});
 if(warning)document.querySelector('.n3-state').textContent=warning;
 window.Native3DLab={api,data,createNativeScene,exportNativeGLB};window.native3DReady=true;
}catch(e){document.querySelector('#native3d').textContent='3D editor could not initialize: '+e.message;console.error(e);}
