import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="bg-surface border-t border-surface-border"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-lg">
                N
              </div>
              <span className="text-xl font-bold gradient-text">Nexora Digital</span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Professional web development and SEO services. We build fast,
              modern websites designed to climb search rankings and grow your business.
            </p>
          </div>

          <nav aria-label="Services">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Web Development", href: "/services/web-development" },
                { label: "SEO Services", href: "/services/seo" },
                { label: "Web Design", href: "/services/web-design" },
                { label: "E-Commerce", href: "/services/ecommerce" },
                { label: "Local SEO", href: "/services/local-seo" },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-muted hover:text-primary-light transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-muted hover:text-primary-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-muted">
              <p>Valparaíso, Chile</p>
              <p>Remote services worldwide</p>
              <p>
                <a href="https://wa.me/56999792393" className="hover:text-primary-light transition-colors">
                  +56 9 9979 2393
                </a>
              </p>
              <p>
                <a href="mailto:ignsf.business@gmail.com" className="hover:text-primary-light transition-colors">
                  ignsf.business@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} Nexora Digital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="hover:text-primary-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
