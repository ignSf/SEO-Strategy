import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { services } from "./data";

export const metadata: Metadata = {
  title: "Professional Web Development & SEO Services | MCM Digital",
  description:
    "Explore our range of professional digital services including custom web development, search engine optimization, web design, e-commerce, and local SEO.",
  alternates: { canonical: "https://ign-digital.vercel.app/services" },
  openGraph: {
    title: "Web Development & SEO Services | MCM Digital",
    description: "Explore our range of professional digital services tailored to grow your business.",
    url: "https://ign-digital.vercel.app/services",
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-primary-light transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground">Services</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              We design, build, and optimize digital solutions that help your business scale.
              Every service is focused on high performance, clean user experience, and search engine visibility.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <article key={s.slug} className="glass rounded-2xl p-8 group flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary-light transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {s.intro}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.features.slice(0, 3).map((f) => (
                      <span
                        key={f.title}
                        className="text-xs bg-primary/10 text-primary-light border border-primary/20 px-3 py-1 rounded-full"
                      >
                        {f.title}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-primary-light text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all mt-auto"
                >
                  Learn more <span aria-hidden="true">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 mt-20 text-center">
          <div className="glass rounded-2xl p-10 hover:transform-none">
            <h2 className="text-2xl font-bold mb-4">
              Need a Custom <span className="gradient-text">Solution</span>?
            </h2>
            <p className="text-muted mb-6">
              We can tailor a package combining web development, design, and search engine optimization specifically for your business goals.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Request a Custom Quote</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
