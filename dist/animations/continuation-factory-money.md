# Factory, desks and money

Stable ID: `continuation-factory-money`

Factory, desks and money; source 326.500–333.300 seconds. Independent native scene action.

## Implementation

- [continuation-sequence.js](../continuation-sequence.js) — SHA-256 `7c0b3cf383335d37bc654fdbd462514f2f8cd37d91be74f30b2774e4e3321104`; functions: `validateContinuation` (line 16), `continuationDuration` (line 17), `continuationSourceToLocal` (line 18), `continuationState` (line 19), `cutout` (line 20), `silhouette` (line 21), `media` (line 22), `withObject` (line 23), `sprite` (line 24), `plate` (line 25), `shadow` (line 26), `finish` (line 27), `sky` (line 28), `room` (line 29), `openPair` (line 30), `questionPaths` (line 31), `boot` (line 32), `field` (line 33), `team` (line 37), `foregroundRows` (line 38), `desks` (line 39), `library` (line 40), `portrait` (line 41), `roundel` (line 42), `tearPath` (line 43), `rally` (line 44), `holes` (line 45), `coins` (line 46), `eye` (line 47), `factoryMoney` (line 48), `photoReveal` (line 49), `street` (line 50), `paintContinuation` (line 52).
- [continuation-objects.js](../continuation-objects.js) — SHA-256 `c2d422cc5e557ba06a5f24853a1ea27c9d19823f887d9b4ea0a7f620311447ac`; functions: `periodBootMesh` (line 5), `paintPeriodBoot` (line 8), `paintHistoricalEmblem` (line 9), `paintLeatherBall` (line 10), `photoData` (line 11), `emblemData` (line 12), `paintRoundelSphere` (line 13), `paintCoinStacks` (line 14).

## Controls and compatibility

```json
{
  "adapter": "continuation-sequence",
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
    "contBoot",
    "contField",
    "contKicker",
    "contLibrary",
    "contWorkshop",
    "contSeatedA",
    "contSeatedB",
    "contDeskA",
    "contDeskB",
    "contStreet",
    "contTeam",
    "contOpenA",
    "contOpenB",
    "contSky",
    "contPortrait",
    "contRally",
    "contParade",
    "contYouth",
    "contMoneyPaper"
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
| `continuationEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationRate` | `1` | number | multiplier of source-local scene clock | `continuation-sequence.js#continuationDefaults` |
| `continuationSceneDurations` | See JSON below | object | seconds per named stage, before sequence rate | `continuation-sequence.js#continuationDefaults` |
| `continuationSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationFullSources` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationLayerEdits` | See JSON below | object | stage pixels, degrees, positive scale/depth, opacity 0–1; shared object motion schema | `continuation-sequence.js#continuationDefaults` |
| `continuationCameraX` | `0` | number | native stage pixels | `continuation-sequence.js#continuationDefaults` |
| `continuationCameraY` | `0` | number | native stage pixels | `continuation-sequence.js#continuationDefaults` |
| `continuationCameraZoom` | `0` | number | relative zoom amount divided by layer depth | `continuation-sequence.js#continuationDefaults` |
| `continuationCloudWind` | `13` | number | native sky drift parameter | `continuation-sequence.js#continuationDefaults` |
| `continuationDust` | `0.25` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationTeamCount` | `10` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationForegroundBlur` | `9` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationFocusStrength` | `1` | number | Native scalar; legacy ranges vary | `continuation-sequence.js#continuationDefaults` |
| `continuationBallSpin` | `0.45` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationBallColor` | `"#714731"` | string | Renderer color value | `continuation-sequence.js#continuationDefaults` |
| `continuationBootColor` | `"#795337"` | string | Renderer color value | `continuation-sequence.js#continuationDefaults` |
| `continuationBootSpin` | `1` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationCoinCount` | `48` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationFireStrength` | `0.72` | number | Native scalar; legacy ranges vary | `continuation-sequence.js#continuationDefaults` |
| `continuationMaskSeed` | `37` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationMaskEdge` | `6` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationRed` | `"#a50b25"` | string | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationEyeWidth` | `4` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationVignette` | `0.2` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationLetterbox` | `16` | number | Native renderer units; inspect linked implementation before conversion | `continuation-sequence.js#continuationDefaults` |
| `continuationClipSource` | `286.35` | number | source seconds; catalog clipStart controls insertion offset | `continuation-sequence.js#continuationDefaults` |

## Limitations

- Native canvas stage: 960 × 540. 2.5D planes, not recovered volumetric people/buildings.
- Boot uses a brief procedural 3D proxy, then a photographic hold/handoff; unseen photographic surfaces are not recovered.
- Workshop seated poses and street open-arm poses differ from the reference. The rear political image is a card, not an isolated person.
- Historical archive photographs differ from reference photographs. Generated people, rooms and field are illustrative reconstructions.
- Review preview is silent; no new narration, score or sound mix was created.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "continuation-factory-money",
  "parameters": {
    "continuationEnabled": true,
    "continuationRate": 1,
    "continuationSceneDurations": {},
    "continuationSourceBindings": {},
    "continuationFullSources": {},
    "continuationLayerEdits": {},
    "continuationCameraX": 0,
    "continuationCameraY": 0,
    "continuationCameraZoom": 0,
    "continuationCloudWind": 13,
    "continuationDust": 0.25,
    "continuationTeamCount": 10,
    "continuationForegroundBlur": 9,
    "continuationFocusStrength": 1,
    "continuationBallSpin": 0.45,
    "continuationBallColor": "#714731",
    "continuationBootColor": "#795337",
    "continuationBootSpin": 1,
    "continuationCoinCount": 48,
    "continuationFireStrength": 0.72,
    "continuationMaskSeed": 37,
    "continuationMaskEdge": 6,
    "continuationRed": "#a50b25",
    "continuationEyeWidth": 4,
    "continuationVignette": 0.2,
    "continuationLetterbox": 16,
    "continuationClipSource": 286.35
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
