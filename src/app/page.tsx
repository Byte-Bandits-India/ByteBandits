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
          className="w-full md:h-[55vh] relative "
        >
          {/* Background Image with Zoom */}
          <motion.img
            src="/images/home_1.webp"
            alt="Hero"
            style={{ scale }}
            className="absolute w-full object-cover z-0 h-[20lvh] md:h-[40lvh] lg:h-[50lvh] xl:h-[600px]"
          />

          {/* Scroll Down Icon with Rotation */}
          <motion.img
            src="/images/scroll-down.png"
            alt="Scroll Down"
            style={{
              transform: 'translate3d(0px, 10px, 0px)', rotate
            }}
            className="absolute -top-65 right-10 w-55 h-55 z-30 md:-top-[120px] lg:-top-[170px] lg:right-20 xl:-top-[250px] xl:right-30 scroll-icon"
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
            <h2 className="text-[20px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-[anton] leading-[40px] md:leading-tight max-w-[90rem] mx-auto mt-10 text-[#312F2F] text-center">
              <span className="text-[#F9373A] lg:text-[#FAAC61]">BYTEBANDITS</span> IS WHERE BOLD IDEAS BECOME <span className="text-[#F9373A] lg:text-[#FAAC61]">POWERFUL </span>
              DIGITAL <span className="text-[#F9373A] lg:text-[#FAAC61]">REALITIES</span>. WE ENGINEER SMART SOLUTIONS, DESIGN
              WITH PURPOSE, AND BRING <span className="text-[#F9373A] lg:text-[#FAAC61]">BRANDS TO LIFE</span>. CHOOSE
              <span className="text-[#F9373A] lg:text-[#FAAC61]"> BYTEBANDITS</span> BECAUSE WE ARE WORTH IT.
            </h2>
            <div className="hidden">
              <div className="mt-8 flex justify-center items-center gap-6">
                <div>
                  <p className="text-[14px] text-[#828282] max-w-[338px] text-right">We may be new, but we’re already building a portfolio we’re proud of</p>
                </div>
                <button className="bg-[#FF3E52] rounded-[50px] h-[56px] lg:h-[71px] text-white max-w-[223px] w-full text-[14px] ">VIEW PORTFOLIO</button>
              </div>
            </div>
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
