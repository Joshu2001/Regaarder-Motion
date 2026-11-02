# Meeting setup

Stable ID: `olympic-village-meeting`

Meeting setup; source 412.9–415s. Reusable scene action with independent sources and shared playback.

## Implementation

- [olympic-sequence.js](../olympic-sequence.js) — SHA-256 `1e785e084227f29b8683fe7cc49354b132f7985e1096bf3ff135d256bf717975`; functions: `validateOlympic` (line 11), `finite` (line 11), `olympicDuration` (line 12), `olympicSourceToLocal` (line 13), `olympicState` (line 14), `layer` (line 15), `cut` (line 18), `silhouette` (line 19), `sprite` (line 20), `skyline` (line 21), `plate` (line 22), `sky` (line 23), `finish` (line 24), `rings` (line 25), `glyphs` (line 26), `irregular` (line 27), `outgoing` (line 28), `olympicGold` (line 29), `screenContent` (line 30), `televisionTransform` (line 31), `television` (line 32), `shadow` (line 33), `track` (line 34), `politicalPortrait` (line 35), `political` (line 36), `meeting` (line 37), `paintOlympic` (line 38).

## Controls and compatibility

```json
{
  "adapter": "olympic-sequence",
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
    "olympStatue",
    "olympTV",
    "olympTrack",
    "olympRunner",
    "olympOwens",
    "olympGreeting",
    "olympSmileA",
    "olympSmileB",
    "olympAddi",
    "olympEntrance",
    "olympCrowd",
    "olympBerlin",
    "olympPolitical",
    "olympRoom",
    "olympTeam",
    "olympSky"
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
| `olympicEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicRate` | `1` | number | multiplier of source-local scene clock | `olympic-sequence.js#olympicDefaults` |
| `olympicSceneDurations` | See JSON below | object | seconds per named stage before sequence rate | `olympic-sequence.js#olympicDefaults` |
| `olympicLayerEdits` | See JSON below | object | XY in native stage pixels, rotation degrees, opacity 0–1, positive scale/depth; shared objectMotion schema | `olympic-sequence.js#olympicDefaults` |
| `olympicSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicFullSources` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicCameraX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicCameraY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicCameraZoom` | `0` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicCloudWind` | `14` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicGold` | `"#eeee25"` | string | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicRed` | `"#a30d22"` | string | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicParticleCount` | `85` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicParticleSeed` | `73` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicParticleSpeed` | `1` | number | multiplier | `olympic-sequence.js#olympicDefaults` |
| `olympicFlashStrength` | `1` | number | Native scalar; legacy ranges vary | `olympic-sequence.js#olympicDefaults` |
| `olympicTitle` | `"JESSE OWENS"` | string | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicDate` | `"1936"` | string | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicTitleSize` | `145` | number | native stage pixels | `olympic-sequence.js#olympicDefaults` |
| `olympicLetterStagger` | `0.11` | number | seconds per glyph | `olympic-sequence.js#olympicDefaults` |
| `olympicTitleSettle` | `0.65` | number | seconds | `olympic-sequence.js#olympicDefaults` |
| `olympicEyeGlow` | `0.9` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicEyePoints` | See JSON below | array | two normalized original-photograph XY positions | `olympic-sequence.js#olympicDefaults` |
| `olympicFocusStrength` | `1` | number | blur multiplier | `olympic-sequence.js#olympicDefaults` |
| `olympicTVTint` | `0.35` | number | alpha 0–0.8 | `olympic-sequence.js#olympicDefaults` |
| `olympicStaticStrength` | `1` | number | Native scalar; legacy ranges vary | `olympic-sequence.js#olympicDefaults` |
| `olympicMaskSeed` | `49` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicMaskEdge` | `5` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicLetterbox` | `16` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |
| `olympicVignette` | `0.22` | number | Native renderer units; inspect linked implementation before conversion | `olympic-sequence.js#olympicDefaults` |

## Limitations

- Native canvas stage 960×540. Photographic 2.5D planes; no recovered full-body running cycle or volumetric architecture.
- Owens poses, supporting people, sculpture and environments are illustrative reconstructions. Exact likeness and pose differ from source.
- Historical portrait remains a rectangular archival photograph following an image-tool background-removal refusal; isolated source portrait is not reproduced.
- TV screen uses a rounded clip, scanlines, tint/reflection and camera projection; no ray-traced convex glass reconstruction.
- Preview is silent; no new narration or sound mix. The meeting setup ends before shoe presentation.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "olympic-village-meeting",
  "parameters": {
    "olympicEnabled": true,
    "olympicRate": 1,
    "olympicSceneDurations": {},
    "olympicLayerEdits": {},
    "olympicSourceBindings": {},
    "olympicFullSources": {},
    "olympicCameraX": 0,
    "olympicCameraY": 0,
    "olympicCameraZoom": 0,
    "olympicCloudWind": 14,
    "olympicGold": "#eeee25",
    "olympicRed": "#a30d22",
    "olympicParticleCount": 85,
    "olympicParticleSeed": 73,
    "olympicParticleSpeed": 1,
    "olympicFlashStrength": 1,
    "olympicTitle": "JESSE OWENS",
    "olympicDate": "1936",
    "olympicTitleSize": 145,
    "olympicLetterStagger": 0.11,
    "olympicTitleSettle": 0.65,
    "olympicEyeGlow": 0.9,
    "olympicEyePoints": [
      [
        0.473,
        0.176
      ],
      [
        0.588,
        0.176
      ]
    ],
    "olympicFocusStrength": 1,
    "olympicTVTint": 0.35,
    "olympicStaticStrength": 1,
    "olympicMaskSeed": 49,
    "olympicMaskEdge": 5,
    "olympicLetterbox": 16,
    "olympicVignette": 0.22
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
