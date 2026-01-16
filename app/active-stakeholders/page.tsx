import Image from 'next/image';

export default function TeamPage() {
    const team = [
        {
            name: "THERON CARMINE DE SOUSA (TC)",
            role: "Strategy & Brand",
            image: "/tc.jpg",
            bio: "A 360-Degree Strategist, TC has over two decades of experience in crafting brand strategy and product design for leading global brands, including for a project helmed by the Department of Investment and Public Asset Management (DIPAM) - Government of India's first unveiling as part of their India Stack initiative. He graduated from Denison University, Granville, USA, with a degree in Communications and Media Strategy, followed by postgraduate studies in Sustainable Strategies."
        },
        {
            name: "SAHIL SADARANGANI",
            role: "Investment & Value Creation",
            image: "/sahil.jpg",
            bio: "A serial entrepreneur with a diligent step-by-step approach to problem-solving. His mantra is: Deep Research-Deep Data Mining – Collation – Planning – Adaptive Execution, making him an expert in value creation be it for/of people, product and/or services. Sahil is a Calculus and Macro-economics major at Boston College. He is also an avid observer of Global Macros."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <header className="py-24 px-6 lg:px-20 text-center container mx-auto">
                <h1 className="text-5xl font-bold mb-6">Active Stakeholder Advisory</h1>
                <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
                    The Serenity Wealth ecosystem is strengthened by an Active Stakeholder Advisory group that functions as a strategic think-tank rather than a traditional team of financial advisors. These individuals bring a multidisciplinary perspective to our process.
                </p>
            </header>

            <section className="container mx-auto px-6 lg:px-20 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <article key={idx} className="group">
                            <div className="aspect-[3/4] bg-gray-200 mb-6 relative overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-[var(--foreground)]">{member.name}</h2>
                            <p className="text-[var(--brand-blue)] font-medium mb-3">{member.role}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
