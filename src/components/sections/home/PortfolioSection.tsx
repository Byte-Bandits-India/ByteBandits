"use client";

import { motion, Variants, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

interface CounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ target, duration = 1.5, prefix = "", suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

interface PortfolioItem {
  title: string;
  image: string;
  href: string;
  aspectClass: string;
}

const PortfolioSection = () => {
  // Statistics data
  const stats = [
    {
      target: 40,
      prefix: "",
      suffix: "+",
      label1: "Products shipped",
      label2: "to production",
    },
    {
      target: 7,
      prefix: "",
      suffix: "+",
      label1: "Years Of",
      label2: "Experience",
    },
    {
      target: 8,
      prefix: "$",
      suffix: "M",
      label1: "Funding Raised",
      label2: "By Clients",
    },
    {
      target: 40,
      prefix: "",
      suffix: "+",
      label1: "Trusted",
      label2: "Customers",
    },
  ];

  // Animation variants for reveal effects
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-16" id="portfolio-section">
      
      {/* 1. TOP STATISTICS BANNER */}
      <div className="w-full max-w-[820px] mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-[52px] font-bold text-[#FF3B30] tracking-tight mb-2">
                <Counter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <span className="text-xs md:text-sm font-semibold text-[#818181] leading-relaxed">
                {stat.label1}
                <span className="block">{stat.label2}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F5F3F3] py-6 md:py-8 lg:py-16">
        {/* 2. ASYMMETRIC PORTFOLIO GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1420px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch lg:h-[700px]"
      >
        {/* COLUMN 1: INTRO TEXT & CARD 1 */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full w-full gap-6 lg:gap-0">
          <motion.div variants={itemVariants} className="flex flex-col text-left py-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold text-[#333333] mdleading-relaxed tracking-[2%] mb-4">
              Our Portfolio & Case Studies
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed max-w-sm font-medium">
              Explore the work and the process behind every project, built around a real
              problem, a real client, and a real outcome.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex-1 relative min-h-[300px] lg:min-h-0 lg:h-auto mt-4">
            <Link
              href="/service"
              className="relative block w-full h-full overflow-hidden rounded-[24px] group shadow-md"
            >
              <Image
                src="/images/home/AiDemand.png"
                alt="AI Demand Forecasting for Retail"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-8 left-0 right-0 px-6 text-right z-20">
                <span className="text-white font-bold text-sm md:text-lg underline decoration-white/70 decoration-2 underline-offset-4 group-hover:decoration-white transition-all duration-300">
                  AI Demand Forecasting for Retail
                </span>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* COLUMN 2: TWO STACKED CARDS */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full gap-8 w-full">
          <motion.div variants={itemVariants} className="w-full flex-1 relative min-h-[200px] lg:min-h-0 lg:h-auto">
            <Link
              href="/service"
              className="relative block w-full h-full overflow-hidden rounded-[24px] group shadow-md"
            >
              <Image
                src="/images/home/e-commerce.png"
                alt="ECommerce Website Development"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-8 left-0 right-0 px-6 text-right z-20">
                <span className="text-white font-bold text-sm md:text-lg underline decoration-white/70 decoration-2 underline-offset-4 group-hover:decoration-white transition-all duration-300">
                  ECommerce Website Development
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex-1 relative min-h-[200px] lg:min-h-0 lg:h-auto">
            <Link
              href="/service"
              className="relative block w-full h-full overflow-hidden rounded-[24px] group shadow-md"
            >
              <Image
                src="/images/home/logistics.png"
                alt="Logistics and Route Optimization System"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-8 left-0 right-0 px-6 text-right z-20">
                <span className="text-white font-bold text-sm md:text-lg underline decoration-white/70 decoration-2 underline-offset-4 group-hover:decoration-white transition-all duration-300">
                  Logistics and Route Optimization System
                </span>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* COLUMN 3: TALL CARD & SEE MORE BUTTON */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full gap-8 w-full">
          <motion.div variants={itemVariants} className="w-full flex-1 relative min-h-[350px] lg:min-h-0 lg:h-auto">
            <Link
              href="/service"
              className="relative block w-full h-full overflow-hidden rounded-[24px] aspect-[3/4.2] group shadow-md"
            >
              <Image
                src="/images/home/customerSupport.png"
                alt="Customer Support Automation Agent"
                fill
                sizes="(max-width: 1004px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-8 left-0 right-0 px-6 text-right z-20">
                <span className="text-white font-bold text-sm md:text-lg underline decoration-white/70 decoration-2 underline-offset-4 group-hover:decoration-white transition-all duration-300">
                  Customer Support Automation Agent
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full shrink-0">
            <Link
              href="/service"
              className="inline-flex items-center justify-center border border-black bg-[#F8F9FA] text-black px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-black hover:text-white shadow-sm hover:shadow-md w-full text-center"
            >
              See More Projects and Case Studies
            </Link>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
