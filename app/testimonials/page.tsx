import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
    return (
        <div className="bg-white min-h-screen">
            <header className="py-20 px-6 lg:px-20 text-center container mx-auto">
                <h1 className="text-5xl font-bold mb-6 text-[var(--foreground)]">Client Experiences</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    Stories of trust, clarity, and partnership.
                </p>
            </header>
            <Testimonials />
        </div>
    );
}
