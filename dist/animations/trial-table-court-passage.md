# Interrogation & trial · table court passage

Stable ID: `trial-table-court-passage`

Editable connected documentary action; source647.5–649.2s. Photo identity, foreground occlusion and independently bound objects.

## Implementation

- [trial-sequence.js](../trial-sequence.js) — SHA-256 `070eb1bca46f24d591d34f3405f0ae26896bc540562d92c03b369fc9246dacd5`; functions: `validateTrial` (line 9), `trialDuration` (line 10), `trialSourceToLocal` (line 11), `trialState` (line 12), `media` (line 14), `layer` (line 15), `pic` (line 16), `cover` (line 17), `vignette` (line 18), `letterPage` (line 19), `prior` (line 20), `incoming` (line 21), `fireFrame` (line 22), `fireWipe` (line 23), `light` (line 24), `questioning` (line 25), `shoulderPass` (line 26), `newsPage` (line 27), `curvedPaper` (line 28), `newspaper` (line 29), `prisonPose` (line 30), `bars` (line 31), `prison` (line 32), `camp` (line 33), `campPass` (line 34), `wood` (line 35), `folderPose` (line 36), `photo` (line 37), `folder` (line 38), `overhead` (line 39), `deskPlane` (line 41), `writing` (line 42), `deskTilt` (line 43), `court` (line 44), `tablePass` (line 45), `paintTrial` (line 46).

## Controls and compatibility

```json
{
  "adapter": "trial-sequence",
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
    "trialRoom",
    "trialCell",
    "trialCamp",
    "trialCourt",
    "trialRear",
    "trialWriter",
    "trialPrisoner",
    "trialOfficials",
    "trialCampMan",
    "trialWitnessA",
    "trialWitnessB",
    "trialNewsPhoto",
    "trialFire",
    "trialNewsWar"
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
| `trialEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialRate` | `1` | number | multiplier | `trial-sequence.js#trialDefaults` |
| `trialSceneDurations` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialLayerEdits` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialCameraX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialCameraY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialCameraZoom` | `0` | number | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialLight` | `1` | number | normalized intensity | `trial-sequence.js#trialDefaults` |
| `trialHaze` | `0.18` | number | opacity | `trial-sequence.js#trialDefaults` |
| `trialPaperCurve` | `14` | number | pixels | `trial-sequence.js#trialDefaults` |
| `trialFireStrength` | `1` | number | multiplier | `trial-sequence.js#trialDefaults` |
| `trialNewsTitle` | `"WAR ENDS"` | string | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialNewsSecond` | `"AMERICANS TOOK\nGERMAN PEOPLE"` | string | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialNewsMasthead` | `"THE DAILY REPORT"` | string | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialStamp` | `"TIP-OFF"` | string | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |
| `trialIllustrationLabel` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `trial-sequence.js#trialDefaults` |

## Limitations

- Generated fictional reconstruction, held poses; not archival evidence or recovered3D.
- Writing pose does not simulate actual pen strokes; newspaper second headline remains the visible partial wording.
- Table projection and compositing approximate original geometry.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "trial-table-court-passage",
  "parameters": {
    "trialEnabled": true,
    "trialRate": 1,
    "trialSceneDurations": {},
    "trialLayerEdits": {},
    "trialSourceBindings": {},
    "trialCameraX": 0,
    "trialCameraY": 0,
    "trialCameraZoom": 0,
    "trialLight": 1,
    "trialHaze": 0.18,
    "trialPaperCurve": 14,
    "trialFireStrength": 1,
    "trialNewsTitle": "WAR ENDS",
    "trialNewsSecond": "AMERICANS TOOK\nGERMAN PEOPLE",
    "trialNewsMasthead": "THE DAILY REPORT",
    "trialStamp": "TIP-OFF",
    "trialIllustrationLabel": true
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
