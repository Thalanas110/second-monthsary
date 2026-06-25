import assert from "node:assert/strict";
import test from "node:test";
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

test("Adriaan-authored entries use one consistent section suffix", () => {
    const adriaanEntries = poems.filter((entry) => entry.poet.includes("Adriaan M. Dimate"));

    assert.ok(adriaanEntries.length >= 4);

    for (const entry of adriaanEntries) {
        assert.equal(entry.poet, "Adriaan M. Dimate | BSCS 4-A");
    }
});
