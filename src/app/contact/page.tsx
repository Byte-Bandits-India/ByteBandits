import React from "react";
import Image from "next/image";

export default function Home() {
    const contactInfo = [
        {
            img: "/images/contact_red.png",
            alt: "Phone",
            text: "+91 89400 11098",
            textSize: "text-lg",
        },
        {
            img: "/images/mail_red.png",
            alt: "Mail",
            text: "support@bytebandits.in",
            textSize: "text-lg",
        },
        {
            img: "/images/location_red.png",
            alt: "Location",
            text: "Plot no.3a, door no.1/1033, Kumudham Nagar Extension, Mugalivakkam, Chennai - 600125",
            textSize: "text-[14px]",
        },
    ];

    return (
        <main className="overflow-x-hidden px-6">
            <div className="mt-[38px]">
                {/* Header Line */}
                <div className="flex items-center justify-center w-full">
                    <Image src="/images/Line_red.png" alt="line" width={16} height={2} />
                    <h1 className="text-white text-[10px] px-2 whitespace-nowrap text-center font-semibold leading-none">
                        CONTACT WITH US
                    </h1>
                    <Image src="/images/Line_red.png" alt="line" width={16} height={2} />
                </div>

                <div className="text-center text-[#FFFFFF] text-[14px] mt-[24px]">
                    <h1 className="text-[28px] font-semibold">Let&apos;s Contact With Us</h1>

                    <div className="space-y-5 mt-[48px]">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#1B1B1C] w-full h-[100px] rounded-xl flex items-center px-5 py-4"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    width={40}
                                    height={40}
                                    className="mr-6 w-[40px] h-[40px] object-contain"
                                />
                                <h1 className={`text-white ${item.textSize} text-left`}>{item.text}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Women Image */}
                <div className="mt-8 relative w-full md:w-[354px] h-[530px]">
                    <Image src="/images/women.webp" alt="women" fill className="rounded-xl object-cover" />
                </div>

                {/* Footer Line */}
                <div className="flex items-center justify-center w-full mt-8">
                    <Image src="/images/Line_red.png" alt="line" width={16} height={2} />
                    <h1 className="text-white text-[10px] px-2 whitespace-nowrap text-center leading-none">Let’s Talk</h1>
                    <Image src="/images/Line_red.png" alt="line" width={16} height={2} />
                </div>

                <p className="text-[16px] text-[#FFFFFF] text-center mt-5">
                    Fill out the form below and we’ll get back to you within 24 hours.
                </p>

                {/* Form */}
                <div className="min-h-[460px] bg-[#1B1B1C] w-full mt-8 rounded-xl overflow-hidden">
                    <div className="px-4 py-4 h-full flex">
                        <form className="w-full max-w-md mx-auto my-auto">
                            <div className="space-y-[15px]">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full p-4 rounded-xl text-[18px] text-[#818181] bg-[#222228] focus:outline-none focus:border-orange-500"
                                />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 rounded-xl text-[18px] text-[#818181] bg-[#222228] focus:outline-none focus:border-orange-500"
                                />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Your Phone"
                                    className="w-full p-4 rounded-xl text-[18px] text-[#818181] bg-[#222228] focus:outline-none focus:border-orange-500"
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full p-4 rounded-xl text-[18px] text-[#818181] bg-[#222228] focus:outline-none focus:border-orange-500"
                                />
                                <button
                                    type="submit"
                                    className="w-full h-[60px] text-white font-medium text-[18px] rounded-[10px] bg-gradient-to-r from-[#9F1520] to-[#600C13] hover:opacity-90 transition-opacity"
                                >
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Map Image */}
                <div className="relative mt-8 w-full h-[331px] md:w-[331px] mb-[48px]">
                    <Image src="/images/map.png" alt="map" fill className="object-cover" />
                </div>
            </div>
        </main>
    );
}
