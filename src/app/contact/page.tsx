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
        <div ref={scrollRef} className="relative overflow-x-hidden bg-[#F2F2F0] pt-[80px] md:py-[100px]">
            <div className="shapes px-6">
                {/* Scroll-animated shapes */}
                <motion.img
                    src="/images/gold.webp"
                    alt="Gold Shape"
                    style={{ scale, rotate: -90 }}
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.2 }}
                    className="absolute -left-[100px] top-[10px]  w-[200px] sm:w-[200px] md:-left-[30%] md:w-[400px] lg:-left-[24%] xl:-left-[20%] xl:-top-[10%] xl:w-[600px] z-10"
                />

                <motion.img
                    src="/images/red.webp"
                    alt="Green Shape"
                    style={{ scale, rotate: -60 }}
                    animate={{ y: [0, -36, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.4 }}
                    className="absolute -right-[80px] top-[6%] w-[160px] sm:w-[150px] md:-right-[18%] md:w-[300px] lg:-right-[14%] xl:-right-[14%] xl:w-[450px] z-10"
                />

            </div>
            <div className="mt-[100px] w-full max-w-[1440px] mx-auto px-6">
                {/* Header Line */}
                <div className="flex items-center justify-center w-full">
                    <Image src="/icons/Line_left.png" alt="line" width={16} height={2} />
                    <h1 className="text-[#8C8C8C] text-[10px] md:text-[16px] lg:text-[20px] px-2 whitespace-nowrap text-center font-semibold leading-none">
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
                 text-[50px] sm:text-[clamp(40px,7vw,142px)] leading-[1.1]
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


                    <div className="mt-[48px] lg:mt-[80px] flex flex-col items-center justify-center mx-auto lg:flex-row md:max-w-[600px] lg:max-w-full lg:flex md:gap-5 space-y-5 md:space-y-0">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#F4F6F8] w-full lg:w-[32%]
                 rounded-xl flex items-center justify-start px-5 py-4 lg:py-0
                 h-[100px] md:h-[130px] lg:h-[170px] xl:h-[180px]
                 transition-all duration-300 shadow-md"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    width={40}
                                    height={40}
                                    className="mr-6 w-[40px] h-[40px] md:h-[50px] md:w-[50px] lg:h-[40px] lg:w-[40px] xl:h-[60px] xl:w-[60px] object-contain flex-shrink-0"
                                />
                                <h1 className={`text-[#333333] ${item.textSize} text-left md:text-[20px] lg:text-[18px] xl:text-[20px] leading-snug`}>
                                    {item.text}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-[minmax(auto,484px)_1fr] lg:gap-12 lg:mt-[100px]">
                    {/* Left Column - Image */}
                    <div className="w-full max-w-[484px] md:max-w-[600px] mx-auto lg:mx-0">
                        <div
                            className="
      mt-8 relative w-full 
      h-[530px] md:h-[725px] lg:h-full 
      max-h-[725px] rounded-xl 
      overflow-hidden
    "
                            style={{ boxShadow: '5px 5px 21px rgba(0,0,0,0.25)' }}
                        >
                            <div className="relative w-full h-full min-h-[530px] md:min-h-[530px] lg:min-h-0">
                                <Image
                                    src="/images/contact.webp"
                                    alt="women"
                                    fill
                                    className="rounded-xl object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Footer Line (mobile only) */}
                        <div className="flex items-center justify-center w-full mt-8 lg:hidden">
                            <Image src="/icons/Line_left.png" alt="line" width={16} height={2} />
                            <h1 className="text-[#8C8C8C] text-[12px] uppercase px-2 whitespace-nowrap text-center leading-none">
                                {"Let's Talk"}
                            </h1>
                            <Image src="/icons/Line_right.png" alt="line" width={16} height={2} />
                        </div>
                    </div>



                    {/* Right Column - Content and Form */}
                    <div className="w-full flex flex-col justify-between lg:h-full">
                        {/* Header Line (desktop only) */}
                        <div className="hidden lg:flex items-center justify-center w-full mt-8">
                            <Image src="/icons/Line_left.png" alt="line" width={16} height={2} />
                            <h1 className="text-[#8C8C8C] lg:text-[20px] uppercase px-2 whitespace-nowrap text-center leading-none">
                                {"Let's Talk"}
                            </h1>
                            <Image src="/icons/Line_right.png" alt="line" width={16} height={2} />
                        </div>

                        <div className="lg:mt-8 md:max-w-[600px] mx-auto lg:max-w-full">
                            <h1 className="text-[42px] sm:text-[clamp(40px,7vw,60px)] leading-[1.1] text-[#333333] font-anton text-left mt-5 lg:mt-0">
                                CONTACT OUR <span className="text-[#F9373A]">TEAM</span>
                            </h1>
                            <p className="text-[#696969] text-[16px] lg:text-[18px] lg:mt-6">
                                Got Any Questions about the Service or scaling your existing project? Chat to Our Friendly team 24/7 for help.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="min-h-[460px] w-full mt-8 rounded-xl overflow-hidden flex-1">
                            <div className="py-4 h-full flex">
                                <form
                                    onSubmit={handleSubmit}
                                    className="w-full max-w-md md:max-w-[600px] mx-auto my-auto lg:mx-0 lg:max-w-none"
                                >
                                    {/* Name and Phone Number Row */}
                                    <div className="lg:flex lg:gap-x-4">
                                        {/* First Name */}
                                        <div className="lg:flex-1">
                                            <label htmlFor="name" className="block text-[16px] font-medium text-[#333333]">
                                                First Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                type="text"
                                                id="name"
                                                name="First Name"
                                                placeholder="First Name"
                                                className="w-full p-4 mt-[10px] rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                            />
                                        </div>

                                        {/* Phone Number */}
                                        <div className="lg:flex-1 mt-[10px] lg:mt-0">
                                            <label htmlFor="phone" className="block text-[16px] font-medium text-[#333333]">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                value={form.number}
                                                onChange={(e) => setForm({ ...form, number: e.target.value })}
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="0000000000"
                                                className="w-full p-4 mt-[10px] rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                            />
                                        </div>
                                    </div>


                                    {/* Email */}
                                    <label htmlFor="email" className="block text-[16px] font-medium text-[#333333] mt-[10px]">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        className="w-full p-4 mt-[10px] rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                    />

                                    {/* Message */}
                                    <label htmlFor="message" className="block text-[16px] font-medium text-[#333333] mt-[10px]">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: (e.target as HTMLTextAreaElement).value })}
                                        id="message"
                                        name="message"
                                        placeholder="Hi there, I would like to ask about ..."
                                        rows={4}
                                        className="w-full p-4 mt-[10px] rounded-xl text-[18px] text-[#818181] bg-[#F4F6F8] border border-[#D7D7D7] focus:outline-none focus:border-orange-500"
                                    />

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full h-[60px] max-w-[350px] text-white font-medium text-[18px] rounded-[10px] bg-gradient-to-r from-[#9F1520] to-[#600C13] hover:opacity-90 transition-opacity mt-[10px]"
                                    >
                                        Submit Now
                                    </button>

                                    {success && <div className="text-green-500 mt-2">Message sent successfully!</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:max-w-[600px] mx-auto lg:max-w-full flex-col items-start lg:items-center justify-center text-left hidden lg:mt-[100px]">
                    <h2 className="text-[42px] sm:text-[clamp(40px,7vw,60px)] leading-[1.1] text-[#333333] font-anton mt-5 lg:mt-0">Looking for a <br className="hidden md:block lg:hidden" /> technology partner ?</h2>
                    <h3 className="text-[42px] sm:text-[clamp(40px,7vw,60px)] leading-[1.1] 
bg-gradient-to-b from-[#9E1520] to-[#630C13] bg-clip-text text-transparent 
font-anton mt-5 lg:mt-0">
                        Let’s talk.
                    </h3>
                </div>


            </div>
            {/* Map Image */}
            <div className="relative mt-8 w-full h-[331px] md:w-[331px] mb-[48px] md:hidden">
                <Image src="/images/map.png" alt="map" fill className="object-cover" />
            </div>
        </div>
    );
}
