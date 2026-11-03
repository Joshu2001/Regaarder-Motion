"""Refresh hashes without rewriting inherited licensing claims or dropping archive records."""
from pathlib import Path
import hashlib,json,re
root=Path(__file__).resolve().parents[1];dist=root/'dist';digest=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
manifest=json.loads((dist/'asset-manifest.json').read_text());unavailable=[]
for a in manifest['assets']:
 p=dist/a.get('src','')
 if p.is_file():a['sha256']=digest(p)
 elif a.get('src'):
  if a.get('active'):raise RuntimeError('Missing active asset '+a['src'])
  a['availability']='missing-from-repository';a['retentionGap']='Legacy inactive archive reference; bytes were not present in the V97 repository. Metadata retained.';unavailable.append(a['src'])
manifest['native3DRefinement']={'version':99,'date':'2026-11-02','source':'assets/humanoid-v89/humanoid.json','modifications':['Oval head, stitched neck, fitted skinned hem and shoulder weights','Paired world-space grip','Shared seam normals','Reference-timed camera','Separate head material'],'implementation':'native3d-v97/engine.js','limitations':['Not a scan or exact source mesh','No full mesh collision solver','Historical live-action slots remain illustrative']}
(dist/'asset-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
reg=json.loads((dist/'asset-register.json').read_text());by={a['path']:a for a in reg['assets']}
for p in [*dist.glob('*.js'),*dist.glob('native3d-v97/*.js')]:
 path=p.relative_to(dist).as_posix()
 if path not in by:by[path]={'id':'asset-'+re.sub('[^a-z0-9]+','-',path.lower()),'path':path,'label':path,'usageLabel':'project-procedural','source':'Project-authored implementation: '+path,'license':'Project-scoped implementation. Inherited model and vendor licenses remain recorded separately.'}
for a in by.values():
 p=dist/a['path']
 if not p.is_file():raise RuntimeError('Missing registered file '+a['path'])
 a.update(sha256=digest(p),bytes=p.stat().st_size)
reg.update(updated='2026-11-02',assets=sorted(by.values(),key=lambda a:a['path']))
(dist/'asset-register.json').write_text(json.dumps(reg,indent=2)+'\n')
md='# Asset register\n\nUpdated 2026-11-02. Existing ownership and licensing labels are retained.\n\n| ID | Path | SHA-256 | Usage | Source | License |\n|---|---|---|---|---|---|\n'
for a in reg['assets']:md+='| '+' | '.join(str(a.get(k,'')).replace('|','\\|').replace('\n',' ') for k in ['id','path','sha256','usageLabel','source','license'])+' |\n'
md+='\n## Unavailable legacy inactive archive references\n\nThese entries remain in the manifest; their bytes were absent before this release. They are not used by active templates.\n\n'+'\n'.join('- '+p for p in unavailable)+'\n'
for p in [dist/'ASSET-REGISTER.md',root/'docs/ASSET-REGISTER.md']:p.write_text(md)
print(json.dumps({'registered':len(reg['assets']),'inactiveArchiveGaps':len(unavailable)}))
