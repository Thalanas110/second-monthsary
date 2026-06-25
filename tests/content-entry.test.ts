import assert from "node:assert/strict";
import test from "node:test";
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
    text: "line one\n\nline two\nline three\nline four",
    englishText: "english one\n\nenglish two\nenglish three\nenglish four",
};

const lsmEntry: ArchiveEntry = {
    id: "l",
    type: "lsm",
    title: "Sulat",
    poet: "Test Poet",
    moods: ["Reflection"],
    text: "paragraph one\n\nparagraph two\n\nparagraph three",
};

const voicemailEntry: ArchiveEntry = {
    id: "v",
    type: "voicemail",
    title: "Voice",
    poet: "Test Poet",
    moods: ["Joy"],
    text: "search copy of transcript",
    transcript: "voice paragraph one\n\nvoice paragraph two",
    audioSrc: "/audio/voicemail-placeholder.wav",
    durationLabel: "0:01",
};

test("localized title prefers english when present", () => {
    assert.equal(getLocalizedTitle(poemEntry, "english"), "Poem");
    assert.equal(getLocalizedTitle(poemEntry, "bikol"), "Tula");
});

test("poem preview keeps the first three non-empty lines", () => {
    assert.equal(getEntryPreview(poemEntry, "bikol"), "line one\nline two\nline three");
});

test("lsm preview keeps the first two paragraphs", () => {
    assert.equal(getEntryPreview(lsmEntry, "bikol"), "paragraph one\n\nparagraph two");
});

test("voicemail body and copy text come from transcript", () => {
    assert.equal(getLocalizedBody(voicemailEntry, "bikol"), "voice paragraph one\n\nvoice paragraph two");
    assert.equal(getCopyText(voicemailEntry, "bikol"), "voice paragraph one\n\nvoice paragraph two");
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
