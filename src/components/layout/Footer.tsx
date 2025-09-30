import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
    const socialMedia = [
        { name: 'Facebook', href: 'https://facebook.com', icon: '/icons/social_media/Facebook.png' },
        { name: 'Twitter', href: 'https://twitter.com', icon: '/icons/social_media/X.png' },
        { name: 'Instagram', href: 'https://instagram.com', icon: '/icons/social_media/Instagram.png' },
        { name: 'LinkedIn', href: 'https://linkedin.com', icon: '/icons/social_media/Linkdin.png' },
        { name: 'GitHub', href: 'https://GitHub.com', icon: '/icons/social_media/Github.png' },
        { name: 'Medium', href: 'https://medium.com', icon: '/icons/social_media/Medium.png' },
    ];

    return (
        <footer className="bg-[#252628] px-6 py-8 text-white overflow-x-hidden">
            {/* Mobile View */}
            <div className="md:hidden">
                {/* Logo */}
                <div>
                    <Image src="/logo_red.png" alt="Logo" width={156} height={61} />
                    <p className="text-[14px] text-left mt-[38px] font-normal tracking-[-0.02em]">
                        We are a passionate team of tech innovators dedicated to crafting smart, scalable, and user-centric digital solutions. From custom software and mobile apps to eCommerce platforms, digital marketing, branding, and cloud services.
                    </p>
                </div>

                {/* Social Media */}
                <div className="flex gap-4 my-8">
                    {socialMedia.map((social) => (
                        <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                            <Image
                                src={social.icon}
                                alt={social.name}
                                width={24}
                                height={24}
                            />
                        </Link>
                    ))}
                </div>

                {/* Our Services */}
                <div className="mt-8">
                    <h2 className="text-[18px] font-semibold mb-6">Our Services</h2>
                    <ul className="text-[12px] pl-2 list-none space-y-2">
                        {[
                            { name: "Website and Application Designing", href: "/services/website-design" },
                            { name: "Website and Application Development", href: "/services/website-development" },
                            { name: "Domain and Web Hosting", href: "/services/domain-hosting" },
                            { name: "Digital Marketing", href: "/services/digital-marketing" },
                            { name: "SEO Optimizations and Social Media", href: "/services/seo-social" },
                            { name: "Cloud Solutions and DevOps Automation", href: "/services/cloud-devops" },
                        ].map((service) => (
                            <li key={service.name} className="flex items-center gap-2">
                                <IoIosArrowForward size={12} className="shrink-0" />
                                <Link href={service.href} className="hover:underline">{service.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links and Office Locations */}
                <div className="mt-8 grid grid-cols-2 text-left">
                    {/* Useful Links */}
                    <div className="text-left justify-self-start">
                        <h2 className="text-[16px] font-semibold mb-[25px]">Useful Links</h2>
                        <div className="space-y-4 pl-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Contact Us", href: "/contact" },
                                { name: "FAQ", href: "/faq" },
                                { name: "Services", href: "/services" },
                                { name: "About Us", href: "/about" },
                                { name: "Blogs", href: "/blogs" },
                            ].map((link) => (
                                <div key={link.name} className="flex items-center gap-2">
                                    <IoIosArrowForward size={12} className="shrink-0" />
                                    <Link href={link.href} className="text-[12px] hover:underline">{link.name}</Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Office Locations */}
                    <div>
                        <h2 className="text-[16px] font-semibold mb-6">Office Locations</h2>
                        <div>
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
            </div>

            {/* Desktop View */}
            <div className="hidden md:block max-w-[1420px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* 1 - Logo + About + Social Media */}
                    <div>
                        <Image src="/logo_red.png" alt="Logo" width={156} height={61} />
                        <p className="mt-4 text-[14px]">
                            We are a passionate team of tech innovators dedicated to crafting smart, scalable, and user-centric digital solutions. From custom software and mobile apps to eCommerce platforms, digital marketing, branding, and cloud services.
                        </p>
                        <div className="flex gap-4 mt-4">
                            {socialMedia.map((social) => (
                                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                        className="md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 2 - Our Services */}
                    <div>
                        <h2 className="text-[18px] font-semibold mb-4 md:mb-6">Our Services</h2>
                        <ul className="space-y-2 text-[12px]">
                            {[
                                { name: "Website and Application Designing", href: "/services/website-design" },
                                { name: "Website and Application Development", href: "/services/website-development" },
                                { name: "Domain and Web Hosting", href: "/services/domain-hosting" },
                                { name: "Digital Marketing", href: "/services/digital-marketing" },
                                { name: "SEO Optimizations and Social Media", href: "/services/seo-social" },
                                { name: "Cloud Solutions and DevOps Automation", href: "/services/cloud-devops" },
                            ].map((service) => (
                                <li key={service.name} className="flex items-center gap-2">
                                    <IoIosArrowForward size={12} />
                                    <Link href={service.href} className="hover:underline">{service.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3 - Useful Links */}
                    <div>
                        <h2 className="text-[16px] font-semibold mb-4 md:mb-6">Useful Links</h2>
                        <ul className="space-y-2 text-[12px]">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Contact Us", href: "/contact" },
                                { name: "FAQ", href: "/faq" },
                                { name: "Services", href: "/services" },
                                { name: "About Us", href: "/about" },
                                { name: "Blogs", href: "/blogs" },
                            ].map((link) => (
                                <li key={link.name} className="flex items-center gap-2">
                                    <IoIosArrowForward size={12} />
                                    <Link href={link.href} className="hover:underline">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4 - Office Locations */}
                    <div>
                        <h2 className="text-[16px] font-semibold mb-4 md:mb-6">Office Locations</h2>
                        <div className="text-[12px] space-y-4">
                            <div>
                                <h3 className="font-semibold">Main Office</h3>
                                <p className="whitespace-pre-line">
                                    Plot no.3a, door no.1/1033,
                                    Kumudham Nagar Extension,
                                    Mugalivakkam,
                                    Chennai -600125
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Branch Office</h3>
                                <p className="whitespace-pre-line">
                                    12b, 3, North Eda Street,
                                    Bhima Nagar,
                                    Sangillyandapuram,
                                    Tiruchirappalli-620001
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col mt-8 gap-4">
                <div className="bg-[#A31621] w-full h-[71px] flex items-center px-5">
                    <Image src='/icons/Whatsapp.png' alt="WhatsApp icon" width={28} height={28} className="mr-4" />
                    <div>
                        <h1 className="text-white text-[20px]">+91 89400 11098</h1>
                        <p className="text-[10px]">Message Us Now</p>
                    </div>
                </div>
                <div className="bg-[#161414] w-full h-[71px] flex items-center px-5">
                    <Image src='/icons/White_mail.png' alt="Mail icon" width={28} height={28} className="mr-4" />
                    <div>
                        <h1 className="text-white text-[16px]">support@bytebandits.in</h1>
                        <p className="text-[10px]">Drop Us a Line</p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <hr className="w-full border-t border-[#FFFFFF] mt-8" />
            <p className="text-[12px] mt-6 text-center">
                Copyright © Byte Bandits. All Rights Reserved.
            </p>
        </footer>
    );
}