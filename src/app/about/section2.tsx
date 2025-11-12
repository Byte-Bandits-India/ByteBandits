"use client";

import Image from "next/image";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full font-inter text-[#111] px-6 py-20">
      {/* ===== Top Section ===== */}
      <div className="max-w-[1400px] mx-auto">
        <h1 className=" text-[20px] md:text-[40px] 2xl:text-[55px] font-medium leading-tight">
          We’re The Rebels Of The Digital World
          <span className="">
            Crafting Brands That Speak, Sell, And Shine.
          </span>
        </h1>

        {/* Red Box + Paragraph Section */}
        <div className="mt-[8%] flex flex-col lg:flex-row items-center 2xl:items-start gap-10 2xl:gap-16">
          {/* Left Red Image */}
          <div className="relative w-full lg:w-[400px] xl:w-[620px] xl:h-[420px] aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/bb-big.png"
              alt="Byte Bandits Logo"
              fill
              className="rounded-xl"
              priority
            />
          </div>

          {/* Right Text Content */}
          <div className="flex-1 text-sm md:text-base 2xl:text-[20px] leading-relaxed space-y-4 my-auto">
            <p>
              <strong>Every great brand starts with a story:</strong> Ours began
              with a group of tech geeks, creative thinkers, and{" "}
              <strong>coffee-fuelled dreamers</strong> who wanted to do more than
              just build websites or run ads.
            </p>

            <p>
              We set out to create connections, not just campaigns, but helping
              brands look great, feel real, and <strong>make an impact</strong>{" "}
              that lasts.
            </p>

            <p>
              By blending creativity with logic, we built a space where design,
              code, and marketing work together seamlessly. That’s how{" "}
              <strong>Byte Bandits</strong> was born to be a team on a mission to{" "}
              <strong>redefine digital creativity.</strong>
            </p>

            <p>
              At Byte Bandits, we don’t just build online presence — we help
              brands grow, engage, and thrive. From bold visuals to smart
              websites and campaigns that convert, everything we create follows
              one mantra:
            </p>

            <p className="text-lg 2xl:text-[24px] leading-snug font-semibold">
              Make it meaningful. Make it memorable. Make it work.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Why Choose Us Section ===== */}
      <div className="max-w-[1400px] mx-auto text-center mt-[10%]">
        <h2 className="text-xl md:text-[50px] 2xl:text-[67px] font-semibold mb-8">
          Why Choose Us ?
        </h2>

        <p className="text-base mt-[6%]  md:text-[40px] 2xl:text-[60px] leading-tight tracking-[-0.05rem] font-light">
          We Don’t Follow Trends,{" "}
          <strong className="font-semibold">We Set Them.</strong> From  <br />
          Concept To Completion, We Turn{" "}
          <strong className="font-semibold">Your Vision</strong> Into Powerful
          Digital Experiences That{" "}
          <strong className="font-semibold">Stand Out</strong>, Perform Better,
          And Scale <strong className="font-semibold">Effortlessly.</strong>
        </p>
      </div>
    </section>
  );
}
