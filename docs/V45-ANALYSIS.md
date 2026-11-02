# V45 — continuous cloud correction and next-reference analysis

28 October 2026. Cloud motion is corrected in the template. The newly uploaded scenes have been analyzed, not implemented.

## Cloud correction

V44 stopped the cloud bank at full coverage during the dark interval, then restarted it on a separate eased reveal curve. V45 uses one smooth camera-distance curve over the combined cover, dark and reveal duration. The legacy stage controls contribute to the total travel time; the dark duration no longer creates a stationary hold. Brightness changes while the bank continues moving. Existing scene assets and subsequent boy-parallax timings remain intact. The previous map is replaced only once the cloud bank fully covers the viewport.

29 check scripts pass. The new continuity check samples 601 positions for both default and custom timing: no interior stop, reversal or velocity jump at the former stage boundaries. This verifies the authored motion; it does not establish exact reference fidelity. The focused 8.47-second preview starts shortly before the cloud passage and includes the boy/fire hold. Existing imported custom presets remain preserved.

## Source and method

Source: The Nazi Brothers Who Started Rival Shoe Companies - MagnatesMedia (1080p, h264)_02-05.9_to_03-00.0.webm.

747 decoded video frames, first presentation timestamp 0.000 s, last 53.788 s; 1920 × 1080. Container r_frame_rate is 1000/1 and average frame rate is unspecified: those are not a reliable playback rate. Analysis retains decoded presentation timestamps. Original-video times below are approximate clip time + 125.9 s, based on the upload name, not independently verified master-video timecodes.

Pass 1: twelve evenly distributed overview frames to establish the main sequence. Pass 2: 54 frames nearest each whole second. Pass 3: 25 denser frames around the eye entrance, both number-wheel wipes, picture-card flip and final dark exit. Deterministic grayscale differences were computed across all 747 decoded frames at 320 × 180; large differences guided boundary inspection. A difference peak is not automatically a cut: foreground wipes produce several consecutive peaks.

Timestamped images, full decoded timestamps and difference measurements are in docs/analysis-v45. Three detailed contact sheets and a boundary contact sheet document the closer pass. Offline frames were inspected; synchronized native-speed playback and audio analysis were not performed. This is visual analysis, not a claim about narration, identity or the original editing software.

## Overall sequence and proposed reusable effects

Times below are seconds within the uploaded clip. Boundaries are approximate visual ranges, not word-aligned edit decisions.

| Clip range | Visible composition and movement | Candidate reusable effect |
|---|---|---|
| 0–2.34 | Two boys in ruined landscape, warm sky and separately changing foreground fire; foreground boy dominates right side. | depth-parallax + fire-frame (existing families) |
| 2.34–3.27 | Camera advances rapidly into the foreground boy's eye; the next workshop composition becomes visible inside the enlarged eye before filling the screen. | eye-portal-push: focal point push-through reveal |
| 3.27–6.69 | Seated worker in cap by a bright left window; warm beams/haze, foreground tub/table, subtle composition movement. | portrait-depth-hold + window-light-rays |
| 6.69–7.38 | Reflective metallic wheels with large numerals sweep/rotate over the workshop and carry the image into a gray ruined city. | number-reel-wipe |
| 7.38–9.42 | Wide monochrome ruined-city view with dark haze/smoke. | archival-plate-hold |
| 9.42–11.76 | A closer rubble/street shot replaces the wide view. | archival-shot-cut |
| 11.76–18.99 | Rear/profile view of a foreground figure looking toward damaged buildings; foreground is darker and differently framed from the distant ruins. Transition into seated boy overlaps around 18–19 s. | over-shoulder-depth + portrait-dissolve |
| 18.99–25.09 | Monochrome seated boy by left window. Framing moves progressively closer; face remains recognizably the same while the window and bright cloth retain scene context. | portrait-push-in |
| 25.09–25.59 | The metallic number-wheel wipe returns, covering the portrait and uncovering the shoe graphic. | number-reel-wipe (reuse, new source bindings) |
| 25.59–32 | Repeated black shoe silhouettes/soles with irregular white borders slide across textured beige paper. One selected shoe gains blue edging. | cutout-strip-scroll + selection-outline |
| 32–38.85 | Selected shoe separates from the row, enlarges and changes apparent orientation toward a front/underside view; spikes become visible beneath it. Neighboring cutouts remain as context. | product-focus-turn + spike-reveal |
| 38.85–40.49 | Rough paper/photo-card frame appears around the selected object; the card turns nearly edge-on and opens onto a monochrome workshop photograph. | picture-card-flip |
| 40.49–43.5 | The workshop card grows; a color seated-boy composition overlaps/replaces the monochrome worker image. | photo-card-push + portrait-dissolve |
| 43.5–50.84 | Color portrait hold with a progressively closer frame, bright left window and stronger right-side shadow. | portrait-push-in (reuse with different grade) |
| 50.84–51.68 | Portrait darkens into near black. | exposure-to-black |
| 51.68–53.788 | Wide ruined street, small lone rear-facing figure centered, oversized red/orange fiery form above/ahead. Only the entrance is supplied. | ruined-street-depth + fire-composite; final hold/exit unknown |

## Finer observations and limits

- Eye transition: the workshop is already visible within the eye at clip 3.036 s. A generic crossfade would miss the focal alignment and rapidly growing eye boundary. Use a replaceable source, normalized focus point, mask, push curve, destination scale and overlap controls. It need not be tied to this specific face.
- Number wheels: frames at 6.914, 7.054 and 7.185 s show reflective numerals crossing and obscuring both images. The repeated sequence at 25.253–25.593 s supports one reusable transition renderer with swapped source/destination scenes. Exact digits, geometry and direction need closer tracking before implementation; the stills do not establish the real 3D setup.
- Portraits: window, face, cloth and dark right-hand area should be tracked independently before choosing a global push versus layered parallax. The visible framing changes alone do not prove puppet motion or AI video. Do not repeat the previous whole-body deformation mistake.
- Shoe row: the white outline belongs to each cutout, not the background. The blue outline follows the selected shoe. Both colors, widths, selection timing and source silhouette should be independent parameters. The paper grain and scratches are separate from the shoe source.
- Shoe turn: changing perspective and visible spikes mean a flat 2D spin is insufficient. Candidate methods are a real editable 3D object, a controlled multi-view image sequence, or a hybrid. The supplied frames do not prove which was used. Do not promise an arbitrary single image can reveal unseen shoe geometry without additional assets.
- Picture card: the shoe is centered before the frame turns; at 39.981 s the card is nearly edge-on, and at 40.485 s the workshop is visible on its face. Front/back source, pivot, perspective, border, shadow, duration and camera push should be replaceable settings.
- Final fiery form: its exact identity and subsequent action are unresolved. Describe it as a fiery form/composite until the next footage or user explanation establishes what it represents; do not invent a person or object identity.

## Implementation proposal for review

Start with the eye-to-workshop passage, then implement the number-reel transition once and reuse it for both occurrences. Follow with portrait depth and the shoe strip. Treat the shoe's perspective turn as a separate asset/geometry decision before building it. Extend existing fire, texture-fill and parallax families rather than duplicating them.

Effect IDs above are proposed catalog names, not a claim that all renderers or an effect-search browser already exist. For future search, store plain-language aliases, visual descriptions, compatible source types, preview, normalized parameters, provenance and shot relationships beside each stable effect ID. The searchable effects browser remains a separate pending task.

This document presents the reference interpretation for the user's review. No new source-scene artwork or reconstruction was generated for this clip.
