# Editable written title

Stable ID: `brush-writing`

Text strokes reveal over time using the selected brush style.

## Implementation

- [brush-writing.js](../brush-writing.js) — SHA-256 `3057f0cef2b187e05df5c577482f5b60512a70ee4d7722937a8620cd90302090`; functions: `pathsFor` (line 3), `inkPaths` (line 4), `drawBrushText` (line 5), `whiteGlyphRange` (line 7).

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
| `text` | `"Your words"` | string | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#brush-writing` |
| `size` | `80` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#brush-writing` |
| `color` | `"#ffffff"` | string | Renderer color value | `scripts/animation-catalog-spec.json#brush-writing` |
| `style` | `"brush"` | string | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#brush-writing` |
| `writeDuration` | `4` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#brush-writing` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "brush-writing",
  "parameters": {
    "text": "Your words",
    "size": 80,
    "color": "#ffffff",
    "style": "brush",
    "writeDuration": 4
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
