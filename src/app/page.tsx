"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import Solution from "@/components/sections/home/Solution";
import ContactSection from "@/components/sections/home/Contact";
import CrossedBanner from "@/components/ui/CrossedTape";
import BlogSection from "@/components/sections/home/Blog";
import { useScroll, useTransform, motion } from "framer-motion";
import Card from "@/components/sections/home/Card";

// Define proper types for the TubesCursor
interface TubesCursorApp {
  tubes?: {
    setColors?: (colors: string[]) => void;
    setLightsColors?: (colors: string[]) => void;
  };
  dispose?: () => void;
}

interface TubesCursorInstance {
  (canvas: HTMLCanvasElement, config: unknown): TubesCursorApp;
}

// Create a type for our app reference that includes cleanup
interface AppRefWithCleanup {
  app: TubesCursorApp | null;
  cleanup?: () => void;
}

declare global {
  interface Window {
    TubesCursor?: TubesCursorInstance;
  }
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<AppRefWithCleanup>({ app: null });

  // ✅ Use ref directly for scroll target (no need for state)
  const scrollRef = useRef<HTMLDivElement>(null);

  // ✅ Pass the ref directly to useScroll
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1.1]);

  useEffect(() => {
    const remoteUrl =
      "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

    const moduleCode = `
      import TubesCursor from "${remoteUrl}";
      window.TubesCursor = TubesCursor;
    `;
    const blob = new Blob([moduleCode], { type: "text/javascript" });
    const blobUrl = URL.createObjectURL(blob);
    const script = document.createElement("script");
    script.type = "module";
    script.src = blobUrl;
    script.async = true;
    document.body.appendChild(script);

    let mounted = true;

    // Store cleanup functions in variables inside the effect
    let cleanupFunction: (() => void) | undefined;
    let currentApp: TubesCursorApp | null = null;

    const init = async () => {
      const start = Date.now();
      const timeout = 5000;
      while (mounted && !window.TubesCursor && Date.now() - start < timeout) {
        await new Promise((r) => setTimeout(r, 50));
      }

      if (!mounted || !window.TubesCursor || !canvasRef.current) return;

      const app = window.TubesCursor(canvasRef.current, {
        tubes: {
          colors: ["#f967fb", "#53bc28", "#6958d5"],
          lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
          },
        },
      });

      currentApp = app;
      appRef.current.app = app;

      const randomColors = (count: number) =>
        Array.from({ length: count }, () =>
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
        );

      const handleClick = () => {
        const colors = randomColors(3);
        const lights = randomColors(4);
        app.tubes?.setColors?.(colors);
        app.tubes?.setLightsColors?.(lights);
      };

      document.body.addEventListener("click", handleClick);

      cleanupFunction = () => {
        document.body.removeEventListener("click", handleClick);
        app?.dispose?.();
      };

      appRef.current.cleanup = cleanupFunction;
    };

    init();

    return () => {
      mounted = false;

      // Use the variables declared inside the effect instead of appRef.current
      if (cleanupFunction) {
        cleanupFunction();
      } else if (currentApp) {
        // Fallback cleanup if cleanupFunction wasn't set
        currentApp?.dispose?.();
      }

      // Clean up the script
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      URL.revokeObjectURL(blobUrl);

      // Clear the ref
      appRef.current = { app: null };
    };
  }, []);

  return (
    <main className="w-full overflow-x-hidden scrollbar-none">
      {/* 👇 The section we're scrolling */}
      <div ref={scrollRef}>
        <HeroSection />
      </div>

      {/* Background Image Section */}
      <section className="relative w-full md:h-[48vh] overflow-visible z-10">
        {/* Background Image with Zoom (identical position & size) */}
        <motion.img
          src="/images/home_1.webp"
          alt="Hero"
          style={{ scale }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="absolute w-full object-cover z-0 h-[20lvh] md:h-[44lvh] lg:h-[50lvh] xl:h-[600px] will-change-transform"
        />

        {/* Scroll Down Icon with Rotation */}
        <motion.img
          src="/images/scroll-down.png"
          alt="Scroll Down"
          style={{ rotate }}
          className="absolute -top-[55px] right-10 w-[20vw] lg:w-[14vw] h-auto
               md:-top-[120px] lg:right-20 xl:-top-[184px] xl:right-[90px] 
               z-50 will-change-transform scroll-icon pointer-events-none"
        />
      </section>



      <AboutSection />

      {/* Tubes Cursor Section */}
      <section
        id="tubes-cursor-section"
        className="relative w-full max-h-[800px] h-[70vh] overflow-hidden flex items-center justify-center bg-black/90 mt-[70px] md:mt-[110px]"
      >
        <canvas
          ref={canvasRef}
          id="canvas"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-4 transform transition-all duration-500 ease-out hover:scale-105">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter text-white leading-tight tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              TRUSTED BY
            </h1>
            <p className="inline-block px-6 sm:px-8 py-3 sm:py-2 text-[#ffffff] font-inter">
              The Brands Shaping Tommorow
            </p>
          </div>
        </div>
      </section>

      <Solution />
      <Card />
      <ContactSection />

      <section>
        <div className="agency-section bg-[#FFFFF] text-center py-20 px-6 lg:px-0 w-full max-w-[1306px] mx-auto ">
          <p className="mt-8 text-[13px] lg:text-[16px] text-[#818181] font-bold select-none">
            OUR AGENCY
          </p>
          <h2 className="text-[20px] md:text-[clamp(40px,6vw,60px)] md:leading-[1.2] leading-[32px] font-[anton] max-w-[90rem] mx-auto mt-10 text-[#312F2F] text-center">
            <span className="text-[#F9373A] lg:text-[#FAAC61]">BYTEBANDITS</span> IS WHERE BOLD IDEAS BECOME{" "}
            <span className="text-[#F9373A] lg:text-[#FAAC61]">POWERFUL </span>
            DIGITAL <span className="text-[#F9373A] lg:text-[#FAAC61]">REALITIES</span>. WE ENGINEER SMART SOLUTIONS, DESIGN
            WITH PURPOSE, AND BRING{" "}
            <span className="text-[#F9373A] lg:text-[#FAAC61]">BRANDS TO LIFE</span>. CHOOSE
            <span className="text-[#F9373A] lg:text-[#FAAC61]"> BYTEBANDITS</span> BECAUSE WE ARE WORTH IT.
          </h2>
        </div>
      </section>

      <section className="tape-section">
        <CrossedBanner />
      </section>

      <BlogSection />
    </main>
  );
}