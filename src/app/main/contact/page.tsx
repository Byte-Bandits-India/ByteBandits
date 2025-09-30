"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";


export default function Home() {
    const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });
    const [success, setSuccess] = useState(false);

    // Reference to section (so animations trigger when hero enters/leaves viewport)
    const scrollRef = useRef<HTMLDivElement | null>(null);

    // Track scroll progress relative to the hero section
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"],
    });

    // Scale motion value (larger → smaller while scrolling)
    const scale = useTransform(scrollYProgress, [0, 0], [1.5, 1.1]);

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
        <div ref={scrollRef} className="relative overflow-x-hidden bg-[#FFFFFF] pt-[80px] md:pt-[100px]">
            <div className="shapes px-6">
                {/* Scroll-animated shapes */}
                <motion.img
                    src="/images/gold.webp"
                    alt="Gold Shape"
                    style={{ scale, rotate: -90 }}
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.2 }}
                    className="absolute -left-[100px] top-[10px] w-[200px] sm:w-[200px] md:w-[400px] z-10"
                />

                <motion.img
                    src="/images/red.webp"
                    alt="Green Shape"
                    style={{ scale, rotate: -60 }}
                    animate={{ y: [0, -36, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.4 }}
                    className="absolute -right-[80px] top-[8%] w-[160px] sm:w-[150px] md:w-[300px] z-10"
                />
            </div>
            <div className="mt-[80px] w-full max-w-6xl mx-auto px-6">
                {/* Header Line */}
                <div className="flex items-center justify-center w-full">
                    <Image src="/icons/Line_left.png" alt="line" width={16} height={2} />
                    <h1 className="text-[#8C8C8C] text-[10px] px-2 whitespace-nowrap text-center font-semibold leading-none">
                        CONTACT WITH US
                    </h1>
                    <Image src="/icons/Line_right.png" alt="line" width={16} height={2} />
                </div>

                <div className="text-center text-[#333333] text-[14px] mt-[24px]">
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
                <div
                    className="mt-8 relative w-full md:w-[354px] h-[530px] rounded-xl"
                    style={{ boxShadow: '5px 5px 21px rgba(0,0,0,0.25)' }}
                >
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
                            <div>
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
                                    className="w-full p-4 mt-[10px] rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                />

                                {/* Email */}
                                <label htmlFor="email" className="block text-[16px] font-medium text-[#353639] mt-[10px]">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 mt-[10px] rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                />

                                {/* Phone Number */}
                                <label htmlFor="phone" className="block text-[16px] font-medium text-[#353639] mt-[10px]">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={form.number}
                                    onChange={(e) => setForm({ ...form, number: e.target.value })}
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Your Phone"
                                    className="w-full p-4 mt-[10px] rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                />

                                {/* Message */}
                                <label htmlFor="message" className="block text-[16px] font-medium text-[#353639] mt-[10px]">
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
                                    className="w-full p-4 mt-[10px] rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                />

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full h-[60px] text-white font-medium text-[18px] rounded-[10px] bg-gradient-to-r from-[#9F1520] to-[#600C13] hover:opacity-90 transition-opacity mt-[10px]"
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
            </div>
            {/* Map Image */}
            <div className="relative mt-8 w-full h-[331px] md:w-[331px] mb-[48px]">
                <Image src="/images/map.png" alt="map" fill className="object-cover" />
            </div>
        </div>
    );
}
