"use client"
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Define types for the section contents
interface SectionContent {
  what: string;
  why: string;
  how: string[];
}

// Define props interface (empty in this case, but good practice)
interface BlogContentPageProps { }

export default function BlogContentPage(props: BlogContentPageProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const leftSidebarRef = useRef<HTMLDivElement>(null);
  const rightSidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPinned, setIsPinned] = useState(false);
  const [leftSidebarStyle, setLeftSidebarStyle] = useState({});
  const [rightSidebarStyle, setRightSidebarStyle] = useState({});
  const [shouldShowSidebars, setShouldShowSidebars] = useState(true);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });

  // Smooth progress for the progress bar
  const smoothProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (index: number) => {
    const el = document.getElementById(`section-${index}`);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // Pin effect using useEffect and scroll event - CORRECTED VERSION
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !containerRef.current || !leftSidebarRef.current || !rightSidebarRef.current) return;

      const contentRect = contentRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      // Calculate when to start and stop pinning
      const contentStart = contentRect.top + scrollTop;
      const contentEnd = contentRect.bottom + scrollTop;

      // Start pinning when content reaches 100px from top
      // Stop pinning when content bottom reaches top of viewport
      const shouldPin = scrollTop >= contentStart - 100 &&
        scrollTop <= contentEnd - viewportHeight;

      setIsPinned(shouldPin);
      setShouldShowSidebars(true);

      if (shouldPin) {
        // Calculate the exact position to maintain when pinned
        const leftRect = leftSidebarRef.current.getBoundingClientRect();
        const rightRect = rightSidebarRef.current.getBoundingClientRect();

        setLeftSidebarStyle({
          position: 'fixed',
          left: `${leftRect.left}px`,
          top: '100px',
          width: `${leftRect.width}px`,
          zIndex: 40
        });

        setRightSidebarStyle({
          position: 'fixed',
          right: `${window.innerWidth - rightRect.right}px`,
          top: '100px',
          width: `${rightRect.width}px`,
          zIndex: 40
        });
      } else {
        // Reset styles when not pinned
        setLeftSidebarStyle({});
        setRightSidebarStyle({});
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // You'll need to define these arrays with proper types
  const sections: string[] = [
    "Cluttered Interfaces",
    "Poor Typography Choices",
    "Inconsistent Spacing and Alignment",
    "Low Contrast & Accessibility Issues",
    "Overusing Colors",
    "Non-Intuitive Icons",
    "Weak or Confusing CTAs (Calls to Action)",
    "Neglecting Mobile Responsiveness",
    "Over-the-Top Animations",
    "Skipping User Testing"
  ];

  const sectionContents = [
    {
      what: "New designers often try to include everything on one screen — menus, banners, popups, icons, tips, sidebars… the list goes on. The result? A crowded, confusing interface that overwhelms users. Why It's a Problem: Users don't know where to look or what to do first. Too many elements fight for attention, which increases cognitive load.",
      why: "Users don't know where to look or what to do first. Too many elements fight for attention, which increases cognitive load.",
      how: [
        "Start with a clear visual hierarchy.Identify the primary action or content, and design around it.",
        "Use whitespace generously. It's not 'empty' — it provides breathing space.",
        "Declutter ruthlessly — if an element doesn't add value, cut it."
      ]
    },
    {
      what: "Typography is underestimated. Beginners often mix fonts, use decorative styles, or ignore sizing and spacing.",
      why: "Typography is 95% of UI. Bad type makes interfaces feel unprofessional and hard to read.",
      how: [
        "Use a font scale. Set consistent sizes for headings, subheadings, and body text (e.g., 32px, 24px, 18px, 14px).",
        "Stick to one or two fonts. A clean sans-serif for UI (like Inter, Roboto, or SF Pro) works well.",
        "Mind your line-height and letter-spacing.These affect legibility more than you think."
      ]
    },
    {
      what: "Margins are uneven, elements float oddly, and buttons are misaligned. The design feels messy",
      why: "Inconsistency signals carelessness and breaks visual flow.",
      how: [
        "Use an 8pt grid system. Base spacing on multiples of 8 for consistency.",
        "Align to grids and columns. Design tools like Figma make this easy.",
        "Use auto-layouts and components.This ensures consistent structure across screens."
      ]
    },
    {
      what: "Light gray text on white, thin fonts, or buttons with poor color contrast.",
      why: "Users with visual impairments (or just in bright sunlight!) will struggle to read or interact.",
      how: [
        "Follow WCAG guidelines.Aim for at least a 4.5:1 contrast ratio.",
        "Test your designs.Use tools like Stark or Figma plugins.",
        "Think inclusively.Accessibility isn't a feature — it's a foundation."
      ]
    },
    {
      what: "Every button is a different color. There's red, blue, green, yellow — it looks like a UI rainbow.",
      why: "Without meaning attached to color, users get confused.Also, too many colors feel unprofessional",
      how: [
        "Define a design system palette. Primary, secondary, neutral, and alert colors.",
        "Use color with purpose. For example, blue for primary actions, red for errors.",
        "Leverage shades.Instead of different colors, use tints and tones of the same base."
      ]
    },
    {
      what: "Icons look sleek, but users have no idea what they mean — is that a rocket for 'Submit'?",
      why: "Users shouldn't have to guess. Unclear icons increase friction.",
      how: [
        " Use familiar icons. Search, settings, back, and delete should be instantly recognizable.",
        "Add labels. Especially for complex or custom icons.",
        "Maintain consistency. Don't mix icon styles (e.g., outline with solid)."
      ]
    },
    {
      what: "Buttons that say 'Click Here' or 'Submit' without context.",
      why: "The CTA is the user's next step. If it's unclear, users hesitate — or worse, bounce.",
      how: [
        "Be specific. Use action-oriented labels like 'Download Resume' or 'Create Account.'",
        " Make CTAs visually distinct. Use size, contrast, and placement.",
        "Limit choices. Too many CTAs compete with each other — use one primary CTA per screen when possible."
      ]
    },

    {
      what: "A design looks great on desktop but breaks completely on smaller screens",
      why: "Most users access websites and apps from mobile devices",
      how: [
        "Design mobile-first. Start small and scale up.",
        "Use flexible grids and scalable elements. Avoid fixed-width components.",
        "Test on real devices. Emulators help, but nothing beats hands-on testing."
      ]
    },
    {
      what: "Everything bounces, fades, spins, or slides. It looks cool… once.",
      why: " Excessive motion distracts users and slows performance",
      how: [
        "Use microinteractions wisely. Hover effects, button clicks, and page transitions should feel natural.",
        "Keep it fast. Aim for animations under 300ms.",
        " Avoid unnecessary flourish. Motion should support the action, not become the action."
      ]
    },
    {
      what: "Designs are created in a vacuum — based on personal taste, not actual user needs.",
      why: " What you think works may confuse real users. Without feedback, mistakes go unnoticed.",
      how: [
        "Run simple tests. Ask 3–5 people to interact with your design while narrating their thoughts.",
        "Use prototyping tools. Figma, Maze, or Marvel let you simulate real flows.",
        "Iterate. Test, learn, refine, repeat."
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden" ref={containerRef}>
      <div className="mx-auto px-4 md:px-8 py-8 lg:py-20" ref={contentRef}>
        {/* Main Grid Layout */}
        <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* Left Sidebar - Table of Contents - PINNED */}
          <div className="lg:col-span-2 order-1 lg:order-1 flex justify-start lg:block">
            <motion.div
              ref={leftSidebarRef}
              className={`bg-white py-6 lg:p-4 w-full max-w-[300px] ${isPinned ? "lg:fixed" : "lg:sticky lg:top-14"
                }`}
              style={isPinned ? leftSidebarStyle : {}}
              animate={{
                opacity: shouldShowSidebars ? 1 : 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="relative mb-6 inline-block">
                <h3 className="font-bold text-lg font-inter uppercase inline-block">
                  In This Article
                </h3>

                {/* Progress Bar */}
                <div className="relative h-2 bg-gray-200 mt-2 mb-4 overflow-hidden w-full border-l-[20px] border-[#865B3B]">
                  <motion.div
                    style={{ scaleX: smoothProgress }}
                    className="absolute left-0 top-0 h-full bg-[#005FA4] origin-left"
                  />
                </div>
              </div>

              <ul>
                {sections.map((title, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(index)}
                      className="text-[#005FA4] font-inter text-[14px] lg:text-[16px] leading-[32px] font-bold hover:underline text-left w-full py-1 px-2 rounded hover:bg-blue-50 transition-colors"
                    >
                      {index + 1}. {title}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Main Content - Increased width */}
          <main className="lg:col-span-8 order-2 lg:order-2 lg:mt-8">
            <div className="space-y-12 max-w-[1200px] mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-[16px] lg:text-[20px] font-inter font-semibold text-[#000000] leading-[26px] md:leading-[30px] lg:leading-[36px]">
                  User Interface (UI) design is a critical part of creating digital products that feel intuitive, look polished, and keep users engaged. However, beginners often fall into some common traps that can hinder usability and overall user satisfaction. If you're new to UI design, learning to spot and fix these mistakes early can save you time and elevate your work dramatically.
                </p>
                <p className="text-[16px] lg:text-[20px] font-inter font-semibold leading-[26px] md:leading-[30px] lg:leading-[36px] mt-6 md:mt-8 lg:mt-10">
                  Here are the top 10 UI mistakes beginners make — and how to avoid them.
                </p>
              </div>

              {sections.map((title, index) => (
                <section
                  key={index}
                  id={`section-${index}`}
                  className="scroll-mt-32 space-y-8"
                >
                  <h3 className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold text-black font-inter leading-tight">
                    {index + 1}. {title}
                  </h3>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-[#000000] text-[16px] lg:text-[20px] font-inter font-semibold lg:leading-[36px]">
                        <span className="font-bold text-[#005FA4]">What Happens: </span>
                        {sectionContents[index]?.what}
                      </p>
                      <p className="text-[#000000] text-[16px] lg:text-[20px] font-inter font-semibold lg:leading-[36px]">
                        <span className="font-bold text-[#005FA4]">Why It's a Problem: </span>
                        {sectionContents[index]?.why}
                      </p>
                    </div>

                    <div className='mt-6'>
                      <h4 className="text-xl lg:text-2xl font-bold text-black mb-4">How to Fix It:</h4>
                      <ul className="space-y-4 ml-4">
                        {sectionContents[index]?.how.map((item, i) => (
                          <li key={i} className="flex items-start text-[16px] lg:text-[20px] lg:leading-[36px] font-inter font-semibold">
                            <span className="text-[#005FA4] mr-3 mt-1.5 font-bold">•</span>
                            <span className="text-[#000000]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </main>

          {/* Right Sidebar - Suggested Articles - PINNED */}
          <div className="lg:col-span-2 order-3 lg:order-3">
            <motion.div
              ref={rightSidebarRef}
              className={`space-y-8 ${isPinned ? 'lg:fixed' : 'lg:sticky lg:top-14'
                }`}
              style={isPinned ? rightSidebarStyle : {}}
              animate={{
                opacity: shouldShowSidebars ? 1 : 1,
                y: 0
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <div className="bg-white py-6">
                <img
                  src="/images/blog/blog-2.png"
                  alt="Digital Marketing Strategies"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2">
                  <p className="text-lg uppercase text-[#454545] font-anton tracking-wide leading-tight">
                    Digital Marketing Strategies
                  </p>
                  <p className="text-lg uppercase text-[#454545] font-anton tracking-wide leading-tight">
                    That Work For Design Startups
                  </p>
                </div>
              </div>

              <div className="bg-white py-6">
                <img
                  src="/images/blog/blog-3.png"
                  alt="Cloud Hosting Comparison"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2">
                  <p className="text-lg uppercase text-[#454545] font-anton tracking-wide leading-tight">
                    Cloud Hosting vs Traditional
                  </p>
                  <p className="text-lg uppercase text-[#454545] font-anton tracking-wide leading-tight">
                    Hosting: What Should You Choose?
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div>
        <div className="bg-[#252628] h-[50vh] md:h-[100vh] w-full pt-12 pb-32 relative overflow-hidden">
          <div className="max-w-8xl mx-auto px-6 flex items-center justify-center mt-10">
            <div className="text-xl md:text-[70px] cta-heading font-black text-black font-inter text-center">
              <p className="md:ml-[350px]"><span className="text-[#168372]">Don't stop</span> now</p>
              <p className="md:mt-[-25px]"> <span className="text-[#168372]">There's more</span> where that came from.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:-mt-150 relative z-10 md:h-150">
          <div className="card-section max-w-8xl px-2 flex flex-col md:flex-row justify-center gap-16">
            {/* Card 1 */}
            <div className="bg-white card md:rounded-4xl rounded-2xl shadow-md overflow-hidden w-full md:w-[700px] h-[750px]">
              <img
                src="/images/blog/card2.png"
                alt="Card 1"
                className="w-full h-100 md:px-4 md:py-4 px-1.5 py-1.5 md:rounded-4xl rounded-2xl object-cover card-img"
              />
              <div className="md:py-5 py-2 md:ml-10 ml-5">
                <h3 className="text-[40px] font-semibold mb-2 font-inter leading-snug">
                  From Clunky to Clean: <br />A Real-World UI Makeover <br />Case Study
                </h3>
                <p className="text-[#009a7b] text-[24px] md:mt-14 mt-5 font-medium">Read More &gt;</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white card md:rounded-4xl rounded-2xl shadow-md overflow-hidden w-full md:w-[700px] md:h-[750px]">
              <img
                src="/images/blog/card1.png"
                alt="Card 2"
                className="w-full h-100 md:px-4 md:py-4 px-1.5 py-1.5 md:rounded-4xl rounded-2xl object-cover card-img"
              />
              <div className="md:py-5 py-2 md:ml-10 ml-5">
                <h3 className="text-[40px] font-semibold font-inter mb-2 leading-snug">
                  UI/UX Interview Questions <br />(and How to Answer Them)
                </h3>
                <p className="text-[#009a7b] md:mt-27 mt-8 text-[24px] font-medium">Read More &gt;</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0E2B32] text-white md:py-12 md:mt-60 mt-25 md:h-[60vh] h-[100%] md:ml-10 md:mr-10 ml-2 mr-2 mb-15 md:rounded-4xl rounded-2xl">
          <div className="max-w-8xl mx-auto md:px-6">
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Left text */}
              <div className="w-full md:w-2/5 feed">
                <h3 className="md:text-[60px] text-[23px] font-bold leading-wide md:mt-25 md:ml-20 ml-7 mt-8 font-inter">
                  <span className="text-[#50BD8A]">Was this helpful?</span>
                  Confusing?
                  <span className="text-[#50BD8A]">Brilliant?</span>
                  Let me know!
                </h3>
              </div>

              {/* Right form */}
              <div className="w-[100%] md:w-[900px] font-inter font-bold md:text-[25px] text-[12px] overflow-hidden">
                <form className="space-y-4">
                  <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6 px-8 md:px-0">
                    <div className="flex flex-col">
                      <label className="mb-1">Nick Name</label>
                      <input
                        type="text"
                        className="p-2 rounded-lg bg-[#E5FFF3] text-black md:w-[340px] w-[100%] h-[40px] md:h-[50px]"
                      />
                    </div>
                    <div className="flex flex-col md:ml-[-100px]">
                      <label className="mb-1">Email</label>
                      <input
                        type="email"
                        className="p-2 rounded-lg bg-[#E5FFF3] text-black md:w-[535px] w-[100%] h-[40px] md:h-[50px]"
                      />
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div className="flex flex-col px-8 md:px-0">
                    <label className="mb-1">Suggestions</label>
                    <textarea
                      rows={4}
                      className="md:w-full w-[100%] md:h-[200px] h-[140px] p-2 rounded-lg bg-[#E5FFF3] text-black"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-[#E5FFF3] text-[#0E2B32] md:px-20 px-12 py-3 rounded-4xl hover:bg-[#a6d1c2] transition font-bold mx-auto block md:ml-70 md:mt-10 mb-5"
                  >
                    SEND
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}