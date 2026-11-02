# Mother workshop · layered room

Stable ID: `perspective-mother-room`

Independent warm room, seated person, near wash tub and windowsill cloth with editable depth and one continuous camera.

## Implementation

- [mother-room.js](../mother-room.js) — SHA-256 `33c0952cc81116539633176f341a5b27ec605b8a1f5c01d5f177059a8324e657`; functions: `motherRoomSettings` (line 4), `paintMotherRoom` (line 5), `motherRoomGeometry` (line 7).

## Controls and compatibility

```json
{
  "adapter": "mother-room",
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
    "historyMotherBackground",
    "historyMotherPerson",
    "historyMotherVase",
    "historyMotherCloth"
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
| `historyMotherEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `mother-room.js#motherRoomDefaults` |
| `historyMotherGrayscale` | `0` | number | Native renderer units; inspect linked implementation before conversion | `mother-room.js#motherRoomDefaults` |
| `historyMotherSurfaces` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `mother-room.js#motherRoomDefaults` |
| `historyMotherSpeed` | `1` | number | playback multiplier | `mother-room.js#motherRoomDefaults` |
| `historyMotherFocal` | `850` | number | scene world units | `mother-room.js#motherRoomDefaults` |
| `historyMotherPush` | `220` | number | scene world units | `mother-room.js#motherRoomDefaults` |
| `historyMotherFocusX` | `0.57` | number | normalized fraction (0–1) | `mother-room.js#motherRoomDefaults` |
| `historyMotherFocusY` | `0.4` | number | normalized fraction (0–1) | `mother-room.js#motherRoomDefaults` |
| `historyMotherStart` | `0` | number | normalized fraction (0–1) | `mother-room.js#motherRoomDefaults` |
| `historyMotherFinish` | `1` | number | normalized fraction (0–1) | `mother-room.js#motherRoomDefaults` |
| `historyMotherPersonDepth` | `1500` | number | scene world units | `mother-room.js#motherRoomDefaults` |
| `historyMotherVaseDepth` | `900` | number | scene world units | `mother-room.js#motherRoomDefaults` |
| `historyMotherClothDepth` | `2000` | number | scene world units | `mother-room.js#motherRoomDefaults` |
| `historyMotherWallDepth` | `2200` | number | scene world units | `mother-room.js#motherRoomDefaults` |
| `historyMotherPersonX` | `390` | number | stage pixels at the initial camera pose | `mother-room.js#motherRoomDefaults` |
| `historyMotherPersonY` | `88` | number | stage pixels at the initial camera pose | `mother-room.js#motherRoomDefaults` |
| `historyMotherPersonWidth` | `380` | number | stage pixels at the initial camera pose | `mother-room.js#motherRoomDefaults` |
| `historyMotherVaseX` | `-160` | number | stage pixels at the initial camera pose | `mother-room.js#motherRoomDefaults` |
| `historyMotherVaseY` | `310` | number | stage pixels at the initial camera pose | `mother-room.js#motherRoomDefaults` |
| `historyMotherVaseWidth` | `510` | number | stage pixels at the initial camera pose | `mother-room.js#motherRoomDefaults` |
| `historyMotherClothX` | `90` | number | stage pixels at the initial camera pose | `mother-room.js#motherRoomDefaults` |
| `historyMotherClothY` | `125` | number | stage pixels at the initial camera pose | `mother-room.js#motherRoomDefaults` |
| `historyMotherClothWidth` | `205` | number | stage pixels at the initial camera pose | `mother-room.js#motherRoomDefaults` |
| `historyMotherVaseBlur` | `2.5` | number | output pixels | `mother-room.js#motherRoomDefaults` |
| `historyMotherBackgroundBlur` | `0.3` | number | output pixels | `mother-room.js#motherRoomDefaults` |
| `historyMotherPersonBrightness` | `1` | number | brightness multiplier | `mother-room.js#motherRoomDefaults` |
| `historyMotherLight` | `1` | number | brightness multiplier | `mother-room.js#motherRoomDefaults` |
| `historyMotherShadow` | `0.23` | number | opacity fraction | `mother-room.js#motherRoomDefaults` |

## Limitations

- Room surfaces are perspective geometry textured from an illustrative clean plate; this is not a surveyed room reconstruction.
- The person and props are alpha planes, not volumetric scanned objects.
- Replacement cutouts require compatible framing or manual placement; no automatic segmentation is connected.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "perspective-mother-room",
  "parameters": {
    "historyMotherEnabled": true,
    "historyMotherGrayscale": 0,
    "historyMotherSurfaces": [],
    "historyMotherSpeed": 1,
    "historyMotherFocal": 850,
    "historyMotherPush": 220,
    "historyMotherFocusX": 0.57,
    "historyMotherFocusY": 0.4,
    "historyMotherStart": 0,
    "historyMotherFinish": 1,
    "historyMotherPersonDepth": 1500,
    "historyMotherVaseDepth": 900,
    "historyMotherClothDepth": 2000,
    "historyMotherWallDepth": 2200,
    "historyMotherPersonX": 390,
    "historyMotherPersonY": 88,
    "historyMotherPersonWidth": 380,
    "historyMotherVaseX": -160,
    "historyMotherVaseY": 310,
    "historyMotherVaseWidth": 510,
    "historyMotherClothX": 90,
    "historyMotherClothY": 125,
    "historyMotherClothWidth": 205,
    "historyMotherVaseBlur": 2.5,
    "historyMotherBackgroundBlur": 0.3,
    "historyMotherPersonBrightness": 1,
    "historyMotherLight": 1,
    "historyMotherShadow": 0.23
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
