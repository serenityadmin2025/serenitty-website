import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Comparison Table Section */}
      <section className="responsive-section-padding bg-gray-50 border-b border-gray-200">
        <div className="responsive-container">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="responsive-h2 mb-4 text-[var(--foreground)]">Serenity vs Others: A Clear Choice</h2>
            <p className="text-gray-600 responsive-body">See the difference between a sales-driven model and a client-aligned partnership.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
            {/* SERENITY WEALTH (Left - Winner) */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border-2 border-[var(--brand-blue)]/10 relative overflow-hidden order-2 lg:order-1 lg:translate-x-4 z-10">
              <div className="absolute top-0 left-0 w-full h-2 bg-[var(--brand-blue)]"></div>
              <h3 className="responsive-h3 mb-6 sm:mb-8 text-[var(--foreground)] flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 text-sm flex-shrink-0">
                  ✓
                </span>
                <span>Serenity Wealth</span>
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Fee-only (aligned with your success)",
                  "Transparent pricing (fixed or %)",
                  "Bespoke strategies (1:1 customization)",
                  "SEBI-mandated fiduciary duty"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4">
                    <span className="text-green-500 font-bold text-lg sm:text-xl mt-0.5 flex-shrink-0">✅</span>
                    <span className="text-[var(--foreground)] font-medium text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TRADITIONAL MODEL (Right) */}
            <div className="bg-gray-100 p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-200 order-1 lg:order-2 lg:-translate-x-4 opacity-75 hover:opacity-100 transition-opacity">
              <h3 className="responsive-h3 mb-6 sm:mb-8 text-gray-500 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 text-sm flex-shrink-0">
                  ✕
                </span>
                <span>Traditional Model</span>
              </h3>
              <ul className="space-y-6">
                {[
                  "Commission-based advice (product pushing)",
                  "Hidden fees eating into your capital",
                  "Generic portfolios (100 clients, same strategy)",
                  "No fiduciary duty (legally)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-red-500 font-bold text-xl mt-0.5">❌</span>
                    <span className="text-gray-500 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Offering Preview (Grid) */}
      <section className="responsive-section-padding bg-gray-50 border-y border-gray-200">
        <div className="responsive-container">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="responsive-h2 mb-4 text-[var(--foreground)]">Holistic Financial Governance</h2>
            <p className="text-gray-600 responsive-body">Comprehensive strategies designed for complex portfolios.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Zero Day Planning", desc: "Bespoke investment strategies tailored to your risk profile and generational goals." },
              { title: "Estate Planning", desc: "Securing your legacy with tax-efficient transfer structures and trust management." },
              { title: "Family Office", desc: "Full-service concierge for UHNI families, from philanthropy to lifestyle management." }
            ].map((item, idx) => (
              <article key={idx} className="bg-white p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 rounded-lg">
                <h3 className="responsive-h3 mb-4 text-[var(--foreground)]">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 min-h-[3rem]">{item.desc}</p>
                <Link
                  href={idx === 2 ? "/advisory-plus" : "/advisory"}
                  className="text-sm font-semibold text-[var(--brand-blue)] hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded-sm py-1"
                  aria-label={`Learn more about ${item.title}`}
                >
                  Learn Details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 lg:px-20 bg-white text-[var(--foreground)] border-t border-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-100 relative">
            <div className="absolute inset-0">
              <Image
                src="/founder.jpg"
                alt="Portrait of Ashish Khetan"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-4">The Founder</h2>
            <h3 className="text-2xl text-[var(--brand-blue)] mb-6">Ashish Khetan</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With nearly 3 decades of deep domain experience at the forefront of India’s financial sector , Founder Ashish Khetan has built a reputation defined by an unwavering obsession with client-centricity. A consummate professional who spent over two decades with one of the nation’s premier financial conglomerates ,Ashish pioneered the first institution-led Multi-Family Office in India for Kotak Mahindra Bank in 2008.

            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              While his background is rooted in managing high-level institutional wealth, he is driven by the conviction that professional, fee-only guidance should be accessible to all; he truly believes that every individual deserves a "slice of serenity" in their financial life. His approach relies on a comprehensive assessment of each client’s specific attitude toward risk and their unique financial framework. By bridging the gap between sophisticated strategy and personal ambitions, Ashish ensures that his clients have a robust, agile, and sustainable operating system to secure their goals for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Active Stakeholder Advisory Preview */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--foreground)] text-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Active Stakeholder Advisory.</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
                The Serenity Wealth ecosystem is strengthened by an Active Stakeholder Advisory group that functions as a strategic think-tank rather than a traditional team of financial advisors. These individuals bring a multidisciplinary perspective to our process.
              </p>
              <Link
                href="/active-stakeholders"
                className="inline-block bg-[var(--accent-coral)] text-[var(--foreground)] px-8 py-3 font-bold hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-blue)]"
              >
                Meet the Panel
              </Link>
            </div>
            {/* Stakeholder Preview Grid */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-800 border border-gray-700 relative overflow-hidden group">
                <Image src="/tc.jpg" alt="Theron Carmine De Sousa" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-4 z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <span className="font-bold text-white block">Theron Carmine<br />De Sousa</span>
                  <span className="text-gray-300 text-sm font-normal">Strategy & Brand</span>
                </div>
              </div>
              <div className="aspect-square bg-gray-800 border border-gray-700 relative overflow-hidden group">
                <Image src="/sahil.jpg" alt="Sahil Sadarangani" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-4 z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <span className="font-bold text-white block">Sahil<br />Sadarangani</span>
                  <span className="text-gray-300 text-sm font-normal">Investment & Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
