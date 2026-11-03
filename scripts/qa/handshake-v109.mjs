// Run from repository root: node scripts/qa/handshake-v109.mjs
import assert from 'node:assert/strict';
import {launch} from './browser.mjs';
const browser = await launch();
try {
  await browser.page.goto(browser.url + '/qa-native-v106.html');
  const report = await browser.page.evaluate(async () => {
    const {createFinalHandshake} = await import('/native3d-v97/final-scenes.js');
    const {auditHandshakeTimeline} = await import('/native3d-v97/handshake-polish-v109.js');
    const {validateScene} = await import('/native3d-v97/scene.js');
    const scene = createFinalHandshake();
    validateScene(scene);
    const audit = auditHandshakeTimeline(scene);
    if (audit.contactRootDriftM > 1e-8) throw Error('Actors retreat before grip release');
    if (audit.rows.length < 10 || audit.rows.some(row => !Number.isFinite(row.camera.fovDeg))) throw Error('Incomplete shot audit');
    if (audit.rows.at(-1).gripPhase !== 'after') throw Error('Release phase does not finish');
    return audit;
  });
  assert.deepEqual(browser.errors, []);
  console.log(JSON.stringify({samples: report.rows.length, contactRootDriftM: report.contactRootDriftM, warnings: report.warnings}));
} finally {
  await browser.close();
}