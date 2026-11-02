# Visual fidelity review

This review is required for every new scene or substantial motion change. Repeat it at scene milestones and after changes to timing, camera, lighting, assets or compositing that could affect adjacent scenes. Numerical checks alone do not establish visual fidelity.

## Reference and approval workflow

1. Prefer the original video file at native speed. A downloadable Drive file is equally useful once its bytes are accessible. Keep its filename, frame rate, resolution and time base with the analysis.
2. Extract timestamped frames covering entrance, intermediate motion, assembly, hold, transition and exit. Inspect native-speed playback as well. Do not select only an attractive still.
3. Present a compact frame sequence to Joshua. Describe composition, camera movement, object motion, focus/blur, lighting, depth, transitions and exits. Label direct observations separately from inferred techniques and unresolved details.
4. Propose the next bounded implementation change. Wait for Joshua's validation of the reference interpretation and proposed effects before implementing it. This approval applies to future visual changes; it does not retroactively assert approval of v36.
5. Implement the validated change in the existing template. Preserve controls and user settings; document migrations. Register every added or modified distributed asset.
6. Compare implementation and reference at equivalent stages and native playback speed. Record discrepancies and approximations. Check adjacent scenes and run relevant regression checks.
7. Report the result, remaining gaps and exact commit/deployment status. Do not call it frame-perfect or finished without supporting evidence.

If only screenshots are available, use them for composition and visible state. Their spacing or filenames do not establish motion speed or duration. Extracted video frames should retain their actual source timestamps.

## Review checklist

- [ ] Reference identity, source and timestamps recorded.
- [ ] Entrance, intermediate motion, assembly, hold and exit reviewed.
- [ ] Camera framing, perspective, depth and object overlap compared.
- [ ] Focus hold, focus transition, peripheral blur and motion softness compared.
- [ ] Light direction, flash/sweep timing, reflections, bloom and darkening compared.
- [ ] Text content, scale, spacing, letter entrances and easing compared.
- [ ] Logos use registered geometry; uncertain shoe branding remains unlabelled.
- [ ] Continuity, complete disappearance and black intervals checked.
- [ ] Environment dims before the final composition fade where required.
- [ ] Controls stay usable within the viewport; advanced controls stay collapsed.
- [ ] Custom settings and keyframes survive; migrations are documented.
- [ ] Asset provenance and relevant automated checks completed.
- [ ] Joshua's reference interpretation approval recorded.
- [ ] Remaining visual discrepancies and publication status recorded.

## Current review: v36 · 2026-10-28

Implementation commit: 5fc6dd89f185388eb869c5c6c03ad0bf9e5d18d3.

References: the uploaded Motion-Atelier-References-v35 pack, containing reference screenshots and annotations. Original video and measured source timing have not been supplied for this review.

Completed inspection:

- Cargo/shoulder staging at depot 12 and 17 seconds: cargo tops appeared above shoulders; existing transforms were retained.
- Revised glass at 45.5 seconds and dark hold at 49.5 seconds.
- Portal absorption at 51.8 seconds and frame absence at 52.3 seconds.
- Black interval at 60.3 seconds.
- Chapter entrance at 62.1 seconds, intermediate assembly/right light at 64.6 seconds, assembled/hold states at 67 and 71 seconds.
- Environment dim at 83.5 seconds, late fade at 86 seconds and black exit at 88 seconds.
- Chapter playback at 1x and the collapsed advanced shoe controls.
- All 19 check scripts passed; the register covers 73 items with updated procedural asset hashes.

These times belong to the implementation timeline, not the source video.

Changes reviewed: shaped procedural trainer geometry, per-shoe arrival/depth controls, subtler chapter branding and glow, moving right light, independent glass reflections, narrower irregular portal and earlier edge-on rotation.

Remaining gaps: source-video timing and a direct synchronized comparison are pending. Shoes remain illustrative procedural meshes; exact branded product fidelity and right-side branding are unverified. No frame-rate benchmark or frame-perfect match is claimed. Joshua's visual acceptance of v36 is pending.

Publication: GitHub main was verified at the implementation commit above. The earlier Sites project returned "Sites project not found"; no deployment to that URL was confirmed. Vercel deployment setup was subsequently discussed; deployment success has not yet been verified.

## Future review entry template

- Version / date / commit:
- Reference file and source timestamps:
- Frames shown for validation:
- Observed effects:
- Inferred techniques and uncertainties:
- Proposed bounded changes:
- Joshua's validation / requested corrections:
- Implementation timestamps reviewed:
- Discrepancies remaining:
- Settings migrations and asset-register changes:
- Checks performed:
- Commit and confirmed deployment status:


## Review: v37 nursery continuation · 2026-10-28

- Approval: Joshua said “go ahead” to the interpretation and implementation of 1898 → mother/baby → foreground figure → cradle/window.
- Reference: uploaded 31-second 30 fps clip, with original time offset +74 seconds supplied by Joshua. Ten timestamped full-resolution frames were reviewed before implementation.
- Scope: the date, lateral reveal, mother hold, occlusion passage and cradle/window hold; later boys scene remains the next beat.
- Assets: three new generated historical illustration PNGs; exact prompts and source-reference provenance are in assets/nursery-generation-briefs-v37.json. Central register has 79 items.
- Browser checks: depot 88.30, 89.70, 92.30, 94.30, 95.20 and 97.50 seconds, plus 1x new-scene playback. Tested date/room/foreground/cradle stages and editable date controls. Date curves were smoothed during review.
- Automated checks: all 20 entry points passed in the full regression run; new nursery code has timing, missing-asset, render-boundary and preservation checks. Relevant checks and final provenance hashes are repeated after final review edits.
- Migration: missing nursery values only; earlier chapter settings and keys are preserved. A prior-duration snapshot is retained and duration grows to include the new beat.
- Remaining gaps: photographic plates, not independently animated characters or a full 3D room; approximate date letterforms and reference identities; no exact frame-perfect claim. User acceptance of final v37 visuals is pending.
- Full details: docs/NURSERY-CONTINUATION.md. Exact remote commit and confirmed deployment status are reported in the delivery response.


## Review: v38 · window, boys, town and crafts · 2026-10-28

- Source: two re-uploaded clips; first +74 seconds original offset, second nominal +104 seconds with an unrelated opening fragment excluded. Exact filenames, sample times and source hashes are in the v38 generation brief.
- Joshua validated the displayed frame interpretation and explicitly authorized both continuations, with later review/revision expected.
- Observed: window approach, RUDI/ADI reveal, boys clearing to town/title, foreground overlap to shoemaker, later overlap to woman/blouse. Inferred: layered focal push, window dissolve and occlusion wipes.
- Implemented after the existing nursery endpoint; earlier settings and tracks preserved. Four new generated assets and two reused cloth passages; controls and presets remain editable and advanced groups collapsed.
- Offline renders inspected at entrance, intermediate approach, boys hold/exit, town hold, both transition midpoints and craft holds. Boys labels corrected to follow their image during exit.
- All 21 checks pass. A 30 fps offline continuation preview is supplied for user playback review.
- Native-speed reference and browser playback review could not be completed in this environment; no browser performance or frame-perfect fidelity claim. User visual acceptance and later revisions remain pending.
- Full timing, settings/migration details, asset provenance and limitations: docs/VILLAGE-CONTINUATION.md.


## v39 · detailed depth correction and laundry · 2026-10-28

Joshua authorized broad-to-fine analysis, verification and implementation. 557 decoded frames from three selected clip ranges were measured using actual timestamps, regional optical flow, forward/backward feature tracks, RANSAC similarity, luminance and sharpness. Observed depth, progressive glass clarity, name opacity, accelerated image-left exit, title drop, close-face passage and blouse-to-aerial sequence are separated from inferred compositing techniques in `docs/PRECISION-CONTINUATION.md`.

Seven new generated/edited assets are registered with exact prompts, parent/output/source hashes and permission status. Earlier source assets remain intact. Advanced controls stay collapsed, missing defaults only are filled, custom keys/uploads are preserved, and duration only grows. All 22 regression entry points pass. Offline staged renders and a 31-second 30 fps preview support review; native-speed source/browser comparison is not completed or claimed. See the precision continuation notes for remaining differences and user review status.


## v40 · pane appearance, woman motion and retention · 2026-10-28

Joshua authorized the reviewed correction plan and requested hypothesis testing, preservation of the liked artwork and retention of rejected assets. A held-out feature/temporal-frame test supports separate woman/garment/forearm transforms over one global move. Regional source errors, masks and assumptions are archived. Source curves are retargeted onto the unchanged woman PNG with rigid face/garment regions and positive-area mesh protection. Safety attenuation means source displacement is not reproduced exactly; see the v40 review note.

The boys appear during the last cradle hold behind the pane bars and continue into the approach. All available generation outputs are retained by hash; rejected blouse and mesh diagnostic assets are inactive and searchable. Earlier source files/settings are preserved. All 24 checks pass; staged offline review and a 32.5-second preview support user review. Native-speed live browser/source comparison remains unverified. Details: `docs/WINDOW-GESTURE-RETENTION-V40.md`.


## V55 — ruined-window correction ·2026-10-29

Joshua approved the screenshot interpretation and2.5D approach with “YEAH GO AHEAD”. Exact selected input and generation records are retained. Observed shrinking/relative shifts and inferred damaged opening are distinguished from unconfirmed3D building geometry in `RUINED-WINDOW-V55.md`. Offline entrance, intermediate, passage and exit frames are inspected. New source slots receive missing defaults only; original flat source and custom existing settings remain. Native reference playback and browser review remain unverified. No deployment or remote commit is claimed.


## V56 — shoe paper and pullback ·2026-10-29

Joshua approved the corrected screenshot interpretation with “YS, GO AHEAD”. Reference screenshots establish pose/scale/paper states, not native speed. Offline review covers entrance, intermediate, final shoe zoom, fold onset/compression, small rotating form and left exit. Exact paper-generation source and prompt are retained. Initial intersecting shoe geometry was replaced after inspection with a sealed mesh and per-pixel depth buffer. Default independent window travels migrate only when matching240/-55/145. Original effects remain recoverable. Shoe photographic detail, physical paper accuracy and native-browser playback remain gaps. No deployment or remote commit is claimed.


## V57 — original shoe restoration ·2026-10-29

Joshua approved restoring the earlier shoe appearance while retaining V56 movement/background/crumple. Original faces/materials/grain are preserved, with60 local seam faces appended. Row, tilt, mid-turn, front zoom and paper exit were inspected offline. Exact approved pose/fold fixture is bundled. Original spike proportions return with a guarded default migration. Rejected V56 implementation and preview are archived. Native-browser playback remains unverified; no deployment is claimed.


## V61 · annotated-feedback correction pass · 2026-10-29

Joshua approved the reported differences and proposed corrections with “Go ahead, implement.” All 14 annotated screenshots, current V60 and preserved classic walker were inspected; final V61 staged offline renders cover overlap, explosion, collapse, search, close view and exit. New photographic sources are independently registered; original/rejected alternatives remain. Shared camera basis and opaque passage direction corrected. Original-vs-enhanced walker and source-vs-V61 review exports accompany the project. Exact original production method, native-speed browser behavior, source-master audio alignment and reference-perfect similarity are not certified. See FIDELITY-CORRECTIONS-V61.md and TIMELINE-V61.md. No remote commit or publication performed.


## V62 · approved photographic staging corrections

P01–P04 and S01–S06 interpretation was approved by Joshua. The room and street assets/layer hierarchy were rebuilt and staged offline frames inspected before long export. Color/overlap, gray surround, shelf, dark road/interiors, figure placement, failure and smoke states reviewed; functional checks remain separate from visual acceptance. Exact values, asset prompts/hashes, editing controls and remaining limits are in FIDELITY-CORRECTIONS-V62.md. Saved V61 reference-column frames supply comparison evidence; native-resolution original and sound have not been newly reviewed. No remote commit/deployment claimed.


## V63 · approved R01–R14 correction pass

Approval: Joshua said “then go ahead make the appropriate visual edits.” Joshua's Visual Review skill applied. Offline frames inspected at paper hold, overlap, close face, fire/failure, settled wires, salvage and near walker. A further screen-direction check corrected pan amplitude/curve and added a foreground-motion assertion. Functional and visual checks remain distinct. Exact implementation, controls, preservation, export method and remaining limits are recorded in FIDELITY-CORRECTIONS-V63.md. No remote project publication or commit performed.

### V64 — cable visibility, character framing, young walker
Do not treat a geometry-bound point as attached until its UV lies on visible solid material. Check falling spans during the zoom, not just at onset. Check both hand silhouettes through a complete gait cycle; larger swing can expose cut-mask islands and joint gaps. Use encoded entry/mid/exit comparisons. Detailed merged ledger: FIDELITY-CORRECTIONS-V64.md. User approval covers implementation; no further approval request is needed for these corrections.


## V69 — authorized globe implementation

Joshua explicitly authorized the globe/sky/cloud/spin/lighting/flash implementation. Entrance, spin, approach, cloud cover and exit are compared at timestamped stages; first authored visual remains pending user acceptance. Exact source identity, timing, preservation, migration, functional checks and remaining gaps are recorded in IMPLEMENTATION-V69.md and TIMELINE-V69.md. No remote commit or publication. Native browser layout/performance unverified.


## V70 — approved dramatic reinterpretation

Joshua explicitly changed the goal to exceed the original in drama and approved animated logos, depth/sweeps/departure, layered moving sky, electrical accents, approach and sound. Timestamped source narration was checked. Review uses both original and V69 as context; creative divergence is intentional. Diagnostic artifacts were corrected before final export. Implementation, controls, clock preservation, original audio provenance and remaining limits are in IMPLEMENTATION-V70.md. No publication/push.

## V75 · 2026-11-01 · original 07:55–08:55

Joshua approved the reported scene/effect interpretation and explicitly authorized assets and implementation. Source original [475,535), local [0,60), default template [485,545). CPU rendered entrance/intermediate/hold/exit samples and encoded temporal sampling reviewed. Stadium perspective corrected and fire strengthened. Exact V74 join, explicit black interval, editable layer isolation, custom timing and main director restoration verified. Body poses, likenesses, architecture, aircraft, family composition, eye optics and flame behavior remain approximations; see IMPLEMENTATION-V75.md. Prior image bytes and settings retained; only missing new defaults are added. No browser/GPU performance certification or remote deployment/commit is claimed.


## V76 authorized refinement
Joshua approved the V75 diagnosis. Recovered V75 and saved generated assets after interruptions. Shared sneaker join, real human masks, independent people, alpha-derived stadium wipe, changing VFX, eye tracking, opaque exterior wipe and eight-person family framing rebuilt. Previous and restored visual samples inspected. Numerical checks and visual acceptance are distinct. See IMPLEMENTATION-V76.md. No remote deployment.


## V77 approved visual discrepancy pass
Joshua explicitly authorized correction of propeller motion and related visual discrepancies. Reference aircraft506.3–510.7 and factory entrance518–520.4 sampled densely. Restored moving propeller/bank/light, dark floor/ground, layered silhouettes, ballistic notes, factory zoom and rising worker. The earlier Chapter1 is byte-identical. Later atlas crop boundaries calibrated before judging shoe size. Functional checks are separate from visual acceptance. See IMPLEMENTATION-V77.md.


## V78 review
Joshua approved the five stated corrections; see IMPLEMENTATION-V78.md, TIMELINE-V78.md and validation-v78.json. Final encoded evidence accompanies the review. No remote publication.


## V83 · source10:55–11:55
Joshua approved the interpretation, assets and implementation. See IMPLEMENTATION-V83.md, FEEDBACK-V83.md, STRUCTURAL-ANALYSIS-V83.md, TIMELINE-V83.md and VISUAL-REVIEW-V83.md. Source655–715/default template665–725. Existing backlog deferred to around15:00. No publication.


## V85 · original12:55–13:55
Joshua approved the27-stage analysis and authorized assets, implementation and comparison. Current source covers775–835/default template785–845. See IMPLEMENTATION-V85.md, FEEDBACK-V85.md, STRUCTURAL-ANALYSIS-V85.md, TIMELINE-V85.md and VISUAL-REVIEW-V85.md. Original prior renderer bodies remain unchanged. Continuous audiovisual viewing and browser verification are not claimed. No publication.


## V88 · authorized refinement at original14:55–15:00
Joshua authorized the forensic correction and resumed implementation. Complete original/reference viewports were compared, correcting the cropped-screenshot coach inventory error. The connected skin, props, source-time framing and3D exports are implemented; topology and sampled skin/export checks pass. Full150-frame render and seven encoded parity samples accompany an interactive frame review. Visual acceptance remains pending. Head estimates alone do not certify silhouettes; hands, seating, smoke, shadows and the895model join remain partial. Continuous audiovisual/0.05x viewing and live browser/Godot validation were not performed. See IMPLEMENTATION-V88.md and docs/v88. No publication.

## V89 · native humanoid/editor first release
Joshua explicitly authorized the anatomical replacement and native integrated editor, with the humanoid first. External authoring apps are not required by users; bundled libraries/assets are allowed. Neutral/crimson/blue studies and the150frame native source comparison were rendered with the actual WebGL2 skin/lighting path. Earlier failed style/segmentation candidates remain inactive. Browser controls, main Blank Composition/template integration, scene validation, actual GLB structure and legacy preservation checks accompany delivery. Reference pixels remain diagnostics only. Full-body fidelity, tailored clothing/contact/correctives, continuous audiovisual viewing, hardware/mobile performance and the895model join are not certified. See IMPLEMENTATION-V89.md and docs/v89. No publication or remote commit.

## V90 second release
Source895–900; user-authorized hat/proportion/shadow refinement. See IMPLEMENTATION-V90.md. Matching frames0/20/80/115/116/147 and native WebGL comparison are reviewed. Prior asset bytes and13earlier scene hashes preserved. No continuous playback or completed all-backlog claim.

## V92
User approved detailed V91 visual review. Reference895–900; new pose/silhouette/lighting corrections, scoped-light pixel isolation and cut-exact hat tracks. Matching study and encoded source frames reviewed. Exact source parity and continuous playback review not claimed.
