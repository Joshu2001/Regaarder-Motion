import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';
import {depotState,depotPlacement,depotEnvelope,depotPhase} from '../dist/depot-motion.js';
const code=fs.readFileSync('dist/depot.js','utf8'),src=code.slice(code.indexOf('const depotDefaults='),code.indexOf(';Object.assign'));const box={};vm.runInNewContext(src+';this.defaults=depotDefaults',box);const f=box.defaults;
const start=depotState(0,f),end=depotState(f.depotDescent,f);assert.equal(Math.abs(start.outgoingY),0);assert.equal(start.incomingY,540);assert.equal(end.outgoingY,-540);assert.equal(end.incomingY,0);for(let t=0;t<f.depotDescent;t+=.1){const a=depotState(t,f),b=depotState(t+.1,f);assert(b.outgoingY<=a.outgoingY);assert(b.incomingY<=a.incomingY);assert(Math.abs(a.incomingY-a.outgoingY-540)<1e-8)}
assert.equal(depotState(5,f).actorScale,f.depotStartScale);assert.equal(depotState(32,f).actorScale,f.depotEndScale);for(let t=f.depotPullStart;t<32;t+=.1)assert(depotState(t+.1,f).actorScale<=depotState(t,f).actorScale+1e-9);assert(depotState(6,f).roomBlur>depotState(15,f).roomBlur);assert.equal(depotState(9,f).smoke,0);
const people=f.depotObjects.filter(o=>o.type==='person'),front=f.depotObjects.filter(o=>o.depth==='front');assert.equal(people.length,2);assert.equal(front.length,2);assert(people.every(p=>p.mark.visible===false));assert(front.every(o=>depotEnvelope(20,o)===0));assert(front.every(o=>depotEnvelope(32,o)===1));
const p0=depotPlacement(people[1],depotState(10,f),f),p1=depotPlacement(people[1],depotState(32,f),f);assert(p0.scale>p1.scale);assert(Math.abs(p0.x-f.depotFocusX)>Math.abs(p1.x-f.depotFocusX));
const phases=depotPhase({battle:100,images:126,end:136,noir:80},f);assert.equal(phases.depot,118);assert.equal(phases.images,176);assert.equal(phases.end,186);assert.equal(phases.battle,100);assert.equal(phases.noir,80);
const crates=f.depotObjects.filter(o=>o.type==='crate');assert.equal(crates.length,12);
for(const [depth,count] of [['back',4],['mid',4],['near',2],['front',2]])assert.equal(crates.filter(o=>o.depth===depth).length,count);
const before=depotState(5.3,f),approach=depotState(9.3,f);assert(approach.cargoBackScale>before.cargoBackScale);assert(approach.midScale>approach.cargoBackScale);assert(approach.nearScale>approach.midScale);assert(people.every(o=>depotEnvelope(9.3,o)===0));
for(const depth of ['back','mid','near']){const o=crates.find(o=>o.depth===depth),a=depotPlacement(o,before,f),b=depotPlacement(o,approach,f);assert(b.scale>a.scale);assert(b.y<a.y);assert.equal(b.y+o.height*.44*b.scale,o.y+o.height*.44)}
// Full-body asset head is above frame at shoulder reveal, then enters during pullback.
const right=people[1];const headY=t=>{const p=depotPlacement(right,depotState(t,f),f);return p.y+(.08-.5)*right.height*p.scale};assert(headY(13)<0);assert(headY(32)>0);
for(const side of ['left','right']){const svg=fs.readFileSync(`dist/assets/depot-soldier-${side}-v10.svg`,'utf8');assert(svg.includes('data:image/png;base64,'));assert(fs.readFileSync('dist/depot-assets.js','utf8').includes('assets/depot-uniformed-pair-v10.png'))}
console.log('Depot motion passed: continuous descent, staged differential floor cargo, shoulder-first head reveal, monotonic pullback, floor contact, forward cargo motion and complete uniformed figure sources.');

for(let t=8;t<30;t+=.2){const a=depotState(t,f),b=depotState(t+.2,f);assert(b.nearScale>=a.nearScale);assert(b.frontScale>=a.frontScale)}
