import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
    const cardData = [
        {
            img: "/images/Frame.png",
            title: "How to Analyze Your Best Pages for SEO Performance",
            desc: "It is a long established fact that a reader ..",
            link: "/",
        },
        {
            img: "/images/Frame1.png",
            title: "Understanding Backlinks for SEO Growth",
            desc: "Discover how backlinks influence search rankings ..",
            link: "/",
        },
        {
            img: "/images/Frame.png",
            title: "Keyword Research Simplified",
            desc: "Learn the basics of keyword research for better visibility ..",
            link: "/",
        },
    ];

    return (
        <div>
            <div className="py-16 px-5 sm:px-10 md:px-20 lg:px-6 text-[#333333] w-full max-w-[1420px] mx-auto">
                {/* Section Heading */}
                <p
                    className="section-label text-xs sm:text-sm uppercase tracking-widest text-[#818181] mb-[32px] inter"
                    data-aos="fade-up"
                    data-aos-delay="5"
                >
                    blogs
                </p>
                <h2
                    className="section-title text-[30px] sm:text-[40px] md:text-[60px] uppercase leading-tight mb-10 text-[#333] font-[anton]"
                    data-aos="fade-up"
                    data-aos-delay="5"
                >
                    OUR RECENT <span className="text-[#F9373A]">ARTICLE</span>
                </h2>

                {/* Blog Cards */}
                <div className="flex flex-wrap gap-6 justify-center">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#1B1B1C] w-full md:w-[400px] h-[170px] lg:h-[234px] rounded-[5px] flex items-start gap-4 md:gap-6"
                        >
                            {/* Left: Image */}
                            <div className="h-full flex-shrink-0">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    width={150}
                                    height={200}
                                    className="h-full w-auto object-cover"
                                />
                            </div>

                            {/* Right: Text */}
                            <div className="flex flex-col justify-between text-left py-3 pr-4 lg:py-5 lg:pr-6 space-y-2">
                                <h1 className="text-[18px] md:text-[20px] font-medium text-white leading-snug">
                                    {card.title}
                                </h1>
                                <p className="text-[#989898] text-[12px] md:text-[14px] mt-1">
                                    {card.desc}
                                </p>
                                <Link
                                    href={card.link}
                                    className="text-[12px] md:text-[14px] font-medium underline text-white mt-2"
                                >
                                    Read more ..
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
