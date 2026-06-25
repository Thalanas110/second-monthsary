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
