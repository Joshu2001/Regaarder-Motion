# Lies secrets and soldiers

Stable ID: `noir-sequence`

Layered dark collage with independent text, cutouts and camera.

## Implementation

- [noir.js](../../dist/noir.js) — SHA-256 `e81734122f21b735f51124e76dce3deaa049a43f82f68244f9e55e8f50dd3a61`; functions: `seekNoir` (line 6), `renderNoirTextEditor` (line 7).
- [noir-scene.js](../../dist/noir-scene.js) — SHA-256 `fd7e03550862a28f480102f6c5f2ae9d18297f64eb2fde75d0cfc5efa96c5e7c`; functions: `noirState` (line 5), `noirTextPose` (line 7), `createNoirScene` (line 8), `cover` (line 8), `render` (line 9), `textLayer` (line 11).

## Controls and compatibility

```json
{
  "adapter": "capability",
  "preview": {
    "availability": "Add & preview in the composition editor"
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
| `noirTextSync` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirDuration` | `25` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirFadeStart` | `3` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirFadeDuration` | `4` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirBlackHold` | `1` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirReveal` | `10` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirStartScale` | `1.5` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirEndScale` | `0.82` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirBackDepth` | `0.18` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirCloudSpeed` | `8` | number | Native renderer rate; do not assume multiplier | `continuation.js#continuationDefaults` |
| `noirShiftStart` | `9` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirShiftTime` | `4` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirShift` | `110` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirExposure` | `100` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `noirTexts` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "noir-sequence",
  "parameters": {
    "noirTextSync": true,
    "noirDuration": 25,
    "noirFadeStart": 3,
    "noirFadeDuration": 4,
    "noirBlackHold": 1,
    "noirReveal": 10,
    "noirStartScale": 1.5,
    "noirEndScale": 0.82,
    "noirBackDepth": 0.18,
    "noirCloudSpeed": 8,
    "noirShiftStart": 9,
    "noirShiftTime": 4,
    "noirShift": 110,
    "noirExposure": 100,
    "noirTexts": [
      {
        "id": "lies",
        "text": "Lies",
        "x": 110,
        "y": 110,
        "size": 55,
        "start": 1,
        "duration": 2.5,
        "color": "#60555f",
        "style": "ink",
        "depth": 0.25,
        "rotation": -4,
        "blur": 0.3
      },
      {
        "id": "secrets",
        "text": "Secrets",
        "x": 540,
        "y": 150,
        "order": "under-head",
        "anchor": "people",
        "size": 62,
        "start": 3,
        "duration": 3,
        "color": "#876878",
        "style": "brush",
        "depth": 0.45,
        "rotation": -3,
        "blur": 0.6
      },
      {
        "id": "corruption",
        "text": "Corruption",
        "x": 90,
        "y": 365,
        "size": 90,
        "start": 5.5,
        "duration": 3.5,
        "color": "#92768b",
        "style": "brush",
        "depth": 0.75,
        "rotation": -3,
        "blur": 0,
        "whiteStart": 6.8,
        "whiteDuration": 3,
        "whiteColor": "#ffffff",
        "whiteMode": "glyph-spread",
        "whiteGlyphStart": 3,
        "whiteGlyphEnd": 6
      }
    ]
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
