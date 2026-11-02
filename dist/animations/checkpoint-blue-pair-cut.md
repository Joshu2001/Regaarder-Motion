# 15-minute checkpoint · blue pair cut

Stable ID: `checkpoint-blue-pair-cut`

V88 connected 51-joint skinned mannequin refinement of source14:55–15:00. Thin table, curved chair supports, folded-arm coach, measured cut and blue profile shot. Legacy V87 remains available with checkpointRefinementEnabled=false.

## Implementation

- [checkpoint-sequence.js](../checkpoint-sequence.js) — SHA-256 `f6101477289755625d0862b5b3f46a46665134b3f2ef74049be276575813dc34`; functions: `validateCheckpoint` (line 13), `checkpointDuration` (line 14), `checkpointSourceToLocal` (line 15), `checkpointState` (line 16), `blendPose` (line 17), `localPose` (line 18), `seatedPose` (line 19), `foldedCoach` (line 20), `checkpointPose` (line 21), `surface` (line 27), `layer` (line 28), `rigLayer` (line 29), `smoke` (line 30), `boot` (line 31), `drawScene` (line 32), `paintCheckpoint` (line 34).
- [checkpoint-director.js](../checkpoint-director.js) — SHA-256 `d1393d5a92f59601875aab709576b9e30c87264acce51b77a3577538527b1b96`; functions: `refresh` (line 3), `seek` (line 3), `read` (line 6).
- [checkpoint-stages.js](../checkpoint-stages.js) — SHA-256 `d4134a64db294ebf4980066380c4f7f8227a11ebd48d32993a7e143da07f6397`; functions: inline/class renderer.
- [opportunity-rig.js](../opportunity-rig.js) — SHA-256 `277ca8daaff72103cb4fb5375e46d5baa958a3e517c240e56ad25a96ab6b86e8`; functions: `projection` (line 4), `rgb` (line 5), `geometryScene` (line 7), `ellipsoid` (line 10), `bone` (line 11), `box` (line 12), `mannequinPose` (line 13), `mannequin` (line 14), `chair` (line 15), `desk` (line 16).
- [v88/sequence.js](../v88/sequence.js) — SHA-256 `bb346d33c375a25a62fdcf32bddc2a8ee48846992e4654d8ecf2916f9e1b9568`; functions: `refinementPose` (line 10), `tube` (line 11), `chair` (line 12), `cylinder` (line 13), `hat` (line 14), `smoke` (line 16), `paintRefinement` (line 17), `editPose` (line 24).
- [v88/skin.js](../v88/skin.js) — SHA-256 `9c460c69c09cc81362621532b4685dd7d5fd42bf2036563923d6a37ba01a5736`; functions: `align` (line 8), `yawMatrix` (line 9), `pose` (line 10), `skin` (line 13), `drawBody` (line 14).
- [v88/render.js](../v88/render.js) — SHA-256 `4066c417c7543f3c93071e89c8849a41a2c276d760779146ffd285b96df4c0af`; functions: `projection` (line 4), `rgb` (line 5), `geometryScene` (line 7), `shade` (line 11).
- [v88/mesh-data.js](../v88/mesh-data.js) — SHA-256 `58976423ddde7b95e4b7aa443d48a47877937079aa0e16d1e2349d02f0ade146`; functions: inline/class renderer.
- [v88/camera-keys.js](../v88/camera-keys.js) — SHA-256 `7225d6671e71e16e242ddcbe914cf77ddafcf8870b703e62047c675bf2c68b62`; functions: inline/class renderer.

## Controls and compatibility

```json
{
  "adapter": "checkpoint-sequence",
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
    "checkpointBoot"
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
| `checkpointNative3DEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointNative3DScene` | See JSON below | null | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementRedYaw` | `1.5707963267948966` | number | Native angle; source specifies degrees or radians | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementCoachYaw` | `1.5707963267948966` | number | Native angle; source specifies degrees or radians | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementBlueYaw` | `1.5707963267948966` | number | Native angle; source specifies degrees or radians | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementBlueCoachYaw` | `-1.3707963267948966` | number | Native angle; source specifies degrees or radians | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementEnabled` | `true` | boolean | Boolean; false restores legacy V87 | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementCamera` | See JSON below | array | EyeXYZ, targetXYZ in authored meters; focal in stage pixels | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementRedRoot` | See JSON below | array | World XYZ meters | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementCoachRoot` | See JSON below | array | World XYZ meters | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementBlueRoot` | See JSON below | array | World XYZ meters | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementBlueCoachRoot` | See JSON below | array | World XYZ meters | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementBend` | `1` | number | Torso flexion multiplier | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRefinementLight` | `1` | number | Key-light intensity multiplier | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRate` | `1` | number | Playback multiplier | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointSceneDurations` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointLayerEdits` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointJointOffsets` | See JSON below | object | World-space joint offsets by rig name | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointCameraKeys` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointJointKeys` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointCameraX` | `0` | number | Stage pixels | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointCameraY` | `0` | number | Stage pixels | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointCameraZoom` | `0` | number | Additive zoom | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointSitStrength` | `1` | number | Seated pose blend strength | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointCoachTravel` | `1` | number | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointFocusStrength` | `1` | number | Scene defocus multiplier | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointSmoke` | `1` | number | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointOrbit` | `1` | number | Blue-scene camera orbit multiplier | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointRed` | `"#d82c22"` | string | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointCream` | `"#d8d6bb"` | string | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointBlue` | `"#164a9c"` | string | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointChairPosition` | See JSON below | array | World units XYZ | `checkpoint-sequence.js#checkpointDefaults` |
| `checkpointIllustrationLabel` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `checkpoint-sequence.js#checkpointDefaults` |

## Limitations

- Authored geometry/camera/acting, not recovered original production assets.
- Reference silhouette IoU and 2% landmark tolerances have not been certified.
- Hands, seated performance, smoke and scene join remain approximate.
- glTF exports preserve skeletal editability; native CPU and imported material appearance differ.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "checkpoint-blue-pair-cut",
  "parameters": {
    "checkpointNative3DEnabled": true,
    "checkpointNative3DScene": null,
    "checkpointRefinementRedYaw": 1.5707963267948966,
    "checkpointRefinementCoachYaw": 1.5707963267948966,
    "checkpointRefinementBlueYaw": 1.5707963267948966,
    "checkpointRefinementBlueCoachYaw": -1.3707963267948966,
    "checkpointRefinementEnabled": true,
    "checkpointRefinementCamera": [
      0,
      1,
      4,
      0,
      1,
      0,
      1100
    ],
    "checkpointRefinementRedRoot": [
      -1.166,
      0,
      0.5
    ],
    "checkpointRefinementCoachRoot": [
      0.85,
      -0.09,
      -0.1
    ],
    "checkpointRefinementBlueRoot": [
      -0.6,
      0,
      0.3
    ],
    "checkpointRefinementBlueCoachRoot": [
      0.5,
      -0.15,
      -0.6
    ],
    "checkpointRefinementBend": 1,
    "checkpointRefinementLight": 1,
    "checkpointEnabled": true,
    "checkpointRate": 1,
    "checkpointSceneDurations": {},
    "checkpointLayerEdits": {},
    "checkpointSourceBindings": {},
    "checkpointJointOffsets": {
      "coach": {},
      "red": {},
      "blue": {}
    },
    "checkpointCameraKeys": [],
    "checkpointJointKeys": {
      "coach": {},
      "red": {},
      "blue": {}
    },
    "checkpointCameraX": 0,
    "checkpointCameraY": 0,
    "checkpointCameraZoom": 0,
    "checkpointSitStrength": 1,
    "checkpointCoachTravel": 1,
    "checkpointFocusStrength": 1,
    "checkpointSmoke": 1,
    "checkpointOrbit": 1,
    "checkpointRed": "#d82c22",
    "checkpointCream": "#d8d6bb",
    "checkpointBlue": "#164a9c",
    "checkpointChairPosition": [
      1.65,
      0,
      -0.15
    ],
    "checkpointIllustrationLabel": true
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
