# ShortForge Editor V0.1

## Goal

Build a focused vertical-video editor for ShortForge rather than a general-purpose CapCut clone.

## Timeline model

Tracks:
- Video scenes
- Narration
- Captions / text overlays
- Music
- Sound effects

Each scene stores:
- order
- source media
- source duration
- trim in
- trim out
- muted state
- crop / scale / x / y
- transition in/out

## Preview

- 9:16 stage
- play / pause
- current time / total duration
- scrubber
- scene selection
- safe-area guides

## Export

Target preset:
- 1080x1920
- H.264 MP4
- AAC audio
- 30 fps initially

Rendering should be deterministic. The browser is for editing/preview; final render should use a server-side render pipeline (FFmpeg or Remotion).

## Napoleon acceptance test

1. Import six approved Napoleon clips.
2. Reorder them as scenes 1–6.
3. Trim awkward starts/ends.
4. Mute unwanted source audio.
5. Add one narration track.
6. Add readable text/captions manually.
7. Add optional music/SFX.
8. Export a single vertical MP4.
