
import Link from 'next/link';

export default function ComparisonTable() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Still Deciding?</h2>
                    <p className="text-gray-600 text-lg">Compare our engagement models to find the right fit for your needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* One-Time Plan */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-2">Advisory</h3>
                        <p className="text-[var(--brand-blue)] font-bold uppercase tracking-wider text-sm mb-6">The Focus Fix</p>
                        <p className="text-gray-600 mb-8 h-24">
                            Best for solving a specific problem, validating your current path, or getting a second opinion.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span className="text-gray-700">One-time comprehensive plan</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span className="text-gray-700">Specific challenge resolution</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span className="text-gray-700">30-day implementation support</span>
                            </li>
                        </ul>
                        <Link
                            href="/advisory"
                            className="block w-full text-center py-3 border-2 border-[var(--foreground)] text-[var(--foreground)] font-bold hover:bg-[var(--foreground)] hover:text-white transition-colors"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Ongoing Partnership */}
                    <div className="bg-[var(--foreground)] p-8 rounded-2xl border border-[var(--foreground)] shadow-xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--brand-blue)] blur-3xl opacity-20"></div>
                        <h3 className="text-2xl font-bold mb-2 text-white">Advisory Plus</h3>
                        <p className="text-[var(--brand-blue)] font-bold uppercase tracking-wider text-sm mb-6">The Ongoing Partner</p>
                        <p className="text-gray-300 mb-8 h-24">
                            Best for complex portfolios requiring continuous oversight, tax optimization, and legacy management.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--accent-coral)] font-bold">✓</span>
                                <span className="text-gray-200">Continuous CFO/CIO stewardship</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--accent-coral)] font-bold">✓</span>
                                <span className="text-gray-200">Full implementation & monitoring</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--accent-coral)] font-bold">✓</span>
                                <span className="text-gray-200">Estate, tax & legacy coordination</span>
                            </li>
                        </ul>
                        <Link
                            href="/advisory-plus"
                            className="block w-full text-center py-3 bg-[var(--brand-blue)] text-white font-bold hover:bg-blue-600 transition-colors border-2 border-transparent"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
