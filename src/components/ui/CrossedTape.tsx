import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CrossedBanner() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const orangeX = useTransform(scrollYProgress, [0, 4], [0, -1500]);
    const whiteX = useTransform(scrollYProgress, [0, 4], [0, 1500]);

    const orangeWords = [
        "CUTTING-EDGE TECHNOLOGY",
        "TAILORED STRATEGIES",
        "SUSTAINABLE PRACTICES",
        "GLOBAL REACH",
        "PROVEN TRACK RECORD",
        "COMPREHENSIVE SUPPORT",
        "COST EFFICIENCY",
    ];

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
            className="relative w-full h-[60vh] sm:h-[80vh] bg-[#ffffff] overflow-hidden"
        >
            {/* Orange Tape */}
            <motion.div
                style={{ x: orangeX }}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
                <div className="rotate-[-15deg] md:rotate-[-10deg] w-[600%] bg-[#FAAC61] text-[#454545] text-[18px] sm:text-[30px] font-[anton] whitespace-nowrap py-3 sm:py-4 tracking-wide">
                    <div className="flex gap-16 sm:gap-40">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <span key={i}>{orangeWords[i % orangeWords.length]}</span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* White Tape */}
            <motion.div
                style={{ x: whiteX }}
                className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            >
                <div className="rotate-[15deg] md:rotate-[10deg] w-[600%] flex gap-6 sm:gap-12">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span
                            key={i}
                            className="bg-white text-[#454545] text-[12px] sm:text-[15px] font-[anton] px-4 py-2 sm:px-9 sm:py-5 uppercase rounded-full border border-black shadow-md whitespace-nowrap"
                        >
                            {whiteWords[i % whiteWords.length]}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Center Image - Positioned at tape intersection */}
            <div className="absolute z-30 top-[40%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.img
                    src="/images/shapes1.png"
                    alt="Center Shape"
                    className="object-contain w-[160px] h-[160px] md:h-[200px] md:w-[200px] lg:w-[248px] lg:h-[248px]"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

            </div>
        </div>
    );
}
