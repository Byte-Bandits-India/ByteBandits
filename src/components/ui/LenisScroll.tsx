"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisScroll = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Disable Lenis on mobile/tablet screens to allow native kinetic scrolling
        if (window.innerWidth < 1024) return;

        const lenis = new Lenis({
            duration: 1.2, // Scroll smoothness
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1, // Control scroll speed
            touchMultiplier: 1.5, // Optional: smoother touch scroll
            lerp: 0.1, // Inertia (lower = smoother)
        });

        (window as unknown as { lenis?: Lenis }).lenis = lenis;

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            if (typeof window !== "undefined") {
                delete (window as unknown as { lenis?: Lenis }).lenis;
            }
            lenis.destroy();
            cancelAnimationFrame(rafId);
        };
    }, []);

    return null;
};

export default LenisScroll;
