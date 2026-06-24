import { Poem } from "@/data/poems";
import { motion } from "framer-motion";

export function PoemCard({ poem, onClick }: { poem: Poem; onClick: () => void }) {
    const preview = poem.text.split("\n").filter(l => l.trim().length > 0).slice(0, 3).join("\n");

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative cursor-pointer flex flex-col justify-between h-full p-6 md:p-8 bg-card rounded-xl border border-card-border shadow-sm hover:shadow-md transition-all duration-300"
            onClick={onClick}
        >
            <div>
                <h3 className="text-xl md:text-2xl font-serif text-primary mb-2 line-clamp-2">{poem.title}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">{poem.poet}</p>
                <div className="relative">
                    <div className="absolute -left-2 -top-2 text-4xl text-primary/10 font-serif">"</div>
                    <p className="text-foreground/80 italic font-serif leading-relaxed whitespace-pre-wrap pl-4 border-l border-primary/20">
                        {preview}...
                    </p>
                </div>
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