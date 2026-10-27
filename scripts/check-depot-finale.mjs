import assert from 'node:assert/strict';
import fs from 'node:fs';import vm from 'node:vm';
import {finaleState} from '../dist/depot-finale.js';
const code=fs.readFileSync('dist/depot.js','utf8'),box={};vm.runInNewContext(code.slice(code.indexOf('const depotDefaults='),code.indexOf(';Object.assign'))+';this.f=depotDefaults',box);const f=box.f;
assert.equal(finaleState(f.depotFrameStart,f).q,0);assert.equal(finaleState(f.depotCrackStart,f).crack,0);assert.equal(finaleState(f.depotCrackStart+f.depotCrackTime,f).crack,1);assert(Math.abs(finaleState(58,f).scale-f.depotFrameEndScale)<1e-9);assert(finaleState(58,f).angle<0);assert(finaleState(58,{...f,depotFrameRotation:14}).angle>0);assert(finaleState(58,{...f,depotFrameTilt:-35}).skew>0);
for(let t=32;t<58;t+=.1){const a=finaleState(t,f),b=finaleState(t+.1,f);assert(b.scale<=a.scale+1e-8);assert(b.crack>=a.crack)}
console.log('Depot finale passed: continuous frame pullback, progressive cracks, independently reversible rotation and perspective tilt.');
