import Link from "next/link";

const services = [
  {
    slug: "web-development",
    title: "Custom Web Development",
    description:
      "Full-stack web development with React, Next.js, and Node.js. We build fast, scalable, SEO-ready websites tailored to your business goals.",
    features: ["React & Next.js", "API Integration", "Performance Optimized", "Mobile-First"],
  },
  {
    slug: "seo",
    title: "SEO Optimization",
    description:
      "Technical SEO, on-page optimization, link building, and content strategy. We help businesses climb search rankings and grow organic traffic.",
    features: ["Technical Audit", "Keyword Strategy", "Link Building", "Content Plan"],
  },
  {
    slug: "web-design",
    title: "Professional Web Design",
    description:
      "Modern, responsive web design focused on user experience and conversions. From brand identity to interactive prototypes and final implementation.",
    features: ["UI/UX Design", "Responsive Layouts", "Brand Identity", "A/B Testing"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Development",
    description:
      "Custom online stores with Shopify, WooCommerce, or fully custom solutions. Secure payments, inventory management, and optimized checkout flows.",
    features: ["Shopify / Custom", "Payment Gateway", "Inventory Mgmt", "Conversion Focused"],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    description:
      "Dominate local search results and Google Maps. We optimize your Business Profile, build citations, and implement geo-targeted strategies.",
    features: ["Google Maps", "Local Citations", "Review Strategy", "Geo-Targeting"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative" aria-label="Our Services">
      <div className="glow-orb w-[500px] h-[500px] bg-accent top-[20%] right-[-200px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Web Development &{" "}
            <span className="gradient-text">SEO Services</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            From custom development to search engine optimization, we provide
            end-to-end digital solutions. Every project is built with
            performance and search visibility in mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="glass rounded-2xl p-8 group block"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-light transition-colors">
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs bg-primary/10 text-primary-light border border-primary/20 px-3 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <span className="text-primary-light text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
