# ShortForge Studio — V0.1 Blueprint

ShortForge is a one-person AI content production operating system for short-form video.

## Core workflow

1. Idea and niche discovery
2. Research and fact checking
3. Script and hook generation
4. Character + visual bible
5. Scene breakdown and Flow-ready prompts
6. Production board for generated clips
7. Built-in short-form editor
8. Voiceover, captions, music, and text overlays
9. Export and publishing
10. Later: analytics and AI recommendations

## V0.1 milestone

ShortForge V0.1 is complete when it can take six vertical MP4 clips for the Napoleon short, arrange and trim them, add narration/captions/text/music, preview the complete short, and export a finished 1080x1920 MP4.

## Initial stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase for persistent project/media metadata and storage
- FFmpeg or Remotion for final renders
- Gemini API for structured content generation later

## First screens

- Dashboard
- New Project
- Project Production Board
- Editor
- Settings / Visual Bible

## Editor V0.1 scope

- Upload clips
- Reorder scenes
- Trim clip start/end
- Preview complete short
- Mute source audio
- Add one narration track
- Add background music
- Add captions
- Add text overlays
- Basic crop/zoom/reposition
- Simple transitions
- Export 1080x1920 MP4

## Permanent generation rule

AI video prompts should not ask the video model to create readable text. Printed material should use blank areas or abstract horizontal lines; real typography is added later in ShortForge.

## Non-goals for V0.1

- Multi-user accounts
- Payments/subscriptions
- Full CapCut-style effects library
- Direct browser automation of Google Flow
- Advanced analytics
- Auto-publishing to every platform

## First real project

Napoleon: "Napoleon Wasn't Actually Short"

The existing six generated clips will be used as the first end-to-end test project for the editor and export pipeline.
