# Electric cables · anchored sag and wind

Stable ID: `anchored-electric-cables`

Electric cables · anchored sag and wind. Reusable independent media and granular controls, with exact defaults documented.

## Implementation

- [living-cables.js](../../dist/living-cables.js) — SHA-256 `2111f25b6eae29225fc82e9f2459aa6e6bb762a3899f3779d35258737988fd1a`; functions: `cablePoint` (line 3), `blend` (line 4), `livingCableNodes` (line 5).
- [model-recipes.js](../../dist/model-recipes.js) — SHA-256 `17ef47a356fedb4aef3c652b519ad00a48a7a1292f25d251c73568551bd2c294`; functions: `modelPart` (line 1), `modelBeam` (line 2), `helmetModel` (line 3), `bicycleModel` (line 4), `bipedModel` (line 5), `ruinModel` (line 6), `createModelRecipe` (line 7), `createRuinedStreet` (line 8).

## Controls and compatibility

```json
{
  "adapter": "living-cables",
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
| `cableSag` | `0.3` | number | scene units | `living-cables.js#cableDefaults` |
| `cableSway` | `0.035` | number | scene units | `living-cables.js#cableDefaults` |
| `cableWind` | `0.4` | number | radians per second | `living-cables.js#cableDefaults` |
| `cableThickness` | `0.018` | number | scene-unit radius | `living-cables.js#cableDefaults` |
| `cableSegments` | `24` | number | integer8–64 | `living-cables.js#cableDefaults` |
| `cableSpacing` | `0.13` | number | scene units | `living-cables.js#cableDefaults` |
| `cableAnchorAX` | `2.5` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableAnchorAY` | `5.2` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableAnchorAZ` | `-5.9` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableAnchorBX` | `6` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableAnchorBY` | `5.9` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableAnchorBZ` | `-5.9` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableColor` | `"#a3a29b"` | string | hex color | `living-cables.js#cableDefaults` |
| `cableHighlight` | `"#e0dc60"` | string | hex color | `living-cables.js#cableDefaults` |
| `cableHighlightStrength` | `0.7` | number | normalized intensity | `living-cables.js#cableDefaults` |

## Limitations

- Analytic sag and subtle wind, not a full dynamic tension solver.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "anchored-electric-cables",
  "parameters": {
    "cableSag": 0.3,
    "cableSway": 0.035,
    "cableWind": 0.4,
    "cableThickness": 0.018,
    "cableSegments": 24,
    "cableSpacing": 0.13,
    "cableAnchorAX": 2.5,
    "cableAnchorAY": 5.2,
    "cableAnchorAZ": -5.9,
    "cableAnchorBX": 6,
    "cableAnchorBY": 5.9,
    "cableAnchorBZ": -5.9,
    "cableColor": "#a3a29b",
    "cableHighlight": "#e0dc60",
    "cableHighlightStrength": 0.7
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
