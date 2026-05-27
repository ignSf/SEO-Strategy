const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We start with a comprehensive free SEO audit and discovery call. We analyze your current website, competitors, target keywords, and business goals to create a tailored strategy.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Based on our findings, we craft a custom SEO strategy and web design that aligns with your brand. Every element is designed for maximum search visibility and conversions.",
  },
  {
    number: "03",
    title: "Development & Optimization",
    description:
      "Our developers build your site with SEO baked in from day one — semantic HTML, schema markup, Core Web Vitals optimization, mobile-first responsive design, and speed.",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "After rigorous testing, we launch your site and begin executing the SEO strategy. Monthly reporting keeps you informed as we continuously optimize for higher rankings.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding relative" aria-label="Our Process">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">4-Step Process</span>
          </h2>
          <p className="text-muted text-lg">
            A transparent, results-driven approach to web development and SEO
            that has delivered success for 150+ businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%+0.25rem)] w-[calc(100%-1.5rem)] h-px bg-gradient-to-r from-primary/40 to-transparent z-0" />
              )}
              <div className="glass rounded-2xl p-8 text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                  {s.number}
                </div>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
