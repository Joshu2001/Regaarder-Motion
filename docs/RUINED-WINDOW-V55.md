# V55 — ruined-window parallax

Joshua approved the interpretation after reviewing the supplied screenshots: the person appears inside a damaged building, looking downward through an empty wall opening at nearby ruined façades. The person becomes smaller and shifts right relative to the city, exposing more dark interior wall before the sideways occlusion. The previous template instead used one image of an outdoor panoramic lookout.

## Evidence and limits

Exact edit source: `dist/assets/ruined-window-selected-reference-v55.png`, copied unchanged from `image-edit-target-ebdd80458beeb6b7.png`. Supporting screenshots span `image(20261029-023815).png` through `image(20261029-024229).png`. Earlier timestamped reference extracts in `docs/analysis-v45/` support the overall scene/transition order. The original full02:05.9–03:00.0 clip is not currently available locally; extracted frames are retained. Screenshot filename spacing does not establish native motion duration.

Observed: lowered gaze, close ruined façades, increasing visible dark wall, shrinking/shifting person. Inferred: an interior damaged-window opening and separate depth planes. Full3D buildings remain unconfirmed; no clear newly revealed façade surfaces were established. This release uses2.5D layers, not reconstructed volumetric buildings. Image generation reconstructs concealed portions and is not a pixel-identical source extraction.

## Implementation

`dist/ruined-window.js` renders three independently replaceable layers in order: city, dark damaged wall, person. No glass, conventional wooden window frame or artificial mountain lookout is added. A continuous progress value runs over chapter source11.758–20.000seconds; it does not restart at passage start17.2seconds. Scale at a depth z is `z/(z+pullback*q)`. Near person/wall shrink faster than the city. Independent lateral distances put the person and city in opposite directions. Person’s lower crop stays below the stage edge during the default pullback. City overscan automatically covers drift in any of the four supported directions.

The existing opaque wall passage17.2–20.0seconds is retained. Its outgoing scene now invokes this layered renderer, so movement continues as the scene shifts behind the textured wall. Entrance from aftermath footage and following portrait timing remain unchanged. The source artwork is photorealistic grayscale illustration, not archival evidence.

## Simple editing

Open **Next chapter → Ruined window · person, wall and city**. Replace Window person / Broken window wall / Ruined city separately. The existing asset store preserves prior replacement versions. Choose a layer and click the starting preview to place it. A person/wall click sets the image canvas’s upper-left corner; city placement uses its center. Transparent padding is part of the image canvas. Advanced controls expose exact position, scale, depth, blur, light and independent travel distances. Four direction buttons change motion axes without mirroring the artwork. Start/end are chapter source seconds; speed1.5 means1.5×. Camera and passage timing remain independently editable.

Search **Animation library** for “broken window”, “over shoulder”, “ruins”, “pullback” or “parallax”. Stable effect ID: `ruined-window-parallax`. Add an independent instance, replace its media, and adjust common speed/reverse/pause/delay/slow-fast controls. Motion presets stay separate from media bindings. Existing generic spatial occlusion is a separate reusable action.

## Exact defaults

| Parameter | Value | Unit |
|---|---:|---|
|Enabled|true|boolean|
|Start / end|11.758 /20|chapter source seconds|
|Speed|1|multiplier|
|Direction|right|right, left, up, down|
|Pullback|260|shared scene units|
|Person / city / wall depth|950 /2800 /750|shared scene units|
|Person X / Y / width|-240 /-45 /730|initial stage pixels|
|Wall X / Y / width|-600 /-60 /2400|initial stage pixels|
|Person / city / wall travel|240 /-55 /145|stage pixels over complete track|
|City X / Y|0 /0|stage pixels from center|
|City scale|1.26|cover-fit multiplier; auto-overscan minimum applies|
|City / person / wall blur|1.6 /0 /0.5|output pixels|
|City / person / wall brightness|0.83 /0.84 /0.65|multipliers|

Complete machine-readable values are in `dist/ruined-window-settings-v55.json` and the generated animation catalog. Depth and lateral travel are authored separately for controllable editorial parallax; this is not a single calibrated physical camera.

## Recovery and provenance

`historyWindowEnabled=false` restores the original `history-shoulder-v46.png`. The editor button is **Use original lookout image**. All previous assets/reviews remain included. No migration overwrites custom positions or passage timing; only missing new keys receive defaults.

New production sources: `ruined-window-person-v55.png`, `ruined-window-city-v55.png`, `ruined-window-wall-v55.png`. `ruined-window-generation-v55.json` retains complete built-in image-generation prompts, exact source/output hashes and original tool filenames. Original generated bytes are copied unchanged. Source context, asset descriptions, searchable fingerprints and provenance register are updated.

## Review and validation

Offline stills cover chapter11.758,14,16.5,17.2,18,18.6,19.3,20 and21seconds, including beginning, intermediate pullback, wall passage and portrait arrival. The initial shrinking cutout exposed a hard lower edge; anchoring its lower boundary corrected this before the final preview. Remaining gaps: original camera calibration, exact original building geometry, native reference speed and native-browser playback are unverified. No deployment is claimed.

Automated checks verify genuine alpha, monotonic shrinking and opposing movement, continuity through passage start, full city coverage in four directions, lower-edge protection, independent source replacement/removal, actual history-stage integration, original-image fallback, editor replacement/direction controls, and exact prompt/source hashes. Broader catalog, scene and asset checks remain required.

The supplied person is an upper-body cutout with a cropped lower boundary. Default horizontal motion keeps it below frame. Large vertical travel can expose that source crop; use a complete figure or adjust its size/Y placement for such variants.
