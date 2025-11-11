"use client";

import { useState, useEffect, ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import SvgLoader from "@/components/ui/SvgLoader";

export default function HeaderWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Check if already loaded in this browser session
    const loadedBefore = sessionStorage.getItem("siteLoaded");

    if (loadedBefore) {
      setLoading(false);
      setHasLoaded(true);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("siteLoaded", "true");
        setHasLoaded(true);
      }, 4000); // Adjust loader time as you wish

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading && !hasLoaded) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700">
        <SvgLoader />
      </div>
    );
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}
