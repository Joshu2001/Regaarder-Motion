# Regaarder Motion Atelier — continuation handoff

Updated 28 October 2026 (Taipei). **Continue the existing implementation. Do not rebuild it.**

## Latest user correction and authorization

There are **two boys**, not three. Joshua corrected his earlier wording. They are tightly framed, very large cutouts: a sharp blond foreground boy on the right and a smaller, softer boy on the left. Match their apparent size to the reference, rather than making both figures equal in size. The shot is layered parallax, not a single picture sliding or zooming. Sky/clouds, bright sun/glow, landscape, both figures and fire must have independent editable layers and motion. The first generated wartime composite is rejected for framing, scale and flat structure; retain it but do not use it as the accepted scene.

Joshua has already authorized continuing the blouse routes, cloud descent, wartime reveal, simple editing and reusable effects. No new general green light is needed. His immediate request was: save this handoff first because credits may expire, then continue implementation. Earlier requests for a third boy are resolved; do not ask about a third figure again.

## Last delivered baseline: v42

- [Editable v42 source](https://chatgpt.com/library?file_id=libfile_ce557e4675b8819188dcdc33ba4c405d&account_id=personal)
- [v42 assets](https://chatgpt.com/library?file_id=libfile_960b3b3587a08191be78fd3223fd6d9b&account_id=personal)
- [v42 review video](https://chatgpt.com/library?file_id=libfile_c3b378b906848191b52a29cfaf89bc4b&account_id=personal)
- [v42 detailed notes](https://chatgpt.com/library?file_id=libfile_007a04a1cdf8819194b79704844e3fcf&account_id=personal)

v42 is the last delivered source, not a claim of final visual approval. All 26 checks passed for v42. Its 32.5-second silent 960×540/30 fps preview starts at Depot age 97.7. The window was improved but remains illustrative. Joshua supplied `woman-blouse-hem-gesture.mp4`; it replaced the bad woman cutout/warp by default. That MP4 remains byte-identical, muted at runtime, default source trim 0–3 seconds. It has slight head motion; the app must not add body deformation or a camera push.

v42 also includes a shared compatible-effects library, per-asset settings and reusable presets, general AI-animation prompt preparation, asset retention/name/picture search and image/video source replacement. **There is no AI video-generation service connected.** The prompt feature only creates/copies/downloads instructions for another AI.

## Current working checkpoint: v43 is unfinished

Working folder: `/workspace/scratch/24b9f14cbd4b/Motionclone-v43`.

The accompanying archive `Motionclone-v43-WIP-checkpoint.zip` preserves this working tree and key reference inputs. It is a checkpoint, not an approved release. v42 was not overwritten or deployed. No GitHub commit/push is part of this task.

### Work already written, not fully validated

- `dist/route-motion.js`: reusable normalized routes; Catmull–Rom sampled paths, arc-length position, growing dashed/solid/dotted path lines, delay/duration, shrink and visibility.
- `dist/route-scene.js`: multiple copies of any bound image travelling along separate routes. Shared `precisionLinen` source or route-specific `slot` bindings. Default five routes are inferred approximations, not recovered exact reference tracks.
- `dist/laundry-scene.js`: route mode added, old garment layout retained behind a toggle. Large blouse shrinks toward the first route, using map rotation/scale/offset to align the handoff. Lines and garments share the map camera transform.
- `dist/reveal-fx.js`: reusable cloud veil and fire compositing; supports real fire media with procedural fallback.
- `dist/war-motion.js`: sequential cover/dark/sky/rise/hold timings after laundry; proposed new default end is Depot age 138.0, versus old laundry ending 130.2.
- `dist/war-scene.js`: **placeholder single-composite reveal only — must be replaced with independent parallax layers.** It currently still references `warScene`; do not mistake this for the corrected implementation.
- `dist/easy-director.js`: first pass at “Make it yours”: image replacement buttons, route/map/war previews, heading, speed, draggable route dots, line style and advanced timing/size. Older controls wrapped under Advanced. Replaces source bindings without resetting routes. Loads the provisional war asset and existing real-fire video. Extends duration. **Needs UI testing.**
- `dist/effect-library.js`: adds route travel, cloud descent and fire-frame to reusable compatible effects.
- `dist/shared-effects-director.js`: exposes route effect coordinate pairs, line style and end scale; readiness event for simple UI initialization.
- `dist/layer-director.js`: readiness event for simple UI initialization.
- `dist/depot-finale.js`: dispatches wartime continuation after laundry.
- `dist/index.html`: includes `easy-director.js`.
- `scripts/render-motion-review.mjs`: first-pass extended renderer, loads proposed war plate and decodes real-fire frames; extra cloud/dark/sky/rise/hold stills. It has rendered stills once, **not a final v43 review video**.
- Cache suffixes advanced to `motion-v43` in JS, HTML and checks.

### Important current hazards to fix

1. **Rejected art is still referenced by provisional loader/renderer.** Replace that binding and renderer with the corrected separate layers before calling v43 complete. The manifest marks the old generated image rejected/inactive with no slots, but runtime code still points to its filename. Do not ship that mismatch.
2. No v43 check suite has been completed. v42’s 26-pass result must not be reported as a v43 result.
3. New files are not all added to the procedural provenance map yet; asset-register generation still carries inherited version text in places. Finish registration and regenerate all records.
4. Easy editor and shared effect controls have not been verified in a live browser. Test pointer editing, persistence, source swaps, source-specific routes, trim and final timeline duration.
5. Verify blouse-to-first-route continuity, branch onset, route-line endpoint alignment, map-camera registration, full cloud coverage before the dark interval, and the corrected parallax entrance/hold.
6. Generic route/fire/cloud effects must remain reusable on other compatible assets. Definitions exist; verify actual rendering and state isolation, not just the menu entries.
7. Do not claim native-speed browser/reference review: prior review was offline decoded frames and numerical analysis. No live-browser validation has been established in this environment. A previous cloud browser could not access localhost and explicitly blocked file URLs; do not bypass that policy with a workaround.

## Reference inputs and what was observed

Latest supplied clip:

`The Nazi Brothers Who Started Rival Shoe Companies - MagnatesMedia (1080p, h264)_01-54.0_to_02-06.0(1).webm`

Library ID: `libfile_350c228738488191a39e91da8b93be9e`.

Despite its filename, the decoded video ends near **14.533 seconds**, with 212 video frames and variable timestamps. Nominal `r_frame_rate=1000/1` is misleading; use decoded presentation timestamps. Eight timestamped thumbnails and source hash are in `docs/analysis-v43/reference-analysis.json` and adjacent JPEGs.

It shows: mother/blouse at the beginning; blouse shrink/pullback into a red/orange aerial map; several garment copies travelling along diverging thin blue routes; “THE LAUNDRY BOYS” title; foreground clouds covering the map; dark cloud band; warm sky; first entry of the wartime figures. The full hold/fire is better visible at the very end of the older overlapping `…_01-50.0_to_02-06.0.webm` clip. Both key clips are included under the checkpoint’s `reference-inputs/` folder where available.

Late-frame comparison from the older overlapping clip, approximately 19.894–20.274 seconds at 960×540:

| Region | Median upward movement | Inliers | Interpretation |
|---|---:|---:|---|
| Right foreground boy | 116 px | 139 | Strong evidence of fast near-layer rise |
| Left boy | 94 px | 20 | Weaker regional estimate |
| Landscape | 76 px | 100 | Slower background rise |
| Sky/clouds | ~48 px | 3 | Too few inliers for a reliable motion conclusion |

Foreground fitted scale is about 0.990 over that short interval: mostly translation rather than one global zoom. SIFT ratio 0.72 and deterministic similarity RANSAC were used on manual regions. These are image-space estimates, **not an exact 3D camera solve or proof of the original production process**. See `docs/analysis-v43/parallax-recheck.json`.

Visual correction: the reference sky is pale yellow with peach cloud streaks and a strong bright right-side horizon bloom. It is not the dramatic orange sunset in the rejected candidate. The ruined landscape and softly focused left boy sit behind the close, sharp blond right boy. Fire is visible near the lower edge in the longer overlapping ending. Use independent editable sky/cloud, sun/glow, landscape, rear-figure, front-figure and fire tracks, preserving their relative depth and focus.

## Rejected generated candidate — preserve permanently

- `dist/assets/war-brothers-sunset-v43.png`
- Original imagegen output: `generated_images/exec-495b4de3-9d36-46f0-862f-9f1afe92a49a.png`
- Exact prompt: `dist/assets/war-generation-brief-v43.json`
- Manifest ID: `war-brothers-sunset-v43-rejected`

The PNG is retained byte-for-byte, indexed, rejected/inactive. Do not delete it, overwrite it or label it accepted. Create separately named candidates for revisions. All generated candidates, even failed ones, remain in assets and searchable by name/status/picture. Record exact prompts, references, modifications, permission status and hashes.

## Next implementation steps

1. Generate/prepare **separate** matching layers with the built-in image-generation tool: pale sky/cloud plate, independent sun/glow (can be procedural), ruined landscape, sharp close blond foreground boy, soft smaller left boy. Use reference framing and ages; do not turn them into distant adult figures. Retain exact provenance. Fire remains separate, reusing registered `assets/real-fire.mp4` where appropriate.
2. Replace the flat placeholder `war-scene.js` with depth-dependent transforms. Start with the coarse composition; inspect it; then fit motion, blur, glow and overlaps. Compare entrance, intermediate motion, hold and exit. Expose simple controls first, advanced per-layer offsets/scales/speeds/focus/timing below.
3. Finish and validate routes. Preserve parent blouse image and all user settings. Make line color/width/dash/gap/opacity, branch delay/duration, image size/rotation and custom path/source bindings editable.
4. Test the easy editing panel. Image replacement must keep the same animation; no JSON should be necessary for routine edits. Advanced JSON is supplemental.
5. Run all relevant checks, add meaningful route/parallax/source-swap/continuity tests, regenerate asset search, gallery and register, then render and review the new video.
6. Deliver new editable source ZIP, complete asset ZIP, review MP4 and concise limitations. Update this handoff to reflect what actually passed. Do not call the result frame-perfect.

## Buildless project and commands

Read `README.md`, `AGENTS.md`, `docs/VISUAL-FIDELITY-CHECK.md`, `docs/NURSERY-CONTINUATION.md`, `docs/DEPOT-CONTINUATION.md`, `docs/ASSET-REGISTER.md`.

```sh
python -m http.server 8000 --directory dist
python scripts/build-asset-search-index.py
python scripts/build-asset-gallery.py
python scripts/build-asset-register.py
node scripts/check-asset-register.mjs
```

Run `scripts/check-*.mjs` with Node from the project root. The offline `scripts/render-motion-review.mjs` requires FFmpeg and `@napi-rs/canvas`; runtime dependencies are available via `CODEX_PRIMARY_RUNTIME_NODE_MODULES`. It regenerates temporary video/fire frame caches from the included media. Exclude `review-frames`, `review-stills`, `review-media-cache`, `review-fire-cache` and `.git` from source deliverables.

The longer-term narration/image/metaphor/prompt/sound harness remains a future goal. No narration transcript has been supplied. Existing shoe meshes are illustrative; exact product fidelity/right-side branding remains unresolved. This project concerns Puma; Joshua sometimes calls its cat “Jaguar.”
