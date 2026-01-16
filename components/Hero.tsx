import Image from 'next/image';

const Hero = () => {
    return (
        <section
            aria-label="Hero Section"
            className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] items-center border-b border-gray-200"
        >
            {/* Left Content */}
            <div className="flex flex-col justify-center responsive-section-padding order-2 lg:order-1 bg-[var(--background)] h-full px-6 sm:px-8 lg:px-20">
                <div className="max-w-2xl mx-auto lg:mx-0 lg:ml-8 xl:ml-16 text-center lg:text-left">
                    <h1 className="responsive-h1 tracking-tight text-[var(--foreground)] mb-6 sm:mb-8 leading-[1.1]">
                        Financial <br />
                        <span className="text-[var(--brand-blue)]">Serenity</span>
                    </h1>
                    <p className="responsive-body text-[var(--foreground)] opacity-80 mb-8 sm:mb-12 max-w-[50ch] mx-auto lg:mx-0 leading-relaxed">
                        A Fee-Only Advisory Firm.
                        <br className="hidden sm:block" />100% focused on you.
                        <br className="hidden sm:block" />100% aligned with your success.
                    </p>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[40vh] sm:h-[50vh] lg:h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[50vh] w-full bg-gray-50 order-1 lg:order-2">
                <Image
                    src="/hero-illustration.png"
                    alt="Hand-drawn illustration of a family on a paper boat navigating financial charts. Abstract, grainy texture with #2F7AE9 blue highlights."
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
            </div>
        </section>
    );
};

export default Hero;
