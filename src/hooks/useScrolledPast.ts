import { useEffect, useState } from "react";

/**
 * Returns `true` once the user has scrolled past `threshold` pixels.
 * Resets back to `false` if they scroll back to the top.
 */
export function useScrolledPast(threshold = 100): boolean {
    const [scrolledPast, setScrolledPast] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolledPast(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Run once on mount in case the page is already scrolled
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolledPast;
}