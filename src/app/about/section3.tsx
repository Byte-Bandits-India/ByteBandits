
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
    <section className="w-full bg-white py-20">
      {/* ===== Main Tech Section ===== */}
      <div className="mx-4 bg-[#F1EAEA] rounded-2xl px-6 2xl:px-12 py-16 2xl:py-24">
        {/* Top Heading */}
        <p className="text-[#A04444] text-sm 2xl:text-[20px] font-semibold tracking-wide uppercase mb-6 2xl:mb-10">
          Web Development
        </p>

        <div className="flex flex-col md:flex-row justify-between  items-start gap-10">
          {/* ===== Left Content ===== */}
          <div className="w-full 2xl:max-w-[1000px] pt-80">
            <h2 className="text-3xl xl:text-[40px]  2xl:text-[50px] tracking-tight font-inter font-medium leading-tight">
              We Use Industry-Leading <br  /> <span className="">Tech To Build Your </span> <br />Advantage
            </h2>
          </div>

          {/* ===== Right Grid (Staggered Columns) ===== */}
          <div className="flex gap-6 w-full 2xl:w-[850px] justify-center">
            {/* First Column (4 boxes) */}
            <div className="flex flex-col gap-8 mt-0 2xl:mt-16">
              {techStackCol1.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white md:w-[300px] md:h-[100px] 2xl:w-[400px] 2xl:h-[140px]  rounded-xl shadow-sm p-4 hover:shadow-2xl transition-all"
                >
                  <div className="text-left pr-3">
                    <h3 className="font-semibold text-sm md:text-[18px] 2xl:text-[25px]">
                      {tech.name}
                    </h3>
                    <p className="text-xs 2xl:text-sm text-[#858585] font-light max-w-[200px] mt-4 leading-tight">
                      {tech.desc}
                    </p>
                  </div>
                  <div className="relative w-[60px] h-[60px] 2xl:w-[100px] 2xl:h-[100px] flex-shrink-0">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second Column (5 boxes) */}
            <div className="flex flex-col gap-6">
              {techStackCol2.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between md:w-[300px] md:h-[100px] 2xl:w-[400px] 2xl:h-[140px] bg-white rounded-xl shadow-sm p-4 hover:shadow-2xl transition-all"
                >
                  <div className="text-left pr-3">
                    <h3 className="font-semibold text-sm md:text-[18px] 2xl:text-[25px]">
                      {tech.name}
                    </h3>
                    <p className="text-xs 2xl:text-sm text-[#858585] font-light max-w-[200px] mt-4 leading-tight">
                      {tech.desc}
                    </p>
                  </div>
                  <div className="relative w-[60px] h-[60px] 2xl:w-[100px] 2xl:h-[100px] flex-shrink-0">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Footer CTA ===== */}
      <div className="text-center mt-16 2xl:mt-[10%]">
        <h3 className="text-lg md:text-[40px] 2xl:text-[60px] font-anton  uppercase">
          Looking For A Technology Partner ?
        </h3>
        <p className="bg-gradient-to-b from-[#9E1520] to-[#630C13] bg-clip-text py-10 text-transparent text-2xl md:text-[40px] 2xl:text-[60px] font-anton mt-10">
          Let’s Talk.
        </p>
      </div>
    </section>
  );
}
