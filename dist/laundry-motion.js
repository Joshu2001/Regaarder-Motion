import {villageState} from './village-motion.js?v=motion-v70';
import {precisionDefaults} from './precision-motion.js?v=motion-v70';
const clamp=q=>Math.max(0,Math.min(1,q));const ease=q=>{q=clamp(q);return q*q*(3-2*q)};
export function laundryState(t,input={}){
 const f={...precisionDefaults,...input},previous=villageState(t,f),start=Math.max(previous.end,Number(f.laundryStart)||0),age=t-start,pullTime=Math.max(.1,f.laundryPullTime),titleAt=pullTime+Math.max(.1,f.laundryMapHold),titleTime=Math.max(.1,f.laundryTitleTime),exitAt=titleAt+titleTime+Math.max(.1,f.laundryTitleHold),fadeTime=Math.max(0,f.laundryFadeTime),pull=ease(age/pullTime),recede=ease((age-pullTime)/Math.max(.1,titleAt-pullTime+titleTime));
 return {start,previousEnd:previous.end,age,pull,titleAt,exitAt,recede,end:start+exitAt+fadeTime,title:clamp((age-titleAt)/titleTime),alpha:age<0||!f.laundryEnabled?0:fadeTime?1-ease((age-exitAt)/fadeTime):1,mapScale:(f.laundryMapStartScale+(f.laundryMapScale-f.laundryMapStartScale)*pull)+(f.laundryMapEndScale-f.laundryMapScale)*recede};
}
