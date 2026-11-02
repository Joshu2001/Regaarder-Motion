# V44 review — fire, cloud passage and replaceable title fill

28 October 2026 (Taipei). Continues v43; original boy artwork and the uploaded woman gesture remain unchanged.

## What changed and why

The previous fire renderer compressed the complete flame image into the bottom 40% of an already shallow rectangle. The new renderer uses the registered photographed footage, its table-scene source crop, and aspect-preserving repeated emitters. Lower foreground placement, opacity and warm flickering light remain separate controls. The light is an illustrative screen-composited glow, not a physically simulated surface-lighting pass. Repeated source footage can still reveal similar flame patterns.

The previous cloud passage used flat fills and radial gradients, then reduced opacity to reveal the next scene. It now uses a generated volumetric cloud texture in moving layers with an irregular edge. The map stays visible beneath the advancing bank; the cloud bank covers the frame before the scene switch. Brightness changes retain cloud detail. The lower edge moves upward to uncover the fully drawn warm sky rather than fading the sky in. Drift, texture scale, opacity, duration and source remain editable. This is a reconstruction with moving textured planes, not a volumetric fluid simulation or an exact recovery of the reference. The original generated PNG and exact prompt are in assets/transition-cloud-generation-v44.json.

The title remains editable text. Its silhouette can contain a replaceable image with independently adjustable drift, scale, amount and background color, or use a solid text color. The default cloud image has its own stable asset and source slot, so replacing it cannot alter exterior clouds. A shared silhouette-fill effect is available to compatible images/video, and reusable text layers also expose a separate image fill. Source alpha is used as a mask; fill pixels cannot spill outside the silhouette. A cloud fill is a source image, not an AI-generated video.

All 93 catalog entries, including inactive/rejected candidates, now have descriptions, description-review status and context. Specific current assets have explicit visual roles; legacy entries derived from existing labels are marked as needing subject review. New shot relationships link the map, garment routes, title texture, cloud passage, sky, figures and fire. Narration/audio fields remain explicitly pending; no transcript, sound inference, AI editing service or automatic semantic understanding has been invented. Per-asset descriptions can be edited and downloaded from the effects panel; those local overrides stay with project settings.

## Editing

Under Make it yours, open Title · image fill or color. Change the words, choose Image inside letters or Solid color, then replace the fill image or adjust color, scale, drift and amount. Each text layer also has its own replaceable fill image in its layer controls. Shared effects can be saved as reusable presets.

Under Cloud reveal & fire / Advanced, adjust fire top/height/light and cloud drift/scale. Replace the transition cloud texture with its own replacement button. Prior custom settings are preserved rather than reset automatically; an imported v43 preset may retain its older fire dimensions and must be adjusted with these controls.

## Validation

28 check scripts pass. Added checks cover texture replacement, solid color, alpha confinement, natural flame crop aspect ratio, full textured cloud coverage before the background switch, retained dark-cloud variance, movement exposing the sky, independent title/exterior bindings and descriptions for every catalog entry. Existing source replacement, parallax, asset retention and other scene checks also pass. Offline entrance, cloud coverage, dark phase, sky edge reveal, title and flame stills were inspected and revised.

Live-browser controls and synchronized native-speed reference comparison remain unverified. Passing checks does not establish an exact visual match. Review video is provided for the user's visual approval.
