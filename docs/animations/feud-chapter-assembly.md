# Feud · chapter assembly

Stable ID: `feud-chapter-assembly`

Editable chapter assembly from original10:55–11:55; separate media, object motion, camera and timing.

## Implementation

- [feud-sequence.js](../../dist/feud-sequence.js) — SHA-256 `ca10a523ceced6e85bcd703fa932a83acc8eb460d5e3b3a76205db23740f43a4`; functions: `validateFeud` (line 10), `feudDuration` (line 11), `feudSourceToLocal` (line 12), `feudState` (line 13), `media` (line 15), `layer` (line 16), `pic` (line 17), `vignette` (line 18), `atmosphere` (line 19), `portrait` (line 20), `people` (line 21), `collage` (line 22), `question` (line 23), `eye` (line 24), `heads` (line 25), `court` (line 26), `factory` (line 27), `flameTile` (line 28), `flames` (line 29), `chapter` (line 30), `paintFeud` (line 31), `paintFeudChapterTail` (line 33).
- [feud-director.js](../../dist/feud-director.js) — SHA-256 `1e5719f6d7940d101a7fa54cc2b91f95c4e6f1a5c40dac93460ea9f135c37b5a`; functions: `refresh` (line 3), `seek` (line 3), `read` (line 6).

## Controls and compatibility

```json
{
  "adapter": "feud-sequence",
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
    "feudPortrait",
    "feudHeadA",
    "feudHeadB",
    "feudPersonA",
    "feudPersonB",
    "feudPersonC",
    "feudPersonD",
    "feudFactory",
    "feudGround",
    "feudBrandA",
    "feudBrandB",
    "feudFire",
    "feudShoeA",
    "feudShoeB",
    "feudCourt",
    "feudWitnessA",
    "feudWitnessB"
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
| `feudEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |
| `feudRate` | `1` | number | Playback multiplier | `feud-sequence.js#feudDefaults` |
| `feudSceneDurations` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |
| `feudLayerEdits` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |
| `feudSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |
| `feudCameraX` | `0` | number | Stage pixels | `feud-sequence.js#feudDefaults` |
| `feudCameraY` | `0` | number | Stage pixels | `feud-sequence.js#feudDefaults` |
| `feudCameraZoom` | `0` | number | Additive zoom;0 means1x | `feud-sequence.js#feudDefaults` |
| `feudCloudWind` | `18` | number | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |
| `feudCloudEvolution` | `0.11` | number | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |
| `feudFireStrength` | `1` | number | Opacity multiplier | `feud-sequence.js#feudDefaults` |
| `feudEyeStrength` | `1` | number | Native scalar; legacy ranges vary | `feud-sequence.js#feudDefaults` |
| `feudTitle` | `"THE TOWN OF BENT NECKS"` | string | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |
| `feudChapter` | `"CHAPTER 4:"` | string | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |
| `feudTitleSize` | `51` | number | Stage pixels | `feud-sequence.js#feudDefaults` |
| `feudTitleColor` | `"#ffe595"` | string | Renderer color value | `feud-sequence.js#feudDefaults` |
| `feudTitleScatter` | `420` | number | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |
| `feudTitleBlur` | `22` | number | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |
| `feudIllustrationLabel` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `feud-sequence.js#feudDefaults` |

## Limitations

- Generated illustrative likenesses; authored view blends, not recovered 3D or live acting.
- Registered modern brand marks approximate historical emblems.
- Browser/GPU playback has not been visually verified.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "feud-chapter-assembly",
  "parameters": {
    "feudEnabled": true,
    "feudRate": 1,
    "feudSceneDurations": {},
    "feudLayerEdits": {},
    "feudSourceBindings": {},
    "feudCameraX": 0,
    "feudCameraY": 0,
    "feudCameraZoom": 0,
    "feudCloudWind": 18,
    "feudCloudEvolution": 0.11,
    "feudFireStrength": 1,
    "feudEyeStrength": 1,
    "feudTitle": "THE TOWN OF BENT NECKS",
    "feudChapter": "CHAPTER 4:",
    "feudTitleSize": 51,
    "feudTitleColor": "#ffe595",
    "feudTitleScatter": 420,
    "feudTitleBlur": 22,
    "feudIllustrationLabel": true
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
