"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Lenis from "@studio-freight/lenis";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            lerp: 0.1,
        });
        setLenis(lenisInstance);

        // Start RAF loop
        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Visibility handler
        const toggleVisibility = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            lenisInstance.destroy();
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        lenis?.scrollTo(0);
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-6 right-6 p-3 rounded-full 
                     bg-[#353639] text-white hover:bg-[#F9373A]
                     transition-all duration-300 shadow-lg hover:scale-110"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </>
    );
};

export default ScrollButton;
