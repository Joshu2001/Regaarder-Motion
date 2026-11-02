# Cloud descent and layered boys

Stable ID: `war-sequence`

A continuous cloud pass darkens into a layered landscape with two cutouts and filmed fire.

## Implementation

- [war-motion.js](../../dist/war-motion.js) — SHA-256 `f013a95738ca10890d2811a56d5b4fc8942daa2a1e827fc3f4f452988baf311f`; functions: `warState` (line 4).
- [war-scene.js](../../dist/war-scene.js) — SHA-256 `3501d153f36d9e53aa76b4393a75edeadf61b4faf6c9b8b35332aa137434d906`; functions: `createWarScene` (line 8), `layer` (line 11).
- [easy-director.js](../../dist/easy-director.js) — SHA-256 `65a06405d7725d2d3e8f3644247bdeb524303d9219e6e6e7058b5ad1c37d78fa`; functions: `paint` (line 13), `point` (line 13).
- [reveal-fx.js](../../dist/reveal-fx.js) — SHA-256 `3d5419c786b54e3abf881c39a8ed095394ccd53eb4050e9364b38f44e688e323`; functions: `setEffectMedia` (line 4), `effectMedia` (line 5), `fireRects` (line 6), `paintFire` (line 7), `wave` (line 14), `cloudTravelProgress` (line 15), `cloudBankY` (line 16), `paintCloudVeil` (line 17), `revealProgress` (line 23).

## Controls and compatibility

```json
{
  "adapter": "scene",
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
    "transitionClouds",
    "warFront",
    "warRear",
    "warSky",
    "warLandscape"
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
| `warEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warLivingClouds` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warCloudEvolution` | `0.1` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warCloudWind` | `12` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warCloudDetail` | `0.23` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warCoverTime` | `1.2` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warDarkTime` | `0.8` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warSkyTime` | `1.7` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warRiseTime` | `1.6` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warHold` | `2.5` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warTravel` | `270` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warCloudOpacity` | `1` | number | Native scalar; legacy ranges vary | `war-motion.js#warDefaults` |
| `warFireOpacity` | `0.5` | number | Native scalar; legacy ranges vary | `war-motion.js#warDefaults` |
| `warFireEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warCloudColor` | `"#d1d4d3"` | string | Renderer color value | `war-motion.js#warDefaults` |
| `warFrontX` | `625` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warFrontY` | `540` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warFrontHeight` | `440` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warFrontTravel` | `270` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warFrontBlur` | `0` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warRearX` | `130` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warRearY` | `570` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warRearHeight` | `300` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warRearTravel` | `219` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warRearBlur` | `2` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warLandY` | `150` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warLandTravel` | `177` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warSkyTravel` | `60` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warSkyScale` | `1.12` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warSunX` | `850` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warSunY` | `330` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warSunRadius` | `280` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warSunOpacity` | `0.65` | number | Native scalar; legacy ranges vary | `war-motion.js#warDefaults` |
| `warFireTop` | `380` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warFireHeight` | `160` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warFireGlow` | `0.12` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warCloudDrift` | `12` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |
| `warCloudScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `war-motion.js#warDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "war-sequence",
  "parameters": {
    "warEnabled": true,
    "warLivingClouds": true,
    "warCloudEvolution": 0.1,
    "warCloudWind": 12,
    "warCloudDetail": 0.23,
    "warCoverTime": 1.2,
    "warDarkTime": 0.8,
    "warSkyTime": 1.7,
    "warRiseTime": 1.6,
    "warHold": 2.5,
    "warScale": 1,
    "warX": 0,
    "warY": 0,
    "warTravel": 270,
    "warCloudOpacity": 1,
    "warFireOpacity": 0.5,
    "warFireEnabled": true,
    "warCloudColor": "#d1d4d3",
    "warFrontX": 625,
    "warFrontY": 540,
    "warFrontHeight": 440,
    "warFrontTravel": 270,
    "warFrontBlur": 0,
    "warRearX": 130,
    "warRearY": 570,
    "warRearHeight": 300,
    "warRearTravel": 219,
    "warRearBlur": 2,
    "warLandY": 150,
    "warLandTravel": 177,
    "warSkyTravel": 60,
    "warSkyScale": 1.12,
    "warSunX": 850,
    "warSunY": 330,
    "warSunRadius": 280,
    "warSunOpacity": 0.65,
    "warFireTop": 380,
    "warFireHeight": 160,
    "warFireGlow": 0.12,
    "warCloudDrift": 12,
    "warCloudScale": 1
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
