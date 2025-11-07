"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const HeroSection = () => {
    const scrollRef = useRef<HTMLElement | null>(null);
    const [hoveredChar, setHoveredChar] = useState<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0], [1.5, 1.1]);

    const getCharId = (lineIndex: number, wordIndex: number, charIndex: number) =>
        `${lineIndex}-${wordIndex}-${charIndex}`;

    return (
        <section
            ref={scrollRef}
            className="relative h-100dvh md:h-[110vh] lg:h-[117vh] bg-[#F2F2F0] flex flex-col justify-center items-center text-center hero-section md:pt-20 lg:pt-10 overflow-hidden"
        >
            <div className="relative w-full">
                {/* Floating 3D Shapes */}
                <div className="pointer-events-none">
                    {/* Gold Shape */}
                    <motion.div
                        style={{ scale, rotate: -71 }}
                        animate={{ y: ["0%", "-10%", "0%"] }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        }}
                        className="absolute pointer-events-none left-[-24vw] top-[-30vh] md:left-[-26vw] md:top-[-50vw] lg:left-[-28vw] lg:top-[-38vw] w-[54vw] md:w-[50vw] lg:w-[50vw] xl:w-[44vw] xl:-left-[28vw] xl:-top-[34vw] z-10"
                    >
                        <Image
                            src="/images/gold.webp"
                            alt="Gold Shape"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                            priority
                        />
                    </motion.div>

                    {/* White Shape */}
                    <motion.div
                        style={{ scale }}
                        animate={{ y: ["0%", "-8%", "0%"] }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                        className="absolute pointer-events-none left-[-36vw] -bottom-[34vh] w-[70vw] md:w-[54vw] lg:w-[50vw] xl:w-[46vw] xl:left-[-30vw] xl:-bottom-[28vw] z-0"
                    >
                        <Image
                            src="/images/white.webp"
                            alt="White Shape"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                            priority
                        />
                    </motion.div>

                    {/* Green Shape */}
                    <motion.div
                        style={{ scale }}
                        animate={{ y: ["0%", "-12%", "0%"] }}
                        transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: 0.4,
                        }}
                        className="absolute pointer-events-none right-[-24vw] -top-[30vh] w-[64vw] md:w-[50vw] lg:w-[50vw] xl:w-[42vw] xl:-top-[10vw] xl:right-[-24vw] z-10"
                    >
                        <Image
                            src="/images/green.webp"
                            alt="Green Shape"
                            width={700}
                            height={600}
                            className="w-full h-auto"
                            priority
                        />
                    </motion.div>
                </div>

                {/* Title + Shapes */}
                <div className="relative w-full max-w-[942px] mx-auto text-center xl:pb-8 z-[10]">
                    <motion.div className="relative z-[20] inline-block">
                        {/* Shape 1 (top left near text) */}
                        <div className="absolute -top-[8%] left-[5%] w-[3rem] md:w-[4rem] lg:w-[6rem] pointer-events-none">
                            <Image
                                src="/images/shape-1.png"
                                alt="Top Shape"
                                width={120}
                                height={120}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Title */}
                        {["WHERE IDEAS", "BECOME DIGITAL", "REALITIES"].map((line, lineIndex) => (
                            <div
                                key={lineIndex}
                                className="flex justify-center text-center text-[50px] sm:text-[clamp(40px,7vw,142px)] leading-[1.1] font-[anton] tracking-tight"
                            >
                                <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4 md:gap-x-6">
                                    {line.split(" ").map((word, wIndex) => (
                                        <div
                                            key={wIndex}
                                            className="inline-flex"
                                            style={{
                                                color:
                                                    word === "IDEAS" || word === "REALITIES"
                                                        ? "#DE2D40"
                                                        : "#333333",
                                            }}
                                        >
                                            {word.split("").map((char, i) => {
                                                const charId = `${lineIndex}-${wIndex}-${i}`;
                                                return (
                                                    <span
                                                        key={i}
                                                        className="inline-block transition-transform duration-150 origin-bottom cursor-default"
                                                        style={{
                                                            transform:
                                                                hoveredChar === charId
                                                                    ? "scaleY(1.1)"
                                                                    : "scaleY(1)",
                                                        }}
                                                        onMouseEnter={() =>
                                                            setHoveredChar(charId)
                                                        }
                                                        onMouseLeave={() => setHoveredChar(null)}
                                                    >
                                                        {char}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Shape 2 (near REALITIES, slightly above) */}
                        <div className="absolute top-[32%] md:top-[34%] lg:top-[28%] xl:top-[48%] right-[6%] w-[3rem] md:w-[4.5rem] lg:w-[6rem] xl:w-[6.5rem] pointer-events-none">
                            <Image
                                src="/images/shape-2.png"
                                alt="Shape near REALITIES"
                                width={128}
                                height={128}
                                className="w-full h-auto"
                            />
                        </div>


                        {/* Subtitle */}
                        <p className="mt-8 text-[14px] text-[#818181] font-bold select-none">
                            SINCE 2024
                        </p>

                        {/* Button */}
                        <div className="flex items-center justify-center mt-[40px] md:mt-[80px] xl:mt-[40px]">
                            <button
                                className="bg-[#F9373A] h-[40px] w-[155px] md:h-[54px] md:w-[218px]
                rounded-xl text-[12px] md:text-[16px] text-white flex items-center justify-center gap-2
                shadow-[0_18px_30px_rgba(0,0,0,0.35)]
                hover:shadow-[0_25px_40px_rgba(0,0,0,0.25)]
                hover:-translate-y-1 transition-all duration-300 ease-out"
                            >
                                Let&apos;s get started
                                <IoIosArrowForward className="text-[12px] md:text-[20px]" />
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
