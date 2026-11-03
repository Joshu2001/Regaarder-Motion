from pathlib import Path
import subprocess,json
root=Path.cwd();out=root.parent
comparison=out/'V102-reference-comparison.mp4'
filters=r"[1:v]scale=960:540[left];[left][0:v]hstack=inputs=2,pad=1920:580:0:40:black,drawtext=text='REFERENCE 15m00 - 15m05.63':x=20:y=10:fontsize=22:fontcolor=white,drawtext=text='Local %{pts\:hms}':x=720:y=10:fontsize=18:fontcolor=white,drawtext=text='V102 editable reconstruction':x=980:y=10:fontsize=22:fontcolor=white[v]"
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-framerate','30','-start_number','0','-i','review-v102/release/frame-%04d.png','-framerate','30','-start_number','1','-i','review-v102/reference/frame-%04d.png','-filter_complex',filters,'-map','[v]','-frames:v','169','-c:v','libx264','-preset','fast','-crf','20','-pix_fmt','yuv420p',str(comparison)],check=True)
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(comparison),'-vf','setpts=20*PTS,fps=30,tpad=stop_mode=clone:stop_duration=0.633333','-t','112.666667','-c:v','libx264','-preset','fast','-crf','21','-pix_fmt','yuv420p',str(out/'V102-reference-005x.mp4')],check=True)
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-framerate','30','-start_number','0','-i','review-v102/release-study/frame-%04d.png','-vf',"pad=960:580:0:40:black,drawtext=text='V102 articulation study - neck sweep and arm raise':x=20:y=10:fontsize=22:fontcolor=white",'-frames:v','180','-c:v','libx264','-preset','fast','-crf','20','-pix_fmt','yuv420p',str(out/'V102-deformation-study.mp4')],check=True)
for name in ['V102-reference-comparison.mp4','V102-reference-005x.mp4','V102-deformation-study.mp4']:
 p=out/name;report=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration:stream=nb_frames,r_frame_rate,width,height','-of','json',str(p)],text=True));print(name,report)
