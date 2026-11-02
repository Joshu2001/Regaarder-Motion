# Globe opening — frame investigation and implementation brief

30 October 2026. Analysis only. No globe assets generated or acquired; no globe renderer added. Joshua approved investigation using the documentary reconstruction skill and reserved asset creation for a later green light.

## Reference and timing

User-uploaded documentary WEBM, native 1920×1080. The previously verified decoded clock runs from 0.000 to 320.805 seconds despite the filename ending 05:08.9. This investigation covers the globe and its handoff through source 00:12. Source time equals local review time for this opening. Four samples per second were inspected: 28 ordered samples from 0 to 6.75 seconds, plus 24 handoff samples from 6 to 11.75 seconds (overlap retained). The capture has irregular native frame spacing; resampled quarter-second labels are review times, not recovered master frame indices.

Source diagnostics: `analysis/globe-opening-study.jpg` and `analysis/globe-geography-handoff-v68.jpg` in the working session, embedded in the separate illustrated report. Reference pixels remain diagnostic, not production artwork.

## Observations, separated from interpretation

| Source clock | Visible observation | Proposed construction / uncertainty |
|---|---|---|
| 00:00–00:01.75 | Small dark Earth near center, blue Adidas field on left and magenta/red Puma field on right; white/cyan dividing seam; soft clouds, specks and a bright pink point on the right | Independent logo planes and colored atmosphere layers behind a textured sphere. There is no evidence that the entire background is one static plate. |
| 00:01.75–00:03 | Earth grows gradually; seam brightness varies behind it; bright cyan light becomes visible near the globe and then in the upper-left blue field | A moving or successively revealed light/flare is plausible. Frames do not establish whether the pink and cyan points are one physical light. |
| 00:03–00:05 | Globe continues growing; the left atmospheric rim strengthens; continents/night lights become more legible; logo fields grow and extend beyond the frame edges | Separate camera/depth treatment for globe and background. Apparent rotation is subtle relative to the approach; rotation axis, angular speed and true production camera are unresolved. |
| 00:05–00:05.75 | Strong acceleration toward Earth; curved cyan/white rim occupies much of the left; Europe-like nighttime geography and city lights fill the advancing face; logos become occluded | Use a sphere with emissive night lights and atmosphere, not a flat image enlarged past its edges. Fit projected silhouette and landmark positions before tuning secondary light effects. |
| 00:05.75–00:06.2 | Nighttime regional surface fills the view, eliminating the brand background | Continue the approach toward a selected regional target; hide a change to regional imagery under incoming cloud cover. This is a proposed reconstruction, not proof of the original production method. |
| 00:06.2–00:07 | Bright clouds pass across the frame and expose a daytime geographical aerial view | Cloud-covered handoff to a separate geographic scene, with exposure/focus change. Preserve separate globe and regional scenes rather than stretching one global texture indefinitely. |

The extended handoff inspection adds three beats: around 7.25–8.25 seconds a white geographic boundary appears and grows with the approach; around 8.25–10 seconds HERZOGENAURACH enlarges and changes screen angle as the view approaches/rolls; around 10.5–11.75 seconds the label fades while brand marks and the monochrome portrait emerge over the map. The boundary’s exact geographic identity has not been independently verified. Keep boundary, label and map motion separate; do not identify an arbitrary outline as Germany.

The central electrical effect is mostly a narrow luminous, irregular vertical seam with flicker and local flares. The sampled footage does not justify adding frequent large branching bolts across the entire composition. The red/blue fields are atmosphere and graphic lighting; the globe stays predominantly dark with a bright rim.

## Camera and scale findings

The growth is not a constant-speed zoom. On the 384×216 diagnostic tiles, the apparent dark globe extent is roughly 60 pixels high near 3 seconds, 100 near 5 seconds and 190 near 5.5 seconds. These are approximate screen-space silhouette observations, affected by the luminous rim and night lights; they are not recovered world distances. Automated single-column estimates at earlier flare-affected moments were inconsistent and were rejected.

Implementation should fit projected globe diameter, center position and recognizable continent landmarks at several timestamps. Start with a fixed-FOV perspective camera moving toward a sphere, then test an independently animated background. Do not claim a unique camera solution: scale, focal length, sphere radius and camera distance are ambiguous from these frames alone. Avoid dramatic spin merely because the Earth is a sphere; retain modest rotation until tested against landmarks.

## Asset and layer requirements for the later approved asset stage

1. Geographically accurate equirectangular Earth surface and nighttime-light textures, with verified source permissions and provenance. Prefer high-resolution sourced maps over generated geography. Approximately 8K global maps are a starting target, with a separate sufficiently resolved regional aerial plate for the final handoff; final resolution must be checked at maximum on-screen magnification.
2. Independent cloud shell/texture around the sphere; separate foreground cloud veil for the regional handoff.
3. Procedural atmosphere/rim-light treatment and red/blue background cloud fields. Reuse existing atmosphere tools where their motion and appearance fit.
4. Existing registered brand geometry, retained as separate replaceable logo planes.
5. Procedural narrow electrical divider, bloom and independently timed pink/cyan flares. No decorative full-screen storm by default.
6. Separate regional view with correct geographic orientation and a cloud-covered join. An illustrative town image must not be called a geographically accurate view.

## Editable controls

Simple: replace Earth/night/cloud maps, globe rotation speed, approach duration, target region, logo visibility and lighting strength. Advanced: axial tilt, longitude/latitude orientation, camera FOV/distance curve, night-light intensity, cloud rotation, atmosphere thickness, rim color, independent logo depth, seam width/flicker, flare paths and cloud handoff/exposure timing.

Timeline integration must be explicit when later implemented: a new globe lead-in and map handoff must not accidentally shift all downstream template scenes. Resolve the opening/map clock mapping and preserve a prior settings snapshot during the authorized implementation.

## Review gates and bounded next implementation

After Joshua authorizes the assets: prepare maps/layers with provenance, then first validate a neutral sphere/camera test against entrance, 3s, 5s, 5.5s and regional arrival. Only then refine atmosphere, brand movement, electrical seam and clouds. Export an original-versus-recreation opening including the geographical handoff. Distinguish original-production unknowns and residual differences from verified rendered behavior.

Current status: investigation completed; globe implementation and asset creation pending Joshua's next instruction. No exact-match or original-camera-recovery claim.
