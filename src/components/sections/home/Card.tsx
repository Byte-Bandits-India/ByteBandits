"use client";

import { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeUp from "@/components/ui/FadeUp";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ServiceCard {
    title: string;
    desc: string;
    tags: string[];
    link: string;
}

export default function Card() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const carouselTrackRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    const cards: ServiceCard[] = [
        {
            title: "Artificial Intelligence",
            desc: "Harness the power of AI to automate, optimize, and innovate. We build intelligent solutions that analyze data, predict outcomes, and streamline operations turning your business challenges into competitive advantages. It's not just about technology; it's about creating a smarter, more efficient future for your brand.",
            tags: ["MFA", "Auth0", "DLP"],
            link: "/services/data-security",
        },
        {
            title: "Branding & Social Media",
            desc: "Craft a brand that commands attention and a social presence that builds community. We develop memorable logos, compelling visuals, and a cohesive identity, then bring it to life with strategic social content that engages, grows your audience, and drives real results. Your story, amplified.",
            tags: ["ONPAGE", "LOCAL", "OFF PAGE"],
            link: "/services/seo-optimization",
        },
        {
            title: "Web Development",
            desc: "Get a fast, modern, and mobile-friendly website built to impress and perform. Clean design, smooth user experience, and everything tailored to your brand. Your site won't just look great—it'll work hard to support your business. Everything is built to scale with you.",
            tags: ["REACT", "SQL", "NODE"],
            link: "/services/web-development",
        },
        {
            title: "Mobile Development",
            desc: "Reach your customers in their pockets with a beautiful, intuitive, and powerful mobile app. We build native and cross-platform apps that deliver a flawless experience, drive engagement, and solve real-world problems. Your vision, perfected for every screen.",
            tags: ["UI/UX", "NATIVE", "STUDIO"],
            link: "/services/mobile-development",
        },
        {
            title: "Cloud & DevOps",
            desc: "Unite your development and operations into a single, high-velocity force. We build automated CI/CD pipelines on robust, scalable cloud infrastructure. This seamless synergy means more reliable releases, efficient resource use, and a technology foundation that actively drives your business growth.",
            tags: ["AWS", "AZURE", "GCP"],
            link: "/services/cloud-scaling",
        },
        {
            title: "Digital Marketing",
            desc: "Turn clicks into customers and browsers into buyers. We deploy targeted strategies across SEO, PPC, and social advertising to increase your visibility, generate qualified leads, and maximize your return on investment. Data-driven campaigns designed for growth.",
            tags: ["AWS", "AZURE", "GCP"],
            link: "/services/cloud-scaling",
        },
    ];

    // Initialize GSAP ScrollTrigger for horizontal scrolling
    useEffect(() => {
        if (!sectionRef.current || !carouselTrackRef.current) return;

        const sectionPin = carouselTrackRef.current;
        const triggerElement = sectionRef.current;

        // Calculate the total horizontal scroll distance
        const cardWidth = 420;
        const gap = 30;
        const totalCardsWidth = cards.length * (cardWidth + gap) - gap;
        const viewportWidth = window.innerWidth;

        // Calculate distance to center the last card
        // We want the last card to be perfectly centered
        const lastCardCenterPosition = totalCardsWidth - viewportWidth + (viewportWidth - cardWidth) / 2;

        // Add extra space to ensure the last card is fully centered
        const horizontalScrollDistance = lastCardCenterPosition + (viewportWidth - cardWidth) / 2;

        // Create the horizontal scroll animation
        const containerAnimation = gsap.to(sectionPin, {
            x: () => -horizontalScrollDistance + "px",
            ease: "none",
            scrollTrigger: {
                trigger: triggerElement,
                start: "top top",
                end: () => `+=${horizontalScrollDistance}`,
                pin: true,
                scrub: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false,
            },
        });

        // Store it in ref with proper type
        animationRef.current = containerAnimation;

        // Add active classes to cards as they come into view
        const cardElements = sectionPin.querySelectorAll('.solution-card');

        cardElements.forEach((card) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "left center",
                    end: "right center",
                    containerAnimation: containerAnimation,
                    toggleClass: {
                        targets: card,
                        className: 'active'
                    },
                    onEnter: () => {
                        card.classList.add('active');
                    },
                    onLeave: () => {
                        card.classList.remove('active');
                    },
                    onEnterBack: () => {
                        card.classList.add('active');
                    },
                    onLeaveBack: () => {
                        card.classList.remove('active');
                    }
                }
            });
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            animationRef.current?.kill();
        };
    }, [cards.length]);

    return (
        <>
            <section
                ref={sectionRef}
                className="w-full py-16 px-6 text-[#333333] mx-auto"
                id="service-section"
            >
                {/* Header + Controls */}
                <div className="max-w-[1420px] mx-auto">
                    <div className="mt-[42px]">
                        <p
                            className="section-label text-xs lg:text-[20px] sm:text-sm uppercase tracking-widest text-[#818181] mb-[32px] inter"
                        >
                            Services
                        </p>
                        <h2
                            className="section-title text-[30px] sm:text-[40px] md:text-[60px] uppercase leading-tight mb-4 text-[#333333] font-[anton]"
                        >
                            EXPLORE OUR <span className="text-[#F9373A]">EXPERTISE</span>
                        </h2>
                    </div>
                </div>

                {/* Carousel */}
                <div className="solutions-carousel relative">
                    <div
                        ref={carouselRef}
                        className="carousel-wrapper overflow-x-hidden"
                    >
                        <div
                            ref={carouselTrackRef}
                            className="carousel-track h-[500px] flex gap-8"
                            style={{
                                // Add padding to ensure the last card can be centered
                                paddingLeft: `calc(50vw - 185px)`, // Center first card initially
                                paddingRight: `calc(50vw - 185px)` // Allow space to center last card
                            }}
                        >
                            {cards.map((item, index) => (
                                <FadeUp
                                    key={index}
                                    delay={index * 150}
                                    distance={50}
                                    duration={700}
                                    className="solution-card relative box bg-white px-10 py-5 rounded-lg w-[370px] h-[400px] min-w-[340px] flex-shrink-0 flex flex-col justify-between shadow-xl transition-all duration-300"
                                >
                                    {/* Top-right number */}
                                    <span className="absolute top-5 right-6 font-anonymous text-[38px] font-bold text-[#E6E6E6] leading-none select-none">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Title & Description */}
                                    <div>
                                        <h3 className="card-title text-[18px] sm:text-[25px] font-[anton] text-[#333333] uppercase">
                                            {item.title}
                                        </h3>
                                        <p className="card-desc text-[12px] sm:text-[14px] leading-[21px] text-[#333333] my-5 inter">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="card-tags flex-1 flex flex-col justify-end gap-6">
                                        <div className="tags hidden gap-3 text-[13px] justify-center font-bold text-black tracking-[1px]">
                                            {item.tags.map((tag, idx) => (
                                                <span key={idx} className="tag relative flex items-center gap-1">
                                                    {tag}
                                                    {idx < item.tags.length - 1 && (
                                                        <span className="dot mx-1 text-[#BA4D4D] text-[20px] leading-[2px]">•</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Footer */}
                                        <div className="pt-1">
                                            <div className="card-footer flex items-center mb-2">
                                                <div className="kine-wrapper flex w-full items-center">
                                                    <div className="red-line h-[2px] w-[20px] bg-[#BA4D4D] mr-1"></div>
                                                    <div className="gray-line h-[2px] flex-1 bg-[#D3D3D3]"></div>
                                                </div>
                                            </div>

                                            <div className="learn-more mt-[45px] flex items-center gap-3">
                                                <span className="text-[#BA4D4D] font-bold text-[14px] truncate">Learn More</span>
                                                <Link href={item.link} className="flex-shrink-0">
                                                    <div className="bg-[#BA4D4D] w-8 h-8 flex items-center justify-center rounded-full">
                                                        <FaArrowRight className="text-white" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}