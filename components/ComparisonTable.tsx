
import Link from 'next/link';

export default function ComparisonTable() {
    return (
        <section className="responsive-section-padding bg-gray-50 border-t border-gray-200">
            <div className="responsive-container">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h2 className="responsive-h2 mb-4 text-[var(--foreground)]">Still Deciding?</h2>
                    <p className="text-gray-600 responsive-body">Compare our engagement models to find the right fit for your needs.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {/* Advisory Plan */}
                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="responsive-h3 mb-2">Advisory</h3>
                        <p className="text-[var(--brand-blue)] font-bold uppercase tracking-wider text-sm mb-4 sm:mb-6">The Focus Fix</p>
                        <p className="text-gray-600 mb-6 sm:mb-8 min-h-[4rem] sm:min-h-[6rem] leading-relaxed">
                            Best for solving a specific problem, validating your current path, or getting a second opinion.
                        </p>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold text-lg sm:text-xl mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-gray-700 text-sm sm:text-base">One-time comprehensive plan</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold text-lg sm:text-xl mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-gray-700 text-sm sm:text-base">Specific challenge resolution</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold text-lg sm:text-xl mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-gray-700 text-sm sm:text-base">30-day implementation support</span>
                            </li>
                        </ul>
                        <Link
                            href="/advisory"
                            className="block w-full text-center py-3 sm:py-4 border-2 border-[var(--foreground)] text-[var(--foreground)] font-bold hover:bg-[var(--foreground)] hover:text-white transition-colors rounded touch-target focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)]"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Advisory Plus Plan */}
                    <div className="bg-[var(--foreground)] p-6 sm:p-8 rounded-2xl border border-[var(--foreground)] shadow-xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-[var(--brand-blue)] blur-2xl sm:blur-3xl opacity-20"></div>
                        <h3 className="responsive-h3 mb-2 text-white relative z-10">Advisory Plus</h3>
                        <p className="text-[var(--brand-blue)] font-bold uppercase tracking-wider text-sm mb-4 sm:mb-6 relative z-10">The Ongoing Partner</p>
                        <p className="text-gray-300 mb-6 sm:mb-8 min-h-[4rem] sm:min-h-[6rem] relative z-10 leading-relaxed">
                            Best for complex portfolios requiring continuous oversight, tax optimization, and legacy management.
                        </p>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 relative z-10">
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--accent-coral)] font-bold text-lg sm:text-xl mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-gray-200 text-sm sm:text-base">Continuous CFO/CIO stewardship</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--accent-coral)] font-bold text-lg sm:text-xl mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-gray-200 text-sm sm:text-base">Full implementation & monitoring</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--accent-coral)] font-bold text-lg sm:text-xl mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-gray-200 text-sm sm:text-base">Estate, tax & legacy coordination</span>
                            </li>
                        </ul>
                        <Link
                            href="/advisory-plus"
                            className="block w-full text-center py-3 sm:py-4 bg-[var(--brand-blue)] text-white font-bold hover:bg-blue-600 transition-colors border-2 border-transparent rounded touch-target focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white relative z-10"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
