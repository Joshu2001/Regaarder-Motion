# Photographic walk · both arms and hands

Stable ID: `classic-walk-with-hands`

Original classic photographic artwork with shoulder, elbow and wrist movement on both arms; torch follows the hand. Pace, amplitudes and attachment points editable. Artwork-specific polygon calibration and a clone-texture undercoat patch, not automatic rigging.

## Implementation

- [cutout-walk.js](../cutout-walk.js) — SHA-256 `dcb1fca9e74bce970059d1ca73947d0260bf6d8c0c1a4ac1a78b31894afbaf76`; functions: `parts` (line 3), `cutoutWalkPose` (line 4), `deformWalkArm` (line 5), `paintArmMesh` (line 6), `paintCutoutWalk` (line 7).

## Controls and compatibility

```json
{
  "adapter": "cutout-walk",
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
    "walkSource"
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
| `walkFrontShoulderX` | `474` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontShoulderY` | `287` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontElbowX` | `491` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontElbowY` | `523` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontWristX` | `554` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontWristY` | `720` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackShoulderX` | `618` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackShoulderY` | `458` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackElbowX` | `704` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackElbowY` | `595` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackWristX` | `766` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackWristY` | `625` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkArmSwing` | `7` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontArmFactor` | `1.15` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackArmFactor` | `1` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkElbowSwing` | `4` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkWristSwing` | `2` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkArmsEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#classic-walk-with-hands` |
| `walkRate` | `0.85` | number | Native renderer rate; do not assume multiplier | `cutout-walk.js#cutoutWalkDefaults` |
| `walkStride` | `12` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkKnee` | `10` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkPhase` | `0` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBob` | `3` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkEdgeThreshold` | `100` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkRig` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |

## Limitations

- Original few-piece puppet retained unchanged. Select Natural mesh walk for expanded joints and deformation.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "classic-walk-with-hands",
  "parameters": {
    "walkFrontShoulderX": 474,
    "walkFrontShoulderY": 287,
    "walkFrontElbowX": 491,
    "walkFrontElbowY": 523,
    "walkFrontWristX": 554,
    "walkFrontWristY": 720,
    "walkBackShoulderX": 618,
    "walkBackShoulderY": 458,
    "walkBackElbowX": 704,
    "walkBackElbowY": 595,
    "walkBackWristX": 766,
    "walkBackWristY": 625,
    "walkArmSwing": 7,
    "walkFrontArmFactor": 1.15,
    "walkBackArmFactor": 1,
    "walkElbowSwing": 4,
    "walkWristSwing": 2,
    "walkArmsEnabled": true,
    "walkRate": 0.85,
    "walkStride": 12,
    "walkKnee": 10,
    "walkPhase": 0,
    "walkBob": 3,
    "walkEdgeThreshold": 100,
    "walkRig": {
      "width": 1024,
      "height": 1536,
      "hip": [
        520,
        930
      ],
      "backKnee": [
        310,
        1160
      ],
      "frontKnee": [
        700,
        1170
      ],
      "flashlight": [
        850,
        690
      ],
      "parts": {
        "body": [
          [
            0,
            0
          ],
          [
            1024,
            0
          ],
          [
            1024,
            960
          ],
          [
            0,
            960
          ]
        ],
        "backThigh": [
          [
            350,
            890
          ],
          [
            550,
            940
          ],
          [
            390,
            1195
          ],
          [
            220,
            1160
          ]
        ],
        "backShin": [
          [
            235,
            1120
          ],
          [
            405,
            1160
          ],
          [
            370,
            1475
          ],
          [
            45,
            1475
          ],
          [
            45,
            1320
          ]
        ],
        "frontThigh": [
          [
            500,
            890
          ],
          [
            740,
            900
          ],
          [
            810,
            1200
          ],
          [
            600,
            1210
          ]
        ],
        "frontShin": [
          [
            600,
            1130
          ],
          [
            805,
            1120
          ],
          [
            860,
            1290
          ],
          [
            980,
            1370
          ],
          [
            965,
            1490
          ],
          [
            620,
            1490
          ]
        ]
      }
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
