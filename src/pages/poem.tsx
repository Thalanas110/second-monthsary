import { motion } from "framer-motion";
import { Heart, Copy, Check, ArrowLeft, Languages } from "lucide-react";
import { useLocation } from "wouter";
import { poems } from "@/data/poems";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/services/effects";

export default function PoemPage({ params }: { params: { id: string } }) {
    const poem = poems.find(p => p.id === params.id);
    const [, navigate] = useLocation();
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);
    const [selected, setSelected] = useState(false);
    const [language, setLanguage] = useLanguage();

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

    const handleCopy = async () => {
        const textToCopy = language === "english" && poem.englishText ? poem.englishText : poem.text;
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        toast({ title: "Poem copied", description: "The verses have been copied to your clipboard.", duration: 3000 });
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSelect = () => {
        setSelected(true);
        toast({ title: "Poem selected", description: "Added to your personal collection.", duration: 3000 });
    };

    return (
        <div className="min-h-[100dvh] w-full">
            <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-20">
                    {/* Back button & Language toggle */}
                    <div className="flex items-center justify-between mb-12">
                        <motion.button
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => navigate("/")}
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                            <span className="text-sm font-medium tracking-wide">Back to library</span>
                        </motion.button>

                        {poem.englishText && (
                            <motion.button
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setLanguage(language === "bikol" ? "english" : "bikol")}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-input text-muted-foreground hover:text-foreground hover:bg-secondary transition-all text-sm font-medium"
                            >
                                <Languages className="w-4 h-4" />
                                <span>{language === "english" ? "Bikolano" : "English"}</span>
                            </motion.button>
                        )}
                    </div>

                    {/* Poem header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {poem.year && (
                            <span className="inline-block text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium mb-6">
                                {poem.year}
                            </span>
                        )}
                        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-4 leading-tight">
                            {language === "english" && poem.englishTitle ? poem.englishTitle : poem.title}
                        </h1>
                        <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm mb-3">
                            {poem.poet}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-12">
                            {poem.moods.map(mood => (
                                <span key={mood} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                                    {mood}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-14 origin-left"
                    />

                    {/* Poem body */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="relative pl-8 border-l-2 border-primary/20"
                    >
                        <div className="absolute -left-3 -top-3 text-6xl text-primary/10 font-serif leading-none select-none">"</div>
                        <p className="text-xl md:text-2xl font-serif text-foreground/90 leading-[2] whitespace-pre-wrap italic">
                            {language === "english" && poem.englishText ? poem.englishText : poem.text}
                        </p>
                        <div className="absolute -bottom-4 right-0 text-6xl text-primary/10 font-serif leading-none select-none rotate-180">"</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20"
                    >
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-input hover:bg-secondary hover:text-secondary-foreground transition-all w-full sm:w-auto justify-center"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            <span className="font-medium text-sm">{copied ? "Copied!" : "Copy verse"}</span>
                        </button>
                        <button
                            onClick={handleSelect}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all w-full sm:w-auto justify-center ${selected
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
