# V93 — Character and asset workshop

Joshua authorized the specialized tool foundation after reviewing V91/V92: provide the tools relevant to current people, clothing, hats, tables and scene integration, then use them to refine existing scenes. The interruption erased the unsaved V93 code. This release was rebuilt from V92 version 23 and the surviving implementation notes; only the tests recorded in docs/v93 are evidence for this rebuild.

## What works

- Native editor within Blank Composition; a standalone preview uses the same modules. No external authoring application, CDN, account or model service is required. Serve the folder through a local/static web server; WebGL2 is required.
- Licensed male/female anatomical foundation with a continuous blend. Regional shoulders, chest, waist, abdomen, hips, pelvis, glutes, thighs, calves, head width/depth and jaw edits. Shape updates rest bones and mesh; four-influence skin remains editable. Female is a body foundation, not a binary claim about identity.
- Per-surface inflate/deflate and X-grab vertex brushes; bind-space radius, mirror across local X, double-click vertex selection and viewport drag strokes. Body, clean head, shirt, trousers and hat surfaces are independent. Each stroke is one Undo step. Numeric vertex controls remain available. Topology signatures prevent silently applying offsets to a different surface.
- Per-vertex skin weight assignment to a selected bone, with other weights normalized and a four-influence maximum. This release does not include weight-paint brush strokes.
- Sculpt-to-corrective conversion with selected local bone axis and start/end angles. Correctives are evaluated in the native engine. This is a simple local Euler driver, not a muscle simulator or automatic anatomical repair.
- Garment normal clearance and shirt hem length. These are fit tools, not cloth simulation. Large shape changes still need sculpting and visual review.
- Head-based hat opening fit/centering, independent width/depth/height/lift/tilt/roll and X/Z offset. Fit measures a bind-space head section; reskinning the head or unusually distorted accessories can require manual correction. No full collision guarantee.
- Per-hand curl, existing per-finger controls and keys, per-joint rotation bounds, saved per-instance poses. Saved IK targets are world-space: adapt them when moving a character.
- Hand/foot surface pins against boxes/planes, adjustable scene data for contact point and clearance. Wrist clearance is a proxy for the palm; pins are not a mesh collision solver. A measured pelvis-band/seat adjustment is exposed, bounded to 0.4m; it may require pose/foot-target refinement.
- Bone-attached primitive props, local transforms, world-preserving detach. Rounded box edges and existing geometry/transform controls remain.
- Physical material presets, clearcoat/sheen, authored cloth/wood bump and a procedural studio environment. Shadow resolutions 1024/2048/4096. These are real-time raster tools, not path tracing, true area-light shadows or an arbitrary texture/node editor.
- Full native JSON preserves editable recipes. GLB exports evaluated geometry, skin and sampled transforms. Driven geometry and procedural finishes are not guaranteed to reproduce as live editing controls in another GLB viewer. Native JSON remains authoritative.

## Use the tools

Open Blank Composition → native 3D template → Edit objects, skeleton, materials & keys. Select an object or body part, then expand **Character / asset workshop · V93**. The quick character foundation switch is available in the template inspector. For finer editing, use the native workshop and object/bone hierarchy.

For a sculpt: select a surface; double-click the desired triangle in the viewport; set radius, amount and mirror; apply at that vertex or enable viewport painting and drag. Stop painting before orbiting or transforming. Save/export the native JSON. Keep the original and refined recipes separately when comparing alternatives.

For an attachment: add/select a primitive, choose actor/bone, attach, then edit its local transforms. Detach preserves its current world transform. Surface contacts are restricted to world props, avoiding attachment feedback loops.

## Applied source refinements

Coverage remains original 895–900 seconds (14:55–15:00), local 0–5 seconds. Cut remains local 116/30, original 898.866666667. Earlier 13 scene hashes remain unchanged. Factory V93 adds modest pelvis/glute/head regional adjustments, relaxed hand curl and head-based hat centering. Original V92 checkpoint code is retained at docs/v93/checkpoint-v92-original.js. Imported custom scenes are not overwritten by these factory defaults.

## Visual findings and remaining work

Native render samples were inspected at entrance, hold and cut states. The source comparison remains an authored approximation. Garment silhouette, shoulder/underarm transitions, hip/leg shaping, cloth response, relaxed hand anatomy, hat seating/tilt, seated chair contact, smoke detail and light/shadow balance still need calibrated artistic refinement. The female garment transfer is functional but is not finished tailoring. These tools make the next corrections possible; they do not make the image photorealistic by themselves.

This task does not advance to 15:00–16:00. No live site deployment or GitHub push is claimed. No continuous video viewing, listening or continuous 0.05x playback is claimed. The supplied slow comparison is an encoded 0.05x review artifact; numerical and selected-frame checks are documented separately.

## Recovery and packaging

Main project retains all active assets and source modules. Optional historical V86/V89 HTML review reports, earlier inactive candidates and the full derived female build are stored in the retained companion archive under their original relative paths. Extract that archive beside the project when those historical diagnostics are needed. They are not runtime dependencies. No active runtime asset was removed to meet the upload size limit.
