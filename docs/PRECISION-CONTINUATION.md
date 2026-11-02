# Version 39 · depth corrections and laundry continuation

Joshua approved correction of the v38 window-to-town motion and implementation of the new 1:50–2:06 footage. He requested the workflow **overall motion → layer details → verification → finer details**, with deterministic tools where useful. The final “go ahead” authorizes this implementation; final visual acceptance remains pending.

## Broad pass, then detailed passes

1. The broad pass identified window approach, children/names, foreground masonry, town clearance/title and close-face passage. The new clip overlaps the existing workshop/blouse and adds isolated blouse → aerial town → repeated garments/cloud cover → THE LAUNDRY BOYS.
2. Every decoded frame in selected ranges was measured. OpenCV Farneback flow, Shi–Tomasi/Lucas–Kanade feature tracks with a forward/backward check, RANSAC similarity transforms, regional luminance/contrast and Laplacian sharpness estimates provide repeatable pixel evidence. Actual FFprobe timestamps are retained; the WebM clips are not assumed to have a fixed frame rate.
3. Dense visual samples around glass transmission and the children's exit were inspected again. The pair clears toward **image-left**, growing before the strongest lateral acceleration. Descriptions of a “camera move right” can refer to the opposite camera-relative direction. Source-image movement is the implementation convention.
4. Offline implementation samples were checked against equivalent stages. Revisions included increasing central cloud overlap, delaying lateral acceleration, making names larger and progressively solid, delaying the downward town title until the children clear, strengthening building depth approach, correcting the puff-sleeved garment and removing an early garment crop during pullback.

## Evidence and confidence

| Source | Exact sampled range | Decoded frames |
|---|---:|---:|
| `Nazi_Brothers_cut_01-14_to_01-45.mp4` | 22.000–30.933333 s | 269 |
| `…_01-44.0_to_01-56.0.webm` | 0.635–4.052 s | 42 |
| `…_01-50.0_to_02-06.0.webm` | 0.000–15.973 s | 246 |

Total: **557 decoded frames**. Measurements and half-second summaries are in `docs/analysis-v39/`. Source SHA-256 hashes, exact generation prompts, edit parents and output hashes are in `dist/assets/precision-generation-briefs-v39.json`.

At clip 25.0–25.5 of the MP4 (original 1:39.0–1:39.5), fixed-region median horizontal flow at 640-pixel analysis width was about −9.50 px/s in the sky, −0.37 px/s in the central foreground, −54.04 px/s in the left masonry/building region and +14.00 px/s in the right region. This supports distinct image-space trajectories. It does not uniquely recover a physical camera or separate every object. A nominal −14 px/s cloud setting on the 960-pixel template canvas corresponds to approximately −9.33 px/s at 640 pixels, before perspective, blending or masking.

The left region contains both near masonry and buildings at different times. The central region is not a semantic segmentation of the children. During cuts, occlusion, glass dissolve or blur, an affine estimate can be misleading. Per-pair track count, forward/backward error, RANSAC inlier ratio, frame difference and reliability flag are preserved in the CSV. Do not integrate transforms across unreliable transitions or call regional flow a measured world-space camera path.

Observed: progressive pane clarity, a light swell during approach, pale-to-solid names, depth-dependent motion, cloud movement, enlarged children clearing sideways, title falling after clearance, close face before the workshop, isolated blouse receding into the aerial, repeated garment shapes, cloud cover and typed heading.

Inferred implementation: separate image planes; per-pane transmission masks; focal image push; independent foreground, building and cloud curves; spatial occlusion; blouse-to-aerial composite; repeated garment sprites and character reveal. The underlying production techniques, physical depths and source identities are not established.

## What changes in v39

- The exact v37 nursery endpoint remains the first frame of the continuation. The existing v38 clocks remain: window starts at Depot 99.20, boys hold at 101.50, sideways exit at 104.00, town at 105.20, workshop passage at 108.00 and blouse hold at 116.20.
- Panes transmit the new scene individually while bars remain in the foreground. Light swells and settles during the approach. This is a mask-based reconstruction using editable pane geometry, not reconstructed 3D glass.
- A transparent-sky town plate sits over moving cloud sprites and an editable sky gradient. Near masonry moves faster and clears independently. Buildings advance separately from the children. Buildings are still one photographic architecture plane, not separately reconstructed meshes for every facade.
- Names begin pale during clearance and become solid during the hold. The pair grows, then accelerates left; names move with the pair. Existing custom exit values are honored when they differ from untouched v38 defaults.
- The town title waits until the boys clear, then descends from above. A new close boy face/shoulder asset replaces the generic cloth for the workshop entrance by default. The cloth entrance remains selectable.
- The woman/blouse plate has a new sibling with short puff sleeves. The original v38 plate remains available. A separate garment asset supports the aerial pullback.

## New continuation timeline

| Stage | Depot seconds by default |
|---|---:|
| Existing blouse end / new laundry start | 119.20 |
| Blouse isolates and recedes over the aerial | 119.20–120.50 |
| Aerial / repeated garments / growing cloud cover | 120.50–126.20 |
| THE LAUNDRY BOYS writes left to right | 126.20–128.20 |
| Title hold with continued cloud movement | 128.20–130.20 |

Depot duration grows to at least 130.45 seconds. Original-video time and Depot time are separate clocks. Source original offsets are +74 seconds for the MP4 and nominal +104 / +110 seconds for the two WebMs. Both WebMs contain unrelated opening fragments; those fragments are excluded from authored sequences. Nominal source clocks are not asserted to be frame-perfectly synchronized.

The map plate is a new illustrative red/black aerial town, not a geographically accurate map. The garment's shape, placement and repeated positions approximate the reference. A rotation-aware minimum map scale prevents black corners. Clouds continue moving during the title hold. No new narration or sound design is invented; the transcript remains pending.

## Editing and preservation

Depot adds **Watch corrected window & town** and **Watch laundry aerial**, plus jump moments for panes/light, pale names, masonry, sideways exit, title drop, garment pullback, aerial, title writing and title hold.

The collapsed **Window depth & laundry continuation** section exposes routine adjustments and Layered / Soft depth presets. Advanced Look & motion surfaces expose pane geometry, transmission/light curves, cloud direction/speed/opacity, sky colors, building travel/approach, masonry placement, boys' exit acceleration and enlargement, label/title multipliers, the near face, aerial camera, garment count/size/spacing/sway, clouds and heading. Numeric values retain the existing surface keyframe workflow.

**Use v38 window motion** retains the prior renderer as a compatibility option. The new face can be switched back to cloth. Laundry can be disabled independently. Missing values only are initialized; v38 settings, track keys, track easing and image uploads are retained. `precision-before-v39` snapshots the prior duration and exit values. Duration grows but does not shrink on disable.

Custom browser-local town/blouse replacements remain preferred over the new bundled siblings; an explicitly replaced new architecture/blouse slot takes precedence. Seven new image slots use the existing replacement persistence system. Retry keeps custom replacements. No prior assets are deleted. The full-animation reset includes v39 defaults and sufficient duration.

## Assets and tools

Seven final generated PNGs: architecture with transparent sky, cumulus sprite, masonry, near face, aerial town, isolated short-sleeved blouse and corrected woman/blouse room. Final PNGs are copied byte-for-byte. The isolated blouse and room are edits of generated project assets; their parent hashes/prompts are recorded. No source-video pixels are production assets. The superseded long-sleeved intermediate is not distributed.

Run the reusable analysis:

```sh
python -m pip install -r scripts/requirements-motion-analysis.txt
python scripts/analyze-reference-motion.py VIDEO --start 22 --end 31 --output analysis/window
```

The analysis runs locally and does not call an external video-analysis service. It requires FFmpeg/FFprobe on PATH. For optional offline rendering, install `@napi-rs/canvas` in a separate development environment and run `node scripts/render-motion-review.mjs` for stage stills or `node scripts/render-motion-review.mjs --video 0 929` for 930 PNG frames. The renderer writes `review-stills/` and `review-frames/`; these are development outputs, not required site files.

Runtime rendering remains buildless and requires none of these analysis dependencies.

## Verification and remaining limits

All 22 check scripts pass, including a new precision/laundry regression check. It covers progressive transmission/light, pale-to-solid names, masonry clearance, title-after-boys ordering, accelerating sideways exit, sequential new clocks, fades and disabled states, missing assets, finite draws, default parity and preservation of custom settings/tracks. Legacy village checks explicitly exercise compatibility mode.

A pixel comparison at 960×540 found zero channel difference at both the nursery/window and blouse/laundry boundaries; see `docs/analysis-v39/boundary-check.json`.

Offline render review covers exact incoming boundary, partial approach, visible panes, children/name hold, sideways exit, title fall/hold, near-face passage, workshop, cloth passage, corrected blouse, laundry boundary, garment pullback, aerial, title writing and title hold. A 31-second, 30 fps offline preview is included for playback review. It is silent and is not proof of real-time browser performance.

Native-speed source playback and live browser comparison remain unverified in this environment. Earlier browser preview access was unavailable and local-file navigation was policy-blocked; no workaround is used. Full timestamp-based decoding and offline frame inspection supplement that gap but do not constitute native-speed visual review. No pixel-perfect fidelity claim is made.

Remaining approximations include illustrative architecture/people, one shared boys cutout, a masked rather than true 3D window, a single building plate, generated garment differences and photographic workshop hands/cloth rather than skeletal animation. Existing procedural shoe geometry and branding uncertainties remain untouched. Final user playback review and revisions are expected.
