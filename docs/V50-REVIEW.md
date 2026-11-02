# V50 — reusable editable animation catalog

29 October 2026 (Taipei). Continues the saved V49 project; earlier unfinished V50 work was reconstructed after a workspace reset. All original production and retained alternate assets remain in the project.

## Delivered behavior

Animation library searches 75 effect definitions, stages and control groups. Entries describe visible behavior and implementation, exact factory parameters, source bindings and limitations. Add & preview creates independent reusable layers; native-only records open existing tools. Original scenes retain their native editor controls.

All composition actions, including future registered actions, share speed, reverse, delay, pause, easing, slow/fast timing and existing layer transforms. The layer remains visible for the complete slowed/delayed span, and the composition expands to contain it. Independent named image bindings are scoped to each render and restored afterward. Movement presets save/load without changing selected source images. Current composition JSON remains distinct from factory definitions.

Generic cloud and wall-occlusion actions support all four travel directions without rotating artwork. Cloud distance uses one continuous velocity across its former internal travel segments. Wall travel stays opaque, with separate source/destination planes and a dark textured foreground wall. Multi-key image/text motion calls the existing generic layer renderer. Video in reusable media actions follows source time by seeking, which also supports reversal; browser decoding responsiveness remains a practical limit.

## Human and AI documentation

`docs/ANIMATION-REFERENCE.md` is the standalone complete reference. The index and individual effect Markdown files are generated from the same machine registry used by the editor. The registry includes 86 classified modules, 42 extracted source/default scopes, exact parameter values, source hashes, function locations and native fallback evidence. Some settings are repeated across related scenes/stages; the reported parameter count counts those definitions rather than unique control names.

`docs/ANIMATION-ARCHITECTURE.md` and `AGENTS.md` require future animations to add stable IDs, descriptions, source slots, units/types, exact defaults and reusable controls. The generator rejects unclassified new modules, uncovered animation modules and stale generated output (`--check`). `animation-instance.schema.json` defines the instance envelope and shared playback types.

## Limits and review

Native units that have not been normalized remain explicitly labelled native. Named scene slots accept images as required by their native renderers; compatible main media layers accept image/video. Images on 3D planes do not reconstruct unseen solid geometry. Artwork-specific gesture rigs require native calibration. No AI media generation service is connected. These limits are documented rather than presented as universal automatic retargeting.

All 36 check scripts pass. Added tests cover catalog/hash/default parity, deep-copy isolation, exact 1.5× speed, pause/delay spans, monotonic slow/fast time, continuous cloud velocity, opaque four-direction passage coverage, actual catalog search/add/preset UI in a DOM harness and the actual composition painter's handling of a future action and scoped source bindings. The existing scene checks and asset provenance checks pass. Generated documentation freshness is checked separately.

A native-browser visual review is pending; the available headless browser package has no installed browser executable. No deployment or publication is claimed. Automated checks do not establish perceptual equivalence to the reference footage.
