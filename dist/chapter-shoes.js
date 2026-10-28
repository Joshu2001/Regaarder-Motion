// Small deterministic 3D meshes: the sole, upper, collar and laces turn together.
// No image-plane squashing. Geometry can be replaced independently of motion.
const TAU=Math.PI*2,rad=Math.PI/180;
const noise=n=>{const v=Math.sin(n*17.13+4.7)*43117.3;return v-Math.floor(v)};
export function shoePose(age,o){return {x:o.x+Math.sin(age*(o.driftRate??.3)+(o.phase??0))*(o.driftX??12),y:o.y+Math.sin(age*.27+(o.phase??0))*(o.driftY??16),yaw:(o.yaw??0)+age*(o.yawSpeed??24),pitch:(o.pitch??0)+age*(o.pitchSpeed??8),roll:(o.roll??0)+age*(o.rollSpeed??4),size:o.size??110}}
export function rotatePoint([x,y,z],pose){let a=(pose.pitch||0)*rad,b=(pose.yaw||0)*rad,d=(pose.roll||0)*rad;[y,z]=[y*Math.cos(a)-z*Math.sin(a),y*Math.sin(a)+z*Math.cos(a)];[x,z]=[x*Math.cos(b)+z*Math.sin(b),-x*Math.sin(b)+z*Math.cos(b)];return [x*Math.cos(d)-y*Math.sin(d),x*Math.sin(d)+y*Math.cos(d),z]}
function rgb(hex){return [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16))}
const cached=new Map();
export function shoeMesh(style='stripes',upper='#bfc5ca',accent='#a72d35',sole='#c5bfae'){
 const key=[style,upper,accent,sole].join();if(cached.has(key))return cached.get(key);const faces=[],N=26,M=18,point=(i,j,layer)=>{const u=i/N,x=-1.45+u*2.9,s=Math.sin(Math.PI*u)**.3,w=(.36+.14*u)*s+.035,a=j/M*TAU;let y,z;if(layer==='upper'){const h=.39+.33*Math.exp(-Math.pow((u-.19)/.25,2));y=.06+Math.sin(a)*h;z=Math.cos(a)*w;y=Math.max(-.19,y)}else{y=-.24+Math.sin(a)*.105;z=Math.cos(a)*(w+.035)}return [x,y,z]};
 for(const layer of ['sole','upper'])for(let i=0;i<N;i++)for(let j=0;j<M;j++){const a=point(i,j,layer),b=point(i+1,j,layer),c=point(i+1,j+1,layer),d=point(i,j+1,layer),u=(i+.5)/N;let color=layer==='sole'?sole:upper;if(layer==='upper'&&(u>.78||u<.12))color=style==='runner'?accent:upper;faces.push({p:[a,b,c,d],color,grain:.96+noise(i*M+j)*.08})}
 const quad=(p,color)=>faces.push({p,color,grain:1});
 // Side decoration on both sides, heel reinforcement, and double stitching.
 for(const side of [-1,1]){for(let j=0;j<3;j++)if(style==='stripes'){const x=-.35+j*.27;quad([[x,-.13,side*.49],[x+.16,-.13,side*.49],[x-.12,.42,side*.405],[x-.28,.42,side*.405]],accent)}else if(j===0){quad([[-1.05,.24,side*.34],[-.7,.02,side*.47],[.9,.21,side*.48],[-.55,.13,side*.48]],accent)}
 for(let j=0;j<20;j++){const x=-1.1+j*.11;quad([[x,-.16,side*.48],[x+.05,-.16,side*.48],[x+.05,-.145,side*.483],[x,-.145,side*.483]],'#aba99d')}
 }
 // Dark recessed ankle opening and a padded collar, on the actual upper surface.
 const collar=[-.94,.65,0];for(let j=0;j<28;j++){const a=j/28*TAU,b=(j+1)/28*TAU;quad([collar,[-.94+Math.cos(a)*.36,.65,Math.sin(a)*.26],[-.94+Math.cos(b)*.36,.65,Math.sin(b)*.26]],'#181a20');quad([[-.94+Math.cos(a)*.36,.65,Math.sin(a)*.26],[-.94+Math.cos(a)*.44,.60,Math.sin(a)*.32],[-.94+Math.cos(b)*.44,.60,Math.sin(b)*.32],[-.94+Math.cos(b)*.36,.65,Math.sin(b)*.26]],upper)}
 // Tongue and crossed laces.
 quad([[-.6,.53,-.18],[.4,.43,-.18],[.4,.43,.18],[-.6,.53,.18]],upper);
 for(let j=0;j<6;j++){const x=-.5+j*.15,y=.57-j*.015;for(const sign of [-1,1])quad([[x,y,-.2*sign],[x+.035,y+.015,-.2*sign],[x+.16,y+.015,.2*sign],[x+.125,y,.2*sign]],'#ede7d6')}
 // Tread bars remain visible when the shoe exposes its underside.
 for(let j=0;j<18;j++){const x=-1.25+j*.145;quad([[x,-.348,-.3],[x+.045,-.348,-.3],[x+.045,-.348,.3],[x,-.348,.3]],'#827c70')}
 cached.set(key,faces);return faces;
}
const buffers=new Map();
export function paintShoe(c,age,o,global={}){const screen=c;let buffer=buffers.get(o.id||o.name);if(!buffer){buffer=document.createElement('canvas');buffer.width=buffer.height=512;buffers.set(o.id||o.name,buffer)}c=buffer.getContext('2d');c.clearRect(0,0,512,512);const p=shoePose(age,o),mesh=shoeMesh(o.style,o.upper,o.accent,o.sole),scale=p.size/3,faces=mesh.map(face=>{const vertices=face.p.map(v=>rotatePoint(v,p));return {...face,v:vertices,z:vertices.reduce((s,v)=>s+v[2]/vertices.length,0)}}).sort((a,b)=>a.z-b.z);c.save();c.translate(256,256);c.globalAlpha=1;c.filter='none';for(const face of faces){const [a,b,d]=face.v,ab=b.map((v,i)=>v-a[i]),ad=d.map((v,i)=>v-a[i]),n=[ab[1]*ad[2]-ab[2]*ad[1],ab[2]*ad[0]-ab[0]*ad[2],ab[0]*ad[1]-ab[1]*ad[0]],len=Math.hypot(...n)||1,light=(.43+Math.abs(n[0]*-.3+n[1]*.75+n[2]*.6)/len*.62)*(o.brightness??1)*(global.light??1)*(face.grain??1),color=rgb(face.color);c.fillStyle=`rgb(${color.map(v=>Math.min(255,Math.round(v*light))).join(',')})`;c.beginPath();face.v.forEach(([x,y,z],i)=>{const k=6/(6-z*.17);i?c.lineTo(x*scale*k,-y*scale*k):c.moveTo(x*scale*k,-y*scale*k)});c.closePath();c.fill()}c.restore();screen.save();screen.globalAlpha*=o.opacity??1;screen.filter=`blur(${Math.max(0,o.blur??0)}px)`;screen.drawImage(buffer,p.x-256,p.y-256);screen.restore()}
