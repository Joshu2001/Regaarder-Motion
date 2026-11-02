# Local asset creation and editing · V58

## Defined scope

The new project-owned model engine creates geometry locally and renders it through an optional native WebGL path with a CPU fallback. The sequence operates with packaged assets, without an external generation service or asset marketplace. Existing vendored libraries and their licenses remain preserved elsewhere in the template.

Create a blank composition, choose **Build 3D scene**, add a part or recipe, select the part, then adjust its position, rotation, scale, color and texture. Add transform or camera keyframes at an explicit time. Duplicate or remove parts. Export scene JSON to retain hierarchy, keys and material slots; export OBJ for a static geometry snapshot. Import scene JSON or geometry-only OBJ. The Next sequence panel opens street, salvage or bicycle models; **Apply model to sequence** copies that editable scene back. A saved override uses its own camera.

Supported geometry: box, plane, heightfield, sphere, hemisphere, cylinder, cone, torus, lathe profile, convex polygon extrusion and indexed triangle mesh. Reusable assemblies: helmet, bicycle, ruined-building blockout and articulated blockout biped. Geometry imports are limited to OBJ; JSON is the complete scene interchange format. Individual geometry limits: 50,000 vertices and100,000 triangles; scene limit500 nodes. Units are arbitrary scene meters, angles degrees, time seconds and spin degrees/second.

This is a bounded local modeling tool, not a universal text-to-3D or text-to-image generator. Raster candidates were generated during authoring and are packaged for offline use; creating arbitrary new photoreal images still needs an authoring/generation tool. No3DS/glTF parser, sculpting, Boolean modeling, PBR, automatic 3D reconstruction or automatic character retargeting is claimed. Near-plane crossing triangles are omitted rather than fully clipped. Detailed façade planes, photographic cutouts and genuine geometric objects deliberately coexist.

## New assets and preservation

Five new raster originals: ruined façade with transparent windows, rubble texture, side-view searcher, brown spiked shoe and cream/burgundy spiked shoe. Exact prompts, references and hashes are in `dist/assets/salvage-generation-v58.json`. Reference crops are separately labelled; they are not production assets. Seven project-authored model scenes each ship as JSON and OBJ under `dist/assets/models/`. All older assets, generated candidates and the V57 restored shoe remain available. New brown/cream assets are used only by the later continuation.

## Sequence controls

The continuation starts at history source age40.485s and spans71.242s. Full default review duration137.333s at30fps. Timing boundaries, paper travel/bob, camera approach, walking rate/stride, flashlight strength, yellow highlight strength/color, wheel spin, lens size/zoom and route-draw duration are independent parameters. Advanced JSON holds calibrated body masks/joints, route points and entire scene overrides. Sources have independent replacement slots. Exact factory defaults, units, descriptions, aliases and implementation paths are in the generated animation catalog Markdown/JSON; the full preset and standalone effects can be searched and inserted in blank compositions.

Replacing a similar source is easy; replacing a person with a very different pose requires mask/joint calibration. The walking cutout is a layered2D puppet, not a recovered3D skeleton or foot-plant IK. The small blockout biped is a separate modeling example. The magnifier samples the current rendered source so the feet and enlarged view remain synchronized.

## Recovery and migration

Default history timeline grows from53.788s to111.727s. Known former default stages are migrated; custom stage durations are preserved. Earlier modules and artwork remain bundled. Custom scene overrides and source bindings stay separate from reusable presets. Disable `expansionEnabled` only to inspect legacy rendering: this does not automatically restore the old timeline, so import a saved V57 project/timeline for a complete old edit. JSON scene export preserves authoring data; OBJ does not preserve materials or animation.

## Validation and limits

Automated checks cover geometry validity, OBJ roundtrip, transforms/keyframes, CPU rendering, stage migration, black interval and editor interactions in a DOM harness. Timestamped stills cover entrances, intermediate movement and exits. Native browser playback, real WebGL hardware rendering and audio synchronization remain unverified. Reviews are silent and use default project settings, not unknown browser-local changes. The sequence is an editable reference-informed reconstruction, not a frame-perfect match.
