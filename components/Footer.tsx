import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[var(--foreground)] text-white py-16 px-6 lg:px-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)]"
                    >
                        Serenity<span className="text-[var(--brand-blue)]">.</span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[30ch]">
                        Everyone must have a slice of Serenity
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-6">Services</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><Link href="/advisory" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]">Wealth Advisory</Link></li>
                        <li><Link href="/advisory-plus" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]">Family Office (Advisory+)</Link></li>
                        <li><Link href="/advisory" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]">Estate Planning</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-6">Company</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><Link href="/active-stakeholders" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]">Advisory Panel</Link></li>
                        <li><Link href="/compliance" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]">Regulatory Compliance</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-6">Contact</h3>
                    <address className="not-italic text-gray-400 text-sm space-y-4">
                        <p>B2103-04, Oberoi Exquisite,<br />Goregaon East, Mumbai, 400063</p>
                        <p><a href="mailto:connect@serenitywealth.com" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]">connect@serenitywealth.com</a></p>
                        <p>+91 9876543210</p>
                    </address>
                </div>
            </div>
            <div className="container mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <div className="mb-4 text-gray-400">
                    <p className="font-medium text-gray-300">Ashish Khetan – Proprietor of Meeraj Advisors</p>
                    <p>SEBI Reg No: INA000017763 (Individual)</p>
                </div>
                <p>&copy; {new Date().getFullYear()} Serenity Wealth Management. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
