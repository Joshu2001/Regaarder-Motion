# V88 editable3D models

Crimson: mannequin-scene-v88-crimson.gltf plus its matching.bin. Source895–898.866667, clip clock0–3.833333 with30fps sampled keys; source interval in extras includes the outgoing boundary.
Blue: mannequin-scene-v88-blue.gltf plus matching.bin. Source898.866667–900; clip clock0–1.1.

Keep each.gltf and.bin together. These are standard glTF2 skeletal models, not rendered planes. Both shots have two independent51joint skeletons with four skin influences per vertex. Each finger has3joints. The crimson file also includes independent tabletop, front, chair seat/back and curved rail geometry. Hat parts are separate nodes attached to coach head. Camera and local animation tracks are included. The source project retains native smoke/shading and exact editable pose/camera code. Rendering in another engine may differ. Actual Godot/Blender import was not tested here.

The active mesh's rest surface is closed and manifold. That test does not certify freedom from self-intersections or perfect anatomy in deformed poses. Hands/contact, seated performance and shadows remain approximate. Project-authored procedural geometry, no third-party model. No reference video texture substituted for geometry.

The JSON is a native mesh/skin source. A denser inactive mesh and earlier candidates are retained in the full project. CPU/glTF skin parity, sampled through exported local transform channels, is recorded in gltf-validation.json.

Blue camera position/orientation are animated. Varying focal/FOV keys are retained in glTF extras; a core glTF viewer uses the first-frame camera FOV unless those keys are applied by its import workflow.
