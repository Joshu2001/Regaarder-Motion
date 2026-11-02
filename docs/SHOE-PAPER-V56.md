# V56 — pullback correction and printed shoe crumple

Joshua approved the correction: the person’s apparent lateral motion can result from an off-center pullback rather than independent rightward travel. The shoe should tilt, turn toward a toe-facing view and enlarge, then the printed composition should fold inward into a small turning paper object and leave leftward. The old rigid rectangular card flip does not match that interpretation.

## References and observations

User screenshots `image(20261029-032228).png` through `image(20261029-033333).png` show selected blue-outlined shoe, side-to-front pose change, enlargement, inward paper wrinkles containing fragments of the neighboring shoes, a compact irregular object, and a leftward exit. Screenshot spacing does not establish native speed. The technique is inferred from the visible result, not recovered from original project files. The final next-scene arrival beyond the supplied screenshots remains an approximation that preserves the existing timeline.

The exact paper edit reference is retained as `dist/assets/shoe-paper-selected-reference-v56.png`. Complete image-generation prompt, source/output hashes and original tool filename are in `shoe-paper-generation-v56.json`. The generated clean plate is `shoe-paper-texture-v56.png`; all previous assets remain included.

## What changed

- Ruined-window default person/city/wall independent travel is now0/0/0. Person X follows scaling about stage center480, creating apparent drift from off-center framing. Pullback continues through the existing wall passage. Only the exact previous factory travel triple240/-55/145 migrates; custom triples are preserved.
- The history shoe uses a closed low-shoe mesh with shared upper/sole boundary, end caps, surface-following laces and cone spikes. Per-pixel depth testing replaces face-center sorting. The stage-sized buffer removes the former512px clipping boundary. Other chapter shoes retain their existing renderer.
- A shared pose track controls right tilt, turn toward front, roll settling, accelerated zoom and vertical framing. The selected blue paper border follows the actual silhouette. Row shoes remain separately rendered over textured paper.
- The complete final composition is captured on one printed surface. Its UV texture stays attached while a subdivided mesh wrinkles, contracts toward an irregular rounded form, rotates and moves left. Reverse-facing folds show unprinted paper color. A matching clean background remains beneath it. This is authored deformation with depth testing and crease shading, not a physical paper solver.
- The existing following scene arrives with opaque coverage. The old rigid-card renderer remains available only through recovery. Transcript wording, stage durations and later portrait timing are preserved.

## Simple editing

Open **Next chapter → Shoe turn and paper crumple**. Replace paper texture independently. Replace shoe image for a flat custom cutout, or choose **Use editable 3D shoe** to return to the procedural model without deleting the uploaded asset. A single custom image does not create unseen3D views; that mode uses image scaling/roll rather than the procedural yaw/pitch geometry.

Main controls expose turn/zoom times, fold onset/completion, exit time, fold strength and final size. Advanced controls expose start/end yaw, pitch, roll, tilt peak/front-facing time, start/end size and Y framing, zoom power, spikes, outline width, crease depth, mesh detail, spin, exit vector and next-scene arrival. Positions are960×540 stage pixels, angles are degrees, and timeline fields are chapter source seconds. Direction can be changed by editing exit X/Y, and shared animation playback permits reversal and slow/fast timing.

Search **Animation library** for shoe, paper, crumple, swallow, fold, zoom or left exit. Stable ID: `shoe-paper-crumple`. Reusable instances keep media bindings separate from motion presets and receive shared speed, reverse, delay, pause, easing and slow/fast controls. Native parameters use chapter source seconds; the standalone instance begins at its declared turn-start value.

## Exact default values

The authoritative complete defaults are in `dist/shoe-paper-settings-v56.json`, `dist/shoe-paper.js`, and generated `docs/animations/shoe-paper-crumple.md`. Important values:

| Setting | Default | Unit |
|---|---:|---|
|Turn begins / zoom arrives|32 /38.849|chapter source seconds|
|Tilt peak / front-facing point|0.24 /0.7|fraction of turn|
|Yaw start / end|-12 /-90|degrees|
|Pitch start / end|17 /18|degrees|
|Tilt roll / final roll|-12 /0|degrees|
|Size start / end|240 /1000|stage pixels|
|Shoe center X|480|stage pixels|
|Shoe Y start / end|280 /140|stage pixels|
|Zoom power|1.6|exponent|
|Spike length|0.45|shoe model units|
|Blue border width|9|pixels|
|Fold begins / completes|38.849 /40.485|chapter source seconds|
|Fold strength|1|multiplier|
|Final object size|0.19|fraction of stage width|
|Exit completes|41.8|chapter source seconds|
|Exit X / Y|-680 /-65|stage pixels|
|Spin|130|degrees|
|Crease depth|125|illustrative depth units|
|Mesh detail|22|columns|
|Next scene begins / fills|41.2 /42.4|chapter source seconds|

## Recovery, migrations and limitations

Set `historyShoePaperEnabled=false`, or press **Restore previous shoe/card effect**, to recover the prior shoe renderer, background and card transition. New missing keys receive defaults; existing custom settings and uploaded media remain preserved. Source context migrations keep prior source relationships in history while retaining user narration/intent.

The shoe is an illustrative procedural model. It is not a scanned historic product and does not yet match the reference’s photographic leather detail. The compact paper object is an authored folded mesh, not a physically accurate sheet. Exact original motion speed, topology and native-browser playback/performance remain unverified. Offline frames cover turn start, intermediate tilt, front view, maximum zoom, initial wrinkles, compression, final form and exit. No deployment is claimed.

## Verification

Tests cover per-pixel visibility independent of face submission order, an opaque sole/upper join, rendering wider than512px, monotonic zoom, settled front pose, exact pixel handoff from final shoe composition to fold start, nonzero mesh depth, independent paper replacement/cache invalidation, changed fold onset in the actual history renderer, previous-effect recovery and editor controls. Asset and catalog checks verify exact hashes, source relationships, descriptions, default values and human/AI-readable registration.
