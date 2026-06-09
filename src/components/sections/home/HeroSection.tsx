"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  // Container variants to stagger animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier for a smooth premium feel
      },
    },
  };

  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-center items-center text-center overflow-hidden bg-white">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none opacity-20"
      >
        <source src="/Videos/hi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* TEXTURED GRID OVERLAY */}
      <div 
        className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" 
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      />

      {/* HERO CONTENT CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full px-6 flex flex-col items-center justify-center mt-12"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-semibold text-[#0f172a] mb-6 lg:mb-12"
        >
          From Workflow to Product.
          <span className="block mt-2">From Idea to Revenue.</span>
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p
          variants={itemVariants}
          className="max-w-[726px] text-base sm:text-lg md:text-[20px] lg:text-[24px] text-[#334155] leading-[27px] tracking-[-2%] mb-10 font-medium"
        >
          Ideas deserve more than development. They deserve strategy, speed, and a team 
          that treats every product like a business, not a backlog. Micro-SaaS, AI 
          automations, and web applications built to perform from day one.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF3B30] hover:bg-[#E03027] text-white px-8 py-3 rounded-xl text-base font-semibold shadow-[0_10px_25px_rgba(255,59,48,0.25)] hover:shadow-[0_15px_30px_rgba(255,59,48,0.35)] transition-all duration-300 transform hover:-translate-y-[2px]"
          >
            Book a Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;