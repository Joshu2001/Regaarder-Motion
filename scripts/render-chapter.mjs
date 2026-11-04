import {createRequire} from 'node:module';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {duration,sources,paint} from '../dist/chapter-sequence.js';
const {createCanvas,loadImage}=createRequire(import.meta.url)('@napi-rs/canvas');
const media=Object.fromEntries(await Promise.all(Object.entries(sources).map(async ([id,file])=>[id,await loadImage(new URL('../dist/assets/chapter130/'+file,import.meta.url).pathname)])));
const canvas=createCanvas(640,360), c=canvas.getContext('2d'), fps=24;
c.scale(2/3,2/3);
const encoder=spawn('ffmpeg',['-v','error','-y','-f','rawvideo','-pixel_format','rgba','-video_size','640x360','-framerate',String(fps),'-i','pipe:0','-c:v','libx264','-preset','veryfast','-crf','21','-pix_fmt','yuv420p','-movflags','+faststart',process.argv[2]??'V130-review.mp4'],{stdio:['pipe','inherit','inherit']});
const complete=once(encoder,'close');
for(let frame=0;frame<duration*fps;frame++){
 paint(c,frame/fps,media);
 if(!encoder.stdin.write(canvas.data()))await once(encoder.stdin,'drain');
}
encoder.stdin.end();
if((await complete)[0]!==0)throw Error('Video encoding failed');
