# Company division · river trace

Stable ID: `division-river-trace`

Editable river trace from original11:55–12:55 with independent text, media, object and camera motion.

## Implementation

- [division-sequence.js](../division-sequence.js) — SHA-256 `57ce8126c4ef4768c8ceb13987c9bd2802bf95e2cd3e290f8cee0138f0b361f3`; functions: `validateDivision` (line 10), `divisionDuration` (line 11), `divisionSourceToLocal` (line 12), `divisionState` (line 13), `media` (line 15), `layer` (line 16), `pic` (line 17), `cover` (line 18), `vignette` (line 19), `sky` (line 20), `desk` (line 21), `writer` (line 22), `glyphLine` (line 23), `nameScene` (line 24), `morph` (line 25), `animal` (line 26), `factories` (line 27), `scallopPass` (line 28), `workers` (line 29), `founders` (line 30), `company` (line 31), `town` (line 32), `divisionMapPose` (line 33), `mapScene` (line 35), `organic` (line 36), `paintDivision` (line 37).
- [division-director.js](../division-director.js) — SHA-256 `1ba541e5b658d9cc988533baecbb08ff0313093ea99840dc152e7acefa068f2f`; functions: `refresh` (line 3), `seek` (line 3), `read` (line 6).

## Controls and compatibility

```json
{
  "adapter": "division-sequence",
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
    "divisionRoomA",
    "divisionRoomB",
    "divisionFacade",
    "divisionMap",
    "divisionWriterA",
    "divisionWriterB",
    "divisionWorkerA",
    "divisionRunner",
    "divisionCat",
    "divisionWorkerB",
    "divisionFactory",
    "divisionFounderA",
    "divisionFounderB",
    "divisionTown",
    "divisionGround",
    "divisionStadium"
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
| `divisionEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionRate` | `1` | number | Playback multiplier | `division-sequence.js#divisionDefaults` |
| `divisionSceneDurations` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionLayerEdits` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionCameraX` | `0` | number | Stage pixels | `division-sequence.js#divisionDefaults` |
| `divisionCameraY` | `0` | number | Stage pixels | `division-sequence.js#divisionDefaults` |
| `divisionCameraZoom` | `0` | number | Additive zoom;0 means1x | `division-sequence.js#divisionDefaults` |
| `divisionName` | `"ADI"` | string | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionSurname` | `"DASSLER"` | string | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionBrandA` | `"ADIDAS"` | string | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionPronunciation` | `"AH-DEE-DAHS"` | string | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionInitialBrand` | `"RUDA"` | string | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionBrandB` | `"PUMA"` | string | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionTownLabel` | `"HERZOGENAURACH"` | string | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionTypeColor` | `"#e6e5df"` | string | Renderer color value | `division-sequence.js#divisionDefaults` |
| `divisionRed` | `"#8b2035"` | string | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionBlue` | `"#164e9a"` | string | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionRiverColor` | `"#ac8cf8"` | string | Renderer color value | `division-sequence.js#divisionDefaults` |
| `divisionRiverWidth` | `6` | number | Stage pixels | `division-sequence.js#divisionDefaults` |
| `divisionRiverPath` | See JSON below | array | Normalized map-space points | `division-sequence.js#divisionDefaults` |
| `divisionWorkers` | `9` | number | Count | `division-sequence.js#divisionDefaults` |
| `divisionWindowExposure` | `1` | number | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionEyeGlow` | `0.85` | number | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |
| `divisionMaskStrength` | `1` | number | Native scalar; legacy ranges vary | `division-sequence.js#divisionDefaults` |
| `divisionIllustrationLabel` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `division-sequence.js#divisionDefaults` |

## Limitations

- Generated fictional reconstruction and held poses; no recovered3D/acting/pen strokes.
- Illustrative aerial geography; river path requires calibration for replacement maps.
- Glyph squash/mask substitutions approximate original contour morphs.
- Browser/GPU playback not visually verified.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "division-river-trace",
  "parameters": {
    "divisionEnabled": true,
    "divisionRate": 1,
    "divisionSceneDurations": {},
    "divisionLayerEdits": {},
    "divisionSourceBindings": {},
    "divisionCameraX": 0,
    "divisionCameraY": 0,
    "divisionCameraZoom": 0,
    "divisionName": "ADI",
    "divisionSurname": "DASSLER",
    "divisionBrandA": "ADIDAS",
    "divisionPronunciation": "AH-DEE-DAHS",
    "divisionInitialBrand": "RUDA",
    "divisionBrandB": "PUMA",
    "divisionTownLabel": "HERZOGENAURACH",
    "divisionTypeColor": "#e6e5df",
    "divisionRed": "#8b2035",
    "divisionBlue": "#164e9a",
    "divisionRiverColor": "#ac8cf8",
    "divisionRiverWidth": 6,
    "divisionRiverPath": [
      [
        0,
        0.3
      ],
      [
        0.1,
        0.35
      ],
      [
        0.18,
        0.43
      ],
      [
        0.24,
        0.45
      ],
      [
        0.29,
        0.42
      ],
      [
        0.34,
        0.47
      ],
      [
        0.38,
        0.48
      ],
      [
        0.43,
        0.53
      ],
      [
        0.5,
        0.56
      ],
      [
        0.56,
        0.58
      ],
      [
        0.62,
        0.68
      ],
      [
        0.7,
        0.7
      ],
      [
        0.78,
        0.72
      ],
      [
        0.9,
        0.8
      ],
      [
        1,
        0.86
      ]
    ],
    "divisionWorkers": 9,
    "divisionWindowExposure": 1,
    "divisionEyeGlow": 0.85,
    "divisionMaskStrength": 1,
    "divisionIllustrationLabel": true
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
