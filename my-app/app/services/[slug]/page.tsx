import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { services } from "../data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://nexora.digital/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://nexora.digital/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-primary-light transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-primary-light transition-colors">Services</Link></li>
            <li>/</li>
            <li className="text-foreground">{service.title}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {service.headline}
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              {service.intro}
            </p>
          </div>
        </section>

        {/* Features / Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-20">
          <div className="space-y-12">
            {service.sections.map((sec, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">{sec.heading}</h2>
                <p className="text-muted leading-relaxed text-base">{sec.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-20" aria-label="Service FAQ">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-4">
              {service.faq.map((item, i) => (
                <div key={i} className="glass rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{item.question}</h3>
                  <p className="text-muted leading-relaxed text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dynamic Schema Integration for local / custom services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "provider": {
                "@type": "Organization",
                "name": "Nexora Digital",
                "url": "https://nexora.digital"
              },
              "description": service.metaDescription,
              "areaServed": "Worldwide"
            }),
          }}
        />

        {/* Call to action */}
        <section className="max-w-3xl mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-10 hover:transform-none">
            <h2 className="text-2xl font-bold mb-4">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-muted mb-6">
              Contact us today for a free, personalized consultation and website audit.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Get Your Free Audit</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
