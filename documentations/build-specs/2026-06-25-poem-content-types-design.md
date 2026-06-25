# Poem Content Types Design

Date: 2026-06-25

## Goal

Refactor the content model and UI so the collection supports three distinct content types:

- `poem`
- `lsm`
- `voicemail`

The UI must reflect those types consistently in the library view and in the detail page. The collection must also be normalized so every entry has exactly one type.

## Current State

- The data model currently declares `type` as an array even though the intended behavior is one type per entry.
- Entries `7` and `8` are intended to become long sweet messages.
- Entries `9` and `10` do not exist yet and must be added as placeholder voicemail entries.
- The current card and detail views assume all content is poem-like.

## Approved Content Mapping

Every entry will have a scalar `type` value.

Type mapping:

- `1` to `6`: `poem`
- `7` to `8`: `lsm`
- `9` to `10`: `voicemail`

## Data Model

### Type Definition

Replace the current array-based type with a scalar union:

```ts
export type ContentType = "poem" | "lsm" | "voicemail";
```

Update the core content interface so every entry has exactly one type:

```ts
interface PoemEntry {
  id: string;
  type: ContentType;
  title: string;
  englishTitle?: string;
  poet: string;
  text: string;
  englishText?: string;
  moods: Mood[];
  year?: string;
  audioSrc?: string;
  transcript?: string;
  durationLabel?: string;
}
```

### Field Rules

- `poem`
  - Uses `text` and optional `englishText` as the primary body.
  - Does not require audio metadata.

- `lsm`
  - Uses `text` and optional `englishText` as the primary body.
  - Body is treated as prose in the UI, with paragraphs preserved.
  - Does not require audio metadata.

- `voicemail`
  - Uses `audioSrc` for playback.
  - Uses `transcript` as the readable body and for copy behavior.
  - May still keep `text` populated so the existing search layer can continue to work without special casing, but the UI should prefer `transcript` for display if present.
  - Placeholder entries should use placeholder audio paths and placeholder transcript content until real assets are added.

## Library UI Design

The library keeps the existing grid layout and navigation flow, but each card changes presentation by type.

### Poem Card

- Keep the current verse-preview presentation.
- Continue using a short line-based excerpt.
- Keep the existing typographic tone and mood chips.

### LSM Card

- Treat the card as a message or letter rather than a poem.
- Show a visible type label such as `LSM`.
- Use a paragraph-based preview instead of line-based verse slicing.
- Use slightly smaller preview text than poem mode for readability.
- Reduce the stylized quote feel so it reads like a heartfelt written message.

### Voicemail Card

- Treat the card as an audio-first entry.
- Show a visible type label such as `Voicemail`.
- Include a play affordance icon.
- Show `durationLabel` if available.
- Preview a short transcript snippet instead of poem lines.
- Preserve the same click behavior so the card still opens the detail page.

## Detail Page Design

The route remains the same, but the page becomes type-aware internally.

### Poem Detail

- Keep the current large serif verse layout.
- Preserve bilingual toggle behavior when English content exists.
- Keep copy behavior using the visible poem text.

### LSM Detail

- Render the body as paragraphs.
- Use slightly smaller text than the poem layout.
- Use more restrained spacing and decoration to prioritize readability over verse styling.
- Preserve bilingual toggle behavior when English content exists.
- Copy should copy the visible LSM body.

### Voicemail Detail

- Make a centered audio-style card the primary element.
- The main interaction is pressing play on a real audio element.
- Use a native `<audio controls>` inside a styled wrapper unless custom controls become necessary later.
- Display the transcript below the audio card.
- Copy should copy the transcript, not the audio path.
- The transcript should be readable even before playback.

## Shared Behavior

- Keep the current back navigation pattern.
- Keep mood chips and year metadata.
- Keep language toggle only when bilingual text exists for the current entry.
- Keep search and mood filtering across all types.
- Search must still match the user-facing body content for voicemail entries through transcript-backed text.

## Placeholder Voicemail Entries

Add placeholder entries `9` and `10` with:

- `type: "voicemail"`
- a title and poet label matching the collection tone
- placeholder transcript text
- placeholder `audioSrc` paths under `public/`
- optional placeholder `durationLabel`

These placeholders are structural only. Real audio files can replace the placeholder paths later without changing the UI contract.

## Component Boundaries

To avoid tangling the existing UI, type-specific rendering should be separated behind small helpers or subcomponents.

Recommended split:

- card preview helper per type
- detail body helper per type
- shared metadata/header helpers where the layouts overlap

This keeps the existing routes and page structure stable while isolating the type-specific logic.

## Validation

Implementation must include verification for the data model and type mapping.

Required checks:

- every content entry has exactly one scalar `type`
- entries `7` and `8` are `lsm`
- entries `9` and `10` exist and are `voicemail`
- the library card path renders distinct previews by type
- the detail page switches layout by type
- the project still builds successfully

## Non-Goals

- introducing separate routes per type
- building custom waveform controls
- adding final audio assets during this change
- redesigning search or filtering beyond what is needed for type support

## Recommended Implementation Strategy

1. Normalize the data model to a scalar `type`.
2. Add placeholder voicemail entries `9` and `10`.
3. Add voicemail-specific metadata fields.
4. Update preview generation so poems, LSMs, and voicemails produce different card summaries.
5. Update the detail page to branch by type.
6. Add regression tests for type presence and required ID-to-type mapping.
7. Rebuild and verify the generated output.
