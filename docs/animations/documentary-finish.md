# Documentary finish · edge shading

Stable ID: `documentary-finish`

Subtle radial edge shading on an independent layer. Other refinement features are native template tools.

## Implementation

- [refinement-visual.js](../../dist/refinement-visual.js) — SHA-256 `4a7f4a609894749dbce81cbfac3e83c610cfd7b56a8ee0133ba3fd214a3c2e4c`; functions: `paintTownFocus` (line 4), `paintRefinementFinish` (line 5), `paintRefinementRubble` (line 6), `paintCableEmphasis` (line 7), `paintSoftEyeFire` (line 10).

## Controls and compatibility

```json
{
  "adapter": "refinement-finish",
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
| `refineEnabled` | `true` | boolean | Boolean; enable this layer | `refinement-motion.js#refinementDefaults` |
| `refineVignette` | `0.08` | number | Opacity scalar; 0–0.3 visible clamp | `refinement-motion.js#refinementDefaults` |

## Limitations

- Uses a 960 × 540 stage. Does not retime another layer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "documentary-finish",
  "parameters": {
    "refineEnabled": true,
    "refineVignette": 0.08
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
