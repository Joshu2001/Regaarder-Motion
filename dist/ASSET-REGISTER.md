# Asset register

Updated: 2026-10-28 · Regaarder Motion Atelier · version 49

This is the central register for current and future assets. Stable IDs, exact local paths and SHA-256 hashes identify the actual item. Source verification and reuse permission are separate fields. An online SVG is not automatically unrestricted. No unknown source, model, prompt or license is invented.

## Labels for the future AI harness

| Label | Selection rule |
|---|---|
| `brand-reference` | Use only when representing the named brand in the template. Preserve silhouette/proportions. Review new contexts. No broad license grant has been verified. |
| `project-procedural` | Reuse the project code and exposed parameters in this template. Do not describe illustrative geometry as a scanned or verified product. |
| `generated-recorded` | Project manifest records AI generation. Use as an illustration, never as archival evidence. Check prompt/reference records before reuse elsewhere. |
| `user-reference` | User-provided source. Permission beyond this task is unverified. Do not automatically reuse in unrelated outputs. |
| `licensed-source` | Inspect the recorded license URL and conditions for the intended use. Credit and modification history stay attached. |
| `review-required` | Source or permission is incomplete. Do not automatically select for new generated outputs until reviewed. |
| `metadata` | Documentation or prompt record, not a scene visual. |

## Required workflow

1. Before adding or replacing an asset, record exact origin URL or generation/reference provenance in asset-manifest.json or this generator’s provenance map.
2. Record author/owner when known, retrieval date, license URL or unknown status, transformations, usage label and scene purpose. Never infer clearance from a familiar logo or file extension.
3. Run `python scripts/build-asset-register.py`; commit the Markdown and manifest together with the asset.
4. Run `node scripts/check-asset-register.mjs`. Missing files, hashes or entries fail validation. A newly discovered legacy item defaults to review-required.
5. Keep superseded files labelled instead of silently representing them as current. User uploads need the same fields when incorporated into distributed source.

## Assets

### asset-animation-instance-js

- **Label:** Animation Instance
- **File:** `animation-instance.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: animation-instance.js
- **Source location / method:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **SHA-256:** `9d0eae741d87b67ae711a1e73341dfbe50b280ec5aad0f9fc926c11d06dce53c`
- **Bytes:** 1589

### asset-animation-library-director-js

- **Label:** Animation Library Director
- **File:** `animation-library-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: animation-library-director.js
- **Source location / method:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **SHA-256:** `0090bedadc2fb6ee347c920c1181b29f98fb26c6bd8dce11f3dad76c05559b86`
- **Bytes:** 27334

### asset-asset-catalog-js

- **Label:** Asset Catalog
- **File:** `asset-catalog.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: asset-catalog.js
- **Source location / method:** Version 40 original tokenized filename/name/tag/status filtering, local perceptual fingerprints and similarity ranking. Exact SHA-256 matches rank first; approximate visual matching is not semantic recognition.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 40 original tokenized filename/name/tag/status filtering, local perceptual fingerprints and similarity ranking. Exact SHA-256 matches rank first; approximate visual matching is not semantic recognition.
- **SHA-256:** `fdecb1787beec1e2a52f31fec426a411e12c8225199f665a7c64e837abc52291`
- **Bytes:** 1864

### asset-assets-archive-credits-v72-md

- **Label:** ARCHIVE CREDITS V72
- **File:** `assets/ARCHIVE-CREDITS-V72.md`
- **Usage label:** `metadata`
- **Origin / exact source:** Project records and cited exact image metadata
- **Source location / method:** Preserved production record, not an active scene image
- **Author / brand owner:** Project records
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Project-scoped documentation; linked image licenses remain applicable
- **Modifications:** New production record or byte-exact V71 source copy
- **SHA-256:** `d093dac37dc523d640b68f7e366f6520046f18805f7fdcb376f2df6bd8c2e0c6`
- **Bytes:** 4142

### asset-assets-archive-credits-v73-md

- **Label:** ARCHIVE CREDITS V73.md
- **File:** `assets/ARCHIVE-CREDITS-V73.md`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Project production/provenance or original V72 source record
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `dd39e5d35132613fce83eea9955c6879fbf4227152e43609420ae2013bd25cfd`
- **Bytes:** 1778

### asset-assets-adidas-bars-svg

- **Label:** adidas official three-bar mark
- **File:** `assets/adidas-bars.svg`
- **Usage label:** `brand-reference`
- **Origin / exact source:** https://www.adidas-group.com/en/public/icons/icons.svg
- **Source location / method:** symbol#logo, viewBox 0 0 300 189. Discovery page: https://www.adidas-group.com/en/ (base href /en/)
- **Author / brand owner:** adidas
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Not specified by the downloaded corporate asset. No broad redistribution or trademark clearance is asserted.
- **Modifications:** Extracted the three original paths into a standalone SVG; white fill. Replaces the previous hand-built bars.
- **SHA-256:** `469d19e80e9e59570c86f60a100f34f94c2372aee4b925650057d94db8396952`
- **Bytes:** 275

### asset-assets-adidas-wordmark-svg

- **Label:** adidas official wordmark
- **File:** `assets/adidas-wordmark.svg`
- **Usage label:** `brand-reference`
- **Origin / exact source:** https://www.adidas-group.com/en/public/adidas-logo-white.svg
- **Source location / method:** Image referenced by the official corporate homepage header
- **Author / brand owner:** adidas
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Not specified by the downloaded corporate asset. No broad redistribution or trademark clearance is asserted.
- **Modifications:** Removed non-SVG className attribute; original paths and group transform preserved.
- **SHA-256:** `db6f14a6806b5444aa0e8678ff4e9e032a2fb8decc020fed16bc413af9b8d4f2`
- **Bytes:** 1238

### asset-assets-aftermath-replacement-v52-json

- **Label:** Aftermath Replacement V52
- **File:** `assets/aftermath-replacement-v52.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `76733c6390a8a240823cc34f61dde02d2929ab0b4c1814cc17ef4a8826e3d451`
- **Bytes:** 2057

### asset-assets-archive-cutout-walk-original-v60-js

- **Label:** Original classic walking engine, preserved
- **File:** `assets/archive/cutout-walk-original-v60.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Motionclone-v60/dist/cutout-walk.js
- **Source location / method:** Preserved unmodified classic engine before V61 arm extension.
- **Author / brand owner:** Project-authored
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-scoped source
- **Modifications:** None
- **SHA-256:** `2e0be1621439ccd0759a66dba049dfd0bdca9bcd364ee632e6df93e1b985843a`
- **Bytes:** 2508

### asset-assets-archive-cutout-walk-v63-js

- **Label:** V63 photographic walk renderer (preserved)
- **File:** `assets/archive/cutout-walk-v63.js`
- **Usage label:** `project-authored`
- **Origin / exact source:** Motionclone-v63.zip / dist/cutout-walk.js
- **Source location / method:** V63 source snapshot, not new third-party code
- **Author / brand owner:** Project implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project source retained from prior version
- **Modifications:** None
- **SHA-256:** `62f0014cb47c19b5326b9f9e13428aca90ca15ee10bfdc75bf9c811a76d1e8c1`
- **Bytes:** 5412

### asset-assets-archive-gesture-rejected-diagnostic-v40-jpg

- **Label:** Woman mesh · rejected early diagnostic
- **File:** `assets/archive/gesture-rejected-diagnostic-v40.jpg`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Original v40 offline review render, analysis-v40/first-review.jpg
- **Source location / method:** Composited project assets and early mesh state. Contains no original reference-video pixels.
- **Author / brand owner:** Project implementation; underlying generation provenance retained in the asset register
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project review artifact; underlying generated illustration/reference restrictions remain unverified beyond this task.
- **Modifications:** Copied diagnostic JPEG byte-for-byte into inactive archive.
- **SHA-256:** `014203e7882502b2c23c957a860b834c0651bba6c5ef976a8b9f06578d55cf14`
- **Bytes:** 102893

### asset-assets-archive-linen-long-sleeve-rejected-v39-92e6631e-png

- **Label:** Linen blouse · rejected long-sleeve study
- **File:** `assets/archive/linen-long-sleeve-rejected-v39-92e6631e.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; output exec-f25f0367-f283-42db-9da5-0b767226234d.png
- **Source location / method:** Exact generation prompt: Use case: historical-scene. Asset type: isolated genuinely transparent laundry cutout for a small documentary map marker. One early-1900s cream linen long-sleeved shirt hanging naturally from a simple wooden hanger, front view, fully contained centered in frame with generous transparent margins on all sides, crisp recognizable silhouette, slightly loose sleeves, little collar and small buttons, soft folds, neutral ivory cloth, natural photographic texture, diffuse soft daylight. Shirt fills central 65% of image height. No person, hands, washing line, peg, background, text, labels or watermark. Real transparent alpha surrounding the hanger and shirt. Original illustrative garment. Portrait composition.
- **Author / brand owner:** Project generation record; reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated illustrations for the user-authorized template. Source/video/reference owner and wider reuse rights not independently verified. Fictional illustrative characters and architecture, not archival evidence or a geographically accurate map.
- **Modifications:** No pixel editing. Copied byte-for-byte to a descriptive archive filename; inactive in template.
- **SHA-256:** `92e6631e35ca849f14a0df1e5527e4f035939a118ae57d18b07736b0118af75a`
- **Bytes:** 2123297

### asset-assets-archive-shoe-solid-v56-js

- **Label:** Shoe Solid V56
- **File:** `assets/archive/shoe-solid-v56.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** No reliable acquisition record
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `e123972f0978b960e4408b5ce76c41397d8320d8975a0125aec036f835de6369`
- **Bytes:** 3793

### asset-assets-archive-v69-globe-globe-controls-js

- **Label:** Preserved V69 globe-controls
- **File:** `assets/archive/v69-globe/globe-controls.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Motionclone-v69-source.zip; exact prior implementation retained
- **Source location / method:** Inactive byte-for-byte source alternative. V69 package independently retained.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped implementation; registered imagery retains own labels.
- **Modifications:** None.
- **SHA-256:** `90d1bf16fc60f3788955a68eb59bc0253fd28851ea675a920e59ec419bff0694`
- **Bytes:** 3984

### asset-assets-archive-v69-globe-globe-director-js

- **Label:** Preserved V69 globe-director
- **File:** `assets/archive/v69-globe/globe-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Motionclone-v69-source.zip; exact prior implementation retained
- **Source location / method:** Inactive byte-for-byte source alternative. V69 package independently retained.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped implementation; registered imagery retains own labels.
- **Modifications:** None.
- **SHA-256:** `db599db033737eb512ff6fdc62bde1577c380dc3461688c0045ac50cb0572a3b`
- **Bytes:** 4675

### asset-assets-archive-v69-globe-globe-opening-js

- **Label:** Preserved V69 globe-opening
- **File:** `assets/archive/v69-globe/globe-opening.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Motionclone-v69-source.zip; exact prior implementation retained
- **Source location / method:** Inactive byte-for-byte source alternative. V69 package independently retained.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped implementation; registered imagery retains own labels.
- **Modifications:** None.
- **SHA-256:** `0cd76dd95112669e5b77f9fb402b222ebd8e460d0f6fc98653644574b6ed325d`
- **Bytes:** 12299

### asset-assets-archive-v70-refinement-animation-library-director-js

- **Label:** V70 animation library director source archive
- **File:** `assets/archive/v70-refinement/animation-library-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** User-provided Motionclone V70 source ZIP
- **Source location / method:** Inactive byte-for-byte source snapshot; not a generated visual candidate.
- **Author / brand owner:** Project source; underlying legacy ownership as documented in original register.
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped task authorization; embedded brand paths retain original restrictions.
- **Modifications:** None to archived bytes.
- **SHA-256:** `b25be8dc820251aed27ac998e063fe1fe5002a421d1f9ab2fa6cd271c6f6860b`
- **Bytes:** 18160

### asset-assets-archive-v70-refinement-chapter-sequence-js

- **Label:** V70 chapter-sequence source archive
- **File:** `assets/archive/v70-refinement/chapter-sequence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** User-provided Motionclone V70 source ZIP
- **Source location / method:** Inactive byte-for-byte source snapshot; not a generated visual candidate.
- **Author / brand owner:** Project source; underlying legacy ownership as documented in original register.
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped task authorization; embedded brand paths retain original restrictions.
- **Modifications:** None to archived bytes.
- **SHA-256:** `c7a20dc503fb892942dddb9b92e8eb6466ffecd4f57bf8755e2ea9a13bb91221`
- **Bytes:** 33065

### asset-assets-archive-v70-refinement-city-engine-js

- **Label:** V70 city-engine source archive
- **File:** `assets/archive/v70-refinement/city-engine.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** User-provided Motionclone V70 source ZIP
- **Source location / method:** Inactive byte-for-byte source snapshot; not a generated visual candidate.
- **Author / brand owner:** Project source; underlying legacy ownership as documented in original register.
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped task authorization; embedded brand paths retain original restrictions.
- **Modifications:** None to archived bytes.
- **SHA-256:** `303a0c396c0712cf0fef5e1e8c97cf45177e57124ccf74a02a7039c643f7e2dc`
- **Bytes:** 3801

### asset-assets-archive-v70-refinement-depot-finale-js

- **Label:** V70 depot-finale source archive
- **File:** `assets/archive/v70-refinement/depot-finale.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** User-provided Motionclone V70 source ZIP
- **Source location / method:** Inactive byte-for-byte source snapshot; not a generated visual candidate.
- **Author / brand owner:** Project source; underlying legacy ownership as documented in original register.
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped task authorization; embedded brand paths retain original restrictions.
- **Modifications:** None to archived bytes.
- **SHA-256:** `90d44881b9ad5d2ea000c1529e118d3a9fcdc6739813844d8d3385d329acbfc4`
- **Bytes:** 12905
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-archive-v70-refinement-grounded-walk-js

- **Label:** V70 grounded-walk source archive
- **File:** `assets/archive/v70-refinement/grounded-walk.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** User-provided Motionclone V70 source ZIP
- **Source location / method:** Inactive byte-for-byte source snapshot; not a generated visual candidate.
- **Author / brand owner:** Project source; underlying legacy ownership as documented in original register.
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped task authorization; embedded brand paths retain original restrictions.
- **Modifications:** None to archived bytes.
- **SHA-256:** `e14dbe301b4d3c3467a74b7e764d6f9607ff270ad0f92c35b33a82f65cc74ca8`
- **Bytes:** 2632

### asset-assets-archive-v70-refinement-sequence-expansion-js

- **Label:** V70 sequence-expansion source archive
- **File:** `assets/archive/v70-refinement/sequence-expansion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** User-provided Motionclone V70 source ZIP
- **Source location / method:** Inactive byte-for-byte source snapshot; not a generated visual candidate.
- **Author / brand owner:** Project source; underlying legacy ownership as documented in original register.
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped task authorization; embedded brand paths retain original restrictions.
- **Modifications:** None to archived bytes.
- **SHA-256:** `1c5af99a554f4f3c971ff39c3c58a233577ff96547c77c705a4a4d980f7a8b6f`
- **Bytes:** 33256

### asset-assets-archive-v71-continuation-animation-library-director-js

- **Label:** archive/v71 continuation/animation library director
- **File:** `assets/archive/v71-continuation/animation-library-director.js`
- **Usage label:** `metadata`
- **Origin / exact source:** Project records and cited exact image metadata
- **Source location / method:** Preserved production record, not an active scene image
- **Author / brand owner:** Project records
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Project-scoped documentation; linked image licenses remain applicable
- **Modifications:** New production record or byte-exact V71 source copy
- **SHA-256:** `a1f4ea8d648ad56c606d06b7929c54611c88737901c045830ee5bc76f8967fcb`
- **Bytes:** 18338

### asset-assets-archive-v71-continuation-index-html

- **Label:** archive/v71 continuation/index
- **File:** `assets/archive/v71-continuation/index.html`
- **Usage label:** `metadata`
- **Origin / exact source:** Project records and cited exact image metadata
- **Source location / method:** Preserved production record, not an active scene image
- **Author / brand owner:** Project records
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Project-scoped documentation; linked image licenses remain applicable
- **Modifications:** New production record or byte-exact V71 source copy
- **SHA-256:** `f070e9bb503aa986b0f08d76ccbc8f0c0c05bf4a236af43de577c139d11ef3cf`
- **Bytes:** 26993

### asset-assets-archive-v72-olympic-animation-library-director-js

- **Label:** animation library director.js
- **File:** `assets/archive/v72-olympic/animation-library-director.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** Project production/provenance or original V72 source record
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `b4474a1c253608d7f01f677d5b87761894434df85993328350b6e5de99c92087`
- **Bytes:** 19212

### asset-assets-archive-v72-olympic-index-html

- **Label:** index.html
- **File:** `assets/archive/v72-olympic/index.html`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** Project production/provenance or original V72 source record
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `f070e9bb503aa986b0f08d76ccbc8f0c0c05bf4a236af43de577c139d11ef3cf`
- **Bytes:** 26993

### asset-assets-archive-v88-before-camera-review-comparison-slow-mp4

- **Label:** comparison slow
- **File:** `assets/archive/v88-before-camera-review/comparison-slow.mp4`
- **Usage label:** `user-reference`
- **Origin / exact source:** User-provided original documentary and project-authored reconstruction
- **Source location / method:** Inactive diagnostic comparison/preview containing user-supplied original reference imagery or audio. Reference source: Nazi Brothers documentary supplied by Joshua. Broader reuse permission unknown.
- **Author / brand owner:** Reference creator not independently verified; project-authored reconstruction
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Authorized diagnostic task only; reference reuse outside this task is unverified
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `b41b6316a05abc6d2e019f4f1139278183a4c0a97c271abd4ff6e7e502f75275`
- **Bytes:** 3143898

### asset-assets-archive-v88-before-camera-review-comparison-mp4

- **Label:** comparison
- **File:** `assets/archive/v88-before-camera-review/comparison.mp4`
- **Usage label:** `user-reference`
- **Origin / exact source:** User-provided original documentary and project-authored reconstruction
- **Source location / method:** Inactive diagnostic comparison/preview containing user-supplied original reference imagery or audio. Reference source: Nazi Brothers documentary supplied by Joshua. Broader reuse permission unknown.
- **Author / brand owner:** Reference creator not independently verified; project-authored reconstruction
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Authorized diagnostic task only; reference reuse outside this task is unverified
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `acfc56c06d8f2958bfe02a159943a47f8629951bf2c69d8507b6ae9ad4daffdb`
- **Bytes:** 1231125

### asset-assets-archive-v88-before-camera-review-preview-mp4

- **Label:** preview
- **File:** `assets/archive/v88-before-camera-review/preview.mp4`
- **Usage label:** `user-reference`
- **Origin / exact source:** User-provided original documentary and project-authored reconstruction
- **Source location / method:** Inactive diagnostic comparison/preview containing user-supplied original reference imagery or audio. Reference source: Nazi Brothers documentary supplied by Joshua. Broader reuse permission unknown.
- **Author / brand owner:** Reference creator not independently verified; project-authored reconstruction
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Authorized diagnostic task only; reference reuse outside this task is unverified
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `2b1045334a8ce54c1b0e4d651ebd7635d3d2de49688bb736666cc32104fb56a9`
- **Bytes:** 400889

### asset-assets-archive-v88-distance-skin-diagnostic-jpg

- **Label:** diagnostic
- **File:** `assets/archive/v88-distance-skin/diagnostic.jpg`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Inactive diagnostic render of an earlier V88 candidate; retained for comparison. Not production media.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `debdb23e1c744c4ddec493ea0ae1593d0348878423e48b8432f57e5bc87530c1`
- **Bytes:** 37372

### asset-assets-archive-v88-distance-skin-mannequin-json

- **Label:** mannequin
- **File:** `assets/archive/v88-distance-skin/mannequin.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Project-authored smooth implicit anatomical mesh, conforming marching tetrahedra, 51-joint four-weight skin. Native shader and pose source in dist/v88; no external model or recovered original asset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `c00a475d82d3138c5e159317717be03877ad2e3ca50570786df5bbce27355f48`
- **Bytes:** 2781924

### asset-assets-archive-v88-first-scene-blue-diagnostic-jpg

- **Label:** blue diagnostic
- **File:** `assets/archive/v88-first-scene/blue-diagnostic.jpg`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Inactive diagnostic render of an earlier V88 candidate; retained for comparison. Not production media.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `eae8debdba3b0f73992540bc3bfe3075c63163717bccb4158ca14dc022422b18`
- **Bytes:** 33811

### asset-assets-archive-v88-first-scene-crimson-diagnostic-jpg

- **Label:** crimson diagnostic
- **File:** `assets/archive/v88-first-scene/crimson-diagnostic.jpg`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Inactive diagnostic render of an earlier V88 candidate; retained for comparison. Not production media.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `e1a54fa664face8e798ab6278ebd5c3783caea0e7315b08340a8ceaf5b89e12e`
- **Bytes:** 36508

### asset-assets-archive-v88-first-scene-sequence-txt

- **Label:** sequence
- **File:** `assets/archive/v88-first-scene/sequence.txt`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Project-authored smooth implicit anatomical mesh, conforming marching tetrahedra, 51-joint four-weight skin. Native shader and pose source in dist/v88; no external model or recovered original asset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `69ce82f8cdcff31785e389a5e88de293e90653aac372ac07ee577956fecf1a48`
- **Bytes:** 4317

### asset-assets-archive-v88-first-scene-skin-txt

- **Label:** skin
- **File:** `assets/archive/v88-first-scene/skin.txt`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Project-authored smooth implicit anatomical mesh, conforming marching tetrahedra, 51-joint four-weight skin. Native shader and pose source in dist/v88; no external model or recovered original asset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `e948b5f07ae3828c2196a032054e258982be5a662b79bcf587dae0b17a0588ab`
- **Bytes:** 3541

### asset-assets-archive-v88-high-resolution-mannequin-v88-json

- **Label:** mannequin v88
- **File:** `assets/archive/v88-high-resolution/mannequin-v88.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Project-authored smooth implicit anatomical mesh, conforming marching tetrahedra, 51-joint four-weight skin. Native shader and pose source in dist/v88; no external model or recovered original asset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `bcc98cb9863119f24bcacc2f1c48956b18e2bbbffcfb4bb0d9d582e38dec2e21`
- **Bytes:** 9587067

### asset-assets-archive-v88-high-resolution-validation-json

- **Label:** validation
- **File:** `assets/archive/v88-high-resolution/validation.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Project-authored smooth implicit anatomical mesh, conforming marching tetrahedra, 51-joint four-weight skin. Native shader and pose source in dist/v88; no external model or recovered original asset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `743f36850e50a235cdd911e1a07892266141da85db9a3ef879ccf8c06235f0c2`
- **Bytes:** 342

### asset-assets-archive-v89-cut-boundary-candidate-frame-116-png

- **Label:** Inactive cut-boundary candidate frame-116.png
- **File:** `assets/archive/v89-cut-boundary-candidate/frame-116.png`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project native3D engine/code with CC0-derived anatomical asset
- **Source location / method:** Retained byte-for-byte; no runtime binding. Original comparison versions also remain in file version history.
- **Author / brand owner:** Project implementation and CC0 graphical asset contributors
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-authored diagnostic and CC0-derived graphical output
- **Modifications:** None after archival; superseded by fractional-second key-time normalization and sampling tolerance.
- **SHA-256:** `9fa199d3db9544d7a66d979ccb37b0f281fd7bf14f7b7d78780fab8d15f2c544`
- **Bytes:** 140904

### asset-assets-archive-v89-cut-boundary-candidate-preview-mp4

- **Label:** Inactive cut-boundary candidate preview.mp4
- **File:** `assets/archive/v89-cut-boundary-candidate/preview.mp4`
- **Usage label:** `user-reference`
- **Origin / exact source:** Project native3D render/source; original supplied documentary audio in preview
- **Source location / method:** Retained byte-for-byte; no runtime binding. Original comparison versions also remain in file version history.
- **Author / brand owner:** Reference audio creator not independently verified; project-authored reconstruction
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Authorized diagnostic task only; broader reference audio reuse unverified
- **Modifications:** None after archival; superseded by fractional-second key-time normalization and sampling tolerance.
- **SHA-256:** `a98186f60ee49617c8d2738e1cea26e1d3e5c96ba7773709afd7e16678560c66`
- **Bytes:** 557585

### asset-assets-archive-v89-cut-boundary-candidate-scene-module-js

- **Label:** Inactive cut-boundary candidate scene-module.js
- **File:** `assets/archive/v89-cut-boundary-candidate/scene-module.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project native3D engine/code with CC0-derived anatomical asset
- **Source location / method:** Retained byte-for-byte; no runtime binding. Original comparison versions also remain in file version history.
- **Author / brand owner:** Project implementation and CC0 graphical asset contributors
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-authored diagnostic and CC0-derived graphical output
- **Modifications:** None after archival; superseded by fractional-second key-time normalization and sampling tolerance.
- **SHA-256:** `debe614c45048e36b59ff97b50c3c129608030081c6a8a23a43db666ab4eae7c`
- **Bytes:** 9601

### asset-assets-archive-v91-ring-garment-candidate-study-0-png

- **Label:** study-0 V91 inactive candidate
- **File:** `assets/archive/v91-ring-garment-candidate/study-0.png`
- **Usage label:** `project-procedural`
- **Origin / exact source:** scripts/v91/build-garments.py; dist/native3d/wardrobe.js; CC0 source weights retained in assets/humanoid-v89/default_weights.mhw
- **Source location / method:** Inactive prior surface/diagnostic retained byte-for-byte without renderer slots
- **Author / brand owner:** Project-authored geometry; MakeHuman graphical asset contributors for CC0 rig/skin data
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-authored procedural surface and diagnostic renders; CC0 for derived MakeHuman graphical weights, see assets/humanoid-v89/LICENSE.ASSETS.md. No external model/editor application code bundled.
- **Modifications:** Marching cubes (build-only scikit-image) extracts project-authored field; terminal caps trimmed for openings. Immutable original anatomy and source rig retained.
- **SHA-256:** `cfb466c2d66595de736d29796cb08a00a51ec565be18c16cea3979d266c24f6a`
- **Bytes:** 189369

### asset-assets-archive-v91-ring-garment-candidate-study-115-png

- **Label:** study-115 V91 inactive candidate
- **File:** `assets/archive/v91-ring-garment-candidate/study-115.png`
- **Usage label:** `project-procedural`
- **Origin / exact source:** scripts/v91/build-garments.py; dist/native3d/wardrobe.js; CC0 source weights retained in assets/humanoid-v89/default_weights.mhw
- **Source location / method:** Inactive prior surface/diagnostic retained byte-for-byte without renderer slots
- **Author / brand owner:** Project-authored geometry; MakeHuman graphical asset contributors for CC0 rig/skin data
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-authored procedural surface and diagnostic renders; CC0 for derived MakeHuman graphical weights, see assets/humanoid-v89/LICENSE.ASSETS.md. No external model/editor application code bundled.
- **Modifications:** Marching cubes (build-only scikit-image) extracts project-authored field; terminal caps trimmed for openings. Immutable original anatomy and source rig retained.
- **SHA-256:** `afca5b74be0f5e62c4060cbec08d4bd737b0f7ed12c16aa2267e3cf79027d84e`
- **Bytes:** 206922

### asset-assets-archive-v91-ring-garment-candidate-study-116-png

- **Label:** study-116 V91 inactive candidate
- **File:** `assets/archive/v91-ring-garment-candidate/study-116.png`
- **Usage label:** `project-procedural`
- **Origin / exact source:** scripts/v91/build-garments.py; dist/native3d/wardrobe.js; CC0 source weights retained in assets/humanoid-v89/default_weights.mhw
- **Source location / method:** Inactive prior surface/diagnostic retained byte-for-byte without renderer slots
- **Author / brand owner:** Project-authored geometry; MakeHuman graphical asset contributors for CC0 rig/skin data
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-authored procedural surface and diagnostic renders; CC0 for derived MakeHuman graphical weights, see assets/humanoid-v89/LICENSE.ASSETS.md. No external model/editor application code bundled.
- **Modifications:** Marching cubes (build-only scikit-image) extracts project-authored field; terminal caps trimmed for openings. Immutable original anatomy and source rig retained.
- **SHA-256:** `3d9cb43e8608f1fdaa7447c8b5221ef234e5026d0ad114cd38dbdc8ddf659cfa`
- **Bytes:** 238952

### asset-assets-archive-v91-ring-garment-candidate-study-132-png

- **Label:** study-132 V91 inactive candidate
- **File:** `assets/archive/v91-ring-garment-candidate/study-132.png`
- **Usage label:** `project-procedural`
- **Origin / exact source:** scripts/v91/build-garments.py; dist/native3d/wardrobe.js; CC0 source weights retained in assets/humanoid-v89/default_weights.mhw
- **Source location / method:** Inactive prior surface/diagnostic retained byte-for-byte without renderer slots
- **Author / brand owner:** Project-authored geometry; MakeHuman graphical asset contributors for CC0 rig/skin data
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-authored procedural surface and diagnostic renders; CC0 for derived MakeHuman graphical weights, see assets/humanoid-v89/LICENSE.ASSETS.md. No external model/editor application code bundled.
- **Modifications:** Marching cubes (build-only scikit-image) extracts project-authored field; terminal caps trimmed for openings. Immutable original anatomy and source rig retained.
- **SHA-256:** `6aecd0b6b5c1cd2db9474024e64666e69cfd09ed2f70a166e28c7e54ff0abff9`
- **Bytes:** 196044

### asset-assets-archive-v91-ring-garment-candidate-study-147-png

- **Label:** study-147 V91 inactive candidate
- **File:** `assets/archive/v91-ring-garment-candidate/study-147.png`
- **Usage label:** `project-procedural`
- **Origin / exact source:** scripts/v91/build-garments.py; dist/native3d/wardrobe.js; CC0 source weights retained in assets/humanoid-v89/default_weights.mhw
- **Source location / method:** Inactive prior surface/diagnostic retained byte-for-byte without renderer slots
- **Author / brand owner:** Project-authored geometry; MakeHuman graphical asset contributors for CC0 rig/skin data
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-authored procedural surface and diagnostic renders; CC0 for derived MakeHuman graphical weights, see assets/humanoid-v89/LICENSE.ASSETS.md. No external model/editor application code bundled.
- **Modifications:** Marching cubes (build-only scikit-image) extracts project-authored field; terminal caps trimmed for openings. Immutable original anatomy and source rig retained.
- **SHA-256:** `d247bef2bbd461a6e73b2e032da28685bc715e92ff53dad5ae748a88f969e61d`
- **Bytes:** 183815

### asset-assets-archive-v91-ring-garment-candidate-study-60-png

- **Label:** study-60 V91 inactive candidate
- **File:** `assets/archive/v91-ring-garment-candidate/study-60.png`
- **Usage label:** `project-procedural`
- **Origin / exact source:** scripts/v91/build-garments.py; dist/native3d/wardrobe.js; CC0 source weights retained in assets/humanoid-v89/default_weights.mhw
- **Source location / method:** Inactive prior surface/diagnostic retained byte-for-byte without renderer slots
- **Author / brand owner:** Project-authored geometry; MakeHuman graphical asset contributors for CC0 rig/skin data
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-authored procedural surface and diagnostic renders; CC0 for derived MakeHuman graphical weights, see assets/humanoid-v89/LICENSE.ASSETS.md. No external model/editor application code bundled.
- **Modifications:** Marching cubes (build-only scikit-image) extracts project-authored field; terminal caps trimmed for openings. Immutable original anatomy and source rig retained.
- **SHA-256:** `205cf18d0a69122e1f3a1bdecffc0ab90794a6cac1e861cf57334d3eb5df6110`
- **Bytes:** 193319

### asset-assets-archive-v91-ring-garment-candidate-wardrobe-js

- **Label:** wardrobe V91 inactive candidate
- **File:** `assets/archive/v91-ring-garment-candidate/wardrobe.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** scripts/v91/build-garments.py; dist/native3d/wardrobe.js; CC0 source weights retained in assets/humanoid-v89/default_weights.mhw
- **Source location / method:** Inactive prior surface/diagnostic retained byte-for-byte without renderer slots
- **Author / brand owner:** Project-authored geometry; MakeHuman graphical asset contributors for CC0 rig/skin data
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-authored procedural surface and diagnostic renders; CC0 for derived MakeHuman graphical weights, see assets/humanoid-v89/LICENSE.ASSETS.md. No external model/editor application code bundled.
- **Modifications:** Marching cubes (build-only scikit-image) extracts project-authored field; terminal caps trimmed for openings. Immutable original anatomy and source rig retained.
- **SHA-256:** `03cf78626b4ed2d5d869e0e4bf649ee3ba067d9c5fa48873a55cfa2473f0bd5b`
- **Bytes:** 3203

### asset-assets-athletics-horizon-v65-png

- **Label:** athletics horizon v65
- **File:** `assets/athletics-horizon-v65.png`
- **Usage label:** `ai-generated`
- **Origin / exact source:** OpenAI image generation; exact prompt and references in assets/chapter-generation-v65.json
- **Source location / method:** Independent chapter source: athletics horizon v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `7b433803e73844a8184a65a1325ff62a0a23e476970faf7ef944a03de5a62372`
- **Bytes:** 1310302

### asset-assets-athletics-team-v65-png

- **Label:** athletics team v65
- **File:** `assets/athletics-team-v65.png`
- **Usage label:** `ai-generated`
- **Origin / exact source:** OpenAI image generation; exact prompt and references in assets/chapter-generation-v65.json
- **Source location / method:** Independent chapter source: athletics team v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `25af79c1f2b6b0f4ee9247530a07d27aa0784b158d3fe675e46c751a7bcb99c9`
- **Bytes:** 1684358

### asset-assets-audience-foreground-v73-png

- **Label:** audience foreground v73.png
- **File:** `assets/audience-foreground-v73.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in olympic-generation-record-v73.json
- **Source location / method:** Use case: historical-scene. Asset type: foreground crowd alpha strip for a layered documentary animation. Backs of heads and shoulders of a dense 1930s European civilian audience seen from behind, many felt hats and flat caps with a few uncovered heads, black-and-white photographic look. One horizontal row with a naturally irregular upper silhouette, bodies extend below bottom edge. Heads occupy lower third to lower half of a very wide image; entire space above and between upper silhouettes genuinely transparent. No stage, buildings, flags, symbols, text or background. Sharp photographic cloth and hat details, soft overhead light. Generous left/right overscan for camera parallax. Wide 16:9 composition.
- **Author / brand owner:** Project image generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Illustrative project asset; no historical-photo authenticity is asserted. Owens likeness reference has its own recorded public-domain jurisdiction conditions.
- **Modifications:** Original file unchanged; renderer alpha/component/skyline masks, placement and grade.
- **SHA-256:** `a13a2ee359b931eab496f5178e9bf3b7bc760bbebb6781c46eccb2752fb440ab`
- **Bytes:** 1484841

### asset-assets-battle-fireball-png

- **Label:** Conflict · billowing fireball texture
- **File:** `assets/battle-fireball.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** RGBA blast plate with one expansion, rising advection, internal deformation, debris and burnout; no repeated global scale pulsing
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `42af1cd39a5909a21493acb983184fc2f53abce8e0465a2acaea0dc683b811b7`
- **Bytes:** 2155186

### asset-assets-battle-ridge-png

- **Label:** Conflict · rocky foreground ridge
- **File:** `assets/battle-ridge.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated RGBA rocky cutout; foreground occlusion pass
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `099dfbe903c67fe174427f4a1dff5168b1aaf9632cca7ebe08a1009405538889`
- **Bytes:** 2047444

### asset-assets-berlin-parade-v73-jpg

- **Label:** berlin parade v73.jpg
- **File:** `assets/berlin-parade-v73.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_B_145_Bild-P017127%2C_Berlin%2C_Olympiade%2C_Wache_marschiert_vor_Brandenburger_Tor.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original
- **Source location / method:** https://commons.wikimedia.org/wiki/File:Bundesarchiv_B_145_Bild-P017127,_Berlin,_Olympiade,_Wache_marschiert_vor_Brandenburger_Tor.jpg
- **Author / brand owner:** Frankl, A.
- **Retrieved / created:** 2026-10-31
- **License / permission status:** CC BY-SA 3.0 de https://creativecommons.org/licenses/by-sa/3.0/de/deed.en; see full jurisdiction conditions in attached original metadata
- **Modifications:** Downloaded bytes unchanged. Berlin: runtime framing/grade. Political image: visible rectangular photograph with authored glows/blur. Owens: reference for labelled illustrative generated poses.
- **SHA-256:** `c8f7953881cf735485acd13b990d05e738aa59ffdac670b129e9f4bd69a1a5a2`
- **Bytes:** 57741

### asset-assets-betrayal-generation-record-v74-json

- **Label:** Betrayal Generation Record V74
- **File:** `assets/betrayal-generation-record-v74.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `1d9cf22c5967140555fe933ae91db9fb02aabcff61a788c16104713c1d7eb470`
- **Bytes:** 7496

### asset-assets-blast-keyframes-v76-png

- **Label:** blast keyframes v76 · illustrative
- **File:** `assets/blast-keyframes-v76.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen generation in this authorized conversation; saved original libfile_0ea654d704308191a1f889bd72cf6b23
- **Source location / method:** Use case historical-scene VFX production sprite atlas EXACTLY4columns x4rows, sixteen equal cells reading left-to-right top-to-bottom showing a single continuously evolving cinematic orange fuel explosion cooling into gray smoke. FIRSTROW frames1-4 compact white-hot ignition behind dense low black smoke, then broad orange fireball with rolling detailed billows. SECONDROW5-8 large roiling orange and black plume expanding upward with intricate turbulent filaments, hot orange remains prominent. THIRDROW9-12 fire cools to orange patches embedded in dense charcoal and gray mushrooming clouds. FOURTHROW13-16 smoke widens and billows upward with remaining muted orange fading, final soft medium-gray smoky cloud. Each frame SAME scale and centered base to enable temporal interpolation, complete plume within cell with transparent margins, no black matte, no floor or scenery or people or text. High-detail cinematic physically plausible smoke photographs style. Real alpha transparency. NO labels, grid lines or arrows.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration, not archival evidence.
- **Modifications:** Original bytes retained; runtime calibrated crops, alpha trim and2.5D transforms.
- **SHA-256:** `69ed5a80846eead466e50d03fd8c9c84c78f61433f9e7a5042b239ea461e5b9e`
- **Bytes:** 2408237

### asset-assets-blast-motion-v76-00-png

- **Label:** blast-motion-v76-00
- **File:** `assets/blast-motion-v76-00.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** assets/blast-keyframes-v76.png
- **Source location / method:** Use case historical-scene VFX production sprite atlas EXACTLY4columns x4rows, sixteen equal cells reading left-to-right top-to-bottom showing a single continuously evolving cinematic orange fuel explosion cooling into gray smoke. FIRSTROW frames1-4 compact white-hot ignition behind dense low black smoke, then broad orange fireball with rolling detailed billows. SECONDROW5-8 large roiling orange and black plume expanding upward with intricate turbulent filaments, hot orange remains prominent. THIRDROW9-12 fire cools to orange patches embedded in dense charcoal and gray mushrooming clouds. FOURTHROW13-16 smoke widens and billows upward with remaining muted orange fading, final soft medium-gray smoky cloud. Each frame SAME scale and centered base to enable temporal interpolation, complete plume within cell with transparent margins, no black matte, no floor or scenery or people or text. High-detail cinematic physically plausible smoke photographs style. Real alpha transparency. NO labels, grid lines or arrows.
- **Author / brand owner:** Project AI generation and authored optical flow
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Illustrative project VFX, no original-footage pixels.
- **Modifications:** 96 premultiplied-alpha24fps frames, bidirectional optical-flow interpolation; not fluid physics.
- **SHA-256:** `5678122ca4065efbbe5729877e8ca023b7e0418ed564fe328e16158df8a71ca5`
- **Bytes:** 3035132

### asset-assets-blast-motion-v76-01-png

- **Label:** blast-motion-v76-01
- **File:** `assets/blast-motion-v76-01.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** assets/blast-keyframes-v76.png
- **Source location / method:** Use case historical-scene VFX production sprite atlas EXACTLY4columns x4rows, sixteen equal cells reading left-to-right top-to-bottom showing a single continuously evolving cinematic orange fuel explosion cooling into gray smoke. FIRSTROW frames1-4 compact white-hot ignition behind dense low black smoke, then broad orange fireball with rolling detailed billows. SECONDROW5-8 large roiling orange and black plume expanding upward with intricate turbulent filaments, hot orange remains prominent. THIRDROW9-12 fire cools to orange patches embedded in dense charcoal and gray mushrooming clouds. FOURTHROW13-16 smoke widens and billows upward with remaining muted orange fading, final soft medium-gray smoky cloud. Each frame SAME scale and centered base to enable temporal interpolation, complete plume within cell with transparent margins, no black matte, no floor or scenery or people or text. High-detail cinematic physically plausible smoke photographs style. Real alpha transparency. NO labels, grid lines or arrows.
- **Author / brand owner:** Project AI generation and authored optical flow
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Illustrative project VFX, no original-footage pixels.
- **Modifications:** 96 premultiplied-alpha24fps frames, bidirectional optical-flow interpolation; not fluid physics.
- **SHA-256:** `83534ce2d8e9a285900cacd296ae9e5ff127049741d30b42e12ea28d0063cf42`
- **Bytes:** 3977957

### asset-assets-blast-motion-v76-02-png

- **Label:** blast-motion-v76-02
- **File:** `assets/blast-motion-v76-02.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** assets/blast-keyframes-v76.png
- **Source location / method:** Use case historical-scene VFX production sprite atlas EXACTLY4columns x4rows, sixteen equal cells reading left-to-right top-to-bottom showing a single continuously evolving cinematic orange fuel explosion cooling into gray smoke. FIRSTROW frames1-4 compact white-hot ignition behind dense low black smoke, then broad orange fireball with rolling detailed billows. SECONDROW5-8 large roiling orange and black plume expanding upward with intricate turbulent filaments, hot orange remains prominent. THIRDROW9-12 fire cools to orange patches embedded in dense charcoal and gray mushrooming clouds. FOURTHROW13-16 smoke widens and billows upward with remaining muted orange fading, final soft medium-gray smoky cloud. Each frame SAME scale and centered base to enable temporal interpolation, complete plume within cell with transparent margins, no black matte, no floor or scenery or people or text. High-detail cinematic physically plausible smoke photographs style. Real alpha transparency. NO labels, grid lines or arrows.
- **Author / brand owner:** Project AI generation and authored optical flow
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Illustrative project VFX, no original-footage pixels.
- **Modifications:** 96 premultiplied-alpha24fps frames, bidirectional optical-flow interpolation; not fluid physics.
- **SHA-256:** `babec36cf84176a8f0445799cf1cc5fa00e0c88da4fa0414b1e3d24986dfce3e`
- **Bytes:** 3647370

### asset-assets-blast-motion-v76-03-png

- **Label:** blast-motion-v76-03
- **File:** `assets/blast-motion-v76-03.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** assets/blast-keyframes-v76.png
- **Source location / method:** Use case historical-scene VFX production sprite atlas EXACTLY4columns x4rows, sixteen equal cells reading left-to-right top-to-bottom showing a single continuously evolving cinematic orange fuel explosion cooling into gray smoke. FIRSTROW frames1-4 compact white-hot ignition behind dense low black smoke, then broad orange fireball with rolling detailed billows. SECONDROW5-8 large roiling orange and black plume expanding upward with intricate turbulent filaments, hot orange remains prominent. THIRDROW9-12 fire cools to orange patches embedded in dense charcoal and gray mushrooming clouds. FOURTHROW13-16 smoke widens and billows upward with remaining muted orange fading, final soft medium-gray smoky cloud. Each frame SAME scale and centered base to enable temporal interpolation, complete plume within cell with transparent margins, no black matte, no floor or scenery or people or text. High-detail cinematic physically plausible smoke photographs style. Real alpha transparency. NO labels, grid lines or arrows.
- **Author / brand owner:** Project AI generation and authored optical flow
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Illustrative project VFX, no original-footage pixels.
- **Modifications:** 96 premultiplied-alpha24fps frames, bidirectional optical-flow interpolation; not fluid physics.
- **SHA-256:** `fcf29e6622ca2f7cb622bf36838f50f5d8967c3dfa35c8654a2481213b069eae`
- **Bytes:** 3475354

### asset-assets-blast-motion-v76-04-png

- **Label:** blast-motion-v76-04
- **File:** `assets/blast-motion-v76-04.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** assets/blast-keyframes-v76.png
- **Source location / method:** Use case historical-scene VFX production sprite atlas EXACTLY4columns x4rows, sixteen equal cells reading left-to-right top-to-bottom showing a single continuously evolving cinematic orange fuel explosion cooling into gray smoke. FIRSTROW frames1-4 compact white-hot ignition behind dense low black smoke, then broad orange fireball with rolling detailed billows. SECONDROW5-8 large roiling orange and black plume expanding upward with intricate turbulent filaments, hot orange remains prominent. THIRDROW9-12 fire cools to orange patches embedded in dense charcoal and gray mushrooming clouds. FOURTHROW13-16 smoke widens and billows upward with remaining muted orange fading, final soft medium-gray smoky cloud. Each frame SAME scale and centered base to enable temporal interpolation, complete plume within cell with transparent margins, no black matte, no floor or scenery or people or text. High-detail cinematic physically plausible smoke photographs style. Real alpha transparency. NO labels, grid lines or arrows.
- **Author / brand owner:** Project AI generation and authored optical flow
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Illustrative project VFX, no original-footage pixels.
- **Modifications:** 96 premultiplied-alpha24fps frames, bidirectional optical-flow interpolation; not fluid physics.
- **SHA-256:** `068561c2b17b5311feb4dca24af2619037517b13eb9513a38dc07fa7b4518605`
- **Bytes:** 3222710

### asset-assets-blast-motion-v76-05-png

- **Label:** blast-motion-v76-05
- **File:** `assets/blast-motion-v76-05.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** assets/blast-keyframes-v76.png
- **Source location / method:** Use case historical-scene VFX production sprite atlas EXACTLY4columns x4rows, sixteen equal cells reading left-to-right top-to-bottom showing a single continuously evolving cinematic orange fuel explosion cooling into gray smoke. FIRSTROW frames1-4 compact white-hot ignition behind dense low black smoke, then broad orange fireball with rolling detailed billows. SECONDROW5-8 large roiling orange and black plume expanding upward with intricate turbulent filaments, hot orange remains prominent. THIRDROW9-12 fire cools to orange patches embedded in dense charcoal and gray mushrooming clouds. FOURTHROW13-16 smoke widens and billows upward with remaining muted orange fading, final soft medium-gray smoky cloud. Each frame SAME scale and centered base to enable temporal interpolation, complete plume within cell with transparent margins, no black matte, no floor or scenery or people or text. High-detail cinematic physically plausible smoke photographs style. Real alpha transparency. NO labels, grid lines or arrows.
- **Author / brand owner:** Project AI generation and authored optical flow
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Illustrative project VFX, no original-footage pixels.
- **Modifications:** 96 premultiplied-alpha24fps frames, bidirectional optical-flow interpolation; not fluid physics.
- **SHA-256:** `63b75d12a1acd2c0626431002b9e067caeb408cfb9df902899a8baeb5ccf6d79`
- **Bytes:** 3177026

### asset-assets-brand-credits-txt

- **Label:** Brand Credits
- **File:** `assets/brand-credits.txt`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `825439eee5f9cbcdb1dad76ae7fcfa6357edc89fbd874c602c1d950d152a9012`
- **Bytes:** 236

### asset-assets-brother-poses-v76-png

- **Label:** brother poses v76 · illustrative
- **File:** `assets/brother-poses-v76.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen generation in this authorized conversation; saved original libfile_caebbc9ab16881918f0599f2f35f525d
- **Source location / method:** Use case: historical-scene. Transparent photographic character sprite atlas 2 columns x 2 rows, each fully separated with large empty transparent margins. Consistent fictional European brothers circa 1940, dramatic restrained documentary color, no text. TOP LEFT: waist-up man aged 50 with swept-back light hair, rectangular black glasses, clean shaven, dark brown suit white shirt turquoise tie, mild smile, looking forward. TOP RIGHT: SAME glasses man now smiling broadly and opening both arms to sides, all hands fully within his cell. BOTTOM LEFT: other brother age 45, swept-back darker hair, clean shaven, NO glasses, stern, black button-up sports cardigan, waist up facing camera. BOTTOM RIGHT: same non-glasses man full body seated on simple bench, leaning forward holding a plain black sports shoe in his hands, tired thoughtful expression. Pure transparent background. No rooms, no colored matte, no box borders, no floor; illustrative people not authentic historical photographs.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration, not archival evidence.
- **Modifications:** Original bytes retained; runtime calibrated crops, alpha trim and2.5D transforms.
- **SHA-256:** `4be45743a98b7b471867c0c344006b61beff070bbf92c1b103afb3ab810f9e1c`
- **Bytes:** 2059680

### asset-assets-brothers-seated-v72-png

- **Label:** brothers seated v72
- **File:** `assets/brothers-seated-v72.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; originating ChatGPT project conversation
- **Source location / method:** Two-column transparent atlas preserving the fictional brothers identity: black-top man holding boot left; glasses/suit/red tie salesman presenting hand right. See continuation-generation-record-v72.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Generated illustrative project asset; not historical evidence. Source reference restrictions are not independently cleared.
- **Modifications:** No file-pixel modifications; runtime alpha crop, placement, color and focus only.
- **SHA-256:** `60c90b91a1fb2b916b065c5307210fac1d19e6b8e8a4eb0fbe255ff59c0b7ec9`
- **Bytes:** 2467696

### asset-assets-brothers-tv-meeting-v73-png

- **Label:** brothers tv meeting v73.png
- **File:** `assets/brothers-tv-meeting-v73.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in olympic-generation-record-v73.json
- **Source location / method:** Use case: historical-scene. Asset type: three-column transparent atlas of the established fictional brothers for documentary animation. The supplied image is strict fictional identity and wardrobe reference only. LEFT column: black sweater, white collar, wavy hair man, smiling warmly with head tilted a little right, both hands at hips, waist-up. CENTER column: glasses, dark suit, white shirt, red tie man smiling broadly, hands at hips, waist-up, slightly facing left. RIGHT column: same black-sweater man shown waist-up in side profile facing right, attentive calm expression, arms relaxed by his sides, no gestures. Three clearly separated independent subjects with wide empty gutters, no overlap, full head/hair and shoulders, generous transparent margin. Photoreal detail, soft left light, natural subdued colors. No background, furniture, symbols, text, logos or extra people. Genuine transparency.
- **Author / brand owner:** Project image generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Illustrative project asset; no historical-photo authenticity is asserted. Owens likeness reference has its own recorded public-domain jurisdiction conditions.
- **Modifications:** Original file unchanged; renderer alpha/component/skyline masks, placement and grade.
- **SHA-256:** `5a35af66851235112a77f8d2abfc838e9f580eccc86f03cddb655e1e1a30add7`
- **Bytes:** 1865387

### asset-assets-chapter-bike-v65-png

- **Label:** chapter bike v65
- **File:** `assets/chapter-bike-v65.png`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project model-recipes.js bicycleModel
- **Source location / method:** Independent chapter source: chapter bike v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** Project-authored
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `2cb1e0226fa8ef66b72c2e49f5041ee7fbddde085ef5ca51935e4d2f82303e8d`
- **Bytes:** 30773

### asset-assets-chapter-generation-v65-json

- **Label:** Chapter Generation V65
- **File:** `assets/chapter-generation-v65.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `9b9acace5440556ed49f99022c38315bae8f16e607025b8c6a5850de30b6a267`
- **Bytes:** 12198

### asset-assets-chapter-props-v65-png

- **Label:** chapter props v65
- **File:** `assets/chapter-props-v65.png`
- **Usage label:** `ai-generated`
- **Origin / exact source:** OpenAI image generation; exact prompt and references in assets/chapter-generation-v65.json
- **Source location / method:** Independent chapter source: chapter props v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `6362a651bf7e84881c6973deea46207ed7c462ce10b6efb39ee7a6b340b67472`
- **Bytes:** 2342167

### asset-assets-chapter-sneakers-v76-png

- **Label:** chapter sneakers v76 · illustrative
- **File:** `assets/chapter-sneakers-v76.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen generation in this authorized conversation; saved original libfile_55e70b6aefc881918626430256522429
- **Source location / method:** Use case: product-mockup. Production transparent sprite atlas, landscape 3 columns by 2 rows, six isolated views of a realistic unbranded 1930s-inspired leather sports sneaker, cream upper, red heel and sole accents, charcoal sole. Each cell contains exactly one complete shoe with generous transparent margin, no clipping, clean studio photography with fine leather stitching. Views: lateral left, lateral right, three-quarter front, three-quarter rear, underside tilted, toe toward camera. Consistent same shoe. No lettering, logos, props, floor or cast shadow. Used as independently tumbling shoes in cinematic documentary chapter animation. Actual transparent background.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration, not archival evidence.
- **Modifications:** Original bytes retained; runtime calibrated crops, alpha trim and2.5D transforms.
- **SHA-256:** `3df47fb71b1760a7de44ef9bf62315366fcad56de4c51e3aa8787e22b8448b16`
- **Bytes:** 2009089

### asset-assets-city-aerial-v1-credit-txt

- **Label:** City Aerial V1 Credit
- **File:** `assets/city-aerial-v1-credit.txt`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** source provenance text
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `945fba3a6dede8ebc03c5485c51ba36dff3165a6be7b2cd8c6b04c3df268b63c`
- **Bytes:** 711
- **Related provenance records:** `assets/city-aerial-v1-credit.txt`

### asset-assets-city-aerial-v1-png

- **Label:** Illustrative Bavarian aerial image
- **File:** `assets/city-aerial-v1.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `84309258540614d20635872001e5687627f64d416ae41344c26ffad8df1e96f6`
- **Bytes:** 4003289
- **Related provenance records:** `assets/city-aerial-v1-credit.txt`

### asset-assets-classic-cutout-walk-v59-json

- **Label:** Classic cutout walk · preserved V59 preset
- **File:** `assets/classic-cutout-walk-v59.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source cutout-walk.js / mesh-walk.js
- **Source location / method:** Original limited-range walking definition, preserved and directly reusable from the Animation library.
- **Author / brand owner:** Project-authored rig definition
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized creation; no historical likeness or archival provenance asserted.
- **Modifications:** Original bytes retained; meshes, alpha cleanup and crops operate at runtime.
- **SHA-256:** `01ab727c762498572eb81f0da04b2c983530ac8a04aece6738a3e22aea7df859`
- **Bytes:** 2309

### asset-assets-clouds-png

- **Label:** Clouds
- **File:** `assets/clouds.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `b4ccfb64f40fbe440fd103d77d714ad29507ef9f9061fe2b4c93592343934604`
- **Bytes:** 1244752

### asset-assets-club-salesman-v65-png

- **Label:** club salesman v65
- **File:** `assets/club-salesman-v65.png`
- **Usage label:** `ai-generated`
- **Origin / exact source:** OpenAI image generation; exact prompt and references in assets/chapter-generation-v65.json
- **Source location / method:** Independent chapter source: club salesman v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `c39395512bb33316d13e62f65569d7b76e5ecafa015fcaeadb57b456f4ce3969`
- **Bytes:** 1621889

### asset-assets-commerce-generation-v67-json

- **Label:** Commerce Generation V67
- **File:** `assets/commerce-generation-v67.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `31ec3e147780a6a9ad8139276de419e9e583426ccbf9c7950fdb5fd7577e2c45`
- **Bytes:** 6112

### asset-assets-commerce-money-v67-png

- **Label:** Commerce bridge · cash
- **File:** `assets/commerce-money-v67.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in assets/commerce-generation-v67.json
- **Source location / method:** Use case: product-mockup. One isolated photorealistic bundle of old green-gray US-style dollar banknotes with a white paper band and thin muted ochre band edges, transparent background. Three-quarter angle shows the broad engraved green note top and thick stacked pale paper edges, short rectangular cash bundle, long dimension horizontal, view from 35 degrees above and slightly left. Used as independently rotating VFX money in documentary collage. Detailed aged paper, dark printed oval portrait and ornamental engraving but no clearly legible serial text required. Soft neutral light, fully visible all corners, no other object, no shadow extending beyond object, no table or backdrop. Single bundle, no asset sheet.
- **Author / brand owner:** Project generation record; fictional illustrative person/location
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Generated for user-authorized reconstruction task; no ownership claim over reference footage.
- **Modifications:** Original generated PNG bytes preserved. Runtime placement, scaling, blur and alpha compositing only.
- **SHA-256:** `5d7b9a08f7b79d140d36e04d419e5fc3d5f17f4e6e3b4246820fd36f7f27f6c2`
- **Bytes:** 1988971

### asset-assets-commerce-shoulder-v67-png

- **Label:** Commerce bridge · shoulder
- **File:** `assets/commerce-shoulder-v67.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in assets/commerce-generation-v67.json
- **Source location / method:** Use case: historical-scene. One isolated photographic foreground cutout on true transparent background: back view of the head, neck, white collar and shoulders/upper chest of a young adult man in an early 1920s black wool suit jacket. Camera extremely close from behind, head and neck seen from rear-left, no visible face. Complete rounded head at top, broad shoulders flare toward the bottom, garment continues to bottom edge. Shape occupies 85% width and 95% height, enough transparent space around sides to preserve silhouette. Neutral warm olive daylight, realistic fine dark wool and skin, sharp native asset so compositor can apply defocus. No scenery, no floor, no white backdrop, no text.
- **Author / brand owner:** Project generation record; fictional illustrative person/location
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Generated for user-authorized reconstruction task; no ownership claim over reference footage.
- **Modifications:** Original generated PNG bytes preserved. Runtime placement, scaling, blur and alpha compositing only.
- **SHA-256:** `0c00d3374e3e355b1097e6da36ab8788c06bcae95451f5a5689681c282116010`
- **Bytes:** 1896374

### asset-assets-commerce-street-v67-png

- **Label:** Commerce bridge · street
- **File:** `assets/commerce-street-v67.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in assets/commerce-generation-v67.json
- **Source location / method:** Use case: historical-scene. Create a clean photorealistic cinematic background plate for a layered documentary animation, landscape 1920x1080. Early 1920s German small-town street, stone and plaster facades tightly lining a narrow cobbled road, vanishing point left of center at x=650 y=480, right facade close and large. Match the uploaded street reference's muted warm olive-beige grading, soft overcast late-afternoon light and shallow photographic depth. Camera eye height 1.65m, 50mm lens. EMPTY scene: no people, vehicles, letters, logos or graphics. Keep architecture readable but softly focused, not miniature or illustration. Image is a clean background layer only, not a storyboard.
- **Author / brand owner:** Project generation record; fictional illustrative person/location
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Generated for user-authorized reconstruction task; no ownership claim over reference footage.
- **Modifications:** Original generated PNG bytes preserved. Runtime placement, scaling, blur and alpha compositing only.
- **SHA-256:** `00589697a6394c9a0c7865b9ae51cc7e677645c34bbf74468ffb8f558487683e`
- **Bytes:** 1932528

### asset-assets-commerce-suited-man-v67-png

- **Label:** Commerce bridge · subject
- **File:** `assets/commerce-suited-man-v67.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in assets/commerce-generation-v67.json
- **Source location / method:** Use case: historical-scene. Production photographic transparent PNG cutout, one young man from head to mid-thigh, no background, no floor or cast shadow. Same fictional young blond swept-side-hair man as LEFT young portrait reference: angular youthful face, serious expression, pale complexion, blue eyes. He now wears an early 1920s charcoal black wool suit, white collared shirt and narrow black tie. Body turned slightly toward image left, head looking toward a person offscreen left; both arms relaxed, shoulders and entire hair intact. Match the street reference pose and 50mm photographic perspective. Muted olive warm daylight from upper left, natural skin texture, neutral expression, no stylization. Center the isolated figure with transparent margin; no objects or text.
- **Author / brand owner:** Project generation record; fictional illustrative person/location
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Generated for user-authorized reconstruction task; no ownership claim over reference footage.
- **Modifications:** Original generated PNG bytes preserved. Runtime placement, scaling, blur and alpha compositing only.
- **SHA-256:** `b2f4194c60bbf4322e1f063c9c35f724551ba6e664dd6c8eade4479466a3cd0d`
- **Bytes:** 2205113

### asset-assets-communities-couple-v85-png

- **Label:** V85illustrative couple original
- **File:** `assets/communities-couple-v85.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v85.json. Native crops recorded in docs/atlas-crops-v85.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `3c03559b4c682ffdb920ed82027726ba44846c680a2e986a881266529604a733`
- **Bytes:** 590113

### asset-assets-communities-families-v85-png

- **Label:** V85illustrative families original
- **File:** `assets/communities-families-v85.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v85.json. Native crops recorded in docs/atlas-crops-v85.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `d901ad455d9eb8b7209b32ef819190fa34f1751fd3bb2c7fc2c3ac6b2b0e76c7`
- **Bytes:** 1092703

### asset-assets-communities-gangs-v85-png

- **Label:** V85illustrative gangs original
- **File:** `assets/communities-gangs-v85.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v85.json. Native crops recorded in docs/atlas-crops-v85.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `9420ed6b4ac3a407627417fb9c7df73696acb29d173c02b0eccc6359491e759a`
- **Bytes:** 2141449

### asset-assets-communities-mayor-v85-png

- **Label:** V85illustrative mayor original
- **File:** `assets/communities-mayor-v85.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v85.json. Native crops recorded in docs/atlas-crops-v85.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `25322918b4c2409b42819a85a24ac67ed877e4b488df661c94b1e826166b1b4c`
- **Bytes:** 1345409

### asset-assets-communities-objects-v85-png

- **Label:** V85illustrative objects original
- **File:** `assets/communities-objects-v85.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v85.json. Native crops recorded in docs/atlas-crops-v85.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `cd957f01bab11ab4d144328d040b6f8db38839f69d8018deb911149199c0dc98`
- **Bytes:** 2224933

### asset-assets-communities-room-v85-png

- **Label:** V85illustrative room original
- **File:** `assets/communities-room-v85.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v85.json. Native crops recorded in docs/atlas-crops-v85.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `bd9b2ec244be1ebce9f3dd526c2724bbd4c0a451f0b43b876efe4701b2e086b1`
- **Bytes:** 2281259

### asset-assets-communities-street-v85-png

- **Label:** V85illustrative street original
- **File:** `assets/communities-street-v85.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v85.json. Native crops recorded in docs/atlas-crops-v85.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `cc66fc955e8ac90ceabb1e25ed8f5048779df762c1c2c40dbf8e781e74258fe0`
- **Bytes:** 1889757

### asset-assets-conflict-fire-keyframe-v6-png

- **Label:** Conflict fire · visual reference keyframe
- **File:** `assets/conflict-fire-keyframe-v6.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated edit of selected reference; inactive visual guide, not flattened scene replacement
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `8c0b5b547e2f93d9947cfb5bef34462db7c0751500f607797da5f52a7b69695a`
- **Bytes:** 1942036

### asset-assets-conflict-generation-briefs-json

- **Label:** Conflict · exact asset generation prompts
- **File:** `assets/conflict-generation-briefs.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** exact submitted prompts, tool and provenance
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `0b9f15dc51acd4b8f8ad9791e86c8567e519371121e9c523d4456f1661790468`
- **Bytes:** 2627

### asset-assets-continuation-boy-color-v61-png

- **Label:** Colorized continuation boy
- **File:** `assets/continuation-boy-color-v61.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** /workspace/scratch/24b9f14cbd4b/generated_images/exec-645f8fd2-1787-4349-bb59-5dc8c1a2e32b.png
- **Source location / method:** Use case: precise-object-edit. Edit target: supplied grayscale boy cutout. Change ONLY colorization. Preserve exactly the same boy identity, face, eye direction, pose, expression, framing, body shape, clothing folds and cutout silhouette. Colorize photograph naturally: muted warm light skin, subtle reddish cheek tones, sandy light brown hair, gray-blue eyes, warm off-white shirt and dark brown-charcoal overalls. Restrained historical photographic palette, natural window light. Preserve original shading and dirt. Keep all empty space genuinely transparent. Do not add background or objects. Do not crop or reposition. No text.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project illustration, not archival evidence.
- **Modifications:** Copied byte-for-byte; runtime transforms and color controls only.
- **SHA-256:** `a778deccd667f4fc63f14edc9f6c350d5e8d3e23c7aab845270c22348eb60567`
- **Bytes:** 1553874

### asset-assets-continuation-generation-record-v72-json

- **Label:** continuation generation record v72
- **File:** `assets/continuation-generation-record-v72.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Project records and cited exact image metadata
- **Source location / method:** Preserved production record, not an active scene image
- **Author / brand owner:** Project records
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Project-scoped documentation; linked image licenses remain applicable
- **Modifications:** New production record or byte-exact V71 source copy
- **SHA-256:** `5e3b56d45d03e3cd9cb1ee52ccfec7f3047ba7c9f6893fbffd1003b1413174cc`
- **Bytes:** 4824

### asset-assets-dark-earth-v63-png

- **Label:** Dark earth terrain material
- **File:** `assets/dark-earth-v63.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** generated_images/exec-cad6efc3-7996-4294-ad3a-1444c5f9f45c.png
- **Source location / method:** Use case: historical-scene. Asset type: seamless material texture for editable 3D terrain. A flat orthographic straight-down photograph of dark worn compacted gray-brown dirt and dusty earth in a 1920s war-damaged European town, scattered small irregular stones and a few broken brick fragments. Mostly traversable dark earth, broad subtle patches and wheel wear, sparse gravel, no dense white rubble carpet. Natural diffuse overcast lighting, no baked perspective, no horizon, no buildings, no large identifiable objects, no people, no shadows from offscreen objects, no text. Edge-to-edge square seamless tiling material, realistic varied medium-scale texture, muted near-monochrome palette. Ground detail should remain understated behind a walking cutout.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project illustration; not archival evidence.
- **Modifications:** Original copied byte-for-byte; runtime grayscale, brightness and repeated perspective projection.
- **SHA-256:** `425996e5e2d54de2474268f7798b9495bb484200051bb06264b8c0376db3031b`
- **Bytes:** 4295513

### asset-assets-depot-complete-figure-prompts-v9-json

- **Label:** Depot Complete Figure Prompts V9
- **File:** `assets/depot-complete-figure-prompts-v9.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `97f1ef1356492b4cdf95fe248d8822f1a7434062c256af914700a0a015f9c5d2`
- **Bytes:** 2467
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-crate-png

- **Label:** Canvas-covered military equipment case
- **File:** `assets/depot-crate.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cargo cutout; independent vector markings
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `a22f3b953aa5e2da0229323ea9963c7cbdea2030d66e3661e59fd70d8a36aa17`
- **Bytes:** 2911249
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-figures-reference-png

- **Label:** Depot figures · supplied source frame
- **File:** `assets/depot-figures-reference.png`
- **Usage label:** `user-reference`
- **Origin / exact source:** User attachment; original public URL not recorded
- **Source location / method:** user-provided visual source, not archival attribution
- **Author / brand owner:** Not independently established
- **Retrieved / created:** Original attachment date not reliably recorded
- **License / permission status:** Unknown beyond the user-authorized template task
- **Modifications:** See manifest method and related depot brief files.
- **SHA-256:** `67f7f97854e204bb44da564d8b55048466a86c3c8309ca805c33876426a0341e`
- **Bytes:** 611083
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-generation-briefs-v10-json

- **Label:** Depot Generation Briefs V10
- **File:** `assets/depot-generation-briefs-v10.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `aef197acf5b4fb9469daa9689e0cc79c50dadd1a6972177bfeea08c4d760b8fa`
- **Bytes:** 1767
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-generation-briefs-json

- **Label:** Depot · exact generation briefs and result status
- **File:** `assets/depot-generation-briefs.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** exact submitted prompts; rejected figure generation explicitly recorded
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `d511df86f08fff1e5866bce515f8d990fde744018dbddb67e56d26fda92ecc9d`
- **Bytes:** 3983
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-head-reference-png

- **Label:** Depot left figure · full-head source frame
- **File:** `assets/depot-head-reference.png`
- **Usage label:** `user-reference`
- **Origin / exact source:** User attachment; original public URL not recorded
- **Source location / method:** user-provided visual source for unclipped hair contour
- **Author / brand owner:** Not independently established
- **Retrieved / created:** Original attachment date not reliably recorded
- **License / permission status:** Unknown beyond the user-authorized template task
- **Modifications:** See manifest method and related depot brief files.
- **SHA-256:** `71021bc5edf809180207ffdc57cdb32d2fd4d93eb21e34613fdcbe05dc232174`
- **Bytes:** 523436
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-man-left-svg

- **Label:** Depot figure · left · archived rough mask
- **File:** `assets/depot-man-left.svg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User attachment; original public URL not recorded
- **Source location / method:** user-reference photograph with a native SVG subject mask; independent runtime armband
- **Author / brand owner:** Not independently established
- **Retrieved / created:** Original attachment date not reliably recorded
- **License / permission status:** Unknown beyond the user-authorized template task
- **Modifications:** See manifest method and related depot brief files.
- **SHA-256:** `dd134a00aac3aada8beb7aa986ea8bec5348ca00af9eacebd3fe2b06ff94ad12`
- **Bytes:** 1513645
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-man-right-svg

- **Label:** Depot figure · right, round glasses · archived rough mask
- **File:** `assets/depot-man-right.svg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User attachment; original public URL not recorded
- **Source location / method:** user-reference photograph with native SVG subject mask; independent runtime armband
- **Author / brand owner:** Not independently established
- **Retrieved / created:** Original attachment date not reliably recorded
- **License / permission status:** Unknown beyond the user-authorized template task
- **Modifications:** See manifest method and related depot brief files.
- **SHA-256:** `291bbf805ce3387ce41de3304de6251f177e4e923ba7eb2cb9dc799a365bb7ee`
- **Bytes:** 815399
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-mountain-face-v10-png

- **Label:** Mountain descent · continuous rock face
- **File:** `assets/depot-mountain-face-v10.png`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** No reliable acquisition record
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `905a9d2e6f598fc033403b1a20d60ca457a8bad156c6ea731e866be2b5bb7477`
- **Bytes:** 3510138
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-person-left-v9-png

- **Label:** depot person left v9 · retained alternate
- **File:** `assets/depot-person-left-v9.png`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** Retained legacy image now indexed; original provenance remains in the central register
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `fc7ff0a9b680ee180cc0aa33eecc4988e01e57c0ae1341deb5073c5832600e8a`
- **Bytes:** 1656697
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-person-right-v9-png

- **Label:** depot person right v9 · retained alternate
- **File:** `assets/depot-person-right-v9.png`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** Retained legacy image now indexed; original provenance remains in the central register
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `5f2a2763c8d57b890e8ac2d48bc37583021c55fd1f99b96132c4f01fb1d9c7d9`
- **Bytes:** 1618871
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-room-png

- **Label:** Supply depot · warm industrial background
- **File:** `assets/depot-room.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated photographic background plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `f5d12486f42d35a2b267c0750a87c08b0be1de7405126e59a37c155741bd48d7`
- **Bytes:** 2070117
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-soldier-left-v10-svg

- **Label:** Depot soldier · left · plain military uniform
- **File:** `assets/depot-soldier-left-v10.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** Generated transparent uniformed pair, isolated by native SVG viewport. Integrated political insignia request rejected; no floating armband overlay.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `6442246833c01451a3e90515a6d57a8dc5ba546b8f079248d0544c2d88be37ee`
- **Bytes:** 2532364
- **Related provenance records:** `assets/conflict-generation-briefs.json`, `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-soldier-right-v10-svg

- **Label:** Depot soldier · right · plain military uniform
- **File:** `assets/depot-soldier-right-v10.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** Generated transparent uniformed pair, isolated by native SVG viewport. Integrated political insignia request rejected; no floating armband overlay.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `c5f37bcd3cbee6f4f425a14d630e841ff470f06e90fd42d681dbf10a371a37f7`
- **Bytes:** 2532366
- **Related provenance records:** `assets/conflict-generation-briefs.json`, `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-uniformed-pair-v10-png

- **Label:** depot uniformed pair v10 · retained alternate
- **File:** `assets/depot-uniformed-pair-v10.png`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** Retained legacy image now indexed; original provenance remains in the central register
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `59b36b0384a18f667b73ade1a3202f7b92fc4bbe5ec29a1ac9f7b56ea5ebcdce`
- **Bytes:** 1899152
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-uniformed-pair-v29-png

- **Label:** Generated plain-uniform pair · v29
- **File:** `assets/depot-uniformed-pair-v29.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** Generated alpha cutout using the built-in image-generation tool; recorded in the project conversation. Exact submitted prompt/output ID not retained in the current checkout.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `6a98793f6e5a7cd1bc8d7872b5342dbfe14e0dfaedb86718aed0f84d24a9f474`
- **Bytes:** 1825125
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-desk-lamp-v3-png

- **Label:** Desk and practical lamp · alpha cutout
- **File:** `assets/desk-lamp-v3.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `f7293766663be7e076578f15dc4e4f3fc632166c866478f6435e6d4d2abecaab`
- **Bytes:** 2020196

### asset-assets-desk-png

- **Label:** Desk
- **File:** `assets/desk.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `0c2f98e637e2a86f50b8b870e10740c0298beb31b9006e0923fd7581ed91194a`
- **Bytes:** 2541460

### asset-assets-division-environments-v84-png

- **Label:** Writing rooms, timbered facade and illustrative aerial atlas
- **File:** `assets/division-environments-v84.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Writing rooms, timbered facade and illustrative aerial atlas. Exact prompts in docs/generation-record-v84.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project reconstruction, not historical evidence or accurate cartography
- **Modifications:** Original bytes retained; runtime atlas crops, masks, transforms and compositing
- **SHA-256:** `a48b215f1d20838c6d5390c4026c3cdcb4e9b42b582db5b5bbc035ab9a68ce7f`
- **Bytes:** 2827366

### asset-assets-division-people-v84-png

- **Label:** Writers, rear workers, runner and puma cutout atlas
- **File:** `assets/division-people-v84.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Writers, rear workers, runner and puma cutout atlas. Exact prompts in docs/generation-record-v84.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project reconstruction, not historical evidence or accurate cartography
- **Modifications:** Original bytes retained; runtime atlas crops, masks, transforms and compositing
- **SHA-256:** `21d2a439d78045527a980348b8324f3550924685487d41f20e4c93413a568e57`
- **Bytes:** 2691986

### asset-assets-explosion-generation-v61-json

- **Label:** Explosion Generation V61
- **File:** `assets/explosion-generation-v61.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `b4b73ac4b8b27e0a6d20dd73d131bb5022d00c500551279bb2f55bd50ec171ff`
- **Bytes:** 1631

### asset-assets-explosion-smoke-v61-png

- **Label:** Broad explosion and dark smoke
- **File:** `assets/explosion-smoke-v61.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** ../generated_images/exec-68ee6f4a-df67-40d6-81b1-2378f149ac7f.png
- **Source location / method:** Photographic transparent broad explosion with curling charcoal/blue-gray smoke, pale-yellow hot lower core, orange lobes; no ground/buildings/people/text; fully visible effect with transparent margins.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project illustration; not archival evidence.
- **Modifications:** Copied byte-for-byte. Runtime scales, grades and composites the alpha sprite. Procedural smoke evolution remains separate.
- **SHA-256:** `66dbddd627d3e922394aec249e2d7bfce13ce27a1cf79dbe4b2f70d5fee9219e`
- **Bytes:** 2455302

### asset-assets-faces-v3-png

- **Label:** Fire scene · paired portrait cutouts
- **File:** `assets/faces-v3.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `5bf0f5f1a696431d15a4c7ffa5ef35d3cb4e455dff13c9f1e64febea4db31c1f`
- **Bytes:** 2025849

### asset-assets-facing-brothers-v74-png

- **Label:** facing brothers · V74 illustrative reconstruction
- **File:** `assets/facing-brothers-v74.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool; current user-authorized documentary reconstruction
- **Source location / method:** Use case: identity-preserve. Reference image role: fictional character identity and costume reference for two brothers in a historical documentary reconstruction. Create a NEW transparent photographic atlas with TWO separated waist-up figures, matching the curly brown-haired man and the bespectacled dark-haired man of the reference. Left half: curly-haired man, dark charcoal cardigan over white collar, body three-quarter profile toward RIGHT, concerned restrained expression, arms relaxed down. Right half: bespectacled man in dark suit, white shirt and dark red tie, body three-quarter profile toward LEFT, concerned serious expression, arms down. They face toward each other but remain separate with a large transparent gutter. No smiles, props, medals, symbols, text or raised arms. Natural 1930s studio photography, accurate skin texture and clean alpha edges, complete heads and torsos with padding. Preserve identities/costumes but change expressions and orientation only. Actual transparent background.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project asset; no claim of archival authenticity or independently cleared public-figure likeness rights
- **Modifications:** Original PNG retained byte-for-byte. Runtime cropped atlas parts and editable lighting/compositing.
- **SHA-256:** `8e0ccc8e08fe65c484cda1879796f337b4cca939567d813bbb009028082c4f32`
- **Bytes:** 1361973

### asset-assets-factory-aircraft-v76-png

- **Label:** factory aircraft v76 · illustrative
- **File:** `assets/factory-aircraft-v76.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen generation in this authorized conversation; saved original libfile_5ccab755e618819182a4a7c8fb47ff80
- **Source location / method:** Use case historical-scene. Transparent production sprite atlas two clearly separated equal horizontal cells, left and right. LEFT: complete modest two-story 1930s German shoe factory, dark brick gray masonry, simple stepped-gabled front, pitched roof, side facade visible in three-quarter view facing toward right, small rectangular windows, front short outdoor stair and modest door, full building base visible with tiny ground strip, perspective eye level. RIGHT: complete gray 1940s single-engine propeller plane seen from side slightly above, nose facing LEFT, LANDING GEAR FULLY RETRACTED no wheels hanging, no propeller blades baked in, no markings no insignia. Each object fully within its half, isolated with large transparent margins, no background sky no text. Gray documentary photographic realism, not a diagram.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration, not archival evidence.
- **Modifications:** Original bytes retained; runtime calibrated crops, alpha trim and2.5D transforms.
- **SHA-256:** `6c0f8d1ad37f4b0eb6c68c8482c29c36c08c42d7b78d99741a80602a5c68e80a`
- **Bytes:** 1526231

### asset-assets-factory-front-v65-png

- **Label:** factory front v65
- **File:** `assets/factory-front-v65.png`
- **Usage label:** `ai-generated`
- **Origin / exact source:** OpenAI image generation; exact prompt and references in assets/chapter-generation-v65.json
- **Source location / method:** Independent chapter source: factory front v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `3e1000b42f16208eef5ae0806a9bdb2c6b0e14c3b992e5a08f70204c476ef96f`
- **Bytes:** 1952210

### asset-assets-factory-street-v72-png

- **Label:** factory street v72
- **File:** `assets/factory-street-v72.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; originating ChatGPT project conversation
- **Source location / method:** Empty pale industrial cobblestone factory street with depth and one-point perspective. See continuation-generation-record-v72.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Generated illustrative project asset; not historical evidence. Source reference restrictions are not independently cleared.
- **Modifications:** No file-pixel modifications; runtime alpha crop, placement, color and focus only.
- **SHA-256:** `8298a364110ea36c01d52121d6e83f82c91fd84a0f20f4c0f9e3475b3775ef55`
- **Bytes:** 3153397

### asset-assets-family-house-v76-png

- **Label:** family house v76 · illustrative
- **File:** `assets/family-house-v76.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen generation in this authorized conversation; saved original libfile_e804f4fb1aac819188cd92e91e560918
- **Source location / method:** Use case historical-scene. Wide16:9 cinematic photorealistic exterior plate, modest 1930s German half-timbered house, entire structure visible and roof fully in frame, light plaster with dark timber beams and weathered tiled gabled roof, house centered slightly left with clear foreground cobblestone road and yard, few autumn trees at edges, softly pink salmon sunset sky. Eye-level camera for compositing family standing in foreground. Restrained warm light, brighter readable house facade, no people, no vehicles, no fire, no smoke, no signage, no text. Authentic materials, historical illustration.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration, not archival evidence.
- **Modifications:** Original bytes retained; runtime calibrated crops, alpha trim and2.5D transforms.
- **SHA-256:** `de2ec1366d83aabed3fdc659744ba50fc232fa622bdf403fe77fbedb280b0bb4`
- **Bytes:** 3030810

### asset-assets-family-layers-v76-png

- **Label:** family layers v76 · illustrative
- **File:** `assets/family-layers-v76.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen generation in this authorized conversation; saved original libfile_059b20b8ac048191bdb35bd6b84cacca
- **Source location / method:** Use case historical-scene. Transparent photographic sprite atlas with exactly SIX separated cells in 2 columns by3 rows, equal cells with generous transparent margins, circa1940 European family, restrained warm cinematic color, photorealistic fictional people. TOP LEFT: rear family unit father standing beside woman holding small toddler, three people together. TOP RIGHT: one teenage boy standing, light beige shirt. MIDDLE LEFT: one middle-aged woman with wavy shoulder-length dark blond hair wearing burgundy blouse, head to mid thigh. MIDDLE RIGHT: one older man with rectangular dark glasses in gray suit, head to thigh. BOTTOM LEFT: one ten-year-old boy brown hair, olive-brown shirt, head to waist. BOTTOM RIGHT: one eight-year-old boy short light hair, gray green shirt, head to waist. Everyone faces camera with serious quiet expressions. Each cell entirely isolated on transparent background, no objects or background or borders or text; all heads and shoulders complete. Eight people total in six independently compositable groups. Not historical documentation.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration, not archival evidence.
- **Modifications:** Original bytes retained; runtime calibrated crops, alpha trim and2.5D transforms.
- **SHA-256:** `8380d54b3ab607fa6b36c7f02535bace5d08f3e03bdf5439f47af0945897f0fb`
- **Bytes:** 2288648

### asset-assets-feud-frontal-v83-png

- **Label:** Matched split frontal portrait
- **File:** `assets/feud-frontal-v83.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Matched split frontal portrait. Generation prompts retained in docs/generation-record-v83.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project reconstruction; not historical evidence
- **Modifications:** Original bytes retained; runtime atlas crops, transforms, blur and compositing
- **SHA-256:** `3d1cd58e4c82b372aa3243d1b781dfdfeaa1196f738992fd1a5af61d49b1ac10`
- **Bytes:** 2163781

### asset-assets-feud-head-views-v83-png

- **Label:** Six-view metallic head atlas
- **File:** `assets/feud-head-views-v83.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Six-view metallic head atlas. Generation prompts retained in docs/generation-record-v83.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project reconstruction; not historical evidence
- **Modifications:** Original bytes retained; runtime atlas crops, transforms, blur and compositing
- **SHA-256:** `b0a2d551c5966e86d692863b4c8bb69ece4b1a448227ff46670ffed263bbd4dd`
- **Bytes:** 2979094

### asset-assets-fire-poster-png

- **Label:** Fire Poster
- **File:** `assets/fire-poster.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `6214a054c8bd00e77328c842c37f16c1b2b477fb146f425c5f8fc67ade23be3f`
- **Bytes:** 2102389

### asset-assets-fire-png

- **Label:** Fire
- **File:** `assets/fire.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `d39792ffe706cac10b1ca9344c022234d4cd908af0979996797eca5cb9fcd228`
- **Bytes:** 2030703

### asset-assets-flame-motion-v76-00-png

- **Label:** flame-motion-v76-00
- **File:** `assets/flame-motion-v76-00.png`
- **Usage label:** `sourced-licensed`
- **Origin / exact source:** https://www.pexels.com/video/fire-on-black-background-11977692/
- **Source location / method:** assets/real-fire.mp4 and its existing credit; originally downloaded2026-10-27.
- **Author / brand owner:** Artur Szczubelek / Pexels
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Existing credited project footage; https://www.pexels.com/license/
- **Modifications:** Seconds3–9,24fps,480x270, six6x4 frame atlases; screen compositing.
- **SHA-256:** `26aa4537b561513faae175f00ba6e0cfa9c00af8f37ad12a8d3f7c5e1a052ee5`
- **Bytes:** 1512103

### asset-assets-flame-motion-v76-01-png

- **Label:** flame-motion-v76-01
- **File:** `assets/flame-motion-v76-01.png`
- **Usage label:** `sourced-licensed`
- **Origin / exact source:** https://www.pexels.com/video/fire-on-black-background-11977692/
- **Source location / method:** assets/real-fire.mp4 and its existing credit; originally downloaded2026-10-27.
- **Author / brand owner:** Artur Szczubelek / Pexels
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Existing credited project footage; https://www.pexels.com/license/
- **Modifications:** Seconds3–9,24fps,480x270, six6x4 frame atlases; screen compositing.
- **SHA-256:** `497da2a03765aaa88b465744b6681ebb11cf39638b7ec83828b7028c05dce4a7`
- **Bytes:** 1657538

### asset-assets-flame-motion-v76-02-png

- **Label:** flame-motion-v76-02
- **File:** `assets/flame-motion-v76-02.png`
- **Usage label:** `sourced-licensed`
- **Origin / exact source:** https://www.pexels.com/video/fire-on-black-background-11977692/
- **Source location / method:** assets/real-fire.mp4 and its existing credit; originally downloaded2026-10-27.
- **Author / brand owner:** Artur Szczubelek / Pexels
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Existing credited project footage; https://www.pexels.com/license/
- **Modifications:** Seconds3–9,24fps,480x270, six6x4 frame atlases; screen compositing.
- **SHA-256:** `db0cd907422ed0fa23e25bce6dc980f5ecc6f42d628788848bda34c148fb91e2`
- **Bytes:** 1818873

### asset-assets-flame-motion-v76-03-png

- **Label:** flame-motion-v76-03
- **File:** `assets/flame-motion-v76-03.png`
- **Usage label:** `sourced-licensed`
- **Origin / exact source:** https://www.pexels.com/video/fire-on-black-background-11977692/
- **Source location / method:** assets/real-fire.mp4 and its existing credit; originally downloaded2026-10-27.
- **Author / brand owner:** Artur Szczubelek / Pexels
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Existing credited project footage; https://www.pexels.com/license/
- **Modifications:** Seconds3–9,24fps,480x270, six6x4 frame atlases; screen compositing.
- **SHA-256:** `58b50130dc5ed84a01b84bd99f81bf48fd159c263a7a099fcb95e4f09cd3dc72`
- **Bytes:** 1915139

### asset-assets-flame-motion-v76-04-png

- **Label:** flame-motion-v76-04
- **File:** `assets/flame-motion-v76-04.png`
- **Usage label:** `sourced-licensed`
- **Origin / exact source:** https://www.pexels.com/video/fire-on-black-background-11977692/
- **Source location / method:** assets/real-fire.mp4 and its existing credit; originally downloaded2026-10-27.
- **Author / brand owner:** Artur Szczubelek / Pexels
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Existing credited project footage; https://www.pexels.com/license/
- **Modifications:** Seconds3–9,24fps,480x270, six6x4 frame atlases; screen compositing.
- **SHA-256:** `715aeacfb4445bf350f8d2adc436ebaaaa57c8eea8a6181425d1bbfbfc7f4b0b`
- **Bytes:** 2030418

### asset-assets-flame-motion-v76-05-png

- **Label:** flame-motion-v76-05
- **File:** `assets/flame-motion-v76-05.png`
- **Usage label:** `sourced-licensed`
- **Origin / exact source:** https://www.pexels.com/video/fire-on-black-background-11977692/
- **Source location / method:** assets/real-fire.mp4 and its existing credit; originally downloaded2026-10-27.
- **Author / brand owner:** Artur Szczubelek / Pexels
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Existing credited project footage; https://www.pexels.com/license/
- **Modifications:** Seconds3–9,24fps,480x270, six6x4 frame atlases; screen compositing.
- **SHA-256:** `b0ae43758d08e425782606c663cf719e88e25c865f141e767ac277a701797dbd`
- **Bytes:** 2069505

### asset-assets-football-field-v72-png

- **Label:** football field v72
- **File:** `assets/football-field-v72.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; originating ChatGPT project conversation
- **Source location / method:** Empty period football field; remove people/ball, low grass camera, distant sheds, goal and cloudy slate sky. See continuation-generation-record-v72.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Generated illustrative project asset; not historical evidence. Source reference restrictions are not independently cleared.
- **Modifications:** No file-pixel modifications; runtime alpha crop, placement, color and focus only.
- **SHA-256:** `fff7ab325f294f4d42f16e4956144f21f2a738c269544633b5ca811a5bd4d36c`
- **Bytes:** 2703785

### asset-assets-football-kicker-v72-png

- **Label:** football kicker v72
- **File:** `assets/football-kicker-v72.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; originating ChatGPT project conversation
- **Source location / method:** Fictional period footballer kicking left, off-white jersey, dark shorts and socks, brown ankle boots, full body isolated on transparent background. See continuation-generation-record-v72.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Generated illustrative project asset; not historical evidence. Source reference restrictions are not independently cleared.
- **Modifications:** No file-pixel modifications; runtime alpha crop, placement, color and focus only.
- **SHA-256:** `25615fe1147bec54e17131b745f304eba51661df751a7002d9b6f43dae7eb022`
- **Bytes:** 1775196

### asset-assets-foreground-tree-v65-png

- **Label:** foreground tree v65
- **File:** `assets/foreground-tree-v65.png`
- **Usage label:** `ai-generated`
- **Origin / exact source:** OpenAI image generation; exact prompt and references in assets/chapter-generation-v65.json
- **Source location / method:** Independent chapter source: foreground tree v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `6caf718a9b040ab21a0d930ac09344a96f46419b15261b1bcbc38f4548e55477`
- **Bytes:** 3583329

### asset-assets-generation-retention-v40-json

- **Label:** Generated asset retention inventory
- **File:** `assets/generation-retention-v40.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Project-authored motion or retention metadata; no reference video pixels
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `257ab89402e345f469b4ed5f1197800685299879952d9b64ea3200266d320fc1`
- **Bytes:** 3499

### asset-assets-globe-cloud-veil-v69-png

- **Label:** globe cloud veil v69
- **File:** `assets/globe-cloud-veil-v69.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in assets/globe-generation-v69.json
- **Source location / method:** Exact generation prompt retained; no reference images supplied.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-30
- **License / permission status:** AI-generated illustrative project asset; not archival evidence.
- **Modifications:** Original RGBA PNG unchanged; runtime tints, projects and moves independent instances.
- **SHA-256:** `27dd5eed996704251d453f722d50126a578ade99c85f973d326357c5efbe8629`
- **Bytes:** 2632481

### asset-assets-globe-earth-day-nasa-v69-jpg

- **Label:** globe earth day nasa v69
- **File:** `assets/globe-earth-day-nasa-v69.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://assets.science.nasa.gov/content/dam/science/esd/eo/images/bmng/bmng-base/july/world.200407.3x5400x2700.jpg
- **Source location / method:** NASA official map download. Credit NASA. Source pages: https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/ and https://science.nasa.gov/earth/earth-observatory/earth-at-night/maps/
- **Author / brand owner:** NASA Earth Observatory / Blue Marble Next Generation; Reto Stöckli and Robert Simmon
- **Retrieved / created:** 2026-10-30
- **License / permission status:** NASA imagery guidelines: https://www.nasa.gov/nasa-brand-center/images-and-media/ ; generally reusable informational imagery with credit, subject to stated third-party exceptions; no endorsement or logo rights implied.
- **Modifications:** Original downloaded JPEG retained byte-for-byte.
- **SHA-256:** `f55226d46d27e05511f2118dc6aa24f5dbf9b6b2cddc87cc6e0e7dd067c00b11`
- **Bytes:** 1617810

### asset-assets-globe-earth-night-8192-v69-jpg

- **Label:** globe earth night 8192 v69
- **File:** `assets/globe-earth-night-8192-v69.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://assets.science.nasa.gov/content/dam/science/esd/eo/images/imagerecords/144000/144898/BlackMarble_2016_3km.jpg
- **Source location / method:** NASA official map download. Credit NASA. Source pages: https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/ and https://science.nasa.gov/earth/earth-observatory/earth-at-night/maps/
- **Author / brand owner:** NASA Earth Observatory / Black Marble 2016
- **Retrieved / created:** 2026-10-30
- **License / permission status:** NASA imagery guidelines: https://www.nasa.gov/nasa-brand-center/images-and-media/ ; generally reusable informational imagery with credit, subject to stated third-party exceptions; no endorsement or logo rights implied.
- **Modifications:** Resampled with canvas to8192×4096, JPEG quality94; no creative paint changes. Original retained.
- **SHA-256:** `abfd7e9ead787fdd5b36e57e23cd026fe57c6fe78e0ebf7a6a5f829411ace1e5`
- **Bytes:** 2983259

### asset-assets-globe-earth-night-nasa-v69-jpg

- **Label:** globe earth night nasa v69
- **File:** `assets/globe-earth-night-nasa-v69.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://assets.science.nasa.gov/content/dam/science/esd/eo/images/imagerecords/144000/144898/BlackMarble_2016_3km.jpg
- **Source location / method:** NASA official map download. Credit NASA. Source pages: https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/ and https://science.nasa.gov/earth/earth-observatory/earth-at-night/maps/
- **Author / brand owner:** NASA Earth Observatory / Black Marble 2016
- **Retrieved / created:** 2026-10-30
- **License / permission status:** NASA imagery guidelines: https://www.nasa.gov/nasa-brand-center/images-and-media/ ; generally reusable informational imagery with credit, subject to stated third-party exceptions; no endorsement or logo rights implied.
- **Modifications:** Original downloaded 13500×6750 JPEG retained inactive; playback uses separately registered derivative.
- **SHA-256:** `230aac448ae68c358be433dd518888cccb3a85ccf66f7b44326441c324ad6725`
- **Bytes:** 8106233

### asset-assets-globe-electric-v70-wav

- **Label:** globe electric v70
- **File:** `assets/globe-electric-v70.wav`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: globe-audio.js / synthGlobeAudio; scripts/render-globe-audio-v70.mjs
- **Source location / method:** 48kHz16-bit stereo PCM; deterministic LCG noise seed9070, sine tones, envelopes and filters. Native cue peaks1.25,3.1,4.85; impact5.06; cloud whoosh6.12.
- **Author / brand owner:** Project-authored synthesis
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-authored sound; no external recordings or samples.
- **Modifications:** Original generated master/stem; gain and narration mixing applied separately in review.
- **SHA-256:** `c1b44fb8b28e389c77e1f19485fdcd05285f17b081ef9099de7b5853ce11e804`
- **Bytes:** 1536044

### asset-assets-globe-generation-v69-json

- **Label:** Globe Generation V69
- **File:** `assets/globe-generation-v69.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `f94a3f722a3fe7f0d464f10899747c32601a35d96e62c3db149f8efd80c19b0d`
- **Bytes:** 2135

### asset-assets-globe-impact-v70-wav

- **Label:** globe impact v70
- **File:** `assets/globe-impact-v70.wav`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: globe-audio.js / synthGlobeAudio; scripts/render-globe-audio-v70.mjs
- **Source location / method:** 48kHz16-bit stereo PCM; deterministic LCG noise seed9070, sine tones, envelopes and filters. Native cue peaks1.25,3.1,4.85; impact5.06; cloud whoosh6.12.
- **Author / brand owner:** Project-authored synthesis
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-authored sound; no external recordings or samples.
- **Modifications:** Original generated master/stem; gain and narration mixing applied separately in review.
- **SHA-256:** `a3f71ecde187fd78e729150b246ae9a5576eb51cc5315c0fa7bd3933ccc183b8`
- **Bytes:** 1536044

### asset-assets-globe-nebula-v69-png

- **Label:** globe nebula v69
- **File:** `assets/globe-nebula-v69.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in assets/globe-generation-v69.json
- **Source location / method:** Exact generation prompt retained; no reference images supplied.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-30
- **License / permission status:** AI-generated illustrative project asset; not archival evidence.
- **Modifications:** Original generated PNG unchanged. Runtime dims/blurs and adds independent moving clouds and color fields.
- **SHA-256:** `581b457d4ce986bbecc9a22b8ee6f8b8403b793c1a9ec533d32d350fa5d3066b`
- **Bytes:** 2046265

### asset-assets-globe-rumble-v70-wav

- **Label:** globe rumble v70
- **File:** `assets/globe-rumble-v70.wav`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: globe-audio.js / synthGlobeAudio; scripts/render-globe-audio-v70.mjs
- **Source location / method:** 48kHz16-bit stereo PCM; deterministic LCG noise seed9070, sine tones, envelopes and filters. Native cue peaks1.25,3.1,4.85; impact5.06; cloud whoosh6.12.
- **Author / brand owner:** Project-authored synthesis
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-authored sound; no external recordings or samples.
- **Modifications:** Original generated master/stem; gain and narration mixing applied separately in review.
- **SHA-256:** `47eb710dd018249898083873af964fcb7428178bc9f0ef9206ea3ae938a99000`
- **Bytes:** 1536044

### asset-assets-globe-sound-design-v70-wav

- **Label:** globe sound design v70
- **File:** `assets/globe-sound-design-v70.wav`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: globe-audio.js / synthGlobeAudio; scripts/render-globe-audio-v70.mjs
- **Source location / method:** 48kHz16-bit stereo PCM; deterministic LCG noise seed9070, sine tones, envelopes and filters. Native cue peaks1.25,3.1,4.85; impact5.06; cloud whoosh6.12.
- **Author / brand owner:** Project-authored synthesis
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-authored sound; no external recordings or samples.
- **Modifications:** Original generated master/stem; gain and narration mixing applied separately in review.
- **SHA-256:** `3447665a3eab46ebada9fbd052d9457b56780a398ddef5117fd7a5b25a1371a9`
- **Bytes:** 1536044

### asset-assets-globe-whoosh-v70-wav

- **Label:** globe whoosh v70
- **File:** `assets/globe-whoosh-v70.wav`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: globe-audio.js / synthGlobeAudio; scripts/render-globe-audio-v70.mjs
- **Source location / method:** 48kHz16-bit stereo PCM; deterministic LCG noise seed9070, sine tones, envelopes and filters. Native cue peaks1.25,3.1,4.85; impact5.06; cloud whoosh6.12.
- **Author / brand owner:** Project-authored synthesis
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-authored sound; no external recordings or samples.
- **Modifications:** Original generated master/stem; gain and narration mixing applied separately in review.
- **SHA-256:** `916a784acc12874c25863730c8f4828d800f5b4d900a079738cc210e79cf81d3`
- **Bytes:** 1536044

### asset-assets-history-figure-generation-v46-json

- **Label:** History Figure Generation V46
- **File:** `assets/history-figure-generation-v46.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `30f67604bb9f2a5b31dad3b676893d90c60b8b329081a4169fc1f25095a65fa5`
- **Bytes:** 900

### asset-assets-history-figure-v46-png

- **Label:** Rear-facing civilian figure · reconstruction
- **File:** `assets/history-figure-v46.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-a3fa4d16-1d6f-4c47-9658-15f1c695212f.png
- **Source location / method:** Exact prompt in assets/history-figure-generation-v46.json
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for this user-authorized project; no archival authenticity claim.
- **Modifications:** Original PNG retained; runtime position, scale and opacity remain editable.
- **SHA-256:** `23e0fd977c5a7bb641b45b96cc3f895fa39b7ddebede2f909f617205db6d0704`
- **Bytes:** 1656733

### asset-assets-history-generation-v46-json

- **Label:** History Generation V46
- **File:** `assets/history-generation-v46.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `2203d337e8dbd289b9bdb3de0e8842d0ff5a85b44049555b6972d9cf665fd057`
- **Bytes:** 3291

### asset-assets-history-portrait-v46-png

- **Label:** History portrait · reconstruction
- **File:** `assets/history-portrait-v46.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-9a7a5ea5-7796-44c4-8ec1-11c4f82e7a68.png
- **Source location / method:** Exact generation prompt in assets/history-generation-v46.json
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for this user-authorized project; no archival authenticity claim.
- **Modifications:** Original PNG retained. Runtime framing, grade, grain and transitions are independently controlled.
- **SHA-256:** `e4bae57d048f2956b1af0fa6a8735ae67201edb7c1df35a582a128465f7fa166`
- **Bytes:** 2223086

### asset-assets-history-shoulder-v46-png

- **Label:** History shoulder · reconstruction
- **File:** `assets/history-shoulder-v46.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-c90a2ca0-414a-45f4-928e-1b8f06a4016d.png
- **Source location / method:** Exact generation prompt in assets/history-generation-v46.json
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for this user-authorized project; no archival authenticity claim.
- **Modifications:** Original PNG retained. Runtime framing, grade, grain and transitions are independently controlled.
- **SHA-256:** `9a03028cfa890125d7ddd13dcbf889a27434ca963a65ada806ae4c578ace4ad5`
- **Bytes:** 2146463

### asset-assets-history-street-v46-png

- **Label:** History street · reconstruction
- **File:** `assets/history-street-v46.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-dc27593f-0512-451e-9122-cc513b7d723e.png
- **Source location / method:** Exact generation prompt in assets/history-generation-v46.json
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for this user-authorized project; no archival authenticity claim.
- **Modifications:** Original PNG retained. Runtime framing, grade, grain and transitions are independently controlled.
- **SHA-256:** `a752650457d78808087b49c0db388a38140e8f8ed719ffc473f63eebb589c933`
- **Bytes:** 3234452

### asset-assets-history-workshop-v46-png

- **Label:** Older male worker · retained superseded workshop
- **File:** `assets/history-workshop-v46.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-9ce4f346-11cc-4158-a120-c048b333399e.png
- **Source location / method:** Exact generation prompt in assets/history-generation-v46.json
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for this user-authorized project; no archival authenticity claim.
- **Modifications:** Original PNG retained. Runtime framing, grade, grain and transitions are independently controlled.
- **SHA-256:** `17f554a715128acaa6df59f223e99fb0f2bad109ab95e2940ccbd88b2b57c8be`
- **Bytes:** 2306746

### asset-assets-history-workshop-woman-v48-png

- **Label:** Seated woman by workshop window
- **File:** `assets/history-workshop-woman-v48.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-6f7663e6-3a54-42db-a389-ef66821b70f3.png
- **Source location / method:** Exact prompt and input references in assets/workshop-woman-generation-v48.json
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** User-authorized project reconstruction; no archival authenticity claim.
- **Modifications:** Original generated PNG retained; runtime camera, iris reflection and workshop framing remain editable.
- **SHA-256:** `350715ef96ae7542d77c425447c0658ce478b46d9f5b02c62fcdf6a4490f3505`
- **Bytes:** 2164555

### asset-assets-human-silhouettes-v76-png

- **Label:** human silhouettes v76 · illustrative
- **File:** `assets/human-silhouettes-v76.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen generation in this authorized conversation; saved original libfile_547d0b12ede48191b251d06e6b0a2d0b
- **Source location / method:** Use case historical-scene. Production transparent photographic sprite sheet FOUR equal vertical columns, each containing ONE complete separate standing European factory man circa 1940, full body head to feet. Anatomically realistic opaque black silhouettes, not geometric icons. Four varied natural poses: man walking left, man walking right, man standing hands at sides, man in coat three-quarter back. Subtle rim light only, bodies solid nearly black, accurate hands feet shoulders and hair. All figures isolated with 12% empty transparent margin in each column. No floor, no background, no shadows baked behind, no scene, no text. Actual transparent background. For blurred near-camera passing human occluders and distant aisle silhouettes.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration, not archival evidence.
- **Modifications:** Original bytes retained; runtime calibrated crops, alpha trim and2.5D transforms.
- **SHA-256:** `41f304f97f41bc20d7fcfaee67c3a3013cda279cb26d13f1a7c3ea223ea540e4`
- **Bytes:** 1703037

### asset-assets-humanoid-v89-license-assets-md

- **Label:** LICENSE.ASSETS
- **File:** `assets/humanoid-v89/LICENSE.ASSETS.md`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://raw.githubusercontent.com/makehumancommunity/makehuman/master/LICENSE.ASSETS.md
- **Source location / method:** Anatomical asset/rig/weights, adult male target, Catmull-Clark render surface, native fitted garments and authored faceless head. Not a recovered source character.
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored derived geometry/rig integration
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 MakeHuman graphical data; see LICENSE.ASSETS.md. Native implementation and derived garment/head geometry are project-authored. No MakeHuman application code is bundled.
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `f6089cba01cb570a24712b41ab8a586ccd3cc5ef53dc266ca50b95c288956d2c`
- **Bytes:** 6962

### asset-assets-humanoid-v89-license-md

- **Label:** LICENSE
- **File:** `assets/humanoid-v89/LICENSE.md`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://raw.githubusercontent.com/makehumancommunity/makehuman/master/LICENSE.md
- **Source location / method:** Anatomical asset/rig/weights, adult male target, Catmull-Clark render surface, native fitted garments and authored faceless head. Not a recovered source character.
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored derived geometry/rig integration
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 MakeHuman graphical data; see LICENSE.ASSETS.md. Native implementation and derived garment/head geometry are project-authored. No MakeHuman application code is bundled.
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `edd99571ca62698f78c943fd4fffb159a413c315fa0d4819d3cec5cadaf8b4f1`
- **Bytes:** 3598

### asset-assets-humanoid-v89-base-original-obj

- **Label:** base original
- **File:** `assets/humanoid-v89/base-original.obj`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://raw.githubusercontent.com/makehumancommunity/makehuman/master/makehuman/data/3dobjs/base.obj
- **Source location / method:** Anatomical asset/rig/weights, adult male target, Catmull-Clark render surface, native fitted garments and authored faceless head. Not a recovered source character.
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored derived geometry/rig integration
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 MakeHuman graphical data; see LICENSE.ASSETS.md. Native implementation and derived garment/head geometry are project-authored. No MakeHuman application code is bundled.
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `8e761e6624b8f54536409135d1636da63b32486a90d4897f84e121d144f6fb4c`
- **Bytes:** 1749303

### asset-assets-humanoid-v89-candidates-100169ac1394-humanoid-json

- **Label:** humanoid
- **File:** `assets/humanoid-v89/candidates/100169ac1394/humanoid.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v89/build_humanoid.py and dist/native3d
- **Source location / method:** Inactive earlier generated model, retained byte-for-byte
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored derived geometry/rig integration
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 MakeHuman graphical data; see LICENSE.ASSETS.md. Native implementation and derived garment/head geometry are project-authored. No MakeHuman application code is bundled.
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `100169ac13945881cc16eee7943d8922f8aa719da3cf8354f369a914632a1515`
- **Bytes:** 10591470

### asset-assets-humanoid-v89-candidates-127b55537268-humanoid-json

- **Label:** humanoid
- **File:** `assets/humanoid-v89/candidates/127b55537268/humanoid.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v89/build_humanoid.py and dist/native3d
- **Source location / method:** Inactive earlier generated model, retained byte-for-byte
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored derived geometry/rig integration
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 MakeHuman graphical data; see LICENSE.ASSETS.md. Native implementation and derived garment/head geometry are project-authored. No MakeHuman application code is bundled.
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `127b555372681673ef7558a6f7848e4853b204e689251aea12fba0f6d08d1779`
- **Bytes:** 10591970

### asset-assets-humanoid-v89-caucasian-male-young-target

- **Label:** caucasian male young
- **File:** `assets/humanoid-v89/caucasian-male-young.target`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://raw.githubusercontent.com/makehumancommunity/makehuman/master/makehuman/data/targets/macrodetails/caucasian-male-young.target
- **Source location / method:** Anatomical asset/rig/weights, adult male target, Catmull-Clark render surface, native fitted garments and authored faceless head. Not a recovered source character.
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored derived geometry/rig integration
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 MakeHuman graphical data; see LICENSE.ASSETS.md. Native implementation and derived garment/head geometry are project-authored. No MakeHuman application code is bundled.
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `70e228ba7164737dae664454394536fc5935fa48d333c1a97d77e2dc6eacc5f5`
- **Bytes:** 396479

### asset-assets-humanoid-v89-default-mhskel

- **Label:** default
- **File:** `assets/humanoid-v89/default.mhskel`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://raw.githubusercontent.com/makehumancommunity/makehuman/master/makehuman/data/rigs/default.mhskel
- **Source location / method:** Anatomical asset/rig/weights, adult male target, Catmull-Clark render surface, native fitted garments and authored faceless head. Not a recovered source character.
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored derived geometry/rig integration
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 MakeHuman graphical data; see LICENSE.ASSETS.md. Native implementation and derived garment/head geometry are project-authored. No MakeHuman application code is bundled.
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `99f179bce0aa850b45d4191a1d0d234c5851f881c057439470ded3bddf729a24`
- **Bytes:** 117790

### asset-assets-humanoid-v89-default-weights-mhw

- **Label:** default_weights
- **File:** `assets/humanoid-v89/default_weights.mhw`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://raw.githubusercontent.com/makehumancommunity/makehuman/master/makehuman/data/rigs/default_weights.mhw
- **Source location / method:** Anatomical asset/rig/weights, adult male target, Catmull-Clark render surface, native fitted garments and authored faceless head. Not a recovered source character.
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored derived geometry/rig integration
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 MakeHuman graphical data; see LICENSE.ASSETS.md. Native implementation and derived garment/head geometry are project-authored. No MakeHuman application code is bundled.
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `0f3641d651ae3d00ad6b4ccee43142edb109d3bd909d27d9e4139ef1beed8625`
- **Bytes:** 897521

### asset-assets-humanoid-v89-humanoid-json

- **Label:** humanoid
- **File:** `assets/humanoid-v89/humanoid.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v89/build_humanoid.py and dist/native3d
- **Source location / method:** Anatomical asset/rig/weights, adult male target, Catmull-Clark render surface, native fitted garments and authored faceless head. Not a recovered source character.
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored derived geometry/rig integration
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 MakeHuman graphical data; see LICENSE.ASSETS.md. Native implementation and derived garment/head geometry are project-authored. No MakeHuman application code is bundled.
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `0ed1eeafb1ed3b15c8c249a37fe704d205bab3c8d4baaedb6ee8e84dad2d2ad5`
- **Bytes:** 10591470

### asset-assets-humanoid-v89-vendor-originals-buffergeometryutils-js

- **Label:** BufferGeometryUtils
- **File:** `assets/humanoid-v89/vendor-originals/BufferGeometryUtils.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://raw.githubusercontent.com/mrdoob/three.js/r170/examples/jsm/utils/BufferGeometryUtils.js
- **Source location / method:** Anatomical asset/rig/weights, adult male target, Catmull-Clark render surface, native fitted garments and authored faceless head. Not a recovered source character.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** 2026-11-02
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `c25b7930e570e9ec56173cd3b866ec8d2e10016630db3937efb439daf1cedbf6`
- **Bytes:** 31768

### asset-assets-humanoid-v89-vendor-originals-gltfexporter-js

- **Label:** GLTFExporter
- **File:** `assets/humanoid-v89/vendor-originals/GLTFExporter.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://raw.githubusercontent.com/mrdoob/three.js/r170/examples/jsm/exporters/GLTFExporter.js
- **Source location / method:** Anatomical asset/rig/weights, adult male target, Catmull-Clark render surface, native fitted garments and authored faceless head. Not a recovered source character.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** 2026-11-02
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt
- **Modifications:** Original source bytes preserved. Derived canonical JSON normalizes to1.85m, subdivides surface and weights, separates garment regions, retains control topology. Earlier style/segmentation builds remain inactive.
- **SHA-256:** `76526d2be01c3fdf17c8efcf7c1c67dfd1ef30ede3196865eb69fa49196f80aa`
- **Bytes:** 81884

### asset-assets-humanoid-v91-garments-json

- **Label:** garments V92 continuous fitted garments
- **File:** `assets/humanoid-v91/garments.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** scripts/v92/build-garments.py; native engine; CC0 source weights retained in assets/humanoid-v89/default_weights.mhw
- **Source location / method:** 7mm meshing, PCHIP contours, Taubin smoothing,12weight diffusion iterations, projected cuffs, four normalized skin influences
- **Author / brand owner:** Project-authored surface and diagnostic; MakeHuman graphical asset contributors for CC0 weights
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-authored geometry/renders; CC0 anatomical graphical weights, see assets/humanoid-v89/LICENSE.ASSETS.md. No MakeHuman application code bundled.
- **Modifications:** End-user runtime consumes bundled geometry/Three.js only. Python numpy/scipy/scikit-image are build-only. Diagnostic images contain authored GPU render, not reference footage.
- **SHA-256:** `ee0284b3905a323b1106a49e51d03d079c494c8d0bfb802460b18a907c84f1be`
- **Bytes:** 6154117

### asset-assets-humanoid-v93-caucasian-female-young-target

- **Label:** caucasian-female-young V93 body foundation
- **File:** `assets/humanoid-v93/caucasian-female-young.target`
- **Usage label:** `cc0-derived`
- **Origin / exact source:** https://raw.githubusercontent.com/makehumancommunity/makehuman/master/makehuman/data/targets/macrodetails/caucasian-female-young.target
- **Source location / method:** Authentic female graphical target; active delta and inactive full build retained separately.
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored conversion
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 graphical assets; see assets/humanoid-v89/LICENSE.ASSETS.md. No MakeHuman application code bundled.
- **Modifications:** Subdivision following retained male topology; rest bone deltas; four-nearest garment delta transfer with 24 diffusion iterations. Original male asset retained unchanged.
- **SHA-256:** `118379f6e8ba9266247fdb8788a20e1df40a239f97ced0b9905bcbcc74f6e820`
- **Bytes:** 420559

### asset-assets-humanoid-v93-female-generated-json

- **Label:** female-generated V93 body foundation
- **File:** `assets/humanoid-v93/female-generated.json`
- **Usage label:** `cc0-derived`
- **Origin / exact source:** https://raw.githubusercontent.com/makehumancommunity/makehuman/master/makehuman/data/targets/macrodetails/caucasian-female-young.target
- **Source location / method:** Authentic female graphical target; active delta and inactive full build retained separately.
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored conversion
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 graphical assets; see assets/humanoid-v89/LICENSE.ASSETS.md. No MakeHuman application code bundled.
- **Modifications:** Subdivision following retained male topology; rest bone deltas; four-nearest garment delta transfer with 24 diffusion iterations. Original male asset retained unchanged.
- **SHA-256:** `b0223992430597ec46b9b0b1ebe7f8f9193a80714e7584652c50488300fa8c45`
- **Bytes:** 10589159

### asset-assets-humanoid-v93-shape-targets-json

- **Label:** shape-targets V93 body foundation
- **File:** `assets/humanoid-v93/shape-targets.json`
- **Usage label:** `cc0-derived`
- **Origin / exact source:** https://raw.githubusercontent.com/makehumancommunity/makehuman/master/makehuman/data/targets/macrodetails/caucasian-female-young.target
- **Source location / method:** Authentic female graphical target; active delta and inactive full build retained separately.
- **Author / brand owner:** MakeHuman graphical asset contributors; project-authored conversion
- **Retrieved / created:** 2026-11-02
- **License / permission status:** CC0 graphical assets; see assets/humanoid-v89/LICENSE.ASSETS.md. No MakeHuman application code bundled.
- **Modifications:** Subdivision following retained male topology; rest bone deltas; four-nearest garment delta transfer with 24 diffusion iterations. Original male asset retained unchanged.
- **SHA-256:** `184cbb1874e29c526232405f274a80da00c7f259c6dae4fbbbc708055a9d2684`
- **Bytes:** 3213115

### asset-assets-lamp-png

- **Label:** Lamp
- **File:** `assets/lamp.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `eeee03dd74022bda537099ef5912f9775ab73d3929f28de0968a82addb9fffda`
- **Bytes:** 813731

### asset-assets-leather-boot-v72-png

- **Label:** leather boot v72
- **File:** `assets/leather-boot-v72.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; originating ChatGPT project conversation
- **Source location / method:** One 1930s brown leather football ankle boot, toe left/heel right, three-quarter side view, laces/welt/leather studs and natural creases, transparent, no logos; kicker reference for materials. See continuation-generation-record-v72.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Generated illustrative project asset; not historical evidence. Source reference restrictions are not independently cleared.
- **Modifications:** No file-pixel modifications; runtime alpha crop, placement, color and focus only.
- **SHA-256:** `836c42e29a7feee1392a5f20b821271744f3e42aaf96d1fd7d7b59992463b688`
- **Bytes:** 2436205

### asset-assets-library-clean-v72-png

- **Label:** library clean v72
- **File:** `assets/library-clean-v72.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; originating ChatGPT project conversation
- **Source location / method:** Empty period dark oak library, shelves, left window and parquet floor, one-point perspective. See continuation-generation-record-v72.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Generated illustrative project asset; not historical evidence. Source reference restrictions are not independently cleared.
- **Modifications:** No file-pixel modifications; runtime alpha crop, placement, color and focus only.
- **SHA-256:** `bc00d8040aace758e0cce8e2e0afd605ef024cac92725bfd42cda7a499aacb4d`
- **Bytes:** 2450685

### asset-assets-map-png

- **Label:** Opening map image
- **File:** `assets/map.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `edc4f7c0ecb5aa185e55d982063698518d7e0109c4b6ac8ec3033b81eb280b34`
- **Bytes:** 2648899

### asset-assets-medalists-v74-png

- **Label:** medalists · V74 illustrative reconstruction
- **File:** `assets/medalists-v74.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool; current user-authorized documentary reconstruction
- **Source location / method:** Use case: historical-scene. Asset type: transparent full-body athlete cutout atlas for an explicitly illustrative 1936 sports documentary reconstruction, not an archival photograph. Three separated full-length male medalists standing upright with BOTH ARMS RELAXED DOWN beside their bodies, natural small smiles. CENTER Jesse Owens, African American lean sprinter age23, short hair, plain dark tracksuit and dark athletic shoes, one small gold medal on ribbon. LEFT unidentified European young athletic man, short light hair, plain pale tracksuit; RIGHT unidentified European young athletic man, short dark hair, plain pale tracksuit. No salute, no raised or extended arms, no flags, no logos, no lettering, no podium; transparent background. All heads and feet fully visible with padding, three separate columns with generous transparent gutters. Photorealistic monochrome newspaper-style tonal detail, crisp natural silhouettes, soft frontal light. Landscape atlas.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project asset; no claim of archival authenticity or independently cleared public-figure likeness rights
- **Modifications:** Original PNG retained byte-for-byte. Runtime cropped atlas parts and editable lighting/compositing.
- **SHA-256:** `baa4213f82def57cfa19ff52d70bb93d118ef5f901a6480c75ec8adbc4c6ce3a`
- **Bytes:** 1802304

### asset-assets-models-bicycle-v58-json

- **Label:** bicycle editable model JSON
- **File:** `assets/models/bicycle-v58.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored bicycle geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `b0c893125e4fce467a72cffd330d42e6c39694c679f22747fe499c74cb338632`
- **Bytes:** 31487

### asset-assets-models-bicycle-v58-obj

- **Label:** bicycle editable model OBJ
- **File:** `assets/models/bicycle-v58.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored bicycle geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `316a00c4f0fe7192314cb901a21756d3b9228dfbfeaef4fa188994ec4fc9a378`
- **Bytes:** 474704

### asset-assets-models-bicycle-v59-json

- **Label:** bicycle editable model JSON
- **File:** `assets/models/bicycle-v59.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `27590abc7236adced50dd78618f4d2fd0e493228b81d722d8459d9e6733a1be9`
- **Bytes:** 50500

### asset-assets-models-bicycle-v59-obj

- **Label:** bicycle editable model OBJ
- **File:** `assets/models/bicycle-v59.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `761dda8129400db3eb27eb42e1aff3e5f37ab4be222860bb7b7529a942ad8d91`
- **Bytes:** 800349

### asset-assets-models-bicycle-v60-json

- **Label:** bicycle editable model JSON
- **File:** `assets/models/bicycle-v60.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `27590abc7236adced50dd78618f4d2fd0e493228b81d722d8459d9e6733a1be9`
- **Bytes:** 50500

### asset-assets-models-bicycle-v60-obj

- **Label:** bicycle editable model OBJ
- **File:** `assets/models/bicycle-v60.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `761dda8129400db3eb27eb42e1aff3e5f37ab4be222860bb7b7529a942ad8d91`
- **Bytes:** 800349

### asset-assets-models-biped-v58-json

- **Label:** biped editable model JSON
- **File:** `assets/models/biped-v58.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored biped geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `86f2e092b2b0c6506d31c29869e0918e1294290bfd8debb06f36df8eabca15ef`
- **Bytes:** 8639

### asset-assets-models-biped-v58-obj

- **Label:** biped editable model OBJ
- **File:** `assets/models/biped-v58.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored biped geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `3457c1d88280cbe08e7eb60c16ae007c23bdd46e1b561899cf4d8a92f10b9ef6`
- **Bytes:** 27159

### asset-assets-models-biped-v59-json

- **Label:** biped editable model JSON
- **File:** `assets/models/biped-v59.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `86f2e092b2b0c6506d31c29869e0918e1294290bfd8debb06f36df8eabca15ef`
- **Bytes:** 8639

### asset-assets-models-biped-v59-obj

- **Label:** biped editable model OBJ
- **File:** `assets/models/biped-v59.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `3457c1d88280cbe08e7eb60c16ae007c23bdd46e1b561899cf4d8a92f10b9ef6`
- **Bytes:** 27159

### asset-assets-models-biped-v60-json

- **Label:** biped editable model JSON
- **File:** `assets/models/biped-v60.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `86f2e092b2b0c6506d31c29869e0918e1294290bfd8debb06f36df8eabca15ef`
- **Bytes:** 8639

### asset-assets-models-biped-v60-obj

- **Label:** biped editable model OBJ
- **File:** `assets/models/biped-v60.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `3457c1d88280cbe08e7eb60c16ae007c23bdd46e1b561899cf4d8a92f10b9ef6`
- **Bytes:** 27159

### asset-assets-models-box-v58-json

- **Label:** box editable model JSON
- **File:** `assets/models/box-v58.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored box geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `a136a50822ab64aee695ab748002144844c15c3541285d68523d7f0cc489daa8`
- **Bytes:** 662

### asset-assets-models-box-v58-obj

- **Label:** box editable model OBJ
- **File:** `assets/models/box-v58.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored box geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `f59d856c65ac965611fb1fa49c755e811e390618a126dfda2575f3383f8874fa`
- **Bytes:** 548

### asset-assets-models-box-v59-json

- **Label:** box editable model JSON
- **File:** `assets/models/box-v59.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `a136a50822ab64aee695ab748002144844c15c3541285d68523d7f0cc489daa8`
- **Bytes:** 662

### asset-assets-models-box-v59-obj

- **Label:** box editable model OBJ
- **File:** `assets/models/box-v59.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `f59d856c65ac965611fb1fa49c755e811e390618a126dfda2575f3383f8874fa`
- **Bytes:** 548

### asset-assets-models-box-v60-json

- **Label:** box editable model JSON
- **File:** `assets/models/box-v60.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `a136a50822ab64aee695ab748002144844c15c3541285d68523d7f0cc489daa8`
- **Bytes:** 662

### asset-assets-models-box-v60-obj

- **Label:** box editable model OBJ
- **File:** `assets/models/box-v60.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `f59d856c65ac965611fb1fa49c755e811e390618a126dfda2575f3383f8874fa`
- **Bytes:** 548

### asset-assets-models-chapter-bike-v65-json

- **Label:** chapter bike v65
- **File:** `assets/models/chapter-bike-v65.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project model-recipes.js bicycleModel
- **Source location / method:** Independent chapter source: chapter bike v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** Project-authored
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `4988a8446cf3b92b6b3fc36de28d18200036904f6330d5bf94fcc88cbf9a3a2f`
- **Bytes:** 50499

### asset-assets-models-helmet-v58-json

- **Label:** helmet editable model JSON
- **File:** `assets/models/helmet-v58.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored helmet geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `f6384d1a6200a8ca7af8d37eceae405bc04836642f128fffb94aa57adf336bbd`
- **Bytes:** 1380

### asset-assets-models-helmet-v58-obj

- **Label:** helmet editable model OBJ
- **File:** `assets/models/helmet-v58.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored helmet geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `e18e8427b45896de0266d5610e2f43bedfc755cbe20df39b687071913730e277`
- **Bytes:** 37084

### asset-assets-models-helmet-v59-json

- **Label:** helmet editable model JSON
- **File:** `assets/models/helmet-v59.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `f6384d1a6200a8ca7af8d37eceae405bc04836642f128fffb94aa57adf336bbd`
- **Bytes:** 1380

### asset-assets-models-helmet-v59-obj

- **Label:** helmet editable model OBJ
- **File:** `assets/models/helmet-v59.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `e18e8427b45896de0266d5610e2f43bedfc755cbe20df39b687071913730e277`
- **Bytes:** 37084

### asset-assets-models-helmet-v60-json

- **Label:** helmet editable model JSON
- **File:** `assets/models/helmet-v60.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `f6384d1a6200a8ca7af8d37eceae405bc04836642f128fffb94aa57adf336bbd`
- **Bytes:** 1380

### asset-assets-models-helmet-v60-obj

- **Label:** helmet editable model OBJ
- **File:** `assets/models/helmet-v60.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `e18e8427b45896de0266d5610e2f43bedfc755cbe20df39b687071913730e277`
- **Bytes:** 37084

### asset-assets-models-mannequin-scene-v88-blue-bin

- **Label:** mannequin scene v88 blue
- **File:** `assets/models/mannequin-scene-v88-blue.bin`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Project-authored smooth implicit anatomical mesh, conforming marching tetrahedra, 51-joint four-weight skin. Native shader and pose source in dist/v88; no external model or recovered original asset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `448924eb62724ee17ef1b5fce124408811e61fcc9a94d5d9c581c5608a0129a3`
- **Bytes:** 1424552

### asset-assets-models-mannequin-scene-v88-blue-gltf

- **Label:** mannequin scene v88 blue
- **File:** `assets/models/mannequin-scene-v88-blue.gltf`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Project-authored smooth implicit anatomical mesh, conforming marching tetrahedra, 51-joint four-weight skin. Native shader and pose source in dist/v88; no external model or recovered original asset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `f71e6aee9c8427dfdc4f2adfb501e03cb34f9bf1f6023ba9d23fadb8498ececf`
- **Bytes:** 80344

### asset-assets-models-mannequin-scene-v88-crimson-bin

- **Label:** mannequin scene v88 crimson
- **File:** `assets/models/mannequin-scene-v88-crimson.bin`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Project-authored smooth implicit anatomical mesh, conforming marching tetrahedra, 51-joint four-weight skin. Native shader and pose source in dist/v88; no external model or recovered original asset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `ebf638521e0dc7211f585d95942784e96fe13bbaaaf3f666e5c96d73e1a89aa1`
- **Bytes:** 1681240

### asset-assets-models-mannequin-scene-v88-crimson-gltf

- **Label:** mannequin scene v88 crimson
- **File:** `assets/models/mannequin-scene-v88-crimson.gltf`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Project-authored smooth implicit anatomical mesh, conforming marching tetrahedra, 51-joint four-weight skin. Native shader and pose source in dist/v88; no external model or recovered original asset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `00d15e25483facd106d3e6a2f46602d5dab15f29baf4b506e02863b8281ed192`
- **Bytes:** 95620

### asset-assets-models-mannequin-v88-json

- **Label:** mannequin v88
- **File:** `assets/models/mannequin-v88.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source scripts/v88 and dist/v88
- **Source location / method:** Project-authored smooth implicit anatomical mesh, conforming marching tetrahedra, 51-joint four-weight skin. Native shader and pose source in dist/v88; no external model or recovered original asset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Project-scoped authored geometry/code; no third-party model license applies. Reference footage remains user-reference.
- **Modifications:** Active LOD and anatomical weight refinement; high-resolution and distance-skin alternatives retained inactive.
- **SHA-256:** `8b6af62b7701436e48005cd906c147b35366c20004aedc30f3996e9f639321dd`
- **Bytes:** 2768542

### asset-assets-models-ruin-v58-json

- **Label:** ruin editable model JSON
- **File:** `assets/models/ruin-v58.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored ruin geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `4b122153bf0f92729b69311840032436e11caadc80a6e24e6c43129be817766d`
- **Bytes:** 2862

### asset-assets-models-ruin-v58-obj

- **Label:** ruin editable model OBJ
- **File:** `assets/models/ruin-v58.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored ruin geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `6a9bff127bfee0770b68a3bf8f01635f5a2402d7736c93e6699b4748f58216f9`
- **Bytes:** 3000

### asset-assets-models-ruin-v59-json

- **Label:** ruin editable model JSON
- **File:** `assets/models/ruin-v59.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `4b122153bf0f92729b69311840032436e11caadc80a6e24e6c43129be817766d`
- **Bytes:** 2862

### asset-assets-models-ruin-v59-obj

- **Label:** ruin editable model OBJ
- **File:** `assets/models/ruin-v59.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `6a9bff127bfee0770b68a3bf8f01635f5a2402d7736c93e6699b4748f58216f9`
- **Bytes:** 3000

### asset-assets-models-ruin-v60-json

- **Label:** ruin editable model JSON
- **File:** `assets/models/ruin-v60.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `4b122153bf0f92729b69311840032436e11caadc80a6e24e6c43129be817766d`
- **Bytes:** 2862

### asset-assets-models-ruin-v60-obj

- **Label:** ruin editable model OBJ
- **File:** `assets/models/ruin-v60.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `6a9bff127bfee0770b68a3bf8f01635f5a2402d7736c93e6699b4748f58216f9`
- **Bytes:** 3000

### asset-assets-models-salvage-v58-json

- **Label:** salvage editable model JSON
- **File:** `assets/models/salvage-v58.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored salvage geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `c29fdbfc424c731201c8491896cf8b119bd8d42475f3aeceaacd67621c67caad`
- **Bytes:** 15243

### asset-assets-models-salvage-v58-obj

- **Label:** salvage editable model OBJ
- **File:** `assets/models/salvage-v58.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored salvage geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `fa4a5b20c283385e5e44fb0c2f6eea1fff31783ac3425fb08912affb81e0bdfd`
- **Bytes:** 753617

### asset-assets-models-salvage-v59-json

- **Label:** salvage editable model JSON
- **File:** `assets/models/salvage-v59.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `0bf7dd91d4d1036e503f14a900db0af1d1d583bb7335f87edaceb282e58e0806`
- **Bytes:** 41101

### asset-assets-models-salvage-v59-obj

- **Label:** salvage editable model OBJ
- **File:** `assets/models/salvage-v59.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `7f96813474c08701e9738d6508a563506bad5f246e97c6b2b40bc5c6d07e3a74`
- **Bytes:** 1024821

### asset-assets-models-salvage-v60-json

- **Label:** salvage editable model JSON
- **File:** `assets/models/salvage-v60.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `3cff4e054989662da14db731f552f4399075c2f14488c0b77f9b65fb1d78ba0e`
- **Bytes:** 60697

### asset-assets-models-salvage-v60-obj

- **Label:** salvage editable model OBJ
- **File:** `assets/models/salvage-v60.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `279bfb8160adfd40aea240618bd6c51894a3ba84b1f358add9dbd62c1bd379db`
- **Bytes:** 1427421

### asset-assets-models-street-v58-json

- **Label:** street editable model JSON
- **File:** `assets/models/street-v58.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored street geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `d420ae951b28c41f78c134965bdd8cc64cc769ddf0ffeb98f53a3c92c725de43`
- **Bytes:** 16424

### asset-assets-models-street-v58-obj

- **Label:** street editable model OBJ
- **File:** `assets/models/street-v58.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: dist/model-recipes.js and dist/sequence-expansion.js
- **Source location / method:** Project-authored street geometry. JSON retains hierarchy, textures and animation; OBJ is a transformed static geometry snapshot without materials.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry, no external model source. Bundled texture rights remain separately recorded.
- **Modifications:** Exported scene JSON and static triangulated OBJ snapshot
- **SHA-256:** `28655c0d9988db9b9c385a834265be061aabf4e71ebc1cb318c162c98f0da1a8`
- **Bytes:** 708792

### asset-assets-models-street-v59-json

- **Label:** street editable model JSON
- **File:** `assets/models/street-v59.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `5043fb4d6f4a6894594f5b1e0c40b51524a38158f6021460dd556f2c63e26f5b`
- **Bytes:** 31560

### asset-assets-models-street-v59-obj

- **Label:** street editable model OBJ
- **File:** `assets/models/street-v59.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `f030bae732eb36ccf0d9ddff97c245f3ed6bcaac15df5ad38cccd80620758dee`
- **Bytes:** 656847

### asset-assets-models-street-v60-json

- **Label:** street editable model JSON
- **File:** `assets/models/street-v60.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `5043fb4d6f4a6894594f5b1e0c40b51524a38158f6021460dd556f2c63e26f5b`
- **Bytes:** 31560

### asset-assets-models-street-v60-obj

- **Label:** street editable model OBJ
- **File:** `assets/models/street-v60.obj`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js / sequence-expansion.js
- **Source location / method:** Editable procedural model
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authored geometry; texture provenance recorded separately.
- **Modifications:** Scene JSON and static triangulated OBJ export
- **SHA-256:** `f030bae732eb36ccf0d9ddff97c245f3ed6bcaac15df5ad38cccd80620758dee`
- **Bytes:** 656847

### asset-assets-mother-room-cloth-v54-png

- **Label:** Mother room cloth
- **File:** `assets/mother-room-cloth-v54.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** Exact input, prompt and output SHA-256 are recorded in assets/mother-room-generation-v54.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized template edit; wider reference rights not independently established.
- **Modifications:** Background removal or clean-plate reconstruction from the selected source; runtime placement/depth separate.
- **SHA-256:** `641437288b815b4154b47d6dcd01b931b1df3357eab8aa117fc2dc172311ad49`
- **Bytes:** 1547710

### asset-assets-mother-room-generation-v54-json

- **Label:** Mother Room Generation V54
- **File:** `assets/mother-room-generation-v54.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `b924888c4cc9efa5ca8918b6fd7ad39c4ae773b9fad881450c103e9842e22383`
- **Bytes:** 4128

### asset-assets-mother-room-person-v54-png

- **Label:** Mother room person
- **File:** `assets/mother-room-person-v54.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** Exact input, prompt and output SHA-256 are recorded in assets/mother-room-generation-v54.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized template edit; wider reference rights not independently established.
- **Modifications:** Background removal or clean-plate reconstruction from the selected source; runtime placement/depth separate.
- **SHA-256:** `98e5f031907117f5a0ed696d39e9f7532f4e900b6f9f38576d6e4dee2dcdbfcb`
- **Bytes:** 1339101

### asset-assets-mother-room-room-v54-png

- **Label:** Mother room room
- **File:** `assets/mother-room-room-v54.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** Exact input, prompt and output SHA-256 are recorded in assets/mother-room-generation-v54.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized template edit; wider reference rights not independently established.
- **Modifications:** Background removal or clean-plate reconstruction from the selected source; runtime placement/depth separate.
- **SHA-256:** `d78ffdb9b685ad8e8ca66e2c2348303dc6598d98c2b6603879c6ac03f3a7d7b1`
- **Bytes:** 2269737

### asset-assets-mother-room-selected-reference-v54-png

- **Label:** mother room selected reference v54 · retained alternate
- **File:** `assets/mother-room-selected-reference-v54.png`
- **Usage label:** `user-reference`
- **Origin / exact source:** Exact user-selected image-edit-target-c0321d9b5971caed.png
- **Source location / method:** Exact input, prompt and output SHA-256 are recorded in assets/mother-room-generation-v54.json.
- **Author / brand owner:** User-supplied reference
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized template edit; wider reference rights not independently established.
- **Modifications:** Reference retained unchanged.
- **SHA-256:** `3275d41f851593d3310c04210cc95ab69c264e8730bc7430405b97bfd3570565`
- **Bytes:** 809294

### asset-assets-mother-room-vase-v54-png

- **Label:** Mother room vase
- **File:** `assets/mother-room-vase-v54.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** Exact input, prompt and output SHA-256 are recorded in assets/mother-room-generation-v54.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized template edit; wider reference rights not independently established.
- **Modifications:** Background removal or clean-plate reconstruction from the selected source; runtime placement/depth separate.
- **SHA-256:** `30b9d8a6e39a4d3d774f82a968c704fb25c4a078fe544ed9848f58e395109e68`
- **Bytes:** 2291494

### asset-assets-mystery-men-png

- **Label:** Mysterious men · rear-view alpha cutout
- **File:** `assets/mystery-men.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `467cf2b6b36d59e55a17d851b3605c05ef835b52ca4bd55cd4027591896b66b7`
- **Bytes:** 1185857

### asset-assets-mystery-sky-png

- **Label:** Noir cloud and mountain background
- **File:** `assets/mystery-sky.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `cf86b627f87a007efce7b328cedec20f8235d37b13322c2edb16a149b25ff790`
- **Bytes:** 2168046

### asset-assets-natural-mesh-walk-v60-json

- **Label:** Natural mesh walk · editable V60 preset
- **File:** `assets/natural-mesh-walk-v60.json`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source cutout-walk.js / mesh-walk.js
- **Source location / method:** Expanded articulated mesh walk with stance/swing, two-bone leg IK, heel/toe roll, arms, head and coat deformation.
- **Author / brand owner:** Project-authored rig definition
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized creation; no historical likeness or archival provenance asserted.
- **Modifications:** Original bytes retained; meshes, alpha cleanup and crops operate at runtime.
- **SHA-256:** `5fe5c10d79f64c4c9c7bc52cdbf7f5b2b31ce3a8a6f9b68c6f04ec1e9a36dbec`
- **Bytes:** 2052

### asset-assets-nursery-cradle-v37-png

- **Label:** Nursery · cradle and window
- **File:** `assets/nursery-cradle-v37.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; exact generation prompt in assets/nursery-generation-briefs-v37.json
- **Source location / method:** Created 2026-10-28 from user-authorized video reference 08-original-01-36.00.jpg. Model version was not exposed. Use case: historical-scene. Asset type: cinematic 16:9 photographic background plate for editable motion documentary. New fictional late-1890s German timber interior guided by reference 1, with the dark timber, earthy palette and soft cold window light matching reference 2. Close-wide view of a fully swaddled sleeping newborn resting on an aged off-white linen mattress in a low wooden cot/bed, head at lower right and feet toward lower left. Baby is safe on its back, mouth relaxed, coherent natural anatomy. The bed fills the bottom third. A very large tall multi-pane timber window is centred, from x=30% to65% of the image, pale linen curtains at both sides and deep shadows on left; small dark ceramic jug on sill. Outside only softly defocused blue sky, white clouds, vague distant timber buildings, no people or silhouettes. Cool blue daylight, warm subtle skin and brown wood, subdued saturation, natural dim room, soft focus falloff and cinematic grain, photographic rather than painting. No mother, adult, lettering, labels, watermark or modern furnishings. Preserve open window area for a future camera push. Entire head and baby in frame.
- **Author / brand owner:** Project generation record; source/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated project illustration for the user-authorized template; reference rights beyond this task are not independently cleared. Not archival evidence.
- **Modifications:** Copied original generated PNG byte-for-byte; runtime applies canvas transforms, colour grading and blur. No visual pixel editing.
- **SHA-256:** `d924cd5884cc16bc1bd2eda24260d0c2d52f03a0864f8cb296d319b8aba0401f`
- **Bytes:** 2125174
- **Related provenance records:** `assets/nursery-generation-briefs-v37.json`

### asset-assets-nursery-generation-briefs-v37-json

- **Label:** Nursery generation prompts and reference provenance
- **File:** `assets/nursery-generation-briefs-v37.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Project-recorded exact generation prompts, reference identity, dates and modifications
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `3b7285771fd906c2c4471b4c483d1506912d9bd4a165435d566c5a3b17062486`
- **Bytes:** 4993
- **Related provenance records:** `assets/nursery-generation-briefs-v37.json`

### asset-assets-nursery-mother-v37-png

- **Label:** Nursery · mother and newborn room
- **File:** `assets/nursery-mother-v37.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; exact generation prompt in assets/nursery-generation-briefs-v37.json
- **Source location / method:** Created 2026-10-28 from user-authorized video reference 06-original-01-30.50.jpg. Model version was not exposed. Use case: historical-scene. Asset type: cinematic motion-template background plate, 16:9 wide, 1920x1080 or larger. Generate a new photorealistic period domestic interior inspired by the reference composition, not a screenshot reproduction. Late 1890s modest German timber room. A seated young adult mother in a simple long olive-brown dress, dark hair in a bun, sits just right of centre, leaning tenderly over a fully swaddled newborn in her arms. Both faces and hands anatomically coherent, full dress and stool visible. Large old multi-pane window occupies upper right behind her, cold diffuse daylight and gentle edge highlights; deep brown timber shadows on left, pottery and small household vessels on window sill, aged linen and wood. Cinematic documentary still, soft peripheral lens falloff, subdued neutral earthy palette, warm skin, very dark natural room, no artificial amber glow, no text or date, no modern objects, no watermark. Match reference viewpoint at seated chest height and calm intimate mood. Keep heads and baby fully in frame. This is a fictional illustrative scene.
- **Author / brand owner:** Project generation record; source/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated project illustration for the user-authorized template; reference rights beyond this task are not independently cleared. Not archival evidence.
- **Modifications:** Copied original generated PNG byte-for-byte; runtime applies canvas transforms, colour grading and blur. No visual pixel editing.
- **SHA-256:** `c9b6d24cea7def703e235c3cbb001fb04732e817e60ea5908beb6257aaee3d6e`
- **Bytes:** 2019214
- **Related provenance records:** `assets/nursery-generation-briefs-v37.json`

### asset-assets-nursery-passer-v37-png

- **Label:** Nursery · foreground passer
- **File:** `assets/nursery-passer-v37.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; exact generation prompt in assets/nursery-generation-briefs-v37.json
- **Source location / method:** Created 2026-10-28 from user-authorized video reference 07-original-01-33.50.jpg. Model version was not exposed. Use case: historical-scene. Asset type: genuinely transparent PNG cutout for cinematic foreground occlusion. Generate ONE close-cropped adult working man's torso, from back of neck/upper shoulder to below waist, turned three-quarter away with right shoulder nearest viewer. Late 1890s European plain off-white wrinkled linen shirt with rolled sleeves and a dark brown almost black work apron with broad straps, no symbols. Head fully outside top of frame, legs outside bottom. His torso and near sleeve fill most of a vertical image, natural weighty cloth folds. Muted shadowy lighting, soft cool rim from a window on viewer's left, deep dark apron, no black backdrop: transparent alpha around the outer body silhouette. The shoulder curves organically, solid opaque cloth inside the body, no translucent torso, no floating disconnected parts. Photorealistic, soft peripheral focus but retain real cloth texture. Reference is composition/wardrobe guidance only; create a new fictional figure. No room, window, furniture, text, watermark, baby, visible face or hands.
- **Author / brand owner:** Project generation record; source/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated project illustration for the user-authorized template; reference rights beyond this task are not independently cleared. Not archival evidence.
- **Modifications:** Copied original generated PNG byte-for-byte; runtime applies canvas transforms, colour grading and blur. No visual pixel editing.
- **SHA-256:** `66e3b119c687f6642b881c9707c332382eaa75c32ccc40b8b82b69cc305aca84`
- **Bytes:** 2609645
- **Related provenance records:** `assets/nursery-generation-briefs-v37.json`

### asset-assets-older-brothers-poses-v65-png

- **Label:** older brothers poses v65
- **File:** `assets/older-brothers-poses-v65.png`
- **Usage label:** `ai-generated`
- **Origin / exact source:** OpenAI image generation; exact prompt and references in assets/chapter-generation-v65.json
- **Source location / method:** Independent chapter source: older brothers poses v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `d765f83de46fc1a0ac44e929fe52784c8efd0f09437e3b468bd9582d2c9f1b45`
- **Bytes:** 1966351

### asset-assets-olympic-archive-credits-v73-json

- **Label:** olympic archive credits v73.json
- **File:** `assets/olympic-archive-credits-v73.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Project production/provenance or original V72 source record
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `28698e36260ef5c2799a58b2880697eba7be21b51b16a130b78c9c8182bb45d4`
- **Bytes:** 12825

### asset-assets-olympic-entrance-v73-png

- **Label:** olympic entrance v73.png
- **File:** `assets/olympic-entrance-v73.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in olympic-generation-record-v73.json
- **Source location / method:** Use case: historical-scene. Asset type: empty photographic architectural plate for a 1936 Olympic meeting scene. Berlin Olympic stadium entrance inspired by its two tall plain rectangular stone towers, one on each side of center, low curved stadium facade between them, broad empty gray stone paved plaza leading towards the gate in one-point perspective. Front-on centered camera at human eye level, architecture in middle third and towers reaching upper third, plenty of foreground paving. Neutral gray sky for later replacement. No people, flags, emblems, rings, text or signage. High photographic detail, overcast soft daylight, subdued monochrome stone; wide 16:9. Illustrative period reconstruction, not an archival photograph.
- **Author / brand owner:** Project image generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Illustrative project asset; no historical-photo authenticity is asserted. Owens likeness reference has its own recorded public-domain jurisdiction conditions.
- **Modifications:** Original file unchanged; renderer alpha/component/skyline masks, placement and grade.
- **SHA-256:** `b75284786e325cf33748417f274866a037157fb28dfb6f2ee7d2631a1e47d02d`
- **Bytes:** 2278510

### asset-assets-olympic-generation-record-v73-json

- **Label:** olympic generation record v73.json
- **File:** `assets/olympic-generation-record-v73.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Project production/provenance or original V72 source record
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `f39b6b23b8544b84f143a1f9c1af978abc098d8e4c43b7a7ecc620a40a6f0d72`
- **Bytes:** 10627

### asset-assets-olympic-statue-v73-png

- **Label:** olympic statue v73.png
- **File:** `assets/olympic-statue-v73.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in olympic-generation-record-v73.json
- **Source location / method:** Use case: historical-scene. Asset type: isolated golden sculpture for a documentary motion composition. A monumental bronze-gold classical athletic victory sculpture group: three upward-reaching figures clustered together, central tall figure with one arm extending vertically to hold a circular laurel wreath overhead. Weathered polished gold/bronze with realistic relief, fine facial and muscular detail, dramatic warm light from upper left. Low viewing angle, entire sculpture and wreath visible, tall composition, no base pedestal. Genuine transparent background with clean edges and generous margin. No rings, text, logos, sky or background. An illustrative reconstruction, not an archival photograph.
- **Author / brand owner:** Project image generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Illustrative project asset; no historical-photo authenticity is asserted. Owens likeness reference has its own recorded public-domain jurisdiction conditions.
- **Modifications:** Original file unchanged; renderer alpha/component/skyline masks, placement and grade.
- **SHA-256:** `03199d5b35708db5cb89faaf4975e731972218c78561c0dc5199f0e9a686d049`
- **Bytes:** 2367789

### asset-assets-olympic-track-v73-png

- **Label:** olympic track v73.png
- **File:** `assets/olympic-track-v73.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in olympic-generation-record-v73.json
- **Source location / method:** Use case: historical-scene. Asset type: empty background plate for layered documentary animation. Photorealistic 1936 European athletics stadium, camera low near the inside curve of a brown cinder running track, curved thin white lane markings lead from lower left towards right distance, immense packed black-and-white spectator stands curving around the upper half, weathered concrete retaining wall. Sky neutral pale gray occupying upper 18 percent for later replacement. No athletes or foreground people. Wide 16:9 composition, realistic period architecture, photographic fine grain, natural daylight, no modern signage, no text, no logos. This is an illustrative period reconstruction.
- **Author / brand owner:** Project image generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Illustrative project asset; no historical-photo authenticity is asserted. Owens likeness reference has its own recorded public-domain jurisdiction conditions.
- **Modifications:** Original file unchanged; renderer alpha/component/skyline masks, placement and grade.
- **SHA-256:** `12bef98cae59c22e94385dac30ff1e81b706ed5ddb728d8dc7ad0ada40f6148e`
- **Bytes:** 3161057

### asset-assets-opportunity-boots-v86-png

- **Label:** V86illustrative boots original
- **File:** `assets/opportunity-boots-v86.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-02
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v86.json. Native crops recorded in docs/atlas-crops-v86.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `77f1f7e834246ba434d141255bb6145438ec14fd843fbdca4ef0462b85fa0d53`
- **Bytes:** 1521232

### asset-assets-opportunity-clouds-v86-png

- **Label:** V86illustrative clouds original
- **File:** `assets/opportunity-clouds-v86.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-02
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v86.json. Native crops recorded in docs/atlas-crops-v86.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `500f5c1fbe851e1c5e065999c8ab826f0333f3901d14117a6957ac5021548a6f`
- **Bytes:** 2535002

### asset-assets-opportunity-coach-portrait-v86-png

- **Label:** V86illustrative coach-portrait original
- **File:** `assets/opportunity-coach-portrait-v86.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-02
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v86.json. Native crops recorded in docs/atlas-crops-v86.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `4a907ac3493bed36c1fb07a754b95ab8f9c6c4268cdd9584024c8793d6ace1d5`
- **Bytes:** 2425846

### asset-assets-opportunity-founders-v86-png

- **Label:** V86illustrative founders original
- **File:** `assets/opportunity-founders-v86.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-02
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v86.json. Native crops recorded in docs/atlas-crops-v86.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `406c9f1c8c0a9862d69aa93ef1c5165c5a189432fa202422d9464f2a7132d80b`
- **Bytes:** 2310135

### asset-assets-opportunity-inspector-v86-png

- **Label:** V86illustrative inspector original
- **File:** `assets/opportunity-inspector-v86.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-02
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v86.json. Native crops recorded in docs/atlas-crops-v86.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `80061cfbc9f12a6bd885f65f76e9c853a93d9101d586b7db53ad14190f352c15`
- **Bytes:** 2168483

### asset-assets-opportunity-trophy-ball-v86-png

- **Label:** V86illustrative trophy-ball original
- **File:** `assets/opportunity-trophy-ball-v86.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-02
- **Source location / method:** Exact successful prompts, retry history and source paths in docs/generation-record-v86.json. Native crops recorded in docs/atlas-crops-v86.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-02
- **License / permission status:** Generated fictional project illustration; not archival documentation
- **Modifications:** Original bytes preserved; runtime original-resolution crops, alpha composition and transforms only
- **SHA-256:** `b1c8b49b278aba4793e9172d23b69dfedae180953c456a93ff477c4afaa5c2c6`
- **Bytes:** 2180173

### asset-assets-outdoor-png

- **Label:** Outdoor
- **File:** `assets/outdoor.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `9dd4096d04d1a853a3ce78ed27986d2600f9be85e577b0375b6446f3702e7227`
- **Bytes:** 3685012

### asset-assets-owens-poses-v73-png

- **Label:** owens poses v73.png
- **File:** `assets/owens-poses-v73.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in olympic-generation-record-v73.json
- **Source location / method:** Use case: historical-scene. Asset type: three-column transparent pose atlas, illustrative reconstruction of Jesse Owens for a documentary, not an archival photograph. Reference image is Jesse Owens likeness reference: preserve his narrow face, cropped hair, ears, eyes and lean powerful athletic build. Three separate poses with generous empty gutters and no overlap. LEFT column: full body in a fixed forward-leaning sprint pose, moving left, bent arms, one knee forward, other leg extended, white 1930s track singlet and shorts, dark leather spikes; all limbs/shoes visible. CENTER column: front-facing waist-up portrait, calm determined expression, deep red plain track singlet, arms relaxed. RIGHT column: waist-up side/three-quarter profile facing left, same red singlet, right hand open raised above shoulder in friendly greeting, left hand near chest. Photographic skin/fabric detail, soft left lighting, natural color, no text, logos, symbols, medals, track, floor or background. True transparent background for all three subjects. Wide 1536x1024 composition.
- **Author / brand owner:** Project image generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Illustrative project asset; no historical-photo authenticity is asserted. Owens likeness reference has its own recorded public-domain jurisdiction conditions.
- **Modifications:** Original file unchanged; renderer alpha/component/skyline masks, placement and grade.
- **SHA-256:** `fff7f7207a3d673f1ad4713f5a4277107592e00cea24e47a13e9730e2e26c95f`
- **Bytes:** 2255160

### asset-assets-owens-product-pose-v74-png

- **Label:** owens product pose · V74 illustrative reconstruction
- **File:** `assets/owens-product-pose-v74.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool; current user-authorized documentary reconstruction
- **Source location / method:** Use case: historical-scene. Asset type: transparent photographic cutout for a documentary reconstruction, explicitly a newly generated illustrative reconstruction not an archival photograph. Subject: Jesse Owens circa 1936, smiling naturally, athletic lean African-American man age 23 with close short hair, wearing plain white 1930s athletics singlet. Waist-up frontal view, both bent forearms extended forward toward the viewer and hands open as a product presentation grip at lower chest height: two hands spaced about 32 cm apart, palms supporting an INVISIBLE horizontal running shoe, fingers gently curved upward. Leave empty transparent space between the hands at lower chest so a separately animated shoe can be composited there. No shoe, no props, no text, no medals, no logos, no extra fingers, no gesture of salute. Complete head, shoulders, arms and hands with padding. Photorealistic monochrome warm-neutral skin photography, soft frontal studio light, crisp matte edges, actual transparent background. Landscape composition single person fills frame.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project asset; no claim of archival authenticity or independently cleared public-figure likeness rights
- **Modifications:** Original PNG retained byte-for-byte. Runtime cropped atlas parts and editable lighting/compositing.
- **SHA-256:** `01bf3469273fd375dcc9b598f551a4a10e7dd6d19aa7e13db513e3a41f760f55`
- **Bytes:** 1203189

### asset-assets-owens-reference-v73-jpg

- **Label:** owens reference v73.jpg
- **File:** `assets/owens-reference-v73.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://upload.wikimedia.org/wikipedia/commons/1/19/Jesse_Owens_1936.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original
- **Source location / method:** https://commons.wikimedia.org/wiki/File:Jesse_Owens_1936.jpg
- **Author / brand owner:** Acme News Photos
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Public domain ; see full jurisdiction conditions in attached original metadata
- **Modifications:** Downloaded bytes unchanged. Berlin: runtime framing/grade. Political image: visible rectangular photograph with authored glows/blur. Owens: reference for labelled illustrative generated poses.
- **SHA-256:** `7d7415036282f1272ba8ff07fce6e51636602badd55b3f32f4e4cbc3159c0938`
- **Bytes:** 33032

### asset-assets-pair-v2-png

- **Label:** Background portrait pair · alpha cutout
- **File:** `assets/pair-v2.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `15fc2c490b529a2c8b6b1f118f67cdb9cfe08156d708f3d75d8cf1ed9a92caf4`
- **Bytes:** 1831563

### asset-assets-people-png

- **Label:** People
- **File:** `assets/people.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `7820eaff0d9717b0ad1fa5da937c47ec3a9f794fafe7fbd9a9cc8ed11220b746`
- **Bytes:** 1977571

### asset-assets-period-factory-v65-png

- **Label:** period factory v65
- **File:** `assets/period-factory-v65.png`
- **Usage label:** `ai-generated`
- **Origin / exact source:** OpenAI image generation; exact prompt and references in assets/chapter-generation-v65.json
- **Source location / method:** Independent chapter source: period factory v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `465bdfddbc8df2f0c4c6dd26fe82911bdc9357ef0276ddd144a101ff9fb32ad1`
- **Bytes:** 2411772

### asset-assets-period-television-v73-png

- **Label:** period television v73.png
- **File:** `assets/period-television-v73.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in olympic-generation-record-v73.json
- **Source location / method:** Use case: historical-scene. Asset type: clean isolated period television cabinet for separately animated screen content. A late-1930s experimental television, wide rectangular dark walnut wooden cabinet, rounded rectangular convex CRT glass on left taking 72 percent of cabinet width, two small ivory tuning knobs and cloth speaker on right, seen exactly straight-on at eye level. Photoreal aged wood, beveled metal screen rim, subtle glass highlights, softly lit from upper left. Screen is uniformly dark green-black with no picture, no writing. Complete cabinet with margin, no table, no room, no people, no antenna. Genuine transparent background outside cabinet. Wide 3:2 image; product centered. No text, logo or image burned into screen.
- **Author / brand owner:** Project image generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Illustrative project asset; no historical-photo authenticity is asserted. Owens likeness reference has its own recorded public-domain jurisdiction conditions.
- **Modifications:** Original file unchanged; renderer alpha/component/skyline masks, placement and grade.
- **SHA-256:** `eb7dad999f91326a5d6a3d87cc10657262a318ad6f602eb16658d44704dc5228`
- **Bytes:** 2488134

### asset-assets-political-archive-credits-v72-json

- **Label:** political archive credits v72
- **File:** `assets/political-archive-credits-v72.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Project records and cited exact image metadata
- **Source location / method:** Preserved production record, not an active scene image
- **Author / brand owner:** Project records
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Project-scoped documentation; linked image licenses remain applicable
- **Modifications:** New production record or byte-exact V71 source copy
- **SHA-256:** `67882cfaf6fc46a29256d6804b14c2ccce289d318890c222ba5fec56c9369d74`
- **Bytes:** 33646

### asset-assets-political-frontal-v73-jpg

- **Label:** political frontal v73.jpg
- **File:** `assets/political-frontal-v73.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://upload.wikimedia.org/wikipedia/commons/d/d0/Adolf_Hitler_1933_Portrait.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original
- **Source location / method:** https://commons.wikimedia.org/wiki/File:Adolf_Hitler_1933_Portrait.jpeg
- **Author / brand owner:** Unknown authorUnknown author
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Public domain ; see full jurisdiction conditions in attached original metadata
- **Modifications:** Downloaded bytes unchanged. Berlin: runtime framing/grade. Political image: visible rectangular photograph with authored glows/blur. Owens: reference for labelled illustrative generated poses.
- **SHA-256:** `4f15f2d1964f51dfbf02c193ace3198990f3e8daf61f6fe87c7d0baffa11c1b0`
- **Bytes:** 1051554

### asset-assets-political-parade-v72-jpg

- **Label:** political parade v72
- **File:** `assets/political-parade-v72.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://upload.wikimedia.org/wikipedia/commons/c/c3/Potsdam_premi%C3%A8re_journ%C3%A9e_des_jeunesses_nationales-socialistes_%2821_mars_1933%29_-_d%C3%A9fil%C3%A9_devant_Hitler_au_stade_-_btv1b90365066.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original
- **Source location / method:** https://commons.wikimedia.org/wiki/File:Potsdam_premi%C3%A8re_journ%C3%A9e_des_jeunesses_nationales-socialistes_(21_mars_1933)_-_d%C3%A9fil%C3%A9_devant_Hitler_au_stade_-_btv1b90365066.jpg; full exact metadata retained in political-archive-credits-v72.json
- **Author / brand owner:** Robert Sennecke Internationaler Illustrations Verlag. Agence photographique (commanditaire)
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Public domain; 
- **Modifications:** Downloaded file unchanged. Runtime: crop, grayscale, red tint, blur, spherical mapping and composite. Share-alike terms apply to relevant CC BY-SA photograph derivatives.
- **SHA-256:** `1559bb5fac4999f0ca9dd113990bcc1d4136bad0a6519504a05b22621d696d1c`
- **Bytes:** 6900373

### asset-assets-political-portrait-close-v72-jpg

- **Label:** political portrait close v72
- **File:** `assets/political-portrait-close-v72.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Adolf_Hitler_cropped_restored.jpg/1920px-Adolf_Hitler_cropped_restored.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail
- **Source location / method:** https://commons.wikimedia.org/wiki/File:Adolf_Hitler_cropped_restored.jpg; full exact metadata retained in political-archive-credits-v72.json
- **Author / brand owner:** Unknown authorUnknown author
- **Retrieved / created:** 2026-10-31
- **License / permission status:** CC BY-SA 3.0 de; https://creativecommons.org/licenses/by-sa/3.0/de/deed.en
- **Modifications:** Downloaded file unchanged. Runtime: crop, grayscale, red tint, blur, spherical mapping and composite. Share-alike terms apply to relevant CC BY-SA photograph derivatives.
- **SHA-256:** `7a281ca9cd3c360cd8faa7ce7a69f97ac6eb75132744ae73e45deac99964e4b9`
- **Bytes:** 756082

### asset-assets-political-portrait-v72-jpg

- **Label:** political portrait v72
- **File:** `assets/political-portrait-v72.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://upload.wikimedia.org/wikipedia/commons/2/2b/Bundesarchiv_Bild_146-1990-048-29A%2C_Adolf_Hitler_retouched.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original
- **Source location / method:** https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_146-1990-048-29A,_Adolf_Hitler_retouched.jpg; full exact metadata retained in political-archive-credits-v72.json
- **Author / brand owner:** Heinrich Hoffmann
- **Retrieved / created:** 2026-10-31
- **License / permission status:** CC BY-SA 3.0 de; https://creativecommons.org/licenses/by-sa/3.0/de/deed.en
- **Modifications:** Downloaded file unchanged. Runtime: crop, grayscale, red tint, blur, spherical mapping and composite. Share-alike terms apply to relevant CC BY-SA photograph derivatives.
- **SHA-256:** `fde543e4d93903755c8e6a7a633989a29d66c5e697a00f3b8a52887226e2827f`
- **Bytes:** 191089

### asset-assets-political-rally-v72-jpg

- **Label:** political rally v72
- **File:** `assets/political-rally-v72.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://upload.wikimedia.org/wikipedia/commons/0/0b/Reichsparteitag_NSDAP_N%C3%BCrnberg_1935-09_Hitler_Rudolf_Hess_B._v._Schirach_Hitlerjugend_etc_Narodowe_Archiwum_Cyfrowe_3_1_0_17_12273_34003_Robert_Sennecke_Intern._Illustrations-Verlag_Berlin._Nazi_Party_rally_Marked_Public_domain.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original
- **Source location / method:** https://commons.wikimedia.org/wiki/File:Reichsparteitag_NSDAP_N%C3%BCrnberg_1935-09_Hitler_Rudolf_Hess_B._v._Schirach_Hitlerjugend_etc_Narodowe_Archiwum_Cyfrowe_3_1_0_17_12273_34003_Robert_Sennecke_Intern._Illustrations-Verlag_Berlin._Nazi_Party_rally_Marked_Public_domain.jpg; full exact metadata retained in political-archive-credits-v72.json
- **Author / brand owner:** Robert Sennecke
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Public domain; 
- **Modifications:** Downloaded file unchanged. Runtime: crop, grayscale, red tint, blur, spherical mapping and composite. Share-alike terms apply to relevant CC BY-SA photograph derivatives.
- **SHA-256:** `8e5389b56e974fc0046e665df67963d2d307d7d6aac64e2ecfe661f6aad81cfe`
- **Bytes:** 1484876

### asset-assets-political-youth-v72-jpg

- **Label:** political youth v72
- **File:** `assets/political-youth-v72.jpg`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://upload.wikimedia.org/wikipedia/commons/d/d3/3_1_0_17_12337_34303_Hitlerjugend_HJ_Hitler_Youth_celebration_1933-06-11_drummers_on_parade_Regional_Deutsches_Jungvolk_Siegrune_banners_paramilitary_uniforms_Narodowe_Archiwum_Cyfrowe_Public_domain.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original
- **Source location / method:** https://commons.wikimedia.org/wiki/File:3_1_0_17_12337_34303_Hitlerjugend_HJ_Hitler_Youth_celebration_1933-06-11_drummers_on_parade_Regional_Deutsches_Jungvolk_Siegrune_banners_paramilitary_uniforms_Narodowe_Archiwum_Cyfrowe_Public_domain.jpg; full exact metadata retained in political-archive-credits-v72.json
- **Author / brand owner:** Uncredited photographer. Press photo distributed through Keystone View Company Berlin SW 68 Zimmerstrasse 29. Public domain according to the National Digital Archive in Poland.
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Public domain; 
- **Modifications:** Downloaded file unchanged. Runtime: crop, grayscale, red tint, blur, spherical mapping and composite. Share-alike terms apply to relevant CC BY-SA photograph derivatives.
- **SHA-256:** `8783fbb9601d6f6a550ba62e09212c73f64120c6eda4c0955e3f693907e87731`
- **Bytes:** 3385272

### asset-assets-portrait-room-cloth-v53-png

- **Label:** Perspective portrait · cloth
- **File:** `assets/portrait-room-cloth-v53.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-a248b222-eedc-4d8f-8943-74ff3731d804.png
- **Source location / method:** Exact prompt and selected-reference hash recorded in assets/portrait-room-generation-v53.json. Reconstructed hidden regions are illustrative.
- **Author / brand owner:** AI-generated for this project
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized reference-based project edit; no historical likeness or broad source rights assertion.
- **Modifications:** Generated PNG unchanged; positioning, depth, lighting and camera are runtime settings.
- **SHA-256:** `f5f6f333b2ad4abd3cf83365f3d6bd2f04515d963da55fe63c7c4561f8413de8`
- **Bytes:** 1232758

### asset-assets-portrait-room-generation-v53-json

- **Label:** Portrait Room Generation V53
- **File:** `assets/portrait-room-generation-v53.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `abd259273261abfafe7c868a40a12d04061cb3a562c9f73121511b5cf8e9ce96`
- **Bytes:** 6472

### asset-assets-portrait-room-person-v53-png

- **Label:** Perspective portrait · person
- **File:** `assets/portrait-room-person-v53.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-57cec750-494a-40f5-a92f-3b6930621305.png
- **Source location / method:** Exact prompt and selected-reference hash recorded in assets/portrait-room-generation-v53.json. Reconstructed hidden regions are illustrative.
- **Author / brand owner:** AI-generated for this project
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized reference-based project edit; no historical likeness or broad source rights assertion.
- **Modifications:** Generated PNG unchanged; positioning, depth, lighting and camera are runtime settings.
- **SHA-256:** `e4a23de5afe53b15d0f1b0e3814d4a05e003ae355eed1501b808bb9c6740d5d3`
- **Bytes:** 1511550

### asset-assets-portrait-room-room-v53-png

- **Label:** Perspective portrait · room
- **File:** `assets/portrait-room-room-v53.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-7c5bb553-9865-4f51-a54e-6e250be071b6.png
- **Source location / method:** Exact prompt and selected-reference hash recorded in assets/portrait-room-generation-v53.json. Reconstructed hidden regions are illustrative.
- **Author / brand owner:** AI-generated for this project
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized reference-based project edit; no historical likeness or broad source rights assertion.
- **Modifications:** Generated PNG unchanged; positioning, depth, lighting and camera are runtime settings.
- **SHA-256:** `a3978525054160b8d2bf61fa2848b6a224c070a8838ec1e4f8df3bda4d1aafa7`
- **Bytes:** 2071241

### asset-assets-portrait-room-selected-reference-v53-png

- **Label:** Selected annotated portrait reference · retained
- **File:** `assets/portrait-room-selected-reference-v53.png`
- **Usage label:** `user-reference`
- **Origin / exact source:** User-selected image-edit-target-b5ba8a9b2fcf7c23.png; corresponds to annotated attached portrait
- **Source location / method:** Used as the edit input for all four generated assets.
- **Author / brand owner:** User-supplied reference; original creator not verified
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized editing reference; underlying source rights not independently established.
- **Modifications:** None
- **SHA-256:** `bc1b70d0b5e3311e5e57940e4c57feb70f8dc426984873e6677115f12a801179`
- **Bytes:** 423521

### asset-assets-portrait-room-vase-v53-png

- **Label:** Perspective portrait · vase
- **File:** `assets/portrait-room-vase-v53.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-a1ed3953-084b-4d2e-947a-64221fa02ec5.png
- **Source location / method:** Exact prompt and selected-reference hash recorded in assets/portrait-room-generation-v53.json. Reconstructed hidden regions are illustrative.
- **Author / brand owner:** AI-generated for this project
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized reference-based project edit; no historical likeness or broad source rights assertion.
- **Modifications:** Generated PNG unchanged; positioning, depth, lighting and camera are runtime settings.
- **SHA-256:** `4f3ddcdffdac580e8c9a5c7d3777922b8079a4dc8fa32226f913494552565adc`
- **Bytes:** 1981179

### asset-assets-portrait-png

- **Label:** Opening archival-style portrait
- **File:** `assets/portrait.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `5dcdf8cbc6fba24b08f300265cd810470ba0f4dcb752417f4704377443c990d4`
- **Bytes:** 2059594

### asset-assets-precision-aerial-v39-png

- **Label:** Depth / laundry · aerial
- **File:** `assets/precision-aerial-v39.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; exact prompt and generation output in assets/precision-generation-briefs-v39.json
- **Source location / method:** Use case: stylized-concept. Asset type: widescreen 16:9 aerial town background plate for documentary motion graphics. Bird's-eye high oblique aerial view of a dense small Bavarian town, winding river diagonally through center, tightly packed rectangular roofs, narrow streets and squares, surrounding outskirts. Dark charcoal almost-black ground and buildings with rich brick red and burnt-orange roof edges, cinematic duotone red/black appearance, very detailed architectural texture, no text, no labels, no pins, no laundry, no people, no clouds, no watermark. Original illustrative map-like aerial town, not a geographically accurate map. Strong perspective depth and crisp central detail, subtly softer edges, fill the full frame with the town so it can recede in a slow camera pullback.
- **Author / brand owner:** Project generation record; source-video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated illustrations for the user-authorized template. Source/video/reference owner and wider reuse rights not independently verified. Fictional illustrative characters and architecture, not archival evidence or a geographically accurate map.
- **Modifications:** Copied final generated PNG byte-for-byte; runtime canvas transforms and compositing only.
- **SHA-256:** `0096c88cfaf558ccf9c12a3cab2892e59bd00beb5b3be44803990a45c9c12c3c`
- **Bytes:** 3407627
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-assets-precision-architecture-v39-png

- **Label:** Depth / laundry · architecture
- **File:** `assets/precision-architecture-v39.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; exact prompt and generation output in assets/precision-generation-briefs-v39.json
- **Source location / method:** Use case: historical-scene. Asset type: 16:9 foreground architecture plate with genuine transparent sky for a cinematic documentary parallax animation. Empty early-1900s Bavarian town square inspired by Herzogenaurach, tall half-timbered plaster buildings strongly framing both sides, narrow stone gate tower with pointed roof centered in distance, central cobbled street to the archway. Perspective from low street level, mild wide-angle lens. Buildings at left and right tall and close, dramatic receding street, gate tower visible centered. Opaque detailed stone and timber and pavement fill bottom and side edges; all SKY above and between roof silhouettes must be genuinely transparent alpha so a separately animated blue sky/cloud layer can be placed behind. NO sky color, NO clouds, NO people, NO signage, NO lettering, NO labels, NO watermark. Realistic cinematic photographic illustration, cool diffuse daylight, muted charcoal timber and cream plaster, peripheral softness, period textures. Entire lower pavement opaque. Original illustrative architecture, no archival claim. Wide 16:9.
- **Author / brand owner:** Project generation record; source-video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated illustrations for the user-authorized template. Source/video/reference owner and wider reuse rights not independently verified. Fictional illustrative characters and architecture, not archival evidence or a geographically accurate map.
- **Modifications:** Copied final generated PNG byte-for-byte; runtime canvas transforms and compositing only.
- **SHA-256:** `8a37d3b77769d7d10e90d958503ee5b27e213560339e302a28e798415cca6bfb`
- **Bytes:** 2912854
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-assets-precision-clouds-v39-png

- **Label:** Depth / laundry · clouds
- **File:** `assets/precision-clouds-v39.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; exact prompt and generation output in assets/precision-generation-briefs-v39.json
- **Source location / method:** Use case: historical-scene. Asset type: genuinely transparent cloud sprite for cinematic parallax. A broad bank of soft natural white cumulus clouds, irregular billowing tops with pale blue-gray shaded undersides, fine wispy dissolving outer edges and transparent gaps, horizontal cloud cluster in wide 16:9 composition. Realistic photographic cloud texture, cool daylight, gentle volume, no horizon, no land, no sky background, no text or watermark. All empty space genuinely transparent alpha. Cloud interiors dense white; edges naturally translucent. Usable both over a blue sky and as low foreground mist at screen edges.
- **Author / brand owner:** Project generation record; source-video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated illustrations for the user-authorized template. Source/video/reference owner and wider reuse rights not independently verified. Fictional illustrative characters and architecture, not archival evidence or a geographically accurate map.
- **Modifications:** Copied final generated PNG byte-for-byte; runtime canvas transforms and compositing only.
- **SHA-256:** `9adda31cd93ce578f5cefc23104c89f1d211066b9b15da8b572eb5d2085a898c`
- **Bytes:** 1272249
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-assets-precision-face-v39-png

- **Label:** Depth / laundry · face
- **File:** `assets/precision-face-v39.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; exact prompt and generation output in assets/precision-generation-briefs-v39.json
- **Source location / method:** Use case: historical-scene. Asset type: genuine transparent close foreground face/shoulder cutout for a cinematic passage between an old Bavarian town and a workshop. Fictional European boy about 9, pale skin, blue-gray eyes, light brown hair under a gray-brown wool flat cap, worn dark brown high-collar jacket. Tight portrait, head and shoulders, turned very slightly left, calm serious expression, realistic anatomy and skin, cinematic cool daylight from upper left, photographic period illustration around 1905. Face fully visible, head with cap and broad shoulders occupy central 75% of composition; leave transparent margins around head and outer shoulders. Transparent alpha background, opaque figure, no environment, no lettering, no logos, no watermark. Original illustrative identity, no archival claim. This is a moving near-camera foreground character, not a baby.
- **Author / brand owner:** Project generation record; source-video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated illustrations for the user-authorized template. Source/video/reference owner and wider reuse rights not independently verified. Fictional illustrative characters and architecture, not archival evidence or a geographically accurate map.
- **Modifications:** Copied final generated PNG byte-for-byte; runtime canvas transforms and compositing only.
- **SHA-256:** `ff0edacca540c0c6c178ce4ceaf9c2f104211ef0dd3fd44226821ff5dcdb4a39`
- **Bytes:** 2289868
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-assets-precision-generation-briefs-v39-json

- **Label:** Depth and laundry generation provenance
- **File:** `assets/precision-generation-briefs-v39.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Exact prompts, edit parents, original/output hashes, approval and permission status
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `b6b746968aab385631750494c063c073f4cddfd83f1d3a0e4b1d4a292f322b02`
- **Bytes:** 13430
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-assets-precision-linen-v39-png

- **Label:** Depth / laundry · linen
- **File:** `assets/precision-linen-v39.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; exact prompt and generation output in assets/precision-generation-briefs-v39.json
- **Source location / method:** Use case: precise-object-edit. Edit target: this generated isolated linen shirt. Change garment into a woman's early-1900s cream blouse with SHORT PUFF SLEEVES, softly gathered shoulders, small high gathered collar, tiny front buttons and a lightly gathered waist, matching a period blouse held on a hanger. Preserve the realistic ivory linen fabric, wooden hanger, centered front view and genuine transparent alpha outside garment. Entire blouse and hanger contained with generous clear transparent margins. No person, hands, backdrop, text, labels or watermark. Output a fully isolated transparent cutout; no opaque gradient background. The short rounded puff sleeves must stop above the elbows, not long cuffs.
- **Author / brand owner:** Project generation record; source-video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated illustrations for the user-authorized template. Source/video/reference owner and wider reuse rights not independently verified. Fictional illustrative characters and architecture, not archival evidence or a geographically accurate map.
- **Modifications:** Copied final generated PNG byte-for-byte; runtime canvas transforms and compositing only.
- **SHA-256:** `ad234a89586c7dbf8302b1f12409106d8b51bdba44540d05dc6f92204b29391a`
- **Bytes:** 2234410
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-assets-precision-masonry-v39-png

- **Label:** Depth / laundry · masonry
- **File:** `assets/precision-masonry-v39.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; exact prompt and generation output in assets/precision-generation-briefs-v39.json
- **Source location / method:** Use case: historical-scene. Asset type: genuine transparent foreground masonry cutout for a cinematic parallax window passage. One tall narrow ragged fragment of an old Bavarian plaster-and-stone wall, viewed close-up, left edge cropped straight vertically by image border, right edge irregular exposed gray-beige limestone and bricks with broken mortar, bits of dark aged timber, subtle worn cream plaster. It fills the left third of a wide image; the remaining right two-thirds must be empty genuine transparent alpha. Wall extends fully from top to bottom of image, opaque solid masonry, cool window daylight, realistic rough textures, softly dark edges. No rubble on ground, no whole building, no background, no sky, no people, no window frame, no text or watermark. It will slide left faster than a distant town; original illustrative period environment.
- **Author / brand owner:** Project generation record; source-video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated illustrations for the user-authorized template. Source/video/reference owner and wider reuse rights not independently verified. Fictional illustrative characters and architecture, not archival evidence or a geographically accurate map.
- **Modifications:** Copied final generated PNG byte-for-byte; runtime canvas transforms and compositing only.
- **SHA-256:** `89de885d20bb31e2b8566297c651910a3b8cf53ac88a5e8e122739cd718aaab2`
- **Bytes:** 1547862
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-assets-precision-seamstress-v39-png

- **Label:** Depth / laundry · seamstress
- **File:** `assets/precision-seamstress-v39.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; exact prompt and generation output in assets/precision-generation-briefs-v39.json
- **Source location / method:** Use case: precise-object-edit. Edit target: this generated historical woman and blouse room plate. Keep the woman identity, face, hair, body, room, lighting, camera and hanger location unchanged. Change ONLY the garment hanging at the right: make it a cream linen early-1900s woman's blouse with SHORT PUFF SLEEVES ending above the elbows, small high gathered collar, fine vertical front buttons, softly gathered waist and a short flared hem. Remove its long hanging sleeves completely. The woman's hands should gently support the lower left side/hem of this short-sleeved blouse with coherent fingers, preserving the existing overall pose as closely as possible. This must visually connect to a separately isolated cream puff-sleeved blouse on a hanger. No text, watermark or new objects. Keep the full 16:9 image opaque.
- **Author / brand owner:** Project generation record; source-video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated illustrations for the user-authorized template. Source/video/reference owner and wider reuse rights not independently verified. Fictional illustrative characters and architecture, not archival evidence or a geographically accurate map.
- **Modifications:** Copied final generated PNG byte-for-byte; runtime canvas transforms and compositing only.
- **SHA-256:** `df051bed25243bf7264dedf1ac92fcb864664bb881f66425ac66d53e7bc26a35`
- **Bytes:** 2115785
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-assets-puma-cat-svg

- **Label:** PUMA leaping cat
- **File:** `assets/puma-cat.svg`
- **Usage label:** `brand-reference`
- **Origin / exact source:** https://about.puma.com
- **Source location / method:** HTML header__logo > inline SVG, native 54 × 42 coordinate system
- **Author / brand owner:** PUMA
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Not specified by the downloaded corporate asset. No broad redistribution or trademark clearance is asserted.
- **Modifications:** Preserved path; viewBox added to standalone file. Runtime changes tint, alpha, scale and blur; no silhouette redraw.
- **SHA-256:** `bc70453a65103e09db00332b261881a1cb368f6f7ffafb5ea56a82b703fb93f7`
- **Bytes:** 1347

### asset-assets-puma-lockup-svg

- **Label:** PUMA combined cat and wordmark
- **File:** `assets/puma-lockup.svg`
- **Usage label:** `brand-reference`
- **Origin / exact source:** https://about.puma.com
- **Source location / method:** HTML footer__logo > inline SVG, viewBox 0 0 100 49.541
- **Author / brand owner:** PUMA
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Not specified by the downloaded corporate asset. No broad redistribution or trademark clearance is asserted.
- **Modifications:** Preserved geometry; fill made white for compositing.
- **SHA-256:** `c4323fdc11201b74cfbe9b99b8073e215f8c3c1a1ad99e7363a40531fc232530`
- **Bytes:** 3063

### asset-assets-real-fire-credit-txt

- **Label:** Real Fire Credit
- **File:** `assets/real-fire-credit.txt`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** source provenance text
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `d1cc1e133b3ba6f7c5598092fc87145a56323d36e056d8b74782d6c3ca13a2ae`
- **Bytes:** 371

### asset-assets-real-fire-mp4

- **Label:** Fire on Black Background
- **File:** `assets/real-fire.mp4`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://www.pexels.com/video/fire-on-black-background-11977692/
- **Source location / method:** Existing project credit: assets/real-fire-credit.txt
- **Author / brand owner:** Artur Szczubelek / Pexels
- **Retrieved / created:** 2026-10-27 (existing credit)
- **License / permission status:** https://www.pexels.com/license/
- **Modifications:** Trimmed and resized for compositing; recorded download 2026-10-27.
- **SHA-256:** `d1b1777cf6f4727f51ac33770c27dbe71795843f679a1e04aeb52214af1e5014`
- **Bytes:** 4635920

### asset-assets-reference-generation-v62-json

- **Label:** Reference Generation V62
- **File:** `assets/reference-generation-v62.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `5ce0ca8ff1b8ebf390d937c7bf24d94384e681640b568f14599efdc67ea78919`
- **Bytes:** 7785

### asset-assets-refinement-generation-record-v76-json

- **Label:** Refinement Generation Record V76
- **File:** `assets/refinement-generation-record-v76.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `a37c221cf7ce43ba09d741945bf2f099504134b035f7db52db73fca1220b1d53`
- **Bytes:** 36378

### asset-assets-reveal-png

- **Label:** Reveal
- **File:** `assets/reveal.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `7c69903df351ea10d2ea41e7df5a11450d82924be77083cc7675cbe9b8ec19cf`
- **Bytes:** 2240487

### asset-assets-rig-generation-briefs-v41-json

- **Label:** Exact reconstruction prompts v41
- **File:** `assets/rig-generation-briefs-v41.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Project-authored exact generation record
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `c9dbabd1551f59acaf0f2c92a6d94447f273f4e983fe90a677cd5be3813109c5`
- **Bytes:** 2527

### asset-assets-rig-room-clean-v41-png

- **Label:** Sewing room clean plate · independent motion fill
- **File:** `assets/rig-room-clean-v41.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen; source assets/precision-seamstress-v39.png; exact prompts in assets/rig-generation-briefs-v41.json
- **Source location / method:** Support reconstruction only; not a replacement portrait or archival photograph. Candidate retained irrespective of review outcome.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-28
- **License / permission status:** User-authorized generated project illustration; wider reuse clearance not asserted.
- **Modifications:** Output copied byte-for-byte. Vector masks and independent transforms applied at runtime.
- **SHA-256:** `b4ebb9f71cdb6988a2fa5e5dec98002ebbd2a7a174f568bdd6c5f1f085073e61`
- **Bytes:** 1949455

### asset-assets-rig-underpaint-v41-png

- **Label:** Apron underpaint · concealed forearm repair
- **File:** `assets/rig-underpaint-v41.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen; source assets/precision-seamstress-v39.png; exact prompts in assets/rig-generation-briefs-v41.json
- **Source location / method:** Support reconstruction only; not a replacement portrait or archival photograph. Candidate retained irrespective of review outcome.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-28
- **License / permission status:** User-authorized generated project illustration; wider reuse clearance not asserted.
- **Modifications:** Output copied byte-for-byte. Vector masks and independent transforms applied at runtime.
- **SHA-256:** `9620a945e6e82e7b2cae62a79e5d065ad7f4421c32a6dd04bdedca8ef3f8b3b9`
- **Bytes:** 2076125

### asset-assets-rivalry-heads-v65-png

- **Label:** rivalry heads v65
- **File:** `assets/rivalry-heads-v65.png`
- **Usage label:** `ai-generated`
- **Origin / exact source:** OpenAI image generation; exact prompt and references in assets/chapter-generation-v65.json
- **Source location / method:** Independent chapter source: rivalry heads v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `8fee059d461c8078a9b51b32d1f7023a8da256d6ccb3e6c8c31a7cb8bd1ff181`
- **Bytes:** 3281015

### asset-assets-room-color-v62-png

- **Label:** Colored portrait room with window
- **File:** `assets/room-color-v62.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** generated_images/exec-d0bf04c3-292b-41a4-be2d-ac13d60e1ef6.png
- **Source location / method:** Edit the existing portrait-room-room-v53.png only: naturally colored warm aged brown wood window at left 35%, muted green daylight, mottled olive ochre warm-gray wall, dark wood floor. No people, basin, cloth or shelf; separate layers. Preserve eye-level photographic perspective. Wide 16:9.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated illustration for this user-authorized project; not archival evidence. Reference image reuse rights beyond this task unverified.
- **Modifications:** Original PNG retained byte-for-byte; runtime transforms, color, crop and masks only.
- **SHA-256:** `ca7bbc0b2ed9c8da7b0f6b43deb4529148530bddcd703bbc49b9d93eb6646a01`
- **Bytes:** 2713441

### asset-assets-ruined-cluster-v61-png

- **Label:** Asymmetric collapsed building cluster
- **File:** `assets/ruined-cluster-v61.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** /workspace/scratch/24b9f14cbd4b/generated_images/exec-8e8f668b-690d-47c0-9ec1-fbc481f2dc28.png
- **Source location / method:** Use case: historical-scene. Asset type: isolated ruined building cluster cutout for parallax compositing. Photorealistic black-and-white archival documentary appearance, bomb-damaged early twentieth century European masonry buildings. Asymmetric cluster: a low jagged collapsed shell left, a squat two-storey shattered building middle with exposed rooms and rubble, one taller narrow crumbling wall toward right. Broken roofs, irregular openings, exposed beams and bricks, deep visible side walls, debris at base. Three-quarter perspective seen from street level. No complete intact buildings, no repeated identical facades, no intact roofline. Finely detailed weathered plaster, real masonry, natural diffuse light, moderate contrast. Cluster spans wide landscape frame, entire silhouette visible, generous transparent margins above and sides. No sky, no ground plane except tightly localized rubble at base, no people, no fire, no text. Truly transparent background and transparent window openings.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project illustration, not archival evidence.
- **Modifications:** Copied byte-for-byte; runtime transforms and color controls only.
- **SHA-256:** `8e1698ac9ffef831b05d84d6fa11bf7ca3d6a97db5bf3caeb569e7a7075a540a`
- **Bytes:** 2588849

### asset-assets-ruined-window-city-v55-png

- **Label:** Ruined window city
- **File:** `assets/ruined-window-city-v55.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** Exact source/output hashes and full submitted prompts in assets/ruined-window-generation-v55.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized template edit; broader reference reuse rights not established.
- **Modifications:** Alpha extraction or concealed-city reconstruction, UI removed. Runtime layer placement and motion are separate.
- **SHA-256:** `5f6d661bc49de2128aec20d838c1bb4f4c187db4567cb3c4c36294e1f82ee627`
- **Bytes:** 1878672

### asset-assets-ruined-window-generation-v55-json

- **Label:** Ruined Window Generation V55
- **File:** `assets/ruined-window-generation-v55.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `446c4a76ba9de277f61ce718abb5a2685b66391fd34aab98e14ea87ff103201f`
- **Bytes:** 4003

### asset-assets-ruined-window-person-v55-png

- **Label:** Ruined window person
- **File:** `assets/ruined-window-person-v55.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** Exact source/output hashes and full submitted prompts in assets/ruined-window-generation-v55.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized template edit; broader reference reuse rights not established.
- **Modifications:** Alpha extraction or concealed-city reconstruction, UI removed. Runtime layer placement and motion are separate.
- **SHA-256:** `fb93dcc62d5df16b7a03715db262346c6c24393765840b6390a5701d841c6156`
- **Bytes:** 1685442

### asset-assets-ruined-window-selected-reference-v55-png

- **Label:** Ruined window selected-reference
- **File:** `assets/ruined-window-selected-reference-v55.png`
- **Usage label:** `user-reference`
- **Origin / exact source:** Exact user-selected image-edit-target-ebdd80458beeb6b7.png
- **Source location / method:** Exact source/output hashes and full submitted prompts in assets/ruined-window-generation-v55.json.
- **Author / brand owner:** User source
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized template edit; broader reference reuse rights not established.
- **Modifications:** Retained unchanged
- **SHA-256:** `d69c33b8ec27d4d2796cf20717667821d91fbfe6cb6a03bfb8c3a2cd58fac73f`
- **Bytes:** 478739

### asset-assets-ruined-window-wall-v55-png

- **Label:** Ruined window wall
- **File:** `assets/ruined-window-wall-v55.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** Exact source/output hashes and full submitted prompts in assets/ruined-window-generation-v55.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized template edit; broader reference reuse rights not established.
- **Modifications:** Alpha extraction or concealed-city reconstruction, UI removed. Runtime layer placement and motion are separate.
- **SHA-256:** `63a174fb1031292e07a0a5dca24c179989ead5c1c1d8d4983733d289aedda1ba`
- **Bytes:** 1320902

### asset-assets-salvage-brown-shoe-v58-png

- **Label:** Worn brown leather low spiked shoe in side profile; independent photo-like product cutout.
- **File:** `assets/salvage-brown-shoe-v58.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** assets/salvage-generation-v58.json contains exact submitted prompts, references, SHA-256 and original outputs.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized project creation; no wider reference permission asserted.
- **Modifications:** Generation/extraction from supplied reference style; raw tool output copied byte-for-byte.
- **SHA-256:** `86f642282a6ecc088ab0d960bb95ab1174d71c3b4e512c90ca51c8c48348068b`
- **Bytes:** 1681417

### asset-assets-salvage-cream-shoe-v58-png

- **Label:** Cream leather running shoe with burgundy reinforcement panels and metal spikes; separate diagram design.
- **File:** `assets/salvage-cream-shoe-v58.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** assets/salvage-generation-v58.json contains exact submitted prompts, references, SHA-256 and original outputs.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized project creation; no wider reference permission asserted.
- **Modifications:** Generation/extraction from supplied reference style; raw tool output copied byte-for-byte.
- **SHA-256:** `81234824020dffcff7dea0b8d18cbeabea4b3e31ad3ad7bd9526e8e6efd14a9c`
- **Bytes:** 1602404

### asset-assets-salvage-facade-v58-png

- **Label:** Grayscale ruined plaster facade with arched lower openings and transparent empty windows; used on editable wall geometry.
- **File:** `assets/salvage-facade-v58.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** assets/salvage-generation-v58.json contains exact submitted prompts, references, SHA-256 and original outputs.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized project creation; no wider reference permission asserted.
- **Modifications:** Generation/extraction from supplied reference style; raw tool output copied byte-for-byte.
- **SHA-256:** `0d647b53999fef63bc38c14d9e31c6fe8c893330572924487cf63b6b1f8dd51e`
- **Bytes:** 2819623

### asset-assets-salvage-generation-v58-json

- **Label:** Salvage Generation V58
- **File:** `assets/salvage-generation-v58.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `be905705bcd84e8169ccdbc2b37b7b801202b6a7524519fdc7d80ef395b3328b`
- **Bytes:** 6027

### asset-assets-salvage-generation-v59-json

- **Label:** Salvage Generation V59
- **File:** `assets/salvage-generation-v59.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `fe41b565ea9f49854c994b9f72baf72beb7c3f0db4891c60c252563ef70c7716`
- **Bytes:** 3924

### asset-assets-salvage-gray-leg-v59-png

- **Label:** Gray trousers and attached spiked shoe
- **File:** `assets/salvage-gray-leg-v59.png`
- **Usage label:** `generated`
- **Origin / exact source:** image_gen.imagegen, referenced user footage crop
- **Source location / method:** Use case: historical-scene. One production photographic cutout on genuine transparent background. Reference image gives vintage trouser, footwear and collage style only. Single complete human LOWER LEG from above the knee down to an attached black worn leather lace-up running shoe with five short metal spikes visible beneath the forefoot. Trouser is charcoal gray 1920s wool, realistically broad fabric folds, hem naturally overlaps sock and shoe collar. Shoe side profile pointing LEFT, planted horizontal, knee at top right, heel at bottom right, toe left. Photorealistic natural cloth/leather, neutral side lighting, softly aged desaturated appearance. Entire one leg and shoe visible with clear alpha margins. No second leg, body, face, cropped shoe, detached ankle, floor, shadows on backdrop, props, text, labels or watermark. Vertical composition. Make shoe about half total image width; leg proportional and not a narrow stick.
- **Author / brand owner:** AI-generated project candidate
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized reference/generation; no archival or historical identity claim.
- **Modifications:** Raw output bytes preserved; runtime thresholding/cropping separate
- **SHA-256:** `7f2df66c3626ad1d66df31a0be5de7999f2843d8e41156565cb83a7d538d4f18`
- **Bytes:** 2169163

### asset-assets-salvage-ground-v58-png

- **Label:** Photographic gray rubble albedo for repeating ground material.
- **File:** `assets/salvage-ground-v58.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** assets/salvage-generation-v58.json contains exact submitted prompts, references, SHA-256 and original outputs.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized project creation; no wider reference permission asserted.
- **Modifications:** Generation/extraction from supplied reference style; raw tool output copied byte-for-byte.
- **SHA-256:** `80314b516062180cbf3b44906d21489b95a7270cfe71ea32ca9efd7c87040d92`
- **Bytes:** 4743318

### asset-assets-salvage-pink-leg-v59-png

- **Label:** Pink trousers and attached spiked shoe
- **File:** `assets/salvage-pink-leg-v59.png`
- **Usage label:** `generated`
- **Origin / exact source:** image_gen.imagegen, referenced user footage crop
- **Source location / method:** Use case: historical-scene. Single photographic production cutout, genuine transparent background. Use reference only for the pastel pink trouser leg with black vintage spiked running shoe. Create ONE full lower leg from above knee through ankle and shoe, side profile facing LEFT, in a slight walking swing with toe a little raised. Broad pale dusty rose wool trousers, hem naturally overlaps black sock, worn black 1920s leather lace-up athletic shoe with small metal sole spikes under forefoot. Accurate foot/ankle anatomy and continuous attachment, fabric folds and leather detail, muted cinematic photographic light. Whole one leg and shoe in frame with alpha margin. No torso, face, second leg, ground, background, labels, text or watermark. Vertical composition; shoe and trouser volume substantial, not thin.
- **Author / brand owner:** AI-generated project candidate
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized reference/generation; no archival or historical identity claim.
- **Modifications:** Raw output bytes preserved; runtime thresholding/cropping separate
- **SHA-256:** `4f043939dfeea29c08c44f7c68f41dc0494f2bb06066f45620fe677c04a3decc`
- **Bytes:** 2093510

### asset-assets-salvage-reference-brown-shoe-v58-jpg

- **Label:** Source reference brown-shoe
- **File:** `assets/salvage-reference-brown-shoe-v58.jpg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User supplied reference footage, extracted at recorded decoded timestamp
- **Source location / method:** assets/salvage-generation-v58.json contains exact submitted prompts, references, SHA-256 and original outputs.
- **Author / brand owner:** User source ownership not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized project creation; no wider reference permission asserted.
- **Modifications:** Reference extract retained unchanged
- **SHA-256:** `444c8fb423da63eca0139a18b4d8c4b760e4485ae11b21d7fb5682d780650f62`
- **Bytes:** 6071

### asset-assets-salvage-reference-cream-shoe-v58-jpg

- **Label:** Source reference cream-shoe
- **File:** `assets/salvage-reference-cream-shoe-v58.jpg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User supplied reference footage, extracted at recorded decoded timestamp
- **Source location / method:** assets/salvage-generation-v58.json contains exact submitted prompts, references, SHA-256 and original outputs.
- **Author / brand owner:** User source ownership not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized project creation; no wider reference permission asserted.
- **Modifications:** Reference extract retained unchanged
- **SHA-256:** `93126e0272147fc0928154b09444c58b38c5c4bc6a0597cb2bf144e0d90ed71d`
- **Bytes:** 4784

### asset-assets-salvage-reference-facade-v58-jpg

- **Label:** Source reference facade
- **File:** `assets/salvage-reference-facade-v58.jpg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User supplied reference footage, extracted at recorded decoded timestamp
- **Source location / method:** assets/salvage-generation-v58.json contains exact submitted prompts, references, SHA-256 and original outputs.
- **Author / brand owner:** User source ownership not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized project creation; no wider reference permission asserted.
- **Modifications:** Reference extract retained unchanged
- **SHA-256:** `8dbf0e61cca7849d250dd7b894649e315adce41a28e9dd535f0ee4b924c3210a`
- **Bytes:** 6617

### asset-assets-salvage-reference-gray-leg-v59-jpg

- **Label:** Gray trousers and attached spiked shoe reference
- **File:** `assets/salvage-reference-gray-leg-v59.jpg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User-supplied reference clip
- **Source location / method:** Original reference crop
- **Author / brand owner:** Reference owner not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized reference/generation; no archival or historical identity claim.
- **Modifications:** Reference frame extraction
- **SHA-256:** `3a368be118f901e484d327ee91379ed490d96480e4e8fc3e9d0c4077be1bd8a6`
- **Bytes:** 5515

### asset-assets-salvage-reference-ground-v58-jpg

- **Label:** Source reference ground
- **File:** `assets/salvage-reference-ground-v58.jpg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User supplied reference footage, extracted at recorded decoded timestamp
- **Source location / method:** assets/salvage-generation-v58.json contains exact submitted prompts, references, SHA-256 and original outputs.
- **Author / brand owner:** User source ownership not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized project creation; no wider reference permission asserted.
- **Modifications:** Reference extract retained unchanged
- **SHA-256:** `39a7bb6238cc141cbafedeb4b52302415e8af8056da589dd210d7e4bbf454ff7`
- **Bytes:** 11757

### asset-assets-salvage-reference-pink-leg-v59-jpg

- **Label:** Pink trousers and attached spiked shoe reference
- **File:** `assets/salvage-reference-pink-leg-v59.jpg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User-supplied reference clip
- **Source location / method:** Original reference crop
- **Author / brand owner:** Reference owner not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized reference/generation; no archival or historical identity claim.
- **Modifications:** Reference frame extraction
- **SHA-256:** `5f12816e826c3168ae0a86473f4c5a6c3543227369d5e8f6c6508219646b92de`
- **Bytes:** 7600

### asset-assets-salvage-reference-rubble-v59-jpg

- **Label:** Foreground rubble cutout reference
- **File:** `assets/salvage-reference-rubble-v59.jpg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User-supplied reference clip
- **Source location / method:** Original reference crop
- **Author / brand owner:** Reference owner not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized reference/generation; no archival or historical identity claim.
- **Modifications:** Reference frame extraction
- **SHA-256:** `39a7bb6238cc141cbafedeb4b52302415e8af8056da589dd210d7e4bbf454ff7`
- **Bytes:** 11757

### asset-assets-salvage-reference-searcher-v58-jpg

- **Label:** Source reference searcher
- **File:** `assets/salvage-reference-searcher-v58.jpg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User supplied reference footage, extracted at recorded decoded timestamp
- **Source location / method:** assets/salvage-generation-v58.json contains exact submitted prompts, references, SHA-256 and original outputs.
- **Author / brand owner:** User source ownership not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized project creation; no wider reference permission asserted.
- **Modifications:** Reference extract retained unchanged
- **SHA-256:** `39a7bb6238cc141cbafedeb4b52302415e8af8056da589dd210d7e4bbf454ff7`
- **Bytes:** 11757

### asset-assets-salvage-rubble-v59-png

- **Label:** Foreground rubble cutout
- **File:** `assets/salvage-rubble-v59.png`
- **Usage label:** `generated`
- **Origin / exact source:** image_gen.imagegen, referenced user footage crop
- **Source location / method:** Use case: historical-scene. Production photographic compositing asset, actual transparent background. Reference image supplies rubble style only. Create a wide isolated foreground mound of broken gray masonry, irregular concrete slabs, crushed stones, broken timbers, dust, a few projecting bent metal rods. Low eye-level oblique camera, jagged uneven silhouette at upper edge, large convincing stone blocks nearer bottom, layered depth and cavities. Full mound spans canvas width, fills bottom three quarters, real alpha above and around silhouette. Neutral soft overcast side light, grayscale documentary photorealism. No people, shoes, helmet, buildings, sky, red, text, rectangular background plate or drop shadow. This is a separate near-ground occluding cutout for perspective scene, not a top-down texture.
- **Author / brand owner:** AI-generated project candidate
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized reference/generation; no archival or historical identity claim.
- **Modifications:** Raw output bytes preserved; runtime thresholding/cropping separate
- **SHA-256:** `f0e5da59a276dcabf85f8eecfb47e3a86d99673fb6236431f934712f04d26df5`
- **Bytes:** 2617741

### asset-assets-salvage-searcher-v58-png

- **Label:** Full-body photographic side-view man in coat holding flashlight; source for calibrated image-space articulated walking rig.
- **File:** `assets/salvage-searcher-v58.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** assets/salvage-generation-v58.json contains exact submitted prompts, references, SHA-256 and original outputs.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized project creation; no wider reference permission asserted.
- **Modifications:** Generation/extraction from supplied reference style; raw tool output copied byte-for-byte.
- **SHA-256:** `f3573d95a760905e4eca5fc3c8afbb48921f94bb641494e59d9d4a11df33bc72`
- **Bytes:** 1704776

### asset-assets-seated-athletes-v74-png

- **Label:** seated athletes · V74 illustrative reconstruction
- **File:** `assets/seated-athletes-v74.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool; current user-authorized documentary reconstruction
- **Source location / method:** Use case: historical-scene. Asset type: transparent photographic cutout, illustrative newly generated recreation of two unidentified 1930s American male athletes seated resting after training. TWO men together as one grouped cutout, complete figures, relaxed on the ground, no ground background. Front man African American age 25 smiling subtly, neat dark short hair, pale gray 1930s tracksuit jacket and loose athletic trousers, seated with one knee raised and other leg extended toward lower right, dark leather running shoes, right arm resting on knee. Rear man at left African American age 24, darker plain college-style sweatshirt with no text or logos, loose gray trousers, seated with both legs angled to front left, one hand on ground. No historical identity asserted. Photorealistic monochrome editorial photography, natural proportions, no medals or political gestures. Wide landscape, separate clear silhouettes within group, full heads and feet padded away from image edges, actual transparent background.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project asset; no claim of archival authenticity or independently cleared public-figure likeness rights
- **Modifications:** Original PNG retained byte-for-byte. Runtime cropped atlas parts and editable lighting/compositing.
- **SHA-256:** `3c888d98c8ad8ed03232a094cfa3d8a7649bfae53afc8e3cf82e521e0a073e25`
- **Bytes:** 2062147

### asset-assets-shelter-alpha-candidate-v81-png

- **Label:** shelter-alpha-candidate-v81.png
- **File:** `assets/shelter-alpha-candidate-v81.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen,2026-11-01
- **Source location / method:** Background-removal attempt did not remove studio halos sufficiently; inactive original retained for provenance. Exact prompts: docs/generation-record-v81.json
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration; not archival evidence
- **Modifications:** Original bytes unmodified; runtime Canvas crops/masks/transforms
- **SHA-256:** `c1dd3da1e6f1f1cfebec240f1d5f9d6e97b34bab07205fc3fe1dbccc24e792d3`
- **Bytes:** 2130827

### asset-assets-shelter-cutouts-v81-png

- **Label:** shelter-cutouts-v81.png
- **File:** `assets/shelter-cutouts-v81.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen,2026-11-01
- **Source location / method:** Generated atlas retained byte-for-byte. Native normalized polygon mattes remove studio backgrounds; independent held people, frontal face and oblique aircraft. Not recovered acting or archival evidence. Exact prompts: docs/generation-record-v81.json
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration; not archival evidence
- **Modifications:** Original bytes unmodified; runtime Canvas crops/masks/transforms
- **SHA-256:** `f20b86fb8f6e75108f0d776f4859cd775bb3cee646260db934c9539f89fece72`
- **Bytes:** 2062533

### asset-assets-shelter-environments-v81-png

- **Label:** shelter-environments-v81.png
- **File:** `assets/shelter-environments-v81.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen,2026-11-01
- **Source location / method:** Original retained. Canvas quadrant sampling, native house polygon and tree luminance mask; photographic explosion plate with authored growth/deformation, not simulated fluid or filmed explosion. Exact prompts: docs/generation-record-v81.json
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration; not archival evidence
- **Modifications:** Original bytes unmodified; runtime Canvas crops/masks/transforms
- **SHA-256:** `eb3cb88c2cd3367175a97a6f4ff4dc59590c9197c90beef5f994c5559391bb55`
- **Bytes:** 2101242

### asset-assets-shelter-illustrations-v80-png

- **Label:** shelter-illustrations-v80.png
- **File:** `assets/shelter-illustrations-v80.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen,2026-11-01
- **Source location / method:** Original generation atlas retained byte-for-byte. Prompt in docs/generation-record-v80.json
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project illustration; not archival evidence
- **Modifications:** Native Canvas atlas cropping only; original unmodified
- **SHA-256:** `d1cd3e5699742e426e6419b27b8edca1665c376ec23cf5ec406c553abe22ff02`
- **Bytes:** 2706556

### asset-assets-shelter-industrial-metal-v80-png

- **Label:** Industrial metalworking correction
- **File:** `assets/shelter-industrial-metal-v80.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen,2026-11-01
- **Source location / method:** Original generation atlas retained byte-for-byte. Prompt in docs/generation-record-v80.json
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project illustration; not archival evidence
- **Modifications:** Native Canvas atlas cropping only; original unmodified
- **SHA-256:** `73135eea55dd335b359d4807c4d7c43e62404b14ce9350c9affcc68d0c0e5edb`
- **Bytes:** 2633071

### asset-assets-shelter-people-v80-png

- **Label:** shelter-people-v80.png
- **File:** `assets/shelter-people-v80.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen,2026-11-01
- **Source location / method:** Original generation atlas retained byte-for-byte. Prompt in docs/generation-record-v80.json
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project illustration; not archival evidence
- **Modifications:** Native Canvas atlas cropping only; original unmodified
- **SHA-256:** `c6147f573b740a9640ea026d36fac26c19fac8faf5091d84d4879b7b15ebe307`
- **Bytes:** 2162273

### asset-assets-shelter-plates-v80-png

- **Label:** shelter-plates-v80.png
- **File:** `assets/shelter-plates-v80.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen,2026-11-01
- **Source location / method:** Original generation atlas retained byte-for-byte. Prompt in docs/generation-record-v80.json
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project illustration; not archival evidence
- **Modifications:** Native Canvas atlas cropping only; original unmodified
- **SHA-256:** `8a44ff008074d5eef21b95cc328d7c479134cbef4a7a1498cad92771007a4b41`
- **Bytes:** 2994758

### asset-assets-shoe-paper-generation-v56-json

- **Label:** Shoe Paper Generation V56
- **File:** `assets/shoe-paper-generation-v56.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `749602e763e14c17334da244b28c62f0b3fd1fa6c21b5f5e8e82cca0e6142472`
- **Bytes:** 1204

### asset-assets-shoe-paper-selected-reference-v56-png

- **Label:** Exact user-supplied shoe-paper reference, retained unchanged.
- **File:** `assets/shoe-paper-selected-reference-v56.png`
- **Usage label:** `user-reference`
- **Origin / exact source:** User attachment
- **Source location / method:** Exact prompt/source/output hashes retained in assets/shoe-paper-generation-v56.json. Procedural thumbnail comes from the distributed renderer.
- **Author / brand owner:** Project code/generation record; user source ownership not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized use; no wider source-reference rights established.
- **Modifications:** Reference retained unchanged
- **SHA-256:** `7f1d100b156a91eeda5262050948820273137829f2930d359c2bf81f6de2d8b7`
- **Bytes:** 480207

### asset-assets-shoe-paper-texture-v56-png

- **Label:** Generated gray-beige paper clean plate with grain, flecks, sheet seams and a horizontal crease.
- **File:** `assets/shoe-paper-texture-v56.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen
- **Source location / method:** Exact prompt/source/output hashes retained in assets/shoe-paper-generation-v56.json. Procedural thumbnail comes from the distributed renderer.
- **Author / brand owner:** Project code/generation record; user source ownership not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized use; no wider source-reference rights established.
- **Modifications:** Clean paper reconstructed or procedural thumbnail rendered; runtime deformation separate.
- **SHA-256:** `dad409bf61a8c369c7ffaef1a25e07d9dc2e5ce6a099bb610dc184ee5330046f`
- **Bytes:** 2855431

### asset-assets-shoe-restoration-v57-json

- **Label:** Shoe Restoration V57
- **File:** `assets/shoe-restoration-v57.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `674d4dc85f8a0df3dac78c67f96136ab596afb31ffd80e57b05779bdfc41f33d`
- **Bytes:** 739

### asset-assets-shoe-restored-preview-v57-png

- **Label:** Restored original shoe · preview and replacement slot
- **File:** `assets/shoe-restored-preview-v57.png`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project chapter-shoes.js shoeMesh, with appended seam seals in shoe-solid.js
- **Source location / method:** Exact restoration record in assets/shoe-restoration-v57.json; old faces/materials retained.
- **Author / brand owner:** Project code/generation record; user source ownership not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized use; no wider source-reference rights established.
- **Modifications:** Original shoe shape restored; local seam repair, large render buffer and current motion retained.
- **SHA-256:** `5793a8a2cdc909b2275588ca7d1b46311be1d84a316da168a8a181651e4a2e73`
- **Bytes:** 23168

### asset-assets-shoe-solid-default-v56-png

- **Label:** V56 redesigned shoe · rejected appearance
- **File:** `assets/shoe-solid-default-v56.png`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project-authored dist/shoe-solid.js and raster-surface.js
- **Source location / method:** Exact prompt/source/output hashes retained in assets/shoe-paper-generation-v56.json. Procedural thumbnail comes from the distributed renderer.
- **Author / brand owner:** Project code/generation record; user source ownership not independently established
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized use; no wider source-reference rights established.
- **Modifications:** Clean paper reconstructed or procedural thumbnail rendered; runtime deformation separate.
- **SHA-256:** `dd47d4b1b1aaea8640a4bf7f5a48a6234a6fb70b48099e0efffc18be6d5b7c3c`
- **Bytes:** 13847

### asset-assets-shoulder-v3-png

- **Label:** Shoulder V3
- **File:** `assets/shoulder-v3.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `2941f7e86cfed0067fc41d890bd3c25c08b12df4e679c596142ae42b184fbc56`
- **Bytes:** 1642252

### asset-assets-shoulder-png

- **Label:** Shoulder
- **File:** `assets/shoulder.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `9523df3906afb5d2fbf7dfd31a342c4c3d788efeb2f74c5b6326990a3df75305`
- **Bytes:** 2048698

### asset-assets-snow-material-png

- **Label:** Snow · natural fine grains
- **File:** `assets/snow-material.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated photorealistic material plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `dff6bd308546858bc78b4a0e45f3e372d1038f98a3d47ddd2027949b84376261`
- **Bytes:** 2231190

### asset-assets-soil-cross-section-png

- **Label:** Granular soil · earth cross-section
- **File:** `assets/soil-cross-section.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `345b467a4e62e845011f6365cef388673e18229ce85bb593e4bc29c4787a19c3`
- **Bytes:** 4138410

### asset-assets-soldier-1-svg

- **Label:** Soldier 1 · standalone transparent cutout
- **File:** `assets/soldier-1.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** lossless SVG viewport wrapper around an embedded original generated PNG quadrant; no runtime sheet canvas
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `d55814f678667b518d696384849c723140391d706a87f84ac4aa9b033b3ba0b7`
- **Bytes:** 2770591
- **Related provenance records:** `assets/conflict-generation-briefs.json`

### asset-assets-soldier-2-svg

- **Label:** Soldier 2 · standalone transparent cutout
- **File:** `assets/soldier-2.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** lossless SVG viewport wrapper around an embedded original generated PNG quadrant; no runtime sheet canvas
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `0e4349564198fd895c58587109651e421bca5b56121cf6a8592831f81dc2982d`
- **Bytes:** 2770593
- **Related provenance records:** `assets/conflict-generation-briefs.json`

### asset-assets-soldier-3-svg

- **Label:** Soldier 3 · standalone transparent cutout
- **File:** `assets/soldier-3.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** lossless SVG viewport wrapper around an embedded original generated PNG quadrant; no runtime sheet canvas
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `fb18ad1f49fc3a8212918f1fba71e004d1a0e00f173c82de8a6750e99d6a3655`
- **Bytes:** 2770593
- **Related provenance records:** `assets/conflict-generation-briefs.json`

### asset-assets-soldier-4-svg

- **Label:** Soldier 4 · standalone transparent cutout
- **File:** `assets/soldier-4.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** lossless SVG viewport wrapper around an embedded original generated PNG quadrant; no runtime sheet canvas
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `150222f91628150fba5c9ffb9100f2c2c699a725a849b0aff31c177a8a849b2f`
- **Bytes:** 2770595
- **Related provenance records:** `assets/conflict-generation-briefs.json`

### asset-assets-soldiers-sheet-png

- **Label:** Four soldier cutouts · 2×2 sprite sheet
- **File:** `assets/soldiers-sheet.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated RGBA sheet; each quadrant is cropped at runtime; per-soldier transforms, recoil and muzzle anchor
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `8d4ef02acaeb72453c0a5f3af2b30b328e1da81c4886ee147f94a446beb54148`
- **Bytes:** 2077786
- **Related provenance records:** `assets/conflict-generation-briefs.json`

### asset-assets-standing-png

- **Label:** Standing foreground pair
- **File:** `assets/standing.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `c03d6039a0d576290e7dfcbd259c29ed3d07a430e31ed9b5f6e840f9a087d801`
- **Bytes:** 1243048

### asset-assets-street-figure-v62-png

- **Label:** Back-view worker in short jacket breeches and boots
- **File:** `assets/street-figure-v62.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** generated_images/exec-27428c85-c889-4c57-8183-29a584c6dc5f.png
- **Source location / method:** Photorealistic monochrome full-body rear-view young man standing solemnly, short worn dark leather work jacket, knee breeches, knee-high boots, pale short hair, hands by sides. Early 1920s German worker, not modern suit/long coat. Transparent background, entire body visible, no ground/environment/weapon/text.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated illustration for this user-authorized project; not archival evidence. Reference image reuse rights beyond this task unverified.
- **Modifications:** Original PNG retained byte-for-byte; runtime transforms, color, crop and masks only.
- **SHA-256:** `b05d2e8a4915b703e461e449f4b9bac24afd13b25a44d4d2d1e2fe41ae07db86`
- **Bytes:** 1656086

### asset-assets-television-room-v73-png

- **Label:** television room v73.png
- **File:** `assets/television-room-v73.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; exact prompt in olympic-generation-record-v73.json
- **Source location / method:** Use case: historical-scene. Asset type: clean empty room backdrop for a 1930s television documentary scene. Front-facing pale aged plaster wall, very subtle horizontal masonry seams and soft gray weathering, dark narrow wooden wainscot along lower fifth, a little worn wood floor visible at bottom with gentle perspective towards the wall. Symmetrical eye-level camera. Diffuse window light from left, realistic photographic texture, quiet restrained gray/off-white palette, wide 16:9. No television, furniture, people, windows in view, decorations, text, symbols or logos. This is an illustrative supporting plate.
- **Author / brand owner:** Project image generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Illustrative project asset; no historical-photo authenticity is asserted. Owens likeness reference has its own recorded public-domain jurisdiction conditions.
- **Modifications:** Original file unchanged; renderer alpha/component/skyline masks, placement and grade.
- **SHA-256:** `23319625198b70838708fd5cd1df1b8bf4f398dc0f41570dd5a07974889413a9`
- **Bytes:** 2557169

### asset-assets-terrain-generation-v63-json

- **Label:** Terrain Generation V63
- **File:** `assets/terrain-generation-v63.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `90a2dfc67cd81938b0e01aa8b620851cb520c8ac3623bed58678a814600fb7b4`
- **Bytes:** 1287

### asset-assets-title-cloud-fill-v44-png

- **Label:** Independent cloud texture inside lettering
- **File:** `assets/title-cloud-fill-v44.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / assets/precision-clouds-v39.png
- **Source location / method:** Byte-identical copy of precision-clouds-v39.png, separately bound so replacing the title fill cannot change exterior clouds.
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for user-authorized project. No archival authenticity claim.
- **Modifications:** Original bytes retained. Runtime tint, mask, drift and scale are separately editable.
- **SHA-256:** `9adda31cd93ce578f5cefc23104c89f1d211066b9b15da8b572eb5d2085a898c`
- **Bytes:** 1272249

### asset-assets-track-spike-views-v74-png

- **Label:** track spike views · V74 illustrative reconstruction
- **File:** `assets/track-spike-views-v74.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool; current user-authorized documentary reconstruction
- **Source location / method:** Use case: product-mockup. Asset type: transparent photographic running-shoe atlas for an editable 1936 documentary animation. Generate TWO clearly separated views of the SAME unbranded black low-cut 1930s leather track sprint spike, not a football boot. Upper has aged smooth black leather, thin leather sole, black laces with small metal eyelets, six short dark conical forefoot spikes. No modern foam, stripes, logos or text. Wide landscape atlas, ample transparent gap between shoes: LEFT HALF a large three-quarter side view toe pointing LEFT, opening visible, sole spikes visible below; RIGHT HALF the identical shoe from opposite three-quarter side, toe pointing RIGHT, also sole spikes below. Each shoe complete and detached with generous transparent padding, no cast background shadow, no overlap. Crisp realistic leather detail and neutral studio lighting. Actual transparent background.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project asset; no claim of archival authenticity or independently cleared public-figure likeness rights
- **Modifications:** Original PNG retained byte-for-byte. Runtime cropped atlas parts and editable lighting/compositing.
- **SHA-256:** `3300cd86a3979f226428d1b884dcbf687a54a999b45de2004e948c304d3194f3`
- **Bytes:** 1402252

### asset-assets-training-ground-v74-png

- **Label:** training ground · V74 illustrative reconstruction
- **File:** `assets/training-ground-v74.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool; current user-authorized documentary reconstruction
- **Source location / method:** Use case: historical-scene. Asset type: wide landscape photographic environment plate for layered 1930s athletics documentary. Empty flat gray cinder training ground in foreground, subtle converging pale running-track lines and rough dusty texture; dark distant treeline across frame at about top 30 percent, soft overcast pale gray sky above. No people, shoes, buildings, text or objects. Camera low seated-person eye level, horizon high so ground takes lower 70 percent. Photorealistic monochrome, soft natural light, detailed foreground texture, restrained depth blur only far treeline. 16:9 wide composition. This is a newly generated illustrative environment.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project asset; no claim of archival authenticity or independently cleared public-figure likeness rights
- **Modifications:** Original PNG retained byte-for-byte. Runtime cropped atlas parts and editable lighting/compositing.
- **SHA-256:** `974af8a4e5eab83077895fb9a2ddd8eebdec30c4908817321faa2a1b5374fdbb`
- **Bytes:** 2826174

### asset-assets-transition-cloud-generation-v44-json

- **Label:** Transition Cloud Generation V44
- **File:** `assets/transition-cloud-generation-v44.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `3c6bf2a455c96c5cd56d0bc7bf9abadefc40fa049750272637d83397e8ebad6a`
- **Bytes:** 843

### asset-assets-transition-cloud-interior-v44-png

- **Label:** Volumetric cloud passage texture
- **File:** `assets/transition-cloud-interior-v44.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-df9598e9-c4d8-4125-bc0b-de4e653db7f6.png
- **Source location / method:** Generated neutral photographic cloud illustration. Exact prompt in assets/transition-cloud-generation-v44.json.
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for user-authorized project. No archival authenticity claim.
- **Modifications:** Original bytes retained. Runtime tint, mask, drift and scale are separately editable.
- **SHA-256:** `e344ac2c2ea82c036d62fa14e939a4e7791ca22754138b12c3daf666fb7568ce`
- **Bytes:** 1887484

### asset-assets-trial-environments-audience-v82-png

- **Label:** trial-environments-audience-v82.png
- **File:** `assets/trial-environments-audience-v82.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Edited environment candidate, only courtroom quadrant activated. Rear audience added, empty witness area preserved. Original source atlas retained. Exact prompts retained in docs/generation-record-v82.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project reconstruction, not historical evidence
- **Modifications:** Original bytes retained; native Canvas atlas quadrant extraction, transforms and alpha composition
- **SHA-256:** `7301336516af41892a3e107550aad2de43be2ebbcbd58cff4c4fee90e703e02d`
- **Bytes:** 2144108

### asset-assets-trial-environments-v82-png

- **Label:** trial-environments-v82.png
- **File:** `assets/trial-environments-v82.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Generated empty interrogation/cell/camp/court atlas, original retained. Court quadrant retained as inactive alternative; other three selected. Exact prompts retained in docs/generation-record-v82.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project reconstruction, not historical evidence
- **Modifications:** Original bytes retained; native Canvas atlas quadrant extraction, transforms and alpha composition
- **SHA-256:** `195d343be365dd25f9656916eb6cee3812948ee24f3a8ef5c59b444ea17b813c`
- **Bytes:** 2347839

### asset-assets-trial-fire-v82-png

- **Label:** Photographed fire16-frame atlas
- **File:** `assets/trial-fire-v82.png`
- **Usage label:** `derived-recorded`
- **Origin / exact source:** Project asset real-fire.mp4; registered origin https://www.pexels.com/video/fire-on-black-background-11977692/
- **Source location / method:** Parent sha256 d1b1777cf6f4727f51ac33770c27dbe71795843f679a1e04aeb52214af1e5014; prior source locator retained in scripts/build-asset-register.py. No new third-party media downloaded.
- **Author / brand owner:** Original clip author not recorded in retained metadata
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Reused registered project footage; prior source record retained, license not newly audited
- **Modifications:** Temporal extraction and resize/tile via FFmpeg; black background retained for screen blending
- **SHA-256:** `649e74a48bc5c17e5d59c1efd542980ec86f2600b28d1b7973d50478040d1b5e`
- **Bytes:** 1230504

### asset-assets-trial-people-a-v82-png

- **Label:** trial-people-a-v82.png
- **File:** `assets/trial-people-a-v82.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Generated independent rear torso, writing pose, prisoner gripping invisible bars, and official group. Original alpha preserved, no hand-drawn polygon contour replacement. Exact prompts retained in docs/generation-record-v82.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project reconstruction, not historical evidence
- **Modifications:** Original bytes retained; native Canvas atlas quadrant extraction, transforms and alpha composition
- **SHA-256:** `24d360db6470b5b6403ab601f89cc23f06e3a0806ca1dae3afd38e26216bc74a`
- **Bytes:** 2302478

### asset-assets-trial-people-b-v82-png

- **Label:** trial-people-b-v82.png
- **File:** `assets/trial-people-b-v82.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in imagegen2026-11-01
- **Source location / method:** Generated camp pose, two courtroom witnesses and monochrome fictional crowd photograph. Original alpha retained. These are illustrations, not authenticated archive. Exact prompts retained in docs/generation-record-v82.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project reconstruction, not historical evidence
- **Modifications:** Original bytes retained; native Canvas atlas quadrant extraction, transforms and alpha composition
- **SHA-256:** `3e2699e19efdf788d71417c18d1bd0f2d031a12e02efe016c3fbd60a83ffb0ae`
- **Bytes:** 2493215

### asset-assets-village-boys-v38-png

- **Label:** Rudi and Adi · fictional boys cutout
- **File:** `assets/village-boys-v38.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; assets/village-generation-briefs-v38.json
- **Source location / method:** Text-only generation guided by reviewed source-video composition; no source-image pixels provided to generator. Exact prompt: Use case: historical-scene. Asset type: transparent foreground cutout for an editable cinematic documentary collage, early 1900s Bavaria. Two fictional European boys, about 8 and 10, standing close together, visible head to mid-thigh, entirely contained with generous margins. Left boy tousled blond hair, dark worn wool jacket and open collar, looking curiously to camera right. Right boy light brown hair, brown flat cap, brown wool jacket, looking slightly upward with thoughtful expression. Natural human anatomy, convincing hands, subtle cool daylight from upper left, textured realistic cinematic photographic illustration, muted slate brown palette. The pair occupy central 70% of image, equal eye level, separate readable silhouettes, no environment, no window, no lettering or labels, no watermark. Real transparent alpha background; retain opaque clothing and hair. Original illustrative characters, not archival evidence. Landscape 3:2 composition.
- **Author / brand owner:** Project generation record; video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated project illustrations for the user-authorized template; video/reference owner and rights beyond this task not independently verified. Illustrative fictional characters and locations, not archival documentation.
- **Modifications:** All four generated PNGs copied byte-for-byte. Runtime transforms, grading, focus, opacity and compositing only. Boys retain generated alpha; labels and town title rendered separately.
- **SHA-256:** `7d38fdf389990e1a85a6ea8ecb2e8d7263720b0ea8ca216ee00d1393007a6347`
- **Bytes:** 2429629
- **Related provenance records:** `assets/village-generation-briefs-v38.json`

### asset-assets-village-generation-briefs-v38-json

- **Label:** Village generation prompts and reference provenance
- **File:** `assets/village-generation-briefs-v38.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Exact prompts, source video IDs/hashes, output hashes, approval, transformations and permission status
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `9a803e572bd8c388182b07b2296e785f9a42a2d54e1e5d51492c530351e25771`
- **Bytes:** 7209
- **Related provenance records:** `assets/village-generation-briefs-v38.json`

### asset-assets-village-seamstress-v38-png

- **Label:** Woman and blouse · illustrative scene
- **File:** `assets/village-seamstress-v38.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; assets/village-generation-briefs-v38.json
- **Source location / method:** Text-only generation guided by reviewed source-video composition; no source-image pixels provided to generator. Exact prompt: Use case: historical-scene. Asset type: widescreen 16:9 cinematic background plate for early 1900s Bavarian family documentary collage. Fictional adult European woman in her thirties, brown hair pinned back, simple ivory long-sleeved blouse and dark charcoal apron, standing at left-center in a dim timber domestic sewing room. She smiles softly while inspecting a cream cotton blouse on a wooden hanger, held at right-center; her two anatomically correct hands gently arrange sleeve and collar. Blouse entirely visible with fine gathered fabric and small buttons; no printed pattern. Framing head to waist with generous top and side margins, the woman and hanger distinct, softly lit from tall window at left, warm ivory highlights and umber interior shadows. Shelves with folded cloth and a few hanging garments blur behind her. Realistic cinematic photographic illustration, shallow depth of field, tactile fabrics, gentle peripheral softness, muted historical colors. No text, logo, watermark, modern objects. Original illustrative characters, not archival evidence.
- **Author / brand owner:** Project generation record; video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated project illustrations for the user-authorized template; video/reference owner and rights beyond this task not independently verified. Illustrative fictional characters and locations, not archival documentation.
- **Modifications:** All four generated PNGs copied byte-for-byte. Runtime transforms, grading, focus, opacity and compositing only. Boys retain generated alpha; labels and town title rendered separately.
- **SHA-256:** `3efc3d1136061d665c94e0c3baa2b00328fbdf522c96c2ef8bac95436732cc9e`
- **Bytes:** 2192658
- **Related provenance records:** `assets/village-generation-briefs-v38.json`

### asset-assets-village-town-v38-png

- **Label:** Herzogenaurach · illustrative town square
- **File:** `assets/village-town-v38.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; assets/village-generation-briefs-v38.json
- **Source location / method:** Text-only generation guided by reviewed source-video composition; no source-image pixels provided to generator. Exact prompt: Use case: historical-scene. Asset type: widescreen 16:9 background plate for an editable cinematic documentary collage. An empty Bavarian town square around 1905, inspired by Herzogenaurach: tall half-timbered plaster houses frame both sides, a stone gate tower with pointed roof at center distance, cobbled street receding to central archway. Slightly wide-angle low street-level view, architectural perspective, large dramatic blue sky with white clouds occupying upper third. Cool daylight, muted slate timber and warm cream plaster, softly vignetted edges, realistic photographic illustration with tactile period textures. Clear empty central square and no people so foreground characters can be composited separately. No modern vehicles, signage, lettering, logos, watermark, no baked title. Original illustration, not archival evidence.
- **Author / brand owner:** Project generation record; video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated project illustrations for the user-authorized template; video/reference owner and rights beyond this task not independently verified. Illustrative fictional characters and locations, not archival documentation.
- **Modifications:** All four generated PNGs copied byte-for-byte. Runtime transforms, grading, focus, opacity and compositing only. Boys retain generated alpha; labels and town title rendered separately.
- **SHA-256:** `a01f1254bb09ee6eb2a1718fdbdad72dcc0ef0225720eb5ed728fe9be035e0a2`
- **Bytes:** 3102399
- **Related provenance records:** `assets/village-generation-briefs-v38.json`

### asset-assets-village-workshop-v38-png

- **Label:** Shoemaker workshop · illustrative scene
- **File:** `assets/village-workshop-v38.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen.imagegen; assets/village-generation-briefs-v38.json
- **Source location / method:** Text-only generation guided by reviewed source-video composition; no source-image pixels provided to generator. Exact prompt: Use case: historical-scene. Asset type: widescreen 16:9 cinematic background plate for early 1900s Bavarian shoemaking documentary collage. Close medium view of a fictional male shoemaker at a wooden bench; his cropped cream rolled-sleeve shirt and dark apron torso occupy the LEFT third, head mostly above top edge. His anatomically convincing hands work on one dark brown leather lace-up low shoe on the bench at lower center-right, toe pointing right. Shoe fully visible, realistic stitching, laces, rounded toe, no branding. Long softly blurred artisan workshop recedes to the right, repeated tall glowing windows, wooden tools and lasts, warm ivory daylight with deep umber shadows. Tactile photographic realism, shallow depth of field, subtle edge softness, subdued film grain. Composition leaves central shoe readable for slow camera movement. No modern machinery, text, logos, watermark. Original illustrative scene, not archival documentation.
- **Author / brand owner:** Project generation record; video/reference owner not independently established
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated project illustrations for the user-authorized template; video/reference owner and rights beyond this task not independently verified. Illustrative fictional characters and locations, not archival documentation.
- **Modifications:** All four generated PNGs copied byte-for-byte. Runtime transforms, grading, focus, opacity and compositing only. Boys retain generated alpha; labels and town title rendered separately.
- **SHA-256:** `b1faa063842d3bf25388b426d8b80e74a2fc5308a3222fa59de61c6973f38e90`
- **Bytes:** 2327744
- **Related provenance records:** `assets/village-generation-briefs-v38.json`

### asset-assets-visual-generation-v61-json

- **Label:** Visual Generation V61
- **File:** `assets/visual-generation-v61.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `2a202f185ff791fe9fc40664d877f13dbd3617fc531207878063afd955ff0bdb`
- **Bytes:** 2685

### asset-assets-walk-rig-retention-v60-json

- **Label:** Walk Rig Retention V60
- **File:** `assets/walk-rig-retention-v60.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `d7fa61e0b6b8f38ad2c9d180f6675f6085853628d4214d2ea6c97ac55176f95b`
- **Bytes:** 1096

### asset-assets-walk-rig-retention-v61-json

- **Label:** Walk Rig Retention V61
- **File:** `assets/walk-rig-retention-v61.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `c8714af353fa82a1411d6161c004d65c0a2e03f812b1fd8801b19f7b265ee89f`
- **Bytes:** 860

### asset-assets-walker-generation-v60-json

- **Label:** Walker Generation V60
- **File:** `assets/walker-generation-v60.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `f08a3145ed115c1aff84906928db70545095253b7a32f6181148d17dcb5c3477`
- **Bytes:** 2839

### asset-assets-walker-parts-atlas-v60-png

- **Label:** Photographic articulated walker · nine separated source parts
- **File:** `assets/walker-parts-atlas-v60.png`
- **Usage label:** `generated`
- **Origin / exact source:** image_gen.imagegen with project reference salvage-searcher-v58.png
- **Source location / method:** Same gray-coated searcher reconstructed into torso, head, coat skirt, thigh, shin, boot, upper sleeve and two forearms. Separate meshes, joint posing and replacement parts.
- **Author / brand owner:** AI-generated project artwork
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Project-authorized creation; no historical likeness or archival provenance asserted.
- **Modifications:** Original bytes retained; meshes, alpha cleanup and crops operate at runtime.
- **SHA-256:** `1821abe53b305a5efed17d06d95588b949ad88a0718b2d13edf018a258f0ae09`
- **Bytes:** 1685916

### asset-assets-war-aftermath-battlefield-original-v52-preview-jpg

- **Label:** Battlefield aftermath video · original retained · preview
- **File:** `assets/war-aftermath-battlefield-original-v52-preview.jpg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User upload gemini_generated_video_4f9f3231.mp4; Library libfile_d69c05c1e140819184faf998d0690338
- **Source location / method:** User-described AI-generated footage from OmniFlash/Gemini. Generation service/model and exact run settings not independently verified. Original audio retained in source but muted by template.
- **Author / brand owner:** User-supplied AI generation; underlying reference authorship not established.
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized inclusion in this template; independent generation inputs and broader rights not verified.
- **Modifications:** Frame at1second, resized480×270; battlefield preview also uses the approved1184×666 crop at(0,8).
- **SHA-256:** `806dc587dad3538573bbcc7fc0f950f4340c17480bd680e3b9357a857a9094cf`
- **Bytes:** 11884

### asset-assets-war-aftermath-battlefield-original-v52-mp4

- **Label:** Battlefield aftermath video · original retained
- **File:** `assets/war-aftermath-battlefield-original-v52.mp4`
- **Usage label:** `user-reference`
- **Origin / exact source:** User upload gemini_generated_video_4f9f3231.mp4; Library libfile_d69c05c1e140819184faf998d0690338
- **Source location / method:** User-described AI-generated footage from OmniFlash/Gemini. Generation service/model and exact run settings not independently verified. Original audio retained in source but muted by template.
- **Author / brand owner:** User-supplied AI generation; underlying reference authorship not established.
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized inclusion in this template; independent generation inputs and broader rights not verified.
- **Modifications:** Original MP4 copied byte-for-byte. Trim, source speed and crop are runtime parameters; no source re-encoding.
- **SHA-256:** `371d4662ffb0f3cbd5c1112c8968c7ae6ce47f5c34822e314aab7be104d2e44b`
- **Bytes:** 2404145

### asset-assets-war-aftermath-convoy-original-v52-preview-jpg

- **Label:** Ruined-street convoy video · original retained · preview
- **File:** `assets/war-aftermath-convoy-original-v52-preview.jpg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User upload gemini_generated_video_a2ae86aa.mp4; Library libfile_ec3df8a86f2081919628d0d6fcd4ce28
- **Source location / method:** User-described AI-generated footage from OmniFlash/Gemini. Generation service/model and exact run settings not independently verified. Original audio retained in source but muted by template.
- **Author / brand owner:** User-supplied AI generation; underlying reference authorship not established.
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized inclusion in this template; independent generation inputs and broader rights not verified.
- **Modifications:** Frame at1second, resized480×270; battlefield preview also uses the approved1184×666 crop at(0,8).
- **SHA-256:** `14afe263296b21c7210c61dbfcba04c63f0dfbb877243b3382b7c0a7b795b175`
- **Bytes:** 16082

### asset-assets-war-aftermath-convoy-original-v52-mp4

- **Label:** Ruined-street convoy video · original retained
- **File:** `assets/war-aftermath-convoy-original-v52.mp4`
- **Usage label:** `user-reference`
- **Origin / exact source:** User upload gemini_generated_video_a2ae86aa.mp4; Library libfile_ec3df8a86f2081919628d0d6fcd4ce28
- **Source location / method:** User-described AI-generated footage from OmniFlash/Gemini. Generation service/model and exact run settings not independently verified. Original audio retained in source but muted by template.
- **Author / brand owner:** User-supplied AI generation; underlying reference authorship not established.
- **Retrieved / created:** 2026-10-29
- **License / permission status:** User-authorized inclusion in this template; independent generation inputs and broader rights not verified.
- **Modifications:** Original MP4 copied byte-for-byte. Trim, source speed and crop are runtime parameters; no source re-encoding.
- **SHA-256:** `1eabcba8992c06b79f2e494f6718f95088f17332800da4da6e9077d816d989e3`
- **Bytes:** 3154853

### asset-assets-war-brothers-sunset-v43-png

- **Label:** Wartime composite · rejected scale and layering study
- **File:** `assets/war-brothers-sunset-v43.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen; exact prompt and original output in assets/war-generation-brief-v43.json
- **Source location / method:** Rejected: framing, apparent age/scale and single-composite structure do not match the reference. User requests parallax and separate sky, sun/glow, figures and fire. Only two figures are identifiable in the available ending frames; requested third placement remains unresolved.
- **Author / brand owner:** AI-generated project illustration
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for this user-authorized project; archival authenticity and wider clearance not asserted.
- **Modifications:** Original output retained byte-for-byte; not activated for the revised scene.
- **SHA-256:** `652a4154e5d686408196670aa290d5e5caeeb87eaec8013a40895df28a519bbe`
- **Bytes:** 2045801

### asset-assets-war-front-boy-v43-png

- **Label:** Recovered close blond foreground boy
- **File:** `assets/war-front-boy-v43.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** ChatGPT Library libfile_9d8b0cbb19dc8191bf757adcc858d26c
- **Source location / method:** See assets/war-layers-generation-v43.json for available generation records. Boys recovered unchanged; original prompts unavailable.
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for user-authorized project; no archival authenticity or third-party clearance claim.
- **Modifications:** Original PNG retained byte-for-byte; independent runtime position, size, travel and focus.
- **SHA-256:** `979f498128258b6fe99aaac6905b3ae49d9b8d2802edba47379a0a642ac8dc54`
- **Bytes:** 2217094

### asset-assets-war-generation-brief-v43-json

- **Label:** Wartime rejected candidate · exact generation prompt
- **File:** `assets/war-generation-brief-v43.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Exact project generation record
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `fddf738be5f4c37a9e2df4d603b8981d8a61050fddd562bcaa1115a1bda55185`
- **Bytes:** 1595

### asset-assets-war-landscape-v43-png

- **Label:** Ruined landscape alpha layer
- **File:** `assets/war-landscape-v43.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-5ae8394c-d489-41a4-950c-77c16b103902.png
- **Source location / method:** See assets/war-layers-generation-v43.json for available generation records. Boys recovered unchanged; original prompts unavailable.
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for user-authorized project; no archival authenticity or third-party clearance claim.
- **Modifications:** Original PNG retained byte-for-byte; independent runtime position, size, travel and focus.
- **SHA-256:** `a685f57bc4cb626fdf7d6a2258bc0e3862b24ef0654f3dc1f12906701c4c45a9`
- **Bytes:** 1901192

### asset-assets-war-layers-generation-v43-json

- **Label:** War Layers Generation V43
- **File:** `assets/war-layers-generation-v43.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `f6f71a607c85beeffaa69f05cc613dbe51691688bd8504eb32995f35e40d9166`
- **Bytes:** 1685

### asset-assets-war-rear-boy-v43-png

- **Label:** Recovered rear boy
- **File:** `assets/war-rear-boy-v43.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** ChatGPT Library libfile_cbbff1b6368481918afebf7c18f1c9f8
- **Source location / method:** See assets/war-layers-generation-v43.json for available generation records. Boys recovered unchanged; original prompts unavailable.
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for user-authorized project; no archival authenticity or third-party clearance claim.
- **Modifications:** Original PNG retained byte-for-byte; independent runtime position, size, travel and focus.
- **SHA-256:** `7c6b85a3890c42a6df9f47ab51235a90673ddbbbedeb56380a08f3c14eccf83d`
- **Bytes:** 1834104

### asset-assets-war-sky-v43-png

- **Label:** Pale sky and peach clouds
- **File:** `assets/war-sky-v43.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** image_gen.imagegen / exec-da3a0fcb-9628-415b-9cbf-6123ff556315.png
- **Source location / method:** See assets/war-layers-generation-v43.json for available generation records. Boys recovered unchanged; original prompts unavailable.
- **Author / brand owner:** AI generated for this project
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Generated for user-authorized project; no archival authenticity or third-party clearance claim.
- **Modifications:** Original PNG retained byte-for-byte; independent runtime position, size, travel and focus.
- **SHA-256:** `fec56f6f92782f5b2776e75b755230e46ce4f490e6339a54994c04c24e19981f`
- **Bytes:** 1593231

### asset-assets-war-street-v62-png

- **Label:** Asymmetric war street with dark dirt road
- **File:** `assets/war-street-v62.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** generated_images/exec-414ff738-173d-4b46-8b5e-50b6d050f5a0.png
- **Source location / method:** Use only left reference half of image(20261029-114505).png. Clean monochrome bomb-devastated European street, no person/explosion/smoke/electrical poles/wires. Different irregular multi-storey shells each side, black interiors, exposed side walls, flat dark dirt road, rubble mostly at edges. Vanishing point x50%, y45%. Transparent sky only, opaque ground/windows, no red/text.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated illustration for this user-authorized project; not archival evidence. Reference image reuse rights beyond this task unverified.
- **Modifications:** Original PNG retained byte-for-byte; runtime transforms, color, crop and masks only.
- **SHA-256:** `42b8f7273ca97aeef309d1fa6fa7580e5eae53d2e0f239dc546e267162b922a1`
- **Bytes:** 3297397

### asset-assets-wartime-bleachers-v75-png

- **Label:** wartime bleachers v75 · illustrative
- **File:** `assets/wartime-bleachers-v75.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool · current authorized reconstruction
- **Source location / method:** Empty 1930s German stadium concrete bleachers at ground level facing horizontal worn pale gray rows; no aerial arena, people, text or emblems; eye height near seated head, cool daylight, 16:9 photographic historical illustration.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project illustration; not archival evidence.
- **Modifications:** Replaces aerial stadium quadrant for this sequence; original candidate retained.
- **SHA-256:** `01a8c675276c86a2322e3df3f0fd88d4ef69be4258f267f9c8ee031d4afccc23`
- **Bytes:** 3147501

### asset-assets-wartime-generation-record-v75-json

- **Label:** Wartime Generation Record V75
- **File:** `assets/wartime-generation-record-v75.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `610ad7a19d29c2c7ee85be9d0fef47b41af1dda0cd4362f747dd2a8f3a677ab1`
- **Bytes:** 5944

### asset-assets-wartime-objects-v75-png

- **Label:** wartime objects v75 · illustrative
- **File:** `assets/wartime-objects-v75.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool · current authorized reconstruction
- **Source location / method:** Transparent 2x2 atlas: gray left-facing 1940s propeller aircraft, monochrome German factory building, seated stern man in dark work jacket, close stern man with rectangular black glasses. Fictional documentary illustration, no aircraft Nazi markings.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project illustration; not archival evidence.
- **Modifications:** Runtime quadrant crops and transforms; aircraft landing gear and historical likeness differ from reference.
- **SHA-256:** `90cb87746ecad6522823a435c269e967b1301cc817fc49e0bf26a85d7d23de20`
- **Bytes:** 2300101

### asset-assets-wartime-people-v75-png

- **Label:** wartime people v75 · illustrative
- **File:** `assets/wartime-people-v75.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool · current authorized reconstruction
- **Source location / method:** Remove gray backgrounds and dividers from original four-quadrant portrait atlas; preserve groups, faces, clothing, hands and layout; transparent empty background and clean alpha.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project illustration; not archival evidence.
- **Modifications:** Generated alpha edit of wartime-portraits-candidate-v75.png; runtime quadrant crops, independent transforms, grayscale and light.
- **SHA-256:** `81e524efca25a732ea46cb247e2053dcb44ff1fc2fa7df14cf676efbee832606`
- **Bytes:** 2595967

### asset-assets-wartime-plates-v75-png

- **Label:** wartime plates v75 · illustrative
- **File:** `assets/wartime-plates-v75.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool · current authorized reconstruction
- **Source location / method:** Four-quadrant generated cinematic industrial hall, stadium, red wartime sky and half-timbered house plate atlas.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project illustration; not archival evidence.
- **Modifications:** Initial environment atlas; stadium quadrant superseded by eye-level bleachers.
- **SHA-256:** `9f9b9af15e186120d6c3962a23b690cdc4526da837c215fabfd017661c277382`
- **Bytes:** 2610981

### asset-assets-wartime-portraits-candidate-v75-png

- **Label:** wartime portraits candidate v75 · illustrative
- **File:** `assets/wartime-portraits-candidate-v75.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen tool · current authorized reconstruction
- **Source location / method:** Four-quadrant fictional 1940s portraits: two brothers, smiling man with arms open, factory worker and worried family.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated project illustration; not archival evidence.
- **Modifications:** Original opaque candidate retained unchanged; transparent edit selected.
- **SHA-256:** `173829aa7182da0c8f48042924dc60e8099f55db701386f7827049ceef6f5a47`
- **Bytes:** 2402273

### asset-assets-wisps-png

- **Label:** Wisps
- **File:** `assets/wisps.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `56a6da9fb8c2aa54cb15ba12179ac3bbfd119411480181526b487888ccec6fcf`
- **Bytes:** 1934523

### asset-assets-woman-blouse-hem-gesture-poster-v42-png

- **Label:** Hand gesture video · extracted first-frame poster
- **File:** `assets/woman-blouse-hem-gesture-poster-v42.png`
- **Usage label:** `user-reference`
- **Origin / exact source:** User upload woman-blouse-hem-gesture.mp4; ChatGPT Library libfile_fe4c6a47ddb081918cd98411a05af753
- **Source location / method:** User-supplied image-to-video result. Upstream generator, model and exact generation prompt are not supplied. Do not infer an archival or filmed source.
- **Author / brand owner:** User-supplied; upstream AI service unknown
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Joshua explicitly authorized integration in this project. External redistribution and upstream AI provider terms have not been independently established.
- **Modifications:** First decoded video frame extracted with FFmpeg and resized to 960×540 as a PNG poster; original video retained.
- **SHA-256:** `5ec6116841f6b998d7d9eef291d92bea8fed24ff5c3e466b0a6910da6f3c2fdd`
- **Bytes:** 724232

### asset-assets-woman-blouse-hem-gesture-v42-mp4

- **Label:** Woman lifting blouse hem · supplied video
- **File:** `assets/woman-blouse-hem-gesture-v42.mp4`
- **Usage label:** `user-reference`
- **Origin / exact source:** User upload woman-blouse-hem-gesture.mp4; ChatGPT Library libfile_fe4c6a47ddb081918cd98411a05af753
- **Source location / method:** User-supplied image-to-video result. Upstream generator, model and exact generation prompt are not supplied. Do not infer an archival or filmed source.
- **Author / brand owner:** User-supplied; upstream AI service unknown
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Joshua explicitly authorized integration in this project. External redistribution and upstream AI provider terms have not been independently established.
- **Modifications:** Original MP4 retained byte-for-byte. Runtime muted playback, trim, speed and frame composition are non-destructive.
- **SHA-256:** `5b449b053e6c9bb2d40032f073080c9c7883b343900308ab4f281884b7e8fbb8`
- **Bytes:** 1755926

### asset-assets-woman-motion-track-v40-json

- **Label:** Woman movement · measured curve recipe
- **File:** `assets/woman-motion-track-v40.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Project-authored motion or retention metadata; no reference video pixels
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `28ed0a1071e5d6d03b746710ca434edd68db89f656ea16ec3e2b204ece2f5a02`
- **Bytes:** 9418

### asset-assets-wooden-shelf-v62-png

- **Label:** Wooden laundry shelf with contents
- **File:** `assets/wooden-shelf-v62.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** generated_images/exec-6e747b20-ce17-4e5d-a398-8f7285c62580.png
- **Source location / method:** Photorealistic isolated narrow rough honey-brown three-tier wooden laundry shelf, slightly turned front view, clay cup and gray folded cloth top, shallow wicker basket middle, folded fabric lower. Aged wood, light from left, true transparent background/gaps. No wall/floor/people/text.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated illustration for this user-authorized project; not archival evidence. Reference image reuse rights beyond this task unverified.
- **Modifications:** Original PNG retained byte-for-byte; runtime transforms, color, crop and masks only.
- **SHA-256:** `55d4aac0e8c0549e0eeee87642575dc9f72e8a86d978f0171300e2d870fa1c7d`
- **Bytes:** 2453355

### asset-assets-worker-portrait-v76-png

- **Label:** worker portrait v76 · illustrative
- **File:** `assets/worker-portrait-v76.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen generation in this authorized conversation; saved original libfile_99736627dba481918df319c6bad8a683
- **Source location / method:** Use case historical-scene. Transparent photographic sprite atlas TWO equal vertical columns with generous empty margins separating figures. LEFT: fictional European factory man age45, swept-back light brown hair, NO glasses, olive-brown open-collar workshirt with sleeves rolled up, standing hands on hips, stern expression, visible from head to mid thighs, circa1940. RIGHT: different fictional European businessman age55, short gray hair combed back, thick rectangular black glasses, clean-shaven strong jaw, dark brown suit jacket, seated leaning toward camera, close portrait head shoulders upper torso with both eyes clearly visible. Warm restrained cinematic lighting compatible with factory windows. Photorealistic individual cutouts on actual transparent background, no room or props, no text. Left person entirely in left half, right person entirely in right half. Fictional historical illustration, no claim of authentic identity.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration, not archival evidence.
- **Modifications:** Original bytes retained; runtime calibrated crops, alpha trim and2.5D transforms.
- **SHA-256:** `e6183d12894c576b14aadb41981322837adfda98688009d8a700a9a223da51cb`
- **Bytes:** 1903094

### asset-assets-workshop-clean-v72-png

- **Label:** workshop clean v72
- **File:** `assets/workshop-clean-v72.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; originating ChatGPT project conversation
- **Source location / method:** Empty period shoe workshop, side benches and belt machinery, windows right, central floor. See continuation-generation-record-v72.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Generated illustrative project asset; not historical evidence. Source reference restrictions are not independently cleared.
- **Modifications:** No file-pixel modifications; runtime alpha crop, placement, color and focus only.
- **SHA-256:** `c3eab31b8a2e74465d14b22850a637aca4cc08bacf94db97078c3ad8e7c73488`
- **Bytes:** 2615398

### asset-assets-workshop-depth-v76-png

- **Label:** workshop depth v76 · illustrative
- **File:** `assets/workshop-depth-v76.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen generation in this authorized conversation; saved original libfile_52d26b4e84248191b89e954a410d9ac3
- **Source location / method:** Use case historical-scene. Cinematic photorealistic EMPTY 1930s German shoe workshop interior, wide 16:9, eye-level one-point perspective down a long low-ceiling industrial hall. Repeated big arched windows on RIGHT wall admitting cool pale daylight, heavy timber ceiling beams and narrow metal columns in straight perspective toward distant central doorway. Long low orange-brown wooden workbenches and leather work surfaces on both sides, clear central floor aisle. Quiet smoky atmosphere, dark left side, desaturated blue-gray shadows and subtly warm wood, moderate low contrast, background slightly soft. Entire room empty of people, no portraits, no silhouettes, no fire, no text or symbols. Architectural plate for separately composited foreground people. Camera horizontal, no fisheye.
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Generated fictional project illustration, not archival evidence.
- **Modifications:** Original bytes retained; runtime calibrated crops, alpha trim and2.5D transforms.
- **SHA-256:** `07df47b6781f9cd9bdb6aac35327579fec67968c8c836e9c6a6ae8f167f0e9a3`
- **Bytes:** 2515810

### asset-assets-workshop-woman-generation-v48-json

- **Label:** Workshop Woman Generation V48
- **File:** `assets/workshop-woman-generation-v48.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `437aae178399c15661918936b404fee16afbcf95ce5472042d32b2d944584ffa`
- **Bytes:** 1276

### asset-assets-writing-desk-v72-png

- **Label:** writing desk v72
- **File:** `assets/writing-desk-v72.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image_gen; originating ChatGPT project conversation
- **Source location / method:** Dark oak period writing desk isolated with legs, papers, pen and ledger, no chair. See continuation-generation-record-v72.json.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Generated illustrative project asset; not historical evidence. Source reference restrictions are not independently cleared.
- **Modifications:** No file-pixel modifications; runtime alpha crop, placement, color and focus only.
- **SHA-256:** `40ce18af3fb0f095d8ed7e7c1a65dbb5bd4b827c99590eee1b54e2d3b9e81a32`
- **Bytes:** 2214161

### asset-assets-young-man-v2-png

- **Label:** Young foreground man · alpha cutout
- **File:** `assets/young-man-v2.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `937fd38f7da7afc64c4bbc41231ca36b8abae9aac7f2e156fde795828097b036`
- **Bytes:** 1747621

### asset-assets-young-man-png

- **Label:** Young Man
- **File:** `assets/young-man.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `448a63f20626448486272b7b9ce73a982b8e4be97c7b8a44f968558921e1b9af`
- **Bytes:** 1633244

### asset-assets-young-portraits-v65-png

- **Label:** young portraits v65
- **File:** `assets/young-portraits-v65.png`
- **Usage label:** `ai-generated`
- **Origin / exact source:** OpenAI image generation; exact prompt and references in assets/chapter-generation-v65.json
- **Source location / method:** Independent chapter source: young portraits v65. Atlas regions are separate source slots; replacements use the whole new image.
- **Author / brand owner:** AI-generated project asset
- **Retrieved / created:** 2026-10-29
- **License / permission status:** Generated project asset; no claim of original reference ownership.
- **Modifications:** Original bytes retained. Runtime atlas crop, alpha threshold 110, tight alpha bounds, lighting and placement.
- **SHA-256:** `9472a13989f17921467bf29b038899deba34b08b4ce96b04feef24fa8cff9465`
- **Bytes:** 2458220

### asset-assets-young-searcher-generation-v64-json

- **Label:** Young Searcher Generation V64
- **File:** `assets/young-searcher-generation-v64.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `8b02c7163d31bade887ed3ff0604d204107faa7af1444d2d2a843785b950ec67`
- **Bytes:** 1280

### asset-assets-young-searcher-v64-png

- **Label:** Young boy searching with a flashlight
- **File:** `assets/young-searcher-v64.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** generated_images/exec-88474f32-4b8d-48f5-9302-0d687bac783d.png
- **Source location / method:** Exact built-in generation prompt, input and original output hash: dist/assets/young-searcher-generation-v64.json
- **Author / brand owner:** Project AI generation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Generated project illustration; not historical evidence.
- **Modifications:** Byte-exact generated RGBA; renderer calibrated masks, grayscale and alpha threshold.
- **SHA-256:** `bafb4df72a412a3fb5ca39fa876f64e3bad8626253930d04945c0b8ce7c19aa5`
- **Bytes:** 1828984

### asset-atmosphere-engine-js

- **Label:** Animated clouds, smoke & fog · path-driven billboards
- **File:** `atmosphere-engine.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** seeded procedural billow textures advected along arc-length-sampled paths; not a fluid simulation
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `c028b03a522e6b63a824b9e4dedf4f390e8fc612d573656b8523b9d4701ba8c4`
- **Bytes:** 2502

### asset-battle-motion-js

- **Label:** Glide & staggered firing · deterministic motion recipe
- **File:** `battle-motion.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** seeded event schedule, one/two flashes, cutout recoil and overlapping glide
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `fbd10dbedbd16351d654b7477e1398fa4e5cf04078f65a23aa5b0427adaf7fcf`
- **Bytes:** 1656

### asset-betrayal-director-js

- **Label:** betrayal-director.js
- **File:** `betrayal-director.js`
- **Usage label:** `project-authored`
- **Origin / exact source:** Approved V77 discrepancy corrections against supplied reference
- **Source location / method:** See IMPLEMENTATION-V77.md and exact factory/default/registry records. Earlier Chapter1 unchanged.
- **Author / brand owner:** Project authors
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Project-authored code; prior media origin unchanged
- **Modifications:** Project-authored deterministic source-local continuation and editable control integration. No third-party shader or source frames embedded. V76 authorized editable refinement; see IMPLEMENTATION-V76.md. V77 authorized dark-floor, silhouette, money-burst, propeller/bank/flash, factory zoom, worker entry and later atlas-crop correction.
- **SHA-256:** `3f9bbc92ed08c25ee2f055da6ab3dc58dc85686f0b74b0cccaf552e91b0b1916`
- **Bytes:** 12990

### asset-betrayal-sequence-js

- **Label:** betrayal-sequence.js
- **File:** `betrayal-sequence.js`
- **Usage label:** `project-authored`
- **Origin / exact source:** Approved V77 discrepancy corrections against supplied reference
- **Source location / method:** See IMPLEMENTATION-V77.md and exact factory/default/registry records. Earlier Chapter1 unchanged.
- **Author / brand owner:** Project authors
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Project-authored code; prior media origin unchanged
- **Modifications:** Project-authored deterministic source-local continuation and editable control integration. No third-party shader or source frames embedded. V76 authorized editable refinement; see IMPLEMENTATION-V76.md. V77 authorized dark-floor, silhouette, money-burst, propeller/bank/flash, factory zoom, worker entry and later atlas-crop correction.
- **SHA-256:** `a9ea42fa80e533ba54be6fbda97223dbf3148d6ac0add59a551868b7d65d70a3`
- **Bytes:** 27887

### asset-brand-marks-js

- **Label:** Brand Marks
- **File:** `brand-marks.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: brand-marks.js
- **Source location / method:** Canvas rendering of the registered official brand paths. Source geometry is copied from the registered SVGs; it is not original brand artwork.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Canvas rendering of the registered official brand paths. Source geometry is copied from the registered SVGs; it is not original brand artwork.
- **SHA-256:** `4c973244ea9577695ece44378392156330276a0b25e08161100d1f0a0410c92a`
- **Bytes:** 1962

### asset-brush-writing-js

- **Label:** Noir Brush / Ink / Chalk · pen-path alphabet
- **File:** `brush-writing.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** original procedural single-stroke alphabet; vector pen-path reveal
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `3057f0cef2b187e05df5c577482f5b60512a70ee4d7722937a8620cd90302090`
- **Bytes:** 4514

### asset-chapter-motion-js

- **Label:** Chapter Motion
- **File:** `chapter-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: chapter-motion.js
- **Source location / method:** Version 36 chapter defaults, subdued logo/glow values, per-shoe arrival offsets/durations and continuous depth travel. Retains v35 staggered arrivals and slow rotations. Timing is inferred from user references, not measured video tracks.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 36 chapter defaults, subdued logo/glow values, per-shoe arrival offsets/durations and continuous depth travel. Retains v35 staggered arrivals and slow rotations. Timing is inferred from user references, not measured video tracks.
- **SHA-256:** `3eef1420ebb8f5d13d0412de717ef0174da6e38b2593b2a7c64d0c7f615404ca`
- **Bytes:** 6309

### asset-chapter-shoes-js

- **Label:** Chapter Shoes
- **File:** `chapter-shoes.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: chapter-shoes.js
- **Source location / method:** Existing project-authored editable shoe last, upper, sole, laces and materials, extended in v46 with optional real cone spike geometry and a separately keyed mesh cache. Previous trainer styles remain unchanged. Not a scanned historic shoe or identified product.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Existing project-authored editable shoe last, upper, sole, laces and materials, extended in v46 with optional real cone spike geometry and a separately keyed mesh cache. Previous trainer styles remain unchanged. Not a scanned historic shoe or identified product.
- **SHA-256:** `e7986fc125d900985a4eb46f32d2523a04a9a17c85a9f1172e9b5cccd353b010`
- **Bytes:** 6974

### asset-checkpoint-director-js

- **Label:** Checkpoint Director
- **File:** `checkpoint-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: checkpoint-director.js
- **Source location / method:** V87 approved authored continuation: seated red rig, shared folded-arm coach, defocus, separate blue rig instance and camera crossing. Existing geometry/media reused; no recovered source rig.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V87 approved authored continuation: seated red rig, shared folded-arm coach, defocus, separate blue rig instance and camera crossing. Existing geometry/media reused; no recovered source rig.
- **SHA-256:** `d1393d5a92f59601875aab709576b9e30c87264acce51b77a3577538527b1b96`
- **Bytes:** 6302

### asset-checkpoint-sequence-js

- **Label:** Checkpoint Sequence
- **File:** `checkpoint-sequence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: checkpoint-sequence.js
- **Source location / method:** V87 approved authored continuation: seated red rig, shared folded-arm coach, defocus, separate blue rig instance and camera crossing. Existing geometry/media reused; no recovered source rig.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V87 approved authored continuation: seated red rig, shared folded-arm coach, defocus, separate blue rig instance and camera crossing. Existing geometry/media reused; no recovered source rig.
- **SHA-256:** `f6101477289755625d0862b5b3f46a46665134b3f2ef74049be276575813dc34`
- **Bytes:** 15142

### asset-checkpoint-stages-js

- **Label:** Checkpoint Stages
- **File:** `checkpoint-stages.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: checkpoint-stages.js
- **Source location / method:** V87 approved authored continuation: seated red rig, shared folded-arm coach, defocus, separate blue rig instance and camera crossing. Existing geometry/media reused; no recovered source rig.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V87 approved authored continuation: seated red rig, shared folded-arm coach, defocus, separate blue rig instance and camera crossing. Existing geometry/media reused; no recovered source rig.
- **SHA-256:** `d4134a64db294ebf4980066380c4f7f8227a11ebd48d32993a7e143da07f6397`
- **Bytes:** 847

### asset-chess-engine-js

- **Label:** Chessboard and pieces · Three.js geometry
- **File:** `chess-engine.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** procedural lathed solids, extruded knight/marks, depth-tested scene
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `c16e22aaf53de9a1a8ddece0220fab722399afbf975c797ce0c34d05601abc12`
- **Bytes:** 23163

### asset-city-engine-js

- **Label:** Image-on-3D-plane engine
- **File:** `city-engine.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** 2D image or video texture projected onto a perspective plane; not reconstructed buildings
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `ac012f267bf8468abbbf7bce0ff5af8432382ab41da150ea86183b0265988229`
- **Bytes:** 4027

### asset-commerce-bridge-js

- **Label:** Commerce bridge renderer
- **File:** `commerce-bridge.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project implementation commerce-bridge.js
- **Source location / method:** Cash motion, separately transformed street/subject/foreground shoulder and opaque room reveal.
- **Author / brand owner:** Project-authored
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped source code; no external model.
- **Modifications:** New deterministic renderer and controls.
- **SHA-256:** `a9cfd25cde2b8d4ea11796025aadac07198f700e3e2d057e19179267280600ec`
- **Bytes:** 8044

### asset-composition-core-js

- **Label:** Composition Core
- **File:** `composition-core.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: composition-core.js
- **Source location / method:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **SHA-256:** `38a6a99ae9a02c91f24d7de4843b0587a3789d4df9eb2cf4b58fd1258ed94597`
- **Bytes:** 33023

### asset-continuation-director-js

- **Label:** continuation-director.js
- **File:** `continuation-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project-authored source continuation-director.js
- **Source location / method:** Reversible V72 extension, missing-only defaults, layer/media controls, source clock navigation and MotionCore registration.
- **Author / brand owner:** Project implementation
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Project-scoped original implementation; reused image licenses remain separate
- **Modifications:** New V72 module
- **SHA-256:** `b4e293271c4f21a902d50d3ed463410904a32e50f378d888585c26141c9127d1`
- **Bytes:** 11406

### asset-continuation-objects-js

- **Label:** continuation-objects.js
- **File:** `continuation-objects.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project-authored source continuation-objects.js
- **Source location / method:** Project-authored boot proxy, curved photographic sphere, leather ball, historical emblem and coin meshes.
- **Author / brand owner:** Project implementation
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Project-scoped original implementation; reused image licenses remain separate
- **Modifications:** New V72 module
- **SHA-256:** `c2d422cc5e557ba06a5f24853a1ea27c9d19823f887d9b4ea0a7f620311447ac`
- **Bytes:** 6843

### asset-continuation-sequence-js

- **Label:** continuation-sequence.js
- **File:** `continuation-sequence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project-authored source continuation-sequence.js
- **Source location / method:** V72 source-landmarked layered continuation with duration overrides and editable media/object motion.
- **Author / brand owner:** Project implementation
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Project-scoped original implementation; reused image licenses remain separate
- **Modifications:** New V72 module
- **SHA-256:** `7c0b3cf383335d37bc654fdbd462514f2f8cd37d91be74f30b2774e4e3321104`
- **Bytes:** 22895

### asset-cutout-walk-js

- **Label:** Cutout Walk
- **File:** `cutout-walk.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: cutout-walk.js
- **Source location / method:** V61 original photographic source retained; alpha polygons separate shoulders, elbows and wrists. Clone-texture undercoat patch and calibrated torch tip follow the transforms. Not automatic retargeting.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V61 original photographic source retained; alpha polygons separate shoulders, elbows and wrists. Clone-texture undercoat patch and calibrated torch tip follow the transforms. Not automatic retargeting.
- **SHA-256:** `dcb1fca9e74bce970059d1ca73947d0260bf6d8c0c1a4ac1a78b31894afbaf76`
- **Bytes:** 6745

### asset-depot-chapter-js

- **Label:** Depot Chapter
- **File:** `depot-chapter.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: depot-chapter.js
- **Source location / method:** Version 36 moving right-side bent neon sweep, depth-ordered arriving shoes, entrance blur/scale and editable text easing. All optical effects are project-authored canvas code; existing registered brand silhouettes are retained.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 36 moving right-side bent neon sweep, depth-ordered arriving shoes, entrance blur/scale and editable text easing. All optical effects are project-authored canvas code; existing registered brand silhouettes are retained.
- **SHA-256:** `832b13b002ff1b53f5e0cc4202da4586ad7558838697be629834a76be4a67323`
- **Bytes:** 6082
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-depot-glass-js

- **Label:** Depot Glass
- **File:** `depot-glass.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: depot-glass.js
- **Source location / method:** Version 36 seeded tiled glass fractures with independently offset softbox/core reflections, local facet shear/refraction and portal-driven specular catches. Existing fall, gravity, gap and fracture controls are retained.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 36 seeded tiled glass fractures with independently offset softbox/core reflections, local facet shear/refraction and portal-driven specular catches. Existing fall, gravity, gap and fracture controls are retained.
- **SHA-256:** `2de5d5bcbd58586c4d7a39c0771c3370102a8affa116dbffb93ad54735217027`
- **Bytes:** 9009
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-depot-portal-js

- **Label:** Depot Portal
- **File:** `depot-portal.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: depot-portal.js
- **Source location / method:** Version 36 narrower project-authored beam with three soft light passes, smoothly advecting irregular edges and independent bloom. Earlier edge-on rotation precedes disappearance. No third-party image or SVG was added.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 36 narrower project-authored beam with three soft light passes, smoothly advecting irregular edges and independent bloom. Earlier edge-on rotation precedes disappearance. No third-party image or SVG was added.
- **SHA-256:** `ce09769231e0808cc00d128e66b6dd6569f1a7a25981eddd17e773fe5689c32b`
- **Bytes:** 2367
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-division-director-js

- **Label:** Division Director
- **File:** `division-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: division-director.js
- **Source location / method:** V84append-only native editor and MotionCore registration.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V84append-only native editor and MotionCore registration.
- **SHA-256:** `1ba541e5b658d9cc988533baecbb08ff0313093ea99840dc152e7acefa068f2f`
- **Bytes:** 6194

### asset-division-sequence-js

- **Label:** Division Sequence
- **File:** `division-sequence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: division-sequence.js
- **Source location / method:** V84project-authored source715–775, editable glyph transforms, nested scalloped and organic masks, near worker passage, town depth planes and independent map-label transform. Held poses, illustrative geography.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V84project-authored source715–775, editable glyph transforms, nested scalloped and organic masks, near worker passage, town depth planes and independent map-label transform. Held poses, illustrative geography.
- **SHA-256:** `57ce8126c4ef4768c8ceb13987c9bd2802bf95e2cd3e290f8cee0138f0b361f3`
- **Bytes:** 19908

### asset-easy-director-js

- **Label:** Easy Director
- **File:** `easy-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: easy-director.js
- **Source location / method:** Version 43 project-authored reusable routes, layered parallax reveal, simple source replacement and independent motion controls.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 43 project-authored reusable routes, layered parallax reveal, simple source replacement and independent motion controls.
- **SHA-256:** `65a06405d7725d2d3e8f3644247bdeb524303d9219e6e6e7058b5ad1c37d78fa`
- **Bytes:** 11933

### asset-effect-library-js

- **Label:** Effect Library
- **File:** `effect-library.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: effect-library.js
- **Source location / method:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **SHA-256:** `86d4fed9933175671d86221b0fa4d69ffc8b72968277bd126d9221709d40a55d`
- **Bytes:** 6072

### asset-exterior-scene-js

- **Label:** Exterior Scene
- **File:** `exterior-scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: exterior-scene.js
- **Source location / method:** Version 42 shared exterior compositor used through window panes and in the outdoor reveal. Existing registered buildings, clouds and boys assets are retained. A project-authored off-stage tiled floor fills portal overscan; it is an illustrative extension, not recovered source geometry.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 42 shared exterior compositor used through window panes and in the outdoor reveal. Existing registered buildings, clouds and boys assets are retained. A project-authored off-stage tiled floor fills portal overscan; it is an illustrative extension, not recovered source geometry.
- **SHA-256:** `ab6a94552b3385140eba3ed88b8a521ffe2bcc4c655d1ae08f54547dff383a35`
- **Bytes:** 4277

### asset-eye-director-js

- **Label:** Eye Director
- **File:** `eye-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: eye-director.js
- **Source location / method:** Version 49 simple source/destination replacement, focus-area presets, actual-seconds timing, optional slow/fast controls, tap-to-frame content, and source-independent preset save/load.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 49 simple source/destination replacement, focus-area presets, actual-seconds timing, optional slow/fast controls, tap-to-frame content, and source-independent preset save/load.
- **SHA-256:** `877ccf7b183a835ea3d4e74760c68d7c95d3470290cdc6e3f0a2c26b47250cc6`
- **Bytes:** 11136

### asset-eye-journey-js

- **Label:** Eye Journey
- **File:** `eye-journey.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: eye-journey.js
- **Source location / method:** Version 49 content-independent focus-reveal adapter, configurable onset/finish, positive continuous slow/fast time warp, subject framing, ellipse/box masks, high-quality interpolation and optional generic-picture camera clamp. Existing layered iris remains one preset.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 49 content-independent focus-reveal adapter, configurable onset/finish, positive continuous slow/fast time warp, subject framing, ellipse/box masks, high-quality interpolation and optional generic-picture camera clamp. Existing layered iris remains one preset.
- **SHA-256:** `574c314144a53873aab1149fddc682c46eae138f823ec34e819b67405f129fd2`
- **Bytes:** 6821

### asset-feud-director-js

- **Label:** Feud Director
- **File:** `feud-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: feud-director.js
- **Source location / method:** V83 append-only native editor, independent object/source controls and MotionCore registration.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V83 append-only native editor, independent object/source controls and MotionCore registration.
- **SHA-256:** `1e5719f6d7940d101a7fa54cc2b91f95c4e6f1a5c40dac93460ea9f135c37b5a`
- **Bytes:** 5962

### asset-feud-sequence-js

- **Label:** Feud Sequence
- **File:** `feud-sequence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: feud-sequence.js
- **Source location / method:** V83 project-authored editable source655–715 stage clock, circular/glyph masks, multi-view head plates, mirrored factory division, two flame depths, explicit black hold and chapter letter choreography. Not recovered3D or live acting.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V83 project-authored editable source655–715 stage clock, circular/glyph masks, multi-view head plates, mirrored factory division, two flame depths, explicit black hold and chapter letter choreography. Not recovered3D or live acting.
- **SHA-256:** `ca10a523ceced6e85bcd703fa932a83acc8eb460d5e3b3a76205db23740f43a4`
- **Bytes:** 15952

### asset-gesture-layers-js

- **Label:** Gesture Layers
- **File:** `gesture-layers.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: gesture-layers.js
- **Source location / method:** Version 41 artwork-specific editable layer preset and measured region retargeting with two-anchor arm contact constraints. Visible original portrait and blouse are retained; registered generated support plates fill concealed areas.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 41 artwork-specific editable layer preset and measured region retargeting with two-anchor arm contact constraints. Visible original portrait and blouse are retained; registered generated support plates fill concealed areas.
- **SHA-256:** `fc93795d307ed2e8d52e6676268e72f66a1360fba0a7f6beb36850eb1366f626`
- **Bytes:** 4588

### asset-gesture-motion-js

- **Label:** Gesture Motion
- **File:** `gesture-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: gesture-motion.js
- **Source location / method:** Version 40 original RBF contact-handle mesh driven by measured regional curves, rigid face/garment regions and adaptive positive-area constraint; independently editable region transforms, pin positions/displacements and protected-region bounds. This retargets image-space motion and does not reproduce source anatomy exactly.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 40 original RBF contact-handle mesh driven by measured regional curves, rigid face/garment regions and adaptive positive-area constraint; independently editable region transforms, pin positions/displacements and protected-region bounds. This retargets image-space motion and does not reproduce source anatomy exactly.
- **SHA-256:** `ebf8e3e244d7a098156112025ae9a90ceff6ef96891388f2d753479a9ac62b63`
- **Bytes:** 5892

### asset-gesture-scene-js

- **Label:** Gesture Scene
- **File:** `gesture-scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: gesture-scene.js
- **Source location / method:** Version 40 original shared triangular texture warp of unchanged artwork with offscreen seam handling; no portrait or garment regeneration.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 40 original shared triangular texture warp of unchanged artwork with offscreen seam handling; no portrait or garment regeneration.
- **SHA-256:** `7114ecb266d3a09252ff121bb6040f5c9a1db1f440e374f471a04024658070be`
- **Bytes:** 1958

### asset-gesture-track-js

- **Label:** Gesture Track
- **File:** `gesture-track.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: gesture-track.js
- **Source location / method:** Version 40 numerical source-region similarity curves and artwork pivot mapping, generated from the archived hypothesis-test report; no source-video pixels.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 40 numerical source-region similarity curves and artwork pivot mapping, generated from the archived hypothesis-test report; no source-video pixels.
- **SHA-256:** `6319bd90628d7c40b9a907a80cbf5b8ea99c64dae14108955863bc7379e10a76`
- **Bytes:** 4659

### asset-globe-audio-js

- **Label:** globe-audio V70
- **File:** `globe-audio.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: globe-audio.js
- **Source location / method:** Joshua-authorized V70 dramatic, script-timed animation and original procedural sound.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped implementation; source imagery/brand marks retain separate permission labels.
- **Modifications:** Animated opposing marks, depth/sweeps/exit, layered cloud motion, branching pulses, smooth radius keys, gradual city lights/rim and optional sound. Prior V69 source retained.
- **SHA-256:** `2f8486eaf7b571a6ce169dc40964dda7677a493fcbfca3156e0a5e86457fbb31`
- **Bytes:** 4103

### asset-globe-controls-js

- **Label:** globe-controls V70
- **File:** `globe-controls.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: globe-controls.js
- **Source location / method:** Joshua-authorized V70 dramatic, script-timed animation and original procedural sound.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped implementation; source imagery/brand marks retain separate permission labels.
- **Modifications:** Animated opposing marks, depth/sweeps/exit, layered cloud motion, branching pulses, smooth radius keys, gradual city lights/rim and optional sound. Prior V69 source retained.
- **SHA-256:** `f32a3a36529b6f71232ae41ca96c6f95ec20e646f4dc77e886d62d6ddd00e40c`
- **Bytes:** 4921

### asset-globe-director-js

- **Label:** globe-director V70
- **File:** `globe-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: globe-director.js
- **Source location / method:** Joshua-authorized V70 dramatic, script-timed animation and original procedural sound.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped implementation; source imagery/brand marks retain separate permission labels.
- **Modifications:** Animated opposing marks, depth/sweeps/exit, layered cloud motion, branching pulses, smooth radius keys, gradual city lights/rim and optional sound. Prior V69 source retained.
- **SHA-256:** `8333f2f707115aafb61277b4c6c29b829a9737e9f58b72a2b15606e483b33976`
- **Bytes:** 5551

### asset-globe-drama-js

- **Label:** globe-drama V70
- **File:** `globe-drama.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: globe-drama.js
- **Source location / method:** Joshua-authorized V70 dramatic, script-timed animation and original procedural sound.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped implementation; source imagery/brand marks retain separate permission labels.
- **Modifications:** Animated opposing marks, depth/sweeps/exit, layered cloud motion, branching pulses, smooth radius keys, gradual city lights/rim and optional sound. Prior V69 source retained.
- **SHA-256:** `c384cec39249c523f06db28fcf02748f0eef97c1d07426a2c5aa7d1c788edea8`
- **Bytes:** 7585

### asset-globe-opening-js

- **Label:** globe-opening V70
- **File:** `globe-opening.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: globe-opening.js
- **Source location / method:** Joshua-authorized V70 dramatic, script-timed animation and original procedural sound.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped implementation; source imagery/brand marks retain separate permission labels.
- **Modifications:** Animated opposing marks, depth/sweeps/exit, layered cloud motion, branching pulses, smooth radius keys, gradual city lights/rim and optional sound. Prior V69 source retained.
- **SHA-256:** `20af72121c45068b5ad8195285c729d1c80c5e26acf7637927a4e3eb5f68b162`
- **Bytes:** 13884

### asset-grounded-walk-js

- **Label:** Grounded Walk
- **File:** `grounded-walk.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: grounded-walk.js
- **Source location / method:** V63 original photo puppet with actual-alpha sole hull vertical ground constraint, preserving artwork and existing arm rig. No horizontal stance lock or mocap.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V63 original photo puppet with actual-alpha sole hull vertical ground constraint, preserving artwork and existing arm rig. No horizontal stance lock or mocap.
- **SHA-256:** `4f668f9bb385236342bdda69c2dd2dc7132751a3eb2957271c9959f523a08e5f`
- **Bytes:** 3844

### asset-history-director-js

- **Label:** History Director
- **File:** `history-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: history-director.js
- **Source location / method:** Version52 video replacement through versioned asset storage, separate trim/speed/crop controls, original-frame and approved-crop buttons, and still/video recovery switch. Existing sequence timings remain unchanged.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version52 video replacement through versioned asset storage, separate trim/speed/crop controls, original-frame and approved-crop buttons, and still/video recovery switch. Existing sequence timings remain unchanged.
- **SHA-256:** `c18bc7289895c1df0949d826ab52681bf6eaa48a0ab63d10709ebbf985838f50`
- **Bytes:** 43518

### asset-history-footage-js

- **Label:** History Footage
- **File:** `history-footage.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: history-footage.js
- **Source location / method:** Version52 source-independent muted video trim, speed, reversible normalized crop and cover-fit frame adapter. Raw uploads and original still views are preserved.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version52 source-independent muted video trim, speed, reversible normalized crop and cover-fit frame adapter. Raw uploads and original still views are preserved.
- **SHA-256:** `44919c74177cc1cdd1305ff84378ecb11df553e36832254ec9ee74a670a45dab`
- **Bytes:** 2655

### asset-history-motion-js

- **Label:** History Motion
- **File:** `history-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: history-motion.js
- **Source location / method:** Version 46 project-authored reference-informed editable sequence timing, replaceable image bindings, focal eye reveal, shared number-reel wipe, portrait pushes, procedural shoe/spike turn, picture-card flip and reconstructed final fire scene. No source-video pixels are embedded.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 46 project-authored reference-informed editable sequence timing, replaceable image bindings, focal eye reveal, shared number-reel wipe, portrait pushes, procedural shoe/spike turn, picture-card flip and reconstructed final fire scene. No source-video pixels are embedded.
- **SHA-256:** `7569a7ef586d43ebdbd97e75758a7da2a5393adca6f774036904d0f744a2b15a`
- **Bytes:** 3713

### asset-history-scene-js

- **Label:** History Scene
- **File:** `history-scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: history-scene.js
- **Source location / method:** Version 49 permits a generic starting picture rather than template characters, preserving separate asset bindings and existing v47/v48 scene corrections.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 49 permits a generic starting picture rather than template characters, preserving separate asset bindings and existing v47/v48 scene corrections.
- **SHA-256:** `1ffbb2a0116c5197151463fea8a39915a4493706648eb93e171234ee891a1d41`
- **Bytes:** 12503

### asset-hybrid-scene-js

- **Label:** Hybrid Scene
- **File:** `hybrid-scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: hybrid-scene.js
- **Source location / method:** V63 project-authored shared perspective camera, photographic planes with wall return, textured ground, actor projection, five named conductor spans and geometry-derived salvage binding. Not a recovered full-3D reference scene.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V63 project-authored shared perspective camera, photographic planes with wall return, textured ground, actor projection, five named conductor spans and geometry-derived salvage binding. Not a recovered full-3D reference scene.
- **SHA-256:** `8681c268b42bd89987acbd510cee71625d54a9709d329449567fa820c52df3cc`
- **Bytes:** 10088

### asset-laundry-motion-js

- **Label:** Laundry Motion
- **File:** `laundry-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: laundry-motion.js
- **Source location / method:** Version 39 original deterministic post-blouse pullback, aerial hold, title writing and optional fade timing.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 39 original deterministic post-blouse pullback, aerial hold, title writing and optional fade timing.
- **SHA-256:** `f2c185593c78bfd59225a5057a6e88825121b451e4a57fe63983cdea51c69447`
- **Bytes:** 1058
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-laundry-scene-js

- **Label:** Laundry Scene
- **File:** `laundry-scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: laundry-scene.js
- **Source location / method:** Version 39 original isolated garment pullback, repeated markers, aerial camera, nearer cloud drift and editable character-by-character heading compositor.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 39 original isolated garment pullback, repeated markers, aerial camera, nearer cloud drift and editable character-by-character heading compositor.
- **SHA-256:** `a2972915ba29bc5cb79d306c88691f8b02496a57c4dbf0ad52435a29f14a2397`
- **Bytes:** 6220
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-layer-motion-js

- **Label:** Layer Motion
- **File:** `layer-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: layer-motion.js
- **Source location / method:** Content-independent image, canvas and text transforms, editable masks, key interpolation and arbitrary 3D object transform adapter. Project-authored canvas code.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Content-independent image, canvas and text transforms, editable masks, key interpolation and arbitrary 3D object transform adapter. Project-authored canvas code.
- **SHA-256:** `4f3e319a0fd6e375c7b59e29bb9abe6461e9545d55caf4b5100b1d05e7752ad9`
- **Bytes:** 3800

### asset-living-cables-js

- **Label:** Living Cables
- **File:** `living-cables.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: living-cables.js
- **Source location / method:** V60 anchored catenary-like sag, analytic wind and moving highlight; no full tension simulation.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V60 anchored catenary-like sag, analytic wind and moving highlight; no full tension simulation.
- **SHA-256:** `2111f25b6eae29225fc82e9f2459aa6e6bb762a3899f3779d35258737988fd1a`
- **Bytes:** 1838

### asset-living-sky-js

- **Label:** Living Sky
- **File:** `living-sky.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: living-sky.js
- **Source location / method:** V60 deterministic evolving fractal cloud fields, parallax, advection and temporal interpolation.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V60 deterministic evolving fractal cloud fields, parallax, advection and temporal interpolation.
- **SHA-256:** `7cd8e4c5b43d34c0e8b5996305a52c072db5c3a795c7cd99644890892de61695`
- **Bytes:** 3902

### asset-media-clip-js

- **Label:** Media Clip
- **File:** `media-clip.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: media-clip.js
- **Source location / method:** Source-independent trim, speed, held ending, loop and paused-seek timing for uploaded media. No generated motion or automatic rigging.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Source-independent trim, speed, held ending, loop and paused-seek timing for uploaded media. No generated motion or automatic rigging.
- **SHA-256:** `aae065e2195adb94e5473a1a1833c6d711a514f11f01076ff08cb4fa8d506030`
- **Bytes:** 1316

### asset-mesh-walk-js

- **Label:** Mesh Walk
- **File:** `mesh-walk.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: mesh-walk.js
- **Source location / method:** V60 project-authored articulated photographic mesh, stance/swing trajectories, two-bone IK, manual joints and replaceable body parts. Not3D recovery.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V60 project-authored articulated photographic mesh, stance/swing trajectories, two-bone IK, manual joints and replaceable body parts. Not3D recovery.
- **SHA-256:** `7b11d7dfe9ff1e91d4fd48250ba14ed11453a257bddbb8193b50ee8b0c547b21`
- **Bytes:** 12939

### asset-model-recipes-js

- **Label:** Model Recipes
- **File:** `model-recipes.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-recipes.js
- **Source location / method:** V61 variable ruined facade heights and setbacks, textured side returns, broken shells, road and irregular rubble. Project-authored illustrative geometry.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V61 variable ruined facade heights and setbacks, textured side returns, broken shells, road and irregular rubble. Project-authored illustrative geometry.
- **SHA-256:** `17ef47a356fedb4aef3c652b519ad00a48a7a1292f25d251c73568551bd2c294`
- **Bytes:** 5410

### asset-model-studio-director-js

- **Label:** Model Studio Director
- **File:** `model-studio-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-studio-director.js
- **Source location / method:** Blank-composition part creation, selection, transforms, materials, keys and model import/export.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Blank-composition part creation, selection, transforms, materials, keys and model import/export.
- **SHA-256:** `33b8fab4f658dec98655f230fb6fd51491e77078731847ab73cc2bddf48d9662`
- **Bytes:** 6163

### asset-model-studio-js

- **Label:** Model Studio
- **File:** `model-studio.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-studio.js
- **Source location / method:** Project-authored editable mesh renderer with V61 shared camera projection for cutouts.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Project-authored editable mesh renderer with V61 shared camera projection for cutouts.
- **SHA-256:** `02189b3e3efb9578f0591cd5dee84e0a99735727f01741a42d5fa7dc5c6306ef`
- **Bytes:** 11427

### asset-model-webgl-js

- **Label:** Model Webgl
- **File:** `model-webgl.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: model-webgl.js
- **Source location / method:** Project-owned optional WebGL triangle pipeline with no runtime downloads.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Project-owned optional WebGL triangle pipeline with no runtime downloads.
- **SHA-256:** `edb1feb06a4ed7b406c9fc5654bb16ac2bdd2d14f57a1d320685c9dc32a207d3`
- **Bytes:** 3327

### asset-mother-room-js

- **Label:** Mother Room
- **File:** `mother-room.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: mother-room.js
- **Source location / method:** Version54 independently replaceable mother, room, wash tub and sill cloth, separate settings namespace and grayscale card reuse. Shared perspective renderer; inferred geometry, not a calibrated reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version54 independently replaceable mother, room, wash tub and sill cloth, separate settings namespace and grayscale card reuse. Shared perspective renderer; inferred geometry, not a calibrated reconstruction.
- **SHA-256:** `33c0952cc81116539633176f341a5b27ec605b8a1f5c01d5f177059a8324e657`
- **Bytes:** 2140

### asset-moving-lens-js

- **Label:** Moving Lens
- **File:** `moving-lens.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: moving-lens.js
- **Source location / method:** Source-independent synchronized moving magnifier for image/video/canvas.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Source-independent synchronized moving magnifier for image/video/canvas.
- **SHA-256:** `d6c35280828350e0dee4814a9de6f619c33ba54e7efc3629bdec21c165d55e27`
- **Bytes:** 2141

### asset-native3d-director-js

- **Label:** Native3D Director
- **File:** `native3d-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: native3d-director.js
- **Source location / method:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **SHA-256:** `b278600853a54f46a32c108dc7829d865965fd486464656163b77611611af818`
- **Bytes:** 30530

### asset-native3d-atmosphere-js

- **Label:** Atmosphere
- **File:** `native3d/atmosphere.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: native3d/atmosphere.js
- **Source location / method:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **SHA-256:** `914e9c9591d249b7d56d2d9650480de4b21b5482c10ed467e2582ec1e1c5b79b`
- **Bytes:** 1613

### asset-native3d-checkpoint-js

- **Label:** Checkpoint
- **File:** `native3d/checkpoint.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: native3d/checkpoint.js
- **Source location / method:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **SHA-256:** `e06598a6f1b203fb1f8054f66576cef905f335ac0e83cf547a1d6750058a8368`
- **Bytes:** 7221

### asset-native3d-editor-js

- **Label:** Editor
- **File:** `native3d/editor.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: native3d/editor.js
- **Source location / method:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **SHA-256:** `54240e1e41cb4359a023c0c2129c6a913ab881beaffae3de8f3a1ee4620f53a3`
- **Bytes:** 27800

### asset-native3d-engine-js

- **Label:** Engine
- **File:** `native3d/engine.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: native3d/engine.js
- **Source location / method:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **SHA-256:** `aefbf0204cae9950b0cadafd2267f08a192b379af80ab5e3809cad1fbfb602fd`
- **Bytes:** 28798

### asset-native3d-export-js

- **Label:** Export
- **File:** `native3d/export.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: native3d/export.js
- **Source location / method:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **SHA-256:** `3fabe815dd9619dbd5a4c7d742c5f6042c6982e4f8ceedce89af7a3205d6d5f5`
- **Bytes:** 1982

### asset-native3d-lab-js

- **Label:** Lab
- **File:** `native3d/lab.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: native3d/lab.js
- **Source location / method:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **SHA-256:** `fe6ef44372154c2301b3a3e0effc46571cc64567b15319268b293312e142ee67`
- **Bytes:** 752

### asset-native3d-scene-js

- **Label:** Scene
- **File:** `native3d/scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: native3d/scene.js
- **Source location / method:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V89 native project-authored editor/scene system, bundled anatomical rig, GPU skinning, granular objects/bones/materials/keyframes, editable2.5D smoke and native JSON/GLB export. No external editor app dependency; not original production reconstruction.
- **SHA-256:** `f02b7fafde894ffad47bb4a308c4f78171d1de66580fef29f0948aabdd465108`
- **Bytes:** 13691

### asset-native3d-wardrobe-js

- **Label:** Wardrobe
- **File:** `native3d/wardrobe.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: native3d/wardrobe.js
- **Source location / method:** V91 project-authored continuous garment surface, CC0 rig/weight transfer, native skinned BufferGeometry; diagnostic original not reused as production texture
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V91 project-authored continuous garment surface, CC0 rig/weight transfer, native skinned BufferGeometry; diagnostic original not reused as production texture
- **SHA-256:** `b53f769d092a1413fda507ff622319146fe0450f26d9502838e6bc809e6ec75e`
- **Bytes:** 3587

### asset-nursery-motion-js

- **Label:** Nursery Motion
- **File:** `nursery-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: nursery-motion.js
- **Source location / method:** Version 37 project-authored date/room/passage/cradle stage timing, independent controls and safe ordering after the chapter. Based on the approved source-video interpretation.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 37 project-authored date/room/passage/cradle stage timing, independent controls and safe ordering after the chapter. Based on the approved source-video interpretation.
- **SHA-256:** `f8f8f9921a7f36a36aeaa936e1896ee47dee48a9d56f6e7fe8d5820e025eeda5`
- **Bytes:** 2388
- **Related provenance records:** `assets/nursery-generation-briefs-v37.json`

### asset-nursery-scene-js

- **Label:** Nursery Scene
- **File:** `nursery-scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: nursery-scene.js
- **Source location / method:** Version 37 original hand-drawn numeric date traces, plus v40 pane-clipped boys appearance late in the cradle hold;, lateral room entry, masked foreground occlusion, soft light and cradle hold. Generated photographic plates are separately registered.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 37 original hand-drawn numeric date traces, plus v40 pane-clipped boys appearance late in the cradle hold;, lateral room entry, masked foreground occlusion, soft light and cradle hold. Generated photographic plates are separately registered.
- **SHA-256:** `c9b5215611cea7e0ae85d6ed79b0eb3c7dd62095080c99aca0db6317d4eeae0b`
- **Bytes:** 7178
- **Related provenance records:** `assets/nursery-generation-briefs-v37.json`

### asset-olympic-director-js

- **Label:** olympic director.js
- **File:** `olympic-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project code olympic-director.js
- **Source location / method:** V73 reversible endpoint extension, explicit source landmarks, per-layer controls and replaceable sources; waits for V72 ready.
- **Author / brand owner:** Project implementation
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Project-scoped original code; referenced visual licenses remain separate
- **Modifications:** New source module
- **SHA-256:** `3314bb8fa99f040970082e7186f4ed6310f065d71e1ec5f356143f975a84e5b9`
- **Bytes:** 11646

### asset-olympic-sequence-js

- **Label:** olympic sequence.js
- **File:** `olympic-sequence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project code olympic-sequence.js
- **Source location / method:** V73 independent Olympic/CRT/runner/glyph/political depth/meeting continuation, source-local clock and original-resolution alpha planes.
- **Author / brand owner:** Project implementation
- **Retrieved / created:** 2026-10-31
- **License / permission status:** Project-scoped original code; referenced visual licenses remain separate
- **Modifications:** New source module
- **SHA-256:** `1e785e084227f29b8683fe7cc49354b132f7985e1096bf3ff135d256bf717975`
- **Bytes:** 21380

### asset-opportunity-crops-js

- **Label:** Opportunity Crops
- **File:** `opportunity-crops.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: opportunity-crops.js
- **Source location / method:** V86 authored editable scene geometry and animation: 34 stages, curved panels, boot stripes, chapter lettering, trusses, approximate seal, depth-buffered articulated mannequins, constrained prop, desk/chair and camera. Not recovered original project.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V86 authored editable scene geometry and animation: 34 stages, curved panels, boot stripes, chapter lettering, trusses, approximate seal, depth-buffered articulated mannequins, constrained prop, desk/chair and camera. Not recovered original project.
- **SHA-256:** `0451aa651f0bd4c4e24dc61cded88ecb6c4fc241bf036baf417e8425e77f6eb1`
- **Bytes:** 561

### asset-opportunity-director-js

- **Label:** Opportunity Director
- **File:** `opportunity-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: opportunity-director.js
- **Source location / method:** V86 authored editable scene geometry and animation: 34 stages, curved panels, boot stripes, chapter lettering, trusses, approximate seal, depth-buffered articulated mannequins, constrained prop, desk/chair and camera. Not recovered original project.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V86 authored editable scene geometry and animation: 34 stages, curved panels, boot stripes, chapter lettering, trusses, approximate seal, depth-buffered articulated mannequins, constrained prop, desk/chair and camera. Not recovered original project.
- **SHA-256:** `9f6c7a61a81adee3f3637ee0679bf6430147f14440fdbfed5e0c8eb0b200f61b`
- **Bytes:** 6347

### asset-opportunity-rig-js

- **Label:** Opportunity Rig
- **File:** `opportunity-rig.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: opportunity-rig.js
- **Source location / method:** V86 authored editable scene geometry and animation: 34 stages, curved panels, boot stripes, chapter lettering, trusses, approximate seal, depth-buffered articulated mannequins, constrained prop, desk/chair and camera. Not recovered original project.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V86 authored editable scene geometry and animation: 34 stages, curved panels, boot stripes, chapter lettering, trusses, approximate seal, depth-buffered articulated mannequins, constrained prop, desk/chair and camera. Not recovered original project.
- **SHA-256:** `277ca8daaff72103cb4fb5375e46d5baa958a3e517c240e56ad25a96ab6b86e8`
- **Bytes:** 8291

### asset-opportunity-sequence-js

- **Label:** Opportunity Sequence
- **File:** `opportunity-sequence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: opportunity-sequence.js
- **Source location / method:** V86 authored editable scene geometry and animation: 34 stages, curved panels, boot stripes, chapter lettering, trusses, approximate seal, depth-buffered articulated mannequins, constrained prop, desk/chair and camera. Not recovered original project.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V86 authored editable scene geometry and animation: 34 stages, curved panels, boot stripes, chapter lettering, trusses, approximate seal, depth-buffered articulated mannequins, constrained prop, desk/chair and camera. Not recovered original project.
- **SHA-256:** `7b2e8ea0258ed34c4f32f8b188bbe81ebea22ae418dedb1dc7b5aa6ccb961f00`
- **Bytes:** 25726

### asset-opportunity-stages-js

- **Label:** Opportunity Stages
- **File:** `opportunity-stages.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: opportunity-stages.js
- **Source location / method:** V86 authored editable scene geometry and animation: 34 stages, curved panels, boot stripes, chapter lettering, trusses, approximate seal, depth-buffered articulated mannequins, constrained prop, desk/chair and camera. Not recovered original project.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V86 authored editable scene geometry and animation: 34 stages, curved panels, boot stripes, chapter lettering, trusses, approximate seal, depth-buffered articulated mannequins, constrained prop, desk/chair and camera. Not recovered original project.
- **SHA-256:** `050efb87adb4596525519642460a788c160c92ab823f48a31cd5feedb655770e`
- **Bytes:** 4470

### asset-path-controls-js

- **Label:** V68 path-controls.js
- **File:** `path-controls.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project-authored path-controls.js
- **Source location / method:** Reusable point-handle geometry editor, line-style controls and object motion controls.
- **Author / brand owner:** Project implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped source code; no external imagery or model added.
- **Modifications:** New implementation using existing Canvas and editor APIs.
- **SHA-256:** `e813cdf9e3f2b8f01c9a6c46eee5de175938ba9226ae415c228e0bd1c8e74572`
- **Bytes:** 11597

### asset-path-motion-js

- **Label:** V68 path-motion.js
- **File:** `path-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project-authored path-motion.js
- **Source location / method:** Deterministic normalized path geometry, stroke reveal/flow and whole-layer motion presets.
- **Author / brand owner:** Project implementation
- **Retrieved / created:** 2026-10-30
- **License / permission status:** Project-scoped source code; no external imagery or model added.
- **Modifications:** New implementation using existing Canvas and editor APIs.
- **SHA-256:** `8f194dc7ab076f350504d473ebf1863487ae8adace2f99ea5f70539849852b46`
- **Bytes:** 9138

### asset-portrait-room-js

- **Label:** Portrait Room
- **File:** `portrait-room.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: portrait-room.js
- **Source location / method:** Version53 perspective-projected window wall, back wall and floor meshes, separate cutout planes, continuous shared camera, focal targeting, depth-scaled parallax and native layer replacement. Illustrative geometry, not recovered original-camera calibration.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version53 perspective-projected window wall, back wall and floor meshes, separate cutout planes, continuous shared camera, focal targeting, depth-scaled parallax and native layer replacement. Illustrative geometry, not recovered original-camera calibration.
- **SHA-256:** `baa8a92c2c61ecfe85624b2304baa448c8e26b275041571d1a1907ac190ae300`
- **Bytes:** 7660

### asset-precision-director-js

- **Label:** Precision Director
- **File:** `precision-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: precision-director.js
- **Source location / method:** Version 39 missing-default preservation, duration snapshot/extension, separate depth and laundry controls, keyframes, local image replacement slots and revision presets.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 39 missing-default preservation, duration snapshot/extension, separate depth and laundry controls, keyframes, local image replacement slots and revision presets.
- **SHA-256:** `2cc08bb04d389804df79a5f0dc2653be803b2e306508c3e5ce0e6bc3da291ad6`
- **Bytes:** 19313
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-precision-motion-js

- **Label:** Precision Motion
- **File:** `precision-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: precision-motion.js
- **Source location / method:** Version 39 original pane transmission, light pulse, pale-name timing, near-wall clearance and title-after-boys state. Includes missing-value defaults for correction and laundry.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 39 original pane transmission, light pulse, pale-name timing, near-wall clearance and title-after-boys state. Includes missing-value defaults for correction and laundry.
- **SHA-256:** `9eef0a37366ecd4bd54ad1de908080b8df90fb9887279ed4cf29026d82c8db28`
- **Bytes:** 4090
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-precision-scene-js

- **Label:** Precision Scene
- **File:** `precision-scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: precision-scene.js
- **Source location / method:** Version 39 project-authored depth compositor. Separate animated clouds, alpha architecture, masonry, children, delayed name opacity, accelerating sideways clearance, masked panes and falling town title. Image-space measurements inform authored curves; no physical camera recovery is claimed.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 39 project-authored depth compositor. Separate animated clouds, alpha architecture, masonry, children, delayed name opacity, accelerating sideways clearance, masked panes and falling town title. Image-space measurements inform authored curves; no physical camera recovery is claimed.
- **SHA-256:** `d86686feded321c87c8e4194001464c6b8c424b016b5e2d90fc3864429448ae0`
- **Bytes:** 2604
- **Related provenance records:** `assets/precision-generation-briefs-v39.json`

### asset-raster-surface-js

- **Label:** Raster Surface
- **File:** `raster-surface.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: raster-surface.js
- **Source location / method:** Version56 project-authored CPU triangle depth buffer for opaque solids and textured deforming paper.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version56 project-authored CPU triangle depth buffer for opaque solids and textured deforming paper.
- **SHA-256:** `322dbd54efe088f0f06070d19ff0d6b229dd401f4835a2ecadb5dea94916718a`
- **Bytes:** 2566

### asset-reference-controls-js

- **Label:** Reference Controls
- **File:** `reference-controls.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: reference-controls.js
- **Source location / method:** V62 shared simple scene picker, source replacement, named sliders and stage preview buttons; advanced controls nested.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V62 shared simple scene picker, source replacement, named sliders and stage preview buttons; advanced controls nested.
- **SHA-256:** `a820ed677f3190b689449d4ab338269db651abcfa6a2606901039cccb481bd1b`
- **Bytes:** 11220

### asset-reference-staging-js

- **Label:** Reference Staging
- **File:** `reference-staging.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: reference-staging.js
- **Source location / method:** V62 matched layered photographic room, separate character/color clocks, independent foreground depth, dark-window alpha closure, street plate and pivoting pole/wire failure with finite localized spark bursts. No inferred full 3D recovery or physics simulation.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V62 matched layered photographic room, separate character/color clocks, independent foreground depth, dark-window alpha closure, street plate and pivoting pole/wire failure with finite localized spark bursts. No inferred full 3D recovery or physics simulation.
- **SHA-256:** `53c15a69da2cb3c451dd2976a7bd7dfe65cf47a0ed644aff964fc14e2d452796`
- **Bytes:** 11675

### asset-refinement-audio-js

- **Label:** Refinement Audio
- **File:** `refinement-audio.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: refinement-audio.js
- **Source location / method:** V71 project-authored optional user-attached narration synchronization and separate local archive.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V71 project-authored optional user-attached narration synchronization and separate local archive.
- **SHA-256:** `1f4676ff60033fb56ee17161fa9f0254ba5883a321e15dfed0cffe7d8f74a22e`
- **Bytes:** 1915

### asset-refinement-director-js

- **Label:** Refinement Director
- **File:** `refinement-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: refinement-director.js
- **Source location / method:** V71 project-authored reversible template controls, clock dispatch and missing-default migration.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V71 project-authored reversible template controls, clock dispatch and missing-default migration.
- **SHA-256:** `6bce23822d775453b6d67d386f0ed3eb5af0ec7f0336a0ef51e1e053a9d34b9b`
- **Bytes:** 8379

### asset-refinement-motion-js

- **Label:** Refinement Motion
- **File:** `refinement-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: refinement-motion.js
- **Source location / method:** V71 project-authored nonmutating profile and monotonic two-clock mapping; source landmarks are authored estimates.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V71 project-authored nonmutating profile and monotonic two-clock mapping; source landmarks are authored estimates.
- **SHA-256:** `e23a4db5d2e89810562448aaa9c5e974482175f0b24cf1fac84bea4a3890b22c`
- **Bytes:** 6872

### asset-refinement-visual-js

- **Label:** Refinement Visual
- **File:** `refinement-visual.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: refinement-visual.js
- **Source location / method:** V71 original procedural overlays: illustrative town focus, projected rubble and cable emphasis, soft eye-fire alpha and vignette; no generated or sourced imagery.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V71 original procedural overlays: illustrative town focus, projected rubble and cable emphasis, soft eye-fire alpha and vignette; no generated or sourced imagery.
- **SHA-256:** `4a7f4a609894749dbce81cbfac3e83c610cfd7b56a8ee0133ba3fd214a3c2e4c`
- **Bytes:** 3998

### asset-reveal-fx-js

- **Label:** Reveal Fx
- **File:** `reveal-fx.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: reveal-fx.js
- **Source location / method:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **SHA-256:** `3d5419c786b54e3abf881c39a8ed095394ccd53eb4050e9364b38f44e688e323`
- **Bytes:** 3898

### asset-route-motion-js

- **Label:** Route Motion
- **File:** `route-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: route-motion.js
- **Source location / method:** Version 43 project-authored reusable routes, layered parallax reveal, simple source replacement and independent motion controls.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 43 project-authored reusable routes, layered parallax reveal, simple source replacement and independent motion controls.
- **SHA-256:** `13c37abb7799d1a8090a31b1192739cbf9d370c573998391a7ac8d30e04ab5e9`
- **Bytes:** 2771

### asset-route-scene-js

- **Label:** Route Scene
- **File:** `route-scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: route-scene.js
- **Source location / method:** Version 43 project-authored reusable routes, layered parallax reveal, simple source replacement and independent motion controls.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 43 project-authored reusable routes, layered parallax reveal, simple source replacement and independent motion controls.
- **SHA-256:** `c007e11b0650e85430930c6074dbca384ebdff57e7d0886199bf486792b57321`
- **Bytes:** 1330

### asset-ruined-window-js

- **Label:** Ruined Window
- **File:** `ruined-window.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: ruined-window.js
- **Source location / method:** Version55 source-independent image planes for person, damaged wall opening and close city. Continuous pullback and opposing sideways drift, scoped replacement and original flat-image fallback; not volumetric city reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version55 source-independent image planes for person, damaged wall opening and close city. Continuous pullback and opposing sideways drift, scoped replacement and original flat-image fallback; not volumetric city reconstruction.
- **SHA-256:** `6fd97a916324097dad88bd5234ec3d9067c80a0a5137987f615f408830008161`
- **Bytes:** 4133

### asset-sequence-expansion-js

- **Label:** Sequence Expansion
- **File:** `sequence-expansion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: sequence-expansion.js
- **Source location / method:** V61 timed explosion, smoke, electrical collapse, sparks and lightning; shared actor/camera projection and original classic walker restored.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V61 timed explosion, smoke, electrical collapse, sparks and lightning; shared actor/camera projection and original classic walker restored.
- **SHA-256:** `5c6c1539348ac71f5ac7608268b69f3cc8fc0d34c8230bd741e1a3179673a881`
- **Bytes:** 33575

### asset-shelter-director-js

- **Label:** shelter-director.js
- **File:** `shelter-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source shelter-director.js
- **Source location / method:** Native Canvas composition and editor registration
- **Author / brand owner:** Project implementation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Project-scoped implementation
- **Modifications:** New V80 continuation
- **SHA-256:** `e88f007f5a2915459708aa0eabc9c64a6a1775b658fe0b2c7cfca9789442d57c`
- **Bytes:** 6336

### asset-shelter-sequence-js

- **Label:** shelter-sequence.js
- **File:** `shelter-sequence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source shelter-sequence.js
- **Source location / method:** Native Canvas composition and editor registration
- **Author / brand owner:** Project implementation
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Project-scoped implementation
- **Modifications:** New V80 continuation
- **SHA-256:** `6e55eccff601ebf8b17bfc85c530daa489f861668e6496ec570cf9f679137353`
- **Bytes:** 26192

### asset-shoe-paper-js

- **Label:** Shoe Paper
- **File:** `shoe-paper.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: shoe-paper.js
- **Source location / method:** Version56 source-independent printed paper composition, tilt/front/zoom pose, textured crumple mesh, crease normals, irregular compact object and editable flight. Authored deformation, not physical simulation.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version56 source-independent printed paper composition, tilt/front/zoom pose, textured crumple mesh, crease normals, irregular compact object and editable flight. Authored deformation, not physical simulation.
- **SHA-256:** `d2035ab3510f6ed017fffc6b4cd3027baec2ed41ee904169e6bcafbb196be7df`
- **Bytes:** 7484

### asset-shoe-solid-js

- **Label:** Shoe Solid
- **File:** `shoe-solid.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: shoe-solid.js
- **Source location / method:** Version57 restores the original chapter-shoes.js spikes mesh and original face materials/grain; appends narrow upper/sole seam seals without changing original vertices. Keeps the depth buffer and current pose track. Rejected V56 geometry is archived.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version57 restores the original chapter-shoes.js spikes mesh and original face materials/grain; appends narrow upper/sole seam seals without changing original vertices. Keeps the depth buffer and current pose track. Rejected V56 geometry is archived.
- **SHA-256:** `2298c2325473cd2811158777f37b053653ad9b74e22ca7cd99ec1e165220fd5c`
- **Bytes:** 2824

### asset-spatial-passage-js

- **Label:** Spatial Passage
- **File:** `spatial-passage.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: spatial-passage.js
- **Source location / method:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 50 project-authored registry-driven reusable animation authoring, independent image bindings, shared speed/reverse/delay/pause/slow-fast timing, and four-direction cloud/opaque wall passage. No new artwork or automatic geometry reconstruction.
- **SHA-256:** `95d2543eb1e65816557edaebed5a73bb49cb5111acaa8842d4d62b515f3cb409`
- **Bytes:** 2882

### asset-texture-fill-js

- **Label:** Texture Fill
- **File:** `texture-fill.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: texture-fill.js
- **Source location / method:** Version 43 project-authored reusable routes, layered parallax reveal, simple source replacement and independent motion controls.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 43 project-authored reusable routes, layered parallax reveal, simple source replacement and independent motion controls.
- **SHA-256:** `4072e20c40f1afe56bb0b41828cfa3f4b23aa2b887e2ecc39f4eeafbd3da8459`
- **Bytes:** 1448

### asset-trial-director-js

- **Label:** Trial Director
- **File:** `trial-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: trial-director.js
- **Source location / method:** V82 append-only native editor and MotionCore registration, missing defaults, source/video replacements and independent object controls.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V82 append-only native editor and MotionCore registration, missing defaults, source/video replacements and independent object controls.
- **SHA-256:** `1bdf3d72f6639c15fdaf1b7eda832d62a6be773189ef2b6ab3fe4ba4d720146d`
- **Bytes:** 6232

### asset-trial-sequence-js

- **Label:** Trial Sequence
- **File:** `trial-sequence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: trial-sequence.js
- **Source location / method:** V82 project-authored source-clock18-stage documentary continuation with paper fragments, photographed fire atlas, foreground shoulder/bar/table passages, native editable curved type, photo identity/folder occlusion, strip-projected table and lateral witnesses. Held photographic poses, not recovered3D or writing performance.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V82 project-authored source-clock18-stage documentary continuation with paper fragments, photographed fire atlas, foreground shoulder/bar/table passages, native editable curved type, photo identity/folder occlusion, strip-projected table and lateral witnesses. Held photographic poses, not recovered3D or writing performance.
- **SHA-256:** `070eb1bca46f24d591d34f3405f0ae26896bc540562d92c03b369fc9246dacd5`
- **Bytes:** 20345

### asset-v88-camera-keys-js

- **Label:** Camera Keys
- **File:** `v88/camera-keys.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: v88/camera-keys.js
- **Source location / method:** V88 project-authored continuous skinned anatomical mannequin, skeletal source-time posing, matched camera/props and native CPU shading. Authored approximation; not recovered source geometry.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V88 project-authored continuous skinned anatomical mannequin, skeletal source-time posing, matched camera/props and native CPU shading. Authored approximation; not recovered source geometry.
- **SHA-256:** `7225d6671e71e16e242ddcbe914cf77ddafcf8870b703e62047c675bf2c68b62`
- **Bytes:** 826

### asset-v88-mesh-data-js

- **Label:** Mesh Data
- **File:** `v88/mesh-data.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: v88/mesh-data.js
- **Source location / method:** V88 project-authored continuous skinned anatomical mannequin, skeletal source-time posing, matched camera/props and native CPU shading. Authored approximation; not recovered source geometry.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V88 project-authored continuous skinned anatomical mannequin, skeletal source-time posing, matched camera/props and native CPU shading. Authored approximation; not recovered source geometry.
- **SHA-256:** `58976423ddde7b95e4b7aa443d48a47877937079aa0e16d1e2349d02f0ade146`
- **Bytes:** 2768562

### asset-v88-render-js

- **Label:** Render
- **File:** `v88/render.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: v88/render.js
- **Source location / method:** V88 project-authored continuous skinned anatomical mannequin, skeletal source-time posing, matched camera/props and native CPU shading. Authored approximation; not recovered source geometry.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V88 project-authored continuous skinned anatomical mannequin, skeletal source-time posing, matched camera/props and native CPU shading. Authored approximation; not recovered source geometry.
- **SHA-256:** `4066c417c7543f3c93071e89c8849a41a2c276d760779146ffd285b96df4c0af`
- **Bytes:** 5114

### asset-v88-sequence-js

- **Label:** Sequence
- **File:** `v88/sequence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: v88/sequence.js
- **Source location / method:** V88 project-authored continuous skinned anatomical mannequin, skeletal source-time posing, matched camera/props and native CPU shading. Authored approximation; not recovered source geometry.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V88 project-authored continuous skinned anatomical mannequin, skeletal source-time posing, matched camera/props and native CPU shading. Authored approximation; not recovered source geometry.
- **SHA-256:** `bb346d33c375a25a62fdcf32bddc2a8ee48846992e4654d8ecf2916f9e1b9568`
- **Bytes:** 8857

### asset-v88-skin-js

- **Label:** Skin
- **File:** `v88/skin.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: v88/skin.js
- **Source location / method:** V88 project-authored continuous skinned anatomical mannequin, skeletal source-time posing, matched camera/props and native CPU shading. Authored approximation; not recovered source geometry.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V88 project-authored continuous skinned anatomical mannequin, skeletal source-time posing, matched camera/props and native CPU shading. Authored approximation; not recovered source geometry.
- **SHA-256:** `9c460c69c09cc81362621532b4685dd7d5fd42bf2036563923d6a37ba01a5736`
- **Bytes:** 3611

### asset-vendor-buffergeometryutils-js

- **Label:** BufferGeometryUtils.js
- **File:** `vendor/BufferGeometryUtils.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://raw.githubusercontent.com/mrdoob/three.js/r170/examples/jsm/utils/BufferGeometryUtils.js
- **Source location / method:** Matching r170 export utilities; original bytes retained under assets/humanoid-v89/vendor-originals
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** 2026-11-02
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt
- **Modifications:** Bare Three import changed to bundled ./three.module.js and utility import changed to local path.
- **SHA-256:** `3de832095679e56578beddf70f3e90846a47ec8a886fa8eb21c973cdaef88922`
- **Bytes:** 31780

### asset-vendor-gltfexporter-js

- **Label:** GLTFExporter.js
- **File:** `vendor/GLTFExporter.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://raw.githubusercontent.com/mrdoob/three.js/r170/examples/jsm/exporters/GLTFExporter.js
- **Source location / method:** Matching r170 export utilities; original bytes retained under assets/humanoid-v89/vendor-originals
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** 2026-11-02
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt
- **Modifications:** Bare Three import changed to bundled ./three.module.js and utility import changed to local path.
- **SHA-256:** `3661101155f5ea91de1c5b026b55302ea6e82533b7d32592d3f1463f85543a29`
- **Bytes:** 81896

### asset-vendor-orbitcontrols-js

- **Label:** Orbitcontrols
- **File:** `vendor/OrbitControls.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://github.com/mrdoob/three.js
- **Source location / method:** Existing vendored Three.js package. Retained source and license.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** Original retrieval date unknown
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.
- **Modifications:** Legacy vendored copy; modifications not independently audited.
- **SHA-256:** `6f3052dd8860a60fe6999260d50558ff54609523724c6e374326228e5590cf55`
- **Bytes:** 32146

### asset-vendor-reflector-js

- **Label:** Reflector
- **File:** `vendor/Reflector.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://github.com/mrdoob/three.js
- **Source location / method:** Existing vendored Three.js package. Retained source and license.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** Original retrieval date unknown
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.
- **Modifications:** Legacy vendored copy; modifications not independently audited.
- **SHA-256:** `446cba593c612fabf01442b593b6bd69b6a13668ab55866a70579bcb5774ee3e`
- **Bytes:** 7055

### asset-vendor-three-license-txt

- **Label:** Three License
- **File:** `vendor/THREE-LICENSE.txt`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://github.com/mrdoob/three.js
- **Source location / method:** Existing vendored Three.js package. Retained source and license.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** Original retrieval date unknown
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.
- **Modifications:** Legacy vendored copy; modifications not independently audited.
- **SHA-256:** `4c40a1ef62450b857c3b2aaf294936304cd552d965fbcd9d32d4c5bcf4ba4454`
- **Bytes:** 1081

### asset-vendor-transformcontrols-js

- **Label:** Transformcontrols
- **File:** `vendor/TransformControls.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://github.com/mrdoob/three.js
- **Source location / method:** Existing vendored Three.js package. Retained source and license.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** Original retrieval date unknown
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.
- **Modifications:** Legacy vendored copy; modifications not independently audited.
- **SHA-256:** `ad26c2fd761370c633bf29d6138c136bb46da730dab269349fc06832c80211b1`
- **Bytes:** 41675

### asset-vendor-three-module-js

- **Label:** Three.Module
- **File:** `vendor/three.module.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://github.com/mrdoob/three.js
- **Source location / method:** Existing vendored Three.js package. Retained source and license.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** Original retrieval date unknown
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.
- **Modifications:** Legacy vendored copy; modifications not independently audited.
- **SHA-256:** `ce1fa418de16a19495a9f72495580e3015d7745c296d3ce0485897f902ddedfb`
- **Bytes:** 1314681

### asset-village-director-js

- **Label:** Village Director
- **File:** `village-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: village-director.js
- **Source location / method:** Version 38 project-authored missing-default initialization, non-destructive duration extension, snapshot, independent controls and keyframes, local replacement-image persistence and preview navigation.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 38 project-authored missing-default initialization, non-destructive duration extension, snapshot, independent controls and keyframes, local replacement-image persistence and preview navigation.
- **SHA-256:** `e90217ed5dd9bca19946b025a70d3ca7fe755a8d3a9e92830eadf2f096b23e5e`
- **Bytes:** 13052
- **Related provenance records:** `assets/village-generation-briefs-v38.json`

### asset-village-motion-js

- **Label:** Village Motion
- **File:** `village-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: village-motion.js
- **Source location / method:** Version 38 original sequential window, boys, town and craft timing following nursery end; clamped durations, independent enabled state and optional final fade.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 38 original sequential window, boys, town and craft timing following nursery end; clamped durations, independent enabled state and optional final fade.
- **SHA-256:** `ec37f24763927275e79489a4bb1548cb79cfec4fada416108e819441a8adfaa9`
- **Bytes:** 3132
- **Related provenance records:** `assets/village-generation-briefs-v38.json`

### asset-village-scene-js

- **Label:** Village Scene
- **File:** `village-scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: village-scene.js
- **Source location / method:** Version 38 canvas compositor preserved with a v40 measured continuous woman/arm/garment mesh; with a v39 corrected depth branch, close-face crossing and corrected blouse plate; focal window push, generated boys cutout, separately rendered labels and title, camera drifts, foreground spatial wipes and optional dissolve, light and dust. Reuses registered nursery passer byte-for-byte for both crossings. Generated plates are separately registered.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 38 canvas compositor preserved with a v40 measured continuous woman/arm/garment mesh; with a v39 corrected depth branch, close-face crossing and corrected blouse plate; focal window push, generated boys cutout, separately rendered labels and title, camera drifts, foreground spatial wipes and optional dissolve, light and dust. Reuses registered nursery passer byte-for-byte for both crossings. Generated plates are separately registered.
- **SHA-256:** `f6556f3a8bc13e8005ce2edc4aec2697b3ff58a019edea96d5bf1c3e4b1122f5`
- **Bytes:** 9070
- **Related provenance records:** `assets/village-generation-briefs-v38.json`

### asset-walk-controls-js

- **Label:** Walk Controls
- **File:** `walk-controls.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: walk-controls.js
- **Source location / method:** V60 visual joint dragging, limb attachment calibration, named sliders and preset import/export.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V60 visual joint dragging, limb attachment calibration, named sliders and preset import/export.
- **SHA-256:** `17a9a004c3a3ccb4a65f74b46e3ea1b60e6b0d969dfb3d3446848eb000f196db`
- **Bytes:** 11935

### asset-walk-studio-director-js

- **Label:** Walk Studio Director
- **File:** `walk-studio-director.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: walk-studio-director.js
- **Source location / method:** V60 blank-composition character authoring, preserving the classic cutout action.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** V60 blank-composition character authoring, preserving the classic cutout action.
- **SHA-256:** `830d2dae6635d35bccd7c2aca6000af6b20d13423f84a16992c109f74a57e1a1`
- **Bytes:** 1028

### asset-war-motion-js

- **Label:** War Motion
- **File:** `war-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: war-motion.js
- **Source location / method:** Version 45 single continuous camera-distance curve through cover, darkening and sky reveal; old stage durations contribute to travel time without a stationary dark hold.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 45 single continuous camera-distance curve through cover, darkening and sky reveal; old stage durations contribute to travel time without a stationary dark hold.
- **SHA-256:** `f013a95738ca10890d2811a56d5b4fc8942daa2a1e827fc3f4f452988baf311f`
- **Bytes:** 1492

### asset-war-scene-js

- **Label:** War Scene
- **File:** `war-scene.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: war-scene.js
- **Source location / method:** Existing separate sky, landscape, boy and fire compositor with v48 optional depth-camera projection. With no camera override, the earlier cloud/war passage remains unchanged.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Existing separate sky, landscape, boy and fire compositor with v48 optional depth-camera projection. With no camera override, the earlier cloud/war passage remains unchanged.
- **SHA-256:** `3501d153f36d9e53aa76b4393a75edeadf61b4faf6c9b8b35332aa137434d906`
- **Bytes:** 3913

### asset-wartime-director-js

- **Label:** wartime-director.js
- **File:** `wartime-director.js`
- **Usage label:** `project-authored`
- **Origin / exact source:** Approved V77 discrepancy corrections against supplied reference
- **Source location / method:** See IMPLEMENTATION-V77.md and exact factory/default/registry records. Earlier Chapter1 unchanged.
- **Author / brand owner:** Project authors
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Project-authored code; prior media origin unchanged
- **Modifications:** Deterministic shared Canvas renderer and editor append. No extracted reference footage embedded. V76 authorized editable refinement; see IMPLEMENTATION-V76.md. V77 authorized dark-floor, silhouette, money-burst, propeller/bank/flash, factory zoom, worker entry and later atlas-crop correction.
- **SHA-256:** `e837b09232fd5411ea204c4f6200493ea4bbc93e0bc43737f74f74c5f1a8afdd`
- **Bytes:** 15062

### asset-wartime-sequence-js

- **Label:** wartime-sequence.js
- **File:** `wartime-sequence.js`
- **Usage label:** `project-authored`
- **Origin / exact source:** Approved V77 discrepancy corrections against supplied reference
- **Source location / method:** See IMPLEMENTATION-V77.md and exact factory/default/registry records. Earlier Chapter1 unchanged.
- **Author / brand owner:** Project authors
- **Retrieved / created:** 2026-11-01
- **License / permission status:** Project-authored code; prior media origin unchanged
- **Modifications:** Deterministic shared Canvas renderer and editor append. No extracted reference footage embedded. V76 authorized editable refinement; see IMPLEMENTATION-V76.md. V77 authorized dark-floor, silhouette, money-burst, propeller/bank/flash, factory zoom, worker entry and later atlas-crop correction.
- **SHA-256:** `755ccf1067a8d208642a0a5193ac7662f7722536ba7d521e159bde05d0d528f4`
- **Bytes:** 34535

### asset-window-calibration-js

- **Label:** Window Calibration
- **File:** `window-calibration.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: window-calibration.js
- **Source location / method:** Version 42 manually calibrated pane grid and outer edge slopes measured against the project cradle image at stage scale 1.05. Calibration remains editable; not a measured original-reference camera solve.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 42 manually calibrated pane grid and outer edge slopes measured against the project cradle image at stage scale 1.05. Calibration remains editable; not a measured original-reference camera solve.
- **SHA-256:** `15925dc4e4544da9806d6e723c27447b179da35f0cbf1f93158951d8d5ddf81f`
- **Bytes:** 1281

### asset-window-presence-js

- **Label:** Window Presence
- **File:** `window-presence.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: window-presence.js
- **Source location / method:** Version 42 calibrated polygon pane matte, foreground-jug exclusion, advancing cloud clock and overscan projection. Project-authored geometry; existing custom pane settings retained.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 42 calibrated polygon pane matte, foreground-jug exclusion, advancing cloud clock and overscan projection. Project-authored geometry; existing custom pane settings retained.
- **SHA-256:** `00f68dc5648d98b3bf2fc6eb31757a1a372a03094ad81839d642c81ccae414cf`
- **Bytes:** 2317

## Non-file surfaces

- Font: Arial / system sans-serif, supplied by the user’s platform; no font file is bundled.
- Dust, clouds made from noise, lightning, glass seams and light bloom are procedural code surfaces; texture sprites remain separately registered above.
- Runtime user uploads remain browser-local until explicitly incorporated into source. They are not automatically treated as cleared reusable assets.
