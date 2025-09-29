"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Home() {
    const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        setSuccess(true);
        setForm({ name: "", email: "", number: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
    }

    const contactInfo = [
        {
            img: "/icons/contact/Headphone.png",
            alt: "Phone",
            text: "+91 89400 11098",
            textSize: "text-lg",
        },
        {
            img: "/icons/contact/red_mail.png",
            alt: "Mail",
            text: "support@bytebandits.in",
            textSize: "text-lg",
        },
        {
            img: "/icons/contact/location.png",
            alt: "Location",
            text: "Plot no.3a, door no.1/1033, Kumudham Nagar Extension, Mugalivakkam, Chennai - 600125",
            textSize: "text-[14px]",
        },
    ];

    return (
        <div className="overflow-x-hidden px-6 bg-[#FFFFFF]">
            <div className="mt-[38px]">
                {/* Header Line */}
                <div className="flex items-center justify-center w-full">
                    <Image src="/icons/Line_left.png" alt="line" width={16} height={2} />
                    <h1 className="text-[#8C8C8C] text-[10px] px-2 whitespace-nowrap text-center font-semibold leading-none">
                        CONTACT WITH US
                    </h1>
                    <Image src="/icons/Line_right.png" alt="line" width={16} height={2} />
                </div>

                <div className="text-center text-[#FFFFFF] text-[14px] mt-[24px]">
                    {/* Title */}
                    <motion.div className="contact-title mt-[45px] font-anton">
                        {["LETS CONTACT", "WITH US"].map((line, lineIndex) => (
                            <div
                                key={lineIndex}
                                className="title-line flex flex-wrap justify-center items-center 
                 text-[42px] sm:text-[2.5rem] md:text-[5.625rem] lg:text-[8rem] 
                 sm:leading-[3.125rem] md:leading-[6.875rem] lg:leading-[9.5rem] 
                 space-x-2 sm:space-x-4 lg:space-x-6"
                            >
                                {line.split(" ").map((word, wIndex) => (
                                    <div
                                        key={wIndex}
                                        className="flex"
                                        style={{ color: word === "CONTACT" ? "#F9373A" : "#353639" }}
                                    >
                                        {word.split("").map((char, i) => (
                                            <span
                                                key={i}
                                                className="inline-block transition-transform hover:scale-y-110 origin-bottom"
                                            >
                                                {char}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>


                    <div className="space-y-5 mt-[48px]">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#F4F6F8] w-full h-[100px] rounded-xl flex items-center px-5 py-4"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    width={40}
                                    height={40}
                                    className="mr-6 w-[40px] h-[40px] object-contain"
                                />
                                <h1 className={`text-[#333333] ${item.textSize} text-left`}>{item.text}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Women Image */}
                <div className="mt-8 relative w-full md:w-[354px] h-[530px]">
                    <Image src="/images/contact.webp" alt="women" fill className="rounded-xl object-cover" />
                </div>

                {/* Footer Line */}
                <div className="flex items-center justify-center w-full mt-8">
                    <Image src="/icons/Line_left.png" alt="line" width={16} height={2} />
                    <h1 className="text-[#8C8C8C] text-[12px] uppercase px-2 whitespace-nowrap text-center leading-none">Let’s Talk</h1>
                    <Image src="/icons/Line_right.png" alt="line" width={16} height={2} />
                </div>

                <h1 className="text-[42px] text-[#333333] font-anton text-left mt-5">
                    CONTACT OUR <span className="text-[#F9373A]">TEAM</span>
                </h1>
                <p className="text-[#696969] text-[16px]">Got Any Questions about the Service or scaling your existing project? Chat to Our Friendly team 24/7 for help.</p>

                {/* Form */}
                <div className="min-h-[460px] w-full mt-8 rounded-xl overflow-hidden">
                    <div className="py-4 h-full flex">
                        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto my-auto">
                            <div className="space-y-[15px]">
                                {/* First Name */}
                                <label htmlFor="name" className="block text-[16px] font-medium text-[#353639]">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full p-4 rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                />

                                {/* Email */}
                                <label htmlFor="email" className="block text-[16px] font-medium text-[#353639]">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                />

                                {/* Phone Number */}
                                <label htmlFor="phone" className="block text-[16px] font-medium text-[#353639]">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={form.number}
                                    onChange={(e) => setForm({ ...form, number: e.target.value })}
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Your Phone"
                                    className="w-full p-4 rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                />

                                {/* Message */}
                                <label htmlFor="message" className="block text-[16px] font-medium text-[#353639]">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={form.message}
                                    onChange={(e) =>
                                        setForm({ ...form, message: (e.target as HTMLTextAreaElement).value })
                                    }
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full p-4 rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                />

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full h-[60px] text-white font-medium text-[18px] rounded-[10px] bg-gradient-to-r from-[#9F1520] to-[#600C13] hover:opacity-90 transition-opacity"
                                >
                                    Submit Now
                                </button>

                                {success && (
                                    <div className="text-green-500 mt-2">Message sent successfully!</div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Map Image */}
                <div className="relative mt-8 w-full h-[331px] md:w-[331px] mb-[48px]">
                    <Image src="/images/map.png" alt="map" fill className="object-cover" />
                </div>
            </div>
        </div>
    );
}
