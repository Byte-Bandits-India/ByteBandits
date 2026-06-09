"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqData: FAQItem[] = [
    {
      question: "How Does Byte Bandits Global Services Work?",
      answer: "ByteBandits is a product engineering studio built for founders who need more than a development team. Specializing in Micro-SaaS products, AI agents, workflow automations, and custom web applications, the studio operates at the intersection of founder thinking and engineering execution turning ideas and broken workflows into scalable software products that acquire users, generate revenue, and grow. Every engagement runs on a single standard: ship fast, build right, and own the outcome from discovery to scale.",
    },
    {
      question: "What exactly does ByteBandits build?",
      answer: "We engineer full-stack SaaS platforms, custom AI integrations, custom web/mobile apps, automation workflows, and internal tooling designed to accelerate operations and drive business outcomes.",
    },
    {
      question: "How long does it take to ship an MVP?",
      answer: "Typically, we deliver a fully functional MVP within 3 to 6 weeks, depending on the scoping complexity. We prioritize core value features to get you to market fast.",
    },
    {
      question: "Do you require an upfront payment to get started?",
      answer: "Yes, we work on a fixed-scope milestone structure. A deposit or initial milestone payment is required to kick off scoping and engineering sprints.",
    },
    {
      question: "What happens if I'm not happy with the work?",
      answer: "We run weekly demos and check-ins to make sure we are fully aligned. If there's an issue, we iterate in real-time. If it's still not right, cancelation policies apply according to our agreement.",
    },
    {
      question: "What if I miss a payment milestone?",
      answer: "Milestone payments align with sprint deliveries. If a payment is missed, engineering halts until accounts are brought current.",
    },
    {
      question: "Can a project be cancelled midway by either side?",
      answer: "Yes, either side can cancel with a written notice. Completed milestones and work done up to that point remain payable.",
    },
  ];

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24" id="faq-section">
      <div className="w-full max-w-[1420px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#111111] leading-tight tracking-tight font-inter">
            Frequently Asked Question
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col border-t border-[#111111]">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="w-full border-b border-[#111111] overflow-hidden"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full py-6 md:py-8 flex justify-between items-center text-left gap-6 group hover:opacity-80 transition-opacity"
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium text-[#111111] font-inter">
                    {item.question}
                  </span>
                  
                  {/* Custom +/- Icon */}
                  <span className="relative flex items-center justify-center w-6 h-6 shrink-0 text-[#111111]">
                    {/* Horizontal Bar (always present) */}
                    <span className="absolute w-4 h-[2px] bg-[#111111]" />
                    {/* Vertical Bar (hidden when open) */}
                    <motion.span
                      initial={{ rotate: isOpen ? 90 : 0 }}
                      animate={{ rotate: isOpen ? 90 : 0, scaleY: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="absolute w-[2px] h-4 bg-[#111111]"
                    />
                  </span>
                </button>

                {/* Content block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.25, ease: "easeOut" },
                          opacity: { duration: 0.2 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2, ease: "easeIn" },
                          opacity: { duration: 0.15 },
                        },
                      }}
                    >
                      <div className="pb-8 text-sm sm:text-base text-gray-700 leading-relaxed max-w-[90%] font-inter">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
