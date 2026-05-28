import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us — Our Team and Mission | Nexora Digital",
  description:
    "Learn about the Nexora Digital team. We are a web development and SEO agency based in Valparaíso, Chile, helping businesses grow online with data-driven strategies.",
  alternates: { canonical: "https://nexora.digital/about" },
  openGraph: {
    title: "About Nexora Digital",
    description: "Meet the team behind Nexora Digital — web development and SEO experts.",
    url: "https://nexora.digital/about",
  },
};

const values = [
  {
    title: "Transparency",
    description:
      "No black boxes. You get monthly reports, clear timelines, and honest assessments. If something is not working, we tell you — and we fix it.",
  },
  {
    title: "Performance First",
    description:
      "Every line of code we write is optimized. Fast load times, clean architecture, and SEO-ready markup are non-negotiable in every project.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "We do not guess. Every strategy is backed by keyword research, competitor analysis, and performance data. Results are measured, not assumed.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "SEO is not a one-time project. We build relationships, not just websites. Our goal is to be your growth partner for years, not weeks.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-primary-light transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground">About</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                We Help Businesses{" "}
                <span className="gradient-text">Grow Online</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Nexora Digital is a web development and SEO agency based in
                Valparaíso, Chile. We work with businesses of all sizes to
                build high-performance websites and improve their search
                engine visibility.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Our approach is straightforward: understand your business,
                build technology that supports your goals, and execute SEO
                strategies that bring measurable results. No shortcuts, no
                empty promises.
              </p>
              <p className="text-muted leading-relaxed">
                Since founding the agency, we have worked on over 150 projects
                across industries including e-commerce, SaaS, healthcare,
                legal, and professional services. Each project taught us
                something new and made our process stronger.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <Image
                src="/team-photo.png"
                alt="Nexora Digital team collaborating in a modern office"
                width={600}
                height={450}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              These are not just words on a page. They shape every decision
              we make, every project we take on, and every line of code we write.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-10 hover:transform-none">
            <h2 className="text-2xl font-bold mb-4">
              Want to Work <span className="gradient-text">Together</span>?
            </h2>
            <p className="text-muted mb-6">
              Tell us about your project. We will get back to you within 24 hours
              with a free assessment and proposal.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Get in Touch</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
