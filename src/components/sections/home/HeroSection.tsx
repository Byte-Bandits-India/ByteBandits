"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const HeroSection = () => {
    const scrollRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0], [1.5, 1.1]);

    return (
        <section
            ref={scrollRef}
            className="relative h-[117vh] flex flex-col justify-center items-center text-center hero-section md:pt-20 lg:pt-16"
        >
            <div className="">
                {/* Floating 3D shapes */}
                <div className="">
                    {/* Gold Shape */}
                    <motion.div
                        style={{ scale, rotate: -71 }}
                        animate={{ y: ["0%", "-10%", "0%"] }}
                        transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                        className="absolute left-[-24vw] top-[-4vh] md:left-[-26vw] md:top-[-14vw] lg:left-[-36vw] w-[64vw] md:w-[50vw] lg:w-[50vw] xl:w-[50vw] xl:-left-[30vw] xl:-top-[20vw] z-10"
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
                        transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.2 }}
                        className="absolute left-[-34vw] -bottom-[10vh] w-[80vw] md:w-[54vw] lg:w-[50vw] xl:w-[50vw] xl:left-[-30vw] xl:-bottom-[20vw] z-0"
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
                        transition={{ duration: 5.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.4 }}
                        className="absolute right-[-26vw] -top-[4vh] w-[68vw] md:w-[50vw] lg:w-[50vw] xl:w-[40vw] xl:right-[-18vw] z-10"
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
                <div className="relative w-full max-w-[942px] mx-auto text-center xl:pb-8">
                    {/* Shape 1 above text */}
                    <div className="absolute hidden lg:block w-[6rem] md:w-[7.5rem] z-[50] -top-16 -left-10">
                        <Image
                            src="/images/shapes1.png"
                            alt="Top Shape"
                            width={120}
                            height={120}
                            className="w-full h-auto"
                        />
                    </div>

                    <motion.div className="relative">
                        {[
                            "WHERE IDEAS",
                            "BECOME DIGITAL",
                            "REALITIES"
                        ].map((line, lineIndex) => (
                            <div
                                key={lineIndex}
                                className="title-line flex justify-center items-center text-center
                text-[42px] sm:text-[2.5rem] md:text-[4.625rem] lg:text-[6rem] xl:text-[7.5rem]
                sm:leading-[3.125rem] md:leading-[4.875rem] lg:leading-[6.5rem] xl:leading-[8.125rem]
                font-[anton] tracking-tight"
                            >
                                <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4 md:gap-x-2 lg:gap-x-8">
                                    {line.split(" ").map((word, wIndex) => (
                                        <div
                                            key={wIndex}
                                            className="inline-flex"
                                            style={{
                                                color: word === "IDEAS" || word === "REALITIES" ? "#F9373A" : "#353639",
                                            }}
                                        >
                                            {word.split("").map((char, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-block transition-transform duration-200 hover:scale-y-110 origin-bottom"
                                                >
                                                    {char}
                                                </span>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Shape 2 below text */}
                        <div className="mt-6 w-[6.5rem] md:w-[8rem] hidden lg:block absolute z-[50] left-[470px] bottom-[200px]">
                            <Image
                                src="/images/shapes2.png"
                                alt="Bottom Shape"
                                width={128}
                                height={128}
                                className="w-full h-auto"
                            />
                        </div>

                        <p className="mt-8 text-[14px] lg:text-[25px] text-[#818181] font-bold year years">
                            SINCE 2024
                        </p>

                        <div className="relative z-30 flex items-center justify-center mt-[80px] xl:mt-[40px] ">
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