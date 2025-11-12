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
      <section className="bg-[#FFE5DD] h-[600px] md:h-dvh flex flex-col items-center justify-center relative overflow-hidden">
        <div className="max-w-[1400px] relative flex flex-col items-center justify-center px-4 sm:px-6">
          {/* ABOUT Text - Left */}
          <h2
            className="
            absolute z-10 text-[#BF3A3B] font-regular tracking-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px]
            top-8 sm:top-10 md:top-16 lg:top-20 xl:top-24
            -left-4 sm:left-10 md:left-20 lg:-left-16 xl:-left-48
            -translate-y-1/2
          "
          >
            ABOUT
          </h2>

          {/* Center Image (responsive height via aspect ratio) */}
          <div
            className="
            relative overflow-hidden rounded-xl shadow-xl
            w-[250px] sm:w-[320px] md:w-[480px] lg:w-[700px] xl:w-[1000px]
            aspect-[5/3] 
          "
          >
            <Image
              src="/images/team.png"
              alt="About Byte Bandits"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* BYTE BANDITS Text - Right */}
          <h2
            className="
            absolute z-10 text-[#BF3A3B] font-regular tracking-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px]
            bottom-2 sm:bottom-4 md:bottom-8 lg:bottom-12 xl:-bottom-10
            -right-8 sm:right-10 md:right-20 lg:-right-24 xl:-right-56
            -translate-y-1/2
          "
          >
            BYTE BANDITS
          </h2>
        </div>
      </section>
    </section>
  );
}
