import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";
import path from "node:path";

const rootDir = process.cwd();

async function readWorkspaceFile(relativePath) {
    return readFile(path.join(rootDir, relativePath), "utf8");
}

test("source HTML uses the ICO favicon without an SVG MIME type", async () => {
    const indexHtml = await readWorkspaceFile("index.html");

    assert.match(indexHtml, /<link\s+rel="icon"[^>]*href="\/favicon\.ico"/);
    assert.doesNotMatch(indexHtml, /type="image\/svg\+xml"/);
    assert.doesNotMatch(indexHtml, /href="\/favicon\.svg"/);
});
