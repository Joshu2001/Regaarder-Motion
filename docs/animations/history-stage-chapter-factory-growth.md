# chapter factory growth

Stable ID: `history-stage-chapter-factory-growth`

Reusable chapter factory growth stage. Native source timeline and dependencies retained.

## Implementation

- [history-motion.js](../../dist/history-motion.js) — SHA-256 `7569a7ef586d43ebdbd97e75758a7da2a5393adca6f774036904d0f744a2b15a`; functions: `migrateExpansionShots` (line 7), `historyState` (line 10), `migrateCommerceBridgeShots` (line 12).
- [history-scene.js](../../dist/history-scene.js) — SHA-256 `1ffbb2a0116c5197151463fea8a39915a4493706648eb93e171234ee891a1d41`; functions: `createHistoryScene` (line 17), `plate` (line 19), `workshop` (line 20), `portrait` (line 21), `shoulder` (line 22), `ruins` (line 23), `silhouette` (line 24), `paper` (line 25), `strip` (line 26), `reel` (line 27), `card` (line 28).
- [history-director.js](../../dist/history-director.js) — SHA-256 `c18bc7289895c1df0949d826ab52681bf6eaa48a0ab63d10709ebbf985838f50`; functions: inline/class renderer.
- [history-footage.js](../../dist/history-footage.js) — SHA-256 `44919c74177cc1cdd1305ff84378ecb11df553e36832254ec9ee74a670a45dab`; functions: `aftermathSettings` (line 8), `paintAftermath` (line 10).
- [portrait-room.js](../../dist/portrait-room.js) — SHA-256 `baa8a92c2c61ecfe85624b2304baa448c8e26b275041571d1a1907ac190ae300`; functions: `portraitRoomState` (line 7), `projectRoomPoint` (line 8), `portraitRoomGeometry` (line 10), `triangle` (line 11), `bilerp` (line 12), `surface` (line 13), `spriteRect` (line 14), `paintPortraitRoom` (line 16), `layer` (line 16).

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
    "historyWorkshop",
    "historyPortrait",
    "historyShoulder",
    "historyStreet",
    "historyShoe",
    "historyFigure",
    "historyFinalOverlay",
    "historyAftermathA",
    "historyAftermathB",
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
| `historyEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyRate` | `1` | number | Native renderer rate; do not assume multiplier | `history-motion.js#historyDefaults` |
| `historyEyeX` | `586` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyEyeY` | `312` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyEyeZoom` | `34` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyPush` | `0.14` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyReelCount` | `7` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyReelColor` | `"#b8bcc3"` | string | Renderer color value | `history-motion.js#historyDefaults` |
| `historyOutline` | `"#eeeeea"` | string | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historySelectedOutline` | `"#7084df"` | string | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyOutlineWidth` | `4` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyShoeColor` | `"#232426"` | string | Renderer color value | `history-motion.js#historyDefaults` |
| `historyShoeSize` | `620` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyShoeYaw` | `-86` | number | Native angle; source specifies degrees or radians | `history-motion.js#historyDefaults` |
| `historyShoePitch` | `8` | number | Native angle; source specifies degrees or radians | `history-motion.js#historyDefaults` |
| `historyShoeRoll` | `0` | number | Native angle; source specifies degrees or radians | `history-motion.js#historyDefaults` |
| `historySpikeLength` | `0.28` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyFinalFire` | `0.65` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyFinalFireX` | `470` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyFinalFireY` | `150` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyFinalFireSize` | `250` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyFigureX` | `480` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyFigureY` | `490` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyFigureHeight` | `140` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyGrain` | `0.05` | number | Native renderer units; inspect linked implementation before conversion | `history-motion.js#historyDefaults` |
| `historyAftermathMode` | `"video"` | string | selection | `history-footage.js#aftermathDefaults` |
| `historyAftermathAIn` | `1` | number | seconds in the source video | `history-footage.js#aftermathDefaults` |
| `historyAftermathAOut` | `10.005` | number | seconds in the source video | `history-footage.js#aftermathDefaults` |
| `historyAftermathARate` | `1` | number | playback multiplier | `history-footage.js#aftermathDefaults` |
| `historyAftermathAX` | `0` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathAY` | `0.011111111111111112` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathAWidth` | `0.925` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathAHeight` | `0.925` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathBIn` | `1` | number | seconds in the source video | `history-footage.js#aftermathDefaults` |
| `historyAftermathBOut` | `10.005` | number | seconds in the source video | `history-footage.js#aftermathDefaults` |
| `historyAftermathBRate` | `1` | number | playback multiplier | `history-footage.js#aftermathDefaults` |
| `historyAftermathBX` | `0` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathBY` | `0` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathBWidth` | `1` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathBHeight` | `1` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
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
| `historyShots` | See JSON below | array | Source seconds and editable duration | `history-motion.js#historyStages` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "history-stage-chapter-factory-growth",
  "parameters": {
    "historyEnabled": true,
    "historyRate": 1,
    "historyEyeX": 586,
    "historyEyeY": 312,
    "historyEyeZoom": 34,
    "historyPush": 0.14,
    "historyReelCount": 7,
    "historyReelColor": "#b8bcc3",
    "historyOutline": "#eeeeea",
    "historySelectedOutline": "#7084df",
    "historyOutlineWidth": 4,
    "historyShoeColor": "#232426",
    "historyShoeSize": 620,
    "historyShoeYaw": -86,
    "historyShoePitch": 8,
    "historyShoeRoll": 0,
    "historySpikeLength": 0.28,
    "historyFinalFire": 0.65,
    "historyFinalFireX": 470,
    "historyFinalFireY": 150,
    "historyFinalFireSize": 250,
    "historyFigureX": 480,
    "historyFigureY": 490,
    "historyFigureHeight": 140,
    "historyGrain": 0.05,
    "historyAftermathMode": "video",
    "historyAftermathAIn": 1,
    "historyAftermathAOut": 10.005,
    "historyAftermathARate": 1,
    "historyAftermathAX": 0,
    "historyAftermathAY": 0.011111111111111112,
    "historyAftermathAWidth": 0.925,
    "historyAftermathAHeight": 0.925,
    "historyAftermathBIn": 1,
    "historyAftermathBOut": 10.005,
    "historyAftermathBRate": 1,
    "historyAftermathBX": 0,
    "historyAftermathBY": 0,
    "historyAftermathBWidth": 1,
    "historyAftermathBHeight": 1,
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
    "historyRoomShadow": 0.23,
    "historyShots": [
      {
        "id": "chapter-factory-growth",
        "from": 171.627,
        "to": 174.327,
        "duration": 2.700000000000003
      }
    ]
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
