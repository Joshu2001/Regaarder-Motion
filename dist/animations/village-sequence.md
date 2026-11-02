# Boys town and crafts

Stable ID: `village-sequence`

Window passage, two boys, town title, shoemaker and seamstress with foreground occlusion.

## Implementation

- [village-motion.js](../village-motion.js) — SHA-256 `ec37f24763927275e79489a4bb1548cb79cfec4fada416108e819441a8adfaa9`; functions: `villageState` (line 4).
- [village-scene.js](../village-scene.js) — SHA-256 `f6556f3a8bc13e8005ce2edc4aec2697b3ff58a019edea96d5bf1c3e4b1122f5`; functions: `plate` (line 12), `record` (line 13), `veil` (line 14), `createVillageScene` (line 15), `room` (line 17), `crossing` (line 18).
- [village-director.js](../village-director.js) — SHA-256 `e90217ed5dd9bca19946b025a70d3ca7fe755a8d3a9e92830eadf2f096b23e5e`; functions: `villageTiming` (line 6), `extendVillageDuration` (line 11), `repaintVillage` (line 15), `loadVillageAssets` (line 16), `resetVillageAssets` (line 18).
- [precision-motion.js](../precision-motion.js) — SHA-256 `9eef0a37366ecd4bd54ad1de908080b8df90fb9887279ed4cf29026d82c8db28`; functions: `precisionState` (line 4).
- [precision-scene.js](../precision-scene.js) — SHA-256 `d86686feded321c87c8e4194001464c6b8c424b016b5e2d90fc3864429448ae0`; functions: `plate` (line 5), `record` (line 6), `createPrecisionVillage` (line 7).

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
    "villageBoys",
    "villageTown",
    "villageWorkshop",
    "villageSeamstress"
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
| `villageEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageStart` | `0` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWindowTime` | `2.3` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageBoysHold` | `2.5` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageBoysExitTime` | `1.2` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTownHold` | `2.8` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageCraftWipeTime` | `1.7` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageCraftHold` | `4.5` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageClothWipeTime` | `2` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageSeamstressHold` | `3` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageFadeTime` | `0` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageEase` | `"smooth"` | string | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTransition` | `"occlude"` | string | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWindowZoom` | `3.8` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWindowX` | `440` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWindowY` | `130` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWindowBlur` | `2` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageBoysX` | `480` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageBoysY` | `335` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageBoysWidth` | `760` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageBoysPush` | `0.045` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageBoysOpacity` | `1` | number | Native scalar; legacy ranges vary | `village-motion.js#villageDefaults` |
| `villageBoysBlur` | `0.15` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageBoysExitX` | `-90` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageBoysExitY` | `650` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageBoysExitZoom` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageLeftName` | `"RUDI"` | string | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageRightName` | `"ADI"` | string | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageNameSize` | `25` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageNameY` | `450` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageLeftNameX` | `370` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageRightNameX` | `594` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageNameColor` | `"#ffffff"` | string | Renderer color value | `village-motion.js#villageDefaults` |
| `villageNameDelay` | `0.68` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTownX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTownY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTownScale` | `1.08` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTownPush` | `0.065` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTownBlur` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTownBrightness` | `0.88` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTownTitle` | `"Herzogenaurach"` | string | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTitleSize` | `46` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTitleX` | `480` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTitleY` | `110` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageTitleColor` | `"#c9832f"` | string | Renderer color value | `village-motion.js#villageDefaults` |
| `villageTitleAccent` | `"#693e37"` | string | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWorkshopX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWorkshopY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWorkshopScale` | `1.04` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWorkshopPush` | `0.055` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWorkshopTravel` | `-16` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWorkshopBrightness` | `0.86` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageWorkshopBlur` | `0.35` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageSeamstressX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageSeamstressY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageSeamstressScale` | `1.045` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageSeamstressPush` | `0.035` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageSeamstressTravel` | `-12` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageSeamstressBrightness` | `0.9` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageSeamstressBlur` | `0.4` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villagePassWidth` | `1500` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villagePassY` | `270` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villagePassTravel` | `2400` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villagePassBlur` | `4` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villagePassBrightness` | `0.65` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageEdgeLight` | `0.08` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageVignette` | `0.24` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageSaturation` | `0.8` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `villageDust` | `14` | number | Native renderer units; inspect linked implementation before conversion | `village-motion.js#villageDefaults` |
| `precisionEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionCloudSpeed` | `-14` | number | Native renderer rate; do not assume multiplier | `precision-motion.js#precisionDefaults` |
| `precisionCloudOpacity` | `0.82` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `precisionCloudY` | `-55` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionCloudWidth` | `980` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionSkyTop` | `"#064b90"` | string | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionSkyBottom` | `"#99c6de"` | string | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionArchitectureTravel` | `-10` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionArchitecturePush` | `0.16` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionMasonryWidth` | `900` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionMasonryTravel` | `510` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionMasonryY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionMasonryOpacity` | `1` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `precisionBoysDrift` | `-18` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionBoysEntryGrow` | `0.065` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionBoysExitX` | `-1350` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionBoysExitY` | `-12` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionBoysExitZoom` | `0.62` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionNamesTime` | `1.05` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTitleDelay` | `0.12` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTitleTime` | `0.8` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTitleDrop` | `115` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionLightPulse` | `0.22` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTransmissionAt` | `0.18` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTransmissionTime` | `0.65` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionPaneX` | `305` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionPaneY` | `-20` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionPaneWidth` | `300` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionPaneHeight` | `320` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionPaneBars` | `6` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionCraftFace` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionFaceWidth` | `1500` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionFaceY` | `330` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionFaceBlur` | `1.5` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryStart` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryPullTime` | `1.3` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapHold` | `5.7` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleTime` | `2` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleHold` | `2` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryFadeTime` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapScale` | `1.08` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapStartScale` | `2.7` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapEndScale` | `1.02` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapRotation` | `-3` | number | Native angle; source specifies degrees or radians | `precision-motion.js#precisionDefaults` |
| `laundryMapBrightness` | `1.1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapSaturation` | `1.15` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentWidth` | `84` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentStartWidth` | `300` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentX` | `680` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentY` | `275` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentSpread` | `150` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentCount` | `5` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentOpacity` | `1` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `laundryGarmentSway` | `1.5` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryCloudOpacity` | `0.72` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `laundryCloudSpeed` | `11` | number | Native renderer rate; do not assume multiplier | `precision-motion.js#precisionDefaults` |
| `laundryCloudWidth` | `740` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryCloudStart` | `1.7` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitle` | `"THE LAUNDRY BOYS"` | string | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleSize` | `52` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleX` | `480` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleY` | `295` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleColor` | `"#ffffff"` | string | Renderer color value | `precision-motion.js#precisionDefaults` |
| `laundryTitleTracking` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryVignette` | `0.2` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionExitAccel` | `2.2` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionNameScale` | `1.25` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTitleScale` | `1.2` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysLead` | `1.4` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysOpacity` | `0.64` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `windowBoysX` | `445` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysY` | `180` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysWidth` | `260` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysBlur` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysGlare` | `0.08` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureDuration` | `1.6849999999999996` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureStrength` | `1` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `gestureGridX` | `20` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureGridY` | `14` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureTiming` | `"reference"` | string | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureWomanX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureWomanY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureWomanScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureWomanRotation` | `0` | number | Native angle; source specifies degrees or radians | `precision-motion.js#precisionDefaults` |
| `gestureWomanGain` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureGarmentX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureGarmentY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureGarmentScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureGarmentRotation` | `0` | number | Native angle; source specifies degrees or radians | `precision-motion.js#precisionDefaults` |
| `gestureGarmentGain` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureArmX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureArmY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureArmScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureArmRotation` | `0` | number | Native angle; source specifies degrees or radians | `precision-motion.js#precisionDefaults` |
| `gestureArmGain` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin0X` | `365` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin0Y` | `105` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin0DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin0DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin1X` | `390` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin1Y` | `245` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin1DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin1DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin2X` | `418` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin2Y` | `475` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin2DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin2DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin3X` | `690` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin3Y` | `111` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin3DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin3DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin4X` | `690` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin4Y` | `268` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin4DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin4DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin5X` | `675` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin5Y` | `405` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin5DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin5DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin6X` | `350` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin6Y` | `405` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin6DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin6DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin7X` | `445` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin7Y` | `377` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin7DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin7DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin8X` | `535` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin8Y` | `360` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin8DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin8DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin9X` | `647` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin9Y` | `117` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin9DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin9DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureFaceLeft` | `270` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureFaceRight` | `455` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureFaceTop` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureFaceBottom` | `185` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureClothLeft` | `560` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureClothRight` | `840` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureClothTop` | `75` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureClothBottom` | `425` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "village-sequence",
  "parameters": {
    "villageEnabled": true,
    "villageStart": 0,
    "villageWindowTime": 2.3,
    "villageBoysHold": 2.5,
    "villageBoysExitTime": 1.2,
    "villageTownHold": 2.8,
    "villageCraftWipeTime": 1.7,
    "villageCraftHold": 4.5,
    "villageClothWipeTime": 2,
    "villageSeamstressHold": 3,
    "villageFadeTime": 0,
    "villageEase": "smooth",
    "villageTransition": "occlude",
    "villageWindowZoom": 3.8,
    "villageWindowX": 440,
    "villageWindowY": 130,
    "villageWindowBlur": 2,
    "villageBoysX": 480,
    "villageBoysY": 335,
    "villageBoysWidth": 760,
    "villageBoysPush": 0.045,
    "villageBoysOpacity": 1,
    "villageBoysBlur": 0.15,
    "villageBoysExitX": -90,
    "villageBoysExitY": 650,
    "villageBoysExitZoom": 0.5,
    "villageLeftName": "RUDI",
    "villageRightName": "ADI",
    "villageNameSize": 25,
    "villageNameY": 450,
    "villageLeftNameX": 370,
    "villageRightNameX": 594,
    "villageNameColor": "#ffffff",
    "villageNameDelay": 0.68,
    "villageTownX": 0,
    "villageTownY": 0,
    "villageTownScale": 1.08,
    "villageTownPush": 0.065,
    "villageTownBlur": 0.5,
    "villageTownBrightness": 0.88,
    "villageTownTitle": "Herzogenaurach",
    "villageTitleSize": 46,
    "villageTitleX": 480,
    "villageTitleY": 110,
    "villageTitleColor": "#c9832f",
    "villageTitleAccent": "#693e37",
    "villageWorkshopX": 0,
    "villageWorkshopY": 0,
    "villageWorkshopScale": 1.04,
    "villageWorkshopPush": 0.055,
    "villageWorkshopTravel": -16,
    "villageWorkshopBrightness": 0.86,
    "villageWorkshopBlur": 0.35,
    "villageSeamstressX": 0,
    "villageSeamstressY": 0,
    "villageSeamstressScale": 1.045,
    "villageSeamstressPush": 0.035,
    "villageSeamstressTravel": -12,
    "villageSeamstressBrightness": 0.9,
    "villageSeamstressBlur": 0.4,
    "villagePassWidth": 1500,
    "villagePassY": 270,
    "villagePassTravel": 2400,
    "villagePassBlur": 4,
    "villagePassBrightness": 0.65,
    "villageEdgeLight": 0.08,
    "villageVignette": 0.24,
    "villageSaturation": 0.8,
    "villageDust": 14,
    "precisionEnabled": true,
    "precisionCloudSpeed": -14,
    "precisionCloudOpacity": 0.82,
    "precisionCloudY": -55,
    "precisionCloudWidth": 980,
    "precisionSkyTop": "#064b90",
    "precisionSkyBottom": "#99c6de",
    "precisionArchitectureTravel": -10,
    "precisionArchitecturePush": 0.16,
    "precisionMasonryWidth": 900,
    "precisionMasonryTravel": 510,
    "precisionMasonryY": 0,
    "precisionMasonryOpacity": 1,
    "precisionBoysDrift": -18,
    "precisionBoysEntryGrow": 0.065,
    "precisionBoysExitX": -1350,
    "precisionBoysExitY": -12,
    "precisionBoysExitZoom": 0.62,
    "precisionNamesTime": 1.05,
    "precisionTitleDelay": 0.12,
    "precisionTitleTime": 0.8,
    "precisionTitleDrop": 115,
    "precisionLightPulse": 0.22,
    "precisionTransmissionAt": 0.18,
    "precisionTransmissionTime": 0.65,
    "precisionPaneX": 305,
    "precisionPaneY": -20,
    "precisionPaneWidth": 300,
    "precisionPaneHeight": 320,
    "precisionPaneBars": 6,
    "precisionCraftFace": true,
    "precisionFaceWidth": 1500,
    "precisionFaceY": 330,
    "precisionFaceBlur": 1.5,
    "laundryEnabled": true,
    "laundryStart": 0,
    "laundryPullTime": 1.3,
    "laundryMapHold": 5.7,
    "laundryTitleTime": 2,
    "laundryTitleHold": 2,
    "laundryFadeTime": 0,
    "laundryMapScale": 1.08,
    "laundryMapStartScale": 2.7,
    "laundryMapEndScale": 1.02,
    "laundryMapX": 0,
    "laundryMapY": 0,
    "laundryMapRotation": -3,
    "laundryMapBrightness": 1.1,
    "laundryMapSaturation": 1.15,
    "laundryGarmentWidth": 84,
    "laundryGarmentStartWidth": 300,
    "laundryGarmentX": 680,
    "laundryGarmentY": 275,
    "laundryGarmentSpread": 150,
    "laundryGarmentCount": 5,
    "laundryGarmentOpacity": 1,
    "laundryGarmentSway": 1.5,
    "laundryCloudOpacity": 0.72,
    "laundryCloudSpeed": 11,
    "laundryCloudWidth": 740,
    "laundryCloudStart": 1.7,
    "laundryTitle": "THE LAUNDRY BOYS",
    "laundryTitleSize": 52,
    "laundryTitleX": 480,
    "laundryTitleY": 295,
    "laundryTitleColor": "#ffffff",
    "laundryTitleTracking": 1,
    "laundryVignette": 0.2,
    "precisionExitAccel": 2.2,
    "precisionNameScale": 1.25,
    "precisionTitleScale": 1.2,
    "windowBoysEnabled": true,
    "windowBoysLead": 1.4,
    "windowBoysOpacity": 0.64,
    "windowBoysX": 445,
    "windowBoysY": 180,
    "windowBoysWidth": 260,
    "windowBoysBlur": 1,
    "windowBoysGlare": 0.08,
    "gestureEnabled": true,
    "gestureDuration": 1.6849999999999996,
    "gestureStrength": 1,
    "gestureGridX": 20,
    "gestureGridY": 14,
    "gestureTiming": "reference",
    "gestureWomanX": 0,
    "gestureWomanY": 0,
    "gestureWomanScale": 1,
    "gestureWomanRotation": 0,
    "gestureWomanGain": 1,
    "gestureGarmentX": 0,
    "gestureGarmentY": 0,
    "gestureGarmentScale": 1,
    "gestureGarmentRotation": 0,
    "gestureGarmentGain": 1,
    "gestureArmX": 0,
    "gestureArmY": 0,
    "gestureArmScale": 1,
    "gestureArmRotation": 0,
    "gestureArmGain": 1,
    "gesturePin0X": 365,
    "gesturePin0Y": 105,
    "gesturePin0DX": 0,
    "gesturePin0DY": 0,
    "gesturePin1X": 390,
    "gesturePin1Y": 245,
    "gesturePin1DX": 0,
    "gesturePin1DY": 0,
    "gesturePin2X": 418,
    "gesturePin2Y": 475,
    "gesturePin2DX": 0,
    "gesturePin2DY": 0,
    "gesturePin3X": 690,
    "gesturePin3Y": 111,
    "gesturePin3DX": 0,
    "gesturePin3DY": 0,
    "gesturePin4X": 690,
    "gesturePin4Y": 268,
    "gesturePin4DX": 0,
    "gesturePin4DY": 0,
    "gesturePin5X": 675,
    "gesturePin5Y": 405,
    "gesturePin5DX": 0,
    "gesturePin5DY": 0,
    "gesturePin6X": 350,
    "gesturePin6Y": 405,
    "gesturePin6DX": 0,
    "gesturePin6DY": 0,
    "gesturePin7X": 445,
    "gesturePin7Y": 377,
    "gesturePin7DX": 0,
    "gesturePin7DY": 0,
    "gesturePin8X": 535,
    "gesturePin8Y": 360,
    "gesturePin8DX": 0,
    "gesturePin8DY": 0,
    "gesturePin9X": 647,
    "gesturePin9Y": 117,
    "gesturePin9DX": 0,
    "gesturePin9DY": 0,
    "gestureFaceLeft": 270,
    "gestureFaceRight": 455,
    "gestureFaceTop": 0,
    "gestureFaceBottom": 185,
    "gestureClothLeft": 560,
    "gestureClothRight": 840,
    "gestureClothTop": 75,
    "gestureClothBottom": 425
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
