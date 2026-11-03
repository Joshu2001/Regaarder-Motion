"""Cumulative native builder update. Retains existing app media on installation."""
from pathlib import Path
import json,hashlib,zipfile
root=Path(__file__).resolve().parents[1]
paths=json.loads((root/'releases/v108-files.json').read_text())
for p in paths:
    if Path(p).is_absolute() or '..' in Path(p).parts or not (root/p).is_file():
        raise RuntimeError('Invalid or missing release path: '+p)
output=root.parent/'Regaarder-V108-editor-update.zip'
with zipfile.ZipFile(output,'w',zipfile.ZIP_DEFLATED,compresslevel=8) as archive:
    for p in paths:archive.write(root/p,p)
with zipfile.ZipFile(output) as archive:
    assert archive.testzip() is None
    for p in paths:assert archive.read(p)==(root/p).read_bytes()
    assert b'V108' in archive.read('CURRENT.md')
print(json.dumps({'path':str(output),'entries':len(paths),'bytes':output.stat().st_size,
                  'sha256':hashlib.sha256(output.read_bytes()).hexdigest()}))
