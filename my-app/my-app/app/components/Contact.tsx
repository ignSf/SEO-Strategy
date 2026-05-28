"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding relative bg-surface/30"
      aria-label="Contact MCM Digital"
    >
      <div className="glow-orb w-[500px] h-[500px] bg-primary bottom-[-100px] left-[20%]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="gradient-text">Boost Your Rankings</span>?
          </h2>
          <p className="text-muted text-lg">
            Get your free SEO audit and consultation today. No obligations, no
            hidden fees — just actionable insights to grow your business online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "ignsf.business@gmail.com",
                  href: "mailto:ignsf.business@gmail.com",
                },
                {
                  icon: "📞",
                  label: "Phone / WhatsApp",
                  value: "+56 9 9979 2393",
                  href: "https://wa.me/56999792393",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Valparaíso, Chile — Remote services worldwide",
                  href: "#",
                },
                {
                  icon: "🕐",
                  label: "Business Hours",
                  value: "Monday – Friday, 9:00 AM – 6:00 PM (CLT)",
                  href: "#",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-surface-border/50 hover:border-primary/30 transition-colors"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-sm text-muted">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {["LinkedIn", "GitHub"].map((s) => (
                  <a
                    key={s}
                    href={`https://${s.toLowerCase()}.com/ign-digital`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-surface-light border border-surface-border text-sm text-muted hover:text-primary-light hover:border-primary/30 transition-all"
                    aria-label={`Visit MCM Digital on ${s}`}
                  >
                    {s}
                  </a>
                ))}
                <a
                  href="https://wa.me/56999792393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-surface-light border border-surface-border text-sm text-muted hover:text-primary-light hover:border-primary/30 transition-all"
                  aria-label="Chat with us on WhatsApp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass rounded-2xl p-8 hover:transform-none">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-muted">
                  We&apos;ll get back to you within 24 hours with your free SEO
                  audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold mb-2">
                  Get Your Free SEO Audit
                </h3>
                <p className="text-muted text-sm mb-6">
                  Fill out the form below and we&apos;ll send you a comprehensive
                  SEO analysis within 24 hours.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium mb-1 block">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium mb-1 block">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-website" className="text-sm font-medium mb-1 block">
                    Website URL
                  </label>
                  <input
                    id="contact-website"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="text-sm font-medium mb-1 block">
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO Services</option>
                    <option value="web-design">Web Design</option>
                    <option value="ecommerce">E-Commerce Development</option>
                    <option value="local-seo">Local SEO</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium mb-1 block">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Tell us about your project and goals..."
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="btn-primary w-full justify-center text-lg"
                >
                  <span>Send Message & Get Free Audit →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
