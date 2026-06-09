"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    message: "",
    consent: false,
    source: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSuccess(true);
    setForm({
      name: "",
      phone: "",
      email: "",
      website: "",
      message: "",
      consent: false,
      source: "",
    });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="relative w-full min-h-screen pb-24 pt-[80px]">
      
      {/* 1. HERO BANNER HEADER */}
      <div className="w-full h-[320px] md:h-[400px] overflow-hidden relative rounded-b-[40px] md:rounded-b-[56px]">
        {/* Background Image */}
        <Image
          src="/images/contact-us.png"
          alt="Contact Us Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark opacity overlay */}
        <div className="absolute inset-0 bg-black/65 z-10" />

        {/* Text content inside banner */}
        <div className="relative z-20 w-full h-full max-w-[1420px] mx-auto px-6 flex flex-col justify-center items-start text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-[50px] font-bold tracking-tight font-inter leading-none mb-4">
            Reach Out to US
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-[420px] font-medium">
            {"Need support, have a query, or looking for a collaboration? Let's talk!"}
          </p>
        </div>
      </div>

      {/* 2. OVERLAPPING GRID SECTION */}
      <div className="w-full max-w-[1420px] mx-auto px-6 relative z-20 -mt-20 lg:-mt-[270px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start w-full">
          
          {/* LEFT COLUMN: Contact Details & Info */}
          <div className="w-full lg:col-span-5 order-2 lg:order-1 text-left flex flex-col gap-8 lg:pt-[320px]">
            <div>
              <h2 className="text-[#111111] text-2xl md:text-[28px] font-bold font-inter mb-4">
                {"Let's Build Something."}
              </h2>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium max-w-md">
                {"If u Have a project in mind, a workflow problem, or just want to explore what's possible? Start here."}
              </p>
            </div>

            <div className="flex flex-col gap-4 text-gray-800 font-semibold text-sm md:text-base">
              <div className="flex items-center gap-3">
                <span>+91 90804 03951</span>
              </div>
              <div className="flex items-center gap-3">
                <span>info@bytebandits.in</span>
              </div>
              <div className="flex items-start gap-3 max-w-sm leading-relaxed">
                <span>
                  Krishna Nagar Periyar Rd, Ramapuram, Indira Nagar, Manappakkam, Chennai, Tamil Nadu 600125
                </span>
              </div>
            </div>

            {/* Branded Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Link"
              >
                <Image
                  src="/images/linkedIn.png"
                  alt="LinkedIn"
                  width={45}
                  height={45}
                  className="h-[45px] w-auto object-contain hover:scale-105 transition-transform"
                />
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Link"
              >
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={45}
                  height={45}
                  className="h-[45px] w-auto object-contain hover:scale-105 transition-transform"
                />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Link"
              >
                <Image
                  src="/images/gitHub.png"
                  alt="GitHub"
                  width={51}
                  height={45}
                  className="h-[45px] w-auto object-contain hover:scale-105 transition-transform"
                />
              </a>
              {/* Gmail / Mail */}
              <a
                href="mailto:info@bytebandits.in"
                aria-label="Email Link"
              >
                <Image
                  src="/images/Gmail.png"
                  alt="Gmail"
                  width={60}
                  height={45}
                  className="h-[45px] w-auto object-contain hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form Card */}
          <div className="w-full lg:col-span-7 order-1 lg:order-2 flex lg:justify-end">
            <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col gap-5 text-left w-full max-w-[580px] lg:ml-auto">
              {/* Form Header */}
              <div>
                <h3 className="text-[#111111] text-2xl font-bold font-inter mb-1.5">
                  Send us a message
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                  {"Get in touch with us for any inquiries or support. We're here to assist you and ensure your experience is exceptional."}
                </p>
              </div>

              {/* Form inputs */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Row: Name and Phone */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label htmlFor="name" className="text-sm font-semibold text-[#111111] font-inter text-left">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full py-2.5 px-3.5 rounded-lg text-sm text-gray-900 bg-white border border-gray-300 focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label htmlFor="phone" className="text-sm font-semibold text-[#111111] font-inter text-left">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full py-2.5 px-3.5 rounded-lg text-sm text-gray-900 bg-white border border-gray-300 focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors"
                    />
                  </div>
                </div>

                {/* Email input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[#111111] font-inter">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-lg text-sm text-gray-900 bg-white border border-gray-300 focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors"
                  />
                </div>

                {/* Website optional */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="website" className="text-sm font-semibold text-[#111111] font-inter">
                    Website (optional)
                  </label>
                  <input
                    type="text"
                    id="website"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-lg text-sm text-gray-900 bg-white border border-gray-300 focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors"
                  />
                </div>

                {/* Message text */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-[#111111] font-inter">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-lg text-sm text-gray-900 bg-white border border-gray-300 focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors resize-none"
                  />
                </div>

                {/* GDPR Agreement */}
                <div className="flex flex-col gap-1.5 mt-1">
                  <span className="text-sm font-bold text-[#111111] font-inter">
                    GDPR Agreement
                  </span>
                  <div className="flex items-start gap-3 text-left">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#FF3B30] focus:ring-[#FF3B30]"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600 font-medium leading-relaxed cursor-pointer">
                      I consent to having this website store my submitted information so they can respond to my inquiry.
                    </label>
                  </div>
                </div>

                {/* Referral Source radio list */}
                <div className="flex flex-col gap-2 mt-2 text-left">
                  <span className="text-sm font-bold text-[#111111] font-inter">
                    How did you come to know about us
                  </span>
                  <div className="flex flex-wrap gap-4 md:gap-5 text-sm text-gray-700">
                    {["Google ads", "Linkdin", "Email", "Instagram", "Others"].map((src) => (
                      <label key={src} className="flex items-center gap-2 cursor-pointer font-medium hover:text-[#FF3B30] transition-colors">
                        <input
                          type="radio"
                          name="source"
                          value={src}
                          checked={form.source === src}
                          onChange={(e) => setForm({ ...form, source: e.target.value })}
                          className="w-4 h-4 text-[#FF3B30] focus:ring-[#FF3B30] border-gray-300"
                        />
                        {src}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#FF3B30] hover:bg-[#E03027] text-white py-3 rounded-lg font-bold text-center mt-4 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 hover:scale-[1.01]"
                >
                  Send Message
                </button>

                {success && (
                  <div className="text-green-600 text-sm font-semibold text-center mt-2 animate-bounce">
                    Message sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* 3. GOOGLE MAP SECTION */}
      {/* <div className="w-full max-w-[1420px] mx-auto px-6 mt-16 md:mt-24">
        <div className="w-full overflow-hidden rounded-[32px] border border-gray-100 shadow-lg h-[300px] sm:h-[400px] md:h-[480px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.320708672846!2d80.16865997585755!3d13.015237513918464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260c6aef11a2b%3A0x33401c0956a864bf!2s1%2F509A%2C%20Krishna%20Nagar%20Periyar%20Rd%2C%20Ramapuram%2C%20Indira%20Nagar%2C%20Manappakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600125!5e0!3m2!1sen!2sin!4v1762867197770!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Byte Bandits Office Location"
          ></iframe>
        </div>
      </div> */}

    </div>
  );
}
