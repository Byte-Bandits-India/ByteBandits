import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
    const socialMedia = [
        { name: 'Facebook', href: 'https://facebook.com', icon: '/icons/social_media/Facebook.png', width: 24, height: 24 },
        { name: 'Twitter', href: 'https://twitter.com', icon: '/icons/social_media/X.png', width: 24, height: 24 },
        { name: 'Instagram', href: 'https://instagram.com', icon: '/icons/social_media/Instagram.png', width: 24, height: 24 },
        { name: 'LinkedIn', href: 'https://linkedin.com', icon: '/icons/social_media/Linkdin.png', width: 24, height: 24 },
        { name: 'GitHub', href: 'https://GitHub.com', icon: '/icons/social_media/Github.png', width: 24, height: 24 },
        { name: 'Medium', href: 'https://medium.com', icon: '/icons/social_media/Medium.png', width: 24, height: 24 },
    ];

    return (
        <div className="overflow-x-hidden px-6 bg-[#252628] py-8">
            {/* Logo */}
            <div>
                <Image src="/logo_red.png" alt="Logo" width={156} height={61} />
                <p className="text-[#FFFFFF] text-[14px] text-left mt-[38px] font-normal tracking-[-0.02em] ">
                    We are a passionate team of tech innovators dedicated to crafting smart, scalable, and user-centric digital solutions. From custom software and mobile apps to eCommerce platforms, digital marketing, branding, and cloud services.
                </p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 my-8">
                {socialMedia.map((social) => (
                    <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={social.icon}
                            alt={social.name}
                            width={social.width}
                            height={social.height}
                            className="hover:scale-110 transition-transform"
                        />
                    </Link>
                ))}
            </div>

            {/* Our Services */}
            <div className="mt-8 text-[#FFFFFF]">
                <h2 className="text-[18px] font-semibold mb-6">Our Services</h2>
                <ul className="text-[12px] pl-2 list-none space-y-2">
                    <li className="flex items-center gap-2"><IoIosArrowForward size={12} className="shrink-0" /><Link href="/services/website-design" className="hover:underline">Website and Application Designing</Link></li>
                    <li className="flex items-center gap-2"><IoIosArrowForward size={12} className="shrink-0" /><Link href="/services/website-development" className="hover:underline">Website and Application Development</Link></li>
                    <li className="flex items-center gap-2"><IoIosArrowForward size={12} className="shrink-0" /><Link href="/services/domain-hosting" className="hover:underline">Domain and Web Hosting</Link></li>
                    <li className="flex items-center gap-2"><IoIosArrowForward size={12} className="shrink-0" /><Link href="/services/digital-marketing" className="hover:underline">Digital Marketing</Link></li>
                    <li className="flex items-center gap-2"><IoIosArrowForward size={12} className="shrink-0" /><Link href="/services/seo-social" className="hover:underline">SEO Optimizations and Social Media</Link></li>
                    <li className="flex items-center gap-2"><IoIosArrowForward size={12} className="shrink-0" /><Link href="/services/cloud-devops" className="hover:underline">Cloud Solutions and DevOps Automation</Link></li>
                </ul>
            </div>

            {/* Useful Links (Left) and Offices (Right) */}
            <div className="mt-8 grid grid-cols-2 text-[#FFFFFF] text-left">
                {/* Left: Useful Links */}
                <div className="text-left justify-self-start">
                    <h2 className="text-[16px] font-semibold mb-[25px]">Useful Links</h2>
                    <div className="space-y-4 pl-2">
                        <div className="flex items-center gap-2">
                            <IoIosArrowForward size={12} className="shrink-0" />
                            <Link href="/" className="text-[12px] hover:underline underline">Home</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoIosArrowForward size={12} className="shrink-0" />
                            <Link href="/contact" className="text-[12px] hover:underline underline">Contact Us</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoIosArrowForward size={12} className="shrink-0" />
                            <Link href="/faq" className="text-[12px] hover:underline underline">FAQ</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoIosArrowForward size={12} className="shrink-0" />
                            <Link href="/services" className="text-[12px] hover:underline underline">Services</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoIosArrowForward size={12} className="shrink-0" />
                            <Link href="/about" className="text-[12px] hover:underline underline">About Us</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoIosArrowForward size={12} className="shrink-0" />
                            <Link href="/blogs" className="text-[12px] hover:underline underline">Blogs</Link>
                        </div>
                    </div>
                </div>

                {/* Right: Offices */}
                <div>
                    <h2 className="text-[16px] font-semibold mb-6">Office Locations</h2>
                    <div className="text-[#FFFFFF]">
                        <h3 className="text-[12px] font-semibold mb-1">Main Office</h3>
                        <p className="text-[12px] whitespace-pre-line">
                            Plot no.3a, door no.1/1033,
                            Kumudham Nagar Extension,
                            Mugalivakkam,
                            Chennai -600125
                        </p>
                        <h3 className="text-[12px] font-semibold mb-1 mt-4">Branch Office</h3>
                        <p className="text-[12px] whitespace-pre-line">
                            12b, 3, North Eda Street,
                            Bhima Nagar,
                            Sangillyandapuram,
                            Tiruchirappalli-620001
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col mt-8">
                <div className="bg-[#A31621] w-full h-[71px] flex items-center px-5">
                    <Image src='/icons/Whatsapp.png' alt="WhatsApp icon" width={28} height={28} className="mr-4" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-white text-[20px]">+91 89400 11098</h1>
                        <p className="text-[10px] text-white">Message Us Now</p>
                    </div>
                </div>
                <div className="bg-[#161414] w-full h-[71px] flex items-center px-5">
                    <Image src='/icons/White_mail.png' alt="Mail icon" width={28} height={28} className="mr-4" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-white text-[16px]">support@bytebandits.in</h1>
                        <p className="text-[10px] text-white">Drop Us a Line</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <hr className="w-full border-t border-[#FFFFFF] mt-8" />
            <p className="text-[#FFFFFF] text-[12px] mt-[24px] text-center">
                Copyright © Byte Bandits. All Rights Reserved.
            </p>
        </div>
    );
}
