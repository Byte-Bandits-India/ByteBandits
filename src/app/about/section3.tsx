"use client";

import Link from "next/link";

export default function TechStackSection() {
  return (
    <div className="w-full">
      {/* CTA Section */}
      <section className="w-full bg-white py-24 md:py-32 text-center border-t border-gray-100">
        <div className="w-full max-w-[1420px] mx-auto px-6 flex flex-col items-center justify-center">
          <h2 className="text-[#111111] text-4xl sm:text-5xl md:text-[64px] font-anton uppercase mb-4">
            {"Looking for a technology partner ?"}
          </h2>
          <h3 className="text-[#BF3A3B] text-4xl sm:text-5xl md:text-[64px] font-anton tracking-tight mb-10">
            {"Let's talk."}
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C62727] hover:bg-[#A31621] text-white px-8 py-4 rounded-xl font-bold font-inter text-sm md:text-base transition-all hover:scale-[1.02] shadow-sm"
          >
            {"Book a Call"} <span className="text-lg">{"→"}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
