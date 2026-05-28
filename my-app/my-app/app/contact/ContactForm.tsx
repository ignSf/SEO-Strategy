"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="glass rounded-2xl p-8 hover:transform-none">
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="text-success">
              <path d="M8 16l6 6 12-12" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Received</h3>
          <p className="text-muted">
            We&apos;ll get back to you within 24 hours with your free SEO audit.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <h3 className="text-xl font-bold mb-2">Get Your Free SEO Audit</h3>
          <p className="text-muted text-sm mb-6">
            Fill out the form and we will send you a comprehensive SEO
            analysis within 24 hours.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium mb-1 block">Full Name</label>
              <input id="contact-name" type="text" required placeholder="John Doe"
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm font-medium mb-1 block">Email</label>
              <input id="contact-email" type="email" required placeholder="john@company.com"
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
            </div>
          </div>

          <div>
            <label htmlFor="contact-website" className="text-sm font-medium mb-1 block">Website URL</label>
            <input id="contact-website" type="url" placeholder="https://yourwebsite.com"
              className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
          </div>

          <div>
            <label htmlFor="contact-service" className="text-sm font-medium mb-1 block">Service</label>
            <select id="contact-service"
              className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="seo">SEO Services</option>
              <option value="web-design">Web Design</option>
              <option value="ecommerce">E-Commerce Development</option>
              <option value="local-seo">Local SEO</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="text-sm font-medium mb-1 block">Message</label>
            <textarea id="contact-message" rows={4} required placeholder="Tell us about your project..."
              className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" />
          </div>

          <button type="submit" id="contact-submit" className="btn-primary w-full justify-center text-lg">
            <span>Send Message</span>
          </button>
        </form>
      )}
    </div>
  );
}
