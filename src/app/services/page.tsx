import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';
import { Globe, Smartphone, Building2, Bot, Cloud, ShieldCheck, ShoppingCart, BarChart3, Plug, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web development, mobile apps, enterprise software, AI automation, e-commerce, and cloud services. Built for businesses in Ghana, Nigeria, the UK, and the USA. Starting from $800.',
  alternates: { canonical: 'https://esperpartners.vercel.app/services' },
};

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    slug: 'web-development',
    tag: 'Websites & Web Apps',
    desc: 'From a simple business website to a complex SaaS platform — we build fast, accessible, and conversion-optimised web products.',
    points: ['Business websites & landing pages', 'WordPress & CMS sites', 'Custom web applications (Next.js, React)', 'Progressive Web Apps (PWA)', 'API-driven frontends'],
    from: 800,
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    slug: 'mobile-apps',
    tag: 'iOS & Android',
    desc: 'Cross-platform and native mobile apps built for real users — smooth, fast, and ready for the App Store and Play Store.',
    points: ['Flutter cross-platform apps', 'Native iOS (Swift) & Android (Kotlin)', 'Mobile money & payment integration', 'Offline-first architecture', 'App Store submission & support'],
    from: 5000,
  },
  {
    icon: Building2,
    title: 'Enterprise Software',
    slug: 'enterprise-software',
    tag: 'Custom Platforms',
    desc: 'Mission-critical systems built for scale — ERP, CRM, internal tools, and multi-tenant platforms that your business runs on.',
    points: ['Custom ERP & CRM systems', 'Multi-tenant SaaS platforms', 'Internal operations tools', 'Legacy system migration', 'Compliance & security-first architecture'],
    from: 9500,
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    slug: 'ai-automation',
    tag: 'Intelligent Systems',
    desc: 'Add intelligence to your product — LLM integrations, automation pipelines, and ML features that transform how your business operates.',
    points: ['LLM integration (OpenAI, Gemini, Claude)', 'Custom chatbots & AI assistants', 'Workflow automation', 'Data pipelines & ML models', 'AI feature integration into existing products'],
    from: 6000,
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    tag: 'Infrastructure',
    desc: 'Reliable infrastructure, CI/CD pipelines, and cloud architecture that keeps your product fast, secure, and always online.',
    points: ['AWS, GCP & Azure setup', 'CI/CD pipeline design', 'Kubernetes & Docker orchestration', 'Performance monitoring & alerting', '99.99% uptime architecture'],
    from: 2500,
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    slug: 'ecommerce',
    tag: 'Online Stores',
    desc: 'Shopify stores, WooCommerce sites, and fully custom marketplaces — built to convert visitors into paying customers.',
    points: ['Shopify setup & customisation', 'WooCommerce & WordPress stores', 'Custom headless storefronts', 'Paystack, Stripe & Mobile Money', 'Multi-vendor marketplace platforms'],
    from: 1500,
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    tag: 'Security & Compliance',
    desc: 'Security audits, penetration testing, and compliance frameworks to protect your product and your users.',
    points: ['Security code review', 'Penetration testing', 'GDPR & data compliance', 'Zero-trust architecture', 'Vulnerability assessment'],
    from: 3000,
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    slug: 'data-analytics',
    tag: 'Business Intelligence',
    desc: 'Real-time dashboards, data warehouses, and BI tools that turn raw data into decisions that grow your business.',
    points: ['Custom analytics dashboards', 'Data warehouse design', 'Business intelligence tools', 'Real-time reporting', 'Data visualisation'],
    from: 4000,
  },
  {
    icon: Plug,
    title: 'API & Integrations',
    slug: 'api-integrations',
    tag: 'Connectivity',
    desc: 'Connect your systems — REST APIs, GraphQL, third-party integrations, and microservices that make everything work together.',
    points: ['REST & GraphQL API design', 'Third-party API integrations', 'Microservices architecture', 'Webhook systems', 'API documentation'],
    from: 2500,
  },
];

function fmt(usd: number) {
  return '$' + usd.toLocaleString();
}

export default function ServicesPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative overflow-hidden" style={{ padding: '140px 20px 80px', background: 'var(--bg)' }}>
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>What We Build</div>
            <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-0.04em] mb-4"
              style={{ fontSize: 'clamp(36px,5vw,72px)', color: 'var(--text)', maxWidth: 700 }}>
              Every Software Solution.<br /><span style={{ color: 'var(--orange)' }}>One Studio.</span>
            </h1>
            <p className="font-light leading-[1.7] mb-8" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 540 }}>
              From a simple landing page to a full enterprise platform — we scope it honestly, price it fairly, and deliver on time.
            </p>
            <a href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-[14px] transition-all duration-200 hover:scale-[1.03]"
              style={{ background: 'var(--orange)', color: '#fff' }}>
              See Pricing <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Services grid */}
        <div style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ maxWidth: 1180, margin: '0 auto' }}>
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.slug} className="rounded-[20px] border flex flex-col group transition-all duration-300 hover:border-[var(--orange)]"
                  style={{ background: 'var(--bg3)', borderColor: 'var(--border)', padding: '28px 24px' }}>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--orange)]"
                      style={{ background: 'rgba(255,165,0,0.12)' }}>
                      <Icon size={20} strokeWidth={1.5} style={{ color: 'var(--orange)' }} className="group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[.08em] px-3 py-1 rounded-full"
                      style={{ background: 'rgba(255,165,0,0.1)', color: 'var(--orange)', border: '1px solid rgba(255,165,0,0.2)' }}>
                      {s.tag}
                    </span>
                  </div>
                  <div className="font-syne font-bold text-[18px] tracking-[-0.02em] mb-2" style={{ color: 'var(--text)' }}>{s.title}</div>
                  <p className="text-[13px] font-light leading-[1.65] mb-5" style={{ color: 'var(--text-2)' }}>{s.desc}</p>
                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13px]" style={{ color: 'var(--text-2)' }}>
                        <CheckCircle2 size={13} strokeWidth={2} className="flex-shrink-0 mt-[2px]" style={{ color: 'var(--orange)' }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    <div>
                      <div className="text-[11px] uppercase tracking-[.06em]" style={{ color: 'var(--text-3)' }}>Starting from</div>
                      <div className="font-syne font-bold text-[18px]" style={{ color: 'var(--text)' }}>{fmt(s.from)}</div>
                    </div>
                    <a href="/contact"
                      className="inline-flex items-center gap-1 text-[13px] font-semibold transition-all duration-200 hover:gap-2"
                      style={{ color: 'var(--orange)' }}>
                      Get a Quote <ArrowRight size={13} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
