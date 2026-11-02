# Living clouds · wind and evolving shape

Stable ID: `living-cloud-sky`

Living clouds · wind and evolving shape. Reusable independent media and granular controls, with exact defaults documented.

## Implementation

- [living-sky.js](../../dist/living-sky.js) — SHA-256 `7cd8e4c5b43d34c0e8b5996305a52c072db5c3a795c7cd99644890892de61695`; functions: `hash` (line 4), `skyNoise` (line 5), `fbm` (line 6), `cloudField` (line 7), `fieldFrame` (line 8), `paintCloudAtmosphere` (line 9), `paintLivingSky` (line 10).

## Controls and compatibility

```json
{
  "adapter": "living-sky",
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
    "salvageSky"
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
| `skyWind` | `24` | number | pixels per second before layer multiplier | `living-sky.js#livingSkyDefaults` |
| `skyEvolution` | `0.16` | number | noise-time units per second | `living-sky.js#livingSkyDefaults` |
| `skyDensity` | `0.68` | number | normalized amount | `living-sky.js#livingSkyDefaults` |
| `skyOpacity` | `1` | number | opacity | `living-sky.js#livingSkyDefaults` |
| `skyScale` | `1` | number | multiplier | `living-sky.js#livingSkyDefaults` |
| `skyLayers` | `3` | number | integer1–4 | `living-sky.js#livingSkyDefaults` |
| `skySeed` | `37` | number | integer noise seed | `living-sky.js#livingSkyDefaults` |
| `skyColor` | `"#c60c24"` | string | hex color | `living-sky.js#livingSkyDefaults` |
| `skyCloudColor` | `"#140b16"` | string | hex color | `living-sky.js#livingSkyDefaults` |
| `skyLight` | `0.45` | number | normalized intensity | `living-sky.js#livingSkyDefaults` |
| `skyDirection` | `1` | number | direction1/-1 | `living-sky.js#livingSkyDefaults` |
| `skyShadowStrength` | `0.16` | number | normalized intensity | `living-sky.js#livingSkyDefaults` |

## Limitations

- Procedural evolving2D cloud fields with parallax, not a physical3D fluid simulation.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "living-cloud-sky",
  "parameters": {
    "skyWind": 24,
    "skyEvolution": 0.16,
    "skyDensity": 0.68,
    "skyOpacity": 1,
    "skyScale": 1,
    "skyLayers": 3,
    "skySeed": 37,
    "skyColor": "#c60c24",
    "skyCloudColor": "#140b16",
    "skyLight": 0.45,
    "skyDirection": 1,
    "skyShadowStrength": 0.16
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
