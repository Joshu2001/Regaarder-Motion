# V70 — dramatic, story-driven globe opening

Joshua clarified the creative goal: surpass the reference in drama and narrative purpose, rather than prioritize exact replication. He explicitly authorized animated logos, deeper moving sky/clouds, electrical lighting accents, accelerating approach and original sound, including new assets if needed. This pass applies the documentary-motion skill and preserves V69.

## Script and creative structure

Verified access to the uploaded timestamped DOCX “The Nazi Brothers Who Started Rival Shoe Companies” and the native1920×1080 reference WEBM. The first narration cues establish the global brands at0s, iconic scale at2s, a tiny town at5s and Germany at8s. These are the supplied reference narration cues, not a new Joshua-authored script or fabricated narration. The new visual interpretation is global scale → opposing forces → convergence on one town.

| Local/native cue | New authored behavior | Narrative purpose |
|---|---|---|
|0–1.65s|Adidas enters from left; Puma follows from right after0.3s; opacity and a little tilt settle|Introduce the two forces distinctly|
|1.35–4.65s|Independent depth, drifting placement, growing logos and moving alpha-clipped light sweeps; sphere rotates and city lights become more visible|Build global reach and tension without freezing the marks|
|1.25,3.1,4.85s|Brief branched electrical pulses and localized cyan/pink cloud illumination|Controlled tension accents rather than continuous strobing|
|4.65–6.1s|Brand planes enlarge and move outward; continuous-slope radius curve accelerates; rim strengthens; peripheral radial streaks suggest speed|Commit to the approach as narration mentions the town|
|5.85–7.25s|Cloud veil covers and clears the handoff|Conceal the cut and resolve the movement|
|7.25–9s|Existing aerial plate resolves; independent-action town label is delayed until about8s|Let Germany and the shared hometown land|

The default lead remains6.25s with a1s cloud handoff. Native curve seconds normalize to edited lead duration; actual sphere spin remains degrees per real source second. This is an authored treatment, not a physical camera solve.

## Implementation and assets

`globe-drama.js` provides independent brand poses, alpha-clipped light sweeps, three speeds of opposing colored clouds per side, foreground cloud drift, localized electrical branches, sparse pulses and peripheral radial approach accents. Smooth monotonic cubic interpolation in log radius removes slope jumps at camera keys. `globe-opening.js` retains the shared geographic sphere and adds gradual city-light visibility, growing atmosphere and earlier target orientation. Browser and offline render share these production functions. Radial accents suggest blur; they are not a physical shutter or optical-flow simulation.

Existing generated sky/cloud originals and NASA maps are sufficient, so no replacement raster art was generated. Original official logo paths remain unchanged. For offline review SVGs rasterize from their original paths at2400px width, with explicit aspect-correct height; browser tint caches also retain high-resolution masks. Runtime cloud masks feather their edges. Dark rectangular glow/foreground-cut artifacts found in the first diagnostic were corrected before final export. The renderer avoids repeated per-layer blur filters and uses bounded caches to reduce export memory demand.

`globe-audio.js` creates original48kHz stereo rumble, electrical accents, approach impact and cloud whoosh from deterministic noise, sine tones and envelopes. Master and four independent WAV stems are registered. No recorded music, samples or cloned voice occur in these WAVs. Pulse times share the visual native cue positions; audio synthesizes to an edited lead duration in the main player.

## Editing and recovery

Run `node server.js`. In Globe opening · Earth, sky and light, toggle **Dramatic story-driven treatment** or **Animate logo entrances, depth and exit**. Advanced fields expose entrance duration, Puma delay, travel, depth, tilt, exit start, sweep strength, cloud opacity/depth and drift multiplier, pulse strength/times, branch count, rim/city-light growth and radial accent intensity. Existing sources, colors, sphere motion, approach keys and shared playback remain editable. Electrical cue JSON is validated before save. Turn off Dramatic treatment for the preserved V69 visual treatment; turn off the globe lead for the original pre-globe opening.

Main-template sound is opt-in: enable **Play original sound design**, then press Play. Browser audio requires an explicit pointer gesture. Pause, seek, end, visibility loss and playback-rate changes are handled by the sound player. Sound gain is editable. Independent blank-composition globe actions are visual; the included sound stems must be mixed separately for those instances. No universal multi-layer audio mixer or export-audio engine is claimed.

Animation library ID `cinematic-globe-opening` now supplies a9s native action. Shared MotionCore still controls speed, reversal, delay, pause and slow/fast visual timing. Defaults, units, aliases, limitations and JSON are generated in the registry and per-action documentation. Media replacements stay separate from presets; originals and previous local replacements remain preserved. A once-only `globeBeforeDramaticV70` snapshot records previous globe values; only undefined new fields gain defaults. Prior local clocks, phase offsets and custom history-shot settings retain their meanings.

## Review media and limits

The primary9s preview uses the supplied reference audio/narration plus added original sound design. The reference soundtrack already contains background sound/music; it is not an isolated voice recording. Its use is diagnostic context for this supplied-footage project, not a newly cleared reusable narration asset. A separate original-SFX-only preview and WAV stems allow independent assessment. The previous-versus-V70 comparison uses the same0–9s clock, holding V69's final frame for its extra second. Comparisons and reference samples are diagnostic, not reusable source assets.

Staged offline review covers entrance, settled rivals, pulse peak, logo departure, close geography, cloud coverage and exit. Functional checks cover asymmetric poses, deterministic rendering, real logo-pixel movement, camera slope/monotonicity, valid cues, source isolation, Canvas restoration, guarded migration, opt-in audio, stereo/WAV format, pause/seek/rate handling, catalog insertion and provenance. Browser-native layout, device audio latency and real-time playback remain unverified; full-resolution CPU globe rendering can run slowly on modest devices. Native-size review is an offline export, not a promise of real-time1080p playback.

Remaining creative limits: visual acceptance belongs to Joshua; greater drama is an authored judgment. Existing aerial geography is illustrative, not a new accurate map reconstruction. Exact map borders, later portrait transitions and the rest of the documentary were not changed by this globe pass. Raster clouds repeat/differ from the reference; sphere is texture-projected geometry, not a reconstructed reference camera or recovered volumetric atmosphere. No remote commit, push, publication or deployment.
