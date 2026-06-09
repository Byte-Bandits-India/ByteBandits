"use client";

import Image from "next/image";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 text-left">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-20 md:gap-24">
        
        {/* Row 1: Who We Are? */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-8">
          <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col text-left">
            <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold font-inter text-[#111111] mb-4">
              {"Who We Are?"}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-[16px] font-medium leading-relaxed">
              {"A Full-Stack Product Engineering Studio Of 40+ Specialists Across AI, Development, And Operations With Experience On Global Grounds In Various Industry Verticals Built To Deliver Intelligent Software For Founders And Operators Who Demand Real Outcomes."}
            </p>
          </div>
          <div className="w-full md:w-[30%] flex justify-end items-start mt-4 md:mt-0">
            <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
              <Image
                src="/images/weAre.png"
                alt="Who We Are Icon"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Row 2: What We Do? */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col text-left">
            <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold font-inter text-[#111111] mb-4">
              {"What We Do?"}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-[16px] font-medium leading-relaxed">
              {"We're Focused On Honing Our Crafts And Bringing Everything We Have To The Table For Our Clients. We Create Custom Built Solutions From AI Agents, Micro-SaaS Products, Web Applications To MVPs!"}
            </p>
          </div>
        </div>

        {/* Row 3: Why We Do It? */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-8">
          {/* Left Column: Image (on mobile, stacks correctly) */}
          <div className="w-full md:w-[30%] flex justify-start items-start mb-4 md:mb-0 order-2 md:order-1">
            <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
              <Image
                src="/images/ai.png"
                alt="Why We Do It Icon"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
          {/* Right Column: Text */}
          <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col text-left order-1 md:order-2">
            <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold font-inter text-[#111111] mb-4">
              {"Why We Do It?"}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-[16px] font-medium leading-relaxed">
              {"Working With Clients Who Are Serious About What They Build Makes Every Engagement Better And Sharper Briefs, Faster Decisions, And Outcomes Worth Being Proud Of. That's Not A Coincidence. That's The Standard."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
