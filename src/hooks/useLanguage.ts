import { useState, useEffect } from "react";

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
