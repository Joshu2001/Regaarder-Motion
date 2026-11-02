# V67 — commerce bridge

Approved scope: Joshua authorized implementation of the recommended money → street exchange → room entrance after the V66 gap audit. This release implements that bounded block. The globe and post-pose football/library continuation remain pending.

## New sequence

| Bridge clock | Approximate full-upload clock | Action |
|---|---|---|
| 0–2.7 s | 03:53.3–03:56.0 | 45 seeded money bundles tumble across the existing four-shoe diagram; depth ordering, rotation, foreshortening, focus and short temporal blur; lower bundles settle at varied heights |
| 2.7–5.6 s | 03:56.0–03:58.9 | Cut to warm street; suited man recedes from close view; foreground back/shoulder remains soft and independent |
| 5.6–7.1 s | 03:58.9–04:00.4 | Foreground shoulder travels right across the frame; opaque room/street boundary stays behind it, with no full-scene dissolve |
| 7.1–10.5 s | 04:00.4–04:03.8 | Existing room and both existing portraits enter with separate framing; left portrait clears while room converges to the existing SALES starting composition |

Reference times are based on this upload's decoded playback clock and scene landmarks. They are approximate, not recovered production/master timing. The supplied filename does not match the decoded 05:20.805 endpoint. Motion is reference-informed and deterministic, not an exact camera solve or physical simulation.

## Assets and retention

Four original generated PNGs are retained byte-for-byte in `dist/assets/commerce-*.png`. The street and suited man used diagnostic reference frames and the approved young-portrait asset for guidance; money used the cash diagnostic reference. The foreground back/shoulder was generated from its explicit brief. All are illustrative assets, not archival evidence. Exact prompts, original output paths and generation tool are in `commerce-generation-v67.json`; hashes and usage slots are in the asset manifest/register. No original documentary footage is used in the production renderer. Only the separate comparison export contains user-supplied reference footage for review.

The original V66 ZIP and all its artwork remain retained. The old wooden join implementation remains available in source as legacy fallback; it is suppressed for the new active commerce passage. New filenames are siblings, not replacements for approved visuals.

## Editing and reusable actions

Open Next chapter → Missing passage · money → street → room. Preview Money burst, Street exchange, Shoulder passage or Room entrance. Expand one named layer to replace its image, move it, resize it or change visibility. Advanced motion/focus/timing controls remain collapsed.

The animation library includes stable IDs `commerce-room-bridge`, `commerce-street-exchange`, `commerce-shoulder-room` and transparent `commerce-cash-burst`. Named bindings remain separate from motion. Instances use the existing MotionCore playback wrapper for reverse, speed, pause and slow/fast timing. This does not imply an anatomical character rig.

Positions, size and blur use 960×540 stage pixels; exported preview renders directly at 1920×1080. Spin is radians/second; gravity is stage pixels/second²; scale is dimensionless. Exact defaults, units and source hashes are generated in the human/AI animation catalog and JSON registry. Integrated sequence timing is edited via the four named history stage durations; standalone `bridgeDuration` belongs to the reusable action's native clock.

Migration adds four absent bridge stages before existing chapter stages, preserving custom durations, keys, artwork bindings and unrelated settings. Browser startup keeps a `historyShotsBeforeBridgeV67` snapshot and only fills undefined bridge defaults. Previous chapter start coordinates shift by 10.5 source-clock seconds; chapter-local event times remain unchanged.

## Verification and limits

- Meaningful automated checks cover deterministic poses, valid phase order, nonblank renders across cash/street/occlusion/room, canvas transform preservation, custom timing/key retention, idempotent migration, and pixel-exact room endpoint continuity.
- Existing chapter regression and asset-provenance checks pass. Animation registry generation/check and asset-search regeneration pass.
- Nine surrounding chapter-local frames (0, 4.5, 8.7, 17, 25, 34, 44, 50, 52.8 seconds) are pixel-identical to renders from the attached V66 source.
- Staged renders inspected at entrance, money peak/settle, street close/pullback, shoulder transition intermediates and room arrival. The first review showed insufficient cash coverage and an undersized shoulder; both were revised before export.
- Native browser interaction could not be verified: Playwright is present but its Chromium executable is absent. Offline renderer checks do not certify the complete browser editor.
- The street architecture, subject likeness, foreground shoulder angle, exact money silhouettes and motion paths differ from the original. Existing room artwork/window geometry remain approximate. No frame-perfect claim.
- Preview/comparison are silent. No narration or soundtrack was reconstructed.
- No GitHub push or deployment.

## Reproduce

Run `node scripts/check-commerce-v67.mjs`. For memory-bounded 1080p export, run `node --expose-gc scripts/render-commerce-v67.mjs --video --part N` for N=0,1,2,3, then concatenate the four parts in order. The companion review JSON records clocks, exact defaults and stages. Original reference footage is a separate review input and is not packaged as a production dependency.
