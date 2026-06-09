"use client";

import Image from "next/image";

export default function Section2() {
  return (
    <section className="relative z-20 w-full bg-gradient-to-bl from-[#535771] to-[#050607] py-20 md:py-28 text-left rounded-b-[48px] md:rounded-b-[80px]">
      <div className="w-full max-w-[1420px] mx-auto px-6 flex flex-col gap-24 md:gap-32">
        
        {/* Block 1: Micro-SaaS Development */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between w-full">
          {/* Left Column: Text */}
          <div className="w-full lg:w-[50%] flex flex-col text-left order-1">
            <h2 className="text-white text-3xl sm:text-4xl md:text-[50px] font-bold tracking-tight font-inter leading-tight">
              {"Micro-SaaS Development"}
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-[17px] leading-relaxed font-medium mt-6 mb-6">
              {"A Focused Software Product Built To Solve One Specific Problem For One Specific Audience Which Is Designed For Subscription Revenue, Low Churn, And Fast In Order To Market."}
            </p>

            <h4 className="text-white text-base sm:text-lg md:text-[20px] font-bold font-inter mt-4">
              {"What We Build:"}
            </h4>
            
            <ul className="list-disc pl-5 flex flex-col gap-2 mt-3 text-white">
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Full-Stack Web Applications"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Subscription-Based SaaS Tools"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Internal Tools Productized For External Markets"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"API-First Products With Third-Party Integrations"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Dashboard And Analytics Platforms"}
              </li>
            </ul>

            <h4 className="text-white text-base sm:text-lg md:text-[20px] font-bold font-inter mt-8 mb-3">
              {"Tech Stack:"}
            </h4>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
              {"React, Next.Js, Node.Js, Python, Postgre SQL, Supabase, Stripe, AWS, Vercel"}
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-[50%] flex justify-center order-2">
            <div className="w-full max-w-[500px] aspect-[11/12] relative">
              <Image
                src="/images/service/saas.png"
                alt="Micro-SaaS Development"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Block 2: AI Automation */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between w-full">
          {/* Left Column: Image (Desktop order-1, Mobile order-2) */}
          <div className="w-full lg:w-[50%] flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-[500px] aspect-[11/8] relative">
              <Image
                src="/images/service/AiAutomation.png"
                alt="AI Automation"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Text (Desktop order-2, Mobile order-1) */}
          <div className="w-full lg:w-[50%] flex flex-col text-left order-1 lg:order-2">
            <h2 className="text-white text-3xl sm:text-4xl md:text-[50px] font-bold tracking-tight font-inter leading-tight">
              {"AI Automation"}
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-[17px] leading-relaxed font-medium mt-6 mb-6">
              {"Workflow Automation That Uses AI To Eliminate Manual, Repetitive, And Error-Prone Processes Across Your Operations From Data Entry To Complex Multi-System Workflows."}
            </p>

            <h4 className="text-white text-base sm:text-lg md:text-[20px] font-bold font-inter mt-4">
              {"What We Build:"}
            </h4>
            
            <ul className="list-disc pl-5 flex flex-col gap-2 mt-3 text-white">
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"End-To-End Process Automation Pipelines"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"AI-Powered Document Processing Systems"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"CRM And ERP Automation Integrations"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Intelligent Data Extraction And Transformation"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Notification, Scheduling, And Reporting Automation"}
              </li>
            </ul>

            <h4 className="text-white text-base sm:text-lg md:text-[20px] font-bold font-inter mt-8 mb-3">
              {"Tech Stack:"}
            </h4>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
              {"Python · N8n · Make · Zapier · OpenAI · LangChain · REST APIs · Webhooks · PostgreSQL"}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
