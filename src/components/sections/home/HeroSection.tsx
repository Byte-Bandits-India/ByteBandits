"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    const handleLoad = () => {
      timerId = setTimeout(() => {
        setMounted(true);
      }, 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
        if (timerId) clearTimeout(timerId);
      };
    }
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  // No variants needed, animation driven via native CSS/Tailwind transitions.

  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-center items-center text-center overflow-hidden bg-white">
      {/* BACKGROUND VIDEO */}
      {mounted && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none opacity-20"
        >
          <source src="/Videos/hi.webm" type="video/webm" />
          <track kind="captions" src="data:text/vtt,WEBVTT%0A%0A" label="No captions" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* TEXTURED GRID OVERLAY */}
      <div 
        className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" 
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      />

      {/* HERO CONTENT CONTAINER */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center mt-12">
        {/* Main Heading */}
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-semibold text-[#0f172a] mb-6 lg:mb-12 transition-all transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDuration: "800ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          From Workflow to Product.
          <span className="block mt-2">From Idea to Revenue.</span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p
          className={`max-w-[726px] text-base sm:text-lg md:text-[20px] lg:text-[24px] text-[#334155] leading-[27px] tracking-[-2%] mb-10 font-medium transition-all transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDuration: "800ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "150ms",
          }}
        >
          Ideas deserve more than development. They deserve strategy, speed, and a team 
          that treats every product like a business, not a backlog. Micro-SaaS, AI 
          automations, and web applications built to perform from day one.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDuration: "800ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "300ms",
          }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C62727] hover:bg-[#A31621] text-white px-8 py-3 rounded-xl text-base font-semibold shadow-[0_10px_25px_rgba(198,39,39,0.25)] hover:shadow-[0_15px_30px_rgba(163,22,33,0.35)] transition-all duration-300 transform hover:-translate-y-[2px]"
          >
            Book a Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;