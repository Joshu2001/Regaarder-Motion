# Tree scene boundary

Stable ID: `tree-occlusion-pass`

Foreground tree covers a moving clip boundary between team and factory; four directions.

## Implementation

- [chapter-sequence.js](../../dist/chapter-sequence.js) — SHA-256 `25bba8853f5d67e4e47f901bdc5659fee274331258fb0f48b48a349425264e1a`; functions: `chapterSequenceState` (line 63), `restoreChapterImage` (line 64), `resolveChapterMedia` (line 65), `chapterCutout` (line 67), `chapterLayerRect` (line 74), `sprite` (line 75), `imageLayer` (line 79), `vignette` (line 80), `black` (line 81), `editedSurface` (line 82), `sky` (line 83), `ground` (line 84), `skyRaw` (line 85), `groundRaw` (line 86), `roleWord` (line 99), `roomBack` (line 101), `room` (line 102), `transformFactoryRect` (line 124), `factory` (line 125), `fireMedia` (line 135), `chapterEyePoint` (line 136), `eyeFire` (line 137), `rivalry` (line 138), `glyph` (line 148), `chapterTitle` (line 149), `personAt` (line 156), `sports` (line 157), `growthTableau` (line 165), `growth` (line 171), `chapterOcclusionEdge` (line 172), `clipSide` (line 173), `treePass` (line 174), `poseHandoff` (line 175), `paintChapterSequence` (line 176), `paintChapterWindowJoin` (line 180), `paintChapterRoomLeadIn` (line 183).

## Controls and compatibility

```json
{
  "adapter": "chapter-sequence",
  "preview": {
    "availability": "Add & preview in the composition editor"
  },
  "capabilities": {
    "playback": "Shared blank-layer clock: speed, reverse, delay, pause, easing, slow/fast",
    "parameters": "Independent per-instance copies; nested JSON editable",
    "media": "Independent named source-slot bindings",
    "direction": "Four geometric travel directions",
    "geometry": "Images remain planes; full unseen object reconstruction is not implemented."
  },
  "slots": [
    "chapterRoom",
    "chapterWindow",
    "chapterPot1",
    "chapterPot2",
    "chapterPot3",
    "chapterYoungRudi",
    "chapterYoungAdi",
    "chapterShelf",
    "chapterVase",
    "chapterSill",
    "chapterFactoryOld",
    "chapterFence",
    "chapterBike",
    "chapterGround",
    "chapterSky",
    "chapterHeadAdi",
    "chapterHeadRudi",
    "chapterBrandAdi",
    "chapterBrandRudi",
    "chapterRoleTexture",
    "chapterTitleTexture",
    "chapterFireTexture",
    "chapterHorizon",
    "chapterSalesman",
    "chapterTree",
    "chapterOlderAdi",
    "chapterOlderRudi",
    "chapterOpenAdi",
    "chapterOpenRudi",
    "chapterFactoryNew",
    "chapterProp1",
    "chapterProp2",
    "chapterProp3",
    "chapterProp4",
    "chapterProp5",
    "chapterProp6",
    "chapterProp7",
    "chapterProp8",
    "chapterAthlete1",
    "chapterAthlete2",
    "chapterAthlete3",
    "chapterAthlete4",
    "chapterAthlete5",
    "chapterAthlete6",
    "chapterAthlete7",
    "chapterAthlete8",
    "chapterAthlete9",
    "chapterAthlete10",
    "chapterAthlete11",
    "chapterAthlete12"
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
| `chapterSequenceEnabled` | `true` | boolean | Boolean | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterLayerEdits` | See JSON below | object | Per-slot x/y px, scale multiplier, opacity 0–1, depth units, rotation degrees, light multiplier and blur px. | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSourceBindings` | See JSON below | object | Per-source overrides; see CHAPTER-V65.json | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterEdgeAlpha` | `110` | number | Alpha byte threshold (0–255) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoomDirection` | `1` | number | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTreeDirection` | `"left"` | string | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPoseDirection` | `"left"` | string | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterJoinDirection` | `"right"` | string | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPosePixelsPerSecond` | `1400` | number | Pixels per clip second | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesText` | `"SALES"` | string | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterManufacturingText` | `"MANUFACTURING"` | string | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleSmall` | `"CHAPTER 2:"` | string | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleText` | `"THE NAZI OLYMPICS"` | string | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesFont` | `250` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterManufacturingFont` | `104` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleFont` | `58` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleColor` | `"#f6c55b"` | string | CSS color | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoleColor` | `"#e5edf4"` | string | CSS color | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoleFillMode` | `"image"` | string | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleFillMode` | `"color"` | string | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTextureSpeed` | `12` | number | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTextureScale` | `1` | number | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesStart` | `0.15` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesReveal` | `1.1` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoomSwapStart` | `3` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoomSwapEnd` | `4.4` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterManufactureStart` | `7.1` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterManufactureEnd` | `8.7` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPairStart` | `10.7` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterWireStart` | `13.1` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryCut` | `16.45` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRivalryStart` | `20.6` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterEyeFireStart` | `21.8` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundFireStart` | `22.1` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFadeStart` | `28.7` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBlackStart` | `30.3` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleStart` | `32.8` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleAssembleEnd` | `34.2` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleRetreatEnd` | `39.5` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleBlack` | `41.2` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSportsStart` | `42.2` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesmanStart` | `43.4` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesmanEnd` | `44.8` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTreeStart` | `47.8` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTreeEnd` | `49.4` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPoseStart` | `52.1` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSequenceDuration` | `52.95` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryInitialZoom` | `4.8` | number | Dimensionless multiplier / fraction | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryDecay` | `1.4` | number | Inverse seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryWidth` | `500` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryY` | `145` | number | Native renderer value; see implementation | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundHorizon` | `425` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundTextureScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundRoughness` | `0.72` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundForegroundDarkness` | `0.48` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundGrayscale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundBrightness` | `0.9` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundContactShadow` | `0.62` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundDepthStrength` | `1` | number | Native scalar; legacy ranges vary | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryBaseY` | `445` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFenceScale` | `0.72` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBikeScale` | `0.58` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBikeX` | `380` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBikeY` | `378` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterWindowRecess` | `48` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterWindowPerspective` | `1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryEntryLift` | `0` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBikeGroundY` | `445` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFenceGroundY` | `475` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoomRetreat` | `0.16` | number | Dimensionless multiplier / fraction | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryRetreat` | `0.3` | number | Dimensionless multiplier / fraction | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleRetreat` | `0.3` | number | Dimensionless multiplier / fraction | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSportsRetreat` | `0.18` | number | Dimensionless multiplier / fraction | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterHeadSize` | `520` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterHeadYaw` | `84` | number | Degrees | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPanelBlue` | `"#113b58"` | string | CSS color | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPanelRed` | `"#621221"` | string | CSS color | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterLeftEyeU` | `0.78` | number | Normalized image coordinate (0–1) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterLeftEyeV` | `0.48` | number | Normalized image coordinate (0–1) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRightEyeU` | `0.29` | number | Normalized image coordinate (0–1) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRightEyeV` | `0.48` | number | Normalized image coordinate (0–1) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterEyeFireSize` | `74` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFireStrength` | `0.82` | number | Dimensionless multiplier / fraction | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFireHeight` | `180` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterHeadLight` | `0.85` | number | Dimensionless multiplier / fraction | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleScatterX` | `560` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleScatterY` | `200` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleBlur` | `22` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGlyphDelay` | `0.018` | number | Native renderer value; see implementation | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPropCount` | `8` | number | Integer | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPropSpeed` | `36` | number | Pixels per clip second | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPropSeed` | `17` | number | Integer | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSkyWind` | `19` | number | Pixels per clip second | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSkyEvolution` | `0.12` | number | Noise evolution rate per second | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterHorizonBlur` | `7` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTeamCount` | `12` | number | Integer | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesmanSize` | `390` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTreeWidth` | `600` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTreeBlur` | `1.4` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterMarkerEnabled` | `false` | boolean | Boolean | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterMarkerColor` | `"#3857ff"` | string | CSS color | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterMarkerSize` | `22` | number | Stage pixels (960×540) | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterJoinDuration` | `1.042` | number | Clip seconds | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBridgeStatus` | `"authored; original diagram-to-room bridge not supplied"` | string | String or documented direction enum | `chapter-sequence.js#chapterSequenceDefaults` |

## Limitations

- Illustrative reconstruction; missing bridge now has separate V67 commerce actions. Current chapter ends mid-pose; no full anatomical or 3D recovery.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "tree-occlusion-pass",
  "parameters": {
    "chapterSequenceEnabled": true,
    "chapterLayerEdits": {},
    "chapterSourceBindings": {},
    "chapterEdgeAlpha": 110,
    "chapterRoomDirection": 1,
    "chapterTreeDirection": "left",
    "chapterPoseDirection": "left",
    "chapterJoinDirection": "right",
    "chapterPosePixelsPerSecond": 1400,
    "chapterSalesText": "SALES",
    "chapterManufacturingText": "MANUFACTURING",
    "chapterTitleSmall": "CHAPTER 2:",
    "chapterTitleText": "THE NAZI OLYMPICS",
    "chapterSalesFont": 250,
    "chapterManufacturingFont": 104,
    "chapterTitleFont": 58,
    "chapterTitleColor": "#f6c55b",
    "chapterRoleColor": "#e5edf4",
    "chapterRoleFillMode": "image",
    "chapterTitleFillMode": "color",
    "chapterTextureSpeed": 12,
    "chapterTextureScale": 1,
    "chapterSalesStart": 0.15,
    "chapterSalesReveal": 1.1,
    "chapterRoomSwapStart": 3,
    "chapterRoomSwapEnd": 4.4,
    "chapterManufactureStart": 7.1,
    "chapterManufactureEnd": 8.7,
    "chapterPairStart": 10.7,
    "chapterWireStart": 13.1,
    "chapterFactoryCut": 16.45,
    "chapterRivalryStart": 20.6,
    "chapterEyeFireStart": 21.8,
    "chapterGroundFireStart": 22.1,
    "chapterFadeStart": 28.7,
    "chapterBlackStart": 30.3,
    "chapterTitleStart": 32.8,
    "chapterTitleAssembleEnd": 34.2,
    "chapterTitleRetreatEnd": 39.5,
    "chapterTitleBlack": 41.2,
    "chapterSportsStart": 42.2,
    "chapterSalesmanStart": 43.4,
    "chapterSalesmanEnd": 44.8,
    "chapterTreeStart": 47.8,
    "chapterTreeEnd": 49.4,
    "chapterPoseStart": 52.1,
    "chapterSequenceDuration": 52.95,
    "chapterFactoryInitialZoom": 4.8,
    "chapterFactoryDecay": 1.4,
    "chapterFactoryWidth": 500,
    "chapterFactoryY": 145,
    "chapterGroundHorizon": 425,
    "chapterGroundTextureScale": 1,
    "chapterGroundRoughness": 0.72,
    "chapterGroundForegroundDarkness": 0.48,
    "chapterGroundGrayscale": 1,
    "chapterGroundBrightness": 0.9,
    "chapterGroundContactShadow": 0.62,
    "chapterGroundDepthStrength": 1,
    "chapterFactoryBaseY": 445,
    "chapterFenceScale": 0.72,
    "chapterBikeScale": 0.58,
    "chapterBikeX": 380,
    "chapterBikeY": 378,
    "chapterWindowRecess": 48,
    "chapterWindowPerspective": 1,
    "chapterFactoryEntryLift": 0,
    "chapterBikeGroundY": 445,
    "chapterFenceGroundY": 475,
    "chapterRoomRetreat": 0.16,
    "chapterFactoryRetreat": 0.3,
    "chapterTitleRetreat": 0.3,
    "chapterSportsRetreat": 0.18,
    "chapterHeadSize": 520,
    "chapterHeadYaw": 84,
    "chapterPanelBlue": "#113b58",
    "chapterPanelRed": "#621221",
    "chapterLeftEyeU": 0.78,
    "chapterLeftEyeV": 0.48,
    "chapterRightEyeU": 0.29,
    "chapterRightEyeV": 0.48,
    "chapterEyeFireSize": 74,
    "chapterFireStrength": 0.82,
    "chapterFireHeight": 180,
    "chapterHeadLight": 0.85,
    "chapterTitleScatterX": 560,
    "chapterTitleScatterY": 200,
    "chapterTitleBlur": 22,
    "chapterGlyphDelay": 0.018,
    "chapterPropCount": 8,
    "chapterPropSpeed": 36,
    "chapterPropSeed": 17,
    "chapterSkyWind": 19,
    "chapterSkyEvolution": 0.12,
    "chapterHorizonBlur": 7,
    "chapterTeamCount": 12,
    "chapterSalesmanSize": 390,
    "chapterTreeWidth": 600,
    "chapterTreeBlur": 1.4,
    "chapterMarkerEnabled": false,
    "chapterMarkerColor": "#3857ff",
    "chapterMarkerSize": 22,
    "chapterJoinDuration": 1.042,
    "chapterBridgeStatus": "authored; original diagram-to-room bridge not supplied"
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
