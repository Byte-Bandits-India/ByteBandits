"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface CardData {
  type: "title" | "text" | "bg-only" | "illustration" | "quote";
  phase?: string;
  number?: string;
  title?: string;
  description?: string;
  bgImage?: string;
  illustration?: string;
  quote?: string;
  author?: string;
  dark: boolean;
  desktopOrder: string;
}

const HowWeWorkSection = () => {
  const cards: CardData[] = [
    // Chronological order for mobile/tablet flow, rearranged for desktop S-curve via lg:order-*
    {
      type: "title",
      title: "HOW WE WORK",
      description:
        "Every project runs on a single track from discovery to delivery, without handoffs, miscommunication, or dropped context",
      bgImage: "/images/home/howWeWork/howWeWork.png",
      dark: true,
      desktopOrder: "lg:order-1",
    },
    {
      type: "text",
      phase: "DISCOVERY",
      number: "1",
      title: "The Problem Before The Product",
      description:
        "Every Engagement Starts With Depth, Not Speed. The Idea, The Audience, The Workflow, The Gap In The Market Understood Completely Before A Single Decision Is Made.",
      dark: false,
      desktopOrder: "lg:order-2",
    },
    {
      type: "bg-only",
      phase: "SCOPING",
      number: "2",
      title: "Clarity Before Commitment",
      bgImage: "/images/home/howWeWork/scope.png",
      dark: true,
      desktopOrder: "lg:order-3",
    },
    {
      type: "illustration",
      phase: "DESIGN",
      number: "3",
      title: "Function First. Beauty Second.",
      illustration: "/images/home/howWeWork/Design.png",
      dark: false,
      desktopOrder: "lg:order-4",
    },
    {
      type: "bg-only",
      phase: "BUILD",
      number: "4",
      title: "Production Grade. From Day One.",
      bgImage: "/images/home/howWeWork/scope.png",
      dark: true,
      desktopOrder: "lg:order-8",
    },
    {
      type: "illustration",
      phase: "VALIDATE",
      number: "5",
      title: "Data Over Assumptions",
      illustration: "/images/home/howWeWork/image 180.png",
      dark: false,
      desktopOrder: "lg:order-7",
    },
    {
      type: "bg-only",
      phase: "SCALE",
      number: "6",
      title: "From MVP To Revenue Engine",
      bgImage: "/images/home/howWeWork/Scale.png",
      dark: true,
      desktopOrder: "lg:order-6",
    },
    {
      type: "quote",
      quote: "Make It Work, Make It Right, Make It Fast.",
      author: "Kent Beck",
      bgImage: "/images/home/howWeWork/MakeItWork.png",
      dark: true,
      desktopOrder: "lg:order-5",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24" id="how-we-work-section">
      <div className="w-full max-w-[1420px] mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="w-full text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#111111] font-inter tracking-tight">
            How we work
          </h2>
        </div>

        {/* 2x4 GRID CONTAINER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 !gap-6 !justify-items-stretch w-full"
        >
          {cards.map((card, idx) => {
            const isDark = card.dark;
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group relative overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg border ${
                  isDark ? "border-transparent bg-neutral-900" : "border-gray-100 bg-white"
                } w-full h-[360px] xs:h-[380px] sm:h-[420px] md:h-[480px] lg:h-[460px] ${card.desktopOrder}`}
              >
                {/* BACKGROUND IMAGE FOR DARK CARDS */}
                {isDark && card.bgImage && (
                  <>
                    <Image
                      src={card.bgImage}
                      alt={card.title || "Background"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover z-0 transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-black/45 z-10" />
                  </>
                )}

                {/* CARD CONTENT */}
                <div className="relative z-20 flex flex-col justify-between h-full p-6 md:p-8">
                  {/* TOP HEADER BLOCK (Not for Title or Quote cards) */}
                  {card.type !== "title" && card.type !== "quote" && (
                    <div className="flex justify-between items-center w-full">
                      <span
                        className={`text-[10px] md:text-xs font-bold tracking-widest uppercase ${
                          isDark ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        {card.phase}
                      </span>
                      {card.number && (
                        <div
                          className={`w-7 h-7 md:w-8 md:h-8 rounded-full border flex items-center justify-center font-bold text-xs md:text-sm ${
                            isDark
                              ? "border-[#FF3B30] text-[#FF3B30] bg-white/10 backdrop-blur-sm"
                              : "border-[#FF3B30] text-[#FF3B30] bg-white"
                          }`}
                        >
                          {card.number}
                        </div>
                      )}
                    </div>
                  )}

                  {/* CENTER / BOTTOM CONTENT */}
                  {card.type === "title" && (
                    <div className="flex flex-col justify-center h-full text-left my-auto">
                      <h3 className="text-white text-2xl md:text-[28px] font-extrabold tracking-tight leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-white/80 text-xs md:text-sm leading-relaxed mt-4 font-normal max-w-[280px]">
                        {card.description}
                      </p>
                    </div>
                  )}

                  {card.type === "text" && (
                    <div className="flex flex-col justify-start text-left mt-2 sm:mt-4 flex-1">
                      <h3 className="text-[#1A1A1A] text-lg md:text-[21px] font-bold leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed mt-4 sm:mt-6 font-medium">
                        {card.description}
                      </p>
                    </div>
                  )}

                  {card.type === "bg-only" && (
                    <div className="flex flex-col justify-end text-left mt-auto">
                      <h3 className="text-white text-lg md:text-[21px] font-bold leading-snug">
                        {card.title}
                      </h3>
                    </div>
                  )}

                  {card.type === "quote" && (
                    <div className="flex flex-col justify-between h-full text-left">
                      <div className="my-auto">
                        <h3 className="text-white text-xl md:text-[22px] font-bold leading-snug max-w-[240px]">
                          {card.quote}
                        </h3>
                      </div>
                      <div className="text-right text-white/70 text-[10px] md:text-xs font-semibold tracking-wider uppercase mt-auto self-end">
                        - {card.author}
                      </div>
                    </div>
                  )}

                  {card.type === "illustration" && (
                    <div className="flex flex-col justify-between h-full text-left flex-1 mt-2 sm:mt-4">
                      <div>
                        <h3 className="text-[#1A1A1A] text-lg md:text-[21px] font-bold leading-snug">
                          {card.title}
                        </h3>
                      </div>
                      {card.illustration && (
                        <div className="relative w-full h-[140px] xs:h-[160px] sm:h-[200px] md:h-[220px] lg:h-[200px] mt-4 self-center flex items-end">
                          <Image
                            src={card.illustration}
                            alt={card.title || "Illustration"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-contain object-bottom"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
