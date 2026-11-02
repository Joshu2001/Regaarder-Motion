# Photographed fire overlay

Stable ID: `photographed-fire`

Screen-blended filmed flame sprites with an independent strength.

## Implementation

- [reveal-fx.js](../reveal-fx.js) — SHA-256 `3d5419c786b54e3abf881c39a8ed095394ccd53eb4050e9364b38f44e688e323`; functions: `setEffectMedia` (line 4), `effectMedia` (line 5), `fireRects` (line 6), `paintFire` (line 7), `wave` (line 14), `cloudTravelProgress` (line 15), `cloudBankY` (line 16), `paintCloudVeil` (line 17), `revealProgress` (line 23).

## Controls and compatibility

```json
{
  "adapter": "shared",
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
    "warFire"
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
| `strength` | `0.5` | number | Native scalar; legacy ranges vary | `effect-library.js#effectDefinitions` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "photographed-fire",
  "parameters": {
    "strength": 0.5
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
