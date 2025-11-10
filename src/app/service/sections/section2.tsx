"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useScroll } from "framer-motion";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PinnedHorizontalSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const helloRef = useRef<HTMLDivElement>(null);

    // 🎯 Framer Motion value for combined rotation
    const rotate = useMotionValue(0);

    // 🔄 Add vertical scroll rotation
    const { scrollYProgress } = useScroll();
    useEffect(() => {
        // when vertical scroll changes, add continuous rotation
        const unsubscribe = scrollYProgress.on("change", (p) => {
            rotate.set(p * 360); // base rotation from vertical scroll
        });
        return () => unsubscribe();
    }, [scrollYProgress, rotate]);

    useEffect(() => {
        if (!sectionRef.current || !trackRef.current) return;

        const track = trackRef.current;
        const section = sectionRef.current;
        const totalWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        // 🌀 horizontal scroll + add to rotation
        const animation = gsap.to(track, {
            x: () => -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false,
                onUpdate: (self) => {
                    // Combine horizontal progress with vertical scroll rotation
                    const base = scrollYProgress.get() * 360;
                    const horizontalAdd = self.progress * 360;
                    rotate.set(base + horizontalAdd);
                },
            },
        });

        // Vertical scroll animation for "hello" text
        if (helloRef.current) {
            gsap.fromTo(helloRef.current,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: helloRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                        markers: false // Set to true for debugging
                    }
                }
            );
        }

        return () => {
            animation.scrollTrigger?.kill();
        };
    }, [rotate, scrollYProgress]);

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden">
            {/* Fixed rotating background elements */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
                <motion.img
                    src="/images/service/silver-frame.png"
                    alt="frame"
                    className="w-[641px] h-auto object-contain absolute"
                    style={{ rotate }}
                />
                <img
                    src="/images/service/L1.png"
                    alt="L1"
                    className="h-auto object-contain absolute"
                />
            </div>

            {/* Horizontal Scroll Track */}
            <div className="relative w-full h-screen overflow-hidden z-10">
                <div
                    ref={trackRef}
                    className="relative flex h-full items-center will-change-transform"
                >
                    {/* First set of slides */}
                    <div className="slide w-screen h-screen flex-shrink-0 flex items-center justify-center"></div>

                    <div className="slide w-screen h-screen flex-shrink-0 flex items-center justify-center">
                        <img
                            src="/images/service/cybersecurity.png"
                            className="h-full w-full object-cover mix-blend-multiply"
                            alt="cybersecurity"
                        />
                    </div>

                    {/* Second set of slides with background */}
                    <div className="slide w-screen h-screen flex-shrink-0 flex items-center justify-center relative">
                        {/* Content */}
                        <div ref={helloRef} className="relative z-20 opacity-0">
                            <h2 className="text-[clamp(50px,6vw,120px)] font-bold leading-[1.1] whitespace-nowrap">hello</h2>
                        </div>
                    </div>

                    {/* Additional slides */}
                    <div className="slide w-screen h-screen flex-shrink-0 flex items-center justify-center">
                        <div className="relative z-20">
                            <h2 className="text-[clamp(50px,6vw,120px)] font-bold leading-[1.1] whitespace-nowrap">world</h2>
                        </div>
                    </div>

                    <div className="slide w-screen h-screen flex-shrink-0 flex items-center justify-center">
                        <div className="relative z-20">
                            <h2 className="text-[clamp(50px,6vw,120px)] font-bold leading-[1.1] whitespace-nowrap">more content</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}