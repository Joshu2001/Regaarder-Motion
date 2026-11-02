# V73 implementation / reusable project guide

Run `npm start` and open the supplied local server URL. The inspector now includes “Olympics · television, Owens and the meeting.” Preview buttons seek by source landmark. Hide this continuation to restore V72's endpoint; hide V72 too to restore V71. Earlier custom effects remain unchanged; missing-only defaults and before-version snapshots are retained.

Use Sequence speed and Scene durations to retime the new minute without imposing a global offset on earlier material. Camera XY/zoom, fragment count/seed/speed, flash strength, live title/year, glyph stagger/settling, CRT tint/interference, eye glow, focus strength, tear rim, letterbox and vignette have named controls. Exact defaults and media slots are in factory-defaults-v73.json; that is a factory definition, not a live user-instance export.

Under Individual objects select a source or procedural layer, then set visibility, XY, scale, rotation, opacity, depth, blur, brightness and whole-object motion. Presets: none, float, pulse, spin, shake, fade, follow-path. Advanced motion JSON follows the existing objectMotion schema. Whole-object motion start uses original-source seconds (e.g. 384.4 for the athlete title). Layer names are independent media bindings; replacing a picture keeps prior browser-local replacements archived and treats the new file as a whole source.

Example of a subtle custom portrait float:
```json
{"objectMotionPreset":"float","objectMotionStart":402.633,"objectMotionDuration":5,"objectMotionDistance":8,"objectMotionLoop":true}
```

The two eye points are normalized to the original historical photograph and can be calibrated through exported settings/advanced instance parameters. The glow follows the image. Its named local eye edit supports visibility, opacity and XY offset; full arbitrary retargeting of facial features is not implemented. Character motion remains image-plane motion; no genuine stride cycle, speech animation or automatic body rigging is claimed.

Animation library: search “olympic-sequence,” “1936,” “Jesse Owens,” “television,” “screen interference,” or “rack focus.” Whole sequence defaults to 60 seconds. Each named stage inserts with its own source offset/duration and independent media. Common speed, reverse, delay and transforms use MotionCore; instance changes do not mutate factory definitions. Nested imports validate finite values, positive duration/scale/depth, normalized eye points and supported motion schema before commit.

Modules: olympic-sequence.js (shared renderer/timing/source-resolution masks), olympic-director.js (non-destructive main-template integration), animation-library-director.js (catalog adapter), plus retained V72/V71 source. Original V72 page/library code is archived. A missing V72 page loader was fixed and tested along with V73.

Asset records: olympic-generation-record-v73.json contains exact prompts and SHA-256s; olympic-archive-credits-v73.json plus ARCHIVE-CREDITS-V73.md preserve authors, exact URLs and conditions. Historical image share-alike/jurisdiction conditions remain applicable to relevant photographs/derivatives; no blanket clearance claim. Diagnostic reference frames remain evidence, not production plates.

Review: native 960×540 CPU rendering, 24 stage-center deterministic/opacity tests, full incoming-frame equality, active/inactive object isolation, live title changes, settings/canvas restoration, source/local inverses with custom rates/durations, actual sequential director evaluation, page loader order and real Animation library search/add. Final H.264/24fps videos are checked for 1440 frames/60 seconds and decoded fully. Native browser playback/GPU was not verified; contact-sheet review is sampled visual/temporal inspection, not exhaustive human audiovisual playback.

No original narration, music or new sound mix is embedded. This extends through source 06:55 only, not the full 26:54 original. See FEEDBACK-V73.md for material visual approximations and the portrait-tool refusal.
