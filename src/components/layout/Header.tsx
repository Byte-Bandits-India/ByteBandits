"use client"
import StaggeredMenu from '../layout/StaggeredMenu';
import { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
        { label: 'Services', ariaLabel: 'View our services', link: '/services' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' },
        { label: 'FaceBook', link: 'https://FaceBook.com' }
    ];

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
        console.log('Menu opened');
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
        console.log('Menu closed');
    };

    return (
        <div style={{
            height: isMenuOpen ? '100dvh' : 'auto',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000
        }}>
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
                onMenuOpen={handleMenuOpen}
                onMenuClose={handleMenuClose}
            />
        </div>
    )
}