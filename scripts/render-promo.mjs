import {createRequire} from 'node:module';
const {createCanvas,loadImage}=createRequire(import.meta.url)('@napi-rs/canvas');
import {spawn,spawnSync} from 'node:child_process';
import {once} from 'node:events';
import {mkdtemp,readdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {duration,sources,paint} from '../dist/promo-sequence.js';
const root=new URL('../dist/assets/promo129/',import.meta.url).pathname;
const output=resolve(process.argv[2]||'Regaarder-V129-review.mp4'), fps=24;
const work=await mkdtemp(join(tmpdir(),'v129-'));
try{
 const media={},video={};
 for(const [id,path] of Object.entries(sources)){
  if(!path.endsWith('.mp4')){media[id]=await loadImage(join(root,path));continue}
  const r=spawnSync('ffmpeg',['-v','error','-i',join(root,path),'-vf','fps='+fps,join(work,id+'-%03d.jpg')],{stdio:'inherit'});
  if(r.status!==0)throw Error('Frame extraction failed for '+id);
  video[id]=await Promise.all((await readdir(work)).filter(n=>n.startsWith(id+'-')).sort().map(n=>loadImage(join(work,n))));
 }
 const canvas=createCanvas(640,360),c=canvas.getContext('2d');
 const ff=spawn('ffmpeg',['-v','error','-y','-f','rawvideo','-pixel_format','rgba','-video_size','640x360','-framerate',String(fps),'-i','pipe:0','-c:v','libx264','-preset','veryfast','-crf','21','-pix_fmt','yuv420p','-movflags','+faststart',output],{stdio:['pipe','inherit','inherit']});
 const complete=once(ff,'close');
 for(let i=0;i<duration*fps;i++){
  media.host=video.host[((i-Math.round(13.3*fps))%video.host.length+video.host.length)%video.host.length];
  media.flame=video.flame[((i-Math.round(107.7*fps))%video.flame.length+video.flame.length)%video.flame.length];
  paint(c,i/fps,media);
  if(!ff.stdin.write(canvas.data()))await once(ff.stdin,'drain');
 }
 ff.stdin.end();const [code]=await complete;if(code)throw Error('Encoding failed');
}finally{await rm(work,{recursive:true,force:true})}
