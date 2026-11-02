# V52 aftermath video replacement

The approved generated battlefield and convoy clips replace only the two ruined-street still views after the first number-wheel transition. The first video uses a reversible crop to exclude its bottom-right subscription graphic and thin white top border. The second uses its full frame. No source file was edited or re-encoded.

## Exact timing and framing

| Item | Battlefield A | Convoy B |
|---|---|---|
| Stable original asset ID | `war-aftermath-battlefield-v52` | `war-aftermath-convoy-v52` |
| Renderer slot | `historyAftermathA` | `historyAftermathB` |
| Legacy stage ID retained | `ruins-wide` | `ruins-close` |
| History source age | 7.383–9.415 s | 9.415–11.758 s |
| Default visible duration | 2.032 s | 2.343 s |
| Source in | 1 s | 1 s |
| Source rate | 1× | 1× |
| Default source span used | 1–3.032 s | 1–3.343 s |
| Crop at 1280×720 | x0, y8, width1184, height666 | Full1280×720 |
| Normalized crop | x0, y0.011111111111111112, width0.925, height0.925 | x0, y0, width1, height1 |
| Audio | Original audio retained; template muted | Original audio retained; template muted |

The number-wheel transition reveals the first cropped video frame. The second video replaces the former closer crop directly. Subsequent shoulder/room motion, portraits, shoe scenes and final ruined-street composite retain their previous timing. Both source clips are approximately10seconds; the source-out controls default to10.005seconds and do not lengthen the stage. Changes to the stage duration and source speed remain independent.

## Simple editing and recovery

Open **Next chapter → War aftermath**. Replace either video through the existing versioned asset uploader. Its prior replacement is retained by that uploader. Source in/out, speed and crop controls are separate for each clip. **Restore full original frame** shows the complete uploaded frame, including the first clip’s original subscription graphic. **Restore approved crop** returns to the selected framing.

**Restore original still shots** switches both stages to the previous still behavior. The original PNG remains unchanged and still supplies the later final-street background. The previous wide view used zoom1.05 and zero offset; the closer view used zoom1.7, x−100, y65. These are preserved in `assets/aftermath-replacement-v52.json` with source hashes.

Both unmodified MP4s remain downloadable and searchable in **Assets & tools**. Their thumbnails are separately registered derived previews. The sources are user-supplied generated reconstructions, not verified historical footage. The exact external generation run/settings are not known. No new image-generation run was required.

## Human and AI context

`aftermath-video-pair` is registered as a reusable animation with exact trim/crop/speed defaults. The existing stage IDs remain stable. The asset manifest, central provenance register, searchable gallery and semantic context identify the new footage and retained alternatives. The transcript and original DOCX remain unchanged. Existing browser context migrates the two source relationships to V52 while preserving user narration/intent and retaining the V51 source metadata in context history.

## Validation and review

New checks exercise the actual scene’s two video branches, exact trim/speed clocks, crop clamping, removal of a synthetic top-border/corner-badge fixture, still fallback, byte-identical MP4 retention, unchanged PNG hash, unchanged stage lengths, replacement-button routing, still/video switching and both crop recovery buttons. Existing regression checks and generated-catalog freshness checks also run. The updated complete review contains2382frames at30fps, duration79.4seconds. Its source clock remains approximate. Offline frames of both new shots were inspected. Native-browser video decoding responsiveness and final user visual acceptance remain pending. No deployment is claimed.
