# Window, boys, town and crafts · version 38

This revision extends Motionclone-v37 in place. It preserves completed scenes and the existing nursery endpoint. Joshua validated the two reference interpretations and explicitly authorized asset creation and implementation, with visual revisions to follow later.

## Reference review

- `Nazi_Brothers_cut_01-14_to_01-45.mp4`: 1920×1080, 30 fps, duration 31 seconds. User-supplied original offset +74 seconds. Reviewed clip 22, 23, 24, 25, 26, 27.5, 29 and 30.5 seconds (original 1:36–1:44.50).
- `The Nazi Brothers Who Started Rival Shoe Companies - MagnatesMedia (1080p, h264)_01-44.0_to_01-56.0.webm`: 1920×1080, millisecond time base; average frame rate is not reported by ffprobe. The +104-second original offset is nominal, derived from the filename. Reviewed clip 0–11 seconds, with additional samples around both transitions.
- The second clip contains approximately half a second of unrelated aerial imagery at its opening. This is excluded from the continuation. Do not infer an exact synchronized overlap between the two clips.
- Exact source attachment IDs, source SHA-256 hashes, sampled times, prompts and output hashes are in `dist/assets/village-generation-briefs-v38.json`.

Observed: the camera approaches the nursery window; two boys appear beyond the glass; window edges clear and the boys are labelled RUDI and ADI. The boys clear the frame and the town title Herzogenaurach appears. An enlarged foreground person overlaps the view as the shoemaker workshop enters. A later foreground overlap introduces a woman holding a blouse. Cool street daylight gives way to warm workshop/window light, with soft peripheral detail.

Inferred: depth-separated image planes, focal camera push, window dissolve and foreground concealment wipes. These are authored reconstruction techniques, not a claim about the original production's software or layer structure. The initial frame interpretation and proposal were presented to Joshua before implementation; he approved both and asked to move quickly, review and revise afterward.

Native-speed limitation: source frames were inspected at exact clip timestamps. This session could not complete native-speed source or template browser playback review: a local browser executable was unavailable, its download failed, and the separate review browser could not access the local preview. A file-navigation policy block was respected. No live-browser visual acceptance, real-time frame-rate benchmark or native-speed comparison is claimed. Offline rendering and a 30 fps review video provide a reviewable implementation; user playback review remains pending.

## Default implementation timeline

Times below are **Depot-local**, not original video times. Earlier v37 pacing remains intact.

| Stage | Depot seconds | Behavior |
|---|---:|---|
| Existing cradle hold ends | 99.20 | Exact previous nursery end is the incoming continuation's first picture |
| Window approach | 99.20–101.50 | Push toward editable focal point, dissolve through the enlarged glass into town/boys |
| Boys moving hold | 101.50–104.00 | Slow foreground push; separate editable RUDI / ADI labels |
| Boys clear | 104.00–105.20 | Foreground pair grows and moves down/left; attached labels fade early |
| Town/title hold | 105.20–108.00 | Slow background push and separately rendered gradient title |
| Workshop passage | 108.00–109.70 | Foreground cloth travels right to left, concealing a spatial wipe |
| Shoemaker moving hold | 109.70–114.20 | Warm workshop plate pushes slowly with lateral drift |
| Blouse passage | 114.20–116.20 | Second foreground cloth overlap conceals the new plate |
| Woman/blouse hold | 116.20–119.20 | Slow push and drift; final image held by default |

Depot duration grows to at least 119.45 seconds. Stages derive from durations: changing a hold shifts later stages while preserving order. A start override can delay but cannot overlap the nursery. A prior nursery end fade, if customized, is respected. The new final fade defaults to zero; setting it above zero produces a fade after the blouse hold.

## Editing and later revisions

Depot includes **Watch boys → town → crafts**, **Watch workshop → blouse**, and eight additional jump moments. **Boys, town & crafts** is collapsed by default and exposes names, title and routine hold durations. Reference passage and Soft passage presets change transition style and easing without resetting image transforms or earlier scenes.

**Look & motion** adds seven surfaces: continuation timing, window approach, boys/labels/exit, town/title, shoemaker, blouse and foreground/atmosphere. Numeric values use existing Depot keyframes and interpolation. Timing, focal point, zoom, placement, push, drift, blur, brightness, saturation, name/title text and colors, foreground width/travel/light, dust and vignette remain editable. The final fade is under timing. Clicking a visible new image opens its surface controls and replacement action. The boys use their alpha silhouette for picking.

Four new image slots use existing browser-local replacement/persistence. Retry images keeps replacements; Restore bundled continuation images explicitly clears only the four continuation image replacements. It does not clear nursery or earlier uploads. Advanced image controls remain collapsed. An unavailable asset displays a message; missing later workshop/blouse assets do not block earlier boys/town rendering.

For a revision, identify a jump moment or Depot timestamp, then adjust that surface. Typical requests can target window dissolve timing, boys scale/exit direction, label placement, town framing, workshop hold or the two foreground crossings independently.

## Settings preservation

Missing v38 settings are filled without overwriting existing values. The `village-v38` marker records the duration snapshot in `village-before-v38`. Duration only grows; disabling the new continuation does not shorten a custom timeline. Existing chapter/nursery controls, Depot tracks and track easing remain intact. No existing localStorage or IndexedDB key is renamed or cleared on startup.

The complete-animation reset includes the new defaults and sufficient duration. Module/cache query tags advance to `motion-v38`; no earlier scene geometry, assets or timing defaults are redesigned.

## Assets and provenance

Four new built-in image-generation PNG outputs are copied byte-for-byte: `village-boys-v38.png` (genuine alpha cutout), `village-town-v38.png`, `village-workshop-v38.png`, and `village-seamstress-v38.png`. All are original fictional illustrations guided by textual observations of the supplied frames. No reference image was submitted to the generator. No source-video frames are bundled as scene assets.

The existing registered `nursery-passer-v37.png` is reused byte-for-byte for both adult crossings. Canvas placement, scale, brightness and blur are independently editable. The center of its cloth covers the spatial-wipe boundary; alpha sampling across the visible height at widths 1300, 1500 and 1900 found minimum alpha 252/255. Character identity and exact crossing shapes are approximations.

All prompts, source attachment identities, hashes, modifications, generation date and permission limits are recorded in the briefs and central asset register. The generator model version was not exposed. New scene/motion/director code is project authored. Arial/system sans-serif is used; the offline preview substitutes locally available Nimbus Sans for Arial. No new font is distributed.

## Verification and known limits

- All 21 `scripts/check-*.mjs` entry points pass after updating the Depot asset recovery check's expected cache tag to v38.
- New `check-village-motion.mjs` covers stage ordering, following customized nursery lengths and fades, start clamping, held/faded endings, disabled state, custom setting/keyframe preservation, duration extension, UI/renderer timing agreement, stage-specific missing assets and finite drawing across boundaries.
- Offline canvas renders inspected: exact incoming end, partial window push, boys hold, boys exit, town hold, midpoint of both foreground passages, workshop hold and blouse hold. The labels were corrected to move with the boys and fade before their exit completes.
- A 30 fps offline MP4 preview covers the 20-second continuation. It is an animation review artifact, not proof of real-time browser performance.
- The central register includes all four new raster outputs, their prompt brief and the three new procedural code files. Existing assets remain preserved.

Approximations: window transition is a focal zoom/dissolve rather than reconstructed 3D glass; town geometry and characters differ from the reference; the two boys share one cutout; workshop hands, shoe, garment and woman are integrated photographic plates with no independent skeletal motion. The same anonymous cloth torso approximates both reference crossings. No exact product/character identity, frame-perfect match or final user visual acceptance is claimed. No narration or new sound design is invented; narration transcript is still pending. Existing procedural shoes and their unresolved branding remain unchanged.


## v39 correction

The v38 description above remains historical. V39 corrects window transmission/light, near masonry, cloud motion, children clearance, town title drop and the close face, and adds a corrected blouse and aerial laundry continuation. See `docs/PRECISION-CONTINUATION.md`.
