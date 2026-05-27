"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How much do web development services cost?",
    answer:
      "Our web development services start at $2,000 for basic websites and scale based on complexity. Custom web applications typically range from $5,000 to $25,000. Every project is unique, so we provide a free, personalized quote after understanding your specific requirements.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO typically shows initial improvements within 3 to 6 months. Significant ranking gains usually appear between 6 and 12 months, depending on competition and your current site authority. We provide monthly reports so you can track progress from the start.",
  },
  {
    question: "Do you offer free SEO audits?",
    answer:
      "Yes. We offer a free, no-obligation SEO audit that covers technical SEO, on-page optimization, backlink profile, competitor analysis, and actionable recommendations.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We specialize in React, Next.js, Vue.js, and Node.js for development. For e-commerce, we work with Shopify, WooCommerce, and custom solutions. Every project is built with performance, SEO, and accessibility in mind.",
  },
  {
    question: "Can you handle both web design and SEO together?",
    answer:
      "Absolutely — and we recommend it. When we build your website from the ground up with SEO best practices built in, from architecture to page speed to schema markup, you get significantly better results than trying to retrofit SEO later.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative" aria-label="Frequently Asked Questions">
      <div className="glow-orb w-[400px] h-[400px] bg-secondary top-[20%] right-[-150px]" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted text-lg">
            Common questions about our web development and SEO services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden hover:transform-none">
              <button
                id={`faq-toggle-${i}`}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <span className={`text-primary text-2xl shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-6 text-muted leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
