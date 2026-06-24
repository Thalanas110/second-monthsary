import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Filter } from "lucide-react";
import { useHome } from "./services/home";
import { useScrolledPast } from "./services/effects";
import { PoemCard } from "./poem-card";
import { useLocation } from "wouter";

const versaillesImg = "/versailles style.png";

export function Home() {
    const {
        search, setSearch,
        selectedMood, setSelectedMood,
        featuredPoem,
        moods,
        filteredPoems,
        handleSelect,
    } = useHome();

    const [, navigate] = useLocation();

    // Show the filter bar only after the user scrolls past the hero
    const showFilters = useScrolledPast(300);

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
                        <h2 className="font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6" style={{ color: '#d9c9a8' }}>
                            To my dear madame Annah Claire,
                        </h2>
                        <h1 className="font-serif text-foreground mb-8 drop-shadow-sm whitespace-nowrap" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
                            Happy 2nd monthsary!
                        </h1>
                        <p className="text-lg md:text-2xl text-foreground/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
                            I took some time to create this so that you can enjoy reading more poems, ehe
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 -mt-12">
                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={showFilters ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ pointerEvents: showFilters ? "auto" : "none" }}
                    className="bg-card/80 backdrop-blur-md border border-card-border p-4 md:p-6 rounded-2xl shadow-sm mb-12 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-4 z-30"
                >
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
                </motion.div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence>
                        {filteredPoems.map((poem) => (
                            <motion.div
                                key={poem.id}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PoemCard poem={poem} onClick={() => navigate(`/poem/${poem.id}`)} />
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


        </div>
    );
}