import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Testimonials />
        <FAQ />

        {/* Final CTA section */}
        <section className="section-padding relative bg-surface/30" aria-label="Get started">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Grow Your{" "}
              <span className="gradient-text">Online Presence</span>?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and consultation. We will analyze your website,
              identify opportunities, and give you a clear roadmap to improve
              your search rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                <span>Get Your Free Audit</span>
              </Link>
              <Link href="/blog" className="btn-outline text-lg">
                Read Our Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
