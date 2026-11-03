// Browser-level V110 sanity: movement directions and mesh/rig integrity.
// Run from repository root: node scripts/qa/reference-polish-v110.mjs
import assert from 'node:assert/strict';
import {launch} from './browser.mjs';
const runtime=await launch();
try {
  await runtime.page.goto(runtime.url+'/qa-native-v106.html');
  const report=await runtime.page.evaluate(async()=>{
    const {createFinalHandshake:original} = await import('/native3d-v97/previous-scenes-v105.js');
    const {applySceneRefinement} = await import('/native3d-v97/refinement-v106.js');
    const {polishHandshakeTiming} = await import('/native3d-v97/handshake-polish-v109.js');
    const {createFinalHandshake} = await import('/native3d-v97/final-scenes.js');
    const {validateScene} = await import('/native3d-v97/scene.js');
    const {loadHumanoid,Native3DEngine,T} = await import('/native3d-v97/engine.js');
    const baseline=polishHandshakeTiming(applySceneRefinement(original()));
    const revised=createFinalHandshake();
    validateScene(baseline);validateScene(revised);
    const data=await loadHumanoid(),engine=new Native3DEngine(document.createElement('canvas'),data,{width:640,height:360});
    const project = v => {const p=v.clone().project(engine.camera);return [(p.x+1)*320,(1-p.y)*180];};
    const measure = scene => {
      engine.render(scene,2.417);
      const c=id=>engine.characters.get(id);
      const bone=(id,name)=>project(c(id).map[name].getWorldPosition(new T.Vector3()));
      const palm=project(new T.Vector3(...scene.interactions.find(g=>g.id==='handshake-contact').center));
      return {blueHead:bone('final-blue','head'),blueShoulder:bone('final-blue','upperarm01.L'),
        creamHead:bone('final-coach','head'),creamShoulder:bone('final-coach','upperarm01.R'),
        creamRoot:project(c('final-coach').group.getWorldPosition(new T.Vector3())),palm};
    };
    try {
      const before=measure(baseline),after=measure(revised);
      const shift=(key,axis)=>after[key][axis]-before[key][axis];
      if(shift('blueHead',1)<5)throw Error('Blue head did not descend');
      if(shift('blueShoulder',1)<5)throw Error('Blue shoulders did not descend');
      if(shift('creamHead',0)>-4)throw Error('Cream head did not move left');
      if(shift('creamRoot',0)>-4)throw Error('Cream root did not move left');
      if(shift('palm',1)<10)throw Error('The handshake target did not move down');
      if(revised.backgroundGradientStops?.bottom!=='#175fa5')throw Error('Background gradient was not updated');
      if(!Number.isFinite(after.blueHead[0]))throw Error('Non-finite projected character');
      const rows=[];
      for(const time of[0,.4,.7,1,1.75,2.417,2.55,2.8,3.2,3.3,4,5.6]){
        engine.render(revised,time);
        let maxSeam=0;
        for(const c of engine.characters.values()){
          if(!c.bones.every(b=>b.matrixWorld.elements.every(Number.isFinite)))
            throw Error('Nonfinite bone matrices at '+time);
          const body=c.surfaces.find(r=>r.name==='body');
          for(const r of c.surfaces.filter(r=>r.seamBindings))
            for(const pair of r.seamBindings){
              const a=body.mesh.localToWorld(body.mesh.getVertexPosition(pair.bodyIndex,new T.Vector3()));
              const b=r.mesh.localToWorld(r.mesh.getVertexPosition(pair.headIndex,new T.Vector3()));
              maxSeam=Math.max(maxSeam,a.distanceTo(b));
            }
        }
        if(maxSeam>1e-5)throw Error('Open seam at '+time+': '+maxSeam);
        const contacts=engine.fingerContactReport||[];
        if(contacts.some(k=>Number.isFinite(k.after)&&Number.isFinite(k.before)&&k.after>k.before+1e-10))
          throw Error('Contact correction made fingers worse at '+time);
        rows.push({time,maxSeam,contactCorrections:contacts.length});
      }
      return{before,after,deltaPixels:Object.fromEntries(Object.keys(before).map(k=>[k,after[k].map((v,i)=>v-before[k][i])])),rows};
    }finally{engine.dispose();}
  });
  assert.deepEqual(runtime.errors,[]);
  console.log(JSON.stringify({deltaPixels:report.deltaPixels,frames:report.rows.length,
    maxSeamM:Math.max(...report.rows.map(r=>r.maxSeam)),errors:runtime.errors},null,2));
}finally{await runtime.close();}
