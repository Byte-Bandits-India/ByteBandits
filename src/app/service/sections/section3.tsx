"use client";
import Link from "next/link";
import Image from "next/image";

export default function Section3() {
    const guideItems = [
      {
        choice: "Micro-SaaS Development",
        description: "A product idea with a defined user and revenue model",
        link: "/service#saas",
      },
      {
        choice: "Agentic AI Systems",
        description: "An idea you need to validate fast with a working product",
        link: "/service#agentic",
      },
      {
        choice: "AI Automation",
        description: "A complex decision process that needs to run autonomously",
        link: "/service#automation",
      },
      {
        choice: "MVP Development",
        description: "A workflow with too many manual steps and disconnected tools",
        link: "/service#mvp",
      },
      {
        choice: "Book a Discovery Call",
        description: "No idea which one fits, but a real problem",
        link: "/contact",
      },
    ];

  return (

    <>
    <section className="relative z-20 w-full bg-white py-20 md:py-28 text-left" id="mvp">
      <div className="w-full max-w-[1420px] mx-auto px-6">
        
        <h2 className="text-[#111111] text-3xl sm:text-4xl md:text-[50px] font-bold tracking-tight font-inter leading-tight mb-6">
          {"MVP Development"}
        </h2>

        <p className="text-gray-700 text-sm sm:text-base md:text-[16px] leading-relaxed font-medium mb-10 max-w-[579px]">
          {"A lean, functional first version of your product built to validate your idea, attract early users, and raise your first round. Scoped tight, shipped fast, built to evolve."}
        </p>

        {/* Flowchart Image */}
        <div className="w-full max-w-[1200px] aspect-[4320/1804] relative mx-auto rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <Image
            src="/images/service/mvpDev.png"
            alt="MVP Development Process Flowchart"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Info Columns */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mt-16 justify-between w-full">
          {/* Left Column: What We Build */}
          <div className="w-full md:w-[50%] flex flex-col text-left">
            <h4 className="text-[#111111] text-base sm:text-lg md:text-[20px] font-bold font-inter">
              {"What We Build:"}
            </h4>
            <ul className="list-disc pl-5 flex flex-col gap-2 mt-4 text-[#111111]">
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"End-To-End Product MVPs From Scratch"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Clickable Prototypes Converted To Working Products"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"Full-Stack Web And SaaS MVPs"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"API Integrations And Third-Party Service Connections"}
              </li>
              <li className="text-sm sm:text-base md:text-[17px] font-medium leading-relaxed">
                {"User Authentication, Onboarding Flows, And Core Feature Sets"}
              </li>
            </ul>
          </div>

          {/* Right Column: Tech Stack */}
          <div className="w-full md:w-[50%] flex flex-col text-left">
            <h4 className="text-[#111111] text-base sm:text-lg md:text-[20px] font-bold font-inter">
              {"Tech Stack:"}
            </h4>
            <p className="text-gray-700 text-sm sm:text-base md:text-[17px] font-medium leading-relaxed mt-4">
              {"React, Next.Js, Node.Js, Python, PostgreSQL, Supabase, AWS, Vercel, Stripe, Firebase"}
            </p>
          </div>
        </div>

      </div>
    </section>
          {/* 2. Guide Section (Black Background) */}
      <section className="relative z-20 w-full bg-black py-20 md:py-28 text-left rounded-t-[48px] md:rounded-t-[80px]">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          
          <h2 className="text-white text-3xl sm:text-4xl md:text-[40px] font-bold font-inter mb-16 tracking-tight">
            {"Not Sure Where To Start? "}<span className="text-[#FF3B30]">{"Start Here."}</span>
          </h2>

          {/* Guide Table Wrapper */}
          <div className="flex flex-col w-full border-t border-gray-800">
            {/* Header Row */}
            <div className="flex py-4 gap-4 justify-between w-full border-b border-gray-800 text-gray-400 font-bold text-sm uppercase tracking-wider">
              <div className="w-[45%] md:w-[40%]">
                {"Choose..."}
              </div>
              <div className="w-[55%] md:w-[60%] pl-2">
                {"If you have..."}
              </div>
            </div>

            {/* Content Rows */}
            {guideItems.map((item, idx) => (
              <Link 
                key={idx}
                href={item.link}
                className="flex py-6 border-b border-gray-800 gap-4 justify-between w-full items-center group transition-colors hover:bg-white/[0.02]"
              >
                <div className="w-[45%] md:w-[40%] font-bold text-base md:text-lg transition-colors text-white group-hover:text-[#FF3B30]">
                  {item.choice}
                </div>
                <div className="w-[55%] md:w-[60%] text-gray-300 text-xs sm:text-sm md:text-base font-medium leading-normal pl-2 group-hover:text-white transition-colors">
                  {item.description}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
</>
    
  );
}
