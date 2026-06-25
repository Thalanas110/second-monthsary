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
