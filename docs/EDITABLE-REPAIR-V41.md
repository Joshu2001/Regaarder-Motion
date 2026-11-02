# v41 · window and reusable animation repair

Continues v40; earlier scene clocks, original assets, browser-local storage keys and existing source files are retained. Joshua authorized the window repair and editable animation repair before any future generated-video option. No image-to-video footage is used.

## Window

The pane preview and outdoor reveal now call one exterior compositor: architecture, clouds, masonry, boys and names are shared, rather than independently placed portraits. The camera mapping interpolates to the inverse approach zoom, so the exterior texture resolves to the full-stage scene at the end of the approach. A sixteen-pane matte follows the visible window grid more closely. Default legacy pane coordinates are migrated at rendering time; custom coordinates remain in effect. The reveal retains the light pulse and gradual transmission. Names still progress from pale to opaque on the existing curve.

The result is an illustrative transmitted view, not a physical reflection simulation. Source and reconstruction have different windows. The four-by-four pane mask remains an approximation; window geometry, softness, glass veil, opacity and content position/scale are editable. Edge texels extend beyond the viewport to avoid a rectangular picture border during the approach.

## Woman

The original portrait/blouse PNG remains byte-identical. Default movement no longer uses a spatial warp over the whole room. Separate masked body, raised arm, garment and supporting forearm layers move above a reconstructed room. The original pixels supply the face, blouse and arms. A generated underpaint supplies the small apron area previously covered by the forearm. The body uses a similarity transform, avoiding local abdominal shear. Each arm has two anchors; its rigid similarity transformation maps a body contact and garment contact simultaneously. The source curve timing is retained, without the old mesh attenuation.

The source motion study and held-out model errors remain in docs/analysis-v40. They support independent regional movement, not proof of a particular original production tool. New numerical checks sample contact constraints every 0.01 seconds, test nondegenerate transforms and exercise source replacement, arbitrary text and arbitrary object transforms. These checks establish geometric properties, not visual equivalence.

Two generated repair plates, exact prompts and provenance are retained in assets/rig-generation-briefs-v41.json and the central asset register. Both are labelled review candidates and remain searchable regardless of future approval or rejection.

## Reusable editing

Depot → Reusable layer animation is collapsed by default. Every layer has a source binding separate from its motion keys. Replace/remove a layer, add an image or arbitrary text, edit position, scale, rotation, opacity and order. Advanced JSON fields expose the mask polygon, contact anchors and numeric motion keys. The complete recipe can be copied, edited and reapplied; recipes persist in existing project settings. Image replacements use the existing upload/retention mechanism. The layer engine accepts arbitrary image/canvas content; the accompanying 3D transform function has no object-specific assumptions. Imported Three.js scene descendants are now individually registered for the existing selection and transform tools, preserving their authored local transforms.

An artwork-specific mask/anchor preset is necessary for this scene. Replacing an image preserves its animation, but does not automatically detect a new person's anatomy or derive new masks. Retarget those fields when the new artwork differs. The full source may be removed while other layers/text remain. There is no claim of automatic semantic rigging for arbitrary images or 3D models.

Previous v40 mesh/pin values remain saved and its implementation remains in source; mesh-only controls are no longer advertised in the new layer editor. Independent region offsets/scales/rotation/gains and timing remain applicable to the body/garment tracks. Arm contact geometry is controlled by anchors rather than the old RBF pins. Earlier scene settings are not reset.

## Review and remaining limitations

Offline Canvas renders cover nursery lead-in, approach, boys hold/exit, town/title, workshop, woman entrance/mid/end and laundry exit. The silent review MP4 is 960×540 at 30 fps and 32.5 seconds long. It uses the production modules and system fonts. No live-browser or native-speed source-playback validation is claimed in this environment. Previous source timestamp analysis is retained.

Remaining visual differences: manually authored cutout contours and sleeve joins can still show slight seams; exposed room areas are generated reconstruction, not recovered source pixels; the hook and contact details are approximate; perspective and cloth deformation do not reproduce image-to-video micro-motion. The result needs Joshua's video review and is not labelled frame-perfect. Source archive and asset bundle are review deliverables, not a deployment; nothing was published or pushed.

## Automated result

All 25 scripts/check-*.mjs checks passed. The existing mesh diagnostics remain regression checks for retained legacy code; they do not validate the new layer renderer's visual fidelity. The new check-layer-motion test covers the independent layer implementation. Source and register integrity checks were rerun after the final metadata update.
