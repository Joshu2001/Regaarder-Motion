from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import subprocess
root=Path(__file__).resolve().parents[2]
frames=root/'review-v106'/'release';out=root/'review-v106'/'comparison';out.mkdir(parents=True,exist_ok=True)
font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',14)
for i in range(68):
 t=i/12;ref=root.parent/'reference'/'frames'/f'{round(t*30)+1:04d}.png'
 a=Image.open(ref).resize((640,360));b=Image.open(frames/f'frame-{i:04d}.png').convert('RGB')
 im=Image.new('RGB',(1280,392));im.paste(a,(0,32));im.paste(b,(640,32));d=ImageDraw.Draw(im)
 d.text((6,8),f'REFERENCE  |  source {900+t:.3f}s / local {t:.3f}s',font=font,fill='white');d.text((646,8),'V106 EDITABLE RECONSTRUCTION  |  12 fps review',font=font,fill='white');im.save(out/f'{i:04d}.png')
dest=root.parent/'V106-reference-comparison.mp4'
subprocess.run(['ffmpeg','-y','-v','error','-framerate','12','-i',str(out/'%04d.png'),'-c:v','libx264','-crf','19','-pix_fmt','yuv420p','-movflags','+faststart',str(dest)],check=True)
subprocess.run(['ffmpeg','-v','error','-i',str(dest),'-f','null','-'],check=True)
print(dest)
