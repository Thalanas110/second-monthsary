import { ArchiveEntry } from "@/data/poems";
import { getEntryPreview, getLocalizedTitle, getTypeLabel } from "@/lib/content-entry";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
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

    // Visible only when in viewport AND past the hero threshold (mirrors navbar behaviour)
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
                {poem.moods.map(mood => (
                    <span key={mood} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                        {mood}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
