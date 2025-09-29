import Button from "@/components/ui/button"
import Image from "next/image";

export default function ContactSection() {
    return (
        <>
            <section id="service-section">
                <div className="solutions-section mx-45 py-16 px-5 sm:px-10 md:px-20 text-[#333] ">
                    <p
                        className="section-label text-xs sm:text-sm uppercase tracking-widest text-[#818181] mb-[32px] inter"
                        data-aos="fade-up"
                        data-aos-delay="5"
                    >
                        Contact
                    </p>
                    <h2
                        className="section-title text-[30px] sm:text-[40px] md:text-[60px] uppercase leading-tight mb-4 text-[#333] font-[anton]"
                        data-aos="fade-up"
                        data-aos-delay="5"
                    >JUST A <span className="text-[#F9373A] ">MESSAGE</span>AWAY
                    </h2>
                    <p className="text-[14px] text-[#333333] ">Have an idea, a project, or just a spark of inspiration? We’re here to turn it into a digital success story. Whether it’s building an app, scaling your business with smart tech, or crafting a brand that stands out our team is ready to make it happen.</p>
                    <div className="relative z-30 flex items-center justify-center mt-[48px]"></div>
                    <Button />
                </div>
                <div className="mt-8">
                    <Image src="/images/home_2.webp" alt="contact" className="w-full h-auto" />
                </div>
            </section >
        </>
    );
}