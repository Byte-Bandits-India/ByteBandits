"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CrossedBanner() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // More reasonable scroll ranges
    const offset1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const offset2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

    // Words for the orange tape
    const orangeWords = [
        "CUTTING-EDGE TECHNOLOGY",
        "TAILORED STRATEGIES",
        "SUSTAINABLE PRACTICES",
        "GLOBAL REACH",
        "PROVEN TRACK RECORD",
        "COMPREHENSIVE SUPPORT",
        "COST EFFICIENCY",
    ];

    // Words for the white pills
    const whiteWords = [
        "Custom Solutions",
        "Expert Guidance",
        "Industry Experience",
        "Reliable Service",
        "24/7 Availability",
        "Satisfaction Guaranteed",
        "Innovative Approach",
    ];

    return (
        <div
            ref={containerRef}
            className="tape-container relative w-full h-[60vh] sm:h-[70vh] bg-[#ffffff] overflow-hidden"
        >
            {/* Orange Tape - TOP */}
            <motion.div
                style={{ x: offset1 }}
                className="orange-tape absolute w-[200%] -rotate-[5deg] top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#FAAC61] text-[#454545] text-[14px] sm:text-[20px] font-[anton] whitespace-nowrap py-3 sm:py-4 tracking-wide"
            >
                <div className="flex gap-8 sm:gap-16">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="flex-shrink-0">
                            {orangeWords[i % orangeWords.length]}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* White Tape - BOTTOM */}
            <motion.div
                style={{ x: offset2 }}
                className="white-tape absolute w-[200%] -rotate-[5deg] top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex gap-4 sm:gap-8"
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <span
                        key={i}
                        className="white-pill bg-white text-[#454545] text-[10px] sm:text-[12px] font-[anton] px-4 py-2 sm:px-6 sm:py-3 uppercase rounded-full border border-black shadow-md whitespace-nowrap flex-shrink-0"
                    >
                        {whiteWords[i % whiteWords.length]}
                    </span>
                ))}
            </motion.div>

            {/* Center Image */}
            <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                    src="/images/white.webp"
                    alt="Center Shape"
                    className="w-20 h-20 sm:w-28 sm:h-28 floating"
                />
            </div>
        </div>
    );
}