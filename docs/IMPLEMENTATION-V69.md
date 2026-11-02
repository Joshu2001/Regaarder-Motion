# V69 — spinning globe and dramatic sky

Joshua explicitly authorized creating the globe, moving sky/clouds, red/blue coloring, rotation, dramatic lighting and flashes. This supersedes the analysis-only status in V68. User acceptance of the resulting visual is pending.

## Implemented

A perspective ray/sphere renderer projects separate day geography and night-light textures onto a rotating sphere. The same production renderer supplies browser Canvas and offline native1920×1080 review. Independent generated atmosphere and transparent cloud originals are retained. Moving cloud layers receive separate red/blue color tints; an electrical divider changes contour over time; traveling flares and brief authored flash peaks punctuate the slow spin and accelerating approach. A foreground cloud veil covers the globe-to-map handoff. These are editable layers and parameters, not a single baked video.

Sources: NASA Blue Marble monthly July2004 day map and Black Marble2016 night map. Exact download URLs, credits, SHA256 hashes and usage notes are recorded in the asset manifest/register. The night original13500×6750 remains byte-for-byte inactive; the8192×4096 playback derivative is separately registered. Neither modern map is historical evidence for the1920s. The sky and cloud PNGs are generated illustration assets; exact prompts and original outputs are retained in assets/globe-generation-v69.json. Existing registered logo geometry is reused.

## Editing

Run `node server.js`, open the editor and the depot controls. The new first section is **Globe opening · Earth, sky and light**. Preview opening, spin, approach or handoff. Simple controls expose approach duration, spin in degrees/s, sky drift in stagepx/s, atmosphere/rim and flash strength. Advanced controls expose orientation/target, FOV, brightness, cloud motion/opacity, seam, flares, brand visibility/scale, colors and radius keys. Replace Earth, night lights, sky, cloud or marks independently. Previous browser-local replacement imagery is archived before overwrite. Turn **Use globe lead-in** off to restore the preserved original opening.

Animation library → search **globe**, **earth** or **red blue clouds** → **Add & preview** inserts an independent action. Stable ID `cinematic-globe-opening`; MotionCore capability `globe-opening`. Shared playback supplies speed, reversal, easing, pause and slow/fast timing. Media bindings are separate from movement presets. Exact factory defaults/units and JSON recipes are generated in docs/animations/cinematic-globe-opening.md and dist/animation-registry.json. The independent action uses the existing aerial plate after the wipe; main-template integration reveals the existing map renderer.

## Migration and timeline

Only undefined new settings receive defaults; existing values remain. `openingBeforeGlobeV69` stores the original settings, duration and history-shot snapshot once. The global timeline gains a6.25s lead; all existing absolute phase positions shift by that lead, while zoomDuration stays a duration. During the legacy synchronous renderer call, its original phase clock and duration are restored; the prior scene order and local curves retain their meaning. Current old-scene playhead positions are translated into the extended timeline. Disabling the lead removes its time offset. Custom history shot durations and earlier keyframes are preserved.

Native camera curve seconds are0–6.25 and scale to the chosen approach duration. Radius keys are projected stagepixel radii, not physical meters. Spin uses actual clipseconds. Default radius45 at0s,74 at3s,132 at5s,254 at5.5s,660 at5.75s,1600 at6s and2400 at6.25s. Cloud entry occurs5.85–6.25 native seconds and clears over one following second. Target orientation interpolates toward10.9°E49.6°N during the approach. These are authored estimates, not a recovered source camera.

## Review and known gaps

Reviewed entrance0s, spin3.4s, pre-approach5.25s, enlarged globe5.75s, cloud cover6.15s and post-wipe7s against the source frame study. The preview covers0–8s at30fps, silent, using the production sphere/cloud renderer. The comparison uses matching source timestamps; it is a diagnostic excerpt of the uploaded reference, not a reusable production asset. Source cadence is variable; conversion to30fps duplicates/drops frames for review rather than proving frames were missing from the upload.

The broad event order is reproduced. Cloud silhouettes are newly generated and visibly differ; the reference has a softer, brighter cyan/magenta glow and different brand-plane tint/cropping. The seam, flash peaks and spin axis are authored approximations. The Earth orientation during the close approach differs from the source. The existing aerial plate is illustrative and the town label appears earlier than the original after the wipe; border drawing, exact map camera and the later portrait transition were not reconstructed in this bounded globe pass. No Google Earth pixels are represented as a newly accurate geographic map. These are remaining fidelity gaps, not claimed exact matches.

Pure renderer checks cover deterministic same-time pixels, independent spin/sky/flash/source changes, timing/targeting, cloud boundaries and context restoration. DOM event controls reject invalid camera keys and preserve custom fields. An integration harness executes the actual globe director to verify original local clocks, restored global clocks, saved custom settings and disabled-globe recovery. Animation catalog/insertion/preset checks, provenance validation, registry freshness, commerce bridge and moving shoe-dash integration pass. Browser-native layout/performance remains unverified: browser installation was unavailable, so the DOM harness does not certify browser appearance. CPU spherical sampling may limit playback on slower machines; lower advanced Render Scale for preview, retain1 for export.

No remote commit, push, publication or deployment performed. Original uploaded source artwork and prior candidates remain unchanged; V68 remains separately available.
