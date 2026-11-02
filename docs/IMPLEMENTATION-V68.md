# V68 — animated paths and reusable object motion

Joshua authorized two work items: investigate the globe with the documentary reconstruction skill, and implement animated shoe connectors plus reusable line/object/shape tools. Globe work remains analysis only; see GLOBE-OPENING-ANALYSIS-V68.md. No globe artwork has been generated or acquired.

## What changed

The shoe diagram previously revealed a fixed dashed path and then held it. The money bridge also rendered that diagram at one frozen time. V68 separates draw-on from the marching pattern clock. Dashes continue travelling after assembly, and their clock continues beneath the money. Existing shoe identities, positions and appearance timing are retained. Route geometry now samples by actual stage-pixel arc length; native defaults are a white 2.5px stroke, 6px dash, 7px gap, 22px/s flow and 32px segment arch. Exact visual speed matching to the reference remains approximate.

A reusable path action supports solid/dashed/dotted/repeated-arrow strokes; straight/polyline/smooth/arched paths and rectangle/ellipse outlines; still/draw/flow/draw+flow/pulse/moving-trace animation; forward/reverse travel; arrowheads; editable thickness, color, dash/gap, speed, draw delay/duration, loops, opacity, trim and normalized points. Point handles can be dragged; users can add/remove points or apply validated JSON. Style and geometry remain independent.

Selected blank-composition layers, chapter image layers and generic image/text layer-motion actions gain whole-object follow-path, float, pulse, spin, shake and fade presets. Existing start/end transforms and shared playback remain available. Motion has an independent delay, traversal/cycle duration, direction, loop and tangent orientation. These are transforms of a rendered layer; not anatomical animation or new hidden 3D geometry. Path offsets are relative to the native layer center. Looping an open path can jump; choose a closed shape or disable looping when that is unwanted.

## How to use

- Existing template: Next chapter → Shoe connectors · line style and animation. Choose style and animation, drag handles, edit speed and spacing; advanced fields remain collapsed.
- Blank composition: Add action → Animated line / shape; or search Animation library for line, dashes, dots, arrows or path.
- Any rendered composition layer: select it → Animate this object / shape. Choose a preset. Follow-path exposes a geometry-only path editor rather than irrelevant stroke controls.
- Chapter image layer: choose its source layer → Animate this object / shape. Earlier native placement and source binding remain separate.

## Architecture and preservation

`path-motion.js` owns deterministic stage-pixel arc-length sampling, stroke rendering and whole-layer poses. `path-controls.js` owns controls and the shoe-route adapter. Browser and offline review use the same production renderer. The existing MotionCore wrapper provides speed, reversal, pause and slow/fast timing for independent actions.

Stable IDs include animated-path-stroke, marching-dashes, travelling-dots, travelling-arrows, moving-path-trace and whole-layer-motion-presets. Exact defaults/units, descriptions, aliases, source hashes and limitations are generated into the human/AI catalog and JSON registry. Factory settings remain separate from current live user settings.

Existing custom points and settings are preserved; only undefined new fields receive defaults. Presets default to none for existing objects. User images, original generation outputs and alternatives remain unchanged. The prior V67 package remains available independently. Composition import validates new path/object settings before committing them, and invalid path trim/JSON edits are rejected before save.

## Evidence and checks

- Inspected 16 ordered reference samples at quarter-second spacing across source 03:49.5–03:53.25. Observed sequential shoe/route assembly and pattern changes during the hold. The default 22px/s flow is authored calibration, not a recovered production curve.
- Pure renderer checks cover persistent dash/dot motion after reveal, deterministic same-time frames, all 144 style/shape/animation combinations, finite whole-layer presets, non-loop stop and delay, normalized arc-length sampling, invalid settings rejection, JSON round-trip and canvas state restoration.
- DOM event harness with real raster canvas checks style persistence, invalid trim rejection, normalized point dragging, preservation of custom shoe points and object-path controls. This is not a browser layout or usability certification.
- An integration check verifies that the actual history/money compositor advances dash phase at the configured 22px/s instead of freezing the underlay. Existing commerce and chapter regressions pass, including exact room endpoint continuity and saved custom timing/key preservation.
- Original shoe artwork is retained; cropped leg artwork and unrelated existing composition differences are not silently replaced.
- Previews show the updated shoe scene, the reusable toolkit and a short original-versus-recreation connector comparison. Reference/template scene timing remains approximate; native timing differences are not silently stretched away.
- Reviews are silent. No GitHub push or deployment. Complete native browser interaction remains unverified in this environment.

## Remaining limits

The globe remains unimplemented. Reference shoe/artwork identities, exact connector placement and speed are not certified as frame-perfect. Reusable object presets operate on rendered layers; they do not retarget character skeletons, deform clothing or recover physical cameras. The generic path editor uses a fixed 960×540 stage coordinate convention; larger exports scale from it.
