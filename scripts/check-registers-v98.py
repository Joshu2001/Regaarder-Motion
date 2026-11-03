from pathlib import Path
import json,hashlib
r=Path(__file__).resolve().parents[1];d=r/'dist';reg=json.loads((d/'asset-register.json').read_text());md=(d/'ASSET-REGISTER.md').read_text();assert md==(r/'docs/ASSET-REGISTER.md').read_text();ids=set()
for a in reg['assets']:
 assert a['id'] not in ids;ids.add(a['id']);p=d/a['path'];assert p.is_file(),a['path'];assert hashlib.sha256(p.read_bytes()).hexdigest()==a['sha256'],a['path'];assert p.stat().st_size==a['bytes'];assert a['id'] in md;assert a['source'] and a['license']
for a in json.loads((d/'asset-manifest.json').read_text())['assets']:
 p=d/a.get('src','')
 if a.get('active'):assert p.is_file(),a.get('src')
 if a.get('src') and not p.is_file():assert not a.get('active') and a.get('availability')=='missing-from-repository'
print('Register hashes, IDs, documentation and active-asset availability passed')
