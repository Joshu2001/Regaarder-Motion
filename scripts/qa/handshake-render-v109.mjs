// Dense, non-destructive native-engine regression for the editable handshake.
// Run: node scripts/qa/handshake-render-v109.mjs
import assert from 'node:assert/strict';
import {launch} from './browser.mjs';
const browser = await launch();
try {
  await browser.page.goto(browser.url + '/qa-native-v106.html');
  const report = await browser.page.evaluate(async () => {
    const {createFinalHandshake} = await import('/native3d-v97/final-scenes.js');
    const {Native3DEngine, loadHumanoid, T} = await import('/native3d-v97/engine.js');
    const {validateScene} = await import('/native3d-v97/scene.js');
    const scene = createFinalHandshake();
    validateScene(scene);
    const data = await loadHumanoid();
    const engine = new Native3DEngine(document.createElement('canvas'), data, {width: 640, height: 360});
    const rows = [];
    let maxSeamM = 0, maxContactRegressionM = 0, maxPalmResidualM = 0;
    try {
      for (let frame = 0; frame <= 72; frame++) {
        const time = Math.min(scene.duration, frame / 12);
        engine.render(scene, time);
        let seamM = 0;
        for (const character of engine.characters.values()) {
          if (!character.bones.every(b => b.matrixWorld.elements.every(Number.isFinite)))
            throw Error('Nonfinite bone transform at ' + time);
          const body = character.surfaces.find(surface => surface.name === 'body');
          if (!body) throw Error('Missing character body at ' + time);
          for (const piece of character.surfaces.filter(surface => surface.seamBindings))
            for (const pair of piece.seamBindings) {
              const a = body.mesh.localToWorld(body.mesh.getVertexPosition(pair.bodyIndex, new T.Vector3()));
              const b = piece.mesh.localToWorld(piece.mesh.getVertexPosition(pair.headIndex, new T.Vector3()));
              seamM = Math.max(seamM, a.distanceTo(b));
            }
          for (const surface of character.surfaces) {
            const p = surface.mesh.geometry.attributes.position.array;
            if (!p.every(Number.isFinite)) throw Error('Nonfinite mesh positions at ' + time);
          }
        }
        if (seamM > 1e-5) throw Error('Open neck/garment seam: ' + seamM + ' m at ' + time);
        let regressionM = 0;
        for (const contact of engine.fingerContactReport || []) {
          if (!Number.isFinite(contact.before) || !Number.isFinite(contact.after))
            throw Error('Nonfinite finger contact result at ' + time);
          regressionM = Math.max(regressionM, contact.after - contact.before);
        }
        if (regressionM > 1e-10) throw Error('Finger contact correction regressed at ' + time);
        let palmResidualM = 0;
        for (const error of engine.contactErrors || [])
          if (typeof error === 'number') palmResidualM = Math.max(palmResidualM, Math.abs(error));
          else if (error && typeof error === 'object')
            for (const [key, value] of Object.entries(error))
              if (/error|residual|distance/i.test(key) && typeof value === 'number')
                palmResidualM = Math.max(palmResidualM, Math.abs(value));
        maxSeamM = Math.max(maxSeamM, seamM);
        maxContactRegressionM = Math.max(maxContactRegressionM, regressionM);
        maxPalmResidualM = Math.max(maxPalmResidualM, palmResidualM);
        rows.push({time, seamM, fingerContactRegressionM: regressionM, palmResidualM});
      }
    } finally {
      engine.dispose();
    }
    return {frames: rows.length, fps: 12, maxSeamM, maxContactRegressionM,
      maxPalmResidualM, rows, scope: 'Rig, seam and contact-assist regression only. Not source-image fidelity or full mesh collision.'};
  });
  assert.deepEqual(browser.errors, []);
  console.log(JSON.stringify({frames: report.frames, fps: report.fps, maxSeamM: report.maxSeamM,
    maxContactRegressionM: report.maxContactRegressionM, maxPalmResidualM: report.maxPalmResidualM,
    errors: browser.errors}));
} finally {
  await browser.close();
}
