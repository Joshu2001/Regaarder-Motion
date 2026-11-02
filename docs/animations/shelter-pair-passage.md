# Shelter · pair passage

Stable ID: `shelter-pair-passage`

pair-passage; source549.5–551.5s. Independent editable stage.

## Implementation

- [shelter-sequence.js](../../dist/shelter-sequence.js) — SHA-256 `6e55eccff601ebf8b17bfc85c530daa489f861668e6496ec570cf9f679137353`; functions: `validateShelter` (line 9), `shelterDuration` (line 10), `shelterSourceToLocal` (line 11), `shelterState` (line 12), `media` (line 21), `layer` (line 22), `pic` (line 23), `cover` (line 24), `shelterFlash` (line 25), `storm` (line 26), `aircraft` (line 27), `bomb` (line 28), `blasts` (line 29), `ground` (line 30), `room` (line 31), `pair` (line 31), `quotePose` (line 32), `connector` (line 33), `quote` (line 34), `conflict` (line 35), `montage` (line 36), `factory` (line 37), `familyWind` (line 39), `paperTexture` (line 41), `lensPose` (line 42), `lensSample` (line 43), `letter` (line 44), `tilePass` (line 46), `paintShelter` (line 47).

## Controls and compatibility

```json
{
  "adapter": "shelter-sequence",
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
    "shelterPairA",
    "shelterPairB",
    "shelterProfileA",
    "shelterProfileB",
    "shelterRoom",
    "shelterRuins",
    "shelterFactory",
    "shelterPaper",
    "shelterSoldiers",
    "shelterWorkers",
    "shelterMachines",
    "shelterManA",
    "shelterWomanA",
    "shelterManB",
    "shelterWomanB",
    "shelterFrontal",
    "shelterPlane",
    "shelterFamilyPlate",
    "shelterStorm",
    "shelterBlast",
    "shelterTree"
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
| `shelterEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `shelter-sequence.js#shelterDefaults` |
| `shelterRate` | `1` | number | multiplier | `shelter-sequence.js#shelterDefaults` |
| `shelterSceneDurations` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `shelter-sequence.js#shelterDefaults` |
| `shelterLayerEdits` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `shelter-sequence.js#shelterDefaults` |
| `shelterSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `shelter-sequence.js#shelterDefaults` |
| `shelterCameraX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `shelter-sequence.js#shelterDefaults` |
| `shelterCameraY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `shelter-sequence.js#shelterDefaults` |
| `shelterCameraZoom` | `0` | number | Native renderer units; inspect linked implementation before conversion | `shelter-sequence.js#shelterDefaults` |
| `shelterQuote` | `"“THE BASTARDS\nARE BACK AGAIN”"` | string | Native renderer units; inspect linked implementation before conversion | `shelter-sequence.js#shelterDefaults` |
| `shelterQuoteColor` | `"#e5344c"` | string | Renderer color value | `shelter-sequence.js#shelterDefaults` |
| `shelterLensMagnification` | `2.1` | number | multiplier | `shelter-sequence.js#shelterDefaults` |
| `shelterLensRadius` | `94` | number | pixels | `shelter-sequence.js#shelterDefaults` |
| `shelterWindStrength` | `1` | number | multiplier | `shelter-sequence.js#shelterDefaults` |
| `shelterFlashStrength` | `1` | number | multiplier | `shelter-sequence.js#shelterDefaults` |
| `shelterFactoryPullback` | `0.28` | number | scale delta | `shelter-sequence.js#shelterDefaults` |
| `shelterCloudSpeed` | `18` | number | native motion rate | `shelter-sequence.js#shelterDefaults` |
| `shelterLight` | `1` | number | normalized intensity | `shelter-sequence.js#shelterDefaults` |
| `shelterLetterText` | `"Adi,\n\nI do not believe you have\nthe character to lead our\ncompany. While I am away,\nmy wife will represent me\nin all decisions regarding\nthe business. This is not\na request.\n\nRudi"` | string | Native renderer units; inspect linked implementation before conversion | `shelter-sequence.js#shelterDefaults` |
| `shelterIllustrationLabel` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `shelter-sequence.js#shelterDefaults` |

## Limitations

- Generated fictional illustrations; no recovered3D or acting.
- Soldier/industrial inserts are labeled illustrative plates, not verified archival footage.
- Lens resamples the same letter texture; partial visible-reference text remains editable.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "shelter-pair-passage",
  "parameters": {
    "shelterEnabled": true,
    "shelterRate": 1,
    "shelterSceneDurations": {},
    "shelterLayerEdits": {},
    "shelterSourceBindings": {},
    "shelterCameraX": 0,
    "shelterCameraY": 0,
    "shelterCameraZoom": 0,
    "shelterQuote": "“THE BASTARDS\nARE BACK AGAIN”",
    "shelterQuoteColor": "#e5344c",
    "shelterLensMagnification": 2.1,
    "shelterLensRadius": 94,
    "shelterWindStrength": 1,
    "shelterFlashStrength": 1,
    "shelterFactoryPullback": 0.28,
    "shelterCloudSpeed": 18,
    "shelterLight": 1,
    "shelterLetterText": "Adi,\n\nI do not believe you have\nthe character to lead our\ncompany. While I am away,\nmy wife will represent me\nin all decisions regarding\nthe business. This is not\na request.\n\nRudi",
    "shelterIllustrationLabel": true
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
