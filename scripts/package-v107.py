"""Build the cumulative editor update; does not bundle source footage."""
from pathlib import Path
import hashlib,json,zipfile
root=Path(__file__).resolve().parents[1]
paths=json.loads((root/'releases/v107-files.json').read_text())
if any(not (root/p).is_file() or Path(p).is_absolute() or '..' in Path(p).parts for p in paths):
    raise RuntimeError('Release manifest contains a missing or invalid path')
output=root.parent/'Regaarder-V107-editor-update.zip'
with zipfile.ZipFile(output,'w',zipfile.ZIP_DEFLATED,compresslevel=8) as archive:
    for p in paths: archive.write(root/p,p)
with zipfile.ZipFile(output) as archive:
    assert archive.testzip() is None
    for p in paths: assert archive.read(p)==(root/p).read_bytes()
    assert b'V107' in archive.read('CURRENT.md')
print(json.dumps({'path':str(output),'entries':len(paths),'bytes':output.stat().st_size,
                  'sha256':hashlib.sha256(output.read_bytes()).hexdigest()}))
