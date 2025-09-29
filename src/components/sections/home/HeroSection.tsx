"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"],
    });

    // Scale the hero background image slightly on scroll
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1.1]);

    return (
        <section
            ref={scrollRef}
            className="relative h-[117vh] flex flex-col justify-center items-center text-center hero-section"
        >
            <div className="landing-hero">
                {/* Floating 3D shapes */}
                <div className="shapes">
                    {/* Scroll-based animated shapes with Framer Motion */}
                    <motion.img
                        src="/images/gold.webp"
                        alt="Gold Shape"
                        style={{}}
                        className="absolute -left-[100px] top-0 w-[300px] sm:w-[200px] md:w-[400px] -z-10"
                    />

                    <motion.img
                        src="/images/white.webp"
                        alt="White Shape"
                        style={{}}
                        className="absolute -left-[80px] bottom-[0%] w-[250px] sm:w-[180px] md:w-[350px] -z-10"
                    />

                    <motion.img
                        src="/images/green.webp"
                        alt="Green Shape"
                        style={{}}
                        className="absolute -right-[40px] top-[0%] w-[200px] sm:w-[150px] md:w-[300px] -z-10"
                    />

                </div>

                {/* Animated Title */}
                <div className="w-full mx-auto text-center">
                    <motion.div className="animated-title px-4">
                        {["WHERE IDEAS BECOME DIGITAL REALITIES"].map((line: string, lineIndex: number) => (
                            <div
                                key={lineIndex}
                                className="title-line flex flex-wrap justify-center items-center text-center text-[60px] sm:text-[40px] md:text-[90px] lg:text-[130px] sm:leading-[50px] md:leading-[110px] lg:leading-[140px] font-[anton] text-[#353639]"
                            >
                                {line.split(" ").map((word: string, wIndex: number) => (
                                    <div key={wIndex} className="flex space-x-[2px]"> {/* balanced spacing between words */}
                                        {word.split("").map((char: string, i: number) => (
                                            <motion.span
                                                key={i}
                                                style={{ scale }}
                                                className={`inline-block transition-transform hover:scale-y-110 origin-bottom ${word === "IDEAS" || word === "REALITIES" ? "text-[#F9373A]" : "text-[#333333]"
                                                    }`}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}

                        <p className="mt-8 text-[14px] text-[#818181] font-bold year years">
                            SINCE 2024
                        </p>

                        <div className="relative z-30 flex items-center justify-center mt-[80px]">
                            <button className="bg-[#F9373A] h-[54px] w-[218px] rounded-xl text-white flex items-center justify-center gap-2 px-4">
                                Let's get started
                                <IoIosArrowForward className="text-[20px]" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;