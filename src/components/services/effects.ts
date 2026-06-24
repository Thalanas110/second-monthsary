import { useState, useEffect, useRef, RefObject } from "react";

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

/**
 * Returns a [ref, inView] tuple. `inView` toggles `true` when the element
 * enters the viewport and `false` when it leaves — enabling both reveal
 * and disappear animations as the user scrolls.
 */
export function useInView<T extends Element>(
    options: IntersectionObserverInit = { threshold: 0.1 }
): [RefObject<T>, boolean] {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => {
            // Toggle both ways: appear on enter, disappear on leave
            setInView(entry.isIntersecting);
        }, options);

        observer.observe(el);
        return () => observer.disconnect();
    }, [options]);

    return [ref, inView];
}

/**
 * Custom hook to manage global language state (Bikolano vs English)
 * and synchronize it across components using localStorage and a custom event.
 */
export function useLanguage() {
    const [language, setLanguageState] = useState<"bikol" | "english">(() => {
        if (typeof window !== "undefined") {
            return (localStorage.getItem("app-language") as "bikol" | "english") || "bikol";
        }
        return "bikol";
    });

    const setLanguage = (lang: "bikol" | "english") => {
        localStorage.setItem("app-language", lang);
        setLanguageState(lang);
        window.dispatchEvent(new Event("app-language-change"));
    };

    useEffect(() => {
        const handleLanguageChange = () => {
            const currentLang = (localStorage.getItem("app-language") as "bikol" | "english") || "bikol";
            setLanguageState(currentLang);
        };
        window.addEventListener("app-language-change", handleLanguageChange);
        return () => window.removeEventListener("app-language-change", handleLanguageChange);
    }, []);

    return [language, setLanguage] as const;
}
