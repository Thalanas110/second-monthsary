import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";
import path from "node:path";

const rootDir = process.cwd();

async function readWorkspaceFile(relativePath) {
    return readFile(path.join(rootDir, relativePath), "utf8");
}

test("components do not import hooks from services/effects", async () => {
    const componentFiles = {
        "src/components/home.tsx": ["hooks/useLanguage", "hooks/useScrolledPast"],
        "src/components/poem-card.tsx": ["hooks/useInView", "hooks/useLanguage", "hooks/useScrolledPast"],
        "src/pages/poem.tsx": ["hooks/useLanguage"],
    };

    for (const [filePath, expectedHookImports] of Object.entries(componentFiles)) {
        const source = await readWorkspaceFile(filePath);
        const importStatements = source.match(/import[\s\S]*?;\s*/g) ?? [];
        const effectsImports = importStatements.filter((statement) => /services\/effects/.test(statement));

        for (const importStatement of effectsImports) {
            assert.doesNotMatch(
                importStatement,
                /\b(useInView|useLanguage|useScrolledPast)\b/,
                `${filePath} should not import hooks from services/effects`,
            );
        }

        for (const hookImport of expectedHookImports) {
            assert.match(
                source,
                new RegExp(hookImport.replace("/", "\\/")),
                `${filePath} should import ${hookImport}`,
            );
        }
    }
});

test("effects module no longer exports hook implementations", async () => {
    const effectsSource = await readWorkspaceFile("src/components/services/effects.ts");

    assert.doesNotMatch(effectsSource, /export function useInView\b/);
    assert.doesNotMatch(effectsSource, /export function useLanguage\b/);
    assert.doesNotMatch(effectsSource, /export function useScrolledPast\b/);
});
