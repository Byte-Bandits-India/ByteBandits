"use client";

import Image from "next/image";

export default function Section4() {

  return (
    <>
      {/* 1. Outsource Vs. In-House Team (White Background) */}
      <section className="relative z-20 w-full bg-white py-20 md:py-28 text-left border-t border-gray-100" id="outsource">
        <div className="w-full max-w-[1420px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between w-full">
            
            {/* Left Column: Image */}
            <div className="w-full lg:w-[50%] flex justify-center">
              <div className="w-full max-w-[500px] lg:max-w-[550px] aspect-[1892/1544] relative">
                <Image
                  src="/images/service/outSource.png"
                  alt="Outsource Vs. In-House Team"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="w-full lg:w-[50%] flex flex-col text-left">
              <h2 className="text-3xl sm:text-4xl md:text-[50px] font-bold tracking-tight font-inter leading-tight">
                <span className="text-[#FF3B30]">{"Outsource Vs. "}</span>
                <span className="text-[#111111]">{"In-House Team"}</span>
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-[17px] leading-relaxed font-medium mt-6 mb-6">
                {"If You Have A Product Idea But No Engineering Team ByteBandits Acts As Your End-To-End Technical Partner. From Requirements To Production. When You're Ready To Build In-House, Full Documentation, Codebase, And Knowledge Transfer Is Part Of The Handover."}
              </p>

              <h4 className="text-[#111111] text-base sm:text-lg md:text-[20px] font-bold font-inter mt-4">
                {"What That Looks Like:"}
              </h4>

              <ul className="list-disc pl-5 flex flex-col gap-2 mt-3 text-[#111111]">
                <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                  {"Requirements Workshop"}
                </li>
                <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                  {"Architecture And Stack Decisions"}
                </li>
                <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                  {"Full-Cycle Development"}
                </li>
                <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                  {"Testing And QA"}
                </li>
                <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                  {"Cloud Deployment And Infrastructure"}
                </li>
                <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                  {"Post-Launch Support"}
                </li>
                <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                  {"Complete Handover When Ready"}
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
