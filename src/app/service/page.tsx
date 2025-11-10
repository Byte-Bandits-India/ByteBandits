"use client";
import Hero from "./sections/hero"
import Section1 from "./sections/section1"

export default function HeroSection() {
    return (
        <>
            <div className="overflow-x-hidden">
                <Hero />
                <Section1 />
            </div>
        </>

    );
}
