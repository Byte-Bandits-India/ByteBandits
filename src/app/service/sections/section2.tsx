"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useScroll, MotionValue } from "framer-motion";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// ---------- Types ----------
interface ServiceCard {
    id: number;
    number: string;
    title: string;
    description: string;
}

interface ServiceSectionType {
    id: string;
    title: string;
    image: string;
    cards: ServiceCard[];
    imageAlt: string;
}

// ---------- Reusable Card ----------
const ServiceCard: React.FC<{ card: ServiceCard }> = ({ card }) => (
    <div className="flex-shrink-0 flex items-center justify-center">
        <div
            className="h-[330px] w-[300px] lg:w-[300px] lg:h-[300px] rounded-2xl bg-white/20 backdrop-blur-lg border border-[#D7D7D7] 
          flex flex-col justify-between p-6 group transition-all duration-300 hover:scale-105"
        >
            <div className="text-[40px] font-anton font-bold text-[#000000]">{card.number}</div>
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-medium text-[20px] lg:text-[24px] mb-4 text-[#000000] font-inter group-hover:text-black transition-colors duration-300 leading-tight">
                    {card.title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#000000] leading-relaxed">
                    {card.description}
                </p>
            </div>
        </div>
    </div>
);

// ---------- Service Section ----------
const ServiceSection: React.FC<{
    section: ServiceSectionType;
    sectionRef: React.RefObject<HTMLDivElement | null>;
    trackRef: React.RefObject<HTMLDivElement | null>;
}> = ({ section, sectionRef, trackRef }) => {
    // Horizontal scroll animation
    useEffect(() => {
        if (!sectionRef.current || !trackRef.current) return;

        const track = trackRef.current;
        const sectionEl = sectionRef.current;
        const totalWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        if (scrollDistance > 0) {
            const animation = gsap.to(track, {
                x: () => -scrollDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top top",
                    end: () => `+=${scrollDistance}`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    markers: false,
                },
            });

            return () => {
                animation.scrollTrigger?.kill();
            };
        }
    }, [section.id, sectionRef, trackRef]);

    return (
        <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-transparent">
            <div ref={trackRef} className="relative flex h-full items-center will-change-transform" style={{ width: "max-content" }}>
                {/* Full-screen image before cards */}
                <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center">
                    <div className="relative h-screen w-full">
                        <Image src={section.image} alt={section.imageAlt} fill priority className="object-cover object-center" />
                    </div>
                </div>

                {/* Horizontal scroll section */}
                <div className="w-screen h-screen flex items-center justify-between px-10 lg:px-20 bg-transparent">
                    {/* Left side */}
                    <div className="flex-[1.5] flex flex-col h-full justify-center min-w-[300px] lg:min-w-[500px]">
                        <h2 className="text-[clamp(50px,6vw,80px)] font-anton leading-[1.1] uppercase text-[#000000] mb-8 lg:mb-12">
                            {section.title.split("\n").map((line, index) => (
                                <span key={index} className="block">
                                    {line}
                                </span>
                            ))}
                        </h2>
                    </div>

                    {/* Right side cards */}
                    <div className="flex-1 h-full flex items-center justify-center pl-10 lg:pl-20">
                        <div className="flex items-center will-change-transform gap-x-6 lg:gap-x-10">
                            <div className="w-1/2"></div>
                            {section.cards.map((card) => (
                                <ServiceCard key={card.id} card={card} />
                            ))}
                            <div className="w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ---------- Wrapper ----------
const ServiceSectionsWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={wrapperRef} className="relative w-full overflow-hidden" id="pinned-horizontal-wrapper">
            <div className="relative z-10">{children}</div>
        </div>
    );
};

// ---------- Main Component ----------
// ---------- Main Component ----------
export default function PinnedHorizontalSection() {
    const rotate = useMotionValue(0);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (p) => {
            rotate.set(p * 360);
        });
        return () => unsubscribe();
    }, [scrollYProgress, rotate]);

    // Pinning Refs
    const frameRef = useRef<HTMLDivElement>(null);
    const serviceContainerRef = useRef<HTMLDivElement>(null);

    // GSAP Pin effect for the rotating frame
    useEffect(() => {
        if (!frameRef.current || !serviceContainerRef.current) return;

        const trigger = ScrollTrigger.create({
            trigger: frameRef.current,
            start: "center center",
            endTrigger: serviceContainerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            markers: false,
        });

        return () => trigger.kill();
    }, []);

    // ---------- Section Data ----------
    const serviceSections: ServiceSectionType[] = [
        {
            id: "branding",
            title: "Branding & \nSocial Media",
            image: "/images/service/medium-shot-woman-holding-smartphone 1.png",
            imageAlt: "Branding & Social Media",
            cards: [
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
            ]
        },
        {
            id: "web",
            title: "Website \nDevelopment",
            image: "/images/service/still-life-graphic-design-studio 1.png",
            imageAlt: "Website Development",
            cards: [
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
            ]
        },
        {
            id: "mobile",
            title: "Mobile Application \nDevelopment",
            image: "/images/service/representations-user-experience-interface-design 1.png",
            imageAlt: "Mobile Development",
            cards: [
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
            ]
        },
        {
            id: "digital",
            title: "Digital \nMarketing",
            image: "/images/service/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display 1.png",
            imageAlt: "Digital Marketing",
            cards: [
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
            ]
        },
        {
            id: "cloud",
            title: "Cloud & \nDevOps",
            image: "/images/service/devops.png",
            imageAlt: "Cloud & DevOps",
            cards: [
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
            ]
        },
        {
            id: "ai",
            title: "Artificial \nIntelligence",
            image: "/images/service/cybersecurity-concept-collage-design 2.png",
            imageAlt: "Artificial Intelligence",
            cards: [
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
            ]
        }
    ];


    // ---------- Create refs for each service section ----------
    const sectionRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
    const trackRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

    // Ensure we have enough refs for all sections
    if (sectionRefs.current.length !== serviceSections.length) {
        sectionRefs.current = Array(serviceSections.length)
            .fill(null)
            .map((_, i) => sectionRefs.current[i] || React.createRef<HTMLDivElement>());
        trackRefs.current = Array(serviceSections.length)
            .fill(null)
            .map((_, i) => trackRefs.current[i] || React.createRef<HTMLDivElement>());
    }

    return (
        <ServiceSectionsWrapper>
            {/* Pinned Rotating Frame - PROPERLY CENTERED */}
            <section
                ref={frameRef}
                className="w-full h-screen flex items-center justify-center bg-transparent"
                style={{ position: 'sticky', top: 0 }}
            >
                {/* Centered container */}
                <div className="flex items-center justify-center w-full h-full">
                    {/* Rotating frame */}
                    <div className="relative w-[280px] md:w-[400px] lg:w-[600px] aspect-square flex items-center justify-center">
                        {/* Rotating motion wrapper only around the frame */}
                        <motion.div
                            className="absolute inset-0"
                            style={{ rotate }}
                        >
                            <Image
                                src="/images/service/silver-frame.png"
                                alt="frame"
                                width={641}
                                height={641}
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Centered static L1 image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/images/service/L1.png"
                                alt="L1"
                                width={80}
                                height={80}
                                className="object-contain w-[60px] md:w-[90px] lg:w-[120px] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Content Scrolls Beneath */}
            <div ref={serviceContainerRef} id="service-sections" className="relative z-10">
                {serviceSections.map((section, index) => (
                    <ServiceSection
                        key={section.id}
                        section={section}
                        sectionRef={sectionRefs.current[index]}
                        trackRef={trackRefs.current[index]}
                    />
                ))}
            </div>
        </ServiceSectionsWrapper>
    );
}