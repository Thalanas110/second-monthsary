import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { poems, ArchiveEntry, Mood } from "@/data/poems";
import { getSearchText } from "@/lib/content-entry";

export function useHome() {
    const { toast } = useToast();
    const [search, setSearch] = useState("");
    const [selectedMood, setSelectedMood] = useState<Mood | "All">("All");
    const [featuredPoem, setFeaturedPoem] = useState<ArchiveEntry | null>(null);

    const moods: (Mood | "All")[] = ["All", "Longing", "Devotion", "Passion", "Joy", "Farewell", "Reflection"];

    const filteredPoems = useMemo(() => {
        return poems.filter(poem => {
            const matchesSearch = getSearchText(poem).includes(search.toLowerCase());

            const matchesMood = selectedMood === "All" || poem.moods.includes(selectedMood as Mood);

            return matchesSearch && matchesMood;
        });
    }, [search, selectedMood]);

    const handleSelect = (poem: ArchiveEntry) => {
        setFeaturedPoem(poem);
        toast({
            title: "Poem selected",
            description: "Added to your personal collection.",
            duration: 3000,
        });
    };

    return {
        search, setSearch,
        selectedMood, setSelectedMood,
        featuredPoem,
        moods,
        filteredPoems,
        handleSelect,
    };
}
