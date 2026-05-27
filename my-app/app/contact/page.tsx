import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Free SEO Audit & Consultation | Nexora Digital",
  description:
    "Get in touch with Nexora Digital for a free SEO audit and website consultation. Based in Valparaíso, Chile — serving clients worldwide.",
  alternates: { canonical: "https://nexora.digital/contact" },
  openGraph: {
    title: "Contact Nexora Digital",
    description: "Free SEO audit and consultation. Let us help you grow online.",
    url: "https://nexora.digital/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-primary-light transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground">Contact</li>
          </ol>
        </nav>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Together</span>
            </h1>
            <p className="text-muted text-lg">
              Tell us about your project and goals. We will respond within
              24 hours with a free audit and personalized recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <div className="space-y-6 mb-10">
                {[
                  {
                    label: "Email",
                    value: "ignsf.business@gmail.com",
                    href: "mailto:ignsf.business@gmail.com",
                  },
                  {
                    label: "Phone / WhatsApp",
                    value: "+56 9 9979 2393",
                    href: "https://wa.me/56999792393",
                  },
                  {
                    label: "Location",
                    value: "Valparaíso, Chile — Remote services worldwide",
                    href: "#",
                  },
                  {
                    label: "Business Hours",
                    value: "Monday through Friday, 9:00 AM to 6:00 PM (CLT)",
                    href: "#",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-start gap-4 p-5 rounded-xl bg-surface/50 border border-surface-border/50 hover:border-primary/30 transition-colors block"
                  >
                    <div>
                      <div className="text-sm text-muted mb-1">{c.label}</div>
                      <div className="font-medium">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", url: "https://linkedin.com/company/nexoradigital" },
                    { name: "GitHub", url: "https://github.com/nexoradigital" },
                    { name: "WhatsApp", url: "https://wa.me/56999792393" },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-surface-light border border-surface-border text-sm text-muted hover:text-primary-light hover:border-primary/30 transition-all"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
