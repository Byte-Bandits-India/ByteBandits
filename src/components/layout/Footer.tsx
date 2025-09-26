import Link from "next/link";
import Image from "next/image";

export default function Home() {
    const socialMedia = [
        { name: 'Facebook', href: 'https://facebook.com', icon: '/images/fb.png', width: 24, height: 24 },
        { name: 'Twitter', href: 'https://twitter.com', icon: '/images/x.png', width: 24, height: 24 },
        { name: 'Instagram', href: 'https://instagram.com', icon: '/images/insta.png', width: 24, height: 24 },
        { name: 'LinkedIn', href: 'https://linkedin.com', icon: '/images/linkdin.png', width: 24, height: 24 },
        { name: 'GitHub', href: 'https://GitHub.com', icon: '/images/git.png', width: 24, height: 24 },
        { name: 'Medium', href: 'https://medium.com', icon: '/images/medium.png', width: 24, height: 24 },
    ];

    return (
        <div className="overflow-x-hidden px-6 bg-[#252628] py-8">
            {/* Logo */}
            <div>
                <Image src="/Logo.png" alt="Logo" width={156} height={50} />
                <p className="text-[#FFFFFF] text-[14px] text-left mt-[42px]">
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
                <h2 className="text-[18px] font-semibold mb-8">Our Services</h2>
                <ul className="text-[12px] list-none space-y-2">
                    <li><Link href="/services/website-design" className="hover:underline">Website and Application Designing</Link></li>
                    <li><Link href="/services/website-development" className="hover:underline">Website and Application Development</Link></li>
                    <li><Link href="/services/domain-hosting" className="hover:underline">Domain and Web Hosting</Link></li>
                    <li><Link href="/services/digital-marketing" className="hover:underline">Digital Marketing</Link></li>
                    <li><Link href="/services/seo-social" className="hover:underline">SEO Optimizations and Social Media</Link></li>
                    <li><Link href="/services/cloud-devops" className="hover:underline">Cloud Solutions and DevOps Automation</Link></li>
                </ul>
            </div>

            {/* Offices */}
            <h2 className="text-[18px] font-semibold text-[#FFFFFF] mt-8">Office Locations</h2>
            <div className="flex justify-end text-[#FFFFFF] mt-[25px]">
                <div className="w-1/2 pr-4">
                    <h3 className="text-[12px] font-semibold mb-3">Main Office</h3>
                    <p className="text-[12px] pl-2 whitespace-pre-line">
                        Plot no.3a, door no.1/1033,
                        Kumudham Nagar Extension,
                        Mugalivakkam,
                        Chennai -600125
                    </p>
                </div>
                <div className="w-1/2 pl-4">
                    <h3 className="text-[12px] font-semibold mb-3">Branch Office</h3>
                    <p className="text-[12px] pl-2 whitespace-pre-line">
                        12b, 3, North Eda Street,
                        Bhima Nagar,
                        Sangillyandapuram,
                        Tiruchirappalli-620001
                    </p>
                </div>
            </div>

            {/* Useful Links */}
            <h2 className="text-[18px] font-semibold text-[#FFFFFF] mb-[25px] mt-8">Useful Links</h2>
            <div className="grid grid-cols-2 gap-x-20 gap-y-6 text-[#FFFFFF]">
                <div className="flex flex-col space-y-2">
                    <Link href="/" className="text-[12px] hover:underline">Home</Link>
                    <Link href="/contact" className="text-[12px] hover:underline">Contact Us</Link>
                    <Link href="/faq" className="text-[12px] hover:underline">FAQ</Link>
                </div>
                <div className="flex flex-col">
                    <Link href="/services" className="text-[12px] hover:underline">Services</Link>
                    <Link href="/about" className="text-[12px] hover:underline">About Us</Link>
                    <Link href="/blogs" className="text-[12px] hover:underline">Blogs</Link>
                </div>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col mt-10">
                <div className="bg-[#A31621] w-full h-[100px] flex items-center px-5">
                    <Image src='/images/whatsapp.png' alt="WhatsApp icon" width={28} height={28} className="mr-4" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-white text-[20px]">+91 89400 11098</h1>
                        <p className="text-[10px] text-white">Message Us Now</p>
                    </div>
                </div>
                <div className="bg-[#161414] w-full h-[100px] flex items-center px-5">
                    <Image src='/images/mail_white.png' alt="Mail icon" width={28} height={28} className="mr-4" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-white text-[20px]">support@bytebandits.in</h1>
                        <p className="text-[10px] text-white">Drop Us a Line</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <p className="text-[#FFFFFF] text-[12px] my-8 text-center">
                Copyright © Byte Bandits. All Rights Reserved.
            </p>
        </div>
    );
}
