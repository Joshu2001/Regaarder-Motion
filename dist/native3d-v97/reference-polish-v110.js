// V110: editable reference-driven corrections for source 902.417 s (local 2.417 s).
// Derived from the original side-by-side review, not from generated imagery.
// All changes are conventional native scene parameters and animation keyframes.
import {putKey} from './scene.js';

export const SOURCE_FRAME = Object.freeze({sourceTime:902.417,localTime:2.417,width:643,height:360});
export const REFERENCE_LANDMARKS = Object.freeze({
  // Coordinates are relative to the left or right 643px picture, from the
  // top of the supplied screenshot (including its ~30px title strip).
  blueHeadTop: {reference:[220,82],before:[197,56],afterGoal:'lower head / round silhouette'},
  blueShoulder: {reference:[181,176],before:[180,151],afterGoal:'lower upper body without moving feet'},
  blueHip: {reference:[177,335],before:[169,326],afterGoal:'preserve stance'},
  creamHatTop: {reference:[381,74],before:[412,83],afterGoal:'raise hat without raising hips'},
  creamHip: {reference:[393,292],before:[411,279],afterGoal:'move partner left'},
  handshake: {reference:[309,284],before:[312,251],afterGoal:'lower joint grip target'}
});
const requireNode=(scene,id)=>{const n=scene.nodes.find(n=>n.id===id);if(!n)throw Error('Missing handshake node: '+id);return n;};
function moveRoot(n,dx){n.position=[n.position[0]+dx,n.position[1],n.position[2]];for(const key of n.tracks?.position||[])key.value=[key.value[0]+dx,key.value[1],key.value[2]];}
function addYaw(n,delta){n.rotation[1]+=delta;for(const key of n.tracks?.rotation||[])key.value[1]+=delta;}
function leanHold(n,angle,release){for(const time of [.7,2.05,release])putKey(n,'leanAngle',time,angle);}
function headShift(n,z){n.bones??={};const head=n.bones.head??={};const old=head.positionOffset||[0,0,0];head.positionOffset=[old[0],old[1],old[2]+z];}
export function applyReferencePolishV110(scene){
  const blue=requireNode(scene,'final-blue'),cream=requireNode(scene,'final-coach'),camera=requireNode(scene,scene.cameraId);
  const contact=scene.interactions?.find(g=>g.id==='handshake-contact');
  if(!contact||!(contact.contact<contact.release))throw Error('Handshake timing is missing');

  // Screen registration: in the reconstruction the cream actor stands too
  // far right while the clasp is already near its correct horizontal location.
  // Move the cream character only modestly; retain a common world-space grip.
  moveRoot(blue,.115);
  moveRoot(cream,-.080);
  addYaw(cream,5);

  // The reference blue head and shoulders are ~20-26 px lower, whereas the
  // pelvis is almost registered. Do not move the whole object below the floor:
  // this shape morph translates only the upper torso, head, and attached rig.
  Object.assign(blue.shape,{
    upperBodyOffsetY:-.090,
    cranialHeight:-.18, cranialWidth:.105, cranialDepth:-.085,
    neckShortening:.235,neckThickness:.06,napeVolume:.095,
    jawWidth:.015,chinProjection:-.025,
    shoulders:.065,chest:.052,abdomen:-.16,waist:-.10,glutes:-.08,hips:-.035,pelvis:-.035
  });
  blue.proportions.neckLength=.97;
  blue.handOffsets.L=[-.015,-.035,-.055];
  leanHold(blue,10,contact.release);

  // The cream hat/head are lower than the reference, while the pelvis needs
  // its original height. Lift only the upper body, not the standing root.
  Object.assign(cream.shape,{
    upperBodyOffsetY:.036,
    neckShortening:.215,neckThickness:.09,napeVolume:.10,
    jawWidth:-.052,chinProjection:.028,
    shoulders:.060,chest:.055,waist:.028,glutes:.065
  });
  cream.proportions.neckLength=.985;
  leanHold(cream,14,contact.release);
  headShift(cream,.028);
  Object.assign(cream.parts.hat,{
    autoFit:true,visible:true,
    brimWidth:1.14,brimDepth:1.015,height:1.075,
    tilt:-18,roll:-4,lift:.005,offsetX:-.004,offsetZ:0
  });

  // Both palms currently meet ~30px too high. Keep the target shared so that
  // wrist IK, thumb opposition and the contact correction stay coordinated.
  Object.assign(contact,{
    center:[-.025,.960,.15],
    approachHeight:.36,separation:.062,
    fingerCurl:[.27,.35,.39,.43,.45],
    shakeAmplitude:.013
  });

  // Small camera target pan, applied over a continuous camera key interval,
  // instead of introducing a one-frame registration snap.
  for(const k of camera.tracks?.target||[])if(k.time>=2.2-1e-6&&k.time<=2.8+1e-6)k.value[0]+=.018;

  // The original bottom gradient is measurably brighter/saturated than V106.
  // These two fixed sRGB endpoints avoid brightening the entire scene or
  // turning the dark top of the reference into a flat blue fill.
  scene.backgroundGradient=true;
  scene.backgroundGradientStops={top:'#020b14',bottom:'#175fa5'};

  // Preserve the strong back-lit pink-white edge and blue body highlights,
  // without artificially boosting ambient exposure everywhere.
  const blueColor='#2b81c4',creamColor='#e5e5df';
  blue.material.color=blueColor;
  blue.parts.shirt.color=blueColor;
  blue.parts.trousers.color=blueColor;
  blue.material.roughness=.36;
  blue.parts.shirt.roughness=.52;
  cream.material.color=creamColor;
  cream.parts.shirt.color=creamColor;
  cream.parts.trousers.color=creamColor;
  cream.parts.hat.color='#ecebe4';
  for(const[id,patch]of[
    ['blue-key',{position:[-3,2.8,1.0],intensity:2.1}],
    ['blue-fill',{intensity:1.75}],
    ['blue-rim',{position:[-3.2,2.8,-2.4],intensity:4.8,color:'#eee2fa'}],
    ['key',{position:[-3,2.7,3],intensity:2.9}],
    ['fill',{intensity:.38}],
    ['rim',{position:[2.8,2.0,-.5],intensity:2.8}]
  ]) Object.assign(requireNode(scene,id),patch);
  scene.name='Handshake · targeted grip and head refinement V113';
  return scene;
}
