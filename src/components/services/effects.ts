export const heroIntroEffect = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.2 },
};

export const scrollIndicatorEffect = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8, transition: { duration: 0.4 } },
    transition: { duration: 0.8, delay: 1.2 },
};

export function stickyFilterBarEffect(visible: boolean) {
    return {
        initial: { opacity: 0, y: -20 },
        animate: visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
        transition: { duration: 0.4, ease: "easeOut" as const },
        style: { pointerEvents: visible ? ("auto" as const) : ("none" as const) },
    };
}

export const mobileFiltersDrawerEffect = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
};

export function poemCardRevealEffect(visible: boolean) {
    return {
        initial: { opacity: 0, y: 30 },
        animate: visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.5, ease: "easeOut" as const },
    };
}

export function slideInEffect(direction: "left" | "right") {
    return {
        initial: { opacity: 0, x: direction === "left" ? -16 : 16 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.4 },
    };
}

export function fadeUpEffect(delay = 0, y = 24, duration = 0.6) {
    return {
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { duration, delay },
    };
}

export const dividerRevealEffect = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: { duration: 0.7, delay: 0.3 },
};
