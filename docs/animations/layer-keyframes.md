# Layer keyframes and transforms

Stable ID: `layer-keyframes`

Content-independent interpolated position, scale, opacity and rotation. Native multi-key tools remain available.

## Implementation

- [layer-motion.js](../../dist/layer-motion.js) — SHA-256 `4f3e319a0fd6e375c7b59e29bb9abe6461e9545d55caf4b5100b1d05e7752ad9`; functions: `sampleLayer` (line 6), `applyObjectMotion` (line 7), `maskedSource` (line 9), `paintLayer` (line 10).
- [layer-director.js](../../dist/layer-director.js) — SHA-256 `a523197242792f02947f2777acd1c5904bfd24f06a7c289ad9f0abcb55d85b8c`; functions: `ensureLayerSources` (line 3), `show` (line 8).

## Controls and compatibility

```json
{
  "adapter": "layer",
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
| `type` | `"image"` | string | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#layer-keyframes` |
| `keys` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#layer-keyframes` |
| `x` | `0` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#layer-keyframes` |
| `y` | `0` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#layer-keyframes` |
| `scale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#layer-keyframes` |
| `rotation` | `0` | number | Native angle; source specifies degrees or radians | `scripts/animation-catalog-spec.json#layer-keyframes` |
| `opacity` | `1` | number | Native scalar; legacy ranges vary | `scripts/animation-catalog-spec.json#layer-keyframes` |
| `mask` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#layer-keyframes` |
| `enabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#layer-keyframes` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "layer-keyframes",
  "parameters": {
    "type": "image",
    "keys": [],
    "x": 0,
    "y": 0,
    "scale": 1,
    "rotation": 0,
    "opacity": 1,
    "mask": [],
    "enabled": true
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
