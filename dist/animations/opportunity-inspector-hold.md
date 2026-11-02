# Divided opportunity · inspector hold

Stable ID: `opportunity-inspector-hold`

Editable inspector hold from original13:55–14:55. Independent boot stripes, curved panels, inspector cutout, trophy, per-letter title, trusses, reused seal, articulated mannequins, true depth-buffered camera, palm-attached boot, desk, chair and smoke.

## Implementation

- [opportunity-sequence.js](../opportunity-sequence.js) — SHA-256 `7b2e8ea0258ed34c4f32f8b188bbe81ebea22ae418dedb1dc7b5aa6ccb961f00`; functions: `validateOpportunity` (line 13), `opportunityDuration` (line 14), `opportunitySourceToLocal` (line 15), `opportunityState` (line 16), `opportunityBlack` (line 17), `surface` (line 18), `media` (line 19), `L` (line 20), `pic` (line 21), `cover` (line 22), `vig` (line 23), `tinted` (line 24), `clouds` (line 25), `boot` (line 26), `ledge` (line 27), `street` (line 28), `inspector` (line 29), `bowed` (line 30), `panels` (line 31), `flare` (line 32), `rivals` (line 33), `trophy` (line 34), `chapter` (line 35), `paintOpportunityBadge` (line 37), `tunnel` (line 38), `smoke` (line 39), `opportunityNegotiation` (line 40), `rigLayer` (line 41), `negotiation` (line 42), `office` (line 43), `officeReveal` (line 44), `paintOpportunity` (line 45).
- [opportunity-director.js](../opportunity-director.js) — SHA-256 `9f6c7a61a81adee3f3637ee0679bf6430147f14440fdbfed5e0c8eb0b200f61b`; functions: `refresh` (line 3), `seek` (line 3), `read` (line 6).
- [opportunity-crops.js](../opportunity-crops.js) — SHA-256 `0451aa651f0bd4c4e24dc61cded88ecb6c4fc241bf036baf417e8425e77f6eb1`; functions: inline/class renderer.
- [opportunity-stages.js](../opportunity-stages.js) — SHA-256 `050efb87adb4596525519642460a788c160c92ab823f48a31cd5feedb655770e`; functions: inline/class renderer.
- [opportunity-rig.js](../opportunity-rig.js) — SHA-256 `277ca8daaff72103cb4fb5375e46d5baa958a3e517c240e56ad25a96ab6b86e8`; functions: `projection` (line 4), `rgb` (line 5), `geometryScene` (line 7), `ellipsoid` (line 10), `bone` (line 11), `box` (line 12), `mannequinPose` (line 13), `mannequin` (line 14), `chair` (line 15), `desk` (line 16).

## Controls and compatibility

```json
{
  "adapter": "opportunity-sequence",
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
    "opportunityBootA",
    "opportunityBootB",
    "opportunityInspector",
    "opportunityTrophy",
    "opportunityBall",
    "opportunityPortrait",
    "opportunityStreet",
    "opportunityFounderA",
    "opportunityFounderB",
    "opportunityClouds"
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
| `opportunityEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityRate` | `1` | number | Playback multiplier | `opportunity-sequence.js#opportunityDefaults` |
| `opportunitySceneDurations` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityLayerEdits` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunitySourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityCameraX` | `0` | number | Stage pixels | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityCameraY` | `0` | number | Stage pixels | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityCameraZoom` | `0` | number | Additive zoom | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityCloudWind` | `9` | number | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityFlare` | `1` | number | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityTitle` | `"THE MIRACLE OF BERN"` | string | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityChapter` | `"CHAPTER 5:"` | string | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityTitleSize` | `48` | number | Stage pixels | `opportunity-sequence.js#opportunityDefaults` |
| `opportunitySmoke` | `1` | number | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityOrbit` | `1` | number | Authored orbit multiplier | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityGesture` | `1` | number | Joint gesture multiplier | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityBend` | `1` | number | Final bend multiplier | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityIllustrationLabel` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityPanelTravel` | `570` | number | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityPanelCurvature` | `0.1` | number | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityStripeRevealStart` | `849.9` | number | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityStripeRevealEnd` | `850.8` | number | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityStripeMasks` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityRigOffsets` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityCameraKeys` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |
| `opportunityChairPosition` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `opportunity-sequence.js#opportunityDefaults` |

## Limitations

- Generated illustrative people and objects, approximate historical appearance.
- Authored rig and camera motion, not recovered original animation.
- Reference smoke, badge and office details are approximations.
- Browser playback and persistence unverified.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "opportunity-inspector-hold",
  "parameters": {
    "opportunityEnabled": true,
    "opportunityRate": 1,
    "opportunitySceneDurations": {},
    "opportunityLayerEdits": {},
    "opportunitySourceBindings": {},
    "opportunityCameraX": 0,
    "opportunityCameraY": 0,
    "opportunityCameraZoom": 0,
    "opportunityCloudWind": 9,
    "opportunityFlare": 1,
    "opportunityTitle": "THE MIRACLE OF BERN",
    "opportunityChapter": "CHAPTER 5:",
    "opportunityTitleSize": 48,
    "opportunitySmoke": 1,
    "opportunityOrbit": 1,
    "opportunityGesture": 1,
    "opportunityBend": 1,
    "opportunityIllustrationLabel": true,
    "opportunityPanelTravel": 570,
    "opportunityPanelCurvature": 0.1,
    "opportunityStripeRevealStart": 849.9,
    "opportunityStripeRevealEnd": 850.8,
    "opportunityStripeMasks": [
      [
        [
          0.43,
          0.24
        ],
        [
          0.475,
          0.26
        ],
        [
          0.35,
          0.74
        ],
        [
          0.3,
          0.76
        ]
      ],
      [
        [
          0.5,
          0.24
        ],
        [
          0.545,
          0.26
        ],
        [
          0.42,
          0.74
        ],
        [
          0.37,
          0.76
        ]
      ],
      [
        [
          0.57,
          0.24
        ],
        [
          0.615,
          0.26
        ],
        [
          0.49,
          0.74
        ],
        [
          0.44,
          0.76
        ]
      ]
    ],
    "opportunityRigOffsets": {
      "coach": {},
      "red": {}
    },
    "opportunityCameraKeys": [],
    "opportunityChairPosition": [
      2.5,
      0,
      -0.15
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
