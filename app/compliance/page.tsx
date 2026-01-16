export default function CompliancePage() {
    return (
        <div className="bg-white min-h-screen">
            <header className="bg-gray-100 py-16 px-6 lg:px-20 border-b border-gray-200">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold text-[var(--foreground)]">Regulatory Compliance & Disclosures</h1>
                </div>
            </header>

            <article className="container mx-auto px-6 lg:px-20 py-16">
                {/* Constraint: max-width: 65ch for readable line lengths */}
                <div className="max-w-[65ch] mx-auto space-y-8 text-gray-700 leading-[1.6]">
                    <section>
                        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">1. Fiduciary Standard</h2>
                        <p>
                            Serenity Wealth Management LLC ("Serenity") is a registered investment adviser. Information presented is for educational purposes only and does not intend to make an offer or solicitation for the sale or purchase of any specific securities, investments, or investment strategies. Investments involve risk and, unless otherwise stated, are not guaranteed. Be sure to first consult with a qualified financial adviser and/or tax professional before implementing any strategy discussed herein. Past performance is not indicative of future performance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">2. Privacy Policy</h2>
                        <p>
                            We are committed to maintaining the trust and confidence of our clients. We do not sell, rent, or trade our email lists or client data with other companies and businesses for marketing purposes. This Privacy Policy provides detailed information on when and why we collect your personal information, how we use it, the limited conditions under which we may disclose it to others, and how we keep it secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">3. Form ADV Part 2A</h2>
                        <p>
                            Serenity Wealth provides advice and makes recommendations based on the specific needs and circumstances of each client. Clients should carefully consider their own investment objectives and never rely on any single chart, graph, or marketing piece to make decisions. Please refer to our Form ADV Part 2A tailored brochure for a complete description of our fees, services, and conflicts of interest.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            Last updated: January 1, 2025. <a href="#" className="underline text-[var(--brand-blue)] hover:text-[var(--foreground)]" aria-label="Download full PDF disclosure">Download Full PDF</a>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
