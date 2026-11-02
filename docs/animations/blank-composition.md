# Independent composition layers

Stable ID: `blank-composition`

Layer timing, transforms, content bindings and reusable action registration.

## Implementation

- [composition-core.js](../../dist/composition-core.js) — SHA-256 `38a6a99ae9a02c91f24d7de4843b0587a3789d4df9eb2cf4b58fd1258ed94597`; functions: `registerCapability` (line 6), `discoverTemplateCapabilities` (line 9), `layerSpan` (line 17), `saveBlank` (line 18), `refreshCapabilityMenu` (line 19), `openBlank` (line 20), `addBlankLayer` (line 22), `renderBlankLayers` (line 24), `blankField` (line 25), `renderBlankInspector` (line 26), `renderBlankContext` (line 36), `drawBlankMedia` (line 38), `paintTemplateAction` (line 39), `paintBlank` (line 40), `blankLoop` (line 42), `openLayerTools` (line 52), `archiveBlank` (line 55), `refreshBlankSnapshots` (line 56).
- [animation-instance.js](../../dist/animation-instance.js) — SHA-256 `9d0eae741d87b67ae711a1e73341dfbe50b280ec5aad0f9fc926c11d06dce53c`; functions: `animationClock` (line 4), `createAnimationInstance` (line 5), `resolveAnimationParameters` (line 6).
- [animation-library-director.js](../../dist/animation-library-director.js) — SHA-256 `0090bedadc2fb6ee347c920c1181b29f98fb26c6bd8dce11f3dad76c05559b86`; functions: `editParameters` (line 17), `renderer` (line 18), `renderList` (line 43).

## Controls and compatibility

```json
{
  "adapter": "native tools only",
  "preview": {
    "availability": "Native editor tools only"
  },
  "capabilities": {
    "playback": "Shared blank-layer clock: speed, reverse, delay, pause, easing, slow/fast",
    "parameters": "Independent per-instance copies; nested JSON editable",
    "media": "Main source asset where applicable",
    "direction": "Timing reversal; geometric axes only where implemented",
    "geometry": "Images remain planes; full unseen object reconstruction is not implemented."
  },
  "slots": [],
  "commonPlayback": {
    "speed": 1,
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
  }
}
```

## Exact factory values

| Parameter | Exact default | Type | Unit / meaning | Source |
|---|---|---|---|---|
| `speed` | `1` | number | Native renderer rate; do not assume multiplier | `animation-instance.js#playbackDefaults` |
| `reverse` | `false` | boolean | Native renderer units; inspect linked implementation before conversion | `animation-instance.js#playbackDefaults` |
| `delay` | `0` | number | Native renderer units; inspect linked implementation before conversion | `animation-instance.js#playbackDefaults` |
| `pauseAt` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `animation-instance.js#playbackDefaults` |
| `pauseFor` | `0` | number | Native renderer units; inspect linked implementation before conversion | `animation-instance.js#playbackDefaults` |
| `ease` | `"linear"` | string | Native renderer units; inspect linked implementation before conversion | `animation-instance.js#playbackDefaults` |
| `slowFast` | `false` | boolean | Native renderer units; inspect linked implementation before conversion | `animation-instance.js#playbackDefaults` |
| `slowStart` | `0.3` | number | Native renderer units; inspect linked implementation before conversion | `animation-instance.js#playbackDefaults` |
| `slowEnd` | `0.65` | number | Native renderer units; inspect linked implementation before conversion | `animation-instance.js#playbackDefaults` |
| `slowSpeed` | `0.35` | number | Native renderer rate; do not assume multiplier | `animation-instance.js#playbackDefaults` |
| `fastSpeed` | `2` | number | Native renderer rate; do not assume multiplier | `animation-instance.js#playbackDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "blank-composition",
  "parameters": {
    "speed": 1,
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
  "playback": {
    "speed": 1,
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
  "bindings": {}
}
```
