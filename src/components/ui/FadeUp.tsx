"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

interface FadeUpProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    distance?: number;
}

const FadeUp: React.FC<FadeUpProps> = ({
    children,
    className = "",
    delay = 0,
    duration = 600,
    distance = 40,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasBeenVisible(true);
                    setTimeout(() => setIsVisible(true), delay);
                } else {
                    // Only fade out if the element has been visible at least once
                    if (hasBeenVisible) {
                        setIsVisible(false);
                    }
                }
            },
            {
                threshold: 0.3,
            }
        );

        const el = elementRef.current;
        if (el) observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [delay, hasBeenVisible]); // Add hasBeenVisible to dependencies

    return (
        <div
            ref={elementRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                    ? "translate(0, 0)"
                    : `translate(${distance}px, ${distance}px)`,
                transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
                transitionDelay: `${delay}ms`,
                willChange: "transform, opacity",
            }}
        >
            {children}
        </div>
    );
};

export default FadeUp;