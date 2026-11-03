"""Build the cumulative V106 overlay without bundling source footage or local renders."""
from pathlib import Path
import zipfile,json,subprocess
root=Path(__file__).resolve().parents[1]
base=root.parent/'recovered/Regaarder-V100-editor-update.zip'
with zipfile.ZipFile(base) as z: paths=set(z.namelist())
paths.update(['CURRENT-V106.md','INSTALL-V106.txt','dist/qa-native-v106.html','dist/native3d-v97/refinement-v106.js','dist/native3d-v97/previous-scenes-v105.js','scripts/update-v106-animation.mjs','scripts/update-v106-registers.py','scripts/package-v106.py'])
paths.update('scripts/qa/'+n for n in ['check-v106.mjs','ui-v106.mjs','heldout-v106.mjs','render-v106.mjs','encode-v106.py'])
for directory,pattern in [('dist/animations','*v106.md'),('docs/animations','*v106.md'),('docs/v106','*')]:paths.update(p.relative_to(root).as_posix() for p in (root/directory).glob(pattern) if p.is_file())
paths=sorted(p for p in paths if not any(part.startswith('.') for part in Path(p).parts))
output=root.parent/'Regaarder-V100-editor-update.zip'
with zipfile.ZipFile(output,'w',zipfile.ZIP_DEFLATED,compresslevel=8) as z:
 for p in paths:z.write(root/p,p)
with zipfile.ZipFile(output) as z:
 assert z.testzip() is None
 for p in paths:assert z.read(p)==(root/p).read_bytes()
 assert 'V106' in z.read('CURRENT.md').decode()
(root.parent/'release-paths.json').write_text(json.dumps(paths))
print(json.dumps({'path':str(output),'entries':len(paths),'bytes':output.stat().st_size}))
