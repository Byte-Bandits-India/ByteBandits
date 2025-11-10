"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useScroll } from "framer-motion";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PinnedHorizontalSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const helloRef = useRef<HTMLDivElement>(null);
    const aiTrackRef = useRef<HTMLDivElement>(null);
    const aiSectionRef = useRef<HTMLDivElement>(null);
    const brandingTrackRef = useRef<HTMLDivElement>(null);
    const brandingSectionRef = useRef<HTMLDivElement>(null);
    const webTrackRef = useRef<HTMLDivElement>(null);
    const webSectionRef = useRef<HTMLDivElement>(null);
    const mobileTrackRef = useRef<HTMLDivElement>(null);
    const mobileSectionRef = useRef<HTMLDivElement>(null);
    const digitalTrackRef = useRef<HTMLDivElement>(null);
    const digitalSectionRef = useRef<HTMLDivElement>(null);
    const cloudTrackRef = useRef<HTMLDivElement>(null);
    const cloudSectionRef = useRef<HTMLDivElement>(null);
    const aisTrackRef = useRef<HTMLDivElement>(null);
    const aisSectionRef = useRef<HTMLDivElement>(null);

    // 🎯 Framer Motion value for combined rotation
    const rotate = useMotionValue(0);

    // 🔄 Add vertical scroll rotation
    const { scrollYProgress } = useScroll();
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (p) => {
            rotate.set(p * 360);
        });
        return () => unsubscribe();
    }, [scrollYProgress, rotate]);

    useEffect(() => {
        if (!sectionRef.current || !trackRef.current) return;

        const track = trackRef.current;
        const section = sectionRef.current;
        const totalWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        const animation = gsap.to(track, {
            x: () => -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false,
                onUpdate: (self) => {
                    const base = scrollYProgress.get() * 360;
                    const horizontalAdd = self.progress * 360;
                    rotate.set(base + horizontalAdd);
                },
            },
        });

        if (helloRef.current) {
            gsap.fromTo(helloRef.current,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: helloRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                        markers: false
                    }
                }
            );
        }

        return () => {
            animation.scrollTrigger?.kill();
        };
    }, [rotate, scrollYProgress]);

    // AI Cards Horizontal Scroll Effect
    useEffect(() => {
        if (!aiSectionRef.current || !aiTrackRef.current) return;

        const aiTrack = aiTrackRef.current;
        const aiSection = aiSectionRef.current;

        const totalWidth = aiTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        const aiAnimation = gsap.to(aiTrack, {
            x: () => -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: aiSection,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false,
            },
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            aiAnimation.scrollTrigger?.kill();
        };
    }, []);

    // Branding & Social Media Horizontal Scroll Effect
    useEffect(() => {
        if (!brandingSectionRef.current || !brandingTrackRef.current) return;

        const brandingTrack = brandingTrackRef.current;
        const brandingSection = brandingSectionRef.current;

        const totalWidth = brandingTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        const brandingAnimation = gsap.to(brandingTrack, {
            x: () => -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: brandingSection,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false,
            },
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            brandingAnimation.scrollTrigger?.kill();
        };
    }, []);

    // Website Development Horizontal Scroll Effect
    useEffect(() => {
        if (!webSectionRef.current || !webTrackRef.current) return;

        const webTrack = webTrackRef.current;
        const webSection = webSectionRef.current;

        const totalWidth = webTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        const webAnimation = gsap.to(webTrack, {
            x: () => -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: webSection,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false,
            },
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            webAnimation.scrollTrigger?.kill();
        };
    }, []);

    // Mobile Development Horizontal Scroll Effect
    useEffect(() => {
        if (!mobileSectionRef.current || !mobileTrackRef.current) return;

        const mobileTrack = mobileTrackRef.current;
        const mobileSection = mobileSectionRef.current;

        const totalWidth = mobileTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        const mobileAnimation = gsap.to(mobileTrack, {
            x: () => -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: mobileSection,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false,
            },
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            mobileAnimation.scrollTrigger?.kill();
        };
    }, []);

    // Digital Marketing Horizontal Scroll Effect
    useEffect(() => {
        if (!digitalSectionRef.current || !digitalTrackRef.current) return;

        const digitalTrack = digitalTrackRef.current;
        const digitalSection = digitalSectionRef.current;

        const totalWidth = digitalTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        const digitalAnimation = gsap.to(digitalTrack, {
            x: () => -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: digitalSection,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false,
            },
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            digitalAnimation.scrollTrigger?.kill();
        };
    }, []);

    // Cloud & DevOps Horizontal Scroll Effect - FIXED
    useEffect(() => {
        if (!cloudSectionRef.current || !cloudTrackRef.current) {
            console.log('Cloud DevOps: Missing refs');
            return;
        }

        const cloudTrack = cloudTrackRef.current;
        const cloudSection = cloudSectionRef.current;

        console.log('Cloud DevOps: Initializing scroll effect');

        const totalWidth = cloudTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        console.log('Cloud DevOps dimensions:', {
            totalWidth,
            viewportWidth,
            scrollDistance
        });

        const cloudAnimation = gsap.to(cloudTrack, {
            x: () => -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: cloudSection,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false,
                onEnter: () => console.log('Cloud DevOps: entered'),
                onLeave: () => console.log('Cloud DevOps: left'),
            },
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            cloudAnimation.scrollTrigger?.kill();
        };
    }, []);

    // Second AI Section Horizontal Scroll Effect
    useEffect(() => {
        if (!aisSectionRef.current || !aisTrackRef.current) return;

        const aisTrack = aisTrackRef.current;
        const aisSection = aisSectionRef.current;

        const totalWidth = aisTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        const aisAnimation = gsap.to(aisTrack, {
            x: () => -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: aisSection,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false,
            },
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            aisAnimation.scrollTrigger?.kill();
        };
    }, []);

    const aiCards = [
        {
            id: 1,
            number: "01",
            title: "AI STRATEGY & CONSULTING",
            description: "Readiness assessments, implementation roadmaps, and responsible AI audits to align innovation with business goals.",
        },
        {
            id: 2,
            number: "02",
            title: "CUSTOM AI SOLUTIONS",
            description: "Machine learning models, workflow automation, predictive analytics, and generative AI for smarter decision-making.",
        },
        {
            id: 3,
            number: "03",
            title: "CONVERSATIONAL AI & NLP",
            description: "Intelligent chatbots, sentiment analysis, and multilingual assistants that enhance customer engagement.",
        },
        {
            id: 4,
            number: "04",
            title: "COMPUTER VISION",
            description: "Image recognition, OCR, video analytics, and AR/VR-driven use cases for advanced visual intelligence.",
        },
        {
            id: 5,
            number: "05",
            title: "PREDICTIVE ANALYTICS",
            description: "Intelligent forecasting, trend analysis, and data-driven insights for proactive business decisions.",
        },
        {
            id: 6,
            number: "06",
            title: "AI INTEGRATION",
            description: "Seamless deployment of AI tools into existing applications, CRMs, and enterprise ecosystems.",
        },
    ];

    const brandingCards = [
        {
            id: 1,
            number: "01",
            title: "BRAND STRATEGY & IDENTITY",
            description: "Comprehensive brand development including positioning, visual identity, tone of voice, and brand guidelines.",
        },
        {
            id: 2,
            number: "02",
            title: "LOGO DESIGN & VISUAL ASSETS",
            description: "Memorable logo design, color palettes, typography, and complete visual identity systems.",
        },
        {
            id: 3,
            number: "03",
            title: "SOCIAL MEDIA MANAGEMENT",
            description: "Content creation, community management, and strategic posting across all major social platforms.",
        },
        {
            id: 4,
            number: "04",
            title: "CONTENT CREATION & MARKETING",
            description: "Engaging visual and written content, video production, and strategic content distribution.",
        },
        {
            id: 5,
            number: "05",
            title: "INFLUENCER COLLABORATIONS",
            description: "Strategic partnerships with influencers and creators to amplify brand reach and authenticity.",
        },
        {
            id: 6,
            number: "06",
            title: "SOCIAL MEDIA ADVERTISING",
            description: "Targeted ad campaigns, performance tracking, and ROI optimization across social platforms.",
        },
    ];

    const webDevCards = [
        {
            id: 1,
            number: "01",
            title: "Custom Web Solutions",
            description: "Tailored platforms using Laravel, Next.js, and React for speed and flexibility.",
        },
        {
            id: 2,
            number: "02",
            title: "E-Commerce Development",
            description: "Secure, conversion-focused stores with seamless payment integration.",
        },
        {
            id: 3,
            number: "03",
            title: "UI/UX Design",
            description: "Modern, intuitive interfaces designed for engagement and accessibility.",
        },
        {
            id: 4,
            number: "04",
            title: "CMS Development",
            description: "WordPress, Strapi, or custom dashboards for effortless content control.",
        },
        {
            id: 5,
            number: "05",
            title: "API & System Integrations",
            description: "Connecting external tools, CRMs, and payment gateways for unified performance.",
        },
        {
            id: 6,
            number: "06",
            title: "Maintenance & Optimization",
            description: "Continuous updates, monitoring, and SEO-ready enhancements.",
        },
    ];

    const mobileDevCards = [
        {
            id: 1,
            number: "01",
            title: "Native App Development",
            description: "Android and iOS apps built for performance, stability, and user delight.",
        },
        {
            id: 2,
            number: "02",
            title: "Cross-Platform Solutions",
            description: "Flutter and React Native apps for faster, unified deployment.",
        },
        {
            id: 3,
            number: "03",
            title: "App UI/UX Design",
            description: "Engaging interfaces focused on usability and retention.",
        },
        {
            id: 4,
            number: "04",
            title: "API & Third-Party Integration",
            description: "Secure connections to CRMs, databases, and cloud systems.",
        },
        {
            id: 5,
            number: "05",
            title: "App Store Optimization",
            description: "Visibility enhancement through metadata and creative assets.",
        },
        {
            id: 6,
            number: "06",
            title: "Maintenance & Support",
            description: "Regular updates, security patches, and performance tuning.",
        },
    ];

    const digitalMarketingCards = [
        {
            id: 1,
            number: "01",
            title: "Paid Advertising & Boosting",
            description: "Google Search, Display, YouTube, Meta, and Spotify Ads, along with strategic reel and post boosting.",
        },
        {
            id: 2,
            number: "02",
            title: "SEO & Search Strategy",
            description: "Local, technical, and international SEO combined with targeted backlink building.",
        },
        {
            id: 3,
            number: "03",
            title: "Content Marketing",
            description: "High-quality video, audio, social, and website content aligned with client goals and audience behavior.",
        },
        {
            id: 4,
            number: "04",
            title: "Performance Analytics",
            description: "Real-time insights, conversion tracking, and funnel optimization for better ROI.",
        },
        {
            id: 5,
            number: "05",
            title: "Email & Retargeting",
            description: "Personalized outreach and automated re-marketing to drive retention.",
        },
        {
            id: 6,
            number: "06",
            title: "Campaign Strategy ",
            description: "End-to-end planning, execution, and reporting for sustained digital visibility.",
        },
    ];

    const cloudDevOpsCards = [
        {
            id: 1,
            number: "01",
            title: "CLOUD INFRASTRUCTURE",
            description: "Architecture design and implementation on AWS, Azure, or Google Cloud.",
        },
        {
            id: 2,
            number: "02",
            title: "CI/CD PIPELINES",
            description: "Continuous integration and deployment for faster, error-free releases.",
        },
        {
            id: 3,
            number: "03",
            title: "CONTAINERIZATION & ORCHESTRATION",
            description: "Docker and Kubernetes solutions for scalability and efficiency.",
        },
        {
            id: 4,
            number: "04",
            title: "INFRASTRUCTURE AS CODE",
            description: "Automated provisioning using Terraform and Ansible for consistency.",
        },
        {
            id: 5,
            number: "05",
            title: "MONITORING & OPTIMIZATION",
            description: "Real-time tracking, load management, and cost efficiency improvements.",
        },
        {
            id: 6,
            number: "06",
            title: "CLOUD SECURITY & COMPLIANCE",
            description: "Data encryption, access control, and adherence to industry standards.",
        },
    ];

    return (
        <>
            <div>
                {/* Fixed background that appears across ALL sections */}
                <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
                    <motion.div
                        className="w-[641px] h-auto object-contain absolute"
                        style={{ rotate }}
                    >
                        <Image
                            src="/images/service/silver-frame.png"
                            alt="frame"
                            width={641}
                            height={641}
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                    <div className="h-auto object-contain absolute">
                        <Image
                            src="/images/service/L1.png"
                            alt="L1"
                            width={200}
                            height={200}
                            className="h-auto object-contain"
                        />
                    </div>
                </div>


                {/* Horizontal Scroll Section */}
                <section ref={sectionRef} className="relative w-full overflow-hidden z-10">
                    <div className="relative w-full h-screen overflow-hidden z-20">
                        <div
                            ref={trackRef}
                            className="relative flex h-full items-center will-change-transform"
                        >
                            <div className="slide w-screen h-screen flex-shrink-0 flex items-center justify-center">
                            </div>
                        </div>
                    </div>
                </section>

                {/* Branding & Social Media Section with Image First */}
                <section className="relative w-full h-screen z-10">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/images/service/medium-shot-woman-holding-smartphone 1.png"
                            alt="Branding & Social Media"
                            fill
                            className="object-cover mix-blend-multiply"
                            sizes="100vw"
                        />
                    </div>
                </section>

                {/* Branding & Social Media Horizontal Cards Section */}
                <section
                    ref={brandingSectionRef}
                    className="relative w-full h-screen overflow-hidden z-10 bg-transparent"
                >
                    <div
                        ref={brandingTrackRef}
                        className="flex h-full items-center will-change-transform gap-x-10 px-20"
                        style={{ width: "max-content" }}
                    >
                        <div className="flex-shrink-0 h-full flex items-center justify-start">
                            <h2 className="text-[clamp(50px,6vw,120px)] font-extrabold leading-[1.1] uppercase text-black">
                                Branding & <br /> Social Media
                            </h2>
                        </div>
                        {brandingCards.map((card) => (
                            <div
                                key={card.id}
                                className="flex-shrink-0 flex items-center justify-center"
                            >
                                <div
                                    className="w-[380px] h-[450px] rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-200 
          flex flex-col justify-between p-8 group transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                                >
                                    <div className="text-[40px] font-anton font-bold text-gray-700">
                                        {card.number}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h3 className="font-bold text-[24px] mb-4 text-gray-900 font-inter group-hover:text-black transition-colors duration-300 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-700 text-[16px] leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Website Development Section with Image First */}
                <section className="relative w-full h-screen z-10">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/images/service/still-life-graphic-design-studio 1.png"
                            alt="Website Development"
                            fill
                            className="object-cover mix-blend-multiply"
                            sizes="100vw"
                        />
                    </div>
                </section>

                {/* Website Development Horizontal Cards Section */}
                <section
                    ref={webSectionRef}
                    className="relative w-full h-screen overflow-hidden z-10 bg-transparent"
                >
                    <div
                        ref={webTrackRef}
                        className="flex h-full items-center will-change-transform gap-x-10 px-20"
                        style={{ width: "max-content" }}
                    >
                        <div className="flex-shrink-0 h-full flex items-center justify-start">
                            <h2 className="text-[clamp(50px,6vw,120px)] font-extrabold leading-[1.1] uppercase text-black">
                                Website <br /> Development
                            </h2>
                        </div>
                        {webDevCards.map((card) => (
                            <div
                                key={card.id}
                                className="flex-shrink-0 flex items-center justify-center"
                            >
                                <div
                                    className="w-[380px] h-[450px] rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-200 
          flex flex-col justify-between p-8 group transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                                >
                                    <div className="text-[40px] font-anton font-bold text-gray-700">
                                        {card.number}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h3 className="font-bold text-[24px] mb-4 text-gray-900 font-inter group-hover:text-black transition-colors duration-300 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-700 text-[16px] leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mobile Development Section with Image First */}
                <section className="relative w-full h-screen z-10">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/images/service/representations-user-experience-interface-design 1.png"
                            alt="Mobile Development"
                            fill
                            className="object-cover mix-blend-multiply"
                            sizes="100vw"
                        />
                    </div>
                </section>

                {/* Mobile Development Horizontal Cards Section */}
                <section
                    ref={mobileSectionRef}
                    className="relative w-full h-screen overflow-hidden z-10 bg-transparent"
                >
                    <div
                        ref={mobileTrackRef}
                        className="flex h-full items-center will-change-transform gap-x-10 px-20"
                        style={{ width: "max-content" }}
                    >
                        <div className="flex-shrink-0 h-full flex items-center justify-start">
                            <h2 className="text-[clamp(50px,6vw,120px)] font-extrabold leading-[1.1] uppercase text-black">
                                Mobile Application <br /> Development
                            </h2>
                        </div>
                        {mobileDevCards.map((card) => (
                            <div
                                key={card.id}
                                className="flex-shrink-0 flex items-center justify-center"
                            >
                                <div
                                    className="w-[380px] h-[450px] rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-200 
          flex flex-col justify-between p-8 group transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                                >
                                    <div className="text-[40px] font-anton font-bold text-gray-700">
                                        {card.number}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h3 className="font-bold text-[24px] mb-4 text-gray-900 font-inter group-hover:text-black transition-colors duration-300 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-700 text-[16px] leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Digital Marketing Section with Image First */}
                <section className="relative w-full h-screen z-10">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/images/service/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display 1.png"
                            alt="Digital Marketing"
                            fill
                            className="object-cover mix-blend-multiply"
                            sizes="100vw"
                        />
                    </div>
                </section>

                {/* Digital Marketing Horizontal Cards Section */}
                <section
                    ref={digitalSectionRef}
                    className="relative w-full h-screen overflow-hidden z-10 bg-transparent"
                >
                    <div
                        ref={digitalTrackRef}
                        className="flex h-full items-center will-change-transform gap-x-10 px-20"
                        style={{ width: "max-content" }}
                    >
                        <div className="flex-shrink-0 h-full flex items-center justify-start">
                            <h2 className="text-[clamp(50px,6vw,120px)] font-extrabold leading-[1.1] uppercase text-black">
                                Digital <br /> Marketing
                            </h2>
                        </div>
                        {digitalMarketingCards.map((card) => (
                            <div
                                key={card.id}
                                className="flex-shrink-0 flex items-center justify-center"
                            >
                                <div
                                    className="w-[380px] h-[450px] rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-200 
          flex flex-col justify-between p-8 group transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                                >
                                    <div className="text-[40px] font-anton font-bold text-gray-700">
                                        {card.number}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h3 className="font-bold text-[24px] mb-4 text-gray-900 font-inter group-hover:text-black transition-colors duration-300 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-700 text-[16px] leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cloud & DevOps Section with Image First - FIXED POSITION */}
                <section className="relative w-full h-screen z-10">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/images/service/devops.png"
                            alt="Cloud & DevOps"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                        {/* Fallback background in case image doesn't load */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"></div>
                    </div>
                </section>

                {/* Cloud & DevOps Horizontal Cards Section - FIXED */}
                <section
                    ref={cloudSectionRef}
                    className="relative w-full h-screen overflow-hidden z-10 bg-transparent"
                >
                    <div
                        ref={cloudTrackRef}
                        className="flex h-full items-center will-change-transform gap-x-10 px-20"
                        style={{ width: "max-content" }}
                    >
                        <div className="flex-shrink-0 h-full flex items-center justify-start">
                            <h2 className="text-[clamp(50px,6vw,120px)] font-extrabold leading-[1.1] uppercase text-black">
                                Cloud & <br /> DevOps
                            </h2>
                        </div>
                        {cloudDevOpsCards.map((card) => (
                            <div
                                key={card.id}
                                className="flex-shrink-0 flex items-center justify-center"
                            >
                                <div
                                    className="w-[380px] h-[450px] rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-200 
          flex flex-col justify-between p-8 group transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                                >
                                    <div className="text-[40px] font-anton font-bold text-gray-700">
                                        {card.number}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h3 className="font-bold text-[24px] mb-4 text-gray-900 font-inter group-hover:text-black transition-colors duration-300 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-700 text-[16px] leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Second AI Section with Image First */}
                <section className="relative w-full h-screen z-10">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/images/service/cybersecurity-concept-collage-design 2.png"
                            alt="Artificial Intelligence"
                            fill
                            className="object-cover mix-blend-multiply"
                            sizes="100vw"
                        />
                    </div>
                </section>

                {/* Second AI Horizontal Cards Section */}
                <section
                    ref={aisSectionRef}
                    className="relative w-full h-screen overflow-hidden z-10 bg-transparent"
                >
                    <div
                        ref={aisTrackRef}
                        className="flex h-full items-center will-change-transform gap-x-10 px-20"
                        style={{ width: "max-content" }}
                    >
                        <div className="flex-shrink-0 h-full flex items-center justify-start">
                            <h2 className="text-[clamp(50px,6vw,120px)] font-extrabold leading-[1.1] uppercase text-black">
                                Artificial <br /> Intelligence
                            </h2>
                        </div>
                        {aiCards.map((card) => (
                            <div
                                key={`ais-${card.id}`}
                                className="flex-shrink-0 flex items-center justify-center"
                            >
                                <div
                                    className="w-[380px] h-[450px] rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-200 
          flex flex-col justify-between p-8 group transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                                >
                                    <div className="text-[40px] font-anton font-bold text-gray-700">
                                        {card.number}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h3 className="font-bold text-[24px] mb-4 text-gray-900 font-inter group-hover:text-black transition-colors duration-300 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-700 text-[16px] leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}