// Conservative, editable handshake timing polish. No source-frame fit is claimed.
import {putKey, sampleTrack, nodeAt} from './scene.js';
export const HANDSHAKE_REVIEW_TIMES = Object.freeze([0, .4, .7, 1, 1.75, 2.05, 2.55, 2.8, 3.2, 3.3, 4, 5.6]);
const copy = value => structuredClone(value);
function insertBoneKey(node, name, time, value) {
  const keys = node.boneTracks?.[name];
  if (!keys) return;
  const index = keys.findIndex(key => Math.abs(key.time - time) < 1e-6);
  const key = {time, value: copy(value), ease: 'smooth'};
  if (index >= 0) keys[index] = key;
  else keys.push(key);
  keys.sort((a, b) => a.time - b.time);
}
export function polishHandshakeTiming(scene) {
  if (scene.nodes?.some(n => n.id === 'final-blue') !== true || !scene.nodes.some(n => n.id === 'final-coach'))
    throw Error('Expected two editable handshake partners');
  const contact = scene.interactions?.find(i => i.id === 'handshake-contact' && i.type === 'handshake');
  if (!contact) throw Error('Handshake contact definition is missing');
  const release = contact.release;
  if (!(release > 2.05 && release < 3.3)) throw Error('Review handshake timing before applying this preset');
  for (const id of contact.actors) {
    const n = scene.nodes.find(node => node.id === id);
    if (!n) throw Error('Handshake actor is missing');
    // Preserve the approach pose during hand contact; retain editable keyframes.
    for (const field of ['position', 'leanAngle']) {
      const held = sampleTrack(n.tracks?.[field], 2.05, n[field]);
      putKey(n, field, release, held);
    }
    // The spine used to begin relaxing at 2.50 s before grip release.
    if (n.boneTracks?.spine02)
      insertBoneKey(n, 'spine02', release, sampleTrack(n.boneTracks.spine02, 2.5, [0, 0, 0]));
  }
  scene.name = 'Handshake · editable V109 timing polish';
  return scene;
}
// Pure data-level regression guard; pixel-level fidelity requires reference frames.
export function auditHandshakeTimeline(scene, times = HANDSHAKE_REVIEW_TIMES) {
  const actors = ['final-blue', 'final-coach'].map(id => scene.nodes.find(n => n.id === id));
  const camera = scene.nodes.find(n => n.id === scene.cameraId);
  const grip = scene.interactions?.find(n => n.id === 'handshake-contact');
  if (actors.some(n => !n) || !camera || !grip) throw Error('Incomplete handshake scene');
  if (!Array.isArray(times) || !times.length || times.some(t => !Number.isFinite(t) || t < 0 || t > scene.duration))
    throw Error('Invalid audit sample times');
  const rows = times.map(time => {
    const at = actors.map(n => nodeAt(n, time));
    const cam = nodeAt(camera, time);
    const gap = Math.hypot(...at[0].position.map((v, i) => v - at[1].position[i]));
    return {time, actors: at.map(n => ({id: n.id, position: copy(n.position), rotation: copy(n.rotation), leanAngle: n.leanAngle || 0})),
      rootSeparationM: gap, camera: {position: copy(cam.position), target: copy(cam.target), fovDeg: cam.fov},
      gripPhase: time < grip.start ? 'before' : time < grip.contact ? 'approach' : time < grip.release ? 'contact' : time < grip.end ? 'release' : 'after'};
  });
  const at = time => actors.map(n => nodeAt(n, time));
  const before = at(2.05), release = at(grip.release);
  const contactRootDriftM = Math.max(...before.map((n, i) =>
    Math.hypot(...n.position.map((v, axis) => v - release[i].position[axis]))));
  const warnings = [];
  if (contactRootDriftM > .001) warnings.push('Actor roots move during grip contact');
  if (!grip.fingerContact) warnings.push('Finger contact assistance is disabled');
  return {schema: 'regaarder-handshake-shot-audit-v1', sourceOffset: scene.sourceOffset,
    grip: {start: grip.start, contact: grip.contact, release: grip.release, end: grip.end},
    contactRootDriftM, rows, warnings,
    limits: 'Data-level pose/camera audit only. Source-image silhouette, lighting and full mesh collisions require separate rendered comparison.'};
}