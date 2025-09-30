import Button from "@/components/ui/button"
import Image from "next/image";

export default function ContactSection() {
    return (
        <>
            <section id="service-section" className="w-full bg-white">
                <div className="w-full max-w-[1420px] mx-auto py-16 flex flex-col lg:flex-row gap-10 items-start">

                    {/* Left Column: Text */}
                    <div
                        className="flex-1 px-6 lg:px-0 flex flex-col"
                        data-aos="fade-up"
                        data-aos-delay="5"
                    >
                        <p className="section-label text-xs sm:text-sm uppercase tracking-widest text-[#818181] lg:text-[20px] mb-6 inter">
                            Contact
                        </p>
                        <h2 className="section-title text-[30px] sm:text-[40px] md:text-[60px] uppercase leading-tight mb-6 text-[#333] font-[anton]">
                            JUST A <span className="text-[#F9373A]">MESSAGE</span> AWAY
                        </h2>
                        <p className="text-[14px] text-[#333333] leading-relaxed md:text-[15px] lg:text-[20px] md:leading-6">
                            Have an <span className="text-[#F9373A]">idea, a project</span>, or just a spark of inspiration? We’re here to turn it into a <span className="text-[#F9373A]">digital success story</span>. Whether it’s building an app, scaling your business with smart tech, or crafting a brand that stands out our team is ready to <span className="text-[#F9373A]">make it happen</span>.
                        </p>

                        <div className="mt-8">
                            <Button />
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 w-full mt-8 lg:mt-0 flex justify-start lg:justify-end">
                        <div className="w-full lg:w-[818px] h-auto lg:h-[545px] overflow-hidden rounded-lg">
                            <Image
                                src="/images/home_2.webp"
                                alt="contact"
                                width={818}
                                height={545}
                                sizes="100vw"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>



        </>
    );
}