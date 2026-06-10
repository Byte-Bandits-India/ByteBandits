"use client";

import { useEffect, useState, RefObject } from "react";

export interface UseInViewOptions {
  once?: boolean;
  margin?: string;
  amount?: "some" | "all" | number;
}

export function useInView(
  ref: RefObject<HTMLElement | null>,
  { once = false, margin = "0px", amount = "some" }: UseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let threshold: number = 0;
    if (amount === "all") {
      threshold = 1.0;
    } else if (typeof amount === "number") {
      threshold = amount;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        rootMargin: margin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, once, margin, amount]);

  return isInView;
}
