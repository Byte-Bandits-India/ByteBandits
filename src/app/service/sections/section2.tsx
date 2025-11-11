"use client";
import React, { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useScroll, MotionValue } from "framer-motion";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Types
interface ServiceCard {
    id: number;
    number: string;
    title: string;
    description: string;
}

interface ServiceSection {
    id: string;
    title: string;
    image: string;
    cards: ServiceCard[];
    imageAlt: string;
}

// Reusable Horizontal Scroll Hook
const useHorizontalScroll = (sectionRef: React.RefObject<HTMLElement | null>, trackRef: React.RefObject<HTMLElement | null>) => {
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
            },
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            animation.scrollTrigger?.kill();
        };
    }, [sectionRef, trackRef]);
};

// Reusable Card Component
const ServiceCard: React.FC<{ card: ServiceCard }> = ({ card }) => (
    <div className="flex-shrink-0 flex items-center justify-center">
        <div
            className="h-[330px] w-[300px] lg:w-[380px] lg:h-[450px] rounded-2xl bg-white/20 backdrop-blur-lg border border-[#D7D7D7] 
          flex flex-col justify-between p-8 group transition-all duration-300 hover:scale-105"
        >
            <div className="text-[40px] font-anton font-bold text-[#333333]">
                {card.number}
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-medium text-[20px] lg:text-[24px] mb-4 text-[#333333] font-inter group-hover:text-black transition-colors duration-300 leading-tight">
                    {card.title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#333333] leading-relaxed">
                    {card.description}
                </p>
            </div>
        </div>
    </div>
);

// Reusable Image Section Component - SINGLE IMAGE (80vh)
const ImageSection: React.FC<{
    sectionRef: React.RefObject<HTMLDivElement | null>;
    trackRef: React.RefObject<HTMLDivElement | null>;
    imageSrc: string;
    imageAlt: string;
    title: string;
}> = ({ sectionRef, trackRef, imageSrc, imageAlt }) => {
    useEffect(() => {
        if (!sectionRef.current || !trackRef.current) return;

        const section = sectionRef.current;
        const imageWrapper = trackRef.current.querySelector(".scroll-image");

        // ✅ Horizontal scroll: image enters -> crosses -> exits
        const animation = gsap.fromTo(
            imageWrapper,
            { xPercent: 0 }, // start fully visible
            {
                xPercent: -100, // move full width left so it completely exits
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top", // how long the image stays pinned
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    markers: false,
                },
            }
        );

        return () => animation.scrollTrigger?.kill();
    }, [sectionRef, trackRef]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen z-10 flex items-center justify-center overflow-hidden bg-transparent"
        >
            <div
                ref={trackRef}
                className="relative flex items-center justify-center h-full w-full"
            >
                {/* ✅ Image is wider to allow full slide-out */}
                <div className="scroll-image relative h-[80vh] w-full">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        priority
                        className="object-contain object-center"
                    />
                </div>
            </div>
        </section>
    );
};

// Reusable Cards Section Component
const CardsSection: React.FC<{
    sectionRef: React.RefObject<HTMLDivElement | null>;
    trackRef: React.RefObject<HTMLDivElement | null>;
    title: string;
    cards: ServiceCard[];
}> = ({ sectionRef, trackRef, title, cards }) => {
    useHorizontalScroll(sectionRef, trackRef);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen overflow-hidden z-10 bg-transparent"
        >
            <div
                ref={trackRef}
                className="flex h-full items-center will-change-transform gap-x-10 px-20"
                style={{ width: "max-content" }}
            >
                <div className="flex-shrink-0 h-full flex items-center justify-start">
                    <h2 className="text-[clamp(50px,6vw,120px)] font-extrabold leading-[1.1] uppercase text-[#333333]">
                        {title.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < title.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </h2>
                </div>
                {cards.map((card) => (
                    <ServiceCard key={card.id} card={card} />
                ))}
            </div>
        </section>
    );
};

// Service Sections Wrapper Component with robust containment
const ServiceSectionsWrapper: React.FC<{
    children: React.ReactNode;
    rotate: MotionValue<number>;
}> = ({
    children,
    rotate,
}) => {
        const wrapperRef = useRef<HTMLDivElement>(null);
        const bgRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (!wrapperRef.current || !bgRef.current) return;

            // Set up intersection observer to contain fixed background
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Show background when wrapper enters viewport
                            gsap.to(bgRef.current, {
                                opacity: 1,
                                duration: 0.5,
                                ease: "power2.out"
                            });
                        } else {
                            // Hide background when wrapper leaves viewport
                            gsap.to(bgRef.current, {
                                opacity: 0,
                                duration: 0.3,
                                ease: "power2.in"
                            });
                        }
                    });
                },
                {
                    threshold: [0, 0.1, 0.9, 1],
                    rootMargin: '0px'
                }
            );

            observer.observe(wrapperRef.current);

            return () => observer.disconnect();
        }, []);

        return (
            <div ref={wrapperRef} className="service-sections-wrapper relative">
                {/* Fixed Background - Always perfectly centered */}
                <div ref={bgRef} className="fixed-service-bg">
                    <div className="fixed-center-container">
                        {/* Rotating frame */}
                        <motion.div
                            className="relative w-[300px] md:w-[400px] lg:w-[600px] aspect-square"
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

                        {/* Static L1 centered inside frame */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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

                {/* Children content */}
                {children}

                <style jsx global>{`
      .service-sections-wrapper {
        position: relative;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
      }

      .fixed-service-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        z-index: 0;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .fixed-center-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(0, 0);
      }

      .service-sections-wrapper section {
        position: relative;
        z-index: 10;
      }

      /* Ensure proper cleanup of fixed positioning */
      @media (max-width: 768px) {
        .fixed-service-bg {
          z-index: 1;
        }
        
        .service-sections-wrapper section {
          z-index: 2;
        }
      }
    `}</style>
            </div>
        );
    };

// Main Component
export default function PinnedHorizontalSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const helloRef = useRef<HTMLDivElement>(null);

    // Framer Motion value for combined rotation
    const rotate = useMotionValue(0);

    // Add vertical scroll rotation
    const { scrollYProgress } = useScroll();
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (p) => {
            rotate.set(p * 360);
        });
        return () => unsubscribe();
    }, [scrollYProgress, rotate]);

    // Data for all sections
    const serviceSections: ServiceSection[] = [
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

    // Create refs for all dynamic sections upfront
    const sectionRefs = useMemo(() => {
        const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {};
        serviceSections.forEach(section => {
            refs[`${section.id}-image-section`] = React.createRef<HTMLDivElement>();
            refs[`${section.id}-image-track`] = React.createRef<HTMLDivElement>();
            refs[`${section.id}-cards-section`] = React.createRef<HTMLDivElement>();
            refs[`${section.id}-cards-track`] = React.createRef<HTMLDivElement>();
        });
        return refs;
    }, [serviceSections]);

    // Main horizontal scroll effect
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
    }, [rotate, scrollYProgress, sectionRef, trackRef, helloRef]);

    return (
        <ServiceSectionsWrapper rotate={rotate}>
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

            {/* Render all service sections */}
            {serviceSections.map((section) => (
                <React.Fragment key={section.id}>
                    <ImageSection
                        sectionRef={sectionRefs[`${section.id}-image-section`]}
                        trackRef={sectionRefs[`${section.id}-image-track`]}
                        imageSrc={section.image}
                        imageAlt={section.imageAlt}
                        title={section.title}
                    />
                    <CardsSection
                        sectionRef={sectionRefs[`${section.id}-cards-section`]}
                        trackRef={sectionRefs[`${section.id}-cards-track`]}
                        title={section.title}
                        cards={section.cards}
                    />
                </React.Fragment>
            ))}
        </ServiceSectionsWrapper>
    );
}