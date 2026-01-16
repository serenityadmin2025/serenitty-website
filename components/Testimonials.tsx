import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "CP Gurnani",
            role: "Co-founder & Vice Chairman, AIONOS; Former CEO & MD, Tech Mahindra",
            quote: "I am extremely happy with Ashish's consultancy and I highly recommend it to anyone who wants to take the ownership of their financial future. The unique thing about him is his commitment towards his clients which goes beyond the professional relationship. He brings his personal touch and provides a transparent view to his clients. When it comes to assessing / catering to his client’s needs, he follows a rigorous approach in determining the risk profile and accordingly plans the asset allocation."
        },
        {
            name: "C. Jayaram",
            role: "Independent Director, KFin Technologies; Former Joint MD, Kotak Mahindra Bank",
            quote: "Ashish was a valued colleague of mine for over 20 years at Kotak and I have the highest regard for him both as a professional and as a human being. He has had extensive experience over all areas of wealth management including relationship management, operations and family office management. He has demonstrated the highest levels of empathy for his clients which is the hallmark of an outstanding wealth manager."
        },
        {
            name: "Ajay Gupta",
            role: "Founder, Capital Foods Pvt. Ltd.",
            quote: "I met Ashish in the course of my own wealth management process. While initially, I allocated my investments with a few wealth-management firms, eventually I ended up consolidating my affairs with the firm he (then) represented. And that was mainly due to his client-centric, no-nonsense, and sincere approach. I am glad he took the decision to strike out on his own and build a wealth management enterprise ground-up. We need a pathbreaking initiative to change the paradigm of Wealth Management and I believe Serenity will succeed in doing it. Wishing Ashish & Serenity the very best."
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-20 bg-gray-50 text-[var(--foreground)]">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center">Voices of Trust</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                            {/* Quote Icon */}
                            <div className="text-[var(--brand-blue)] text-6xl opacity-20 absolute top-4 left-4 font-serif">“</div>

                            <p className="text-gray-600 mb-8 relative z-10 italic leading-relaxed pt-8">
                                {t.quote}
                            </p>

                            <div className="border-t border-gray-100 pt-6">
                                <h3 className="font-bold text-lg">{t.name}</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wide mt-2 font-medium">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
