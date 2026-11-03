import{createFinalHandshake as previousHandshake,createFinalTeam}from'./previous-scenes-v105.js';
import{applySceneRefinement}from'./refinement-v106.js';
import{polishHandshakeTiming}from'./handshake-polish-v109.js';
export{createFinalTeam};
export function createFinalHandshake(){return polishHandshakeTiming(applySceneRefinement(previousHandshake()));}
