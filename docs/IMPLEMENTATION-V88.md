# V88 · source 14:55–15:00 refinement

Joshua authorized implementation after the forensic audit and interruption. The original is immutable. The screenshot crop hid a coach already present in complete V87 frames; no duplicate actor was introduced. Work stops at source900/default template910.

The refined native path replaces the visible primitive mannequin with a project-authored smooth implicit exterior: 18,280 vertices, 36,556 triangles, one connected manifold surface, zero boundary/non-manifold edges,51 joints and four skin weights. Fingers have skeletal chains but their rendered separation and pose are still coarse. A high-resolution62k-vertex mesh and earlier weight/scene candidates remain inactive. No sourced model, photorealistic human redesign or baked reference video texture is used.

Changed camera/actor registration, thin bright tabletop and black front, chair rails, hat profile, red/blue directional shading and animated smoke. The table-front edge is horizontal rather than the prior roughly15-degree slope. Joint transforms remain separate from the skin, and glTF exports contain true skeletons and animation. Source motion/depth paths are authored inferences, not recovered production camera data or motion capture. Some root trajectories serve camera-space matching and are not physically reconstructed seat motion.

## Editing and preservation

Open the existing editor's V88 section for14:55–15:00. `checkpointRefinementEnabled` defaults true; false restores V87. Existing settings are never erased; missing new fields are filled through the existing migration. `checkpointRefinementCamera` is eyeXYZ,targetXYZ,focal pixels. Red/coach/blue root arrays use authored world meters. `checkpointRefinementBend` and `checkpointRefinementLight` control torso flexion and key strength. Existing global camera adjustments, object visibility/Canvas transforms and source-time joint keys are supported. Camera keys override shot cameras. Finger names are accepted in the validator. Legacy shoe/media bindings, orbit and some primitive acting controls apply only to preserved V87; they are not represented as new-geometry retargeting controls.

The active renderer is dist/v88/sequence.js + skin.js + render.js + mesh-data.js, invoked through checkpoint-sequence.js. MotionCore and catalog adapters retain the same5second source-clock span. The incoming895 model transition is not seamless with the earlier primitive scene: refine that earlier shot next. No extra timeline extension was added. The final review restored a rear-to-profile camera move at the blue entrance, the early crimson-to-purple background change and the outgoing near-camera coach passage. Camera fit RMS is17–31px against manually estimated neck/wrist/head anchors; this does not satisfy a strict full-body match.

## Standard3D exports

`dist/assets/models/mannequin-scene-v88-crimson.gltf` and corresponding.bin contain two skinned actors, independent bones/animation, separate hat/table/chair geometry and camera. The blue scene contains the opposing skinned actors, hat and camera. Each file uses a local clip clock; source intervals are in extras. Smoke and the native shader remain editable source code and are not flattened into the glTF. Material response may differ in other engines. Godot/Blender/browser import has not been tested. Numerically sampled glTF skin positions agree with the CPU deformation within1.4e-7meters.

## Validation and limits

See docs/v88/validation.json and gltf-validation.json. Functional checks cover topology, skin weights, hierarchy, all150frame inventories, cut frame116, clocks, malformed settings, legacy scene hashes, native migration and previous settings/playhead preservation. The legacy V87 check explicitly exercises its preserved path.

The original was decoded at30fps; all150 V88 frames rendered. Ordered frame/staged visual comparisons do not equal continuous audiovisual viewing. Native playback/audio listening and continuous0.05x viewing were not performed. A real100second silent0.05x comparison is supplied for the user's continuous review.

Visual fidelity is partial. Manual head-center error estimates are0.17–2.18% of the frame diagonal with6–10px reference uncertainty; one exceeds the proposed2% threshold. Whole-body landmarks/silhouette IoU>=.90 have not been certified. Hands, torso proportions/deformation, folded-arm contact, seated performance, precise coach movement, smoke, cast shadows and incoming-model continuity remain refinement items. Do not treat functional passing as visual acceptance. No deployment or remote commit.

Camera position/orientation channels are standard glTF animation. The native varying focal-length keys are retained in glTF extras and project code; core glTF imports use the first-frame FOV unless the importing engine applies those keys. Native atmosphere/shader and imported rendering remain distinct.
