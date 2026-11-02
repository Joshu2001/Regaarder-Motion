# Divided communities · factories water

Stable ID: `communities-factories-water`

Editable factories water from original12:55–13:55. Independent people, emblems, perspective water, erosion variants, gaze graphics and attached shoe masks.

## Implementation

- [communities-sequence.js](../communities-sequence.js) — SHA-256 `205d30158d5d3b1992783cf08cc5b3baaac791697630b529fb15ae612f7f8dfe`; functions: `validateCommunities` (line 11), `communitiesDuration` (line 12), `communitiesSourceToLocal` (line 13), `communitiesState` (line 14), `media` (line 15), `L` (line 16), `pic` (line 17), `person` (line 18), `cover` (line 19), `polygon` (line 20), `vig` (line 21), `sky` (line 22), `emblem` (line 23), `communitiesMapBoundary` (line 24), `mapScene` (line 25), `flare` (line 26), `water` (line 27), `town` (line 28), `school` (line 29), `schoolTransition` (line 30), `couple` (line 31), `gangs` (line 32), `surface` (line 33), `erode` (line 34), `title` (line 35), `communitiesMayorPose` (line 36), `coloredShoe` (line 37), `mayor` (line 38), `display` (line 39), `paintCommunities` (line 40).
- [communities-director.js](../communities-director.js) — SHA-256 `8cf9f422271cbca20377e80971337e4584cd5ea9527bbb3a38863580816de00b`; functions: `refresh` (line 3), `seek` (line 3), `read` (line 6).
- [communities-crops.js](../communities-crops.js) — SHA-256 `8c92e38d391a168657aad7c1072aeb1224a56a50b3b96f825a8a215112c413ae`; functions: inline/class renderer.

## Controls and compatibility

```json
{
  "adapter": "communities-sequence",
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
    "communitiesEmblemA",
    "communitiesEmblemB",
    "communitiesFounderA",
    "communitiesFounderB",
    "communitiesFatherA",
    "communitiesBoyA",
    "communitiesFatherB",
    "communitiesBoyB",
    "communitiesWoman",
    "communitiesMan",
    "communitiesLookerA",
    "communitiesLookerB",
    "communitiesGang0",
    "communitiesGang1",
    "communitiesGang2",
    "communitiesGang3",
    "communitiesGang4",
    "communitiesGang5",
    "communitiesRoom",
    "communitiesMayor",
    "communitiesSchool",
    "communitiesFactoryA",
    "communitiesFactoryB",
    "communitiesShoeA",
    "communitiesShoeB",
    "communitiesDisplayShoe",
    "communitiesStreet",
    "communitiesClouds",
    "communitiesCloudWisps",
    "communitiesTown",
    "communitiesGround"
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
| `communitiesEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesRate` | `1` | number | Playback multiplier | `communities-sequence.js#communitiesDefaults` |
| `communitiesSceneDurations` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesLayerEdits` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesCameraX` | `0` | number | Stage pixels | `communities-sequence.js#communitiesDefaults` |
| `communitiesCameraY` | `0` | number | Stage pixels | `communities-sequence.js#communitiesDefaults` |
| `communitiesCameraZoom` | `0` | number | Additive zoom;0 means1x | `communities-sequence.js#communitiesDefaults` |
| `communitiesTitle` | `"THE TOWN OF\|BENT NECKS"` | string | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesBlue` | `"#172782"` | string | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesRed` | `"#a1122b"` | string | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesRiverColor` | `"#347d96"` | string | Renderer color value | `communities-sequence.js#communitiesDefaults` |
| `communitiesWaterSpeed` | `1` | number | Ripple time multiplier | `communities-sequence.js#communitiesDefaults` |
| `communitiesCloudWind` | `12` | number | Stage pixels per source second | `communities-sequence.js#communitiesDefaults` |
| `communitiesErosionSoftness` | `0.035` | number | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesFlare` | `1` | number | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesGazeStrength` | `1` | number | Native scalar; legacy ranges vary | `communities-sequence.js#communitiesDefaults` |
| `communitiesTitleSize` | `70` | number | Stage pixels | `communities-sequence.js#communitiesDefaults` |
| `communitiesBlueShoe` | `"#3036bc"` | string | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesRedShoe` | `"#d91930"` | string | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesIllustrationLabel` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesGazePaths` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `communities-sequence.js#communitiesDefaults` |
| `communitiesShoeMasks` | See JSON below | object | Normalized coordinates in native trimmed seated-figure space | `communities-sequence.js#communitiesDefaults` |

## Limitations

- Generated illustrative people/architecture; still poses, no recovered3D/acting.
- V84 map geography retained; custom previous river-layer transforms may require manual bank-mask adjustment.
- Historical-style emblems authored approximately from visible reference; Puma silhouette reuses registered modern geometry.
- Authored water/erosion/cloud and camera curves; not original project recovery.
- Browser/GPU playback and persistence unverified.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "communities-factories-water",
  "parameters": {
    "communitiesEnabled": true,
    "communitiesRate": 1,
    "communitiesSceneDurations": {},
    "communitiesLayerEdits": {},
    "communitiesSourceBindings": {},
    "communitiesCameraX": 0,
    "communitiesCameraY": 0,
    "communitiesCameraZoom": 0,
    "communitiesTitle": "THE TOWN OF|BENT NECKS",
    "communitiesBlue": "#172782",
    "communitiesRed": "#a1122b",
    "communitiesRiverColor": "#347d96",
    "communitiesWaterSpeed": 1,
    "communitiesCloudWind": 12,
    "communitiesErosionSoftness": 0.035,
    "communitiesFlare": 1,
    "communitiesGazeStrength": 1,
    "communitiesTitleSize": 70,
    "communitiesBlueShoe": "#3036bc",
    "communitiesRedShoe": "#d91930",
    "communitiesIllustrationLabel": true,
    "communitiesGazePaths": {
      "a": [
        [
          0.2916666666666667,
          0.26666666666666666
        ],
        [
          0.6875,
          0.7851851851851852
        ],
        [
          0.78125,
          0.8592592592592593
        ]
      ],
      "b": [
        [
          0.6979166666666666,
          0.26666666666666666
        ],
        [
          0.203125,
          0.7851851851851852
        ],
        [
          0.296875,
          0.8592592592592593
        ]
      ]
    },
    "communitiesShoeMasks": {
      "blue": [
        [
          0.8,
          0.574
        ],
        [
          0.84,
          0.57
        ],
        [
          0.91,
          0.591
        ],
        [
          0.99,
          0.6
        ],
        [
          1,
          0.626
        ],
        [
          0.95,
          0.653
        ],
        [
          0.88,
          0.669
        ],
        [
          0.83,
          0.647
        ],
        [
          0.79,
          0.63
        ],
        [
          0.79,
          0.606
        ]
      ],
      "red": [
        [
          0.516,
          0.893
        ],
        [
          0.54,
          0.879
        ],
        [
          0.586,
          0.884
        ],
        [
          0.61,
          0.92
        ],
        [
          0.65,
          0.96
        ],
        [
          0.65,
          0.984
        ],
        [
          0.62,
          0.995
        ],
        [
          0.55,
          0.99
        ],
        [
          0.516,
          0.956
        ],
        [
          0.5,
          0.92
        ]
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
