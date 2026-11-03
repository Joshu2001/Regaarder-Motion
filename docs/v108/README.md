# V108 surface builder

## Implemented

**Multiresolution editing.** Each editable surface can have zero, one or two
Loop refinement levels with independent edit/display settings. Sparse bind-local
vector detail is stored separately at each level. Base edits and level changes
preserve the finer layers. Higher-level skin-weight edits have their own layers.
Deleting levels containing detail/weights is rejected until explicitly reset.
Position updates reuse refinement plans and mesh objects instead of rebuilding
all topology during every pose. The per-surface guard is 600,000 stored vertices
and 2.4 million triangle indices. These are budgets, not performance promises.

**UV and color.** Planar XY/XZ/YZ and cylindrical projection; UV preview and
vertex picking; numeric translation/scale/rotation; SVG layout export. The UV
preview limits drawing to 6,000 triangles while retaining complete coordinates.
Vertex color can be assigned to a selection or painted with connected-surface
brush falloff, explicit opacity, stroke spacing and Undo. UV/color records are
versioned per surface and resolution level and survive native scene round-trips.

**Material maps.** Embedded PNG/JPEG/WebP base color, normal, roughness,
metalness, bump and emissive maps, tiling and strengths. Color/emissive maps use
sRGB; data maps are linear. Roughness reads green; metalness reads blue. Files
must fit the 6-million-character encoded limit (about 4.5 MB), at most 4096 pixels
per axis. Height-to-normal conversion produces a tiled tangent normal map up to
2048 pixels. This is deterministic gradient conversion, not AI inference.

**Baking.** Vertex/base color can be rasterized into an actual PNG color map.
The baker checks 0–1 UV coverage, rejects substantial overlap and caps pixel
work. Applying a bake disables the duplicate vertex tint, preventing colors
from being multiplied twice. Undo restores the previous material and layers.

**Topology construction.** The existing table/chair/trophy and curve builders
now connect to freeze, permanent subdivision, UV/color-compatible welding,
selected triangle-face extrusion, topology diagnostics, and a six-chart box UV
atlas for rigid props. Physical-coincidence diagnostics report boundary edges,
nonmanifold edges and degenerate triangles. Construction changes preserve an
original-state backup and unlink parametric assembly dimensions explicitly;
Restore original construction and Undo recover the original state. Character
rig topology is protected from these rigid-mesh construction operations.

**Persistence/export.** The standalone native editor uses IndexedDB for large
texture projects, reads previous localStorage scenes, and reports save failures.
Native JSON embeds textures for portability. GLB export waits for image decoding
and includes refined mesh transforms; native JSON remains authoritative for
procedural behavior and corrective deformation. The host application's own
project-storage limits still apply; export native JSON for a portable copy.

## Workflow

1. Select a native object or body surface. Open **Builder · resolution, UV and
   maps**. Its resolution, UV, color, material and topology groups stay separate.
2. Add detail levels, then choose the Edit level and Display level. Mesh Edit or
   Sculpt uses the Edit level; normal playback uses the Display level.
3. Select vertices/faces and move them or sculpt. Coarse and fine offsets remain
   separate. Named selections require matching topology and resolution.
4. Generate/project UVs or use Box UV atlas for a hard-surface prop. Inspect the
   UV layout and adjust selected coordinates. Atlas conversion freezes the prop;
   it does not silently change a character's skeleton or rig topology.
5. Paint color, import maps, or bake a color texture after verifying UV coverage.
   Bump and normal maps change shading; they do not alter the silhouette.
6. Use construction operations deliberately. A permanent topology change freezes
   the current visible prop and retains its original construction as a backup.
7. Apply to composition or export the native scene. A completed local save is
   reported by the standalone editor; keep JSON exports for portability.

## Shared human/AI operations

The existing selection, stroke and precise displacement APIs remain available.
`api.surfaceOperation` adds revision-checked, previewable transactions:

```js
await api.surfaceOperation({assetId: 'part', surface: 'mesh',
  action: 'resolution', levels: 2, editLevel: 1, displayLevel: 2});
await api.surfaceOperation({assetId: 'part', surface: 'mesh',
  action: 'project-uv', projection: 'xy'});
await api.surfaceOperation({assetId: 'part', surface: 'mesh',
  action: 'transform-uv', ids: [0, 1, 2],
  transform: {offset: [.01, 0], scale: 1, rotation: 0}});
await api.surfaceOperation({assetId: 'part', surface: 'mesh',
  action: 'color', ids: [0, 1, 2], color: '#bc8a54'});
await api.surfaceOperation({assetId: 'part', surface: 'mesh',
  action: 'map', slot: 'normal', uri: embeddedDataURI});
const topology = await api.surfaceOperation({assetId: 'part', action: 'inspect'});
```

Actions also include `freeze`, `box-uv`, `weld`, `subdivide`, `extrude` (selected
complete faces plus local distance), and `restore`. Add `preview: true` for a
nonmutating validation run. Add `expectedRevision` from the target surface query
to reject concurrent edits. The mesh query includes its resolution level and
actual referenced vertex IDs. Explicitly select coincident render vertices
together when moving a split UV/normal seam through code, as viewport picking does.

## Verification

Recovered source was rerun through CPU and Chromium tests. Reports here cover
separate resolution layers, retained coarse/detail edits, stable refined objects,
UV/color persistence, topology/extrusion, map decoding, normal generation,
overlap-free color baking, refined-prop GLB placement, construction restore and
skinned-head weights. Existing V107 editor/Undo/navigation tests and V106
head/hat/reference seam checks were also rerun successfully. IndexedDB was
verified with a six-million-character record and legacy localStorage fallback.
Browser captures are diagnostic only and are not bundled as deliverables.

## Boundaries

This is a specialized native builder, not complete Blender parity. Detail layers
are additive bind-local vectors, not a full tangent-frame displacement system.
UV projection and rigid box atlases do not replace arbitrary seam-based,
distortion-minimizing organic unwrapping. General quad retopology, Boolean/voxel
remeshing with rig/UV/detail transfer, full-body collision/physics, calibrated
image-to-3D reconstruction and the remaining authored anatomical/lighting match
are not complete. No automatic reconstruction of hidden geometry is claimed.

GLB is an interchange export, not a complete bake of animated procedural
geometry, pose-volume correction or every multiresolution edit over time. Large
rigid topology changes invalidate vertex selections and require reselection.
