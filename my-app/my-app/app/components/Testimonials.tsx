const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, GreenLeaf Organics",
    quote:
      "Nexora Digital completely transformed our online presence. Our organic traffic grew significantly in just 6 months, and most of our target keywords now appear on the first page. The ROI has been remarkable.",
    initials: "SM",
  },
  {
    name: "David Chen",
    role: "Founder, TechPulse SaaS",
    quote:
      "The development team built us a fast, reliable SaaS dashboard that handles 50K+ daily users without issues. Their technical expertise is outstanding. Highly recommended.",
    initials: "DC",
  },
  {
    name: "Maria Rodriguez",
    role: "Marketing Director, Dental Plus",
    quote:
      "Their local SEO strategy put us on the map. We went from invisible to the top 3 on Google Maps in all 5 of our locations. New patient inquiries doubled within 3 months.",
    initials: "MR",
  },
  {
    name: "James Thompson",
    role: "Owner, Thompson & Co Legal",
    quote:
      "Professional, responsive, and results-driven. Our new website loads in under 2 seconds and we've seen a significant increase in contact form submissions. Worth every penny.",
    initials: "JT",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding relative bg-surface/30"
      aria-label="Client Testimonials"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted text-lg">
            Real feedback from business owners about our web development
            and SEO services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <article key={i} className="glass rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">&#9733;</span>
                ))}
              </div>
              <blockquote className="text-muted leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
