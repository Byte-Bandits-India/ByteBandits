import Image from "next/image";

const AboutSection = () => {
  // Data for the items
  const services = [
    {
      title: "Smart Technology Solutions",
      image: "/icons/aboutus/Smart_technology.png",
    },
    {
      title: "Creative & Strategic Design",
      image: "/icons/aboutus/Creative_design.png",
    },
    {
      title: "Business Growth Services",
      image: "/icons/aboutus/Buisness_growth.png",
    },
    {
      title: "24/7 Support & Security",
      image: "/icons/aboutus/24_hrs.png",
    },
  ];

  return (
    <section className="about-section px-6 mt-[25lvh] md:mt-2 lg:mt-[10lvh] xl:mt-[20lvh] max-w-[1420px] mx-auto w-full" id="about-section">
      <p className="section-label text-left mb-10 md:text-[14px] text-[12px] text-[#818181] font-normal year pt-10">ABOUT US</p>
      <div className="about-content flex flex-col lg:flex-row items-start gap-10 lg:gap-[242px] ">
        {/* Left Column: Title and Description */}
        <div className="flex-1" data-aos="fade-up" data-aos-delay="10">
          <h1 className="about-title text-[30px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.3] font-[anton]">
            LET&apos;S KNOW <span className="highlight text-[#F9373A]">ABOUT</span> OUR COMPANY
          </h1>

          <div className="about-description mt-6 text-[16px] sm:text-[18px] max-w-[600px] text-[#333333]" data-aos="fade-up" data-aos-delay="20">
            <p className="font-medium leading-6">
              We’re more than a service provider, we’re your digital <span className="text-[#F9373A]">partner</span>. We help businesses of every size grow smarter in the digital age by blending creativity with technology.
            </p>
          </div>

          <div className="about-text mt-6 text-[16px] leading-relaxed text-[#333333]" data-aos="fade-up" data-aos-delay="30">
            <p className="font-medium leading-6">
              From <span className="text-[#F9373A]">app and web development</span> to branding, strategy, cloud scaling, and digital marketing, everything we build is designed to deliver real, measurable <span className="text-[#F9373A]">value.</span> We don’t just complete projects, we create solutions that last, <span className="text-[#F9373A]">scale</span>, and drive <span className="text-[#F9373A]">growth.</span> Our purpose is simple: to transform bold ideas into digital <span className="text-[#F9373A]">success stories.</span>
            </p>
          </div>
        </div>

        {/* Right Column: Services List */}
        <div className="flex-1 flex flex-col gap-4 mt-10 lg:mt-0">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Image with red background */}
              <div className="bg-[#F9373A] h-[60px] w-[60px] rounded-[5px] flex items-center justify-center overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] object-cover"
                />
              </div>
              {/* Service title */}
              <h2 className="text-black text-[16px] lg:text-[30px] font-semibold">{service.title}</h2>
            </div>
          ))}

          <div className="mt-10">
            <div className="bg-[#D7D7D7] text-[14px] w-full px-4 py-4 rounded-[5px] border-l-4 border-[#F9373A]">
              <p>
                We don’t just build technology <br />
                We build possibilities that grow with you.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="triangle-section flex w-full max-w-[1420px] mx-auto flex-col md:flex-row justify-center items-center gap-10 md:gap-10 lg:gap-[63px] mt-[150px]">
        {[
          {
            img: "/images/Expert team.png",
            title: "EXPERT TEAM",
            desc: "Our team consists of experienced professionals who work with passion, delivering high-quality projects.",
          },
          {
            img: "/images/Innovative solutions.png",
            title: "INNOVATIVE SOLUTIONS",
            desc: "We offer unique and creative approaches that help your business stand out in the market and achieve success.",
          },
          {
            img: "/images/Client focus.png",
            title: "CLIENT FOCUS",
            desc: "We prioritize client needs, deeply understanding them to create tailored solutions for maximum results.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="triangle-card text-center max-w-[300px] flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={120}
              height={120}
              className="w-[120px] h-[120px] lg:h-[150px] lg:w-[150px] object-contain mb-4"
            />
            <p className="triangle-title text-[24px] lg:text-[36px] font-[anton] mb-2">{item.title}</p>
            <p className="triangle-desc text-[16px] lg:text-[20px] text-[#333333]">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AboutSection;