# Perspective room and foreground parallax

Stable ID: `perspective-portrait-room`

Perspective-projected window wall, rear wall and floor, with separate person, foreground vessel and rear cloth cutouts. One camera moves toward an editable focus point.

## Implementation

- [portrait-room.js](../../dist/portrait-room.js) — SHA-256 `baa8a92c2c61ecfe85624b2304baa448c8e26b275041571d1a1907ac190ae300`; functions: `portraitRoomState` (line 7), `projectRoomPoint` (line 8), `portraitRoomGeometry` (line 10), `triangle` (line 11), `bilerp` (line 12), `surface` (line 13), `spriteRect` (line 14), `paintPortraitRoom` (line 16), `layer` (line 16).

## Controls and compatibility

```json
{
  "adapter": "room",
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
    "historyRoomPerson",
    "historyRoomBackground",
    "historyRoomVase",
    "historyRoomCloth"
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
| `historyRoomEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomSaturation` | `1` | number | Native renderer units; inspect linked implementation before conversion | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomWarmth` | `0` | number | Native renderer units; inspect linked implementation before conversion | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomVaseBehind` | `false` | boolean | Native renderer units; inspect linked implementation before conversion | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomApplyLater` | `false` | boolean | Native renderer units; inspect linked implementation before conversion | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomSurfaces` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomSpeed` | `1` | number | playback multiplier | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomFocal` | `850` | number | scene world units | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomPush` | `600` | number | scene world units | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomFocusX` | `0.53` | number | normalized fraction (0–1) | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomFocusY` | `0.4` | number | normalized fraction (0–1) | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomStart` | `0` | number | normalized fraction (0–1) | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomFinish` | `1` | number | normalized fraction (0–1) | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomPersonDepth` | `1200` | number | scene world units | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomVaseDepth` | `850` | number | scene world units | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomClothDepth` | `2000` | number | scene world units | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomWallDepth` | `2200` | number | scene world units | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomPersonX` | `175` | number | stage pixels at the initial camera pose | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomPersonY` | `0` | number | stage pixels at the initial camera pose | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomPersonWidth` | `680` | number | stage pixels at the initial camera pose | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomVaseX` | `-150` | number | stage pixels at the initial camera pose | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomVaseY` | `345` | number | stage pixels at the initial camera pose | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomVaseWidth` | `500` | number | stage pixels at the initial camera pose | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomClothX` | `135` | number | stage pixels at the initial camera pose | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomClothY` | `190` | number | stage pixels at the initial camera pose | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomClothWidth` | `190` | number | stage pixels at the initial camera pose | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomVaseBlur` | `2.5` | number | output pixels | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomBackgroundBlur` | `0.3` | number | output pixels | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomPersonBrightness` | `0.9` | number | brightness multiplier | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomLight` | `1` | number | brightness multiplier | `portrait-room.js#portraitRoomDefaults` |
| `historyRoomShadow` | `0.23` | number | opacity fraction | `portrait-room.js#portraitRoomDefaults` |

## Limitations

- Room surfaces are perspective geometry textured from an illustrative clean plate; this is not a surveyed room reconstruction.
- The person and props are alpha planes, not volumetric scanned objects.
- Replacement cutouts require compatible framing or manual placement; no automatic segmentation is connected.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "perspective-portrait-room",
  "parameters": {
    "historyRoomEnabled": true,
    "historyRoomSaturation": 1,
    "historyRoomWarmth": 0,
    "historyRoomVaseBehind": false,
    "historyRoomApplyLater": false,
    "historyRoomSurfaces": [],
    "historyRoomSpeed": 1,
    "historyRoomFocal": 850,
    "historyRoomPush": 600,
    "historyRoomFocusX": 0.53,
    "historyRoomFocusY": 0.4,
    "historyRoomStart": 0,
    "historyRoomFinish": 1,
    "historyRoomPersonDepth": 1200,
    "historyRoomVaseDepth": 850,
    "historyRoomClothDepth": 2000,
    "historyRoomWallDepth": 2200,
    "historyRoomPersonX": 175,
    "historyRoomPersonY": 0,
    "historyRoomPersonWidth": 680,
    "historyRoomVaseX": -150,
    "historyRoomVaseY": 345,
    "historyRoomVaseWidth": 500,
    "historyRoomClothX": 135,
    "historyRoomClothY": 190,
    "historyRoomClothWidth": 190,
    "historyRoomVaseBlur": 2.5,
    "historyRoomBackgroundBlur": 0.3,
    "historyRoomPersonBrightness": 0.9,
    "historyRoomLight": 1,
    "historyRoomShadow": 0.23
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
