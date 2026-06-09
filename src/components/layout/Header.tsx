"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Cpu,
  Cloud,
  Globe,
  Shield,
  Smartphone,
  Palette,
  TrendingUp,
} from "lucide-react";

interface SubMenuItem {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<"consulting" | "services" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<"consulting" | "services" | null>(null);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  // Lock body, html, and Lenis scroll when mobile menu is open
  useEffect(() => {
    const lenis = typeof window !== "undefined" ? (window as any).lenis : null;

    if (mobileMenuOpen) {
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
  }, [mobileMenuOpen]);

  const handleMouseEnter = (type: "consulting" | "services") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(type);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // slight delay to prevent flickering
  };

  const toggleMobileDropdown = (type: "consulting" | "services") => {
    if (mobileDropdown === type) {
      setMobileDropdown(null);
    } else {
      setMobileDropdown(type);
    }
  };

  const consultingItems: SubMenuItem[] = [
    {
      title: "IT Consulting",
      description: "Strategic planning and expert architecture consulting.",
      href: "/contact",
      icon: Cpu,
    },
    {
      title: "Cloud Architecture",
      description: "Scalable, secure cloud migration and AWS/GCP setups.",
      href: "/service",
      icon: Cloud,
    },
    {
      title: "Digital Strategy",
      description: "Aligning your product vision with robust market strategies.",
      href: "/contact",
      icon: Globe,
    },
    {
      title: "Security Solutions",
      description: "DLP, identity management, and threat prevention audits.",
      href: "/contact",
      icon: Shield,
    },
  ];

  const servicesItems: SubMenuItem[] = [
    {
      title: "Web Development",
      description: "High-performance, modern React/Next.js web builds.",
      href: "/service",
      icon: Globe,
    },
    {
      title: "Mobile Development",
      description: "Stunning iOS, Android, and cross-platform native apps.",
      href: "/service",
      icon: Smartphone,
    },
    {
      title: "UI/UX Design",
      description: "Interactive wireframes and clean premium interfaces.",
      href: "/service",
      icon: Palette,
    },
    {
      title: "Digital Marketing",
      description: "Data-driven SEO strategies, social media, and paid ads.",
      href: "/service",
      icon: TrendingUp,
    },
    {
      title: "AI & ML Solutions",
      description: "Custom intelligent bots, LLM agents, and automation.",
      href: "/service",
      icon: Cpu,
    },
  ];

  const isActive = (path: string) => pathname === path;

  // Animation constants for dropdown popovers
  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: 8, 
      scale: 0.98,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };

  return (
    <header className={`${mobileMenuOpen ? "fixed" : "absolute"} top-0 left-0 w-full z-50 bg-white border-b border-gray-100 py-4`}>
      <div className="max-w-[1420px] mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Logo and Desktop Nav grouped */}
        <div className="flex items-center gap-10">
          {/* LOGO */}
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
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

          {/* Consulting Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("consulting")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`font-medium text-sm flex items-center gap-1.5 py-2 transition-colors duration-200 ${
                activeDropdown === "consulting" ? "text-[#A31621]" : "text-[#333333] hover:text-[#A31621]"
              }`}
            >
              Consulting
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "consulting" ? "rotate-180 text-[#A31621]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "consulting" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-[480px] z-50"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 overflow-hidden grid grid-cols-2 gap-4">
                    {consultingItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-red-50 text-[#A31621] group-hover:bg-[#A31621] group-hover:text-white transition-colors duration-200">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="font-semibold text-sm text-[#333333] group-hover:text-[#A31621] transition-colors duration-200">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs text-[#818181] leading-relaxed pl-8">
                            {item.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`font-medium text-sm flex items-center gap-1.5 py-2 transition-colors duration-200 ${
                activeDropdown === "services" ? "text-[#A31621]" : "text-[#333333] hover:text-[#A31621]"
              }`}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180 text-[#A31621]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-[540px] z-50"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 overflow-hidden grid grid-cols-2 gap-4">
                    {servicesItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-red-50 text-[#A31621] group-hover:bg-[#A31621] group-hover:text-white transition-colors duration-200">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="font-semibold text-sm text-[#333333] group-hover:text-[#A31621] transition-colors duration-200">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs text-[#818181] leading-relaxed pl-8">
                            {item.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Our Portfolio */}
          <Link
            href="/service"
            className="font-medium text-sm text-[#333333] hover:text-[#A31621] transition-colors duration-200"
          >
            Our Portfolio
          </Link>
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

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#333333] hover:text-[#A31621] transition-colors duration-200 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-full bg-white shadow-2xl z-40 p-6 pt-24 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col gap-6">
                
                {/* About us */}
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold border-b border-gray-100 pb-3 ${
                    isActive("/about") ? "text-[#A31621]" : "text-[#333333]"
                  }`}
                >
                  About us
                </Link>

                {/* Consulting Dropdown */}
                <div className="flex flex-col border-b border-gray-100 pb-3">
                  <button
                    onClick={() => toggleMobileDropdown("consulting")}
                    className="flex items-center justify-between text-lg font-semibold text-[#333333]"
                  >
                    <span>Consulting</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileDropdown === "consulting" ? "rotate-180 text-[#A31621]" : ""
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {mobileDropdown === "consulting" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden flex flex-col gap-3 mt-3 pl-4"
                      >
                        {consultingItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-[#818181] hover:text-[#A31621] transition-colors py-1"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Dropdown */}
                <div className="flex flex-col border-b border-gray-100 pb-3">
                  <button
                    onClick={() => toggleMobileDropdown("services")}
                    className="flex items-center justify-between text-lg font-semibold text-[#333333]"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileDropdown === "services" ? "rotate-180 text-[#A31621]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileDropdown === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden flex flex-col gap-3 mt-3 pl-4"
                      >
                        {servicesItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-[#818181] hover:text-[#A31621] transition-colors py-1"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Our Portfolio */}
                <Link
                  href="/service"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold border-b border-gray-100 pb-3 text-[#333333]"
                >
                  Our Portfolio
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#A31621] hover:bg-[#861219] text-white py-3.5 rounded-full text-base font-semibold shadow-md transition-all duration-300 w-full"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
