"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function WipeTransition({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !overlayRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                }
            });

            // Stagger the bars for stair-step effect
            tl.to(".wipe-bar", {
                yPercent: -100,
                ease: "none",
                stagger: 0.1
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen">
            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>

            {/* Wipe Overlay */}
            <div
                ref={overlayRef}
                className="wipe-overlay absolute inset-0 z-20 flex"
            >
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`wipe-bar bar-${i + 1} flex-1 h-full bg-white transform translate-y-full`}
                    />
                ))}

            </div>
        </div>
    );
}