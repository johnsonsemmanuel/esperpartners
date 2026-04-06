'use client';

import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { useState } from 'react';
import { Globe, Smartphone, Layers, ShoppingCart, Bot, Cloud, ShieldCheck, BarChart3, Plug, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    id: 'websites',
    label: 'Websites',
    icon: Globe,
    tagline: 'Your online presence, done right.',
    desc: 'Business websites, landing pages, portfolios, and WordPress sites — fast, mobile-ready, and built to convert.',
    services: [
      { title: 'Landing Page', from: 800, points: ['1 page, fully responsive', 'Contact / lead form', 'SEO basics', 'Delivered in 5–7 days', '30 days support'] },
      { title: 'Business Website', from: 2200, points: ['Up to 8 pages', 'WordPress or Next.js', 'CMS so you can edit content', 'Contact form + Google Maps', 'Basic SEO setup', '60 days support'], highlight: true },
      { title: 'WordPress + E-Commerce', from: 3800, points: ['WooCommerce setup', 'Up to 50 products', 'Paystack / Stripe integration', 'Order management', 'Mobile-optimised checkout', '90 days support'] },
    ],
  },
  {
    id: 'webapps',
    label: 'Web Apps',
    icon: Layers,
    tagline: 'Custom platforms built to scale.',
    desc: 'SaaS products, dashboards, portals, and custom platforms — built with Next.js and React, designed to grow with your business.',
    services: [
      { title: 'MVP / Starter App', from: 4500, points: ['User auth (login/register)', 'Core feature set (up to 3 modules)', 'Admin dashboard', 'REST API', 'Deployed to cloud', '60 days support'] },
      { title: 'Full Product', from: 9500, points: ['Multi-role user system', 'Payment integration (Paystack, Stripe)', 'Full admin panel', 'Email notifications', 'API + database design', '3 months support', 'Dedicated PM'], highlight: true },
      { title: 'Enterprise Platform', from: 0, points: ['Everything in Full Product', 'Multi-tenant architecture', 'Third-party integrations', 'Performance & security audit', 'CI/CD pipeline', '6 months support + SLA'] },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    icon: Smartphone,
    tagline: 'iOS & Android, built with Flutter.',
    desc: 'Cross-platform mobile apps that work on both iOS and Android — smooth, fast, and ready for the App Store and Play Store.',
    services: [
      { title: 'Simple App', from: 5000, points: ['iOS + Android (Flutter)', 'Up to 5 screens', 'Basic auth', 'API integration', 'App Store submission', '60 days support'] },
      { title: 'Full Mobile App', from: 11000, points: ['iOS + Android (Flutter)', 'User auth + profiles', 'Push notifications', 'In-app payments (Paystack/Stripe)', 'Admin web dashboard', '3 months support'], highlight: true },
      { title: 'Native / Custom', from: 0, points: ['Native iOS (Swift) or Android (Kotlin)', 'Hardware integrations (camera, GPS, BLE)', 'Offline-first architecture', 'App Store + Play Store', 'Custom quote based on scope'] },
    ],
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    icon: ShoppingCart,
    tagline: 'Sell online with local payment support.',
    desc: 'Shopify stores, WooCommerce sites, and fully custom marketplaces — with Paystack, mobile money, and Stripe built in.',
    services: [
      { title: 'Shopify Store', from: 1500, points: ['Shopify setup + theme', 'Up to 30 products', 'Payment gateway', 'Mobile optimised', 'Basic SEO', '30 days support'] },
      { title: 'Custom Storefront', from: 7000, points: ['Next.js + custom design', 'Unlimited products', 'Paystack / Stripe / Mobile Money', 'Vendor dashboard (if marketplace)', 'Order tracking', '3 months support'], highlight: true },
      { title: 'Multi-Vendor Marketplace', from: 14000, points: ['Vendor onboarding + dashboards', 'Commission management', 'Escrow / split payments', 'Buyer & seller reviews', 'Admin control panel', '6 months support'] },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: Bot,
    tagline: 'Add intelligence to your product.',
    desc: 'LLM integrations, chatbots, and automation pipelines that save time, reduce manual work, and make your product smarter.',
    services: [
      { title: 'API & Integrations', from: 2500, points: ['REST or GraphQL API', 'Up to 3 integrations', 'Documentation', 'Error handling + logging', '60 days support'] },
      { title: 'AI Feature Integration', from: 6000, points: ['LLM integration (OpenAI, Gemini)', 'Custom prompt engineering', 'Data pipeline setup', 'API wrapper', 'Testing + monitoring', '3 months support'], highlight: true },
      { title: 'Full Custom Build', from: 0, points: ['Tech audit of existing system', 'Custom architecture design', 'Your stack, your rules', 'Team augmentation available', 'Scoped after discovery call'] },
    ],
  },
  {
    id: 'other',
    label: 'Cloud & Security',
    icon: Cloud,
    tagline: 'Infrastructure that never sleeps.',
    desc: 'Cloud setup, CI/CD pipelines, security audits, and DevOps — keeping your product fast, secure, and always online.',
    services: [
      { title: 'Cloud Setup', from: 2500, points: ['AWS / GCP / Azure', 'Server configuration', 'Domain + SSL setup', 'Basic monitoring', '30 days support'] },
      { title: 'DevOps & CI/CD', from: 4000, points: ['CI/CD pipeline (GitHub Actions)', 'Docker + Kubernetes', 'Auto-deploy on push', 'Staging + production environments', 'Uptime monitoring'], highlight: true },
      { title: 'Security Audit', from: 3000, points: ['Code security review', 'Penetration testing', 'GDPR compliance check', 'Vulnerability report', 'Fix recommendations'] },
    ],
  },
];

function fmt(usd: number) {
  if (usd === 0) return 'Custom';
  return '$' + usd.toLocaleString();
}

export default function ServicesPage() {
  const [active, setActive] = useState('websites');
  const cat = categories.find(c => c.id === active)!;
  const Icon = cat.icon;

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
              Pick your category below and see exactly what we build, what is included, and what it costs.
            </p>
            <a href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-[14px] transition-all duration-200 hover:scale-[1.03]"
              style={{ background: 'var(--orange)', color: '#fff' }}>
              See Full Pricing <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Category tabs + content */}
        <div style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>

            {/* Tab bar */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((c) => {
                const CIcon = c.icon;
                return (
                  <button key={c.id} onClick={() => setActive(c.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200"
                    style={{
                      background: active === c.id ? 'var(--orange)' : 'var(--bg3)',
                      color: active === c.id ? '#fff' : 'var(--text-2)',
                      border: `1px solid ${active === c.id ? 'var(--orange)' : 'var(--border)'}`,
                      cursor: 'none',
                    }}>
                    <CIcon size={13} strokeWidth={1.5} />
                    {c.label}
                  </button>
                );
              })}
            </div>

            {/* Active category */}
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}>

                {/* Category header */}
                <div className="flex items-start gap-4 mb-8 p-6 rounded-2xl border"
                  style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,165,0,0.12)' }}>
                    <Icon size={22} strokeWidth={1.5} style={{ color: 'var(--orange)' }} />
                  </div>
                  <div>
                    <div className="font-syne font-bold text-[18px] mb-1" style={{ color: 'var(--text)' }}>{cat.tagline}</div>
                    <div className="text-[14px] font-light" style={{ color: 'var(--text-2)' }}>{cat.desc}</div>
                  </div>
                </div>

                {/* Service tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {cat.services.map((s) => (
                    <div key={s.title}
                      className="rounded-[20px] border flex flex-col"
                      style={{
                        background: s.highlight ? 'var(--orange)' : 'var(--bg3)',
                        borderColor: s.highlight ? 'var(--orange)' : 'var(--border)',
                        padding: '28px 24px',
                      }}>
                      <div className="text-[11px] font-bold uppercase tracking-[.1em] mb-3"
                        style={{ color: s.highlight ? 'rgba(255,255,255,0.7)' : 'var(--text-3)' }}>
                        {s.title}
                      </div>
                      <div className="font-syne font-extrabold tracking-[-0.04em] leading-none mb-4"
                        style={{ fontSize: 36, color: s.highlight ? '#fff' : 'var(--text)' }}>
                        {fmt(s.from)}
                        {s.from > 0 && <span className="text-[14px] font-normal ml-1" style={{ color: s.highlight ? 'rgba(255,255,255,0.5)' : 'var(--text-3)' }}>USD</span>}
                      </div>
                      <ul className="flex flex-col gap-[10px] mb-7 flex-1">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-[13px] font-light"
                            style={{ color: s.highlight ? 'rgba(255,255,255,0.85)' : 'var(--text-2)' }}>
                            <CheckCircle2 size={14} strokeWidth={2} className="flex-shrink-0 mt-[2px]"
                              style={{ color: s.highlight ? '#fff' : 'var(--orange)' }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <a href="/contact"
                        className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-[13px] font-semibold transition-all duration-200 hover:scale-[1.02]"
                        style={{ background: s.highlight ? '#fff' : 'var(--orange)', color: s.highlight ? 'var(--orange)' : '#fff' }}>
                        {s.from === 0 ? 'Get a Custom Quote' : 'Start This Project'} <ArrowRight size={13} strokeWidth={2} />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
