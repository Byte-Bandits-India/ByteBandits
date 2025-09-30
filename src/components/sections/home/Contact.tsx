import Button from "@/components/ui/button"
import Image from "next/image";

export default function ContactSection() {
    return (
        <>
            <section id="service-section" className="w-full bg-white">
                <div className="w-full max-w-[1420px] mx-auto py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start lg:items-stretch">

                    {/* Left Column: Text */}
                    <div
                        className="lg:col-span-6 px-6 flex flex-col h-full"
                        data-aos="fade-up"
                        data-aos-delay="5"
                    >
                        <p className="section-label text-xs sm:text-sm uppercase tracking-widest text-[#818181] mb-6 inter">
                            Contact
                        </p>
                        <h2 className="section-title text-[30px] sm:text-[40px] md:text-[60px] uppercase leading-tight mb-6 text-[#333] font-[anton]">
                            JUST A <span className="text-[#F9373A]">MESSAGE</span> AWAY
                        </h2>
                        <p className="text-[14px] text-[#333333] leading-relaxed md:text-[15px] md:leading-6">
                            Have an idea, a project, or just a spark of inspiration? We’re here to turn it into a digital success story. Whether it’s building an app, scaling your business with smart tech, or crafting a brand that stands out, our team is ready to make it happen.
                        </p>

                        {/* Button as div */}
                        <div className="mt-8 inline-block xl:mt-auto">
                            <Button />
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:col-span-6 mt-8 lg:mt-0 w-full">
                        <div className="w-full h-full overflow-hidden rounded-lg">
                            <Image
                                src="/images/home_2.webp"
                                alt="contact"
                                width={1920}
                                height={1080}
                                sizes="100vw"
                                className="w-full h-auto lg:h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}