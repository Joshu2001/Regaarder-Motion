# Arms open and falling money

Stable ID: `wartime-money`

Arms open and falling money; original 496–499.3 seconds.

## Implementation

- [wartime-sequence.js](../../dist/wartime-sequence.js) — SHA-256 `755ccf1067a8d208642a0a5193ac7662f7722536ba7d521e159bde05d0d528f4`; functions: `validateWartime` (line 35), `finite` (line 35), `wartimeDuration` (line 36), `wartimeSourceToLocal` (line 37), `wartimeState` (line 38), `cut` (line 40), `image` (line 42), `layer` (line 44), `sprite` (line 45), `plate` (line 46), `sky` (line 47), `title` (line 48), `hallBackground` (line 49), `wartimeWalkerPose` (line 51), `wartimeGaitPoints` (line 53), `walker` (line 54), `silhouettes` (line 59), `wartimeRevealPose` (line 61), `revealBlue` (line 62), `hall` (line 63), `wartimeMoneyPose` (line 65), `banknotes` (line 67), `stadium` (line 68), `wartimeAtlasFrame` (line 72), `drawAtlas` (line 73), `blast` (line 74), `wartimeFlashAmount` (line 75), `wartimeAircraftPose` (line 76), `wartimePropellerSample` (line 77), `aircraft` (line 78), `emblem` (line 81), `wartimeFactoryPose` (line 82), `factoryLightning` (line 83), `factoryFlash` (line 84), `exterior` (line 85), `wartimeWorkerPose` (line 86), `factory` (line 87), `wartimePortraitGeometry` (line 88), `portrait` (line 89), `flames` (line 90), `fireScene` (line 92), `burningHouse` (line 93), `family` (line 94), `paintWartime` (line 96).
- [betrayal-sequence.js](../../dist/betrayal-sequence.js) — SHA-256 `a9ea42fa80e533ba54be6fbda97223dbf3148d6ac0add59a551868b7d65d70a3`; functions: `validateBetrayal` (line 13), `finite` (line 13), `pathSettings` (line 14), `betrayalDuration` (line 15), `betrayalSourceToLocal` (line 16), `betrayalState` (line 17), `cut` (line 19), `layer` (line 20), `tinted` (line 21), `sprite` (line 22), `groundMatte` (line 23), `plate` (line 24), `sky` (line 25), `flash` (line 26), `rough` (line 27), `field` (line 28), `holder` (line 29), `glyph` (line 32), `podium` (line 33), `brothers` (line 35), `notes` (line 36), `parchment` (line 37), `world` (line 39), `factory` (line 40), `chapterShoeView` (line 42), `laterChapterParameters` (line 44), `chapterLightning` (line 45), `lightningPaths` (line 46), `paintSneakerChapter` (line 47), `chapter` (line 55), `focusedMeeting` (line 57), `paintBetrayal` (line 58).
- [depot-chapter.js](../../dist/depot-chapter.js) — SHA-256 `832b13b002ff1b53f5e0cc4202da4586ad7558838697be629834a76be4a67323`; functions: `glow` (line 8), `paintLogoExit` (line 9), `paintChapter` (line 10).
- [chapter-motion.js](../../dist/chapter-motion.js) — SHA-256 `3eef1420ebb8f5d13d0412de717ef0174da6e38b2593b2a7c64d0c7f615404ca`; functions: `chapterState` (line 4), `shardFall` (line 5), `chapterFocus` (line 7).
- [chapter-shoes.js](../../dist/chapter-shoes.js) — SHA-256 `e7986fc125d900985a4eb46f32d2523a04a9a17c85a9f1172e9b5cccd353b010`; functions: `shoePose` (line 5), `rotatePoint` (line 6), `rgb` (line 7), `last` (line 11), `upperPoint` (line 12), `shoeMesh` (line 13), `paintShoe` (line 65).

## Controls and compatibility

```json
{
  "adapter": "wartime-sequence",
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
    "wartHall",
    "wartStadium",
    "wartStadiumSky",
    "wartSky",
    "wartHouse",
    "wartChapterShoes",
    "wartSilhouettes",
    "wartBrotherA",
    "wartBrotherB",
    "wartGround",
    "wartBrothers",
    "wartSuccess",
    "wartWorker",
    "wartFamily",
    "wartAircraft",
    "wartBuilding",
    "wartSeated",
    "wartPortrait",
    "wartExplosion",
    "wartFlame",
    "wartFamilyRear",
    "wartFamilyTeen",
    "wartFamilyMother",
    "wartFamilyOlder",
    "wartFamilyBoy",
    "wartFamilyBoy2",
    "wartFireFrame0",
    "wartBlastFrame0",
    "wartFireFrame1",
    "wartBlastFrame1",
    "wartFireFrame2",
    "wartBlastFrame2",
    "wartFireFrame3",
    "wartBlastFrame3",
    "wartFireFrame4",
    "wartBlastFrame4",
    "wartFireFrame5",
    "wartBlastFrame5",
    "betrChapterShoes",
    "betrSpike",
    "betrHeldSpike",
    "betrHolder",
    "betrFingers",
    "betrSeated",
    "betrGround",
    "betrWinner",
    "betrSilver",
    "betrBronze",
    "betrBrotherA",
    "betrBrotherB",
    "betrFactory",
    "betrGeography"
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
| `wartimeEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeGaitSpeed` | `2.6` | number | walking cycles/second | `wartime-sequence.js#wartimeDefaults` |
| `wartimeTrafficSpeed` | `0.62` | number | passage cycles/second | `wartime-sequence.js#wartimeDefaults` |
| `wartimeMotionShutter` | `0.12` | number | seconds | `wartime-sequence.js#wartimeDefaults` |
| `wartimeCrowdBlur` | `8` | number | pixels | `wartime-sequence.js#wartimeDefaults` |
| `wartimeMoneySpeed` | `2.1` | number | multiplier | `wartime-sequence.js#wartimeDefaults` |
| `wartimeRevealBlue` | `0.65` | number | normalized intensity | `wartime-sequence.js#wartimeDefaults` |
| `wartimeCharacterMono` | `1` | number | normalized grayscale | `wartime-sequence.js#wartimeDefaults` |
| `wartimeChapterSettings` | See JSON below | object | opening chapter parameter object | `wartime-sequence.js#wartimeDefaults` |
| `wartimeHallAmbient` | `0.72` | number | exposure multiplier | `wartime-sequence.js#wartimeDefaults` |
| `wartimeFloorExposure` | `0.32` | number | normalized exposure | `wartime-sequence.js#wartimeDefaults` |
| `wartimeGroundExposure` | `0.3` | number | normalized exposure | `wartime-sequence.js#wartimeDefaults` |
| `wartimeMoneyBurst` | `1` | number | multiplier | `wartime-sequence.js#wartimeDefaults` |
| `wartimeMoneyLaunchSpeed` | `700` | number | pixels per second | `wartime-sequence.js#wartimeDefaults` |
| `wartimeMoneyGravity` | `380` | number | pixels per second squared | `wartime-sequence.js#wartimeDefaults` |
| `wartimePropellerRPM` | `1037` | number | revolutions per minute | `wartime-sequence.js#wartimeDefaults` |
| `wartimeAircraftBank` | `7` | number | degrees | `wartime-sequence.js#wartimeDefaults` |
| `wartimeAircraftYaw` | `11` | number | degrees | `wartime-sequence.js#wartimeDefaults` |
| `wartimeAircraftFlash` | `1` | number | multiplier | `wartime-sequence.js#wartimeDefaults` |
| `wartimeFactoryZoom` | `0.22` | number | zoom increment | `wartime-sequence.js#wartimeDefaults` |
| `wartimeWorkerEntryDuration` | `1.5` | number | seconds | `wartime-sequence.js#wartimeDefaults` |
| `wartimeChapterFlash` | `1` | number | multiplier | `wartime-sequence.js#wartimeDefaults` |
| `wartimeChapterLogoOpacity` | `0.07` | number | normalized opacity | `wartime-sequence.js#wartimeDefaults` |
| `wartimeRate` | `1` | number | multiplier | `wartime-sequence.js#wartimeDefaults` |
| `wartimeSceneDurations` | See JSON below | object | seconds per phase before speed | `wartime-sequence.js#wartimeDefaults` |
| `wartimeLayerEdits` | See JSON below | object | XY pixels, rotation degrees, object motion local seconds | `wartime-sequence.js#wartimeDefaults` |
| `wartimeSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeFullSources` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeCameraX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeCameraY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeCameraZoom` | `0` | number | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeFire` | `1` | number | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeSmoke` | `1` | number | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeNoteCount` | `48` | number | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeCloudSpeed` | `10` | number | pixels per second | `wartime-sequence.js#wartimeDefaults` |
| `wartimeEyeX` | `0.418` | number | normalized portrait width | `wartime-sequence.js#wartimeDefaults` |
| `wartimeEyeY` | `0.364` | number | normalized portrait height | `wartime-sequence.js#wartimeDefaults` |
| `wartimeSeed` | `78` | number | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeShoeCount` | `6` | number | count | `wartime-sequence.js#wartimeDefaults` |
| `wartimeSilhouetteCount` | `16` | number | count | `wartime-sequence.js#wartimeDefaults` |
| `wartimeSilhouetteOpacity` | `0.94` | number | normalized opacity | `wartime-sequence.js#wartimeDefaults` |
| `wartimeFireMotionRate` | `1` | number | multiplier | `wartime-sequence.js#wartimeDefaults` |
| `wartimeBlastExposure` | `1` | number | multiplier | `wartime-sequence.js#wartimeDefaults` |
| `wartimeFamilyDepth` | `1` | number | multiplier | `wartime-sequence.js#wartimeDefaults` |
| `wartimeEyeReflection` | `1` | number | normalized opacity | `wartime-sequence.js#wartimeDefaults` |
| `wartimeTitle` | `"THE BETRAYAL"` | string | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeChapter` | `"CHAPTER 3"` | string | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |
| `wartimeLetterbox` | `0` | number | Native renderer units; inspect linked implementation before conversion | `wartime-sequence.js#wartimeDefaults` |

## Limitations

- Generated fictional people and buildings, not archival evidence or exact likenesses.
- Foreground portraits are held photographic planes. Crowd uses authored 2D two-link walking rigs, not recovered performances or 3D.
- Changing credited filmed flame frames; generated-keyframe optical-flow blast, not fluid physics.
- Sampled reference timing; preview audio is user-supplied.
- Aircraft turns are2.5D bank/yaw projection of one photograph; no unseen model geometry. Propeller is hub-attached procedural shutter-sampled blades.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "wartime-money",
  "parameters": {
    "wartimeEnabled": true,
    "wartimeGaitSpeed": 2.6,
    "wartimeTrafficSpeed": 0.62,
    "wartimeMotionShutter": 0.12,
    "wartimeCrowdBlur": 8,
    "wartimeMoneySpeed": 2.1,
    "wartimeRevealBlue": 0.65,
    "wartimeCharacterMono": 1,
    "wartimeChapterSettings": {},
    "wartimeHallAmbient": 0.72,
    "wartimeFloorExposure": 0.32,
    "wartimeGroundExposure": 0.3,
    "wartimeMoneyBurst": 1,
    "wartimeMoneyLaunchSpeed": 700,
    "wartimeMoneyGravity": 380,
    "wartimePropellerRPM": 1037,
    "wartimeAircraftBank": 7,
    "wartimeAircraftYaw": 11,
    "wartimeAircraftFlash": 1,
    "wartimeFactoryZoom": 0.22,
    "wartimeWorkerEntryDuration": 1.5,
    "wartimeChapterFlash": 1,
    "wartimeChapterLogoOpacity": 0.07,
    "wartimeRate": 1,
    "wartimeSceneDurations": {},
    "wartimeLayerEdits": {},
    "wartimeSourceBindings": {},
    "wartimeFullSources": {},
    "wartimeCameraX": 0,
    "wartimeCameraY": 0,
    "wartimeCameraZoom": 0,
    "wartimeFire": 1,
    "wartimeSmoke": 1,
    "wartimeNoteCount": 48,
    "wartimeCloudSpeed": 10,
    "wartimeEyeX": 0.418,
    "wartimeEyeY": 0.364,
    "wartimeSeed": 78,
    "wartimeShoeCount": 6,
    "wartimeSilhouetteCount": 16,
    "wartimeSilhouetteOpacity": 0.94,
    "wartimeFireMotionRate": 1,
    "wartimeBlastExposure": 1,
    "wartimeFamilyDepth": 1,
    "wartimeEyeReflection": 1,
    "wartimeTitle": "THE BETRAYAL",
    "wartimeChapter": "CHAPTER 3",
    "wartimeLetterbox": 0
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
