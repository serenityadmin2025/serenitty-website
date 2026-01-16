import Image from 'next/image';

const Hero = () => {
    return (
        <section
            aria-label="Hero Section"
            className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] items-center border-b border-gray-200"
        >
            {/* Left Content */}
            <div className="flex flex-col justify-center px-6 lg:px-20 py-20 bg-[var(--background)] h-full">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] mb-8 leading-[1.1]">
                    Financial <br />
                    <span className="text-[var(--brand-blue)]">Serenity</span>
                </h1>
                <p className="text-xl text-[var(--foreground)] opacity-80 mb-12 max-w-[50ch] leading-relaxed">
                    A Fee-Only Advisory Firm.
                    <br></br>100% focused on you.
                    <br></br>100% aligned with your success.

                </p>
                <div className="flex gap-4">
                    <button
                        type="button"
                        className="bg-[var(--accent-coral)] text-[var(--foreground)] px-8 py-4 text-lg font-bold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)]"
                        aria-label="Explore Advisory Services"
                    >
                        Explore Advisory
                    </button>

                </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[50vh] w-full bg-gray-50">
                <Image
                    src="/hero-illustration.png"
                    alt="Hand-drawn illustration of a family on a paper boat navigating financial charts. Abstract, grainy texture with #2F7AE9 blue highlights."
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    );
};

export default Hero;
