"use client";
import Hero from "./sections/hero";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";

export default function HomePage() {
    return (
        <>
            <div className="overflow-x-hidden">
                <Hero />
                <Section1 />
                <Section2 />
            </div>
        </>
    );
}