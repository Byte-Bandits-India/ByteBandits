"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CardData {
  id: string;
  type: "testimonial" | "metric";
  text?: React.ReactNode;
  author?: string;
  tag?: string;
  value?: string;
  description?: string;
  link: string;
  image: string;
  bgClass: string;
}

const CustomersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(734);
  const [isMobile, setIsMobile] = useState(false);

  const cards: CardData[] = [
    {
      id: "testimonial-1",
      type: "testimonial",
      text: (
        <>
          {"We've been working with "}
          <span className="text-[#FF3B30]">Byte Bandits</span>
          {" for 2 years now, and their service has been "}
          <span className="text-[#FF3B30]">really good.</span>
        </>
      ),
      author: "Senthil, CEO of Iteron Technologies",
      image: "/images/home/ourCustomer1.png",
      bgClass: "bg-black text-white",
      link: "/service",
    },
    {
      id: "metric-1",
      type: "metric",
      tag: "Marketing",
      value: "25%",
      description: "Reduction In Project Timelines",
      link: "/service",
      image: "/images/home/ourCustomer2.png",
      bgClass: "bg-[#FCDAD7] text-black",
    },
    {
      id: "testimonial-2",
      type: "testimonial",
      text: (
        <>
          The engineering depth at <span className="text-[#FF3B30]">Byte Bandits</span> is exceptional. They launched our AI portal in <span className="text-[#FF3B30]">weeks</span> and streamlined our platform.
        </>
      ),
      author: "Sarah Jenkins, CTO of NexaFlow",
      image: "/images/home/ourCustomer1.png",
      bgClass: "bg-black text-white",
      link: "/service",
    },
    {
      id: "metric-2",
      type: "metric",
      tag: "Product Development",
      value: "40%",
      description: "Increase In Product Delivery Velocity",
      link: "/service",
      image: "/images/home/ourCustomer2.png",
      bgClass: "bg-[#FCDAD7] text-black",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
      if (width < 768) {
        setCardWidth(width * 0.85); // 85vw
      } else if (width < 1024) {
        setCardWidth(width * 0.9); // 90vw on tablet
      } else {
        setCardWidth(734);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gap = isMobile ? 24 : 32;
  const offset = currentIndex * (cardWidth + gap);
  const totalCards = cards.length;
  const maxIndex = isMobile ? totalCards - 1 : totalCards - 2;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="w-full bg-[#F5F5F7] py-16 md:py-24 overflow-hidden" id="customers-section">
      {/* 1. HEADER (Container restricted) */}
      <div className="w-full max-w-[1420px] mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end w-full">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#111111] leading-tight tracking-tight font-inter">
              Our customers <br />
              achieve more
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 px-6 py-3 rounded-full text-sm font-semibold text-[#111111]"
            >
              Contact Sales <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. SLIDER TRACK (Full Bleed with padding) */}
      <div className="w-full overflow-hidden">
        <motion.div
          animate={{ x: -offset }}
          transition={{ type: "spring", stiffness: 200, damping: 26 }}
          className="flex gap-6 md:gap-8 pl-6 lg:pl-[calc((100vw-1420px)/2+24px)] pr-6 lg:pr-[calc((100vw-1420px)/2+24px)]"
        >
          {cards.map((card) => {
            const isTestimonial = card.type === "testimonial";
            return (
              <div
                key={card.id}
                style={{ width: cardWidth }}
                className={`group relative rounded-[32px] overflow-hidden flex flex-col md:flex-row justify-between items-stretch shrink-0 ${
                  card.bgClass
                } h-[460px] md:h-[375px]`}
              >
                {/* Left Side Content Container */}
                <div className={`w-full ${isTestimonial ? "md:w-[55%]" : "md:w-[50%]"} p-6 md:p-10 flex flex-col justify-between text-left`}>
                  {isTestimonial ? (
                    <>
                      <div>
                        <svg
                          className="text-[#FF3B30] w-12 h-10 fill-current shrink-0"
                          viewBox="0 0 32 24"
                        >
                          <path d="M10 0C4.477 0 0 4.477 0 10v14h12V10H6c0-3.314 2.686-6 6-6V0zm20 0c-5.523 0-10 4.477-10 10v14h12V10h-6c0-3.314 2.686-6 6-6V0z" />
                        </svg>
                      </div>
                      <p className="text-white text-lg md:text-[21px] font-medium leading-relaxed mt-4 flex-1">
                        {card.text}
                      </p>
                      <span className="text-white/60 text-xs md:text-sm font-normal mt-4">
                        - {card.author}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="self-start bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider">
                        {card.tag}
                      </span>
                      <div className="flex-1 flex flex-col justify-center my-6">
                        <span className="text-[#111111] text-5xl md:text-[64px] font-extrabold leading-none">
                          {card.value}
                        </span>
                        <span className="text-[#111111]/80 text-sm md:text-base font-semibold leading-snug mt-2 max-w-[200px]">
                          {card.description}
                        </span>
                      </div>
                      <Link
                        href={card.link}
                        className="self-start text-[#111111] font-bold text-sm underline decoration-[#111111] decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
                      >
                        Case Study &gt;
                      </Link>
                    </>
                  )}
                </div>

                {/* Right Side Image (Flush mounted) */}
                <div className={`flex-1 relative w-full ${isTestimonial ? "md:w-[45%]" : "md:w-[50%]"} h-[200px] md:h-auto shrink-0`}>
                  <Image
                    src={card.image}
                    alt={isTestimonial ? "Customer Testimonial illustration" : "Customer Case Study illustration"}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 3. CONTROLS (Container restricted) */}
      <div className="w-full max-w-[1420px] mx-auto px-6 mt-8 flex justify-end gap-3">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 ${
            currentIndex === 0
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 text-gray-700 hover:border-[#111111] hover:text-[#111111] hover:bg-white"
          }`}
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-sm" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 ${
            currentIndex === maxIndex
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 text-gray-700 hover:border-[#111111] hover:text-[#111111] hover:bg-white"
          }`}
          aria-label="Next slide"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>
    </section>
  );
};

export default CustomersSection;
