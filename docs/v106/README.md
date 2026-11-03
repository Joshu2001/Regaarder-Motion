# V106 focused reference correction

## Delivered behavior

- Reference Fit has independent **Neck only** and **Hat only** targets. Neck fitting
  adjusts neck shortening, thickness, nape and throat shape. Hat fitting adjusts
  crown width/depth/height, brim width/depth, tilt/roll and XYZ seat offsets without
  moving the character root. Existing manual sculpt, weight and bone controls remain.
- Placement fitting locks scale proportions by default; users can explicitly unlock
  them. The choice and the new target regions survive saved reference drafts.
- Reference Fit states that acceptance covers only supplied sample times. Adjacent
  held-out frames cannot establish accuracy across an entire animation.
- Revised blue actor approach, body/head orientation, neck/jaw profile and relaxed
  non-shaking fingers; revised cream actor spacing, side profile and brim fit.
- Independent early wide-shot and close-up FOV keys. The clasp stays low in the close-up.
- Editable **Reach arc height m** in the workshop adds a smooth vertical arc while
  approaching/releasing. A zero value retains previous behavior. Existing shared palm,
  per-finger curl, opposition, contact-aid and elbow-guide controls remain editable.
- Blue front fill reduced and pale rear light repositioned to recover darker blue
  shading; the lighting remains a reconstruction rather than an exact recovered rig.

Select **Load updated handshake** to create the new template. Existing saved scenes
are preserved. `previous-scenes-v105.js` retains the previous source template.
The three red-player template uses the same shared editor and engine.

## Verification and an important rejected result

The first bounded head-shape optimizer improved the .60 s fitting frame and adjacent
.70 s validation frame, including full-resolution checks. Broader later-frame review
showed poorer silhouettes. Its `accepted` field refers only to that small sample set;
**the optimizer's candidate shape was not promoted**. `head-fit.json` retains this
experiment and its production decision, rather than presenting a local score as
proof of full-sequence fidelity.

The final scene retains cranial dimensions close to V105 and instead corrects early
camera scale, head/body orientation, the neck/jaw junction and shot timing. See
`heldout-head.json` and, when present, `heldout-head-fine.json` for the final independent
four-frame comparison at .40, .70, 2.80 and 3.20 s (source time = local + 900 s).
Those measurements compare center-aligned head/neck contours. They do not measure
actor placement, body anatomy, hat fidelity, lighting or overall realism. The coarse
256-pixel working grid has 2.5-source-pixel raster spacing; a tiny late-frame change
at that precision is not evidence of a meaningful geometric improvement.

`native-checks.json` checks independent neck/hat parameters, proportion locking,
finite rigs, a closed head seam and non-worsening finger-capsule overlap across five
poses. Palm target residuals are recorded in meters. They are not full mesh collision
measurements. `ui-checks.json` verifies a real editor upload, draft save/reopen, Hat
selection, pose mode and unlocked proportions without silently modifying the template.
`render-report.json` records a deterministic 68-frame, 12 fps native render.

## Remaining fidelity gaps

This is improved editable reconstruction, not an exact source match. Remaining work
includes the continuous pale back rim, muscular back/chest silhouette, the cream jaw
and collar shading, precise hat perspective, fingertip/mesh intersections, release
motion, and whole-scene camera/actor registration. The close-up hold and final pullback
still differ in timing and apparent scale. General mesh collision, inferred hidden
3D anatomy and full-body physics have not been added.

The main documentary is still incomplete; this release addresses the existing
15:00–15:05.63 handshake interval. It does not finish the 26-minute source video.

## Runtime, precision and delivery

Pure browser JavaScript and the repository's bundled Three.js; no Python service,
external authoring app or AI API is required. Python/Node scripts are development QA.
The generated animation registry is compact JSON with numeric values rounded to six
decimal places (at most 0.5e-6 absolute difference); editable source modules retain
full precision. Existing model/vendor licenses and inactive-archive limitations remain.

The cumulative ZIP is an overlay for the V97-or-later repository. Keep the existing
assets and vendor directories. The comparison is a silent native render beside
matching source frames; no generated paintover is used as implementation evidence.

Final source-resolution check: four-frame mean head/neck contour error 4.89 → 3.83 source pixels (21.7% lower). The two later means increase by 0.15 and 0.23 pixels; these small regressions are retained explicitly. This is an aggregate improvement with residual errors, not a per-frame exact match.
