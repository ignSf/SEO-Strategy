import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Abstract digital network background representing modern web technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/70 via-[#030712]/50 to-[#030712]" />
      </div>

      <div className="glow-orb w-[500px] h-[500px] bg-primary top-[-100px] left-[-100px] animate-blob" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent bottom-[10%] right-[-50px] animate-blob delay-300" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-success animate-glow" />
              <span className="text-sm text-primary-light font-medium">
                Data-Driven Agency — Free Consultation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Web Development &{" "}
              <span className="gradient-text">SEO Services</span>{" "}
              That Deliver Results
            </h1>

            <p className="text-lg sm:text-xl text-muted max-w-xl mb-10 leading-relaxed">
              We design, build, and optimize websites that attract organic
              traffic and convert visitors into customers. Real strategies
              backed by data, not empty promises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" id="cta-hero-audit" className="btn-primary text-lg">
                <span>Get Your Free SEO Audit</span>
              </Link>
              <Link href="/services" id="cta-hero-services" className="btn-outline text-lg">
                Explore Services
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-surface-border/50">
              <div>
                <div className="text-3xl font-bold gradient-text">150+</div>
                <div className="text-sm text-muted">Projects Delivered</div>
              </div>
              <div className="w-px h-10 bg-surface-border" />
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted">Client Satisfaction</div>
              </div>
              <div className="w-px h-10 bg-surface-border" />
              <div>
                <div className="text-3xl font-bold gradient-text">3x</div>
                <div className="text-sm text-muted">Avg. Traffic Growth</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-slide-up delay-200">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <Image
                src="/services-illustration.png"
                alt="Web development workspace with analytics dashboards and code editors"
                width={600}
                height={500}
                className="relative rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
