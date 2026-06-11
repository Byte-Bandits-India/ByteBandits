"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const StaggeredMenu = dynamic(() => import("./StaggeredMenu").then((mod) => mod.StaggeredMenu), {
  ssr: false,
});
import { ArrowRight } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();
  const [staggeredOpen, setStaggeredOpen] = useState(false);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Consulting", ariaLabel: "Get strategic consulting", link: "/contact" },
    { label: "Services", ariaLabel: "View our services", link: "/service" },
  ];

  const socialItems = [
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "Instagram", link: "https://instagram.com" },
    { label: "GitHub", link: "https://github.com" },
  ];

  // Lock body, html, and Lenis scroll when mobile menu is open
  useEffect(() => {
    const globalWindow = typeof window !== "undefined" ? (window as unknown as { lenis?: { stop: () => void; start: () => void } }) : null;
    const lenis = globalWindow?.lenis;

    if (staggeredOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (lenis && typeof lenis.stop === "function") {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
    };
  }, [staggeredOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="hidden lg:block absolute top-0 left-0 w-full z-50 bg-white border-b border-gray-100 py-4">
      <div className="max-w-[1420px] mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Logo and Desktop Nav grouped */}
        <div className="flex items-center gap-10">
          {/* LOGO */}
          <Link 
            href="/" 
            className="relative flex items-center gap-3 shrink-0 z-50 group"
          >
            <Image
              src="/fav2.png"
              alt="Byte Bandits Logo"
              width={38}
              height={38}
              className="h-[38px] w-[38px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
            <span className="font-bold text-lg md:text-[22px] text-[#111111] tracking-tight font-inter">
              Byte Bandits
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation">
          
          {/* About us */}
          <Link
            href="/about"
            className={`font-medium text-sm transition-colors duration-200 ${
              isActive("/about")
                ? "text-[#A31621] font-semibold"
                : "text-[#333333] hover:text-[#A31621]"
            }`}
          >
            About us
          </Link>

          {/* Consulting Link */}
          <Link
            href="/contact"
            className={`font-medium text-sm transition-colors duration-200 ${
              isActive("/contact")
                ? "text-[#A31621] font-semibold"
                : "text-[#333333] hover:text-[#A31621]"
            }`}
          >
            Consulting
          </Link>

          {/* Services Link */}
          <Link
            href="/service"
            className={`font-medium text-sm transition-colors duration-200 ${
              isActive("/service")
                ? "text-[#A31621] font-semibold"
                : "text-[#333333] hover:text-[#A31621]"
            }`}
          >
            Services
          </Link>

          {/* Our Portfolio */}
          {/* <Link
            href="/service"
            className="font-medium text-sm text-[#333333] hover:text-[#A31621] transition-colors duration-200"
          >
            Our Portfolio
          </Link> */}
        </nav>
      </div>

        {/* CTA BUTTON & MOBILE TRIGGER */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 bg-[#C62727] hover:bg-[#861219] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_8px_20px_rgba(163,22,33,0.25)] hover:-translate-y-[1px]"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </div>
      </header>

      {/* Mobile/Tablet Menu */}
      <div className="lg:hidden">
        <StaggeredMenu
          isFixed={true}
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#ff9b42"
          openMenuButtonColor="#ff9b42"
          changeMenuColorOnOpen={true}
          colors={['#BF3A3B', '#FF3B30']}
          logoUrl="/fav2.png"
          accentColor="#FF3B30"
          onMenuOpen={() => setStaggeredOpen(true)}
          onMenuClose={() => setStaggeredOpen(false)}
        />
      </div>
    </>
  );
};
