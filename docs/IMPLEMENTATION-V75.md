# V75 · Betrayal, wartime and family

Joshua approved the 07:55–08:55 frame interpretation and explicitly authorized asset creation and implementation. Original source interval [475,535), local [0,60). The appended default template interval is [485,545), or 08:05–09:05, because existing template and source clocks differ by ten seconds. This does not move earlier content. Custom prior durations determine the actual append point.

## What is implemented

26 individually timed phases: chapter retreat, fade and explicit black pause; shadowed hall with independently moving foreground silhouettes; portrait entry; foreground passage into stadium; banknote tumbling; seated-brother reveal; explosion expansion and smoke cover; aircraft entrance, propeller streak and departure; factory and historical Nazi emblem; vertical interior reveal; worker foreground; aligned elliptical eye reflection and portrait pullback; layered fire, warm light and embers; house dissolve; foreground family entrance and pullback.

The historical emblem is an authored contextual scene graphic. People, buildings, aircraft and environment plates are generated illustrations, not historical photographs. No source-video frames are embedded in the editable sequence.

## Edit

Run `npm start`, open the template and find **Betrayal → wartime → family**. Landmark buttons seek using original-source time. Scene timing and sequence rate remap the authored source curves. Per-object controls expose visibility, XY, scale, rotation, opacity, depth, blur, brightness, motion presets and keyframe JSON. Media replacement retains prior local replacements in the existing browser asset archive. New defaults only are added; previous user overrides are not reset.

Advanced JSON controls eye target coordinates, clouds, flame/smoke strength and media bindings. Motion keys use new-sequence local seconds. The **Animation Library** exposes `wartime-family-continuation` and all 26 phase IDs as independent instances with shared MotionCore speed, reverse, delay and transforms. Media remain replaceable independently of movement settings. Shared playback speed is the preferred independent-instance speed control.

`wartime-sequence.js` is shared by the template, independent instances and CPU offline render. `wartime-director.js` appends the stage without replacing prior directors. Hiding V75 restores the V74 endpoint. An initial exact V74 endpoint frame and short blend preserve chapter continuity.

## Asset retention and provenance

Five generated PNG originals are kept byte-for-byte: environment atlas, opaque portrait candidate, transparent portrait edit, transparent aircraft/building/portrait atlas, and improved ground-level bleachers. The opaque candidate is inactive. The environment atlas's aerial stadium quadrant remains retained but is superseded. Atlas crops occur only in runtime caches. Existing flame and generated explosion assets are reused. See `assets/wartime-generation-record-v75.json`, `asset-manifest.json` and `ASSET-REGISTER.md`.

## Material differences

This is an authored reconstruction with photographic planes. It does not recover the original character likenesses, church/interior architecture, camera geometry, aircraft model, family membership, exact title font or original fluid effects. The family is a fictional five-person group rather than the larger original group. Brothers share one replaceable grouped cutout; their faces/bodies are not independently rigged. People hold poses. The aircraft includes visible landing gear absent from the reference. Eye reflection is a masked 2.5D image zoom, not optical simulation. Flame textures are layered and advected, not a fluid simulation or live-action flame clip. The family reveals via a close group pullback rather than a separately articulated foreground child's head. Source phase boundaries are estimates from 0.1-second samples.

The renderer is silent. Review-video audio, when included, is copied from the user-supplied original for comparison. No new sound mix or voiceover was created. The 0.05× reference was prepared, but analysis was sampled-frame review rather than verified continuous 20-minute playback.

## Verification and delivery status

CPU Canvas timestamped stills and encoded temporal samples inspected for entrances, holds and transitions. Stadium perspective corrected after review; portrait fire strengthened. Automated checks cover source/local clock inversion with custom durations, deterministic rendering of all phases, exact V74 first frame, explicit black pause, independent visibility, missing media, imports, setting preservation and actual director append/reversal. Catalog tests exercise search, insertion and independent defaults. Relevant V74/V73 regressions and asset/registry hashes are checked. Native-browser/GPU performance and full audiovisual playback are not certified.

No remote commit or deployment is made. Delivery is an editable source package and review videos; visual acceptance remains with Joshua.
