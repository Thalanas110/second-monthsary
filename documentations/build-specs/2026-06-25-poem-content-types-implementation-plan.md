# Poem Content Types Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Normalize the archive data to one content type per entry and update the library/detail UI so `poem`, `lsm`, and `voicemail` entries each render in a distinct, readable way.

**Architecture:** Keep the current route structure and major screens, but make the data model and rendering helpers type-aware. Centralize text/title/preview/copy behavior in a pure helper module, then consume that module from the existing library card and detail page while adding a lightweight audio path for voicemail entries.

**Tech Stack:** TypeScript, React 19, Vite, Wouter, Framer Motion, Node 22 built-in test runner with `--experimental-strip-types`

---

## File Structure

- Modify: `src/data/poems.ts`
  - Replace the array-based `type` with a scalar union.
  - Rename the exported interface from `Poem` to `ArchiveEntry`.
  - Add voicemail-specific metadata fields.
  - Normalize entries `1` to `10`, including placeholder voicemail entries `9` and `10`.

- Create: `src/lib/content-entry.ts`
  - Pure helper functions for localized title/body lookup, paragraph splitting, previews, copy behavior, and type labels.
  - No React imports.

- Modify: `src/components/services/home.ts`
  - Use helper-based search text so voicemail transcript content is searchable.
  - Update the imported entry type name.

- Modify: `src/components/poem-card.tsx`
  - Keep the existing file path to avoid import churn.
  - Render type-aware card content for `poem`, `lsm`, and `voicemail`.

- Modify: `src/components/home.tsx`
  - Keep the existing library grid.
  - Pass the normalized entry type through the card path without adding route churn.

- Modify: `src/pages/poem.tsx`
  - Keep the existing `/poem/:id` route.
  - Switch the detail layout by `entry.type`.
  - Use `<audio controls>` for voicemail playback.

- Create: `tests/poem-content-types.test.ts`
  - Data regression tests for scalar type, required IDs, and voicemail metadata.

- Create: `tests/content-entry.test.ts`
  - Pure helper tests for preview generation, paragraph splitting, and copy behavior.

- Create: `tests/poem-card-structure.test.mjs`
  - Source-structure regression test that confirms the card component branches on `poem`, `lsm`, and `voicemail`.

- Create: `tests/poem-page-structure.test.mjs`
  - Source-structure regression test that confirms the detail page includes voicemail audio playback and type-aware body branching.

- Create: `public/audio/voicemail-placeholder.wav`
  - Silent placeholder asset used by both voicemail entries until real recordings are added.

## Task 1: Normalize Archive Data

**Files:**
- Modify: `src/data/poems.ts`
- Test: `tests/poem-content-types.test.ts`

- [ ] **Step 1: Write the failing data regression test**

```ts
import test from "node:test";
import assert from "node:assert/strict";
import { poems } from "../src/data/poems.ts";

test("every archive entry has exactly one scalar content type", () => {
  assert.ok(poems.length >= 10, "expected placeholder voicemail entries 9 and 10");

  for (const entry of poems) {
    assert.equal(typeof entry.type, "string");
    assert.match(entry.type, /^(poem|lsm|voicemail)$/);
  }
});

test("approved IDs map to approved content types", () => {
  const typeById = Object.fromEntries(poems.map((entry) => [entry.id, entry.type]));

  assert.equal(typeById["7"], "lsm");
  assert.equal(typeById["8"], "lsm");
  assert.equal(typeById["9"], "voicemail");
  assert.equal(typeById["10"], "voicemail");
});

test("voicemail entries have transcript and audio metadata", () => {
  const voicemailEntries = poems.filter((entry) => entry.type === "voicemail");

  assert.ok(voicemailEntries.length >= 2);

  for (const entry of voicemailEntries) {
    assert.ok(entry.audioSrc, `${entry.id} should define audioSrc`);
    assert.ok(entry.transcript, `${entry.id} should define transcript`);
    assert.ok(entry.text.includes(entry.transcript), `${entry.id} should keep transcript searchable through text`);
  }
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
node --experimental-strip-types --test tests/poem-content-types.test.ts
```

Expected: FAIL because `type` is currently an array, `9` and `10` do not exist, and voicemail metadata is missing.

- [ ] **Step 3: Write the minimal data implementation**

Update the type declarations near the top of `src/data/poems.ts`:

```ts
export type Mood = "Longing" | "Devotion" | "Passion" | "Joy" | "Farewell" | "Reflection";

export type ContentType = "poem" | "lsm" | "voicemail";

export interface ArchiveEntry {
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

export const poems: ArchiveEntry[] = [
```

Normalize the existing non-voicemail entries so they use scalar types:

```ts
{
  id: "7",
  type: "lsm",
  title: "[Bikolano title for Love's Philosophy goes here]",
  englishTitle: "Love's Philosophy",
  poet: "Percy Bysshe Shelley",
  moods: ["Passion", "Longing"],
  year: "1819",
  text: `[Bikolano translation for Love's Philosophy goes here]`,
  englishText: `The fountains mingle with the river
   And the rivers with the ocean,
The winds of heaven mix for ever
   With a sweet emotion;
Nothing in the world is single;
   All things by a law divine
In one spirit meet and mingle.
   Why not I with thine?—

See the mountains kiss high heaven
   And the waves clasp one another;
No sister-flower would be forgiven
   If it disdained its brother;
And the sunlight clasps the earth
   And the moonbeams kiss the sea:
What is all this sweet work worth
   If thou kiss not me?`
},
{
  id: "8",
  type: "lsm",
  title: "[Bikolano title for A Glimpse goes here]",
  englishTitle: "A Glimpse",
  poet: "Walt Whitman",
  moods: ["Joy", "Reflection"],
  year: "1860",
  text: `[Bikolano translation for A Glimpse goes here]`,
  englishText: `A glimpse through an interstice caught,
Of a crowd of workmen and drivers in a bar-room around the stove late of a winter night, and I unremark'd seated in a corner,
Of a youth who loves me and whom I love, silently approaching and seating himself near, that he may hold me by the hand,
A long while amid the noises of coming and going, of drinking and oath and smutty jest,
There we two, content, happy in being together, speaking little, perhaps not a word.`
},
```

Append placeholder voicemail entries at the end of the array:

```ts
{
  id: "9",
  type: "voicemail",
  title: "First Voicemail Placeholder",
  englishTitle: "First Voicemail Placeholder",
  poet: "Adriaan M. Dimate",
  moods: ["Devotion", "Reflection"],
  year: "2026",
  text: `This transcript is a placeholder while the real voicemail is still being prepared.

It exists so the voicemail card, transcript layout, search behavior, and copy action can all be wired now.`,
  englishText: `This transcript is a placeholder while the real voicemail is still being prepared.

It exists so the voicemail card, transcript layout, search behavior, and copy action can all be wired now.`,
  transcript: `This transcript is a placeholder while the real voicemail is still being prepared.

It exists so the voicemail card, transcript layout, search behavior, and copy action can all be wired now.`,
  audioSrc: "/audio/voicemail-placeholder.wav",
  durationLabel: "0:01",
},
{
  id: "10",
  type: "voicemail",
  title: "Second Voicemail Placeholder",
  englishTitle: "Second Voicemail Placeholder",
  poet: "Adriaan M. Dimate",
  moods: ["Longing", "Joy"],
  year: "2026",
  text: `This second placeholder keeps the voicemail layout path exercised while the real recording is still pending.

Once the real audio exists, only the metadata and text need to change.`,
  englishText: `This second placeholder keeps the voicemail layout path exercised while the real recording is still pending.

Once the real audio exists, only the metadata and text need to change.`,
  transcript: `This second placeholder keeps the voicemail layout path exercised while the real recording is still pending.

Once the real audio exists, only the metadata and text need to change.`,
  audioSrc: "/audio/voicemail-placeholder.wav",
  durationLabel: "0:01",
},
```

- [ ] **Step 4: Run the test to verify it passes**

Run:

```bash
node --experimental-strip-types --test tests/poem-content-types.test.ts
```

Expected: PASS with 3 passing tests.

- [ ] **Step 5: Commit**

```bash
git add tests/poem-content-types.test.ts src/data/poems.ts
git commit -m "feat: normalize archive entry content types"
```

## Task 2: Add Content Helpers And Placeholder Audio

**Files:**
- Create: `src/lib/content-entry.ts`
- Create: `public/audio/voicemail-placeholder.wav`
- Test: `tests/content-entry.test.ts`

- [ ] **Step 1: Write the failing helper tests**

```ts
import test from "node:test";
import assert from "node:assert/strict";
import type { ArchiveEntry } from "../src/data/poems.ts";
import {
  getCopyText,
  getDisplayParagraphs,
  getEntryPreview,
  getLocalizedBody,
  getLocalizedTitle,
  getTypeLabel,
} from "../src/lib/content-entry.ts";

const poemEntry: ArchiveEntry = {
  id: "p",
  type: "poem",
  title: "Tula",
  englishTitle: "Poem",
  poet: "Test Poet",
  moods: ["Devotion"],
  text: "line one\\n\\nline two\\nline three\\nline four",
  englishText: "english one\\n\\nenglish two\\nenglish three\\nenglish four",
};

const lsmEntry: ArchiveEntry = {
  id: "l",
  type: "lsm",
  title: "Sulat",
  poet: "Test Poet",
  moods: ["Reflection"],
  text: "paragraph one\\n\\nparagraph two\\n\\nparagraph three",
};

const voicemailEntry: ArchiveEntry = {
  id: "v",
  type: "voicemail",
  title: "Voice",
  poet: "Test Poet",
  moods: ["Joy"],
  text: "search copy of transcript",
  transcript: "voice paragraph one\\n\\nvoice paragraph two",
  audioSrc: "/audio/voicemail-placeholder.wav",
  durationLabel: "0:01",
};

test("localized title prefers english when present", () => {
  assert.equal(getLocalizedTitle(poemEntry, "english"), "Poem");
  assert.equal(getLocalizedTitle(poemEntry, "bikol"), "Tula");
});

test("poem preview keeps the first three non-empty lines", () => {
  assert.equal(getEntryPreview(poemEntry, "bikol"), "line one\\nline two\\nline three");
});

test("lsm preview keeps the first two paragraphs", () => {
  assert.equal(getEntryPreview(lsmEntry, "bikol"), "paragraph one\\n\\nparagraph two");
});

test("voicemail body and copy text come from transcript", () => {
  assert.equal(getLocalizedBody(voicemailEntry, "bikol"), "voice paragraph one\\n\\nvoice paragraph two");
  assert.equal(getCopyText(voicemailEntry, "bikol"), "voice paragraph one\\n\\nvoice paragraph two");
});

test("display paragraphs split prose and transcript content on blank lines", () => {
  assert.deepEqual(getDisplayParagraphs(lsmEntry, "bikol"), ["paragraph one", "paragraph two", "paragraph three"]);
  assert.deepEqual(getDisplayParagraphs(voicemailEntry, "bikol"), ["voice paragraph one", "voice paragraph two"]);
});

test("type labels stay presentation-ready", () => {
  assert.equal(getTypeLabel("poem"), "Poem");
  assert.equal(getTypeLabel("lsm"), "LSM");
  assert.equal(getTypeLabel("voicemail"), "Voicemail");
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run:

```bash
node --experimental-strip-types --test tests/content-entry.test.ts
```

Expected: FAIL because `src/lib/content-entry.ts` does not exist yet.

- [ ] **Step 3: Write the minimal helper module and placeholder audio asset**

Create `src/lib/content-entry.ts`:

```ts
import type { ArchiveEntry } from "../data/poems.ts";

export type Language = "bikol" | "english";

export function getLocalizedTitle(entry: ArchiveEntry, language: Language) {
  return language === "english" && entry.englishTitle ? entry.englishTitle : entry.title;
}

export function getLocalizedBody(entry: ArchiveEntry, language: Language) {
  if (entry.type === "voicemail") {
    return entry.transcript ?? entry.text;
  }

  return language === "english" && entry.englishText ? entry.englishText : entry.text;
}

export function getDisplayParagraphs(entry: ArchiveEntry, language: Language) {
  return getLocalizedBody(entry, language)
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function getEntryPreview(entry: ArchiveEntry, language: Language) {
  if (entry.type === "poem") {
    return getLocalizedBody(entry, language)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .slice(0, 3)
      .join("\n");
  }

  if (entry.type === "lsm") {
    return getDisplayParagraphs(entry, language).slice(0, 2).join("\n\n");
  }

  return getDisplayParagraphs(entry, language).slice(0, 1).join("\n\n");
}

export function getCopyText(entry: ArchiveEntry, language: Language) {
  return getLocalizedBody(entry, language);
}

export function getSearchText(entry: ArchiveEntry) {
  return [
    entry.title,
    entry.englishTitle,
    entry.poet,
    entry.text,
    entry.englishText,
    entry.transcript,
  ]
    .filter(Boolean)
    .join("\n")
    .toLowerCase();
}

export function getTypeLabel(type: ArchiveEntry["type"]) {
  switch (type) {
    case "lsm":
      return "LSM";
    case "voicemail":
      return "Voicemail";
    default:
      return "Poem";
  }
}
```

Create the placeholder audio file:

```powershell
New-Item -ItemType Directory -Force public/audio | Out-Null

$sampleRate = 8000
$seconds = 1
$numSamples = $sampleRate * $seconds
$dataLength = $numSamples * 2
$riffLength = 36 + $dataLength

$path = "public/audio/voicemail-placeholder.wav"
$writer = [System.IO.BinaryWriter]::new([System.IO.File]::Create($path))
$writer.Write([System.Text.Encoding]::ASCII.GetBytes("RIFF"))
$writer.Write([int]$riffLength)
$writer.Write([System.Text.Encoding]::ASCII.GetBytes("WAVEfmt "))
$writer.Write([int]16)
$writer.Write([short]1)
$writer.Write([short]1)
$writer.Write([int]$sampleRate)
$writer.Write([int]($sampleRate * 2))
$writer.Write([short]2)
$writer.Write([short]16)
$writer.Write([System.Text.Encoding]::ASCII.GetBytes("data"))
$writer.Write([int]$dataLength)
$writer.Write((New-Object byte[] $dataLength))
$writer.Dispose()
```

- [ ] **Step 4: Run the helper tests to verify they pass**

Run:

```bash
node --experimental-strip-types --test tests/content-entry.test.ts
```

Expected: PASS with 6 passing tests.

- [ ] **Step 5: Commit**

```bash
git add tests/content-entry.test.ts src/lib/content-entry.ts public/audio/voicemail-placeholder.wav
git commit -m "feat: add content entry helper logic"
```

## Task 3: Make The Library Card Type-Aware

**Files:**
- Modify: `src/components/poem-card.tsx`
- Modify: `src/components/home.tsx`
- Modify: `src/components/services/home.ts`
- Test: `tests/poem-card-structure.test.mjs`

- [ ] **Step 1: Write the failing card-structure test**

```js
import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

const rootDir = process.cwd();

async function readWorkspaceFile(relativePath) {
  return readFile(path.join(rootDir, relativePath), "utf8");
}

test("poem card branches on poem, lsm, and voicemail entry types", async () => {
  const source = await readWorkspaceFile("src/components/poem-card.tsx");

  assert.match(source, /poem\.type === "lsm"/);
  assert.match(source, /poem\.type === "voicemail"/);
  assert.match(source, /getEntryPreview/);
  assert.match(source, /getTypeLabel/);
  assert.match(source, /durationLabel/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
node --test tests/poem-card-structure.test.mjs
```

Expected: FAIL because the card currently renders only poem-style content.

- [ ] **Step 3: Write the minimal card implementation**

Update `src/components/services/home.ts` so search includes voicemail transcript content:

```ts
import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { poems, ArchiveEntry, Mood } from "@/data/poems";
import { getSearchText } from "@/lib/content-entry";

export function useHome() {
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [selectedMood, setSelectedMood] = useState<Mood | "All">("All");
  const [featuredPoem, setFeaturedPoem] = useState<ArchiveEntry | null>(null);

  const moods: (Mood | "All")[] = ["All", "Longing", "Devotion", "Passion", "Joy", "Farewell", "Reflection"];

  const filteredPoems = useMemo(() => {
    return poems.filter((poem) => {
      const matchesSearch = getSearchText(poem).includes(search.toLowerCase());
      const matchesMood = selectedMood === "All" || poem.moods.includes(selectedMood as Mood);

      return matchesSearch && matchesMood;
    });
  }, [search, selectedMood]);

  const handleSelect = (poem: ArchiveEntry) => {
    setFeaturedPoem(poem);
    toast({
      title: "Poem selected",
      description: "Added to your personal collection.",
      duration: 3000,
    });
  };

  return {
    search, setSearch,
    selectedMood, setSelectedMood,
    featuredPoem,
    moods,
    filteredPoems,
    handleSelect,
  };
}
```

Update `src/components/poem-card.tsx`:

```tsx
import { ArchiveEntry } from "@/data/poems";
import { getEntryPreview, getLocalizedTitle, getTypeLabel } from "@/lib/content-entry";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { poemCardRevealEffect } from "./services/effects";

export function PoemCard({ poem, onClick }: { poem: ArchiveEntry; onClick: () => void }) {
  const [language] = useLanguage();
  const titleToDisplay = getLocalizedTitle(poem, language);
  const preview = getEntryPreview(poem, language);
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const scrolledPast = useScrolledPast(300);
  const visible = inView && scrolledPast;
  const cardRevealEffect = poemCardRevealEffect(visible);
  const typeLabel = getTypeLabel(poem.type);

  return (
    <motion.div
      ref={ref}
      {...cardRevealEffect}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative cursor-pointer flex flex-col justify-between h-full p-6 md:p-8 bg-card rounded-xl border border-card-border shadow-sm hover:shadow-md transition-all duration-300"
      onClick={onClick}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{typeLabel}</span>
          {poem.type === "voicemail" && (
            <span className="inline-flex items-center gap-1 text-xs text-primary">
              <Play className="w-3.5 h-3.5" />
              {poem.durationLabel ?? "0:00"}
            </span>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-serif text-primary mb-2 line-clamp-2">{titleToDisplay}</h3>
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">{poem.poet}</p>

        {poem.type === "poem" && (
          <div className="relative">
            <div className="absolute -left-2 -top-2 text-4xl text-primary/10 font-serif">"</div>
            <p className="text-foreground/80 italic font-serif leading-relaxed whitespace-pre-wrap pl-4 border-l border-primary/20">
              {preview}...
            </p>
          </div>
        )}

        {poem.type === "lsm" && (
          <div className="rounded-2xl border border-primary/10 bg-background/70 p-4">
            <p className="text-[0.98rem] text-foreground/80 leading-7 whitespace-pre-wrap">
              {preview}
            </p>
          </div>
        )}

        {poem.type === "voicemail" && (
          <div className="rounded-2xl border border-primary/15 bg-background/70 p-4">
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground mb-3">Tap to open and play</p>
            <p className="text-foreground/80 leading-7 whitespace-pre-wrap">
              {preview}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {poem.moods.map((mood) => (
          <span key={mood} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
            {mood}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
```

`src/components/home.tsx` only needs the updated `ArchiveEntry`-aware imports to keep using the same card component.

- [ ] **Step 4: Run the card-structure test to verify it passes**

Run:

```bash
node --test tests/poem-card-structure.test.mjs
```

Expected: PASS with 1 passing test.

- [ ] **Step 5: Commit**

```bash
git add tests/poem-card-structure.test.mjs src/components/services/home.ts src/components/poem-card.tsx src/components/home.tsx
git commit -m "feat: add type-aware library cards"
```

## Task 4: Make The Detail Page Type-Aware

**Files:**
- Modify: `src/pages/poem.tsx`
- Test: `tests/poem-page-structure.test.mjs`

- [ ] **Step 1: Write the failing detail-page structure test**

```js
import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

const rootDir = process.cwd();

async function readWorkspaceFile(relativePath) {
  return readFile(path.join(rootDir, relativePath), "utf8");
}

test("poem page includes voicemail audio playback and type-aware body branches", async () => {
  const source = await readWorkspaceFile("src/pages/poem.tsx");

  assert.match(source, /poem\.type === "lsm"/);
  assert.match(source, /poem\.type === "voicemail"/);
  assert.match(source, /<audio/);
  assert.match(source, /getDisplayParagraphs/);
  assert.match(source, /getCopyText/);
  assert.match(source, /Copy transcript/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
node --test tests/poem-page-structure.test.mjs
```

Expected: FAIL because the current page only renders poem-style content and has no audio path.

- [ ] **Step 3: Write the minimal type-aware detail implementation**

Update `src/pages/poem.tsx`:

```tsx
import { motion } from "framer-motion";
import { Heart, Copy, Check, ArrowLeft, Languages, Play } from "lucide-react";
import { useLocation } from "wouter";
import { poems } from "@/data/poems";
import { useState, useEffect } from "react";
import { dividerRevealEffect, fadeUpEffect, slideInEffect } from "@/components/services/effects";
import { useLanguage } from "@/hooks/useLanguage";
import { useToast } from "@/hooks/use-toast";
import {
  getCopyText,
  getDisplayParagraphs,
  getLocalizedTitle,
  getTypeLabel,
} from "@/lib/content-entry";

export default function PoemPage({ params }: { params: { id: string } }) {
  const poem = poems.find((p) => p.id === params.id);
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [selected, setSelected] = useState(false);
  const [language, setLanguage] = useLanguage();
  const backButtonEffect = slideInEffect("left");
  const languageToggleEffect = slideInEffect("right");
  const poemHeaderEffect = fadeUpEffect(0.1);
  const poemBodyEffect = fadeUpEffect(0.4, 20, 0.7);
  const actionsEffect = fadeUpEffect(0.6, 16, 0.5);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [params.id]);

  if (!poem) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-xl font-serif text-muted-foreground italic">Verse not found in the archives.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 flex items-center gap-2 mx-auto px-5 py-2.5 rounded-xl border border-input hover:bg-secondary transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium text-sm">Back to library</span>
          </button>
        </div>
      </div>
    );
  }

  const paragraphs = getDisplayParagraphs(poem, language);
  const copyLabel = poem.type === "voicemail" ? "Copy transcript" : "Copy verse";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getCopyText(poem, language));
    setCopied(true);
    toast({
      title: poem.type === "voicemail" ? "Transcript copied" : "Poem copied",
      description: poem.type === "voicemail"
        ? "The voicemail transcript has been copied to your clipboard."
        : "The verses have been copied to your clipboard.",
      duration: 3000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelect = () => {
    setSelected(true);
    toast({ title: "Poem selected", description: "Added to your personal collection.", duration: 3000 });
  };

  return (
    <div className="min-h-[100dvh] w-full">
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div className="flex items-center justify-between mb-12">
          <motion.button
            {...backButtonEffect}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium tracking-wide">Back to library</span>
          </motion.button>

          {poem.type !== "voicemail" && poem.englishText && (
            <motion.button
              {...languageToggleEffect}
              onClick={() => setLanguage(language === "bikol" ? "english" : "bikol")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-input text-muted-foreground hover:text-foreground hover:bg-secondary transition-all text-sm font-medium"
            >
              <Languages className="w-4 h-4" />
              <span>{language === "bikol" ? "Bikolano" : "English"}</span>
            </motion.button>
          )}
        </div>

        <motion.div {...poemHeaderEffect}>
          <div className="flex items-center gap-3 flex-wrap mb-6">
            {poem.year && (
              <span className="inline-block text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                {poem.year}
              </span>
            )}
            <span className="inline-block text-xs px-3 py-1 border border-primary/20 rounded-full font-medium text-primary">
              {getTypeLabel(poem.type)}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-4 leading-tight">
            {getLocalizedTitle(poem, language)}
          </h1>
          <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm mb-3">{poem.poet}</p>
          <div className="flex flex-wrap gap-2 mb-12">
            {poem.moods.map((mood) => (
              <span key={mood} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                {mood}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div {...dividerRevealEffect} className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-14 origin-left" />

        {poem.type === "poem" && (
          <motion.div {...poemBodyEffect} className="relative pl-8 border-l-2 border-primary/20">
            <div className="absolute -left-3 -top-3 text-6xl text-primary/10 font-serif leading-none select-none">"</div>
            <p className="text-xl md:text-2xl font-serif text-foreground/90 leading-[2] whitespace-pre-wrap italic">
              {paragraphs.join("\n\n")}
            </p>
            <div className="absolute -bottom-4 right-0 text-6xl text-primary/10 font-serif leading-none select-none rotate-180">"</div>
          </motion.div>
        )}

        {poem.type === "lsm" && (
          <motion.div {...poemBodyEffect} className="rounded-3xl border border-primary/10 bg-card/85 p-6 md:p-8 space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[1.05rem] md:text-[1.12rem] text-foreground/90 leading-8 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </motion.div>
        )}

        {poem.type === "voicemail" && (
          <motion.div {...poemBodyEffect} className="space-y-8">
            <div className="rounded-3xl border border-primary/15 bg-card/90 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Play className="w-5 h-5 ml-0.5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Voicemail</p>
                  <p className="text-sm text-foreground/70">{poem.durationLabel ?? "0:00"}</p>
                </div>
              </div>
              <audio controls className="w-full" src={poem.audioSrc}>
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-card/85 p-6 md:p-8 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[1.02rem] md:text-[1.08rem] text-foreground/90 leading-8 whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div {...actionsEffect} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-input hover:bg-secondary hover:text-secondary-foreground transition-all w-full sm:w-auto justify-center"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span className="font-medium text-sm">{copied ? "Copied!" : copyLabel}</span>
          </button>
          <button
            onClick={handleSelect}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all w-full sm:w-auto justify-center ${
              selected
                ? "bg-primary/20 text-primary border border-primary/30"
                : "bg-primary text-primary-foreground shadow-sm hover:opacity-90"
            }`}
          >
            <Heart className={`w-4 h-4 ${selected ? "fill-primary" : ""}`} />
            <span className="font-medium text-sm">{selected ? "Selected!" : "Select poem"}</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Run the structure test to verify it passes**

Run:

```bash
node --test tests/poem-page-structure.test.mjs
```

Expected: PASS with 1 passing test.

- [ ] **Step 5: Commit**

```bash
git add tests/poem-page-structure.test.mjs src/pages/poem.tsx
git commit -m "feat: add type-aware archive detail page"
```

## Task 5: Final Verification

**Files:**
- Modify: none expected
- Verify: `tests/poem-content-types.test.ts`
- Verify: `tests/content-entry.test.ts`
- Verify: `tests/poem-card-structure.test.mjs`
- Verify: `tests/poem-page-structure.test.mjs`

- [ ] **Step 1: Run the full targeted test set**

Run:

```bash
node --experimental-strip-types --test tests/poem-content-types.test.ts tests/content-entry.test.ts
node --test tests/poem-card-structure.test.mjs tests/poem-page-structure.test.mjs
```

Expected: PASS with all targeted tests green.

- [ ] **Step 2: Run TypeScript verification**

Run:

```bash
npm.cmd run typecheck
```

Expected: PASS with no missing `type` errors remaining in `src/data/poems.ts`.

- [ ] **Step 3: Run the production build**

Run:

```bash
npm.cmd run build
```

Expected: PASS and emit an updated `dist/` with the type-aware UI.

- [ ] **Step 4: Inspect the final diff**

Run:

```bash
git -c safe.directory='C:/Users/Adriaan M. Dimate/Desktop/second-monthsary' diff --stat
```

Expected: Changes limited to archive data, helpers, card/detail UI, placeholder audio, and tests.

- [ ] **Step 5: Commit**

```bash
git add src/data/poems.ts src/lib/content-entry.ts src/components/services/home.ts src/components/poem-card.tsx src/components/home.tsx src/pages/poem.tsx public/audio/voicemail-placeholder.wav tests/poem-content-types.test.ts tests/content-entry.test.ts tests/poem-card-structure.test.mjs tests/poem-page-structure.test.mjs
git commit -m "feat: add archive content type-specific presentation"
```
