"""Metadata-only alpha bounds and source crop bindings. Does not alter any image pixels."""
from pathlib import Path
from PIL import Image
import numpy as np,json
root=Path(__file__).resolve().parent.parent;p=root/'dist/legacy-manifest.json';m=json.loads(p.read_text())
for a in m['assets']:
 id=a['id'];im=Image.open(root/'dist'/a['file']).convert('RGBA');alpha=np.asarray(im)[:,:,3]
 if id in ['youngBlue','youngRed','olderLeft','olderRight','shoe2','shoe3','shoe4','shoe5']:
  left=id in ['youngBlue','olderLeft','shoe2','shoe4'];xlo=0 if left else im.width//2;xhi=im.width//2 if left else im.width
  ys,xs=np.where(alpha[:,xlo:xhi]>16);a['bounds']=[int(xs.min()+xlo),int(ys.min()),int(xs.max()+xlo+1),int(ys.max()+1)]
 if id in ['coffinLeft','coffinRight','shoe0','shoe1','celebration']:
  ys,xs=np.where(alpha>160);a['bounds']=[int(xs.min()),int(ys.min()),int(xs.max()+1),int(ys.max()+1)]
 if id.startswith('coffin'):a['photoRect']=[398,306,614,595]
 if id=='photoRight':a['bounds']=[330,0,830,570]
p.write_text(json.dumps(m,indent=2));print('Bound',len(m['assets']),'source and alpha regions')
