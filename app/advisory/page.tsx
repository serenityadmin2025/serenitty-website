
import Link from 'next/link';
import Image from 'next/image';
import ComparisonTable from '@/components/ComparisonTable';
import TrustSeal from '@/components/TrustSeal';

export default function AdvisoryPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <header className="responsive-section-padding">
                <div className="responsive-container mobile-stack gap-8 sm:gap-12">
                <div className="lg:w-1/2">
                    <h1 className="responsive-h1 mb-4 sm:mb-6 text-[var(--foreground)] leading-tight">
                        Advisory: <br />
                        <span className="text-[var(--brand-blue)] text-3xl lg:text-4xl block leading-tight mt-2">
                            A Powerful, Focused Financial Plan.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                        A one-time, in-depth engagement to solve a specific challenge or validate your path forward. Clarity, without the long-term commitment.
                    </p>
                    <Link href="/contact" className="inline-block bg-[var(--foreground)] text-white px-8 py-3 font-bold hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)]">
                        Contact Us
                    </Link>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="w-full h-auto aspect-[4/3] bg-gray-50 flex items-center justify-center rounded-2xl border border-gray-100 p-8">
                        <Image
                            src="/advisory_hero.png"
                            alt="Hand-drawn rustic illustration of a compass and financial map on a wooden table. Grainy texture with sketchbook aesthetic."
                            width={800}
                            height={600}
                            className="object-contain drop-shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
            </header>

            {/* The "Why" Section */}
            <section className="py-24 px-6 lg:px-20 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Precise Validation for Critical Decisions.</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Sometimes you don’t need a permanent manager; you need a master architect.
                            Whether you’re selling a business, receiving an inheritance, or simply doubting your current bank’s advice,
                            our Advisory service provides a rigorous, mathematical second opinion.
                            We build the blueprint. You own it.
                        </p>
                    </div>

                    {/* Ideal For Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Business Exit", icon: "🏢", desc: "Structuring liquidity events for tax efficiency." },
                            { title: "Succession", icon: "📜", desc: "Safeguarding sudden wealth for generations." },
                            { title: "Sabbatical / Career Pivot", icon: "🗓️", desc: "Financial modeling for career pivots or time off." },
                            { title: "Portfolio Audit", icon: "🔍", desc: "Unbiased stress-testing of your current investments." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 border border-gray-200 rounded-xl hover:border-[var(--brand-blue)] hover:shadow-lg transition-all group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="font-bold text-[var(--foreground)] text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Process (Zigzag) */}
            <section className="py-24 px-6 lg:px-20 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-6 text-[var(--foreground)]">The Architecture Process: Building with Your Required Run Rate (RRR)</h2>
                    <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-20 leading-relaxed">
                        We move you from chasing products to following a process. Our proprietary <strong>Risk Return Readiness (RRR) </strong> framework, like cricket’s Required Run Rate which defines the exact return you need to win your financial game, then builds a plan to achieve it, safely and surely.
                    </p>

                    <div className="flex flex-col gap-12 relative">
                        {/* Vertical Line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

                        {[
                            { step: "01", title: "Discovery", desc: "We begin by defining your true financial purpose. We go beyond generic goals to calculate your personal Required Run Rate, the minimum post-tax return your wealth must generate to fund your specific life ambitions (retirement, home, legacy). This shifts the question from “What should I buy?” to “What do I actually need to earn?”", align: "left" },
                            { step: "02", title: "Analysis", desc: "Here, we run the numbers. We stress-test your current portfolio and savings rate against your newly defined RRR. Can your current strategy achieve it with comfortable risk? Or are you taking unnecessary risk for returns you don’t need, or saving too little? This phase cuts through market noise with objective, scenario-based math.", align: "right" },
                            { step: "03", title: "The Blueprint", desc: "With your RRR as our base, we architect your personalized portfolio blueprint. If your RRR is low, we build a stable, defensive strategy—why swing for sixes when singles will win the match? If your RRR is higher, we create the most efficient plan to get there, integrating tax-smart structures and precise asset allocation.", align: "left" },
                            { step: "04", title: "Empowerment", desc: "We walk you through the RRR logic, your new asset allocation, and the execution steps. You gain a clear, process-driven playbook for future decisions, freeing you from product fads and emotional investing, ensuring you stay on track to win your game.", align: "right" }
                        ].map((item, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                                    <div className={`lg:${item.align === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                        <h3 className="text-2xl font-bold text-[var(--brand-blue)] mb-2">{item.title}</h3>
                                        <p className="text-gray-600 max-w-none">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="z-10 bg-white p-2 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                                    {item.step}
                                </div>
                                <div className="lg:w-1/2 lg:pl-12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fee & Trust Section */}
            <section className="py-24 px-6 lg:px-20 bg-gray-50 text-[var(--foreground)] border-t border-gray-200">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT: FEE */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Investment: Pure Transparency.</h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                A simple, fixed engagement fee based on complexity. No hidden commissions, no product pushing.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <span className="text-[var(--brand-blue)] font-bold">✓</span>
                                    <span>

                                        <li>0.1% of your financial assets, subject to a minimum of ₹1 Lakh.</li>

                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[var(--brand-blue)] font-bold">✓</span>
                                    <span>Engagement duration spanning over 3 months.</span>
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
