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
    <section className="about-section sm:py-20 px-6" id="about-section">
      <p className="section-label text-left mb-10 md:text-[14px] text-[12px] text-[#818181] font-normal year pt-10">ABOUT US</p>
      <div className="about-content flex flex-col lg:flex-row  items-start">
        <div className="about-title flex-1 text-[30px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.3] font-[anton] title
                 " data-aos="fade-up"
          data-aos-delay="10">
          LETS KNOW <span className="highlight text-[#F9373A]">ABOUT</span> OUR COMPANY
          <div className="about-description text-[16px] sm:text-[18px] mt-[50px] max-w-[400px]  text-[#333333]" data-aos="fade-up"
            data-aos-delay="10">
            <p className="about md:mt-25 text-[16px] font-medium leading-6 text-[#333333]">
              we’re more than a service provider, we’re your digital <span className="text-[#F9373A]">partner</span>. We help businesses of every size grow smarter in the digital age by blending creativity with technology.
            </p>
          </div>
        </div>
        <div className="about-text flex-1 text-[16px] leading-relaxed text-[#333333] mt-6 tracking-wide lg:mt-0 ">
          <p className="about text-[16px] font-medium leading-6 text-[#333333]" data-aos="fade-up"
            data-aos-delay="10">
            From <span className="text-[#F9373A]">app and web developmen</span> to branding, strategy, cloud scaling, and digital marketing, everything we build is designed to deliver real, measurable <span className="text-[#F9373A]">value.</span> We don’t just complete projects, we create solutions that last, <span className="text-[#F9373A]">scale</span>, and drive <span className="text-[#F9373A]">growth.</span> Our purpose is simple which is to transform bold ideas into digital <span className="text-[#F9373A]">success stories.</span></p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-[62px]">
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

            {/* Text next to image */}
            <h2 className="text-black text-[16px] font-semibold">{service.title}</h2>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="bg-[#D7D7D7] text-[14px] w-full px-4 py-4 rounded-[5px] border-l-4 border-[#F9373A]">
          <p>
            We don’t just build technology <br />
            We build possibilities that grow with you.
          </p>
        </div>
      </div>

      <div className="triangle-section flex justify-center gap-[100px] mt-[150px] triangle">
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
          <div key={i} className="triangle-card text-center max-w-[300px]" data-aos="fade-up"
            data-aos-delay="5">
            <Image
              src={item.img}
              alt={item.title}
              width={i === 0 ? 142 : 108}
              height={i === 0 ? 142 : 108}
              className={`${i === 0 ? "w-[142px]" : "w-[108px]"} mx-auto`}
            />
            <p className={`${i === 0 ? "mt-2" : "mt-10.5"} triangle-title text-[24px] font-[anton] " `} data-aos="fade-up"
              data-aos-delay="5">{item.title}</p>
            <p className="triangle-desc text-[16px] mt-6 about " data-aos="fade-up"
              data-aos-delay="5">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;