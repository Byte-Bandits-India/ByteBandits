"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
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

    const getAltFromSrc = useCallback((src: string) => {
        const file = src.split('/').pop() || '';
        const base = file.replace(/\.[^/.]+$/, '');
        const cleaned = base.replace(/[\-_]+/g, ' ').replace(/\s+/g, ' ').trim();
        return cleaned || 'Client logo';
    }, []);

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
                animation: scrollLeft 20s linear infinite;
            }
            .animate-scrollRight {
                animation: scrollRight 30s linear infinite;
            }
            
            .carousel-wrapper::-webkit-scrollbar {
                display: none;
            }
            .carousel-wrapper {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
            
            .solution-card {
                transition: all 0.3s ease;
            }
            .solution-card.active {
                transform: scale(1.05);
                box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            }

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
    }, []);

    return (
        <>
            <section>
                <div>
                    {/* Logo Marquee */}
                    <div
                        className="w-screen relative mb-[48px] bg-[#A31621] lg:h-[406px] lg:flex lg:items-center"
                    >
                        <div className="max-w-[1500px] w-full overflow-hidden py-6 lg:py-0 mx-auto relative">
                            <div className="flex flex-col gap-[74px]">
                                {/* Top Row - Infinite Scroll */}
                                <div className="flex overflow-hidden">
                                    <div className="flex animate-scrollLeft w-max flex-shrink-0 whitespace-nowrap will-change-transform">
                                        {[...topRow, ...topRow, ...topRow, ...topRow, ...topRow, ...topRow].map((logo, index) => (
                                            <div key={`top-${index}`} className="flex flex-col items-center mx-4">
                                                <Image
                                                    src={logo.src}
                                                    alt={getAltFromSrc(logo.src)}
                                                    height={30}
                                                    width={135}
                                                    className="h-14 md:h-16 w-auto grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                                    priority={index < 6}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Row - Infinite Scroll */}
                                <div className="flex overflow-hidden">
                                    <div className="flex animate-scrollRight w-max flex-shrink-0 whitespace-nowrap will-change-transform">
                                        {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map((logo, index) => (
                                            <div key={`bottom-${index}`} className="flex flex-col items-center mx-4">
                                                <Image
                                                    src={logo.src}
                                                    alt={getAltFromSrc(logo.src)}
                                                    width={135}
                                                    height={30}
                                                    className="h-14 md:h-16 w-auto grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                                    priority={index < 6}
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

        </>
    );
}