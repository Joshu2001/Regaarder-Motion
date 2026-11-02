# Cloud bank passage

Stable ID: `cloud-passage`

One continuous textured cloud movement with up, down, left or right travel.

## Implementation

- [reveal-fx.js](../../dist/reveal-fx.js) — SHA-256 `3d5419c786b54e3abf881c39a8ed095394ccd53eb4050e9364b38f44e688e323`; functions: `setEffectMedia` (line 4), `effectMedia` (line 5), `fireRects` (line 6), `paintFire` (line 7), `wave` (line 14), `cloudTravelProgress` (line 15), `cloudBankY` (line 16), `paintCloudVeil` (line 17), `revealProgress` (line 23).

## Controls and compatibility

```json
{
  "adapter": "cloud",
  "preview": {
    "availability": "Add & preview in the composition editor"
  },
  "capabilities": {
    "playback": "Shared blank-layer clock: speed, reverse, delay, pause, easing, slow/fast",
    "parameters": "Independent per-instance copies; nested JSON editable",
    "media": "Independent named source-slot bindings",
    "direction": "Four geometric travel directions",
    "geometry": "Images remain planes; full unseen object reconstruction is not implemented."
  },
  "slots": [
    "transitionClouds"
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
| `direction` | `"up"` | string | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#cloud-passage` |
| `opacity` | `1` | number | Native scalar; legacy ranges vary | `scripts/animation-catalog-spec.json#cloud-passage` |
| `brightness` | `1` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#cloud-passage` |
| `drift` | `12` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#cloud-passage` |
| `scale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#cloud-passage` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "cloud-passage",
  "parameters": {
    "direction": "up",
    "opacity": 1,
    "brightness": 1,
    "drift": 12,
    "scale": 1
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
