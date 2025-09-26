import React from "react";

export default function Home() {
    const contactInfo = [
        {
            img: "/images/contact_red.png",
            alt: "Phone",
            text: "+91 89400 11098",
        },
        {
            img: "/images/mail_red.png",
            alt: "Mail",
            text: "support@bytebandits.in",
        },
        {
            img: "/images/location_red.png",
            alt: "Location",
            text: "Plot no.3a, door no.1/1033, Kumudham Nagar Extension, Mugalivakkam, Chennai - 600125",
        },
    ];

    return (
        <>
            <main className="overflow-x-hidden px-6">
                <div className="mt-10">
                    <div className="flex items-center w-full">
                        <img src="/images/Line_red.png" alt="line1" className="flex-1 h-[2px] object-contain" />
                        <h1 className="text-white text-[10px] whitespace-nowrap text-center leading-none">CONTACT WITH US</h1>
                        <img src="/images/Line_red.png" alt="line2" className="flex-1 h-[2px] object-contain" />
                    </div>
                    <div className="text-center text-[#FFFFFF] text-[14px] mt-[40px]">
                        <h1 className="text-[28px]">Let's Contact With Us</h1>

                        <div className="space-y-5 mt-10">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1B1B1C] w-full h-[100px] rounded-xl flex items-center px-5 py-4"
                                >
                                    <img src={item.img} alt={item.alt} className="w-8 h-8 mr-4" />
                                    <h1 className="text-white text-[14px] text-left">{item.text}</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <img className="mt-10 rounded-xl h-auto md:h-[530px] md:w-[354px] " src="/images/women.webp" alt="women" />
                    </div>

                    <div className="mt-10">
                        <div className="flex items-center w-full">
                            <img src="/images/Line_red.png" alt="line1" className="flex-1 h-[2px] object-contain" />
                            <h1 className="text-white text-[10px] whitespace-nowrap text-center leading-none">Let’s Talk</h1>
                            <img src="/images/Line_red.png" alt="line2" className="flex-1 h-[2px] object-contain" />
                        </div>
                        <div>
                            <p className="text-[16px] text-[#FFFFFF] text-center mt-6 ">Fill out the form below and we’ll get back to you within 24 hours.</p>
                        </div>

                        {/* Form */}
                        <div className="h-[460px] bg-[#1B1B1C] w-full mt-8 rounded-xl flex items-center justify-center">
                            <form className="w-full max-w-md p-6 space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full p-4 rounded-xl bg-[#2C2C2D] text-white border border-gray-700 focus:outline-none focus:border-orange-500"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full p-4 rounded-xl bg-[#2C2C2D] text-white border border-gray-700 focus:outline-none focus:border-orange-500"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Your Phone"
                                        className="w-full p-4 rounded-xl bg-[#2C2C2D] text-white border border-gray-700 focus:outline-none focus:border-orange-500"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        rows={4}
                                        className="w-full p-4 rounded-xl bg-[#2C2C2D] text-white border border-gray-700 focus:outline-none focus:border-orange-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 text-white font-medium text-[18px] rounded-md bg-gradient-to-r from-[#9F1520] to-[#600C13] hover:opacity-90 transition-opacity"
                                >
                                    Submit Now
                                </button>
                            </form>
                        </div>

                        {/* Map */}
                        <div>
                            <img src="/images/map.png" className="w-full h-[331px] md:w-[331px]" alt="map" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
