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
