import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Copy, Check, X, Filter } from "lucide-react";
import { poems, Poem, Mood } from "@/data/poems";
import { PoemCard } from "./poem-card";

const versaillesImg = "/versailles style.png";

export function Home() {
    const { toast } = useToast();
    const [search, setSearch] = useState("");
    const [selectedMood, setSelectedMood] = useState<Mood | "All">("All");
    const [activePoem, setActivePoem] = useState<Poem | null>(null);
    const [featuredPoem, setFeaturedPoem] = useState<Poem | null>(null);
    const [copied, setCopied] = useState(false);

    const moods: (Mood | "All")[] = ["All", "Longing", "Devotion", "Passion", "Joy", "Farewell", "Reflection"];

    const filteredPoems = useMemo(() => {
        return poems.filter(poem => {
            const matchesSearch =
                poem.title.toLowerCase().includes(search.toLowerCase()) ||
                poem.poet.toLowerCase().includes(search.toLowerCase()) ||
                poem.text.toLowerCase().includes(search.toLowerCase());

            const matchesMood = selectedMood === "All" || poem.moods.includes(selectedMood as Mood);

            return matchesSearch && matchesMood;
        });
    }, [search, selectedMood]);

    const handleCopy = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        toast({
            title: "Poem copied",
            description: "The verses have been copied to your clipboard.",
            duration: 3000,
        });
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSelect = (poem: Poem) => {
        setFeaturedPoem(poem);
        setActivePoem(null);
        toast({
            title: "Poem selected",
            description: "Added to your personal collection.",
            duration: 3000,
        });
    };

    return (
        <div className="min-h-[100dvh] w-full bg-background selection:bg-primary/20 pb-24">
            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={versaillesImg}
                        alt="Versailles sunset balcony"
                        className="w-full h-full object-cover object-top opacity-90 scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
                        style={{ animationDuration: '20s' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6">
                            A Salon of Verses
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-8 drop-shadow-sm">
                            Versailles
                        </h1>
                        <p className="text-lg md:text-2xl text-foreground/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
                            Timeless love letters, carefully curated for the romantic soul. Step into the golden light.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 -mt-12">
                {/* Filters */}
                <div className="bg-card/80 backdrop-blur-md border border-card-border p-4 md:p-6 rounded-2xl shadow-sm mb-12 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-4 z-30">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search poems or poets..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                        />
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                        <Filter className="h-4 w-4 text-muted-foreground mr-2 shrink-0" />
                        {moods.map(mood => (
                            <button
                                key={mood}
                                onClick={() => setSelectedMood(mood)}
                                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm transition-all ${selectedMood === mood
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "bg-background text-foreground/70 hover:bg-secondary hover:text-foreground border border-input"
                                    }`}
                            >
                                {mood}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence>
                        {filteredPoems.map((poem, i) => (
                            <motion.div
                                key={poem.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                <PoemCard poem={poem} onClick={() => setActivePoem(poem)} />
                            </motion.div>
                        ))}
                        {filteredPoems.length === 0 && (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-xl font-serif text-muted-foreground italic">No verses found in the archives.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Featured / Selected Poem */}
                <AnimatePresence>
                    {featuredPoem && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-24 p-8 md:p-16 border-2 border-primary/20 bg-card rounded-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Heart className="w-64 h-64" />
                            </div>
                            <div className="relative z-10 text-center max-w-3xl mx-auto">
                                <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-8">Your Selected Verse</h2>
                                <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-4">{featuredPoem.title}</h3>
                                <p className="text-lg text-muted-foreground uppercase tracking-widest mb-12">{featuredPoem.poet}</p>
                                <div className="text-xl md:text-2xl font-serif text-foreground/90 leading-loose whitespace-pre-wrap italic">
                                    {featuredPoem.text}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* Modal */}
            <AnimatePresence>
                {activePoem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                            onClick={() => setActivePoem(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl max-h-[90vh] bg-card border border-card-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            <div className="flex justify-between items-center p-6 border-b border-border bg-card/50 backdrop-blur z-10 sticky top-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                                        {activePoem.year || "Classic"}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setActivePoem(null)}
                                    className="p-2 hover:bg-muted rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-muted-foreground" />
                                </button>
                            </div>

                            <div className="p-8 md:p-12 overflow-y-auto flex-1">
                                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-2">{activePoem.title}</h2>
                                <p className="text-muted-foreground tracking-widest uppercase text-sm mb-10">{activePoem.poet}</p>

                                <p className="text-lg md:text-xl font-serif text-foreground/90 leading-loose whitespace-pre-wrap border-l-2 border-primary/20 pl-6">
                                    {activePoem.text}
                                </p>
                            </div>

                            <div className="p-6 border-t border-border bg-card/50 backdrop-blur flex justify-end gap-4 sticky bottom-0">
                                <button
                                    onClick={() => handleCopy(activePoem.text)}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-input hover:bg-secondary hover:text-secondary-foreground transition-all"
                                >
                                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    <span className="font-medium text-sm">{copied ? "Copied" : "Copy"}</span>
                                </button>
                                <button
                                    onClick={() => handleSelect(activePoem)}
                                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
                                >
                                    <Heart className="w-4 h-4" />
                                    <span className="font-medium text-sm">Select Poem</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}