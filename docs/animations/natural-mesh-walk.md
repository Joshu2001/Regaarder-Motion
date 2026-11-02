# Natural mesh walk · feet, body and coat

Stable ID: `natural-mesh-walk`

Natural walking with15 editable joints, two-bone leg IK, stance-matched root travel, smooth foot swing, heel/toe roll, torso/head/arm movement and a deformable coat. Visual joint/part calibration, presets and sliders require no code.

## Implementation

- [mesh-walk.js](../../dist/mesh-walk.js) — SHA-256 `7b11d7dfe9ff1e91d4fd48250ba14ed11453a257bddbb8193b50ee8b0c547b21`; functions: `solveWalkIK` (line 6), `walkFootTarget` (line 7), `meshWalkPose` (line 8), `partImage` (line 9), `getWalkPartImage` (line 10), `triangle` (line 11), `walkBoneMesh` (line 12), `bone` (line 13), `paintMeshWalk` (line 14), `validateWalkParameters` (line 15).
- [walk-controls.js](../../dist/walk-controls.js) — SHA-256 `17a9a004c3a3ccb4a65f74b46e3ea1b60e6b0d969dfb3d3446848eb000f196db`; functions: `mountWalkControls` (line 4), `jointFields` (line 4), `attachment` (line 4), `drawCalibration` (line 4), `draw` (line 4), `tick` (line 4).
- [walk-studio-director.js](../../dist/walk-studio-director.js) — SHA-256 `830d2dae6635d35bccd7c2aca6000af6b20d13423f84a16992c109f74a57e1a1`; functions: inline/class renderer.

## Controls and compatibility

```json
{
  "adapter": "mesh-walk",
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
    "walkAtlas"
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
| `walkCycleRate` | `0.85` | number | cycles per second | `mesh-walk.js#meshWalkDefaults` |
| `walkStepLength` | `210` | number | rig units in1000-unit frame | `mesh-walk.js#meshWalkDefaults` |
| `walkStance` | `0.64` | number | fraction of cycle | `mesh-walk.js#meshWalkDefaults` |
| `walkLift` | `52` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkHipBob` | `7` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkHipSway` | `5` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkHipRoll` | `2` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkTorsoLean` | `9` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkTorsoTwist` | `4` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkHeadNod` | `3` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkArmSwing` | `15` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkElbowBend` | `18` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkWristRoll` | `4` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkCoatFlutter` | `9` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkBreath` | `2` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkFootRoll` | `16` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkGroundSlope` | `0` | number | rig rise/run | `mesh-walk.js#meshWalkDefaults` |
| `walkThighLength` | `185` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkShinLength` | `185` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkBodyWidth` | `1` | number | multiplier | `mesh-walk.js#meshWalkDefaults` |
| `walkLimbWidth` | `1` | number | multiplier | `mesh-walk.js#meshWalkDefaults` |
| `walkMeshColumns` | `6` | number | integer subdivisions | `mesh-walk.js#meshWalkDefaults` |
| `walkMeshRows` | `12` | number | integer subdivisions | `mesh-walk.js#meshWalkDefaults` |
| `walkFacing` | `1` | number | direction1/-1 | `mesh-walk.js#meshWalkDefaults` |
| `walkPhase` | `0` | number | cycle offset | `mesh-walk.js#meshWalkDefaults` |
| `walkMode` | `"walk"` | string | Native renderer units; inspect linked implementation before conversion | `mesh-walk.js#meshWalkDefaults` |
| `walkHeadSize` | `1` | number | multiplier | `mesh-walk.js#meshWalkDefaults` |
| `walkFootSize` | `1` | number | multiplier | `mesh-walk.js#meshWalkDefaults` |
| `walkHeadAngle` | `0` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkFrontFootAngle` | `0` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkBackFootAngle` | `0` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkPartAnchors` | See JSON below | object | normalized start/end source points | `mesh-walk.js#meshWalkDefaults` |
| `walkPosePhase` | `0.2` | number | fraction of cycle | `mesh-walk.js#meshWalkDefaults` |
| `walkTorchTipX` | `0.91` | number | normalized source X | `mesh-walk.js#meshWalkDefaults` |
| `walkTorchTipY` | `0.88` | number | normalized source Y | `mesh-walk.js#meshWalkDefaults` |
| `walkJointOffsets` | See JSON below | object | rig-unit XY offsets by joint | `mesh-walk.js#meshWalkDefaults` |
| `walkPartBindings` | See JSON below | object | source-slot mapping | `mesh-walk.js#meshWalkDefaults` |
| `walkPartRects` | See JSON below | object | source pixels at1280px atlas, resolution-scaled at runtime | `mesh-walk.js#meshWalkDefaults` |

## Limitations

- Photographic 2D articulated mesh; not a full3D reconstruction or automatic rig for arbitrary photographs.
- Foot planting is exact for matched linear root travel and flat ground; camera reframing and uneven ground require calibration.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "natural-mesh-walk",
  "parameters": {
    "walkCycleRate": 0.85,
    "walkStepLength": 210,
    "walkStance": 0.64,
    "walkLift": 52,
    "walkHipBob": 7,
    "walkHipSway": 5,
    "walkHipRoll": 2,
    "walkTorsoLean": 9,
    "walkTorsoTwist": 4,
    "walkHeadNod": 3,
    "walkArmSwing": 15,
    "walkElbowBend": 18,
    "walkWristRoll": 4,
    "walkCoatFlutter": 9,
    "walkBreath": 2,
    "walkFootRoll": 16,
    "walkGroundSlope": 0,
    "walkThighLength": 185,
    "walkShinLength": 185,
    "walkBodyWidth": 1,
    "walkLimbWidth": 1,
    "walkMeshColumns": 6,
    "walkMeshRows": 12,
    "walkFacing": 1,
    "walkPhase": 0,
    "walkMode": "walk",
    "walkHeadSize": 1,
    "walkFootSize": 1,
    "walkHeadAngle": 0,
    "walkFrontFootAngle": 0,
    "walkBackFootAngle": 0,
    "walkPartAnchors": {},
    "walkPosePhase": 0.2,
    "walkTorchTipX": 0.91,
    "walkTorchTipY": 0.88,
    "walkJointOffsets": {
      "head": [
        -10,
        32
      ]
    },
    "walkPartBindings": {},
    "walkPartRects": {
      "torso": [
        35,
        5,
        370,
        400
      ],
      "head": [
        470,
        45,
        365,
        355
      ],
      "coat": [
        840,
        5,
        410,
        405
      ],
      "thigh": [
        110,
        418,
        225,
        400
      ],
      "shin": [
        550,
        418,
        160,
        395
      ],
      "boot": [
        825,
        505,
        420,
        290
      ],
      "upperarm": [
        75,
        815,
        275,
        415
      ],
      "torcharm": [
        445,
        805,
        395,
        405
      ],
      "forearm": [
        935,
        800,
        245,
        415
      ]
    }
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
