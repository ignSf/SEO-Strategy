import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { blogPosts } from "../data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Nexora Digital Blog`,
    description: post.description,
    keywords: post.keywords.join(", "),
    alternates: {
      canonical: `https://nexora.digital/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://nexora.digital/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let inCodeBlock = false;
    let codeLines: string[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="space-y-2 mb-6 ml-4">
            {listItems.map((item, i) => (
              <li key={i} className="text-muted leading-relaxed flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        const header = tableRows[0];
        const body = tableRows.slice(1);
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-border">
                  {header.map((h, i) => (
                    <th key={i} className="text-left py-3 px-4 font-semibold text-foreground">
                      {h.trim().replace(/\*\*/g, "")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, i) => (
                  <tr key={i} className="border-b border-surface-border/50">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4 text-muted" dangerouslySetInnerHTML={{ __html: formatInline(cell.trim()) }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    const formatInline = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
        .replace(/`(.*?)`/g, '<code class="bg-surface-light px-1.5 py-0.5 rounded text-primary-light text-xs">$1</code>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-light hover:underline">$1</a>');
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (trimmed.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${elements.length}`} className="bg-surface rounded-xl p-4 mb-6 overflow-x-auto text-sm text-muted border border-surface-border">
              <code>{codeLines.join("\n")}</code>
            </pre>
          );
          codeLines = [];
          inCodeBlock = false;
        } else {
          flushList();
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }

      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        flushList();
        if (trimmed.includes("---")) continue;
        const cells = trimmed.split("|").filter(Boolean);
        tableRows.push(cells);
        inTable = true;
        continue;
      } else if (inTable) {
        flushTable();
      }

      if (trimmed === "") {
        flushList();
        continue;
      }

      if (trimmed.startsWith("#### ")) {
        flushList();
        elements.push(
          <h4 key={`h4-${i}`} className="text-lg font-bold mt-8 mb-3">
            {trimmed.replace("#### ", "")}
          </h4>
        );
      } else if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={`h3-${i}`} className="text-xl font-bold mt-10 mb-4 gradient-text">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={`h2-${i}`} className="text-2xl font-bold mt-12 mb-5">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("> ")) {
        flushList();
        elements.push(
          <blockquote
            key={`bq-${i}`}
            className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 rounded-r-xl"
          >
            <p className="text-muted italic" dangerouslySetInnerHTML={{ __html: formatInline(trimmed.replace("> ", "")) }} />
          </blockquote>
        );
      } else if (/^\d+\.\s/.test(trimmed)) {
        const text = trimmed.replace(/^\d+\.\s/, "");
        listItems.push(text);
      } else if (trimmed.startsWith("- ")) {
        listItems.push(trimmed.replace("- ", ""));
      } else {
        flushList();
        elements.push(
          <p key={`p-${i}`} className="text-muted leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
        );
      }
    }

    flushList();
    flushTable();
    return elements;
  };

  // Related posts
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 sm:px-6 mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-primary-light transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-primary-light transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-foreground truncate max-w-[200px]">{post.title}</li>
          </ol>
        </nav>

        {/* Article header */}
        <header className="max-w-3xl mx-auto px-4 sm:px-6 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs bg-primary/10 text-primary-light border border-primary/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-muted">{post.readTime}</span>
            <span className="text-sm text-muted">•</span>
            <time className="text-sm text-muted" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose-custom">{renderContent(post.content)}</div>
        </article>

        {/* Author + CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-16">
          <div className="glass rounded-2xl p-8 hover:transform-none text-center">
            <h3 className="text-xl font-bold mb-3">
              Need Help Implementing This?
            </h3>
            <p className="text-muted mb-6">
              Our team of experts can apply all these strategies to your
              website. Get a free audit and personalized recommendations.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Get Your Free SEO Audit</span>
            </Link>
          </div>
        </section>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-16">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="glass rounded-2xl p-6 group">
                  <span className="text-xs text-primary-light">{rp.category}</span>
                  <h4 className="font-bold mt-2 mb-2 group-hover:text-primary-light transition-colors">
                    {rp.title}
                  </h4>
                  <p className="text-sm text-muted line-clamp-2">{rp.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "Nexora Digital",
            },
            publisher: {
              "@type": "Organization",
              name: "Nexora Digital",
              url: "https://nexora.digital",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://nexora.digital/blog/${post.slug}`,
            },
          }),
        }}
      />
    </>
  );
}
