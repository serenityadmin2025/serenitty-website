"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Advisory', href: '/advisory' },
        { name: 'Advisory+', href: '/advisory-plus' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Compliance', href: '/compliance' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="responsive-container flex h-16 sm:h-20 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)] rounded-sm"
                        aria-label="Serenity Wealth Home"
                    >
                        Serenity<span className="text-[var(--brand-blue)]">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav aria-label="Main Navigation" className="hidden lg:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]/50 rounded-sm px-2 py-1 ${
                                    pathname === link.href
                                        ? 'text-[var(--brand-blue)] bg-blue-50'
                                        : 'text-[var(--foreground)] hover:text-[var(--brand-blue)]'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="ml-4 bg-[var(--foreground)] text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)] rounded touch-target"
                        >
                            Client Login
                        </Link>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        className="lg:hidden touch-target p-2 rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)]"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                    >
                        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black/20 lg:hidden"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Menu */}
            <nav 
                className={`fixed top-16 sm:top-20 left-0 right-0 bottom-0 z-50 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                aria-label="Mobile Navigation"
            >
                <div className="flex flex-col h-full py-8 px-4">
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-lg font-medium py-4 px-4 rounded-lg transition-colors touch-target ${
                                    pathname === link.href
                                        ? 'text-[var(--brand-blue)] bg-blue-50'
                                        : 'text-[var(--foreground)] hover:bg-gray-50 hover:text-[var(--brand-blue)]'
                                }`}
                                onClick={closeMobileMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Mobile CTA */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <Link
                            href="/contact"
                            className="block w-full bg-[var(--foreground)] text-white text-center py-4 px-4 text-lg font-semibold hover:bg-gray-800 transition-colors rounded-lg touch-target"
                            onClick={closeMobileMenu}
                        >
                            Client Login
                        </Link>
                    </div>
                </div>
            </nav>

            <style jsx>{`
                /* Hamburger menu styles */
                .hamburger {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    width: 24px;
                    height: 18px;
                    transition: transform 0.3s ease;
                }

                .hamburger span {
                    display: block;
                    height: 3px;
                    width: 100%;
                    background: var(--foreground);
                    border-radius: 2px;
                    transition: all 0.3s ease;
                    transform-origin: center;
                }

                .hamburger.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }

                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                    transform: scale(0);
                }

                .hamburger.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(5px, -5px);
                }
            `}</style>
        </>
    );
};

export default Navbar;
