# V107 precision editor: implemented scope and verification

## What changed

- Shared vertex/edge/triangle-face selection on character cages and native props.
  Shift adds, Alt subtracts, and Grow adds one connected edge ring. Yellow points
  mark the selection; a wire overlay reveals the editable surface. Selected
  vertices also have a Move gizmo; skinned drag conversion uses the current
  linear skin transform, so pose-volume correction can make final world motion
  approximate. Numeric edits remain explicitly bind-local. Coincident
  render vertices are selected together to avoid opening ordinary split seams.
- Named regions persist in native scene JSON and survive fixed-topology edits.
  Surface name + index-connectivity revision + vertex IDs identify a selection.
  Connectivity changes invalidate it explicitly. This is not remeshing transfer.
- Exact numeric displacement with finite bounds and explicit bind-local metres.
  The UI shows local millimetres: object scaling and skinning subsequently affect
  world displacement. This is deliberately not labelled a calibrated world-space
  millimetre edit. Check performs a dry run; it does not preview a fully deformed
  mesh. Apply is one Undo step. These operations use node patches in history;
  other existing editor changes still use scene snapshots.
- Brushes use arc-length spacing, a frozen per-stroke surface, connected edge
  distance and a single-surface gesture. Nearby disconnected fingers/surfaces are
  protected by default. Through-surface behavior remains explicitly selectable.
  Smooth caches adjacency; flatten and tangent pinch supplement existing modes.
  Weight painting reads current stored weights during a stroke, not stale display
  buffers. Native weights remain normalized through the existing setter.
- Recorded brush gestures can be queried and replayed by AI/code. Stroke records
  declare units, topology, brush parameters, spacing and path breaks. Revision
  checks prevent silently applying a stale command. Native sculpt/weight layers
  remain the persisted result; the last stroke record is session-local.
- Rounded boxes are constructed in physical object dimensions and compensated
  for nonuniform object scale. Their outer local extents remain +/-0.5, preserving
  existing contact coordinates. Geometry updates locally when dimensions change.
  Parent/attachment scaling can still scale the entire object, including bevels.
- Sphere/ellipsoid, cubic Bézier tube and revolved profile primitives; indexed
  meshData in native JSON. Curve/profile control points have numeric fields and
  selectable viewport handles with Move gizmos. Coordinate lists are secondary.
- Linked table, chair and trophy builders: width/depth/height/thickness controls
  regenerate construction dimensions while preserving component IDs/materials.
  Moving the root via its Move gizmo translates its members together. These are
  linked construction dimensions, not a general hierarchical constraint solver.
  Resizing resets component construction transforms, preserves translation, and
  rejects rotated roots or position/scale-keyed components rather than silently
  overriding animation. Individual components can still be edited separately.
- Zoom +/-; frame selection; orthographic front, side and top views. Navigation
  does not alter authored scene-camera data. Free Orbit still supports wheel,
  pinch and pan. Frame scene resets the view to the authored scene camera.
- Fixed scene initialization order and detached transform handles before engine
  rebuilds, avoiding stale character inspectors and detached-object warnings.

## Quick use

1. Open the native editor, select an object, and expand **Shape · precise selection**.
2. Choose vertex, edge or face; tap visible geometry. Use the local mm fields,
   Check displacement, then Apply. Save a region for later work.
3. For a curve/profile choose **control**, select a yellow point, and drag its
   Move gizmo or edit the point coordinates. Control-point picking takes priority
   when it overlaps a gizmo axis; select first, then drag the axis handle.
4. Choose Sculpt in viewport for brushes. Each stroke is one Undo; a cancelled or
   failed gesture rolls back. A stroke stays on the surface where it began.
5. Add **Linked table**, **Linked chair** or **Linked trophy**. Their contextual
   dimension fields update the corresponding construction components.
6. Apply to composition / Export scene saves the authoritative native scene.

## Human and AI operation API

The mounted editor exposes the same geometry operations through its returned API
(also `host.nativeEditor`; the lab exposes `Native3DLab.api`).

```js
const surfaces = api.getEditableSurfaces();
const s = surfaces.find(s => s.surface === 'head');
api.selectMesh({surface: s.surface, topology: s.topology,
  mode: 'vertex', ids: [s.usedVertexIds[0]]});
api.applyOperation({space: 'bind-local', units: 'm',
  displacement: [0.002, 0, 0], expectedRevision: api.getEditRevision(),
  preview: true}); // validates without changing the scene
api.applyOperation({space: 'bind-local', units: 'm',
  displacement: [0.002, 0, 0], expectedRevision: api.getEditRevision()});
api.saveSelection('head-guide');
api.loadSelection('head-guide');

const record = api.getLastStroke(); // after a successful viewport gesture
// Undo that gesture first, or provide the appropriate current revision before replay.
if (record) api.applyStroke({...record, expectedRevision: api.getEditRevision(), preview: true});
api.resizeAssembly('table-id-top', {width: 1.8, thickness: 0.025});
```

The topology token detects incompatible connectivity; the node revision detects
concurrent state changes. Neither is a cryptographic integrity guarantee. Numeric
replay is tolerance-based; no promise of bit-identical rendering across GPUs.
The surface query gives actual referenced vertex IDs, not guessed pixel indices.

## Tests

Run from the repository root:

```sh
node scripts/qa/edit-core-v107.mjs
node scripts/qa/editor-v107.mjs
node scripts/qa/precision-tools-v107.mjs
node scripts/qa/check-v106.mjs
```

These cover physical bevel radius under nonuniform scale; connected-surface
isolation; bounded and stale-revision edits; dry-run nonmutation; JSON round-trip;
named regions; Undo/Redo; navigation camera independence; new primitives; actual
viewport selection; curve-point picking/numeric editing; linked prop updates;
historical registry scene validation; and existing head/hat/seam fitting behavior.
Reports are included in this directory. Browser captures were inspected locally
and are not packaged. Registry records
include nested/historical duplicates and are not a count of unique 3D assets.

## Still unfinished from the broader plan

Editable multiresolution displacement; full lasso/box/loop selection; general
modifier stacks; topology-changing construction and correspondence transfer;
production retopology/UV/map workflows; full collision/balance simulation;
broader authored anatomical weights/correctives; calibrated image-to-3D;
full deformed-mesh viewport previews; general assembly hierarchy/constraints;
and the remaining head/neck/hat/hand/lighting reference refinements.

The existing GLB exporter remains a sampled mesh/skin/transform interchange path.
Animated procedural geometry and corrective deformation are not fully baked to
GLB; use native JSON for complete template behavior. This release does not claim
Blender parity or final documentary-wide visual integration.
