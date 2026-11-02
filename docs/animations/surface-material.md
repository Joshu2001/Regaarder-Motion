# Soil snow and cloud reveal

Stable ID: `surface-material`

Editable surface materials and revealing coverage.

## Implementation

- [surface-reveal.js](../../dist/surface-reveal.js) — SHA-256 `135870436f09f911c942732ae40a397f4817899f924ce80f0d9144ab182ef4cf`; functions: `surfaceSettings` (line 5), `drawSurfaceReveal` (line 6), `surfaceEditor` (line 7), `fields` (line 7).

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
    "soil",
    "snow",
    "clouds"
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
| `soil` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `surface-reveal.js#surfacePresets` |
| `snow` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `surface-reveal.js#surfacePresets` |
| `clouds` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `surface-reveal.js#surfacePresets` |
| `surfaceType` | `"soil"` | string | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#surface-material` |
| `surfaceSettings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#surface-material` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "surface-material",
  "parameters": {
    "soil": {
      "label": "Earth · fine soil",
      "roughness": 9,
      "feather": 9,
      "contrast": 0.8,
      "brightness": 0.85,
      "scale": 1.1,
      "particles": 18,
      "color": "#73553b"
    },
    "snow": {
      "label": "Snow · soft drift",
      "roughness": 5,
      "feather": 16,
      "contrast": 0.8,
      "brightness": 1,
      "scale": 1,
      "particles": 28,
      "color": "#e8f2f6"
    },
    "clouds": {
      "label": "Clouds · mist bank",
      "roughness": 19,
      "feather": 35,
      "contrast": 0.8,
      "brightness": 1.1,
      "scale": 1.2,
      "particles": 0,
      "color": "#dce5ed"
    },
    "surfaceType": "soil",
    "surfaceSettings": {}
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
