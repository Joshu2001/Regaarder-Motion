# V125: minute17 cinematic refinements

Approved correction pass over V124. Existing minute16 files and original archival photograph remain unchanged.

- Wider portrait separation and editable final size. Localized hair motion affects only the top20 percent of each portrait; the rest draws directly from the source.
- Six photorealistic textile/leather product sprites replace the flat SVG defaults. Both colored socks are independently visible beside the portraits; old vectors are preserved.
- Logo silhouettes remain native assets. New material shading, subtle texture and displacement add depth without changing the brand geometry. Heat shimmer is independent of glow.
- Distant warm lights, layered foreground/background rain, ground mist and a right-side magenta streak remain separate deterministic effects.
- Family tableaux pull back from local16 to24.5 by default; light masks and smoke keep moving. Reflections now include the Puma wordmark and cat, with blur and a floor fade.
- The original photo moves as one plane until its authored split. Removed the clean metal-like rectangle; added an irregular paper clip, generated worn-paper perimeter and editable monochrome emulsion/grain/dust. The image file itself is byte-preserved.
- Added ASSET-CREATION-GUIDELINES.md containing Joshua's requested rules and script guidance. Story context comes from the recovered analysis: next-generation adult/son rivalry with cyan-left/red-right continuity; no new historical details invented.

## Evidence

The isolated hair render changes 8,496 upper-region pixels and zero pixels in the measured lower face/body region. Production reflection toggle changes the floor region but not the measured upper region. These demonstrate control isolation, not exact reference fidelity. See review/finishing-checks.json.

Native Canvas production renders and deterministic playback checks passed. Browser interactions remain unverified because no working Chromium binary is available in this environment. Generated products are illustrative, not archival originals. The hair/heat treatment and aged paper treatment approximate the desired appearance; they do not establish the original production method.
