import { motion } from "framer-motion";
import { Heart, Copy, Check, ArrowLeft, Languages, Play } from "lucide-react";
import { useLocation } from "wouter";
import { poems } from "@/data/poems";
import { useState, useEffect } from "react";
import { dividerRevealEffect, fadeUpEffect, slideInEffect } from "@/components/services/effects";
import { useLanguage } from "@/hooks/useLanguage";
import { useToast } from "@/hooks/use-toast";
import { VoiceWarningDialog } from "@/components/voice-warning-dialog";
import {
    getCopyText,
    getDisplayParagraphs,
    getLocalizedTitle,
    getTypeLabel,
    getVoicemailSections,
} from "@/lib/content-entry";

export default function PoemPage({ params }: { params: { id: string } }) {
    const poem = poems.find((p) => p.id === params.id);
    const [, navigate] = useLocation();
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);
    const [selected, setSelected] = useState(false);
    const [voiceWarningOpen, setVoiceWarningOpen] = useState(Boolean(poem?.voiceWarning));
    const [language, setLanguage] = useLanguage();
    const backButtonEffect = slideInEffect("left");
    const languageToggleEffect = slideInEffect("right");
    const poemHeaderEffect = fadeUpEffect(0.1);
    const poemBodyEffect = fadeUpEffect(0.4, 20, 0.7);
    const actionsEffect = fadeUpEffect(0.6, 16, 0.5);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        setVoiceWarningOpen(Boolean(poem?.voiceWarning));
    }, [params.id]);

    if (!poem) {
        return (
            <div className="min-h-[100dvh] flex items-center justify-center bg-background">
                <div className="text-center">
                    <p className="text-xl font-serif text-muted-foreground italic">Entry not found in the archives.</p>
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
    const isSongVoicemail = poem.type === "voicemail" && poem.voicemailStyle === "song";
    const songSections = isSongVoicemail ? getVoicemailSections(poem, language) : [];
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
        toast({ title: "Entry selected", description: "Added to your personal collection.", duration: 3000 });
    };

    return (
        <div className="min-h-[100dvh] w-full">
            {poem.voiceWarning && <VoiceWarningDialog open={voiceWarningOpen} onOpenChange={setVoiceWarningOpen} message={poem.voiceWarning} />}
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
                            <audio controls controlsList="nodownload" className="w-full" src={poem.audioSrc}>
                                Your browser does not support the audio element.
                            </audio>
                        </div>

                        {isSongVoicemail ? (
                            <div className="space-y-5">
                                {songSections.map((section, index) => {
                                    return (
                                        <section
                                            key={`${section.label ?? "section"}-${index}`}
                                            className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-card/84 p-6 backdrop-blur-sm md:p-8"
                                        >
                                            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                                            {section.label && (
                                                <div className="mb-5 flex items-center gap-4">
                                                    <span className="h-px flex-1 bg-primary/15" />
                                                    <p className="text-center text-[0.68rem] uppercase tracking-[0.38em] text-primary/75 md:text-[0.72rem]">
                                                        {section.label}
                                                    </p>
                                                    <span className="h-px flex-1 bg-primary/15" />
                                                </div>
                                            )}

                                            <div className="space-y-4">
                                                {section.stanzas.map((stanza, stanzaIndex) => (
                                                    <p
                                                        key={`${section.label ?? "stanza"}-${stanzaIndex}`}
                                                        className="mx-auto max-w-2xl whitespace-pre-wrap text-center font-serif text-[1.02rem] leading-8 text-foreground/88 md:text-[1.12rem] md:leading-9"
                                                    >
                                                        {stanza}
                                                    </p>
                                                ))}
                                            </div>
                                        </section>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="rounded-3xl border border-primary/10 bg-card/85 p-6 md:p-8 space-y-5">
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index} className="text-[1.02rem] md:text-[1.08rem] text-foreground/90 leading-8 whitespace-pre-wrap">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}
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
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all w-full sm:w-auto justify-center ${selected
                            ? "bg-primary/20 text-primary border border-primary/30"
                            : "bg-primary text-primary-foreground shadow-sm hover:opacity-90"
                            }`}
                    >
                        <Heart className={`w-4 h-4 ${selected ? "fill-primary" : ""}`} />
                        <span className="font-medium text-sm">{selected ? "Selected!" : "Select entry"}</span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
