# V89 · native humanoid and3D editor foundation

Joshua authorized a humanoid-first implementation and an integrated3D editor. External authoring applications must not be required by end users; bundled libraries and reusable assets are allowed. This release implements a native browser3D scene/character workflow inside Blank Composition. It is the first editor release, not a full Blender replacement or a certified replica of the reference.

## Character foundation

The former procedural body is replaced in the native path by a MakeHuman CC0 anatomical mesh, adult male graphical target, supplied163bone skeleton and supplied skin weights. Asset source bytes and licenses are preserved. The project applies Catmull-Clark subdivision with interpolated four-influence skin weights, retains the original editable control topology, separates fitted shirt/trouser shells, and adds cuffs, collar/hem detail, an authored faceless head/neck surface and an independent brimmed hat. The unique subdivided anatomical surface has53,514vertices and107,024triangles before garment duplication/style masking. These counts do not establish realism by themselves.

The native character uses an independent skeleton per instance, including individual finger chains. The faceless head is an authored surface bound to the head/neck bones; it is not a recovered source head or a photographic texture. Fitted garments share the rig and can be independently shown, colored and adjusted in roughness. They are not cloth simulation or historically tailored garments. Earlier mesh/style/segmentation candidates remain inactive under assets/humanoid-v89/candidates.

## Native editing and shared engine

The local Three.js r170 library supplies WebGL2 rendering, physical material response and shadow maps. Project code supplies the serialized scene format, anatomical skin integration, pose/IK logic, source clock, template assembly, editing and persistence. No Blender, Godot, model API, CDN or API key is required at runtime.

Open the main page's **Humanoid ·3D editor** entry, or open Blank Composition and add **Anatomical humanoid ·native3D scene**. Four registered catalog templates cover the humanoid study, crimson seated scene, blue/cream scene and source14:55–15:00. **Unpack14:55scene in Blank Composition** creates an independent scene instance with actual actors, props, lights, camera and tracks. The3D world is a composition layer containing individually editable3D nodes; it is not a flattened image/video.

The editor provides object hierarchy/search, ray selection, move/rotate/scale gizmos, numeric object transforms, object visibility, bone translation/rotation/scale, finger controls, hand/foot IK targets, part materials, camera look-at/FOV, lights, transform/visibility/pose/bone/target keyframes, undo/redo, duplication/deletion, native scene JSON import/export and sampled animated GLB export. Camera orientation is determined by look-at targets; an active IK target can override free rotations in its limb. IK enforces geometric reach; a full collision/contact/biomechanical constraint system is not implemented.

One shared renderer can cache multiple native scene worlds, keeping their character instances instead of rebuilding between composition layers. The editor, native template path and Blank Composition use the same engine and scene data. Browser-local composition state and existing legacy settings remain preserved. New native scenes are independent copies.

## Integration and clocks

The existing main source895–900 path uses the native renderer when it is ready and `checkpointNative3DEnabled` is true. False restores V88; additionally setting `checkpointRefinementEnabled:false` restores the older V87 path. `checkpointNative3DScene` can carry a custom complete native scene. Legacy V88 joint/camera/media parameters are retained, but they are not automatically retargeted to the new skeleton; use the preserved renderer or edit the unpacked native scene.

Coverage still ends at source900/default template910. No extra duration is appended. Source898.866666667/local frame116 retains the crimson-to-blue hard cut, opposing actor inventory, outgoing coach passage and rear-to-profile blue camera move. An editable animated smoke depth plane supplies context; it is explicitly2.5D procedural density, not volumetric smoke. Root placements and cameras are authored fits, not recovered physical production data. The earlier shot still uses its prior body, so the incoming895model transition remains unresolved.

## Serialization and export

The schema is `regaarder-native3d-v1`: meters, Euler degrees, seconds, material values0–1. The bundled asset ID resolves the canonical mesh/rig. Native JSON is authoritative for editor state, IK targets, pose generators, procedural smoke, visibility and camera settings. Imports are validated before replacing the active scene. The existing composition import also validates nested native scenes before committing them.

GLB export contains actual geometry, skins, bones, props, materials and sampled transform tracks. The clean factory export was structurally checked:12meshes,4skins sharing163joints,183nodes and an animation. Native procedural behavior, editor constraints and changing camera FOV are retained in source metadata and may differ in another glTF viewer. No external-engine import equivalence is claimed.

## Verification and remaining work

Actual browser tests ran in Chrome headless131 with SwiftShader WebGL2. They cover numeric transforms, undo/redo, individual finger rotation keys, independent garment roughness, reachable hand IK, scene round-trip and430px layout. Main-app checks exercise Blank Composition, template unpacking and native scene retention. Scene-contract checks cover factory scenes, ordered keys, malformed data, finite poses and normalized skin weights. The retained V87 regression check passes. Registry/default/source coverage and asset provenance checks accompany delivery.

The reference comparison is a150frame/30fps native GPU-path render. The8second turntable shows the neutral reusable character from all sides. Ordered frames and encoded samples were inspected; continuous audiovisual or continuous0.05x watching was not performed. No physical-device/mobile FPS benchmark is claimed.

Remaining priorities are garment tailoring and edge cleanup, pose-specific corrective shapes, richer joint limits, precise hand/seat contact and source blocking, incoming-shot model continuity, and scene lighting/atmosphere calibration. Full-body silhouetteIoU and frame-perfect fidelity are not certified. Native vertex sculpting/topology tools and general arbitrary-model import are later stages; the control topology and asset data are retained for them. No remote deployment or commit was performed.

Final boundary review corrected fractional-second key serialization: camera nodes are normalized to exact30fps frame times, and step sampling uses a1e-9second tolerance. A regression assertion verifies that frame115 retains the outgoing camera and frame116 uses the incoming blue camera. The pre-correction native preview/module/frame are retained inactive. Matching comparison files were regenerated.
