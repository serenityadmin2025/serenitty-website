
import Link from 'next/link';
import Image from 'next/image';
import ComparisonTable from '@/components/ComparisonTable';
import TrustSeal from '@/components/TrustSeal';

export default function AdvisoryPlusPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <header className="py-20 px-6 lg:px-20 container mx-auto flex flex-col lg:flex-row items-center gap-12 border-b border-gray-100">
                <div className="lg:w-1/2">

                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-[var(--foreground)] leading-tight">
                        Advisory<sup className="text-[var(--brand-blue)]">+</sup>: <br />
                        <span className="text-[var(--brand-blue)] text-3xl lg:text-4xl block leading-tight mt-2">Your Ongoing Financial Partnership.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Beyond planning, into execution. We become your dedicated Chief Financial Officer (CFO) and Chief Investment Officer (CIO).
                    </p>
                    <div className="flex gap-4">
                        <Link href="/contact" className="inline-block bg-[var(--foreground)] text-white px-8 py-3 font-bold hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)]">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="w-full h-auto aspect-[4/3] bg-gray-50 flex items-center justify-center rounded-2xl border border-gray-100 p-8">
                        <Image
                            src="/advisory_plus_hero.png"
                            alt="Hand-drawn ecosystem of gears and plants representing active financial governance. Grainy, organic texture."
                            width={800}
                            height={600}
                            className="object-contain drop-shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </header>

            {/* The CFO/CIO Concept & Ideal For */}
            <section className="py-24 px-6 lg:px-20 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Your Personal COO-CIO.</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                We sit by your side, designing, steering, and implementing <strong className="text-[var(--foreground)]">end-to-end</strong>: each & every aspect of your wealth management process; including for your private/strategic investments, businesses and foundations.
                            </p>
                            <h3 className="text-xl font-bold mb-4 text-[var(--foreground)] mt-8">We act as your Gatekeepers:</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[var(--brand-blue)]">▪</span>
                                    <span>Entrusted with the responsibility of protecting your interests.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[var(--brand-blue)]">▪</span>
                                    <span>Shielding you from the noise.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[var(--brand-blue)]">▪</span>
                                    <span>Ensuring anyone who has a differentiated or better idea, product, solution gets due attention.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Ongoing Engagement:</h3>
                            <ul className="space-y-6">
                                {[
                                    "As one of your investment advisors.",
                                    "As a member of your IC (Investment Committee).",
                                    "As a due-diligence & research partner.",
                                    "As a support mechanism to your internal structure."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                        <span className="text-[var(--brand-blue)] font-bold text-lg">({idx + 1})</span>
                                        <span className="font-medium text-[var(--foreground)] text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works (Tiered Layout) */}
            <section className="py-24 px-6 lg:px-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-[var(--foreground)]">The Partnership Model</h2>

                    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                        {/* Tier 1: Foundation */}
                        <div className="bg-white p-8 rounded-xl border-l-8 border-gray-300 shadow-sm relative overflow-hidden">
                            <span className="absolute top-4 right-4 text-6xl opacity-10 font-bold select-none">1</span>
                            <h3 className="text-2xl font-bold mb-4">Foundation</h3>
                            <p className="text-gray-600">The initial deep-dive. We construct the master investment policy, estate architecture, and family charter. This is the bedrock.</p>
                        </div>

                        {/* Tier 2: Implementation */}
                        <div className="bg-white p-8 rounded-xl border-l-8 border-[var(--brand-blue)] shadow-md relative overflow-hidden lg:translate-x-8">
                            <span className="absolute top-4 right-4 text-6xl opacity-10 font-bold select-none text-[var(--brand-blue)]">2</span>
                            <h3 className="text-2xl font-bold mb-4 text-[var(--brand-blue)]">Implementation</h3>
                            <p className="text-gray-600">We execute the trades, set up the trusts, and align your banking relationships. We take the paperwork off your desk.</p>
                        </div>

                        {/* Tier 3: Active Stewardship */}
                        <div className="bg-[var(--foreground)] text-white p-8 rounded-xl border-l-8 border-[var(--accent-coral)] shadow-xl relative overflow-hidden lg:translate-x-16">
                            <span className="absolute top-4 right-4 text-6xl opacity-10 font-bold select-none text-[var(--accent-coral)]">3</span>
                            <h3 className="text-2xl font-bold mb-4 text-[var(--accent-coral)]">Active Governance</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold mb-2 border-b border-gray-700 pb-2">Investment Management</h4>
                                    <p className="text-gray-400 text-sm">Rebalancing, tax-loss harvesting, and manager selection. A continuous loop of optimization.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2 border-b border-gray-700 pb-2">Life Navigation</h4>
                                    <p className="text-gray-400 text-sm">Real estate purchases, philanthropic giving, and next-gen financial literacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fee & Trust Section */}
            <section className="py-24 px-6 lg:px-20 bg-gray-50 text-[var(--foreground)] border-t border-gray-200">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT: FEE */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Investment: Aligned Growth.</h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                A transparent annual fee based on assets under management (AUM). We sit on the same side of the table—we do better only when you do better.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <span className="text-[var(--brand-blue)] font-bold">✓</span>
                                    <span>Percentage of AUM</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[var(--brand-blue)] font-bold">✓</span>
                                    <span>Fee-Only (No Commissions)</span>
                                </li>
                            </ul>

                        </div>

                        {/* RIGHT: FIDUCIARY TRUST */}
                        <div className="flex flex-col items-center justify-center text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <div className="relative w-32 h-32 mb-6">
                                {/* Reuse Isometric Seal Graphic */}
                                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                                    <path d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z" fill="#FFFFFF" stroke="black" strokeWidth="2" />
                                    <path d="M50 15 L75 30 L75 70 L50 85 L25 70 L25 30 Z" fill="none" stroke="#4169E1" strokeWidth="1.5" />
                                    <text x="50" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="black">FIDUCIARY</text>
                                    <text x="50" y="65" textAnchor="middle" fontSize="8" fill="#555">PROMISE</text>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">A Shared Foundation of Trust</h3>
                            <p className="text-gray-600">
                                Our commitment remains the same:
                                <br />
                                <span className="font-bold text-[var(--foreground)]">100% Fee-Only, Fiduciary Standard.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ComparisonTable />
        </div>
    );
}
