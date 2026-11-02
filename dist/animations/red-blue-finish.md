# Red and blue ending

Stable ID: `red-blue-finish`

Graded outdoor ending with movement and exposure.

## Implementation

- [epilogue.js](../epilogue.js) — SHA-256 `3f5f50127ff512eb2407d7f6c6c263b7382165a44f243ea4b3207e1479b48273`; functions: `peopleCameraRig` (line 1), `formatClipTime` (line 3), `saveEffects` (line 6), `cloudBand` (line 7), `heritageLogo` (line 8), `movingSky` (line 9), `renderEpilogue` (line 10), `cameraTransform` (line 20), `localToPreview` (line 21), `previewToLocal` (line 22), `updateFireHandles` (line 23), `showFireSelection` (line 24).

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
    "media": "Independent named source-slot bindings",
    "direction": "Timing reversal; geometric axes only where implemented",
    "geometry": "Images remain planes; full unseen object reconstruction is not implemented."
  },
  "slots": [
    "outdoor",
    "standing",
    "youngMan",
    "mysteryMen",
    "mysterySky",
    "clouds",
    "backPair"
  ],
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
| `redSpeed` | `4` | number | Native renderer rate; do not assume multiplier | `continuation.js#continuationDefaults` |
| `redColor` | `"#d84e61"` | string | Renderer color value | `continuation.js#continuationDefaults` |
| `redDelay` | `7.8` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `blueHold` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "red-blue-finish",
  "parameters": {
    "redSpeed": 4,
    "redColor": "#d84e61",
    "redDelay": 7.8,
    "blueHold": 0.5
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
