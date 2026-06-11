import HeroSection from "@/components/sections/home/HeroSection";
import dynamic from "next/dynamic";

const ExpertiseSection = dynamic(() => import("@/components/sections/home/ExpertiseSection"));

const PortfolioSection = dynamic(() => import("@/components/sections/home/PortfolioSection"));
const MarketSurvivalSection = dynamic(() => import("@/components/sections/home/MarketSurvivalSection"));
const HowWeWorkSection = dynamic(() => import("@/components/sections/home/HowWeWorkSection"));
const Solution = dynamic(() => import("@/components/sections/home/Solution"));
const CustomersSection = dynamic(() => import("@/components/sections/home/CustomersSection"));
const FAQSection = dynamic(() => import("@/components/sections/home/FAQSection"));

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden scrollbar-none">
      <HeroSection />
      
      <ExpertiseSection />
      
      <PortfolioSection />
      
      <MarketSurvivalSection />
      
      <HowWeWorkSection />
      
      <Solution />
      
      <CustomersSection />
      
      <FAQSection />
      
    </main>
  );
}