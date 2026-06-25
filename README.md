# Poem Selector

A personal Vite + React archive for poems and related love-letter style entries. The app presents a browsable library on the home page and opens each entry in a dedicated detail view with search, filtering, language toggles, and animated transitions.

## What It Does

- Shows a hero section and a grid of entries on the landing page.
- Filters entries by mood and search text.
- Opens each entry on its own route at `/poem/:id`.
- Supports bilingual content where an English version exists.
- Handles multiple content types, including poems, long sweet messages, and voicemails.
- Provides copy and select actions inside the detail view.

## Tech Stack

- React 19
- TypeScript
- Vite
- Wouter for routing
- TanStack Query for app scaffolding and state utilities
- Framer Motion for transitions and motion
- Tailwind CSS for styling
- Radix UI primitives and shadcn-style UI components

## Project Structure

- `src/App.tsx` - app shell, router, and background treatment
- `src/components/home.tsx` - landing page and entry browser
- `src/pages/poem.tsx` - entry detail page
- `src/data/poems.ts` - archive content and metadata
- `src/lib/content-entry.ts` - content helpers and type-aware formatting
- `documentations/` - content notes, specs, and literary source text
- `tests/` - regression tests for content and UI structure

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The dev server runs with Vite and serves the app on your local machine.

### Build

```bash
npm run build
```

### Type Check

```bash
npm run typecheck
```

### Preview the Production Build

```bash
npm run serve
```

## Content Model

Archive entries are typed so the UI can render each category correctly.

- `poem` - verse-first layout with serif styling and line-based presentation
- `lsm` - letter or message layout with paragraph-first reading flow
- `voicemail` - audio-first layout with transcript support

Entries can also include:

- `englishTitle` and `englishText` for bilingual rendering
- `moods` for filtering and tagging
- `year` for timeline context
- `audioSrc`, `transcript`, and `durationLabel` for voicemail entries

## Routes

- `/` - library home screen
- `/poem/:id` - detail page for a single entry
- unmatched routes fall through to the not-found page

## Development Notes

- The app uses a fixed ambient background that changes across routes.
- Search and mood filtering are shared across the entire archive.
- The detail page switches layout based on entry type instead of assuming every entry is a poem.
- Tests cover the content type mapping and required voicemail metadata.

## Verification

Run the checks that matter for this project before shipping changes:

```bash
npm run typecheck
npm run build
node --test tests/poem-content-types.test.ts
```

## License

This workspace does not currently declare a license.