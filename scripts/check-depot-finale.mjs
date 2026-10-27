import assert from 'node:assert/strict';
import fs from 'node:fs';import vm from 'node:vm';
import {finaleState,cloudDensity} from '../dist/depot-finale.js';
const code=fs.readFileSync('dist/depot.js','utf8'),box={};vm.runInNewContext(code.slice(code.indexOf('const depotDefaults='),code.indexOf(';Object.assign'))+';this.f=depotDefaults',box);const f=box.f;
assert.equal(finaleState(f.depotFrameStart,f).q,0);assert.equal(finaleState(f.depotCrackStart,f).crack,0);assert.equal(finaleState(f.depotCrackStart+f.depotCrackTime,f).crack,1);assert(Math.abs(finaleState(58,f).scale-f.depotFrameEndScale)<1e-9);assert(finaleState(58,f).angle<0);assert(finaleState(58,{...f,depotFrameRotation:14}).angle>0);assert(finaleState(58,{...f,depotFrameTilt:-35}).skew>0);
for(let t=32;t<58;t+=.1){const a=finaleState(t,f),b=finaleState(t+.1,f);assert(b.scale<=a.scale+1e-8);assert(b.crack>=a.crack)}
console.log('Depot finale passed: continuous frame pullback, progressive cracks, independently reversible rotation and perspective tilt.');

assert.equal(finaleState(32,f).brightness,1);assert(finaleState(58,f).brightness<.25);for(let t=32;t<58;t+=.2)assert(finaleState(t+.2,f).brightness<=finaleState(t,f).brightness);const samples=Array.from({length:400},(_,i)=>cloudDensity(i%20/6,Math.floor(i/20)/6,112));assert(samples.every(n=>Number.isFinite(n)&&n>=0&&n<=1));assert(Math.max(...samples)-Math.min(...samples)>.3);assert.equal(cloudDensity(.42,.73,112),cloudDensity(.42,.73,112));assert.notEqual(cloudDensity(.42,.73,112),cloudDensity(.42,.73,113));
