import AboutSection from "./section1";
import WhyChooseUsSection from "./section2";
import TechStackSection from "./section3";

export default function About() {
    return (
        <>
            <div className="overflow-x-hidden ">
                <AboutSection />
                <WhyChooseUsSection />
                <TechStackSection />
            </div>
        </>
    );
}
