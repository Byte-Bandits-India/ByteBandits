"use client";

import Image from "next/image";
import Link from "next/link";

export default function TechStackSection() {
  return (
    <div className="w-full">
      {/* 3-Column Working Model Section */}
      <section className="w-full bg-[#F5F5F5] py-20 md:py-28 text-left border-t border-gray-100">
        <div className="w-full max-w-[1420px] mx-auto px-6">
          {/* 3-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch w-full">
            
            {/* Column 1: How we deliver */}
            <div className="w-full lg:w-[33.333333%] flex flex-col text-left justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium font-inter text-[#111111] mb-6 leading-tight">
                  {"How we deliver"}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed mb-8">
                  {"We execute projects through a defined delivery process that reduces ambiguity, validates decisions early, and ensures the system is stable in real operational use. Each stage has a clear output and review before moving forward."}
                </p>
              </div>
              <div className="w-full aspect-[1408/1540] relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="/images/howWeDeliver.png"
                  alt="How we deliver"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 2: Discovery & planning */}
            <div className="w-full lg:w-[33.333333%] flex flex-col text-left justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium font-inter text-[#111111] mb-6 leading-tight">
                  {"1. Discovery & planning"}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed mb-8">
                  {"We study your business operations, stakeholders, and current tools to understand how work is actually performed. Requirements, risks, and dependencies are documented before development begins. We define scope, architecture approach, priorities, and milestones."}
                </p>
              </div>
              <div className="w-full aspect-[1408/1540] relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="/images/Discover.png"
                  alt="Discovery & planning"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 3: UX / UI design */}
            <div className="w-full lg:w-[33.333333%] flex flex-col text-left justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium font-inter text-[#111111] mb-6 leading-tight">
                  {"2. UX / UI design"}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed mb-8">
                  {"We map user journeys, workflows, and permission levels based on operational roles. Wireframes and prototypes are created and reviewed with your team. Interfaces are designed for usability, not visual appearance alone. Approval here ensures development starts with complete clarity."}
                </p>
              </div>
              <div className="w-full aspect-[1408/1540] relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="/images/Ui:Ux.png"
                  alt="UX / UI design"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-24 md:py-32 text-center border-t border-gray-100">
        <div className="w-full max-w-[1420px] mx-auto px-6 flex flex-col items-center justify-center">
          <h2 className="text-[#111111] text-4xl sm:text-5xl md:text-[64px] font-anton uppercase tracking-tight leading-tight mb-2">
            {"Looking for a technology partner ?"}
          </h2>
          <h3 className="text-[#BF3A3B] text-4xl sm:text-5xl md:text-[64px] font-anton tracking-tight leading-none mb-10">
            {"Let's talk."}
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF3B30] text-white px-8 py-4 rounded-xl font-bold font-inter text-sm md:text-base transition-all hover:bg-[#FF3B30]/90 hover:scale-[1.02] shadow-sm"
          >
            {"Book a Call"} <span className="text-lg">{"→"}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
