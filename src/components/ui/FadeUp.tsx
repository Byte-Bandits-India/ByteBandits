"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface FadeUpProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    distance?: number;
    containerAnimation?: gsap.core.Animation; // 👈 connect to horizontal scroll
}

const FadeUp: React.FC<FadeUpProps> = ({
    children,
    className = "",
    delay = 0,
    duration = 0.8, // seconds
    distance = 50,
    containerAnimation,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;

        const fadeAnim = gsap.fromTo(
            el,
            {
                opacity: 0,
                x: distance,
                y: distance,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration,
                ease: "power2.out",
                delay: delay / 1000,
                scrollTrigger: {
                    trigger: el,
                    start: "left center",
                    end: "right center",
                    containerAnimation: containerAnimation, // 👈 tie to horizontal scroll
                    scrub: true,
                },
            }
        );

        return () => {
            fadeAnim.scrollTrigger?.kill();
            fadeAnim.kill();
        };
    }, [delay, distance, duration, containerAnimation]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default FadeUp;
