"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
    // Reference to section (so animations trigger when hero enters/leaves viewport)
    const scrollRef = useRef<HTMLElement | null>(null);

    // Track scroll progress relative to the hero section
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"],
    });

    // Scale motion value (larger → smaller while scrolling)
    const scale = useTransform(scrollYProgress, [0, 0], [1.5, 1.1]);

    return (
        <section
            ref={scrollRef}
            className="relative h-[117vh] flex flex-col justify-center items-center text-center hero-section"
        >
            <div className="landing-hero">
                {/* Floating 3D shapes */}
                <div className="shapes">
                    {/* Scroll-animated shapes */}
                    <motion.img
                        src="/images/gold.webp"
                        alt="Gold Shape"
                        style={{ scale }}
                        animate={{ y: [0, -30, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.2 }}
                        className="absolute -left-[100px] -top-[150px] w-[300px] sm:w-[200px] md:w-[400px] lg:w-[500px] lg:-top-[300px] lg:-left-[200px] xl:w-[800px] xl:-top-[500px] xl:-left-[300px] z-10"
                    />

                    <motion.img
                        src="/images/white.webp"
                        alt="White Shape"
                        style={{ scale }}
                        animate={{ y: [0, -24, 0] }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: 0.2
                        }}
                        className="absolute -left-[100px] bottom-[0%] w-[250px] sm:w-[180px] md:w-[350px] lg:w-[500px] lg:-bottom-[6%] lg:-left-[300px] xl:w-[800px] xl:-bottom-[10%] xl:-left-[500px] z-0"
                    />

                    <motion.img
                        src="/images/green.webp"
                        alt="Green Shape"
                        style={{ scale }}
                        animate={{ y: [0, -36, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.4 }}
                        className="absolute -right-[40px] top-[0%] w-[200px] sm:w-[150px] md:w-[300px] lg:w-[500px] lg:-right-[300px] xl:w-[800px] xl:-right-[500px] z-10 "
                    />
                </div>

                {/* Animated Title */}
                <div className="w-full max-w-[942px] mx-auto text-center">
                    <motion.div className="animated-title">
                        {[
                            "WHERE IDEAS",
                            "BECOME DIGITAL",
                            "REALITIES"
                        ].map((line: string, lineIndex: number) => (
                            <div
                                key={lineIndex}
                                className="title-line flex flex-wrap justify-center items-center text-center 
               text-[60px] sm:text-[40px] md:text-[90px] lg:text-[134px] 
               sm:leading-[50px] md:leading-[110px] lg:leading-[143px] 
               font-[anton] text-[#353639] gap-x-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-16"
                            >
                                {line.split(" ").map((word: string, wIndex: number) => (
                                    <motion.span
                                        key={wIndex}
                                        style={{ scale }}
                                        className={`inline-block transition-transform hover:scale-y-110 origin-bottom ${word === "IDEAS" || word === "REALITIES"
                                            ? "text-[#F9373A]"
                                            : "text-[#333333]"
                                            } 
    mr-2 sm:mr-4 md:mr-6 lg:mr-0`} // Add right margin on mobile & md, reset on lg+
                                    >
                                        {word}
                                    </motion.span>
                                ))}

                            </div>
                        ))}
                        <p className="mt-8 text-[14px] lg:text-[25px] text-[#818181] font-bold year years">
                            SINCE 2024
                        </p>

                        <div className="relative z-30 flex items-center justify-center mt-[80px]">
                            <button className="bg-[#F9373A] h-[54px] w-[218px] rounded-xl text-white flex items-center justify-center gap-2 px-4">
                                Let&apos;s get started
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
