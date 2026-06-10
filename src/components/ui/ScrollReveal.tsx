"use client";
import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 8,
  blurStrength = 6,
  containerClassName = "",
  textClassName = "",
  wordAnimationEnd = "top center"
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, i) =>
      word.match(/^\s+$/) ? (
        word
      ) : (
        <span className="inline-block overflow-hidden" key={i}>
          <span className="inline-block word">{word}</span>
        </span>
      )
    );
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;
    const words = el.querySelectorAll<HTMLElement>(".word");
    const animations: gsap.core.Tween[] = [];

    words.forEach((word, i) => {
      const anim = gsap.fromTo(
        word,
        {
          opacity: baseOpacity,
          yPercent: 40,
          rotate: baseRotation,
          filter: enableBlur ? `blur(${blurStrength}px)` : "none",
        },
        {
          opacity: 1,
          yPercent: 0,
          rotate: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: `top+=${i * 20} bottom`, // each word reveals a bit later
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
      animations.push(anim);
    });

    return () => {
      animations.forEach((anim) => {
        if (anim.scrollTrigger) {
          anim.scrollTrigger.kill();
        }
        anim.kill();
      });
    };
  }, [scrollContainerRef, enableBlur, baseOpacity, baseRotation, blurStrength, wordAnimationEnd]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(20px,4vw,54px)] text-[#000000] font-medium leading-[1.1] font-inter max-w-[959px] ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
