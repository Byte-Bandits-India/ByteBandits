"use client";

import { useState, useEffect, ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import SvgLoader from "@/components/ui/SvgLoader";

export default function HeaderWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SvgLoader />;

  return (
    <>
      <Header />
      {children}
    </>
  );
}
