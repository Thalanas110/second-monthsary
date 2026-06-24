import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Filter, ChevronDown, Languages, Menu, X } from "lucide-react";
import { useHome } from "./services/home";
import { useScrolledPast, useLanguage } from "./services/effects";
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
    const [language, setLanguage] = useLanguage();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // Show the filter bar only after the user scrolls past the hero
    const showFilters = useScrolledPast(300);

    return (
        <div className="min-h-[100dvh] w-full bg-background selection:bg-primary/20 pb-24">
            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center mb-[-1px]">
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

                <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h2 className="font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6" style={{ color: '#d9c9a8' }}>
                            To my dear madame Annah Claire,
                        </h2>
                        <h1 className="font-serif text-foreground mb-8 drop-shadow-sm" style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)' }}>
                            Happy 2nd monthsary!
                        </h1>
                        <p className="text-lg md:text-2xl text-foreground/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
                            I took some time to create this so that you can enjoy reading more poems, ehe
                        </p>
                    </motion.div>
                </div>

                {/* Scroll down indicator — absolutely positioned so it never shifts the text */}
                <AnimatePresence>
                    {!showFilters && (
                        <motion.div
                            key="scroll-indicator"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8, transition: { duration: 0.4 } }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="absolute bottom-2 left-0 right-0 flex flex-col items-center gap-1 select-none pointer-events-none z-10"
                        >
                            <span
                                className="text-xs sm:text-sm font-medium tracking-widest uppercase"
                                style={{ color: '#d9c9a8', letterSpacing: '0.18em' }}
                            >
                                Scroll down to view poems
                            </span>
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ChevronDown
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    style={{ color: '#d9c9a8' }}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-12">
                {/* Filters — mobile-collapsible, desktop-inline */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={showFilters ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ pointerEvents: showFilters ? "auto" : "none" }}
                    className={`bg-card/80 border rounded-2xl mb-12 sticky top-4 z-30 overflow-hidden ${
                        showFilters
                            ? "backdrop-blur-md border-card-border shadow-sm"
                            : "backdrop-blur-none border-transparent shadow-none"
                    }`}

                >
                    {/* Top row: search + mobile toggle (desktop: full bar) */}
                    <div className="flex items-center gap-3 p-3 md:p-6 md:gap-4">
                        <div className="relative flex-1 md:w-96 md:flex-none">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search poems or poets..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                            />
                        </div>

                        {/* Mobile-only hamburger toggle */}
                        <button
                            type="button"
                            aria-label={mobileFiltersOpen ? "Close filters" : "Open filters"}
                            aria-expanded={mobileFiltersOpen}
                            onClick={() => setMobileFiltersOpen((prev) => !prev)}
                            className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-xl border border-input bg-background text-foreground/70 hover:bg-secondary hover:text-foreground transition-all shrink-0"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {mobileFiltersOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute"
                                    >
                                        <X className="w-5 h-5" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute"
                                    >
                                        <Menu className="w-5 h-5" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                            {/* Active-filter badge */}
                            {selectedMood !== "All" && !mobileFiltersOpen && (
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-card/80" />
                            )}
                        </button>

                        {/* Desktop-only inline filters */}
                        <div className="hidden md:flex items-center gap-2 flex-wrap ml-auto">
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
                            <div className="h-5 w-px bg-card-border mx-2" />
                            <button
                                onClick={() => setLanguage(language === "bikol" ? "english" : "bikol")}
                                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm transition-all border border-input bg-background text-foreground/70 hover:bg-secondary hover:text-foreground"
                            >
                                <Languages className="w-4 h-4 text-muted-foreground" />
                                <span>{language === "english" ? "Bikolano" : "English"}</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile collapsible drawer */}
                    <AnimatePresence initial={false}>
                        {mobileFiltersOpen && (
                            <motion.div
                                key="mobile-filters"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                className="md:hidden overflow-hidden"
                            >
                                <div className="border-t border-card-border px-3 pb-4 pt-3 flex flex-col gap-3">
                                    {/* Mood filters */}
                                    <div className="flex items-center gap-2">
                                        <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
                                        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Mood</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {moods.map(mood => (
                                            <button
                                                key={mood}
                                                onClick={() => {
                                                    setSelectedMood(mood);
                                                    setMobileFiltersOpen(false);
                                                }}
                                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all ${selectedMood === mood
                                                    ? "bg-primary text-primary-foreground shadow-sm"
                                                    : "bg-background text-foreground/70 hover:bg-secondary hover:text-foreground border border-input"
                                                    }`}
                                            >
                                                {mood}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-card-border" />

                                    {/* Language toggle */}
                                    <button
                                        onClick={() => {
                                            setLanguage(language === "bikol" ? "english" : "bikol");
                                            setMobileFiltersOpen(false);
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all border border-input bg-background text-foreground/70 hover:bg-secondary hover:text-foreground self-start"
                                    >
                                        <Languages className="w-4 h-4 text-muted-foreground" />
                                        <span>{language === "english" ? "Bikolano" : "English"}</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
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
                                <p className="text-lg text-muted-foreground uppercase tracking-widest mb-8">{featuredPoem.poet}</p>
                                {featuredPoem.englishText && (
                                    <div className="flex justify-center mb-12">
                                        <button
                                            onClick={() => setLanguage(language === "bikol" ? "english" : "bikol")}
                                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all border border-input text-sm ${language === "english"
                                                ? "bg-secondary text-secondary-foreground shadow-inner"
                                                : "hover:bg-secondary hover:text-secondary-foreground"
                                                }`}
                                        >
                                            <Languages className="w-4 h-4" />
                                            <span className="font-medium">{language === "english" ? "Show Original" : "English Translation"}</span>
                                        </button>
                                    </div>
                                )}
                                <div className="text-xl md:text-2xl font-serif text-foreground/90 leading-loose whitespace-pre-wrap italic">
                                    {language === "english" && featuredPoem.englishText ? featuredPoem.englishText : featuredPoem.text}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>


        </div>
    );
}