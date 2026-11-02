# v40 · boys through glass, measured woman movement and retained assets

Joshua authorized implementation after approving a plan covering the early boys appearance, analysis and correction of the woman/arm/garment movement, and permanent retention/search of accepted and rejected asset candidates. He specifically asked to preserve the artwork he likes and test the motion hypothesis scientifically.

## Result and how to review

- The two boys appear faintly in the final 1.4 seconds of the cradle hold, clipped to the window panes behind the bars. Their visibility, position, width, blur and glass veil are editable. The pane preview fades as the larger outdoor view becomes transmitted during the camera approach.
- The existing `precision-seamstress-v39.png` is byte-identical. No woman, face or garment artwork was regenerated. A measured regional motion recipe drives a continuous textured mesh of that original image. Face and garment regions are constrained to local similarity movement; the surrounding mesh maintains continuous contact and fills revealed space without disconnected cutouts.
- The existing shot duration and all earlier scene clocks remain intact. By default the 1.685-second measured movement is placed at reference speed at the end of the three-second blouse hold. **Fit entire hold** offers a slower option. The source and template clocks are not the same.
- In Depot, expand **Window appearance & woman movement** for visibility and movement-strength controls. Look & motion adds the **Window · boys behind glass** and **Woman & blouse · measured movement** surfaces. The older static plate remains selectable. Existing settings, uploads, track keys and timing are preserved.
- The new 32.5-second silent preview begins 1.5 seconds before the approach so the through-glass appearance can be assessed. It continues through the woman movement and laundry title.

## Hypotheses and validation

A reusable script, `scripts/test-woman-motion-models.py`, compared three image-space explanations of the original source clip:

1. One global similarity transform for the entire picture.
2. Separate similarity transforms for manually delimited woman, garment and forearm regions.
3. Separate affine transforms with additional degrees of freedom.

The source range is clip **3.769–5.454 seconds** in `…_01-50.0_to_02-06.0.webm` (nominal original 1:53.769–1:55.454). The upload has uneven timestamps; 18 frames decode within that range. OpenCV SIFT correspondences are ratio-filtered and fitted with deterministic-seed RANSAC at 960×540. Every fourth shuffled correspondence is withheld from fitting. A common region-based residual gate is applied to all models to reduce obvious mismatches. Alternating entire frames are also withheld from curve fitting and compared with independently fitted transforms.

| Region / summary | One similarity | Separate similarities | Separate affine |
|---|---:|---:|---:|
| Overall median of frame test medians | 0.881 px | 0.727 px | 0.596 px |
| Woman: median regional test error | 28.799 px | 1.433 px | 0.883 px |
| Garment: median regional test error | 0.652 px | 0.612 px | 0.528 px |
| Forearm: median regional test error | 5.663 px | 1.578 px | 1.715 px |

These results reject a single uniform move as a sufficient explanation of the woman's region. The whole-picture median understates that difference because garment features dominate the matches. Separate similarities materially improve the woman and arm fit; a more flexible affine arm model does not improve the arm's held-out error. This supports regional image motion, **not proof of skeletal elbow articulation, physical camera depth or the original production method**.

The source's garment movement includes pullback and upward displacement, while the woman moves differently relative to it. That relationship can make the arm and elbow appear to change pose even when much of the underlying appearance is still imagery. We do not label it as known puppet animation or claim a specific original editing tool.

The complete source hash, region polygons, match counts, fitted matrices, test errors, time samples and temporal interpolation differences are retained in `docs/analysis-v40/woman-model-test.json`. The numerical, reusable production recipe is `dist/assets/woman-motion-track-v40.json`; `gesture-track.js` contains the same curve data for the buildless renderer. No source-video pixels are production assets.

### What the source test does not establish

- The regions are manually chosen, not semantic ground truth. Texture matching, occlusion and blur can bias correspondences.
- Held-out feature errors are conditional on the common correspondence gate. They are not independent measurements of anatomy or full-image pixel fidelity.
- Temporal validation compares interpolated curves with fitted transforms, not an external ground-truth trajectory.
- The generated woman/blouse image has different proportions and initial contact geometry. The source's raw coordinate displacements cannot be copied blindly without distorting that artwork.

## Retargeting safeguards and remaining differences

The initial unrestricted mesh candidate folded near the lower frame and distorted the face. It was rejected. The available diagnostic montage is retained as an inactive, rejected asset, so the failure remains visible and searchable.

The accepted renderer uses shared contact handles, rigid face/garment regions, and an adaptive minimum triangle-area ratio of **0.20**. Dense sampling at 0.01-second intervals found a minimum ratio of approximately **0.2000025**, with no triangle reversal. The safety limit can reduce applied movement strength to about **0.389** of the requested displacement near the strongest retargeted pose. This reduction is intentional and exposed in `docs/analysis-v40/mesh-validation.json`; it prevents destructive compression in this different artwork.

Consequently, the source timing and relative motion structure are transferred, but the final movement magnitude is **not an exact match**. This is the material remaining limitation. A closer unrestricted match would require more extensive independent occlusion layers, background reconstruction and artwork-specific rigging, which would alter more of the screen Joshua asked to preserve. The chosen result preserves the existing portrait and garment and remains editable for review.

A separate offscreen mesh pass applies grading/blur once to the completed image rather than once per triangle, with overlap to avoid diagonal cracks. The base picture fills any newly uncovered outer edge. This can still produce subtle background bending; no full 3D room or anatomical rig is claimed.

## Window appearance

The early pane image is an authored approximation of the boys visible beyond the glass. It is not identified as a physically correct reflection. It uses the same boys asset as the later outdoor reveal and retains the original window bars. Parameters are independent of the outdoor boys' size and placement.

The early preview is added only at the end of the existing cradle hold. The previous nursery-to-window boundary is preserved using the same pane preview at the last nursery frame and the incoming first frame. Pixel QA reports the visible changes in the pane region and the exact boundary differences in `docs/analysis-v40/pixel-qa.json`.

## Research and granular authoring audit

At Joshua's request, primary-source research was added before final validation: a firsthand MagnatesMedia editing breakdown, Adobe's photo-parallax and Puppet documentation, and the public MagnatesMedia course site. The techniques inform the design but do not establish how the exact shot was produced. Sources and implementation mapping are in `docs/PRODUCTION-TECHNIQUE-RESEARCH-V40.md`.

The audit added independent woman/arm/garment X/Y, scale, rotation and motion-gain controls; ten rest-position/displacement pin surfaces; and protected face/blouse bounds. All numeric fields use existing surface keyframes. Neutral controls were verified to leave the default mesh unchanged. This is a project implementation informed by documented techniques, not a clone of Adobe's engine.

## Asset retention and search

All **12 available generated PNG outputs** were accounted for by SHA-256. Eleven already had byte-identical production copies; the unused long-sleeved blouse study was recovered into `dist/assets/archive/` with a descriptive filename and `reviewStatus: rejected`, `active: false`, and no renderer slots. Three older visual files that were present but absent from the gallery manifest were added as inactive alternates. A rejected early mesh diagnostic is also retained.

- Every distributed visual is listed in the catalog with a stable ID, filename, label, review status and tags. Rejected/alternate assets remain downloadable and selectable for reuse but are not automatically activated in the template.
- Search covers names, filenames, tags, descriptions, kind and status. Status filters distinguish accepted, alternate, rejected, active and inactive records. “Accepted” describes implementation selection, not final user visual sign-off.
- Thumbnail browsing supports visual discovery. **Find by picture** compares a local difference hash and luminance histogram; exact SHA-256 file matches rank first. These are approximate visual-pattern matches, not semantic recognition of a person or garment. Some vector formats have thumbnail/name search but no bitmap fingerprint.
- Image queries are processed locally. No external image-recognition service is called.
- Browser-local replacements retain the previous custom binary and metadata as an inactive alternate before a new replacement is committed. A failed archive/save aborts replacement. Bundled originals remain on disk.
- The asset pack contains the entire assets folder, manifest, provenance register and a standalone `asset-gallery.html`. Open the gallery alongside its `assets/` folder to browse and search without the editor. It includes the existing templates' assets, not only v40 additions.

Generation prompts and parent/output hashes remain in their original generation briefs. The recovered long-sleeved study carries its exact original prompt and is linked to its short-sleeved successor. `generation-retention-v40.json` is the inventory. No missing historical output was invented or represented as recovered.

`AGENTS.md` now requires permanent candidate retention, separate activation/review status, descriptive names, provenance and hash records, and catalog indexing. Rebuild text/visual metadata with `python scripts/build-asset-search-index.py`, then rebuild and validate the central register.

## Checks and practical limits

All **24** `scripts/check-*.mjs` entry points pass. New checks exercise curve interpolation, reference/fit timing, dense continuity and positive-area sampling, visible pane silhouettes, artwork hash preservation, hypothesis-report presence, archive recovery hashes, filename/tag/status search, exact/approximate picture ranking, actual gallery HTML rendering and archive-before-replacement order.

Offline staged renders were inspected during each correction pass. The video is an offline 30 fps render; decoding validation establishes file integrity, not real-time browser speed. Native-speed reference playback and live-browser comparison remain unverified in this environment. No frame-perfect or anatomically exact result is claimed.
