const projects = [
  {
    title: "E-Commerce Platform Redesign",
    category: "Web Development + SEO",
    metric: "+280% Organic Traffic",
    description:
      "Complete redesign and SEO overhaul for a fashion e-commerce brand. Built with Next.js, achieved a 98 PageSpeed score and nearly tripled organic revenue in 6 months.",
    tags: ["Next.js", "E-Commerce", "SEO"],
    color: "from-primary to-accent",
  },
  {
    title: "SaaS Dashboard Application",
    category: "Custom Web Development",
    metric: "99.9% Uptime",
    description:
      "Full-stack SaaS platform with real-time analytics, user management, and subscription billing. Scalable architecture serving 50K+ daily users.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "from-secondary to-primary",
  },
  {
    title: "Local Business SEO Campaign",
    category: "Local SEO",
    metric: "Top 3 Google Maps",
    description:
      "Local SEO strategy for a multi-location dental practice. Reached the top 3 on Google Maps in all 5 service areas within 4 months.",
    tags: ["Local SEO", "Google Maps", "Citations"],
    color: "from-accent to-secondary",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding relative bg-surface/30"
      aria-label="Portfolio and Case Studies"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Case Studies &{" "}
            <span className="gradient-text">Proven Results</span>
          </h2>
          <p className="text-muted text-lg">
            Real projects with measurable outcomes. See how we help businesses
            grow with web development and SEO.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <article key={i} className="glass rounded-2xl overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${p.color}`} />
              <div className="p-8">
                <span className="text-xs text-primary-light font-semibold uppercase tracking-wider">
                  {p.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-1">{p.title}</h3>
                <div className="inline-block bg-success/10 text-success text-sm font-bold px-3 py-1 rounded-full mb-4">
                  {p.metric}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-surface-light text-muted border border-surface-border px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
