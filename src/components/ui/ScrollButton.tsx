"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

interface GlobalWithLenis extends Window {
    lenis?: {
        scrollTo: (target: number | string | HTMLElement) => void;
    };
}

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        //  Scroll listener
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            setVisible(scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //  Smooth scroll to top
    const scrollToTop = () => {
        const globalWindow = window as unknown as GlobalWithLenis;
        if (globalWindow.lenis) {
            globalWindow.lenis.scrollTo(0);
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
