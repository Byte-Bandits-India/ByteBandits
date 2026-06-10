"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const MarketSurvivalSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      title: "Product-Thinking,",
      highlight: "First",
      timeline: "Engagement - Week 0–1",
    },
    {
      title: "Fixed Window,",
      highlight: "Fixed Price",
      timeline: "Engagement - Week 1–3",
    },
    {
      title: "Production From",
      highlight: "Week Three",
      timeline: "Engagement - Week 3–5",
    },
    {
      title: "You Own",
      highlight: "Everything.",
      timeline: "Engagement - Week 6",
    },
  ];

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full px-4 sm:px-6 py-12 bg-white">
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto bg-black text-white rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col gap-12 sm:gap-16 shadow-sm overflow-hidden"
      >
        {/* UPPER ROW: mockups and aligned copy using Flexbox to bypass CSS Grid pollution */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between w-full">
          
          {/* Left Column: Mockup Image */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[50%] flex justify-center items-center relative h-[180px] xs:h-[220px] sm:h-[320px] md:h-[420px]"
          >
            <Image
              src="/images/home/design.png"
              alt="Design Mockup Laptop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Right Column: Copy Block (Left Aligned on mobile, Right Aligned on Desktop) */}
          <div className="w-full lg:w-[50%] flex flex-col items-start text-left lg:items-end lg:text-right">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-snug tracking-tight mb-4 sm:mb-6 max-w-xl"
            >
              {"Build The Thinnest Product That Survives Contact With The Market."}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg"
            >
              {"Every Byte Bandits engagement is led by a partner-level engineer or product designer with 5+ years shipped. We don't sub out, juniorize, or hand you to an account manager halfway in."}
            </motion.p>
          </div>
        </div>

        {/* LOWER ROW: HORIZONTAL TIMELINE ROW using Flexbox to bypass CSS Grid pollution */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap gap-8 pt-10 border-t border-gray-800 w-full text-left">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="w-full sm:w-[calc(50%-16px)] md:w-[25%] flex flex-col items-start"
            >
              <span className="text-white text-lg sm:text-[20px] font-bold mb-1 leading-snug">
                {item.title}
              </span>
              <span className="text-[#FF3B30] text-lg sm:text-[20px] font-bold mb-4 leading-snug">
                {item.highlight}
              </span>
              <span className="text-gray-500 text-xs font-semibold tracking-wider uppercase">
                {item.timeline}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MarketSurvivalSection;
