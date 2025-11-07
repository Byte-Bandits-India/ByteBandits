"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

export default function ServicesSection() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const carouselTrackRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    const cards: ServiceCard[] = [
        {
            title: "Data Security",
            desc: "Secure your data with our end-to-end data protection services — encryption, monitoring, and compliance all in one place. Our solutions are designed to safeguard your business against breaches, data loss, and evolving cyber threats.",
            tags: ["MFA", "Auth0", "DLP"],
            link: "/services/data-security",
        },
        {
            title: "SEO & Optimization",
            desc: "Get higher rankings, more visibility, and organic traffic that actually converts. Your site gets fully optimized—keywords, structure, speed, and more. Show up when your audience is searching. This is how you grow without paying for every click.",
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
            desc: "Launch a custom mobile app that looks amazing and runs flawlessly on iOS and Android. Whether it's for customers or internal use, everything is designed for usability and performance. Your idea turns into a powerful app. Built smart, built to last.",
            tags: ["UI/UX", "NATIVE", "STUDIO"],
            link: "/services/mobile-development",
        },
        {
            title: "Cloud Scaling",
            desc: "Scale your app with serverless architecture and intelligent cost optimization strategies tailored for modern businesses.",
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
        const cardWidth = 370;
        const gap = 30;
        const totalCardsWidth = cards.length * (cardWidth + gap) - gap;
        const viewportWidth = window.innerWidth;

        // Calculate distance to center the last card
        const lastCardCenterPosition = totalCardsWidth - viewportWidth + (viewportWidth - cardWidth) / 2;
        const horizontalScrollDistance = lastCardCenterPosition;

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
                markers: false, // Set to true for debugging
            }
        });

        // Add active classes to cards as they come into view
        const cardElements = sectionPin.querySelectorAll('.solution-card');

        cardElements.forEach((card, index) => {
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
        };
    }, []);

    const handleNext = () => {
        const container = carouselRef.current;
        if (container) {
            const cardWidth = 370;
            const gap = 30;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const newScrollLeft = Math.min(
                container.scrollLeft + cardWidth + gap,
                maxScrollLeft
            );

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    const handlePrev = () => {
        const container = carouselRef.current;
        if (container) {
            const cardWidth = 370;
            const gap = 30;
            const newScrollLeft = Math.max(
                container.scrollLeft - cardWidth - gap,
                0
            );

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    interface ClientLogo {
        src: string;
    }

    const topRow: ClientLogo[] = [
        { src: "/icons/clients/Group 115 2.png" },
        { src: "/icons/clients/image 90.png" },
        { src: "/icons/clients/Mask group-7.png" },
    ];

    const bottomRow: ClientLogo[] = [
        { src: "/icons/clients/Mask group-8.png" },
        { src: "/icons/clients/Mask group-9.png" },
        { src: "/icons/clients/Mask group-10.png" },
    ];

    const getAltFromSrc = (src: string) => {
        const file = src.split('/').pop() || '';
        const base = file.replace(/\.[^/.]+$/, '');
        const cleaned = base.replace(/[\-_]+/g, ' ').replace(/\s+/g, ' ').trim();
        return cleaned || 'Client logo';
    };

    // Add CSS animation for infinite marquee
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes scrollLeft {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            @keyframes scrollRight {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0); }
            }
            .animate-scrollLeft {
                animation: scrollLeft 30s linear infinite;
                animation-play-state: ${isPaused ? 'paused' : 'running'};
            }
            .animate-scrollRight {
                animation: scrollRight 30s linear infinite;
                animation-play-state: ${isPaused ? 'paused' : 'running'};
            }
            .animate-scrollLeft:hover, .animate-scrollRight:hover {
                animation-play-state: paused;
            }
            
            .carousel-wrapper::-webkit-scrollbar {
                display: none;
            }
            .carousel-wrapper {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
            
            /* Active card styles */
            .solution-card {
                transition: all 0.3s ease;
            }
            .solution-card.active {
                transform: scale(1.05);
                box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            }

            /* Ensure proper horizontal scrolling */
            .solutions-carousel {
                overflow: hidden;
            }
            
            .carousel-track {
                will-change: transform;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, [isPaused]);

    return (
        <>
            <section>
                <div>
                    <div className="flex items-center justify-center w-full mt-[70px] md:mt-[110px]">
                        <Image src="/icons/Line_left.png" alt="line" width={16} height={2} />
                        <h1 className="text-[#8C8C8C] text-[12px] lg:text-[24px] uppercase px-2 whitespace-nowrap text-center leading-none">
                            Clients we worked
                        </h1>
                        <Image src="/icons/Line_right.png" alt="line" width={16} height={2} />
                    </div>

                    <h1 className="text-[#333333] text-[26px] lg:text-[56px] font-semibold text-center my-8">
                        My Awesome Clients
                    </h1>

                    {/* Logo Marquee */}
                    <div
                        className="w-screen relative mb-[48px] bg-[#A31621] lg:h-[406px] lg:flex lg:items-center"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="max-w-[1500px] w-full overflow-hidden py-6 lg:py-0 mx-auto relative">
                            <div className="flex flex-col gap-[64px]">
                                {/* Top Row - Infinite Scroll */}
                                <div className="flex overflow-hidden">
                                    <div className="flex animate-scrollLeft w-max flex-shrink-0 whitespace-nowrap will-change-transform">
                                        {[...topRow, ...topRow, ...topRow, ...topRow].map((logo, i) => (
                                            <div key={`top-${i}`} className="flex flex-col items-center mx-4">
                                                <Image
                                                    src={logo.src}
                                                    alt={getAltFromSrc(logo.src)}
                                                    height={30}
                                                    width={135}
                                                    className="h-14 md:h-16 w-auto grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                                    priority={i < 6}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Row - Infinite Scroll */}
                                <div className="flex overflow-hidden">
                                    <div className="flex animate-scrollRight w-max flex-shrink-0 whitespace-nowrap will-change-transform">
                                        {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map((logo, i) => (
                                            <div key={`bottom-${i}`} className="flex flex-col items-center mx-4">
                                                <Image
                                                    src={logo.src}
                                                    alt={getAltFromSrc(logo.src)}
                                                    width={135}
                                                    height={30}
                                                    className="h-14 md:h-16 w-auto grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                                    priority={i < 6}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                ref={sectionRef}
                className="w-full py-16 px-5 sm:px-10 lg:px-0 text-[#333]"
                id="service-section"
            >
                {/* Header + Controls */}
                <div className="max-w-[1420px] mx-auto">
                    <div className="mt-[42px] solutions-header">
                        <p
                            className="section-label text-xs lg:text-[20px] sm:text-sm uppercase tracking-widest text-[#818181] mb-[32px] inter"
                        >
                            Services
                        </p>
                        <h2
                            className="section-title text-[30px] sm:text-[40px] md:text-[60px] uppercase leading-tight mb-4 text-[#333] font-[anton]"
                        >
                            EXPLORE OUR <span className="text-[#F9373A]">EXPERTISE</span>
                        </h2>
                    </div>

                    <div className="solutions-nav flex justify-end items-center mb-8">
                        <div className="nav-controls flex items-center gap-4 text-xs sm:text-sm text-gray-500 uppercase font-semibold cursor-pointer select-none">
                            <span
                                onClick={handlePrev}
                                className="flex items-center gap-1 hover:text-black transition-colors duration-200"
                            >
                                ← Prev
                            </span>
                            <span
                                onClick={handleNext}
                                className="flex items-center gap-1 hover:text-black transition-colors duration-200"
                            >
                                Next →
                            </span>
                        </div>
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
                            className="carousel-track h-[500px] xl:pl-72 flex gap-8"
                        >
                            {cards.map((item, i) => (
                                <div
                                    key={i}
                                    className="solution-card relative box bg-white px-10 py-5 rounded-lg w-[370px] h-[400px] min-w-[340px] flex-shrink-0 flex flex-col justify-between shadow-xl transition-all duration-300"
                                >
                                    {/* Top-right number */}
                                    <span className="absolute top-5 right-6 font-anonymous text-[38px] font-bold text-[#E6E6E6] leading-none select-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    {/* Title & Description */}
                                    <div>
                                        <h3 className="card-title text-[18px] sm:text-[25px] font-[anton] text-black uppercase">
                                            {item.title}
                                        </h3>
                                        <p className="card-desc text-[12px] sm:text-[14px] text-[#000000] my-5 inter">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="card-tags flex-1 flex flex-col justify-end gap-6">
                                        <div className="tags flex gap-3 text-[13px] justify-center font-bold text-black tracking-[1px]">
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
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}