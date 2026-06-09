"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ExpertiseCard {
  title: string;
  description: string;
  href: string;
}

export const ExpertiseSection = () => {
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);
  const activeCardIdx = hoveredCardIdx !== null ? hoveredCardIdx : 0;

  const cards: ExpertiseCard[] = [
    {
      title: "Micro-SaaS builds",
      description:
        "Small, focused SaaS tools engineered to solve one painful problem for a specific audience. Designed from day one for subscription revenue, low churn, and high retention.",
      href: "/service",
    },
    {
      title: "AI Agents & Workflow Automation",
      description:
        "Intelligent AI agents and automated workflows designed to eliminate manual bottlenecks, optimize processes, and scale operations smoothly without increasing overhead.",
      href: "/service",
    },
    {
      title: "Web Applications",
      description:
        "High-performance, secure, and modern web applications built using Next.js and Tailwind CSS, tailored to deliver seamless user experiences and drive digital growth.",
      href: "/service",
    },
    {
      title: "MVP Development",
      description:
        "Fast-track your validation process with a high-fidelity Minimum Viable Product. Designed to capture early user feedback and prove product-market fit rapidly.",
      href: "/service",
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
    <section className="w-full relative z-20 -mt-16 md:-mt-24 pb-12 md:pb-20 bg-transparent">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full bg-[#FFBFBF] rounded-[32px] md:rounded-[48px] px-6 py-16 sm:px-10 lg:px-20 xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start shadow-sm"
      >
        {/* LEFT COLUMN: OVERVIEW */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          
          {/* Pill Badge */}
          <motion.div
            variants={itemVariants}
            className="border border-black bg-white text-[#1e293b] text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full mb-6 select-none bg-transparent"
          >
            Our Expertise
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold text-black mb-6 max-w-[528px] leading-[58px]"
          >
            Defined models to solve your most immediate bottlenecks.
          </motion.h2>

          {/* Subtitle / Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base text-[#111111]/80 leading-relaxed mb-10 max-w-[440px] font-medium"
          >
            {"Every product we build is centred around users, usability, and monetization. We don't add features because we can we build what your users need to stay, pay, and grow with your product."}
          </motion.p>

          {/* Outline Button */}
          <motion.div variants={itemVariants}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-black bg-white text-black px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-black hover:text-white"
            >
              Not Sure What to Choose ?
            </Link>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 2x2 CARDS GRID */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onMouseEnter={() => setHoveredCardIdx(idx)}
              onMouseLeave={() => setHoveredCardIdx(null)}
              className={`bg-white p-8 md:p-10 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-t ${
                idx === activeCardIdx
                  ? "border-t-[4px] border-t-[#FF3B30]"
                  : "border-t border-t-gray-100"
              }`}
            >
              <div>
                <h3 className="text-xl md:text-[22px] font-bold text-black mb-4 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              <Link
                href={card.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#818181] hover:text-[#FF3B30] transition-colors duration-200 w-fit"
              >
                Know More
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExpertiseSection;
