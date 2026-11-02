# Dramatic globe · animated rivals and storm sky

Stable ID: `cinematic-globe-opening`

Story-timed brand entrances from opposing sides, independent logo depth/light sweeps and outward departure, rotating Earth/city-light reveal, layered cloud drift, branched electrical accents, accelerating approach and cloud wipe. Optional original synthesized sound in the main template.

## Implementation

- [globe-opening.js](../globe-opening.js) — SHA-256 `20af72121c45068b5ad8195285c729d1c80c5e26acf7637927a4e3eb5f68b162`; functions: `validateGlobe` (line 7), `keyed` (line 8), `globeState` (line 9), `offsetOpeningPhases` (line 10), `openingClock` (line 11), `texture` (line 13), `tint` (line 14), `sample` (line 15), `source` (line 16), `cover` (line 17), `flare` (line 18), `background` (line 19), `brands` (line 24), `divider` (line 25), `paintGlobeSphere` (line 29), `paintGlobeCloudHandoff` (line 36), `paintGlobeMap` (line 37), `paintGlobeOpening` (line 38).
- [globe-drama.js](../globe-drama.js) — SHA-256 `c384cec39249c523f06db28fcf02748f0eef97c1d07426a2c5aa7d1c788edea8`; functions: `dramaPulse` (line 3), `dramaBrandPose` (line 4), `dramaRadius` (line 6), `ready` (line 9), `colorPlate` (line 10), `image` (line 11), `paintDramaSky` (line 12), `paintDramaBrands` (line 14), `bolt` (line 17), `paintDramaElectric` (line 18), `paintDramaForeground` (line 23).
- [globe-audio.js](../globe-audio.js) — SHA-256 `2f8486eaf7b571a6ce169dc40964dda7677a493fcbfca3156e0a5e86457fbb31`; functions: `synthGlobeAudio` (line 2), `encodeGlobeWav` (line 6), `createGlobeSoundPlayer` (line 7).
- [globe-controls.js](../globe-controls.js) — SHA-256 `f32a3a36529b6f71232ae41ca96c6f95ec20e646f4dc77e886d62d6ddd00e40c`; functions: `mountGlobeControls` (line 2).

## Controls and compatibility

```json
{
  "adapter": "globe-opening",
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
    "globeDay",
    "globeNight",
    "globeNebula",
    "globeCloud",
    "globeAdidasBars",
    "globeAdidasWord",
    "globePuma",
    "globeMap"
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
| `globeEnabled` | `true` | boolean | boolean switch | `globe-opening.js#globeDefaults` |
| `globeDramatic` | `true` | boolean | boolean; false selects preserved V69 visual treatment | `globe-opening.js#globeDefaults` |
| `globeAnimateLogos` | `true` | boolean | boolean; logo entrance/sweep/depth/exit versus old brand planes | `globe-opening.js#globeDefaults` |
| `globeLogoEntryDuration` | `1.35` | number | native 0–6.25 curve seconds | `globe-opening.js#globeDefaults` |
| `globePumaDelay` | `0.3` | number | native curve seconds after Adidas entrance | `globe-opening.js#globeDefaults` |
| `globeLogoTravel` | `190` | number | stage pixels; initial opposing displacement | `globe-opening.js#globeDefaults` |
| `globeLogoDepth` | `0.65` | number | dimensionless parallax/exit multiplier | `globe-opening.js#globeDefaults` |
| `globeLogoTilt` | `2.5` | number | degrees | `globe-opening.js#globeDefaults` |
| `globeLogoExitStart` | `4.65` | number | native curve seconds | `globe-opening.js#globeDefaults` |
| `globeLogoSweep` | `0.7` | number | dimensionless sweep opacity | `globe-opening.js#globeDefaults` |
| `globeCloudDepth` | `1` | number | dimensionless layered cloud opacity | `globe-opening.js#globeDefaults` |
| `globeCloudDriftBoost` | `2.4` | number | dimensionless layer-speed multiplier | `globe-opening.js#globeDefaults` |
| `globeElectricalBranches` | `6` | number | integer branch count, 0–16 | `globe-opening.js#globeDefaults` |
| `globePulseTimes` | See JSON below | array | strictly increasing native curve seconds, 0–6.25 | `globe-opening.js#globeDefaults` |
| `globePulseStrength` | `0.7` | number | dimensionless flash multiplier | `globe-opening.js#globeDefaults` |
| `globeMotionBlur` | `0.6` | number | dimensionless radial approach accent opacity; not physical shutter simulation | `globe-opening.js#globeDefaults` |
| `globeRimBoost` | `1` | number | dimensionless rim growth multiplier | `globe-opening.js#globeDefaults` |
| `globeNightRevealDuration` | `3` | number | native curve seconds | `globe-opening.js#globeDefaults` |
| `globeTargetAdvance` | `0.75` | number | native curve seconds earlier target orientation | `globe-opening.js#globeDefaults` |
| `globeSoundEnabled` | `false` | boolean | boolean; opt-in main-template sound | `globe-opening.js#globeDefaults` |
| `globeSoundGain` | `0.55` | number | linear audio gain | `globe-opening.js#globeDefaults` |
| `globeLeadDuration` | `6.25` | number | seconds; default camera curve normalized from 6.25s | `globe-opening.js#globeDefaults` |
| `globeHandoffDuration` | `1` | number | seconds after globe lead | `globe-opening.js#globeDefaults` |
| `globeSpinSpeed` | `-1.5` | number | degrees per second | `globe-opening.js#globeDefaults` |
| `globeLongitude` | `20` | number | degrees east | `globe-opening.js#globeDefaults` |
| `globeLatitude` | `28` | number | degrees north | `globe-opening.js#globeDefaults` |
| `globeTargetLongitude` | `10.9` | number | degrees east | `globe-opening.js#globeDefaults` |
| `globeTargetLatitude` | `49.6` | number | degrees north | `globe-opening.js#globeDefaults` |
| `globeTargetStart` | `5.45` | number | normalized native camera seconds on 0–6.25s curve | `globe-opening.js#globeDefaults` |
| `globeFov` | `43` | number | vertical field of view in degrees | `globe-opening.js#globeDefaults` |
| `globeCenterX` | `480` | number | 960×540 stage pixels | `globe-opening.js#globeDefaults` |
| `globeCenterY` | `270` | number | 960×540 stage pixels | `globe-opening.js#globeDefaults` |
| `globeSize` | `1` | number | radius multiplier | `globe-opening.js#globeDefaults` |
| `globeNightStrength` | `1.3` | number | dimensionless scalar | `globe-opening.js#globeDefaults` |
| `globeSurfaceLight` | `0.13` | number | dimensionless scalar | `globe-opening.js#globeDefaults` |
| `globeRimStrength` | `1` | number | dimensionless scalar | `globe-opening.js#globeDefaults` |
| `globeCloudOpacity` | `0.1` | number | dimensionless scalar | `globe-opening.js#globeDefaults` |
| `globeCloudSpin` | `2.5` | number | degrees per second | `globe-opening.js#globeDefaults` |
| `globeSkySpeed` | `9` | number | stage pixels per second; each layer has independent multiplier | `globe-opening.js#globeDefaults` |
| `globeSkyBrightness` | `0.65` | number | dimensionless scalar | `globe-opening.js#globeDefaults` |
| `globeSkyBlue` | `"#1169bc"` | string | hex RGB color | `globe-opening.js#globeDefaults` |
| `globeSkyRed` | `"#9b174c"` | string | hex RGB color | `globe-opening.js#globeDefaults` |
| `globeSeamStrength` | `1` | number | dimensionless scalar | `globe-opening.js#globeDefaults` |
| `globeSeamWidth` | `2` | number | stage pixels | `globe-opening.js#globeDefaults` |
| `globeFlashStrength` | `0.65` | number | dimensionless scalar | `globe-opening.js#globeDefaults` |
| `globeFlareStrength` | `0.8` | number | dimensionless scalar | `globe-opening.js#globeDefaults` |
| `globeLogoOpacity` | `0.42` | number | dimensionless scalar | `globe-opening.js#globeDefaults` |
| `globeLogoGrowth` | `0.13` | number | scale increment per 5 native curve seconds | `globe-opening.js#globeDefaults` |
| `globeShowBrands` | `true` | boolean | boolean switch | `globe-opening.js#globeDefaults` |
| `globeShowClouds` | `true` | boolean | boolean switch | `globe-opening.js#globeDefaults` |
| `globeShowFlashes` | `true` | boolean | boolean switch | `globe-opening.js#globeDefaults` |
| `globeRenderScale` | `1` | number | sampling multiplier; output scale clamped 0.25–3 | `globe-opening.js#globeDefaults` |
| `globeSourceBindings` | See JSON below | object | named slot to source ID; media separate from motion | `globe-opening.js#globeDefaults` |
| `globeRadiusKeys` | See JSON below | array | [native curve seconds, projected radius in stage pixels] pairs | `globe-opening.js#globeDefaults` |

## Limitations

- Authored curves calibrated to reference samples, not recovered production curves.
- NASA 2004 surface and 2016 night data are modern geographic textures, not historical imagery.
- Procedural perspective sphere with texture projection; no recovered physical globe or original camera.
- After the cloud wipe the independent action uses the existing illustrative aerial map; the main template reveals its preserved map scene.
- CPU pixel renderer may reduce playback speed on slower devices; use Render Scale to trade preview sampling for speed.
- V70 is an authored dramatic interpretation using supplied narration cues, not a claim of exact reference reconstruction.
- Main-template sound is opt-in after a user gesture; independent composition actions remain visual and sound stems must be mixed separately.
- Review narration/audio comes from the supplied reference; synthesized sound master/stems contain no voice or third-party samples.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "cinematic-globe-opening",
  "parameters": {
    "globeEnabled": true,
    "globeDramatic": true,
    "globeAnimateLogos": true,
    "globeLogoEntryDuration": 1.35,
    "globePumaDelay": 0.3,
    "globeLogoTravel": 190,
    "globeLogoDepth": 0.65,
    "globeLogoTilt": 2.5,
    "globeLogoExitStart": 4.65,
    "globeLogoSweep": 0.7,
    "globeCloudDepth": 1,
    "globeCloudDriftBoost": 2.4,
    "globeElectricalBranches": 6,
    "globePulseTimes": [
      1.25,
      3.1,
      4.85
    ],
    "globePulseStrength": 0.7,
    "globeMotionBlur": 0.6,
    "globeRimBoost": 1,
    "globeNightRevealDuration": 3,
    "globeTargetAdvance": 0.75,
    "globeSoundEnabled": false,
    "globeSoundGain": 0.55,
    "globeLeadDuration": 6.25,
    "globeHandoffDuration": 1,
    "globeSpinSpeed": -1.5,
    "globeLongitude": 20,
    "globeLatitude": 28,
    "globeTargetLongitude": 10.9,
    "globeTargetLatitude": 49.6,
    "globeTargetStart": 5.45,
    "globeFov": 43,
    "globeCenterX": 480,
    "globeCenterY": 270,
    "globeSize": 1,
    "globeNightStrength": 1.3,
    "globeSurfaceLight": 0.13,
    "globeRimStrength": 1,
    "globeCloudOpacity": 0.1,
    "globeCloudSpin": 2.5,
    "globeSkySpeed": 9,
    "globeSkyBrightness": 0.65,
    "globeSkyBlue": "#1169bc",
    "globeSkyRed": "#9b174c",
    "globeSeamStrength": 1,
    "globeSeamWidth": 2,
    "globeFlashStrength": 0.65,
    "globeFlareStrength": 0.8,
    "globeLogoOpacity": 0.42,
    "globeLogoGrowth": 0.13,
    "globeShowBrands": true,
    "globeShowClouds": true,
    "globeShowFlashes": true,
    "globeRenderScale": 1,
    "globeSourceBindings": {},
    "globeRadiusKeys": [
      [
        0,
        45
      ],
      [
        1,
        49
      ],
      [
        2,
        58
      ],
      [
        3,
        74
      ],
      [
        4,
        94
      ],
      [
        4.5,
        105
      ],
      [
        5,
        132
      ],
      [
        5.25,
        160
      ],
      [
        5.5,
        254
      ],
      [
        5.75,
        660
      ],
      [
        6,
        1600
      ],
      [
        6.25,
        2400
      ]
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
