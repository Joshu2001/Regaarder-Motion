# Editable 3D primitive

Stable ID: `primitive-object`

Box, sphere, torus or cone with independent rotation and color.

## Implementation

- [primitive-engine.js](../primitive-engine.js) — SHA-256 `49f35b3ef0fe7da82d22613232479474a534f68a639208da20281663dc6b0b52`; functions: `createPrimitiveEngine` (line 3).

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
| `primitive` | `"box"` | string | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#primitive-object` |
| `objectColor` | `"#b9a5eb"` | string | Renderer color value | `scripts/animation-catalog-spec.json#primitive-object` |
| `spinX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#primitive-object` |
| `spinY` | `0.35` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#primitive-object` |
| `spinZ` | `0` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#primitive-object` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "primitive-object",
  "parameters": {
    "primitive": "box",
    "objectColor": "#b9a5eb",
    "spinX": 0,
    "spinY": 0.35,
    "spinZ": 0
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
