"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Scroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
};

export default Scroll;
