import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
    return (
        <>
            <section id="service-section" className="w-full bg-[radial-gradient(circle,_#333437_0%,_#1C1D1F_100%)]">
                <div className="w-full flex flex-col lg:flex-row gap-10 items-start">

                    {/* Left Column: Text */}
                    <div
                        className="flex-1 px-6 flex pt-16 lg:py-16 flex-col xl:pl-24"
                        data-aos="fade-up"
                        data-aos-delay="5"
                    >
                        <p className="section-label text-[14px] md:text-[16px] uppercase tracking-widest text-[#ECECEA] lg:text-[20px] mb-6 inter">
                            Contact
                        </p>
                        <h2 className="section-title text-[30px] sm:text-[40px] md:text-[60px] uppercase leading-tight mb-6 text-[#ECECEA] font-[anton]">
                            JUST A <span className="text-[#FAAC61]">MESSAGE</span> AWAY
                        </h2>
                        <p className="text-[14px] text-[#BABABA] leading-relaxed md:text-[16px] lg:text-[20px] md:leading-6 border-l-[4px] border-[#FAAC61] pl-4">
                            Have an <span className="text-[#F9373A]">idea, a project</span>, or just a spark of inspiration?
                            We’re here to turn it into a <span className="text-[#F9373A]">digital success story</span>.
                            Whether it’s building an app, scaling your business with smart tech, or crafting a brand that stands out —
                            our team is ready to <span className="text-[#F9373A]">make it happen</span>.
                        </p>


                        <div className="mt-8 flex">
                            <Link
                                href="/contact"
                                className="flex items-center justify-center gap-2 text-white bg-[#F9373A] text-[14px] md:text-[16px] lg:text-[20px] w-full h-[40px] max-w-[170px] md:h-[50px] md:max-w-[195px] rounded-full text-center hover:bg-[#d92f33] transition-colors duration-300"
                            >
                                CONTACT
                                <IoIosArrowForward className="text-[14px] md:text-[16px] lg:text-[20px]" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 w-full mt-8 lg:mt-0 flex justify-start lg:justify-end">
                        <div className="w-full lg:w-[518px] xl:w-[800px] h-auto lg:h-[579px] overflow-hidden rounded-lg">
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