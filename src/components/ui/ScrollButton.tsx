"use client";

import { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import Lenis from "@studio-freight/lenis";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        //  Initialize Lenis with correct options for latest version
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            lerp: 0.1,
        });

        lenisRef.current = lenis;

        //  Scroll listener
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            setVisible(scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        //  Animation frame loop
        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //  Smooth scroll to top
    const scrollToTop = () => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-6 right-6 p-3 rounded-full 
                     bg-[#353639] text-white hover:bg-[#F9373A]
                     transition-all duration-300 shadow-lg hover:scale-110 
                     z-[999]"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </>
    );
};

export default ScrollButton;
