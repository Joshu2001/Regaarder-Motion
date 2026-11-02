# Shoe departs and seated athletes sharpen

Stable ID: `betrayal-shoe-exit`

Shoe departs and seated athletes sharpen; source 420.467–421.4s.

## Implementation

- [betrayal-sequence.js](../../dist/betrayal-sequence.js) — SHA-256 `a9ea42fa80e533ba54be6fbda97223dbf3148d6ac0add59a551868b7d65d70a3`; functions: `validateBetrayal` (line 13), `finite` (line 13), `pathSettings` (line 14), `betrayalDuration` (line 15), `betrayalSourceToLocal` (line 16), `betrayalState` (line 17), `cut` (line 19), `layer` (line 20), `tinted` (line 21), `sprite` (line 22), `groundMatte` (line 23), `plate` (line 24), `sky` (line 25), `flash` (line 26), `rough` (line 27), `field` (line 28), `holder` (line 29), `glyph` (line 32), `podium` (line 33), `brothers` (line 35), `notes` (line 36), `parchment` (line 37), `world` (line 39), `factory` (line 40), `chapterShoeView` (line 42), `laterChapterParameters` (line 44), `chapterLightning` (line 45), `lightningPaths` (line 46), `paintSneakerChapter` (line 47), `chapter` (line 55), `focusedMeeting` (line 57), `paintBetrayal` (line 58).

## Controls and compatibility

```json
{
  "adapter": "betrayal-sequence",
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
    "betrSpike",
    "betrHeldSpike",
    "betrHolder",
    "betrSeated",
    "betrGround",
    "betrWinner",
    "betrSilver",
    "betrBronze",
    "betrBrotherA",
    "betrBrotherB",
    "betrFactory",
    "betrGeography",
    "betrFingers",
    "betrChapterShoes"
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
| `betrayalEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalRate` | `1` | number | multiplier | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalSceneDurations` | See JSON below | object | seconds per stage before rate | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalLayerEdits` | See JSON below | object | XY pixels, rotation degrees, opacity 0–1; shared objectMotion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalFullSources` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalCameraX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalCameraY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalCameraZoom` | `0` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalFocus` | `1` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalFlash` | `1` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalRed` | `1` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalNoteCount` | `28` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalSeed` | `74` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalMedalText` | `"4X GOLD MEDALS"` | string | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalChapter` | `"CHAPTER 3"` | string | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalTitle` | `"THE BETRAYAL"` | string | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalGlyphStagger` | `0.035` | number | seconds per glyph | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalGlyphSettle` | `0.65` | number | seconds | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalPathStyle` | `"dotted"` | string | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalPathAnimation` | `"draw-flow"` | string | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalPathWidth` | `2.5` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalPathDash` | `5` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalPathGap` | `8` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalPathSpeed` | `24` | number | native map pixels per second | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalRouteDuration` | `2.8` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalRouteTargets` | See JSON below | array | longitude/latitude degrees | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalGrip` | See JSON below | array | normalized holder center XY and shoe width | `betrayal-sequence.js#betrayalDefaults` |
| `betrayalLetterbox` | `16` | number | Native renderer units; inspect linked implementation before conversion | `betrayal-sequence.js#betrayalDefaults` |

## Limitations

- Generated illustrative 2.5D people and shoe views; no historical-photo or recovered-3D claim.
- Medalists use relaxed-arm poses; original pose differs. Political image remains a visible rectangular archive photograph.
- Map is NASA geography with an authored parchment treatment; route endpoints illustrate expansion and do not establish real shipment data.
- Silent reconstruction; reference comparison audio comes only from user upload.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "betrayal-shoe-exit",
  "parameters": {
    "betrayalEnabled": true,
    "betrayalRate": 1,
    "betrayalSceneDurations": {},
    "betrayalLayerEdits": {},
    "betrayalSourceBindings": {},
    "betrayalFullSources": {},
    "betrayalCameraX": 0,
    "betrayalCameraY": 0,
    "betrayalCameraZoom": 0,
    "betrayalFocus": 1,
    "betrayalFlash": 1,
    "betrayalRed": 1,
    "betrayalNoteCount": 28,
    "betrayalSeed": 74,
    "betrayalMedalText": "4X GOLD MEDALS",
    "betrayalChapter": "CHAPTER 3",
    "betrayalTitle": "THE BETRAYAL",
    "betrayalGlyphStagger": 0.035,
    "betrayalGlyphSettle": 0.65,
    "betrayalPathStyle": "dotted",
    "betrayalPathAnimation": "draw-flow",
    "betrayalPathWidth": 2.5,
    "betrayalPathDash": 5,
    "betrayalPathGap": 8,
    "betrayalPathSpeed": 24,
    "betrayalRouteDuration": 2.8,
    "betrayalRouteTargets": [
      [
        -74,
        41
      ],
      [
        -118,
        34
      ],
      [
        -47,
        -16
      ],
      [
        -99,
        19
      ],
      [
        -3,
        55
      ],
      [
        30,
        60
      ],
      [
        77,
        29
      ],
      [
        139,
        36
      ],
      [
        151,
        -34
      ],
      [
        28,
        -26
      ],
      [
        31,
        30
      ],
      [
        45,
        15
      ],
      [
        104,
        1
      ],
      [
        120,
        -6
      ],
      [
        174,
        -41
      ],
      [
        -70,
        -33
      ]
    ],
    "betrayalGrip": [
      0.5,
      0.885,
      0.64
    ],
    "betrayalLetterbox": 16
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
