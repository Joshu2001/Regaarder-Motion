# Editable shape and region

Stable ID: `region-overlay`

A colored rectangle, ellipse or polygon with independent layer motion.

## Implementation

- [region-tools.js](../../dist/region-tools.js) — SHA-256 `f68d50f57cbd53d18df9386346ca40eec897d7dbe02130a69bdd36b9566aced6`; functions: `regionPoints` (line 1).
- [vector-trace.js](../../dist/vector-trace.js) — SHA-256 `447613bc7281333da666cbe0dc94ae87aa33625d43a6f701d3012b1d1e387b21`; functions: `tracePalette` (line 2).

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
| `color` | `"#7551c7"` | string | Renderer color value | `scripts/animation-catalog-spec.json#region-overlay` |
| `shape` | `"rectangle"` | string | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#region-overlay` |
| `points` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#region-overlay` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "region-overlay",
  "parameters": {
    "color": "#7551c7",
    "shape": "rectangle",
    "points": [
      [
        0.1,
        0.1
      ],
      [
        0.8,
        0.2
      ],
      [
        0.7,
        0.8
      ],
      [
        0.2,
        0.7
      ]
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
