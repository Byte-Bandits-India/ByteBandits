"use client";

import Image from "next/image";

export default function Section1() {
  return (
    <section className="relative z-20 w-full bg-white py-16 md:py-24 text-left">
      <div className="w-full max-w-[1420px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between w-full">
          
          {/* Left Column: Image Illustration */}
          <div className="w-full lg:w-[50%] flex justify-center">
            <div className="w-full max-w-[500px] lg:max-w-[550px] aspect-[15/16] relative">
              <Image
                src="/images/service/AiData.png"
                alt="AI Data Micro Services"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-[50%] flex flex-col text-left">
            <h2 className="text-[#111111] text-3xl sm:text-4xl md:text-[50px] font-bold tracking-tight font-inter leading-tight">
              {"Agentic AI Systems"}
            </h2>
            
            <p className="text-gray-700 text-sm sm:text-base md:text-[17px] leading-relaxed font-medium mt-6 mb-6">
              {"Agentic AI Goes Beyond Chatbots And Basic Automation. These Are Autonomous Systems That Plan, Decide, And Execute Across Tools, APIs, And Data Sources, Without Constant Human Input."}
            </p>

            <h4 className="text-[#111111] text-base sm:text-lg md:text-[20px] font-bold font-inter mt-4">
              {"What We Build:"}
            </h4>
            
            <ul className="list-disc pl-5 flex flex-col gap-2 mt-3 text-[#111111]">
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Multi-Agent Orchestration Systems"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"AI-Powered Decision Engines"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Autonomous Research And Data Processing Agents"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"LLM-Integrated Backend Workflows"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Tool-Use And Function-Calling Architectures"}
              </li>
            </ul>

            <h4 className="text-[#111111] text-base sm:text-lg md:text-[20px] font-bold font-inter mt-8 mb-3">
              {"Tech Stack:"}
            </h4>
            
            <p className="text-gray-700 text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
              {"LangChain, LangGraph, OpenAI, Python, FastAPI, PostgreSQL, Redis, Docker"}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}