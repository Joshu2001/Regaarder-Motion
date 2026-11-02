# Travel along a route

Stable ID: `shared-route-travel`

Move replaceable media along editable route points.

## Implementation

- [effect-library.js](../../dist/effect-library.js) — SHA-256 `86d4fed9933175671d86221b0fa4d69ffc8b72968277bd126d9221709d40a55d`; functions: `compatibleEffects` (line 17), `instantiateEffect` (line 18), `effectStack` (line 19), `paintEffects` (line 20), `drawAssetMedia` (line 21), `buildAnimationPrompt` (line 22).
- [texture-fill.js](../../dist/texture-fill.js) — SHA-256 `4072e20c40f1afe56bb0b41828cfa3f4b23aa2b887e2ecc39f4eeafbd3da8459`; functions: `paintTextureFill` (line 4).
- [route-motion.js](../../dist/route-motion.js) — SHA-256 `13c37abb7799d1a8090a31b1192739cbf9d370c573998391a7ac8d30e04ab5e9`; functions: `routeSamples` (line 9), `routePoint` (line 10), `routeState` (line 11), `paintRouteLine` (line 12).
- [reveal-fx.js](../../dist/reveal-fx.js) — SHA-256 `3d5419c786b54e3abf881c39a8ed095394ccd53eb4050e9364b38f44e688e323`; functions: `setEffectMedia` (line 4), `effectMedia` (line 5), `fireRects` (line 6), `paintFire` (line 7), `wave` (line 14), `cloudTravelProgress` (line 15), `cloudBankY` (line 16), `paintCloudVeil` (line 17), `revealProgress` (line 23).

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
| `duration` | `4` | number | Native renderer units; inspect linked implementation before conversion | `effect-library.js#effectDefinitions` |
| `endScale` | `0.2` | number | Native renderer units; inspect linked implementation before conversion | `effect-library.js#effectDefinitions` |
| `points` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `effect-library.js#effectDefinitions` |
| `lineStyle` | `"dashed"` | string | Native renderer units; inspect linked implementation before conversion | `effect-library.js#effectDefinitions` |
| `color` | `"#75c6e5"` | string | Renderer color value | `effect-library.js#effectDefinitions` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "shared-route-travel",
  "parameters": {
    "duration": 4,
    "endScale": 0.2,
    "points": [
      [
        0.25,
        0.7
      ],
      [
        0.5,
        0.4
      ],
      [
        0.75,
        0.2
      ]
    ],
    "lineStyle": "dashed",
    "color": "#75c6e5"
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
