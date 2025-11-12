"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full font-anton">
      {/* Top Red Section */}
      <div className="bg-[#BF3A3B] text-center h-[600px] text-white px-4">
        <h1 className="text-5xl max-w-[1400px] mx-auto md:text-[80px] 2xl:text-[120px] pt-[200px] text-left font-regular text-[#FFE5DE] mb-6 ">
          REBELS OF THE DIGITAL WORLD
        </h1>
        <p className="max-w-[1400px] mx-auto text-left font-inter font-light mt-16 text-sm 2xl:text-[20px] leading-tight tracking-tight">
          We Steal Attention For Your Brand. <br />
          Blend Design, Code, And Content Like Art. <br />
          Byte By Byte, We Build Digital Legends.
        </p>
      </div>

      {/* About Section */}
      <div className="bg-[#FFE5DD] h-[950px] flex flex-col items-center justify-center relative">
        <div className="max-w-[1400px] relative flex flex-col items-center justify-center">
          {/* About Text - Left */}
          <h2 className="absolute z-10 -left-32 2xl:-left-48 top-24 -translate-y-1/2 text-[#BF3A3B] text-5xl 2xl:text-[120px] font-regular tracking-tight">
            ABOUT
          </h2>

          {/* Center Image */}
          <div className="relative w-[320px] 2xl:w-[1000px] h-[240px] 2xl:h-[600px] overflow-hidden">
            <Image
              src="/images/team.png"
              alt="About Byte Bandits"
              fill
              className="object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* Byte Bandits Text - Right */}
          <h2 className="absolute z-10 -right-40 2xl:-right-56 -bottom-10 -translate-y-1/2 text-[#BF3A3B] text-5xl 2xl:text-[120px] font-regular tracking-tight">
            BYTE BANDITS
          </h2>
        </div>
      </div>
    </section>
  );
}
