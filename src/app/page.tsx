"use client"
import HeroSection from "@/components/sections/home/HeroSection";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import AboutSection from "@/components/sections/home/AboutSection";
import Solution from "@/components/sections/home/Solution"
import ContactSection from "@/components/sections/home/Contact";
import CrossedBanner from "@/components/ui/CrossedTape"
import BlogSection from "@/components/sections/home/Blog";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1.1]);

  return (
    <>
      <div className="w-full overflow-x-hidden scrollbar-none">
        <HeroSection />

        <section
          ref={scrollRef}
          className="w-full   md:h-[55vh] relative "
        >
          {/* Background Image with Zoom */}
          <motion.img
            src="/images/home_1.webp"
            alt="Hero"
            style={{ scale }}
            className="absolute w-full h-full object-cover z-0 hero"
          />

          {/* Scroll Down Icon with Rotation */}
          <motion.img
            src="/images/scroll-down.png"
            alt="Scroll Down"
            style={{
              transform: 'translate3d(0px, 10px, 0px)', rotate
            }}
            className="absolute -top-65 right-60 w-55 h-55 z-30 lg:-top-[170px] lg:right-20 xl:-top-[190px] xl:right-10 scroll-icon"
          />

        </section>

        <AboutSection />

        {/* Solution Section */}
        <Solution />

        {/* Contact section */}
        <ContactSection />

        <section>
          {/* Our Agency Section */}
          <div className="agency-section bg-[#FFFFF] text-center py-20 px-6 lg:px-0 w-full max-w-[1306px] mx-auto ">
            <h2 className="agency-heading-mobile text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-[anton] leading-tight max-w-8xl mx-auto  mt-10 text-[#312F2F]">

              <div>WHERE BOLD IDEAS BECOME <span className="text-[#F9373A]">POWERFUL</span> DIGITAL <span className="text-[#F9373A]">REALITIES</span>. WE ENGINEER SMART SOLUTIONS, DESIGN WITH PURPOSE, AND BRING <span className="text-[#F9373A]">BRANDS TO LIFE</span>. CHOOSE <span className="text-[#F9373A]">BYTEBANDITS</span> BECAUSE WE ARE WORTH IT.</div>

            </h2>

          </div>

        </section>

        {/* Tapes X Section */}
        <section className="tape-section">
          <CrossedBanner />
        </section>

        <BlogSection />
      </div>
    </>
  );
}
