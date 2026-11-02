# V61 · reference-feedback corrections

Status: implementation complete, final exports validated, user visual acceptance pending. No remote commit or publication performed. This report describes observable implementation choices and limitations, not a claim to reproduce the reference's original production method.

## Approved request and evidence

Joshua approved the correction plan after all 14 annotated screenshots were reviewed (083720, 093155, 093305, 093915, 094025, 094123, 094350, 094510, 094604, 094718, 094843, 094934, 095045, 095137). Restore the earlier walker appearance and animate both arms; correct color, depth, war destruction, terrain, smoke, lighting, grid collapse, sparks and camera passage. Original reference remains the user-supplied 71.242-second decoded clip. Its nominal filename does not establish exact source-master time. Screenshot sequence indicates state progression, not measured velocities or proof of full 3D geometry.

## Changes from large composition to small detail

- Classic photographic artwork returns as the sequence default. The V60 expanded mesh remains available in Walk studio and the engine toggle. The original engine is retained byte-for-byte at `dist/assets/archive/cutout-walk-original-v60.js`; original photographic source and original preset remain unchanged.
- `rigged-cutout-walk` retains static-arm behavior through an explicit false default. New `classic-walk-with-hands` is the enhanced variant. Both shoulders, elbows and wrists move in a coordinated gait; the torch tip passes through the same transforms as the held hand. Original face, coat and leg artwork remain the source. A clone-texture patch fills the near-arm undercoat; this is not a recovered hidden-body photograph.
- A separately generated colorized continuation-boy cutout restores muted skin, brown hair, off-white shirt and dark overalls. Original monochrome cutout remains available. Mother is rendered monochrome; room warmth and boy saturation are independently controlled. Dedicated continuation placement avoids changing earlier portrait-room shots.
- Street facades have varied heights, setbacks, lengths and rotations, textured wall returns, a separately defined road and irregular rubble blocks. A separate asymmetric collapsed-building cluster replaces the upright twin-façade composition in the salvage scene and supports the distant street. Photographic building planes, side geometry and foreground rubble create 2.5D depth, not full recovered ruined buildings.
- Street person is grayscale and projected through the same camera basis as the modeled buildings, replacing unrelated screen-scale growth. The source person's precise age, hair tone, uniform and identity still differ from the original reference.
- Broad photographic fireball grows upward and grades toward dark smoke. Procedural cloud puffs drift and evolve around it. Earlier narrow flame and tight circular mask are replaced for this scene. This is one generated source with authored transforms and grading, not a filmed multi-stage explosion or fluid simulation.
- Electrical lattice starts upright, then its row positions and brace angles collapse while cables sag. Local sparks scatter with deterministic trajectories. Lightning has separate timing and strength. These are authored 2D trajectories, not physically constrained 3D breakage. Salvage close-up cables remain the separate anchored cable action.
- Brighter red sky, denser cloud separation, less heavy scene darkening and timed flash improve readability. Existing living-cloud wind and shape controls remain available.
- Foreground building wipe now travels left-to-right for the camera-left passage, rather than the former opposite sweep. It remains an opaque layer reveal; no scene-wide dissolve is substituted.

## Simple controls

Open **Next sequence** in the existing editor. Expand **Walking** for classic/mesh selection, pace, leg swing, both-arm swing, elbow movement, hand movement and the arm-animation toggle. Expand **Arm attachment points** only when replacing artwork that needs different pivots; all six shoulder/elbow/wrist positions have labelled X/Y controls in original-image pixels. Advanced rig polygons remain artwork-specific.

Explosion, smoke, fall start/duration, grid placement/size, sparks, flash and lightning have named sliders. Replace explosion, collapsed buildings and continuation boy with their dedicated buttons. Ruin position, depth, width and height remain independent of its source. Boy size, X/Y, camera push, color/original toggle, saturation and room warmth are separate controls. Existing phase times retime the containing sequence; event cue seconds refer to the canonical source-clip clock before phase remapping. The searchable `war-destruction-collapse` variant reuses the same street implementation, with a 12.1-second preview beginning at source-clip 13.3 seconds.

## Exact principal defaults

| Control | Default | Unit |
| --- | ---: | --- |
| Sequence walker | classic | engine |
| Both arms enabled | true | boolean |
| Gait pace | 0.85 | cycles/second |
| Leg swing | 12 | degrees |
| Arm swing | 7 | degrees |
| Elbow movement | 4 | degrees |
| Wrist movement | 2 | degrees |
| Explosion start | 13.5 | canonical clip seconds |
| Explosion duration | 4.5 | seconds |
| Explosion size | 1 | multiplier |
| Explosion center/base | 490 / 250 | stage pixels |
| Smoke strength | 0.95 | scalar |
| Grid collapse start | 15.4 | canonical clip seconds |
| Grid collapse duration | 3 | seconds |
| Grid scale / X / Y | 1 / 0 / 0 | multiplier / pixels / pixels |
| Sparks | 1 | scalar |
| Flash | 0.65 | scalar |
| Lightning start / strength | 21.3 / 0.55 | canonical seconds / scalar |
| Street darkness | 0.18 | scalar |
| Boy width / X / Y | 600 / 120 / 45 | stage pixels before camera projection |
| Boy saturation / room warmth | 1.25 / 0.18 | scalar |
| Salvage ruin X / depth | 3 / -6 | model units |
| Salvage ruin width / height | 9 / 4.5 | model units |

The generated animation catalog and registry contain complete defaults, including exact attachment coordinates, nested rigs and playback settings. Native rate fields are not all multipliers. Stable IDs, content bindings and movement settings remain separate. New assets include exact prompts, parent/output hashes, dates and provenance. The generated sources were copied unchanged into the project using the built-in image-generation tool.

## Migration and retention

On first V61 load, previous engine choice is recorded in `expansionPreviousEngineV60`, then classic is selected for this approved restoration. Unchanged old factory sky/darkness values migrate to the revised defaults; custom colors/density/darkness remain. Existing mesh joints, source bindings, phase times and custom models remain. The colorized boy uses a dedicated continuation binding; it does not overwrite the earlier portrait source. Explicit model overrides still supersede factory model geometry. The historical V60 retention JSON describes the V60 release paths; V61's retention JSON points to the archived original and current enhanced engine separately.

## Validation and review limits

49 checks pass, including source preservation, shared-camera projection, changing torch tip, disabled-arm mode, explosion/collapse cue behavior, persistent smoke, facade variation, source availability, editor controls, registry parity and focused/full shared frame rendering. No native-browser hardware performance certification or audio review is claimed. Review videos are silent. User acceptance of timing, likeness and realism remains pending.

Final portrait framing was refined after the long exports started. Frame-grid-matched portrait patches replace only the relevant ranges using the shared final renderer: focused frames 105–361; full-review frames 2087–2344. Counts and duration stay unchanged. All final videos must pass strict full decode before packaging; no unfinished encoder target is used as a deliverable. Patch assembly/settings are retained for reproducibility.

Remaining differences: repeated facade texture and ground detail, photographic plane silhouettes, residual arm-mask seams at larger swings, torch/terrain interaction, stylized helmet and collapse trajectories, exact explosion/smoke evolution, depth/blur and source camera calibration. These are material visual review points; passing tests does not make the result reference-perfect or prove it surpasses the reference.


## Subsequent V61 rejection and pending detailed review · 2026-10-29

Joshua is dissatisfied with V61. New annotated screenshots 113121–114505 and sampled comparison frames identify missing gray paper surround/right wooden structure, grayscale destination room, overlap/framing/light mismatch, unchanged rubble road material, repeated facade source/red leakage, wrong street person/costume/scale, fence-like electrical structure, weak smoke/incorrect opening grade and paper-like sparks. Analysis only: no visual edits or timings changed. Pending issue IDs P01–P04 and S01–S06 are detailed in V61-REFERENCE-REVIEW.md. Recommended production path: preserve photographic artwork, calibrated 2.5D layers and both-arm animation; mesh remains optional. Await interpretation approval before implementation.
