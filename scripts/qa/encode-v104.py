from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import subprocess
root=Path(__file__).resolve().parents[2]
frames=root/'review-v104'/'release';out=root/'review-v104'/'comparison';out.mkdir(parents=True,exist_ok=True)
font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',20)
for i in range(68):
 t=i/12;ref=root.parent/'reference'/'frames'/f'{round(t*30)+1:04d}.png'
 a=Image.open(ref).resize((960,540));b=Image.open(frames/f'frame-{i:04d}.png').convert('RGB')
 im=Image.new('RGB',(1920,580));im.paste(a,(0,40));im.paste(b,(960,40));d=ImageDraw.Draw(im)
 d.text((12,8),f'REFERENCE  |  source {900+t:.3f}s / local {t:.3f}s',font=font,fill='white');d.text((972,8),'V104 EDITABLE RECONSTRUCTION  |  12 fps review',font=font,fill='white');im.save(out/f'{i:04d}.png')
dest=root.parent/'V104-reference-comparison.mp4'
subprocess.run(['ffmpeg','-y','-v','error','-framerate','12','-i',str(out/'%04d.png'),'-c:v','libx264','-crf','19','-pix_fmt','yuv420p','-movflags','+faststart',str(dest)],check=True)
subprocess.run(['ffmpeg','-v','error','-i',str(dest),'-f','null','-'],check=True)
print(dest)
