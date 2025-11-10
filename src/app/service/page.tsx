"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="h-screen w-full grid grid-cols-1 md:grid-cols-3 bg-black text-white">
            {/* Column 1 */}
            <div className="flex items-start justify-start p-8 md:p-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[clamp(40px,8vw,100px)] font-bold leading-[1.1] max-w-[128px]"
                >
                    We Build.
                </motion.h1>
            </div>

            {/* Column 2 */}
            <div className="flex items-center justify-center p-8 md:p-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-[clamp(40px,8vw,100px)] font-bold leading-[1.1] max-w-[128px] text-center"
                >
                    We Design.
                </motion.h1>
            </div>

            {/* Column 3 */}
            <div className="flex items-end justify-end p-8 md:p-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-[clamp(40px,8vw,100px)] font-bold leading-[1.1] max-w-[128px] text-right"
                >
                    We Market.
                </motion.h1>
            </div>
        </section>
    );
}
