"use client";

import { useState, useEffect, ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import SvgLoader from "@/components/ui/SvgLoader";

export default function HeaderWrapper({ children }: { children: ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeAway, setFadeAway] = useState(false);

  useEffect(() => {
    // Check if already loaded in this browser session
    const loadedBefore = sessionStorage.getItem("siteLoaded");

    if (loadedBefore) {
      setShowOverlay(false);
    } else {
      const timer = setTimeout(() => {
        setFadeAway(true);
        sessionStorage.setItem("siteLoaded", "true");
        
        // Unmount the overlay after the 700ms fade transition finishes
        const removeTimer = setTimeout(() => {
          setShowOverlay(false);
        }, 700);
        
        return () => clearTimeout(removeTimer);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Header />
      {children}
      {showOverlay && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ${
            fadeAway ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <SvgLoader />
        </div>
      )}
    </>
  );
}
