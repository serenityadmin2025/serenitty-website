import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[var(--foreground)] text-white responsive-section-padding">
            <div className="responsive-container">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                        <Link
                            href="/"
                            className="text-xl sm:text-2xl font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)] rounded-sm"
                        >
                            Serenity<span className="text-[var(--brand-blue)]">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[30ch]">
                            Everyone must have a slice of Serenity
                        </p>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Services</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm">
                            <li>
                                <Link 
                                    href="/advisory" 
                                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded-sm py-1"
                                >
                                    Wealth Advisory
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/advisory-plus" 
                                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded-sm py-1"
                                >
                                    Family Office (Advisory+)
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/advisory" 
                                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded-sm py-1"
                                >
                                    Estate Planning
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Company</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm">
                            <li>
                                <Link 
                                    href="/active-stakeholders" 
                                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded-sm py-1"
                                >
                                    Advisory Panel
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/compliance" 
                                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded-sm py-1"
                                >
                                    Regulatory Compliance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact</h3>
                        <address className="not-italic text-gray-400 text-sm space-y-3 sm:space-y-4">
                            <p>
                                B2103-04, Oberoi Exquisite,<br />
                                Goregaon East, Mumbai, 400063
                            </p>
                            <p>
                                <a 
                                    href="mailto:connect@serenitywealth.com" 
                                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded-sm py-1"
                                >
                                    connect@serenitywealth.com
                                </a>
                            </p>
                            <p>
                                <a 
                                    href="tel:+919876543210" 
                                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded-sm py-1"
                                >
                                    +91 9876543210
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-500 text-sm space-y-4">
                    <div className="text-gray-400 space-y-2">
                        <p className="font-medium text-gray-300 text-sm sm:text-base">
                            Ashish Khetan – Proprietor of Meeraj Advisors
                        </p>
                        <p className="text-xs sm:text-sm">SEBI Reg No: INA000017763 (Individual)</p>
                    </div>
                    <p className="text-xs sm:text-sm">
                        &copy; {new Date().getFullYear()} Serenity Wealth Management. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
