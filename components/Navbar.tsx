"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Advisory', href: '/advisory' },
        { name: 'Advisory+', href: '/advisory-plus' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Compliance', href: '/compliance' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-20">
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)]"
                    aria-label="Serenity Wealth Home"
                >
                    Serenity<span className="text-[var(--brand-blue)]">.</span>
                </Link>
                <nav aria-label="Main Navigation" className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand-blue)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]/50 rounded-sm px-1"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="ml-4 bg-[var(--foreground)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)]"
                    >
                        Client Login
                    </Link>
                </nav>
                {/* Mobile menu place holder - intended for future iteration if needed */}
            </div>
        </header>
    );
};

export default Navbar;
