
import Image from "next/image";

export default function TechStackSection() {
  const techStackCol1 = [
    {
      name: "React.Js",
      desc: "Building dynamic, responsive user interfaces",
      icon: "/icons/react.png",
    },
    {
      name: "TypeScript",
      desc: "Powering fast, scalable server-side applications",
      icon: "/icons/ts.png",
    },
    {
      name: "Ant Design",
      desc: "Building dynamic, responsive user interfaces",
      icon: "/icons/ant.png",
    },
    {
      name: "Material UI",
      desc: "Powering fast, scalable server-side applications",
      icon: "/icons/ui.png",
    },
  ];

  const techStackCol2 = [
    {
      name: "Nextjs",
      desc: "Building dynamic, responsive user interfaces",
      icon: "/icons/nextjs.png",
    },
    {
      name: "Tailwind",
      desc: "Powering fast, scalable server-side applications",
      icon: "/icons/tailwind.png",
    },
    {
      name: "Bootstrap",
      desc: "Building dynamic, responsive user interfaces",
      icon: "/icons/bootstrap.png",
    },
    {
      name: "Node.Js",
      desc: "Powering fast, scalable server-side applications",
      icon: "/icons/nodejs.png",
    },
    {
      name: "Flask",
      desc: "Building dynamic, responsive user interfaces",
      icon: "/icons/flask.png",
    },
  ];

  return (
    <section className="w-full bg-white md:py-20">
      <div className="mx-4 bg-[#F1EAEA]  rounded-2xl px-6 2xl:px-12 py-16 2xl:py-24">
        <div className="max-w-[1440px] mx-auto">
          {/* Top Heading */}
          <p className="text-[#A04444] text-sm 2xl:text-[20px] font-semibold tracking-wide uppercase mb-6 2xl:mb-10 text-center lg:text-left">
            Web Development
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            {/* ===== Left Content ===== */}
            <div className="w-full lg:w-auto 2xl:max-w-[1000px] lg:pt-80 text-center lg:text-left">
              <h2 className="text-3xl xl:text-[40px] 2xl:text-[50px] tracking-tight font-inter font-medium leading-tight">
                We Use Industry-Leading <br /> <span>Tech To Build Your</span> <br /> Advantage
              </h2>
            </div>

            {/* ===== Right Grid (Staggered Columns) ===== */}
            <div className="flex gap-6 w-full 2xl:w-[850px] justify-center flex-wrap md:flex-nowrap">
              {/* ===== Column 1 ===== */}
              <div className="flex flex-col gap-6 mt-0 md:mt-28">
                {techStackCol1.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white w-full h-[100px] md:w-[340px] md:h-[110px] lg:w-[300px] 2xl:w-[400px] 2xl:h-[130px] rounded-2xl shadow-md p-5 hover:shadow-xl transition-all"
                  >
                    <div className="text-left pr-3">
                      <h3 className="font-semibold text-[16px] md:text-[18px] 2xl:text-[22px]">
                        {tech.name}
                      </h3>
                      <p className="text-xs md:text-sm text-[#666] font-light max-w-[200px] mt-2 leading-snug">
                        {tech.desc}
                      </p>
                    </div>
                    <div className="relative w-[40px] h-[40px] md:w-[60px] md:h-[60px] 2xl:w-[80px] 2xl:h-[80px] flex-shrink-0">
                      <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
                    </div>
                  </div>
                ))}
              </div>

              {/* ===== Column 2 ===== */}
              <div className="flex flex-col gap-6 md:mt-12">
                {techStackCol2.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white w-full h-[100px] md:w-[340px] md:h-[110px] lg:w-[300px] 2xl:w-[400px] 2xl:h-[130px] rounded-2xl shadow-md p-5 hover:shadow-xl transition-all"
                  >
                    <div className="text-left pr-3">
                      <h3 className="font-semibold text-[16px] md:text-[18px] 2xl:text-[22px]">
                        {tech.name}
                      </h3>
                      <p className="text-xs md:text-sm text-[#666] font-light max-w-[200px] mt-2 leading-snug">
                        {tech.desc}
                      </p>
                    </div>
                    <div className="relative w-[40px] h-[40px] md:w-[60px] md:h-[60px] 2xl:w-[80px] 2xl:h-[80px] flex-shrink-0">
                      <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Footer CTA ===== */}
      <div className="flex md:max-w-[600px] mx-auto lg:max-w-full flex-col items-center justify-center text-left my-6 md:my-8 lg:mt-[100px] px-4">
        <h2 className="text-[30px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-center leading-[1.3] text-[#333333] font-anton mt-5 lg:mt-0">Looking for a <br className="hidden md:block lg:hidden" /> technology partner ?</h2>
        <h3 className="text-[42px] sm:text-[clamp(40px,7vw,60px)] leading-[1.1] 
bg-gradient-to-b from-[#9E1520] to-[#630C13] bg-clip-text text-transparent 
font-anton mt-5 lg:mt-0">
          Let’s talk.
        </h3>
      </div>
    </section>



  );
}
