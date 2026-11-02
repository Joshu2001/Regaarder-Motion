# V94 · 15:00–16:00 draft
Source mapping: sourceTime = localTime + 900. 60 seconds appended after checkpoint readiness. Main template and reusable MotionCore action doc-final-minute.

Implemented: approximate shot schedule from one-second samples, legacy procedural handshake, generated hall / trophy / grouped team / stadium plates, editable title / flags / fire / TV bodies / masked screen slots. Per-layer JSON: visible, x, y, scale, rotation in degrees, opacity, blur. Per-shot image/video replacement; native rate 0.05–4.0. Settings saved with effects.

Limitations: this is a first structural draft, NOT a faithful finished reconstruction. No licensed archival motion acquired, so football / grass / studs / players / boots / goal / celebration shots use conspicuous illustrative proxies. Handshake does not use V93 anatomical rig. Generated team is one grouped raster surface, not three rigged actors. Trophy / hall interiors are raster plates, not granular editable 3D meshes. Procedural fire is approximate. Camera/cut timings are not frame-calibrated. No audio reconstruction. Native editing playback and upload restoration need browser verification. No live publication claimed.

Review workflow: deterministic 960x540 30fps silent preview and matching source comparison. No continuous 0.05x viewing claimed. Approximate cut boundaries documented in final-sequence.js. Existing V93 visual backlog retained. Do not advance 16:00–17:00 as if these gaps are resolved.

Install: copy the patch contents over the V93 project root, merging folders. Open through an HTTP server. The dist/index.html references final-director.js. Controls are in the documentary inspector under 15:00–16:00. Blank Composition animation library: Football final.
