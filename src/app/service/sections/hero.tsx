"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-l from-[#FF9B43] to-[#FF6B00] h-fit overflow-hidden">
            {/* Background Overlay to Hide Fixed Background */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#FF9B43] to-[#FF6B00] z-10"></div>

            <div className="relative z-20 flex items-center justify-center h-screen max-w-[1440px] mx-auto">
                {/* Your existing content */}
                <div className="relative mx-auto px-4 flex w-full max-w-[1440px] max-h-[437px] flex-col font-anton text-[#333333] justify-between h-full">
                    {/* Step 1 - Top Left */}
                    <div className="flex flex-1 items-start justify-start uppercase">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="flex w-full items-center justify-start"
                        >
                            <h1 className="text-[clamp(50px,6vw,120px)] font-bold leading-[1.1] whitespace-nowrap">
                                We Build.
                            </h1>
                        </motion.div>
                    </div>

                    {/* Step 2 - Middle Center */}
                    <div className="flex flex-1 items-center justify-center uppercase relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="flex w-full items-center justify-center"
                        >
                            <h1 className="text-[clamp(50px,6vw,120px)] font-bold leading-[1.1] whitespace-nowrap text-center">
                                We Design.
                            </h1>
                        </motion.div>
                        <p className="text-[clamp(50px,6vw,120px)] font-bold leading-[1.1] whitespace-nowrap text-center">*</p>
                    </div>

                    {/* Step 3 - Bottom Right */}
                    <div className="flex flex-1 items-end justify-end uppercase">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            className="flex w-full items-center justify-end"
                        >
                            <h1 className="text-[clamp(50px,6vw,120px)] font-bold leading-[1.1] whitespace-nowrap text-right">
                                We Market.
                            </h1>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Left Tagline */}
                <p className="absolute bottom-16 md:left-[10px] px-4 md:px-0 max-w-[437px] text-[#333333] font-medium text-[14px] md:text-[16px] lg:text-[20px] tracking-tighter z-20">
                    At <span className="font-bold">Byte Bandits</span>, &quot;Engineering Digital Brilliance&quot; drives everything we do.
                    We fuse creativity and technology to craft smart, scalable solutions that help businesses thrive
                    in the digital era.
                </p>

            </div>
        </section>
    );
}