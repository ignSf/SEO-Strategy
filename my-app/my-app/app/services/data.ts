export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  sections: { heading: string; content: string }[];
  features: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "web-development",
    title: "Custom Web Development",
    metaTitle: "Custom Web Development Services — Fast, Scalable Sites | MCM Digital",
    metaDescription:
      "Professional custom web development services using React, Next.js, and Node.js. We build fast, scalable websites tailored to your business. Free consultation.",
    headline: "Custom Web Development Services",
    intro:
      "We build websites and web applications from scratch using modern technologies. Every project is architected for performance, security, and search engine visibility from day one.",
    sections: [
      {
        heading: "Why Custom Development Matters",
        content:
          "Template websites share code with millions of other sites, which limits your ability to stand out in search results and creates performance bottlenecks. A custom-built website gives you complete control over every aspect: page speed, user experience, SEO markup, and functionality. Google rewards websites that load fast, provide excellent user experience, and offer unique value. Custom development lets you optimize all three without the constraints of a pre-built theme or page builder.",
      },
      {
        heading: "Our Technology Stack",
        content:
          "We work primarily with React and Next.js for the frontend, which provides server-side rendering for SEO, automatic code splitting for speed, and a component architecture that scales. On the backend, we use Node.js with PostgreSQL or MongoDB depending on the project requirements. For deployment, we recommend Vercel or AWS, both of which provide edge computing and automatic SSL. Every project includes TypeScript for type safety, automated testing, and CI/CD pipelines for reliable deployments.",
      },
      {
        heading: "What You Get",
        content:
          "A website built to your exact specifications with clean, maintainable code. Full ownership of the codebase. A mobile-first responsive design that works on every device. Built-in SEO foundations including semantic HTML, schema markup, sitemap generation, and optimized meta tags. Performance targets of under 2 seconds load time and green Core Web Vitals scores. And ongoing support to keep everything running smoothly.",
      },
    ],
    features: [
      { title: "React & Next.js", description: "Modern frameworks with server-side rendering for maximum SEO benefit." },
      { title: "API Development", description: "RESTful and GraphQL APIs that integrate with any third-party service." },
      { title: "Database Design", description: "Scalable data architecture with PostgreSQL, MongoDB, or Supabase." },
      { title: "Performance Optimized", description: "Sub-2-second load times with Core Web Vitals in the green zone." },
      { title: "Mobile-First", description: "Responsive design that works flawlessly on every screen size." },
      { title: "SEO-Ready", description: "Semantic markup, schema data, and sitemap generation built in." },
    ],
    faq: [
      { question: "How long does a custom website take to build?", answer: "Most projects take between 6 and 12 weeks from kickoff to launch, depending on complexity. We provide a detailed timeline during the proposal phase." },
      { question: "Do I own the code?", answer: "Yes, completely. You get full ownership of the entire codebase, including source files, documentation, and deployment configurations." },
      { question: "Can you work with my existing design?", answer: "Absolutely. We can implement designs from Figma, Sketch, Adobe XD, or any other design tool. We also offer design services if you need them." },
    ],
  },
  {
    slug: "seo",
    title: "SEO Services",
    metaTitle: "SEO Services — Data-Driven Search Optimization | MCM Digital",
    metaDescription:
      "Comprehensive SEO services including technical audits, keyword strategy, content optimization, and link building. Improve your search rankings with data-driven strategies.",
    headline: "SEO Services That Drive Organic Growth",
    intro:
      "We help businesses improve their visibility in search engines through technical optimization, content strategy, and authority building. No tricks, no shortcuts — just proven methods that produce sustainable results.",
    sections: [
      {
        heading: "Our SEO Approach",
        content:
          "We start every engagement with a thorough audit of your current website. This covers technical health, on-page optimization, content quality, backlink profile, and competitor positioning. From there, we build a customized strategy that targets the keywords most likely to bring qualified traffic to your business. SEO is not a one-time task. It requires consistent execution over months. We handle the technical fixes, content recommendations, and link building while keeping you informed with monthly reports that show exactly what we did and what changed.",
      },
      {
        heading: "Technical SEO",
        content:
          "The foundation of good rankings is a technically sound website. We audit and fix issues related to page speed, mobile usability, crawlability, indexing, duplicate content, broken links, and structured data. We ensure your sitemap is properly configured, your robots.txt is optimized, and your Core Web Vitals are in the green zone. These technical factors directly affect how Google crawls and ranks your pages.",
      },
      {
        heading: "Content Strategy and On-Page Optimization",
        content:
          "We research keywords relevant to your business and map them to specific pages. Each page gets optimized title tags, meta descriptions, heading structure, internal links, and content recommendations. For businesses that need ongoing content, we develop a topic cluster strategy where blog posts target long-tail keywords and link back to your main service pages, building topical authority over time.",
      },
      {
        heading: "Link Building and Authority",
        content:
          "Backlinks from reputable websites signal to Google that your content is trustworthy. We build links through guest posting on relevant industry sites, directory submissions, content marketing, and digital PR. Every link we build is from a real, relevant website. We do not use link farms, PBNs, or any technique that could result in a Google penalty.",
      },
    ],
    features: [
      { title: "Technical Audit", description: "Comprehensive analysis of your website's technical SEO health." },
      { title: "Keyword Strategy", description: "Research-backed keyword mapping for every page on your site." },
      { title: "On-Page Optimization", description: "Title tags, meta descriptions, headings, and content optimization." },
      { title: "Link Building", description: "White-hat backlink acquisition from relevant, authoritative sites." },
      { title: "Content Planning", description: "Topic cluster strategy with editorial calendar and content briefs." },
      { title: "Monthly Reporting", description: "Clear reports showing rankings, traffic, and actions taken." },
    ],
    faq: [
      { question: "How long until I see results from SEO?", answer: "Most businesses see initial improvements within 3 to 6 months. Significant gains typically appear between 6 and 12 months, depending on your competition and starting point." },
      { question: "Do you guarantee first page rankings?", answer: "No reputable SEO agency can guarantee specific rankings because Google's algorithm considers hundreds of factors. What we guarantee is a transparent, data-driven process and consistent effort toward improving your visibility." },
      { question: "What is included in the free audit?", answer: "Our audit covers technical SEO issues, on-page optimization gaps, content quality, backlink profile, competitor analysis, and a prioritized list of recommendations." },
    ],
  },
  {
    slug: "web-design",
    title: "Web Design",
    metaTitle: "Professional Web Design Services — Modern & Responsive | MCM Digital",
    metaDescription:
      "Professional web design services focused on user experience, conversions, and brand identity. Responsive designs that look great on every device.",
    headline: "Professional Web Design That Converts",
    intro:
      "Good design is not just about looking nice. It is about guiding visitors toward a specific action — whether that is making a purchase, filling out a form, or picking up the phone. We design websites with conversion in mind from the first wireframe.",
    sections: [
      {
        heading: "Design With Purpose",
        content:
          "Every design decision we make is intentional. Color choices, typography, spacing, button placement — all of these affect how users perceive your brand and how likely they are to take action. We study your target audience, analyze your competitors, and design interfaces that feel intuitive and trustworthy. The result is a website that not only represents your brand well but actually helps your business grow.",
      },
      {
        heading: "Mobile-First Responsive Design",
        content:
          "Over 60% of web traffic comes from mobile devices. We design for mobile screens first, then scale up to tablets and desktops. This ensures your site works perfectly on every device and meets Google's mobile-first indexing requirements, which directly affects your search rankings.",
      },
      {
        heading: "From Concept to Implementation",
        content:
          "Our process starts with wireframes and user flows, moves to high-fidelity mockups in Figma, and ends with pixel-perfect implementation in code. You are involved at every stage with opportunities to review and provide feedback before we move forward.",
      },
    ],
    features: [
      { title: "UI/UX Design", description: "User-centered design with wireframes, prototypes, and usability testing." },
      { title: "Responsive Layouts", description: "Mobile-first design that adapts to every screen size." },
      { title: "Brand Identity", description: "Visual systems including color, typography, and component libraries." },
      { title: "Figma Deliverables", description: "Full design files with components, styles, and documentation." },
      { title: "Accessibility", description: "WCAG 2.1 compliant designs that work for everyone." },
      { title: "Conversion Focused", description: "Strategic CTA placement and user flow optimization." },
    ],
    faq: [
      { question: "Do you design in Figma?", answer: "Yes. All our designs are created in Figma with organized components, styles, and documentation. You get full access to the design files." },
      { question: "Can you redesign my existing website?", answer: "Yes. We can redesign your current site while preserving your SEO value through proper redirects and content migration." },
      { question: "How many revision rounds are included?", answer: "Our standard process includes two rounds of revisions per design phase. Additional revisions are available if needed." },
    ],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Development",
    metaTitle: "E-Commerce Website Development — Custom Online Stores | MCM Digital",
    metaDescription:
      "Custom e-commerce development with Shopify, WooCommerce, or fully custom solutions. Secure payments, inventory management, and conversion-optimized checkout.",
    headline: "E-Commerce Development That Drives Sales",
    intro:
      "We build online stores that are fast, secure, and optimized for conversions. Whether you need a Shopify setup, a WooCommerce customization, or a fully custom e-commerce platform, we deliver solutions that grow with your business.",
    sections: [
      {
        heading: "Choosing the Right Platform",
        content:
          "The best e-commerce platform depends on your specific needs. Shopify is excellent for businesses that want a managed solution with minimal maintenance. WooCommerce works well for WordPress users who need flexibility. And custom-built solutions using Next.js with Stripe or similar payment providers give you maximum control over performance and user experience. We help you evaluate the options and choose what makes sense for your budget, timeline, and growth plans.",
      },
      {
        heading: "Conversion-Optimized Checkout",
        content:
          "Cart abandonment is one of the biggest challenges in e-commerce. We design checkout flows that minimize friction: fewer form fields, multiple payment options, guest checkout, progress indicators, and trust signals at every step. Small improvements in checkout conversion can have a significant impact on your revenue.",
      },
      {
        heading: "SEO for E-Commerce",
        content:
          "Product pages need specialized SEO treatment. We implement product schema markup so your items can appear with prices and reviews in search results. Category pages are optimized with proper heading structure and internal linking. And we set up technical foundations like canonical tags and pagination to prevent the duplicate content issues that are common in online stores.",
      },
    ],
    features: [
      { title: "Shopify & Custom", description: "Shopify, WooCommerce, or fully custom e-commerce solutions." },
      { title: "Payment Integration", description: "Stripe, PayPal, and local payment methods configured securely." },
      { title: "Inventory Management", description: "Product catalogs, stock tracking, and order management systems." },
      { title: "Product Schema", description: "Structured data for rich product listings in search results." },
      { title: "Checkout Optimization", description: "Streamlined checkout flows designed to reduce cart abandonment." },
      { title: "Analytics Setup", description: "E-commerce tracking in GA4 with conversion funnels and revenue data." },
    ],
    faq: [
      { question: "Which e-commerce platform do you recommend?", answer: "It depends on your needs. Shopify for managed simplicity, WooCommerce for WordPress flexibility, or custom Next.js for maximum performance and control. We help you decide during the consultation." },
      { question: "Can you migrate my existing store?", answer: "Yes. We handle migrations from any platform including product data, customer accounts, order history, and SEO redirects to preserve your rankings." },
      { question: "Do you set up payment processing?", answer: "Yes. We configure Stripe, PayPal, and local payment gateways. We also handle SSL certificates and PCI compliance requirements." },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    metaTitle: "Local SEO Services — Google Maps & Local Search | MCM Digital",
    metaDescription:
      "Local SEO services to help your business appear in Google Maps and local search results. Google Business Profile optimization, citations, and review management.",
    headline: "Local SEO — Dominate Your Area",
    intro:
      "If your business serves a specific geographic area, local SEO is the most cost-effective way to attract new customers. We optimize your presence in Google Maps, local search results, and business directories.",
    sections: [
      {
        heading: "Google Business Profile Optimization",
        content:
          "Your Google Business Profile is often the first thing potential customers see. We set it up completely — business categories, service areas, descriptions, photos, posts, and Q&A. A fully optimized profile significantly increases your chances of appearing in the local map pack, which is the top section of local search results and gets the majority of clicks.",
      },
      {
        heading: "Local Citations and Directories",
        content:
          "Consistency matters. Your business name, address, and phone number need to be identical across every directory and platform. We audit your existing citations, fix inconsistencies, and register your business in relevant directories including Google, Bing Places, Apple Maps, Yelp, and industry-specific platforms.",
      },
      {
        heading: "Review Strategy",
        content:
          "Reviews directly affect your local rankings and click-through rates. We implement systems to encourage satisfied customers to leave reviews, and we help you develop a process for responding to all reviews — both positive and negative. Consistent review activity signals to Google that your business is active and trustworthy.",
      },
    ],
    features: [
      { title: "Google Business Profile", description: "Complete setup and ongoing optimization of your business listing." },
      { title: "Citation Building", description: "Consistent NAP across all major directories and platforms." },
      { title: "Review Management", description: "Systems to generate reviews and respond professionally." },
      { title: "Local Keywords", description: "Geo-targeted keyword research and on-page optimization." },
      { title: "Map Pack Optimization", description: "Strategies to appear in Google's local 3-pack results." },
      { title: "Competitor Analysis", description: "Analysis of local competitors and opportunities to outrank them." },
    ],
    faq: [
      { question: "How long does local SEO take?", answer: "Local SEO typically shows results faster than traditional SEO. Many businesses see improvements in Google Maps rankings within 2 to 4 months." },
      { question: "Do I need a physical address?", answer: "For Google Maps, you need either a physical location or a defined service area. We can help you set up either option correctly." },
      { question: "Can you help with negative reviews?", answer: "We help you develop a professional response strategy for negative reviews and implement processes to generate more positive reviews from satisfied customers." },
    ],
  },
];
