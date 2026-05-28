import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Development & SEO Services — High-Performance Sites | MCM Digital",
  description:
    "Professional web development and SEO services. We build fast, modern websites optimized to climb search rankings and convert visitors. Free consultation available.",
  keywords:
    "web development services, SEO services, web design agency, custom web development, affordable SEO, ecommerce website development, local SEO services",
  robots: "index, follow",
  alternates: {
    canonical: "https://ign-digital.vercel.app/",
  },
  openGraph: {
    title: "Web Development & SEO Services | MCM Digital",
    description:
      "Custom websites + SEO strategies that deliver real rankings and revenue. Free audit included.",
    url: "https://ign-digital.vercel.app/",
    siteName: "MCM Digital",
    type: "website",
    images: [
      {
        url: "https://ign-digital.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "MCM Digital — Web Development & SEO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & SEO Services | MCM Digital",
    description:
      "We build and optimize websites for search engines. Free SEO audit included.",
  },
  verification: {
    google: "Si7jcboB9DPsWkn4A9CcLPTxjicstDpFtY09-e32lQg",
  },
  other: {
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    "yandex-verification": "YOUR_YANDEX_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Organization Schema - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "MCM Digital",
              url: "https://ign-digital.vercel.app",
              logo: "https://ign-digital.vercel.app/images/logo.png",
              description:
                "Professional web development and SEO services. We build fast, modern websites optimized to climb search rankings and grow your business online.",
              telephone: "+56999792393",
              email: "ignsf.business@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Valparaíso",
                addressRegion: "Valparaíso",
                addressCountry: "CL",
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [
                "https://linkedin.com/company/mcm-digital",
                "",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development & SEO Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Web Development",
                      description:
                        "Full-stack web development with modern frameworks",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO Optimization",
                      description:
                        "Data-driven SEO strategies to improve your search visibility",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Design",
                      description:
                        "Modern, responsive web design that converts",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much do web development services cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our web development services start at $2,000 for basic websites and scale based on complexity. Custom web applications typically range from $5,000-$25,000. Contact us for a free personalized quote.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does SEO take to show results?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SEO typically shows initial improvements within 3-6 months. Significant ranking gains usually appear between 6-12 months, depending on competition and current site authority.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer free SEO audits?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We offer a completely free, no-obligation SEO audit for your website. Our audit covers technical SEO, on-page optimization, backlink profile, and competitor analysis.",
                  },
                },
              ],
            }),
          }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://ign-digital.vercel.app/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://ign-digital.vercel.app/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Blog",
                  item: "https://ign-digital.vercel.app/blog",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contact",
                  item: "https://ign-digital.vercel.app/contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
