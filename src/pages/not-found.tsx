import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Heart } from "lucide-react";

const versaillesImg = "/versailles style.png";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background overflow-hidden relative selection:bg-primary/20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={versaillesImg}
          alt="Versailles background"
          className="w-full h-full object-cover object-center opacity-50 scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
        />
      </div>

      {/* Faint watermark heart */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <Heart className="w-[40vw] h-[40vw] text-primary opacity-[0.03]" strokeWidth={0.5} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-xl mx-auto"
      >
        {/* Eyebrow */}
        <p className="font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-6" style={{ color: '#d9c9a8' }}>
          — Lost in the Gardens —
        </p>

        {/* 404 numeral */}
        <h1
          className="font-serif text-[7rem] md:text-[11rem] leading-none text-transparent select-none mb-2"
          style={{
            WebkitTextStroke: "1.5px rgba(217, 201, 168, 0.7)",
          }}
        >
          404
        </h1>


        {/* Divider ornament */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-16" style={{ backgroundColor: 'rgba(217, 201, 168, 0.3)' }} />
          <Heart className="w-4 h-4" style={{ color: 'rgba(217, 201, 168, 0.5)', fill: 'rgba(217, 201, 168, 0.3)' }} />
          <span className="h-px w-16" style={{ backgroundColor: 'rgba(217, 201, 168, 0.3)' }} />
        </div>

        {/* Description */}
        <p className="font-serif italic text-lg md:text-2xl text-foreground/80 leading-relaxed mb-4">
          This page has wandered beyond the palace gates.
        </p>
        <p className="text-sm text-muted-foreground mb-12">
          The verse you seek does not dwell here. Perhaps it was carried away by the evening breeze.
        </p>

        {/* Back button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-8 py-3 text-primary-foreground rounded-xl font-medium shadow-md hover:opacity-90 transition-opacity text-sm"
          style={{ backgroundColor: '#d9c9a8', color: '#1a1a1a' }}
        >
          <Heart className="w-4 h-4" />
          Return to the Salon
        </motion.button>
      </motion.div>
    </div>
  );
}
