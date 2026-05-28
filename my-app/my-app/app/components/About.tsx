import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="section-padding relative" aria-label="About Nexora Digital">
      <div className="glow-orb w-[400px] h-[400px] bg-primary bottom-0 left-[-100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <Image
              src="/team-photo.png"
              alt="Nexora Digital team working in a modern office"
              width={600}
              height={450}
              className="relative rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 hover:transform-none">
              <div className="text-3xl font-bold gradient-text">8+</div>
              <div className="text-sm text-muted">Years of Experience</div>
            </div>
          </div>

          <div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              A Team Dedicated to Your{" "}
              <span className="gradient-text">Digital Growth</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Nexora Digital is a full-service web development and SEO agency.
              We combine modern technology with data-driven SEO strategies to
              build websites that perform well in search and convert visitors
              into customers.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Our team has helped 150+ businesses transform their online
              presence. From startups to enterprises, we deliver measurable
              results with transparent reporting and dedicated support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary">
                <span>Learn More About Us</span>
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
