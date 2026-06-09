// app/services/page.tsx
import type { Metadata } from "next";
import Hero from "./sections/hero";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import CustomersSection from "@/components/sections/home/CustomersSection";

export const metadata: Metadata = {
    title: "Services | Byte Bandits",
    description:
        "Explore our software development, mobile apps, UI/UX, cloud solutions, and branding services crafted for business growth.",
    openGraph: {
        title: "Services | Byte Bandits",
        description:
            "Explore our software development, mobile apps, UI/UX, cloud solutions, and branding services crafted for business growth.",
        url: "https://bytebandits.com/services",
        type: "website",
    },
};

export default function Service() {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <CustomersSection/>
        </div>
    );
}
