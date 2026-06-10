"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutSection() {
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

  return (
    <section className="w-full">
      {/* Top Red Section */}
      <div className="relative h-screen text-center w-full px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video */}
        {mounted && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          >
            <source src="/Videos/hi.webm" type="video/webm" />
            <track kind="captions" src="data:text/vtt,WEBVTT%0A%0A" label="No captions" />
          </video>
        )}
        
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-[#BF3A3B] opacity-80 z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full">
          <h1 className="text-[#FFE5DE] text-5xl md:text-[72px] xl:text-[90px] pt-[120px] md:pt-[160px] pb-4 font-anton uppercase tracking-wide leading-none text-center">
            {"THE STUDIO"}
          </h1>
          
          <h3 className="text-[#FFFFFF] text-lg sm:text-xl md:text-2xl lg:text-[28px] mt-4 mb-8 font-inter font-semibold leading-tight text-center max-w-[90%]">
            {"Not An Agency. Not A Vendor. A Studio Built To Ship."}
          </h3>

          <p className="text-[#FFFFFF]/85 text-xs sm:text-sm md:text-[16px] xl:text-[20px] leading-[20px] md:leading-[26px] xl:leading-[32px] tracking-[2%] font-inter font-medium text-center max-w-[1032px] mx-auto mb-10">
            {"We are an AI-native product engineering studio built around one focused mandate. By turning complex workflows and early-stage ideas into intelligent software products that scale. We specialize in Agentic AI Systems, Micro-SaaS Development, Web Applications, and MVP builds which are working exclusively with founders and operators in the US and UK who need real engineering output, not agency overhead."}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl font-bold font-inter text-sm md:text-base transition-all hover:bg-white/90 hover:scale-[1.02] shadow-sm mb-[80px] md:mb-[120px]"
          >
            {"Book a Call"} <span className="text-lg">{"→"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
