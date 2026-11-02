# Aerial map camera

Stable ID: `aerial-camera`

Fly across an image mapped onto a 3D plane.

## Implementation

- [city.js](../../dist/city.js) — SHA-256 `956e747231633cc4ed8ec9ab6a09445f453425e6ecf957278518ca03a9a457ef`; functions: `cityReady` (line 6), `cityEase` (line 7), `terrainY` (line 8), `dirtEdge` (line 9), `terrainCurtain` (line 10), `cityAtmosphere` (line 11), `renderCity` (line 13), `startCityPick` (line 20), `seekCity` (line 21), `renderCityControls` (line 23), `renderRegionRows` (line 24), `chooseCityMedia` (line 25), `attachCityMedia` (line 25), `restoreCityMedia` (line 25), `chooseCityMark` (line 33), `attachCityMark` (line 33), `restoreCityMarks` (line 33).
- [city-engine.js](../../dist/city-engine.js) — SHA-256 `ac012f267bf8468abbbf7bce0ff5af8432382ab41da150ea86183b0265988229`; functions: `createCityEngine` (line 6), `paint` (line 7), `pick` (line 8).
- [city-motion.js](../../dist/city-motion.js) — SHA-256 `dffb33982d51a2c481f15e59fc54c3393ab892e9864bebac8ebc470d6858458b`; functions: `cityCamera` (line 3), `earthEdge` (line 4).

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
| `cityDuration` | `38` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityCredit` | `"Illustrative aerial"` | string | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityDescent` | `6` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityFlyTime` | `20` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityStartU` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityStartV` | `0.55` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityEndU` | `0.76` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityEndV` | `0.63` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityStartElevation` | `45` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityEndElevation` | `82` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityStartDistance` | `26` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityEndDistance` | `10` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityHeading` | `0` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityRoll` | `-8` | number | Native angle; source specifies degrees or radians | `continuation.js#continuationDefaults` |
| `cityEndRoll` | `3` | number | Native angle; source specifies degrees or radians | `continuation.js#continuationDefaults` |
| `citySpinStart` | `20` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `citySpinTime` | `12` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityTurns` | `0.45` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityEdgeBlur` | `7` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityGlobalBlur` | `0` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `citySeamColor` | `"#ef8539"` | string | Renderer color value | `continuation.js#continuationDefaults` |
| `citySeamGlow` | `65` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityDust` | `55` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityWind` | `-25` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityLogoStart` | `21` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityLogoFade` | `4` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityLogoU` | `0.76` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityLogoV` | `0.63` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityLogoSize` | `1` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityLogoTurns` | `0.7` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityLogoColor` | `"#ffffff"` | string | Renderer color value | `continuation.js#continuationDefaults` |
| `cityCatStart` | `29` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityCatTime` | `5` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityCatReveal` | `26` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cityCatColor` | `"#ffffff"` | string | Renderer color value | `continuation.js#continuationDefaults` |
| `cityRegions` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "aerial-camera",
  "parameters": {
    "cityDuration": 38,
    "cityCredit": "Illustrative aerial",
    "cityDescent": 6,
    "cityFlyTime": 20,
    "cityStartU": 0.5,
    "cityStartV": 0.55,
    "cityEndU": 0.76,
    "cityEndV": 0.63,
    "cityStartElevation": 45,
    "cityEndElevation": 82,
    "cityStartDistance": 26,
    "cityEndDistance": 10,
    "cityHeading": 0,
    "cityRoll": -8,
    "cityEndRoll": 3,
    "citySpinStart": 20,
    "citySpinTime": 12,
    "cityTurns": 0.45,
    "cityEdgeBlur": 7,
    "cityGlobalBlur": 0,
    "citySeamColor": "#ef8539",
    "citySeamGlow": 65,
    "cityDust": 55,
    "cityWind": -25,
    "cityLogoStart": 21,
    "cityLogoFade": 4,
    "cityLogoU": 0.76,
    "cityLogoV": 0.63,
    "cityLogoSize": 1,
    "cityLogoTurns": 0.7,
    "cityLogoColor": "#ffffff",
    "cityCatStart": 29,
    "cityCatTime": 5,
    "cityCatReveal": 26,
    "cityCatColor": "#ffffff",
    "cityRegions": [
      {
        "color": "#287bad",
        "opacity": 0.3,
        "blend": "color",
        "points": [
          [
            0,
            0
          ],
          [
            0.65,
            0
          ],
          [
            0.85,
            1
          ],
          [
            0,
            1
          ]
        ]
      },
      {
        "color": "#c94a45",
        "opacity": 0.3,
        "blend": "color",
        "points": [
          [
            0.65,
            0
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            0.85,
            1
          ]
        ]
      }
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
