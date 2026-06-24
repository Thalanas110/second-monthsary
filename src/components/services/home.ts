import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { poems, Poem, Mood } from "@/data/poems";

export function useHome() {
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

    return {
        search, setSearch,
        selectedMood, setSelectedMood,
        activePoem, setActivePoem,
        featuredPoem,
        copied,
        moods,
        filteredPoems,
        handleCopy,
        handleSelect,
    };
}
