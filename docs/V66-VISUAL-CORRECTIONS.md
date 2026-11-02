# Window and factory correction

User approved implementation after comparing ten annotated screenshots. Existing art is preserved. Window recess is now an authored shallow opening with separately shaded side reveals and sill; perspective shift follows the room handoff. This approximates depth and does not reconstruct hidden source geometry.

Factory entry previously applied a -600px vertical lift decaying independently of zoom, moving the house out of the opening view. Default lift is now0; the close lower facade leads the pullback. Bicycle and fence sizes now anchor at their visible lower bounds instead of their upper-left corners. Ground anchors default445px and475px respectively, before shared camera transform. New controls: chapterWindowRecess48px, chapterWindowPerspective1, chapterFactoryEntryLift0px, chapterBikeGroundY445px, chapterFenceGroundY475px. These appear in the generic granular chapter editor and generated registry.

Acceptance: inspect window overlap at0,3.8,6.5,12s; factory entry16.5/17.2s and wide19.4s. Wheel and fence contact must persist while scaling. Terrain artwork and exact architectural proportions remain approximations. Prior validation reports are historical, not evidence for this revision.
