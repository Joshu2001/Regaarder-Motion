# V53 perspective portrait room

The selected monochrome portrait now uses an empty reconstructed room, a separate person cutout, a near earthenware vessel and a folded cloth behind the person. All four assets were created using built-in image generation with the exact user-selected image as the edit source. Generated files and the selected reference are retained byte-for-byte. The previous flat portrait remains in the asset library and can be restored.

## Geometry and camera

The room uses three textured surfaces with world-space coordinates: a rear wall, an angled window wall and a horizontal floor. A shared perspective projection moves these surfaces and the separate alpha planes through one camera. This is not a flattened image zoom. The window wall contains depth variation, while the floor vertices share one world height. Canvas triangle subdivision approximates perspective-correct texture mapping; cutouts use the same camera projection at their own depths.

The default camera travels600 world units toward a focus at stage fraction(0.53,0.4). Focal length is850, person distance1200, vessel850, cloth1700 and wall2200. The vessel enlarges and clears the frame fastest; the subject moves more moderately; the rear cloth and room lag behind. One smooth monotonic camera path covers the portrait shot, with no internal pause. Camera speed defaults to1×. Start/finish fractions, speed, travel and focus are independently editable. Strong custom travel is clamped to stay in front of the person/vessel.

The main monochrome portrait and its incoming spatial passage use this room. Existing stage durations and narration remain intact. Reuse for the later portrait is optional and off by default. The room starts from a stable pose while the wall passage reveals it, then continues the same camera state afterward. Near-prop blur, room/person brightness and a soft contact shadow are separate settings.

## User controls

Open **Next chapter → Portrait room · depth and camera**. Replace the person, clean room, vessel and cloth separately through the versioned asset picker. Tap the starting preview to select the camera focus. Adjust camera speed, closeness and start/finish timing. Expand the layer controls for distances, positions, sizes, softness, light and shadow. Choose **Use original flat portrait** to recover the previous version; no source is destroyed.

**Animation library → Perspective room and foreground parallax** inserts an independent reusable room action. It inherits the composition’s shared playback speed, reversal, delay, pause and slow/fast controls, with per-instance source bindings and parameter presets. Replacement person/prop images should be compatible alpha cutouts; automatic segmentation is not connected. Depth does not turn a person sprite into a full volumetric model. Advanced room surfaces expose editable XYZ corners and UV texture coordinates as JSON, with a reset to the default geometry; this supports different room layouts without rewriting the renderer.

## Asset and prompt records

- `assets/portrait-room-person-v53.png` → `historyRoomPerson`
- `assets/portrait-room-room-v53.png` → `historyRoomBackground`
- `assets/portrait-room-vase-v53.png` → `historyRoomVase`
- `assets/portrait-room-cloth-v53.png` → `historyRoomCloth`
- `assets/portrait-room-selected-reference-v53.png` → retained exact selected edit target
- `assets/portrait-room-generation-v53.json` → exact submitted prompts, tool output origins, SHA-256 hashes, reference provenance and limitations

These generated edits approximate the selected reference. They are not pixel-identical segmentation, a verified historical likeness or a surveyed reconstruction of the original room. Hidden areas and vessel shape were reconstructed for the camera move. The separate room lighting, cloth placement, alpha edges and final framing remain subject to user visual approval.

## Validation

All39 check scripts pass. Added checks verify real transparency in the generated cutouts, asset hashes, three room surfaces, planar floor geometry, window-wall depth variation, near/far motion differences, continuous camera progress, arrival at the selected focus, opaque render coverage, actual flat-portrait recovery and editor replacement routing. Existing footage, eye, cloud, asset-retention and source-context checks still pass. Generated catalog freshness is checked separately.

The focused preview is7seconds, including a short final hold; the updated full review retains79.4seconds at30fps. Offline beginning, intermediate and close-up frames were inspected. Native-browser playback and final reference fidelity remain unverified. No deployment is claimed.
