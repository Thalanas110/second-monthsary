import { RefObject, useEffect, useRef, useState } from "react";

/**
 * Returns a [ref, inView] tuple. `inView` toggles `true` when the element
 * enters the viewport and `false` when it leaves — enabling both reveal
 * and disappear animations as the user scrolls.
 */
export function useInView<T extends Element>(
    options: IntersectionObserverInit = { threshold: 0.1 }
): [RefObject<T | null>, boolean] {
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