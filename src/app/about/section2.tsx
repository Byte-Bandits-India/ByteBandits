"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface DeliveryStep {
  title: string;
  description: string;
  image: string;
}

const deliverySteps: DeliveryStep[] = [
  {
    title: "How we deliver",
    description: "We execute projects through a defined delivery process that reduces ambiguity, validates decisions early, and ensures the system is stable in real operational use. Each stage has a clear output and review before moving forward.",
    image: "/images/howWeDeliver.png",
  },
  {
    title: "1. Discovery & planning",
    description: "We study your business operations, stakeholders, and current tools to understand how work is actually performed. Requirements, risks, and dependencies are documented before development begins. We define scope, architecture approach, priorities, and milestones.",
    image: "/images/Discover.png",
  },
  {
    title: "2. UX / UI design",
    description: "We map user journeys, workflows, and permission levels based on operational roles. Wireframes and prototypes are created and reviewed with your team. Interfaces are designed for usability, not visual appearance alone. Approval here ensures development starts with complete clarity.",
    image: "/images/Ui:Ux.png",
  },
  {
    title: "3. Development (web & mobile)",
    description: "We build the platform in controlled iterations, covering backend services, APIs, and frontend interfaces. Code is versioned, reviewed, and released in stages for transparency. Both web and mobile implementations follow the same architecture and data model. You can review progress continuously.",
    image: "/images/team.png",
  },
  {
    title: "4. Cloud & infrastructure",
    description: "We configure the hosting environment, deployment pipelines, security policies, and access control. Backups, monitoring, and scaling measures are prepared before production use. Infrastructure is treated as part of the system, not an afterthought. The goal is reliability under real traffic and usage.",
    image: "/images/CloudInfrastructure.png",
  },
  {
    title: "5. Testing & launch",
    description: "The system is validated through functional, integration, and end-to-end testing. Edge cases and operational scenarios are verified before release. We deploy to a production environment with monitoring and rollback capability. Initial usage is supervised to ensure stability and correct behavior.",
    image: "/images/Testing&launch.png",
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx: gsap.Context;

    const initGSAP = () => {
      // Revert previous animations if any
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        const track = trackRef.current;
        const trigger = sectionRef.current;
        if (!track || !trigger) return;

        const cardElements = track.querySelectorAll(".delivery-card") as NodeListOf<HTMLDivElement>;
        if (!cardElements.length) return;

        // Measure card width dynamically
        const cardWidth = cardElements[0].getBoundingClientRect().width;
        const totalCards = cardElements.length;

        // Calculate responsive padding to center first and last cards in the viewport
        const halfViewport = window.innerWidth / 2;
        const halfCard = cardWidth / 2;
        const paddingVal = `${halfViewport - halfCard}px`;
        
        track.style.paddingLeft = paddingVal;
        track.style.paddingRight = paddingVal;

        // Translation distance: translate from Card 1 centered to Card N centered
        const scrollDistance = cardWidth * (totalCards - 1);

        // Pin horizontal section based on vertical page scroll
        const containerAnimation = gsap.to(track, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Add active classes to cards as they scroll past center
        cardElements.forEach((card) => {
          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: "left center",
              end: "right center",
              containerAnimation: containerAnimation,
              toggleClass: {
                targets: card,
                className: "active",
              },
              onEnter: () => card.classList.add("active"),
              onLeave: () => card.classList.remove("active"),
              onEnterBack: () => card.classList.add("active"),
              onLeaveBack: () => card.classList.remove("active"),
            },
          });
        });
      }, sectionRef);
    };

    // Small delay to ensure all layout/renders complete
    const timer = setTimeout(initGSAP, 100);

    window.addEventListener("resize", initGSAP);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", initGSAP);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-[#F5F5F5] overflow-hidden border-t border-gray-200 flex flex-col justify-center relative"
    >
      <style>{`
        .delivery-card.active {
          border-color: #BF3A3B !important;
        }
      `}</style>

      {/* Static Section Heading */}
      <div className="w-full max-w-[1420px] mx-auto px-8 md:px-16 lg:px-24 my-8 md:my-12">
        <h2 className="text-[#111111] text-3xl sm:text-4xl md:text-[48px] lg:text-[56px] tracking-tight">
          {"Our Working Model"}
        </h2>
      </div>

      <div className="w-full overflow-hidden">
        {/* Horizontal Scroll Cards Track */}
        <div
          ref={trackRef}
          className="flex flex-row flex-nowrap gap-0 w-max"
        >
          {deliverySteps.map((step, idx) => (
            <div
              key={idx}
              className="delivery-card flex-shrink-0 w-[290px] xs:w-[330px] sm:w-[380px] md:w-[430px] flex flex-col pt-10 border-t-2 border-[#CCCCCC] hover:border-[#BF3A3B] transition-colors duration-300 px-6 md:px-8"
            >
              <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold font-inter text-[#111111] mb-6 min-h-[72px] flex items-start leading-tight">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed mb-8 flex-grow">
                {step.description}
              </p>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-sm border border-gray-200/50 mt-auto">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 290px, (max-width: 768px) 380px, 430px"
                  priority={idx < 2}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
