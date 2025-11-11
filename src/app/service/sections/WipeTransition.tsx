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
                    end: "+=50%", // ⏱ End earlier for smoother transition
                    scrub: true,
                    pin: true,
                    pinSpacing: false, // 🚫 Prevent layout pushdown
                },
            });

            // Wipe bars move upward in a stagger
            tl.to(".wipe-bar", {
                yPercent: -100,
                ease: "none",
                stagger: 0.1,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen overflow-hidden">
            {/* Page Content */}
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
                        className={`wipe-bar flex-1 h-full bg-white transform translate-y-full`}
                    />
                ))}
            </div>
        </div>
    );
}
