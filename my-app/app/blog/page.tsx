import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "Blog — Web Development & SEO Insights | Nexora Digital",
  description:
    "Expert articles on web development, SEO strategies, and digital marketing. Learn how to improve your website performance and search engine rankings.",
  alternates: {
    canonical: "https://nexora.digital/blog",
  },
  openGraph: {
    title: "Blog — Web Development & SEO Insights | Nexora Digital",
    description:
      "Expert articles on web development, SEO, and digital growth strategies.",
    url: "https://nexora.digital/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Blog Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              Our Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Web Development &{" "}
              <span className="gradient-text">SEO Insights</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Actionable strategies, expert guides, and industry insights to
              help your business grow online. Updated regularly with the
              latest trends in web development and search engine optimization.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="glass rounded-2xl overflow-hidden group">
                {/* Category color bar */}
                <div
                  className={`h-1.5 ${
                    post.category === "SEO"
                      ? "bg-gradient-to-r from-primary to-accent"
                      : "bg-gradient-to-r from-secondary to-primary"
                  }`}
                />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-primary/10 text-primary-light border border-primary/20 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted">{post.readTime}</span>
                    <span className="text-xs text-muted">•</span>
                    <time className="text-xs text-muted" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="text-xs bg-surface-light text-muted border border-surface-border px-2 py-0.5 rounded-full"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-light text-sm font-semibold hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Read Full Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 mt-20 text-center">
          <div className="glass rounded-2xl p-10 hover:transform-none">
            <h2 className="text-2xl font-bold mb-4">
              Want These Strategies Applied to{" "}
              <span className="gradient-text">Your Website</span>?
            </h2>
            <p className="text-muted mb-6">
              Our team implements all these best practices and more. Get a free
              SEO audit and see how we can improve your search visibility.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Get Your Free SEO Audit</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
