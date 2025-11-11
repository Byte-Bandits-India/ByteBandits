"use client";
import StaggeredMenu from '../layout/StaggeredMenu';

export const Header = () => {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
        { label: 'Services', ariaLabel: 'View our services', link: '/service' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com/Byte-Bandits-India' },
        { label: 'LinkedIn', link: 'https://www.linkedin.com/company/bytebanditsindia/' },
        { label: 'Facebook', link: 'https://www.facebook.com/bytebanditsindia' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full bg-transparent z-50 h-auto">
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#fff"
                openMenuButtonColor="#000"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                logoUrl="/header.png"
                accentColor="#ff6b6b"
                isFixed={true}
            />
        </div>
    );
};
