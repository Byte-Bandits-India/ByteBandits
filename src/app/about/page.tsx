// app/about/page.tsx
import type { Metadata } from "next";
import AboutSection from "./section1";
import WhyChooseUsSection from "./section2";
import TechStackSection from "./section3";

export const metadata: Metadata = {
    title: "About Us | Byte Bandits",
    description:
        "Learn more about Byte Bandits — our mission, vision, values, and expertise in building world-class digital products.",
    openGraph: {
        title: "About Us | Byte Bandits",
        description:
            "Learn more about Byte Bandits — our mission, vision, values, and expertise in building world-class digital products.",
        url: "https://bytebandits.com/about",
        type: "website",
    },
};

export default function About() {
    return (
        <div className="overflow-x-hidden">
            <AboutSection />
            <WhyChooseUsSection />
            <TechStackSection />
        </div>
    );
}
