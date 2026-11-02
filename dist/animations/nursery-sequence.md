# 1898 mother cradle and window

Stable ID: `nursery-sequence`

Date assembly, lateral room reveal, foreground occlusion and window approach.

## Implementation

- [nursery-motion.js](../nursery-motion.js) — SHA-256 `f8f8f9921a7f36a36aeaa936e1896ee47dee48a9d56f6e7fe8d5820e025eeda5`; functions: `nurseryState` (line 5).
- [nursery-scene.js](../nursery-scene.js) — SHA-256 `c9b5215611cea7e0ae85d6ed79b0eb3c7dd62095080c99aca0db6317d4eeae0b`; functions: `smoothTrace` (line 19), `trace` (line 20), `paintDate` (line 21), `plate` (line 24), `createNurseryScene` (line 25).
- [nursery-director.js](../nursery-director.js) — SHA-256 `d93a3ff8b3a93d025b5d3e4e45325ae0dfae37d5a9b7ac8f839378c6fb2e4e46`; functions: `nurseryTiming` (line 4), `repaintNursery` (line 7), `reloadNurseryAssets` (line 8).
- [window-calibration.js](../window-calibration.js) — SHA-256 `15925dc4e4544da9806d6e723c27447b179da35f0cbf1f93158951d8d5ddf81f`; functions: `panePolygons` (line 2).
- [window-presence.js](../window-presence.js) — SHA-256 `00f68dc5648d98b3bf2fc6eb31757a1a372a03094ad81839d642c81ccae414cf`; functions: `paintWindowPresence` (line 9).

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
    "nurseryMother",
    "nurseryCradle",
    "nurseryPasser"
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
| `nurseryEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryGap` | `0.45` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryStart` | `0` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryDate` | `"1898"` | string | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryDateSize` | `54` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryDateX` | `480` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryDateY` | `282` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryDateColor` | `"#f4e4cb"` | string | Renderer color value | `nursery-motion.js#nurseryDefaults` |
| `nurseryDateGlow` | `8` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryDateWidth` | `4.2` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryDateBlur` | `0.35` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryDateMode` | `"stroke"` | string | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryWriteTime` | `1.6` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryDateHold` | `0.45` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryRoomTime` | `2.3` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryMotherHold` | `2` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryPassTime` | `2.6` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryCradleHold` | `3.6` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryExitTime` | `0` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryCameraEase` | `"smooth"` | string | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryMotherX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryMotherY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryMotherScale` | `1.04` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryMotherPush` | `0.025` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryMotherOpacity` | `1` | number | Native scalar; legacy ranges vary | `nursery-motion.js#nurseryDefaults` |
| `nurseryMotherBlur` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryCradleX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryCradleY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryCradleScale` | `1.025` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryCradlePush` | `0.025` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryCradleOpacity` | `1` | number | Native scalar; legacy ranges vary | `nursery-motion.js#nurseryDefaults` |
| `nurseryCradleBlur` | `0.55` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryCameraTravel` | `110` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryRoomBrightness` | `0.84` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurserySaturation` | `0.78` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryEntranceBlur` | `3` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryFocusTime` | `1.6` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryVignette` | `0.28` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryWindowLight` | `0.07` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryLightX` | `600` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryLightY` | `100` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryParticles` | `16` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryPassWidth` | `1100` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryPassY` | `270` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryPassBlur` | `3` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryPassBrightness` | `0.6` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryPassOpacity` | `1` | number | Native scalar; legacy ranges vary | `nursery-motion.js#nurseryDefaults` |
| `nurseryPassTravel` | `2240` | number | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |
| `nurseryTransition` | `"occlude"` | string | Native renderer units; inspect linked implementation before conversion | `nursery-motion.js#nurseryDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "nursery-sequence",
  "parameters": {
    "nurseryEnabled": true,
    "nurseryGap": 0.45,
    "nurseryStart": 0,
    "nurseryDate": "1898",
    "nurseryDateSize": 54,
    "nurseryDateX": 480,
    "nurseryDateY": 282,
    "nurseryDateColor": "#f4e4cb",
    "nurseryDateGlow": 8,
    "nurseryDateWidth": 4.2,
    "nurseryDateBlur": 0.35,
    "nurseryDateMode": "stroke",
    "nurseryWriteTime": 1.6,
    "nurseryDateHold": 0.45,
    "nurseryRoomTime": 2.3,
    "nurseryMotherHold": 2,
    "nurseryPassTime": 2.6,
    "nurseryCradleHold": 3.6,
    "nurseryExitTime": 0,
    "nurseryCameraEase": "smooth",
    "nurseryMotherX": 0,
    "nurseryMotherY": 0,
    "nurseryMotherScale": 1.04,
    "nurseryMotherPush": 0.025,
    "nurseryMotherOpacity": 1,
    "nurseryMotherBlur": 0.5,
    "nurseryCradleX": 0,
    "nurseryCradleY": 0,
    "nurseryCradleScale": 1.025,
    "nurseryCradlePush": 0.025,
    "nurseryCradleOpacity": 1,
    "nurseryCradleBlur": 0.55,
    "nurseryCameraTravel": 110,
    "nurseryRoomBrightness": 0.84,
    "nurserySaturation": 0.78,
    "nurseryEntranceBlur": 3,
    "nurseryFocusTime": 1.6,
    "nurseryVignette": 0.28,
    "nurseryWindowLight": 0.07,
    "nurseryLightX": 600,
    "nurseryLightY": 100,
    "nurseryParticles": 16,
    "nurseryPassWidth": 1100,
    "nurseryPassY": 270,
    "nurseryPassBlur": 3,
    "nurseryPassBrightness": 0.6,
    "nurseryPassOpacity": 1,
    "nurseryPassTravel": 2240,
    "nurseryTransition": "occlude"
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
