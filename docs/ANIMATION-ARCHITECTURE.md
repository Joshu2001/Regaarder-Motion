# Editable animation contract for humans and AI

## Use an existing animation

Open **Animation library**, search everyday words such as “cloud”, “eye”, “wall”, “fire”, “shoe” or “3D”, then choose **Add & preview**. The editor inserts an independent layer in the blank composition. Choose a source asset, replace named source slots, and scrub the preview. Native-only entries open the existing editor tools instead.

Every composition layer has start time, duration, opacity, start/end position, scale, rotation, tilt, blur and blending. **Playback** exposes speed, reversal, delay, one pause, easing and optional slow/fast timing. **Independent source bindings** replace content for one layer. **Effect parameters** exposes exact native scalar values; advanced JSON edits nested masks, routes, object lists and keyframes. The generic cloud pass and wall passage support `up`, `down`, `left`, `right` without rotating or mirroring artwork. Timing reversal is available for other rendered layers; arbitrary geometric direction changes depend on the renderer.

**Save animation preset** saves movement, native parameters, duration and transforms. Loading a preset for the same effect preserves selected sources. **Export composition JSON** captures actual current layers, content bindings and creative context. Uploaded media must travel separately; JSON does not embed its bytes. Existing template scenes keep their original native editor controls; use the library to create independently timed reusable instances.

## Authoritative files

| File | Meaning | Audience |
|---|---|---|
| `scripts/animation-catalog-spec.json` | Stable IDs, descriptions, aliases, adapters, source slots and limitations | Maintainers and generator |
| `scripts/animation-source-map.json` | Explicit role of each top-level implementation module | Coverage check |
| `dist/animation-registry.json` | Generated exact factory defaults, type/unit evidence, source hashes, functions and fallback expressions | Editor and future AI |
| `dist/animation-instance.schema.json` | Machine-readable instance envelope and shared playback types | Future AI and validators |
| `docs/ANIMATION-CATALOG.md` | Generated index | Humans and AI |
| `docs/animations/*.md` | Per-effect implementation descriptions, values and JSON recipes | Humans and AI |
| Composition JSON | Actual instance settings, timing, sources, transforms and context | Renderer and future AI |

Factory defaults are not the current browser-local settings. Renderer fallback expressions appear under `sourceInventory[].nativeFallbacks`; they are evidence, not necessarily active defaults. Values with unresolved units are explicitly labelled native and link to their implementation. Preserve exact numbers: `1.5` remains `1.5`. Do not round `1.6849999999999996` without a deliberate migration. Shared playback `speed` is a multiplier; a native speed field may mean pixels per second, radians per second or another rate.

## Instance example

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "spatial-occlusion-pass",
  "parameters": {
    "historyPassageDirection": "left",
    "historyPassageStart": 0,
    "historyPassageEnd": 4
  },
  "playback": {
    "speed": 1.5,
    "reverse": false,
    "delay": 0,
    "pauseAt": 0.5,
    "pauseFor": 0,
    "ease": "linear",
    "slowFast": false,
    "slowStart": 0.3,
    "slowEnd": 0.65,
    "slowSpeed": 0.35,
    "fastSpeed": 2
  },
  "bindings": {
    "historyShoulder": "source-asset-id",
    "historyPortrait": "destination-asset-id"
  }
}
```

Resolve sparse parameters over the definition defaults. A blank layer stores resolved parameters and additionally has `start`, `duration`, `assetId` and transform endpoints. Presets omit content bindings. `createAnimationInstance` deep-copies definitions; never mutate registry objects when editing a layer.

The shared source clock maps `(elapsed − delay) × speed`, freezes at `pauseAt` for `pauseFor` real seconds, then continues. Easing and a positive continuous slow/fast warp remap normalized progress. Reversal runs the result backward. The visible layer span is `duration / speed + delay + pauseFor`; composition duration extends to contain it. Slow/fast reshapes time inside this span. Native scene curves still apply; linear shared time does not erase intrinsic renderer easing.

The generic focus action takes replaceable starting/destination pictures and normalizes its camera to the chosen duration. Edit focus coordinates and mask to use an eye, body part or object. The historical scene retains the original layered character camera. The generic cloud action uses one continuous travel distance. The wall action moves opaque planes behind a textured foreground wall without a crossfade.

## Registration contract

`MotionCore.registerCapability(id, definition)` is the live insertion point. All blank layers, including future registered actions, receive shared timing and transforms. A capability may declare serializable `defaults`, `slots`, `render(ctx, sourceSeconds, layer)` and `edit(host, layer, save)`. Catalog adapters call existing renderers. Slot replacements are scoped to the layer's render and restored afterward. Duplicates deep-copy their settings.

Images on the 3D image action remain planes. Primitive geometry supports its listed shapes. One image does not reconstruct unseen solid geometry. Original artwork-specific gesture rigs require native calibration; arbitrary automatic retargeting and AI-generated movement are not implemented. Named scene slots currently accept images, as required by the native scene renderers; the main media layer supports image/video. Not every legacy action has a universal insertion adapter. These entries are labelled **native tools**. No AI service is connected by this release.

## Mandatory rules for future animations

1. Assign a stable descriptive effect ID. Reuse an existing renderer for another instance rather than copying its code.
2. Describe visible behavior and implementation; add everyday search aliases, replaceable slots, supported media and limitations.
3. Declare exact defaults, type, unit and meaningful range/step when known. Keep uncertain units explicitly native. Nested data must remain serializable and editable.
4. Register independent instances through `MotionCore`, preserving shared timing. Expose simple controls, advanced controls, replacement and motion-only presets. Label native-only historical records honestly.
5. Classify every new module in the source map; link effects to implementation modules and default scopes. Document migrations separately from defaults.
6. Run `node scripts/build-animation-registry.mjs`. Never edit generated Markdown/JSON manually. Run the same command with `--check` to reject stale output. Unknown new top-level modules and uncovered animation modules fail the build.
7. Add meaningful tests for timing, replacement isolation and special geometry, with runtime preview access. Follow the existing visual-fidelity approval policy for substantial visual work.
8. Update asset provenance for changed procedural renderers/distributed assets. Keep all prior asset candidates and run relevant regression checks.

## Validation limits

Automated checks cover registry/default/hash parity, timing spans, positive continuous time warp, four-direction opaque wall coverage and catalog UI search/insertion/preset behavior in a DOM harness. Existing scene tests remain. Native-browser appearance, interaction ergonomics and video/3D behavior still require visual review. Automated checks do not prove exact perceptual equivalence to the reference footage.


## V65 layer-first policy
When reference depth is uncertain, use independently replaceable image layers by default. Keep source identity separate from motion. Do not claim recovered 3D. New chapter controls expose replacement, position, size and visibility first, with advanced depth/rotation/material/timing collapsed. All actions use the shared MotionCore playback wrapper for speed, reversal and slow/fast clocks. Preserve prior artwork and generated candidates.
