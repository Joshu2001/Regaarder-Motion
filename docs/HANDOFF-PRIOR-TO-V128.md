# Resume V125

Baseline: restored saved V124 complete source. V125 continues that local code; no rebuild, publishing or repository operation. The source package contains minute16 and minute17 scene routes, not the entire historical project repository.

New module: dist/minute17-finishing.js. Reusable effects: localized hair wind, heat strip displacement, shaded textured logo surfaces, distant light field, ground mist, light streak, moving panel light mask, worn paper path and film wear. Each has named defaults and units in ANIMATIONS.md and effects-index.json.

New PNGs: six v125 products, generated product atlas and generated paper edge. They are generated presentation assets, not archival originals. Existing SVGs remain as alternatives. Original family-archival.png remains byte-identical. The selected comparison was used as the paper-edge generation reference; no original people were regenerated.

Routes: dist/minute17-editor.html and dist/review-16-18.html. Start with python3 -m http.server 8000 --directory dist. Imported images are embedded in exported presets. V124 presets migrate by merging new defaults; a migrated preset retains its prior transforms and timings unless the user changes them.

Read CHANGES-V125, ASSET-CREATION-GUIDELINES, ANIMATIONS, ARCHIVAL-USAGE and VISUAL-FIDELITY. Compare reference → V124 → V125 at matched timestamps, especially local10,16–24,26–28,30 and35.5–41. Hair/wind is a localized approximation requested by Joshua; original mechanism remains unresolved. No literal ball event was established; the pullback starts after the family figures enter.

Render: install @napi-rs/canvas and ffmpeg, then node --expose-gc scripts/render-minute17.mjs --video. The runtime fallback uses CODEX_PRIMARY_RUNTIME_NODE_MODULES. Use --expose-gc for bounded native raster memory. Test finishing controls with node --expose-gc scripts/check-finishing.mjs. Native production rendering is verified; browser interactions remain pending.
