# Title & letter motion

Stable ID: `depot-control-title`

Granular title & letter motion controls in the depot sequence.

## Implementation

- [depot.js](../depot.js) — SHA-256 `efb647ed9696bfa9a735b9c66e56e4e18c849720a8a5b69a8a63cec588a2f6d9`; functions: `repaintDepotAssets` (line 8), `updateDepotAssetStatus` (line 9), `reloadDepotAssets` (line 10), `paintDepotSmoke` (line 15), `renderDepot` (line 16), `seekDepot` (line 29), `depotObjectFields` (line 33), `depotMarkFields` (line 34), `renderDepotControls` (line 35).
- [depot-motion.js](../depot-motion.js) — SHA-256 `ec7ac95c78d75bc0ea3bbe63a12b5aa00ce86b65a65b18379fc3249281a740c6`; functions: `depotState` (line 4), `depotPlacement` (line 5), `depotEnvelope` (line 6), `depotPhase` (line 7).
- [depot-scene.js](../depot-scene.js) — SHA-256 `84ce38ca005a616ea88b489c5353373fe40eee1fe8949e357cf7d13c2823d211`; functions: `drawDepotInsignia` (line 7), `createDepotScene` (line 8), `cover` (line 8).
- [depot-camera.js](../depot-camera.js) — SHA-256 `048d5afa854182c7f1618004aa135da03f88de8ed3e580cab047cc1b82e503dd`; functions: `depotCamera` (line 4), `projectDepotObject` (line 5), `framePoint` (line 6), `drawPerspectiveFrame` (line 7), `tri` (line 7), `drawDepotSurface` (line 10).
- [depot-finale.js](../depot-finale.js) — SHA-256 `90d44881b9ad5d2ea000c1529e118d3a9fcdc6739813844d8d3385d329acbfc4`; functions: `finaleState` (line 19), `cloudDensity` (line 21), `createDepotFinale` (line 22), `sprite` (line 22), `texture` (line 22), `bolt` (line 26).
- [depot-glass.js](../depot-glass.js) — SHA-256 `2de5d5bcbd58586c4d7a39c0771c3370102a8affa116dbffb93ad54735217027`; functions: `fractureLayout` (line 6), `traceFracture` (line 7), `splitPath` (line 10), `shardLayout` (line 12), `outline` (line 13), `reflection` (line 14), `paintDepotGlass` (line 15).
- [depot-portal.js](../depot-portal.js) — SHA-256 `ce09769231e0808cc00d128e66b6dd6569f1a7a25981eddd17e773fe5689c32b`; functions: `portalState` (line 2), `portalEdge` (line 4), `paintPortal` (line 5).
- [depot-title.js](../depot-title.js) — SHA-256 `4cf8babebab60429e29d4d3718838015fc6f021b8c5c1dba9eaaa9352430529e`; functions: `titleEase` (line 2), `titleGlyphPose` (line 3), `paintDepotTitle` (line 4).
- [depot-director.js](../depot-director.js) — SHA-256 `a749ffc0ad176ea206367a20c9f0f3f281810cc65d211048f4303f24b6a5aadc`; functions: `directorEase` (line 7), `depotAnimatedSettings` (line 8).
- [depot-assets.js](../depot-assets.js) — SHA-256 `d1fae065e976135f37854b26afd31c510392dd6a14d3991f245c67d566943505`; functions: `depotAssetState` (line 3), `attachDepotAsset` (line 4), `depotFigureTexture` (line 6).

## Controls and compatibility

```json
{
  "adapter": "capability",
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
    "depotMountain",
    "depotRoom",
    "depotManLeft",
    "depotManRight",
    "depotCrate"
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
| `depotTitleStart` | `53.6` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotTitleTime` | `2.4` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleStagger` | `0.025` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleDistance` | `300` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleSize` | `62` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleSubtitleSize` | `27` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleY` | `300` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "depot-control-title",
  "parameters": {
    "depotTitleStart": 53.6,
    "depotTitleTime": 2.4,
    "depotTitleStagger": 0.025,
    "depotTitleDistance": 300,
    "depotTitleSize": 62,
    "depotTitleSubtitleSize": 27,
    "depotTitleY": 300
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
