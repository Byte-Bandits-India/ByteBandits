
import HeroSection from "@/components/sections/home/HeroSection";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import Solution from "@/components/sections/home/Solution";
import CustomersSection from "@/components/sections/home/CustomersSection";
import FAQSection from "@/components/sections/home/FAQSection";
import ExpertiseSection from "@/components/sections/home/ExpertiseSection";
import MarketSurvivalSection from "@/components/sections/home/MarketSurvivalSection";
import HowWeWorkSection from "@/components/sections/home/HowWeWorkSection";

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