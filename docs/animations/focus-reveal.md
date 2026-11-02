# Focus zoom and picture reveal

Stable ID: `focus-reveal`

Zoom into a chosen eye, body part or object as a replacement picture grows inside the editable mask.

## Implementation

- [eye-journey.js](../../dist/eye-journey.js) — SHA-256 `574c314144a53873aab1149fddc682c46eae138f823ec34e819b67405f129fd2`; functions: `revealTime` (line 6), `integrate` (line 6), `revealSettings` (line 7), `projectDepthRect` (line 8), `eyeJourneyState` (line 9), `canvas` (line 12), `paintEyeJourney` (line 13), `focusRevealState` (line 21), `paintFocusReveal` (line 22).
- [eye-director.js](../../dist/eye-director.js) — SHA-256 `877ccf7b183a835ea3d4e74760c68d7c95d3470290cdc6e3f0a2c26b47250cc6`; functions: `number` (line 3).

## Controls and compatibility

```json
{
  "adapter": "focus",
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
    "focusRevealSource",
    "historyWorkshop"
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
| `historyIrisEndZoom` | `105` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyIrisRadius` | `6.4` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyIrisAspect` | `1` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyIrisRevealAt` | `2.64` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealStart` | `0.53` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealFinish` | `1` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealShape` | `"ellipse"` | string | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealSourceMode` | `"layers"` | string | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealSlowEnabled` | `false` | boolean | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealSlowStart` | `0.43` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealSlowEnd` | `0.7` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealSlowSpeed` | `0.35` | number | Native renderer rate; do not assume multiplier | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealFastSpeed` | `2` | number | Native renderer rate; do not assume multiplier | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealContentX` | `0.67` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealContentY` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyRevealContentScale` | `1.45` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyIrisBlur` | `4` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyIrisReflection` | `0.85` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyEyeFrontDepth` | `1` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyEyeRearDepth` | `0.68` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyEyeLandDepth` | `0.32` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyEyeSkyDepth` | `0.08` | number | Native renderer units; inspect linked implementation before conversion | `eye-journey.js#eyeJourneyDefaults` |
| `historyEyeX` | `586` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyEyeY` | `312` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyEyeZoom` | `34` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "focus-reveal",
  "parameters": {
    "historyIrisEndZoom": 105,
    "historyIrisRadius": 6.4,
    "historyIrisAspect": 1,
    "historyIrisRevealAt": 2.64,
    "historyRevealStart": 0.53,
    "historyRevealFinish": 1,
    "historyRevealShape": "ellipse",
    "historyRevealSourceMode": "layers",
    "historyRevealSlowEnabled": false,
    "historyRevealSlowStart": 0.43,
    "historyRevealSlowEnd": 0.7,
    "historyRevealSlowSpeed": 0.35,
    "historyRevealFastSpeed": 2,
    "historyRevealContentX": 0.67,
    "historyRevealContentY": 0.5,
    "historyRevealContentScale": 1.45,
    "historyIrisBlur": 4,
    "historyIrisReflection": 0.85,
    "historyEyeFrontDepth": 1,
    "historyEyeRearDepth": 0.68,
    "historyEyeLandDepth": 0.32,
    "historyEyeSkyDepth": 0.08,
    "historyEyeX": 586,
    "historyEyeY": 312,
    "historyEyeZoom": 34
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
