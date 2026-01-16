
export default function TrustSeal() {
    return (
        <section className="py-16 px-6 bg-white border-t border-gray-100">
            <div className="container mx-auto flex flex-col items-center justify-center text-center">
                <div className="relative w-32 h-32 mb-6">
                    {/* Isometric Seal Graphic (CSS/SVG) */}
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                        <path d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z" fill="#FFFFFF" stroke="black" strokeWidth="2" />
                        <path d="M50 15 L75 30 L75 70 L50 85 L25 70 L25 30 Z" fill="none" stroke="#4169E1" strokeWidth="1.5" />
                        <text x="50" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="black">FIDUCIARY</text>
                        <text x="50" y="65" textAnchor="middle" fontSize="8" fill="#555">PROMISE</text>
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">A Shared Foundation of Trust</h3>
                <p className="text-gray-600 max-w-xl">
                    Whether you choose a one-time plan or an ongoing partnership, our commitment remains the same:
                    <span className="font-bold text-[var(--foreground)]"> 100% Fee-Only, Fiduciary Standard.</span>
                </p>
            </div>
        </section>
    );
}
