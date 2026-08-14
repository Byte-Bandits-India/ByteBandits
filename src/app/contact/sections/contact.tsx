"use client";

import React, { useState } from "react";
import Image from "next/image";
import { contactFormSchema, ContactFormData } from "@/lib/validations/contact";
import { AlertCircle, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    website: "",
    message: "",
    consent: false,
    source: "",
    _gotcha: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Validate single field
  const validateField = (name: keyof ContactFormData, value: unknown) => {
    const fieldSchema = contactFormSchema.shape[name];
    if (!fieldSchema) return;

    const result = fieldSchema.safeParse(value);
    if (!result.success) {
      setErrors((prev) => ({ ...prev, [name]: result.error.issues[0]?.message || "Invalid value" }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, form[field]);
  };

  const handleChange = (field: keyof ContactFormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      validateField(field, value);
    }
  };

  // Format phone number to strictly 10 numeric digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    handleChange("phone", digitsOnly);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    // Validate entire form with Zod
    const validation = contactFormSchema.safeParse(form);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        const path = err.path[0] as string;
        if (path && !fieldErrors[path]) {
          fieldErrors[path] = err.message;
        }
      });
      setErrors(fieldErrors);
      // Mark all required fields as touched
      setTouched({
        name: true,
        email: true,
        phone: true,
        website: true,
        message: true,
        source: true,
        consent: true,
      });
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          website: "",
          message: "",
          consent: false,
          source: "",
          _gotcha: "",
        });
        setTouched({});
        setErrors({});
        setTimeout(() => setSuccess(false), 7000);
      } else {
        setServerError(data.error || "Failed to send message. Please check your details and try again.");
      }
    } catch {
      setServerError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen pb-24 pt-[80px]">
      
      {/* 1. HERO BANNER HEADER */}
      <div className="w-full h-[320px] md:h-[400px] overflow-hidden relative rounded-b-[40px] md:rounded-b-[56px]">
        <Image
          src="/images/contact-us.png"
          alt="Contact Us Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65 z-10" />

        <div className="relative z-20 w-full h-full max-w-[1420px] mx-auto px-6 flex flex-col justify-center items-start text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-[50px] font-bold tracking-tight font-inter leading-none mb-4">
            Reach Out to Us
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
                {"If you have a project in mind, a workflow problem, or just want to explore what's possible? Start here."}
              </p>
            </div>

            <div className="flex flex-col gap-4 text-gray-800 font-semibold text-sm md:text-base">
              <div className="flex items-center gap-3">
                <span>+91 90804 03951</span>
              </div>
              <div className="flex items-center gap-3">
                <a href="mailto:support@thebytebandits.com" className="hover:underline text-[#111111] hover:text-[#C62727] transition-colors">
                  support@thebytebandits.com
                </a>
              </div>
              <div className="flex items-start gap-3 max-w-sm leading-relaxed text-gray-600 text-sm">
                <span>
                  Krishna Nagar Periyar Rd, Ramapuram, Indira Nagar, Manappakkam, Chennai, Tamil Nadu 600125
                </span>
              </div>
            </div>

            {/* Branded Social Icons */}
            <div className="flex items-center gap-3 mt-4">
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
              <a
                href="mailto:support@thebytebandits.com"
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
            <div className="bg-white rounded-[32px] shadow-2xl shadow-black/5 border border-gray-100 p-6 md:p-9 flex flex-col gap-6 text-left w-full max-w-[580px] lg:ml-auto transition-all">
              
              {/* Form Header */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[#111111] text-2xl font-bold font-inter tracking-tight">
                    Send us a message
                  </h3>
                  <Sparkles className="w-5 h-5 text-[#C62727]" />
                </div>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-normal">
                  {"Get in touch with us for any inquiries or support. We're here to assist you and ensure your experience is exceptional."}
                </p>
              </div>

              {/* Server-level Notifications */}
              {success && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-medium animate-in fade-in slide-in-from-top duration-300">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-xs text-green-700 mt-0.5">We have received your message and will respond shortly.</p>
                  </div>
                </div>
              )}

              {serverError && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium animate-in fade-in slide-in-from-top duration-300">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <div>
                    <p className="font-semibold">Unable to submit form</p>
                    <p className="text-xs text-red-700 mt-0.5">{serverError}</p>
                  </div>
                </div>
              )}

              {/* Form inputs */}
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                
                {/* Honeypot field (hidden from humans, traps bots) */}
                <input
                  type="text"
                  name="_gotcha"
                  value={form._gotcha || ""}
                  onChange={(e) => handleChange("_gotcha", e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="sr-only"
                  aria-hidden="true"
                />

                {/* Row: Name and Phone */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  
                  {/* Your Name */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label htmlFor="name" className="text-sm font-semibold text-[#111111] font-inter text-left">
                      Your Name <span className="text-[#FF3B30]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Alex Morgan"
                      value={form.name}
                      onBlur={() => handleBlur("name")}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full py-2.5 px-3.5 rounded-xl text-sm text-gray-900 bg-white border transition-all duration-200 outline-none ${
                        touched.name && errors.name
                          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 bg-red-50/10"
                          : "border-gray-200 hover:border-gray-300 focus:border-[#C62727] focus:ring-2 focus:ring-[#C62727]/15"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <span className="text-xs font-medium text-red-500 flex items-center gap-1 mt-0.5 animate-in fade-in">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone Input with Country Flag UI */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label htmlFor="phone" className="text-sm font-semibold text-[#111111] font-inter text-left">
                      Phone (optional)
                    </label>
                    <div
                      className={`flex items-center w-full rounded-xl border bg-white transition-all duration-200 overflow-hidden ${
                        touched.phone && errors.phone
                          ? "border-red-500 ring-2 ring-red-500/20 bg-red-50/10"
                          : "border-gray-200 hover:border-gray-300 focus-within:border-[#C62727] focus-within:ring-2 focus-within:ring-[#C62727]/15"
                      }`}
                    >
                      {/* Flag Section with Vertical Divider and Country Code */}
                      <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50/80 border-r border-gray-200 select-none shrink-0">
                        {/* Indian Flag SVG Badge */}
                        <svg
                          className="w-5 h-3.5 rounded-[2px] shadow-sm overflow-hidden"
                          viewBox="0 0 640 480"
                        >
                          <path fill="#f93" d="M0 0h640v160H0z" />
                          <path fill="#fff" d="M0 160h640v160H0z" />
                          <path fill="#128807" d="M0 320h640v160H0z" />
                          <g transform="matrix(3.2 0 0 3.2 320 240)">
                            <circle r="20" fill="#008" />
                            <circle r="17.5" fill="#fff" />
                            <circle r="3.5" fill="#008" />
                            <g id="d">
                              <g id="c">
                                <g id="b">
                                  <g id="a">
                                    <path
                                      fill="#008"
                                      d="M0-17.5l.6 5.3L0-6l-.6-6.2z"
                                    />
                                    <circle r=".8" fill="#008" transform="rotate(7.5) translate(0 -16)" />
                                  </g>
                                  <use href="#a" transform="scale(-1 1)" />
                                </g>
                                <use href="#b" transform="rotate(15)" />
                              </g>
                              <use href="#c" transform="rotate(30)" />
                            </g>
                            <use href="#d" transform="rotate(60)" />
                            <use href="#d" transform="rotate(120)" />
                          </g>
                        </svg>
                        <span className="text-xs font-semibold text-gray-700 font-inter">+91</span>
                      </div>

                      {/* 10-Digit Numeric Phone Input */}
                      <input
                        type="tel"
                        id="phone"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="6381018516"
                        value={form.phone || ""}
                        onBlur={() => handleBlur("phone")}
                        onChange={handlePhoneChange}
                        className="w-full py-2.5 px-3.5 text-sm text-gray-900 bg-transparent outline-none placeholder:text-gray-400 font-medium tracking-wide"
                      />
                    </div>

                    {touched.phone && errors.phone && (
                      <span className="text-xs font-medium text-red-500 flex items-center gap-1 mt-0.5 animate-in fade-in">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[#111111] font-inter">
                    Your Email <span className="text-[#FF3B30]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onBlur={() => handleBlur("email")}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full py-2.5 px-3.5 rounded-xl text-sm text-gray-900 bg-white border transition-all duration-200 outline-none ${
                      touched.email && errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 bg-red-50/10"
                        : "border-gray-200 hover:border-gray-300 focus:border-[#C62727] focus:ring-2 focus:ring-[#C62727]/15"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <span className="text-xs font-medium text-red-500 flex items-center gap-1 mt-0.5 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Website optional */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="website" className="text-sm font-semibold text-[#111111] font-inter">
                    Website (optional)
                  </label>
                  <input
                    type="text"
                    id="website"
                    placeholder="https://example.com"
                    value={form.website || ""}
                    onBlur={() => handleBlur("website")}
                    onChange={(e) => handleChange("website", e.target.value)}
                    className={`w-full py-2.5 px-3.5 rounded-xl text-sm text-gray-900 bg-white border transition-all duration-200 outline-none ${
                      touched.website && errors.website
                        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 bg-red-50/10"
                        : "border-gray-200 hover:border-gray-300 focus:border-[#C62727] focus:ring-2 focus:ring-[#C62727]/15"
                    }`}
                  />
                  {touched.website && errors.website && (
                    <span className="text-xs font-medium text-red-500 flex items-center gap-1 mt-0.5 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.website}
                    </span>
                  )}
                </div>

                {/* Message text */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="message" className="text-sm font-semibold text-[#111111] font-inter">
                      Message <span className="text-[#FF3B30]">*</span>
                    </label>
                    <span className="text-[11px] text-gray-400 font-medium">
                      {form.message.length}/2500
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project requirements, scope, or questions..."
                    value={form.message}
                    onBlur={() => handleBlur("message")}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`w-full py-2.5 px-3.5 rounded-xl text-sm text-gray-900 bg-white border transition-all duration-200 outline-none resize-none ${
                      touched.message && errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 bg-red-50/10"
                        : "border-gray-200 hover:border-gray-300 focus:border-[#C62727] focus:ring-2 focus:ring-[#C62727]/15"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <span className="text-xs font-medium text-red-500 flex items-center gap-1 mt-0.5 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* GDPR Agreement */}
                <div className="flex flex-col gap-1 mt-1">
                  <span className="text-sm font-bold text-[#111111] font-inter">
                    GDPR Agreement <span className="text-[#FF3B30]">*</span>
                  </span>
                  <div className="flex items-start gap-3 text-left">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={form.consent}
                      onBlur={() => handleBlur("consent")}
                      onChange={(e) => handleChange("consent", e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#C62727] focus:ring-[#C62727] cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed cursor-pointer select-none">
                      I consent to having this website store my submitted information so they can respond to my inquiry.
                    </label>
                  </div>
                  {touched.consent && errors.consent && (
                    <span className="text-xs font-medium text-red-500 flex items-center gap-1 mt-0.5 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.consent}
                    </span>
                  )}
                </div>

                {/* Referral Source radio list */}
                <div className="flex flex-col gap-2 mt-2 text-left">
                  <span className="text-sm font-bold text-[#111111] font-inter">
                    How did you come to know about us <span className="text-[#FF3B30]">*</span>
                  </span>
                  <div className="flex flex-wrap gap-4 md:gap-5 text-sm text-gray-700">
                    {["Google ads", "Linkdin", "Email", "Instagram", "Others"].map((src) => (
                      <label key={src} className="flex items-center gap-2 cursor-pointer font-medium hover:text-[#C62727] transition-colors select-none">
                        <input
                          type="radio"
                          name="source"
                          value={src}
                          checked={form.source === src}
                          onChange={(e) => handleChange("source", e.target.value)}
                          className="w-4 h-4 text-[#C62727] focus:ring-[#C62727] border-gray-300 cursor-pointer"
                        />
                        {src}
                      </label>
                    ))}
                  </div>
                  {touched.source && errors.source && (
                    <span className="text-xs font-medium text-red-500 flex items-center gap-1 mt-0.5 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.source}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C62727] hover:bg-[#A31621] text-white py-3.5 rounded-xl font-bold text-center mt-3 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
