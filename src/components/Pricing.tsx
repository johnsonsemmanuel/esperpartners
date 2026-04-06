'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight, Globe, Smartphone, ShoppingCart, Layers, Settings, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';

type Currency = 'USD' | 'GHS' | 'NGN';

const rates: Record<Currency, number> = { USD: 1, GHS: 15.3, NGN: 1620 };
const symbols: Record<Currency, string> = { USD: '$', GHS: 'GH₵', NGN: '₦' };

function fmt(usd: number, currency: Currency): string {
  const val = Math.round(usd * rates[currency]);
  if (val >= 1_000_000) return symbols[currency] + (val / 1_000_000).toFixed(1) + 'M';
  if (val >= 1_000) return symbols[currency] + (val / 1_000).toFixed(0) + 'K';
  return symbols[currency] + val.toLocaleString();
}

const categories = [
  {
    id: 'websites',
    icon: Globe,
    label: 'Websites',
    desc: 'Business websites, landing pages, portfolios, and WordPress sites.',
    tiers: [
      {
        name: 'Landing Page',
        usd: 800,
        desc: 'Single-page site to capture leads or showcase a product. Fast, clean, mobile-ready.',
        features: ['1 page, fully responsive', 'Contact / lead form', 'SEO basics', 'Delivered in 5–7 days', '30 days support'],
        highlight: false,
      },
      {
        name: 'Business Website',
        usd: 2200,
        desc: 'Multi-page website for a company, NGO, or professional service. WordPress or Next.js.',
        features: ['Up to 8 pages', 'WordPress or Next.js', 'CMS so you can edit content', 'Contact form + Google Maps', 'Basic SEO setup', '60 days support'],
        highlight: true,
      },
      {
        name: 'WordPress + E-Commerce',
        usd: 3800,
        desc: 'WooCommerce store with product listings, cart, and payment integration.',
        features: ['WooCommerce setup', 'Up to 50 products', 'Paystack / Stripe integration', 'Order management', 'Mobile-optimised checkout', '90 days support'],
        highlight: false,
      },
    ],
  },
  {
    id: 'webapps',
    icon: Layers,
    label: 'Web Applications',
    desc: 'Custom-built platforms, SaaS products, dashboards, and portals.',
    tiers: [
      {
        name: 'MVP / Starter App',
        usd: 4500,
        desc: 'A focused web app with core features to validate your idea and get to market fast.',
        features: ['User auth (login/register)', 'Core feature set (up to 3 modules)', 'Admin dashboard', 'REST API', 'Deployed to cloud', '60 days support'],
        highlight: false,
      },
      {
        name: 'Full Product',
        usd: 9500,
        desc: 'A complete web application — multi-role, payment-ready, and built to scale.',
        features: ['Multi-role user system', 'Payment integration (Paystack, Stripe)', 'Full admin panel', 'Email notifications', 'API + database design', '3 months support', 'Dedicated PM'],
        highlight: true,
      },
      {
        name: 'Enterprise Platform',
        usd: 0,
        desc: 'Large-scale systems, ERP integrations, multi-tenant SaaS, or complex workflows.',
        features: ['Everything in Full Product', 'Multi-tenant architecture', 'Third-party integrations', 'Performance & security audit', 'CI/CD pipeline', '6 months support + SLA'],
        highlight: false,
      },
    ],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    label: 'Mobile Apps',
    desc: 'iOS, Android, and cross-platform apps built with Flutter or React Native.',
    tiers: [
      {
        name: 'Simple App',
        usd: 5000,
        desc: 'A focused mobile app with 3–5 screens. Great for MVPs and internal tools.',
        features: ['iOS + Android (Flutter)', 'Up to 5 screens', 'Basic auth', 'API integration', 'App Store submission', '60 days support'],
        highlight: false,
      },
      {
        name: 'Full Mobile App',
        usd: 11000,
        desc: 'A complete consumer or business app with auth, payments, and notifications.',
        features: ['iOS + Android (Flutter)', 'User auth + profiles', 'Push notifications', 'In-app payments (Paystack/Stripe)', 'Admin web dashboard', '3 months support'],
        highlight: true,
      },
      {
        name: 'Custom / Native',
        usd: 0,
        desc: 'Native Swift (iOS) or Kotlin (Android) for performance-critical or hardware-integrated apps.',
        features: ['Native iOS or Android', 'Hardware integrations (camera, GPS, BLE)', 'Offline-first architecture', 'App Store + Play Store', 'Custom quote based on scope'],
        highlight: false,
      },
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    label: 'E-Commerce',
    desc: 'Online stores, marketplaces, and headless commerce solutions.',
    tiers: [
      {
        name: 'Shopify Store',
        usd: 1500,
        desc: 'A professional Shopify store set up, themed, and ready to sell.',
        features: ['Shopify setup + theme', 'Up to 30 products', 'Payment gateway', 'Mobile optimised', 'Basic SEO', '30 days support'],
        highlight: false,
      },
      {
        name: 'Custom Storefront',
        usd: 7000,
        desc: 'A headless or custom-built store with full control over UX and performance.',
        features: ['Next.js + custom design', 'Unlimited products', 'Paystack / Stripe / Mobile Money', 'Vendor dashboard (if marketplace)', 'Order tracking', '3 months support'],
        highlight: true,
      },
      {
        name: 'Multi-Vendor Marketplace',
        usd: 14000,
        desc: 'A full marketplace platform where multiple vendors can list and sell products.',
        features: ['Vendor onboarding + dashboards', 'Commission management', 'Escrow / split payments', 'Buyer & seller reviews', 'Admin control panel', '6 months support'],
        highlight: false,
      },
    ],
  },
  {
    id: 'custom',
    icon: Settings,
    label: 'Custom Tech',
    desc: 'AI integrations, APIs, DevOps, or building on your existing stack.',
    tiers: [
      {
        name: 'API & Integrations',
        usd: 2500,
        desc: 'Connect your existing systems — CRMs, payment gateways, third-party APIs.',
        features: ['REST or GraphQL API', 'Up to 3 integrations', 'Documentation', 'Error handling + logging', '60 days support'],
        highlight: false,
      },
      {
        name: 'AI Feature Integration',
        usd: 6000,
        desc: 'Add AI to your existing product — chatbots, LLM features, automation pipelines.',
        features: ['LLM integration (OpenAI, Gemini)', 'Custom prompt engineering', 'Data pipeline setup', 'API wrapper', 'Testing + monitoring', '3 months support'],
        highlight: true,
      },
      {
        name: 'Full Custom Build',
        usd: 0,
        desc: 'Building on your existing stack, migrating systems, or a fully bespoke architecture.',
        features: ['Tech audit of existing system', 'Custom architecture design', 'Your stack, your rules', 'Team augmentation available', 'Scoped after discovery call'],
        highlight: false,
      },
    ],
  },
  {
    id: 'retainer',
    icon: RefreshCw,
    label: 'Monthly Retainers',
    desc: 'Ongoing engineering support — maintenance, new features, or an embedded team.',
    tiers: [
      {
        name: 'Maintenance',
        usd: 1200,
        desc: 'Bug fixes, updates, and small improvements for an existing product.',
        features: ['20 hrs/month', 'Bug fixes & patches', 'Monthly report', 'Response within 48h'],
        highlight: false,
        period: '/mo',
      },
      {
        name: 'Active Development',
        usd: 2800,
        desc: 'New features, integrations, and continuous product improvement every month.',
        features: ['50 hrs/month', 'New feature development', 'Weekly sync call', 'Priority 24h response', 'Dedicated engineer'],
        highlight: true,
        period: '/mo',
      },
      {
        name: 'Embedded Team',
        usd: 5500,
        desc: 'A full engineering team working as an extension of your business.',
        features: ['100+ hrs/month', 'Full-stack team (dev + design + QA)', 'Daily standups', 'Sprint planning', 'Slack/Teams integration', '4h response SLA'],
        highlight: false,
        period: '/mo',
      },
    ],
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [activeTab, setActiveTab] = useState('websites');

  const active = categories.find(c => c.id === activeTab)!;

  return (
    <section id="pricing" style={{ padding: '80px 20px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>

        {/* Header + currency switcher */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-3" style={{ color: 'var(--orange)' }}>Transparent Pricing</div>
              <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-2" style={{ fontSize: 'clamp(28px,3.8vw,48px)', color: 'var(--text)' }}>
                Priced by What <span style={{ color: 'var(--orange)' }}>You Actually Need</span>
              </h2>
              <p className="font-light" style={{ fontSize: 15, color: 'var(--text-2)', maxWidth: 480 }}>
                No vague tiers. Pick your service type and see exactly what it costs — in your currency.
              </p>
            </div>
            {/* Currency switcher */}
            <div className="flex items-center gap-1 p-1 rounded-full flex-shrink-0"
              style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
              {(['USD', 'GHS', 'NGN'] as Currency[]).map((c) => (
                <motion.button key={c} onClick={() => setCurrency(c)}
                  className="px-4 py-[7px] rounded-full text-[13px] font-semibold transition-colors duration-200"
                  style={{ background: currency === c ? 'var(--orange)' : 'transparent', color: currency === c ? '#fff' : 'var(--text-3)', cursor: 'none' }}
                  whileTap={{ scale: 0.95 }}>
                  {c}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Category tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.button key={cat.id} onClick={() => setActiveTab(cat.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-colors duration-200"
                  style={{
                    background: activeTab === cat.id ? 'var(--orange)' : 'var(--bg2)',
                    color: activeTab === cat.id ? '#fff' : 'var(--text-2)',
                    border: `1px solid ${activeTab === cat.id ? 'var(--orange)' : 'var(--border)'}`,
                    cursor: 'none',
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                  <Icon size={13} strokeWidth={1.5} />
                  {cat.label}
                </motion.button>
              );
            })}
          </div>
        </FadeIn>

        {/* Active category description */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}>

            <p className="text-[14px] font-light mb-8" style={{ color: 'var(--text-2)' }}>{active.desc}</p>

            {/* Tier cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {active.tiers.map((t) => (
                <motion.div key={t.name}
                  className="rounded-[20px] flex flex-col relative"
                  style={{
                    background: 'var(--bg2)',
                    border: t.highlight
                      ? '1.5px solid var(--orange)'
                      : '1px solid var(--border)',
                    padding: '28px 24px',
                    boxShadow: t.highlight
                      ? '0 0 32px rgba(255,165,0,0.15), inset 0 0 24px rgba(255,165,0,0.04)'
                      : 'none',
                  }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}>

                  {/* Most Popular badge */}
                  {t.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-[4px] rounded-full text-[11px] font-bold uppercase tracking-[.08em] text-white"
                      style={{ background: 'var(--orange)', whiteSpace: 'nowrap' }}>
                      Most Popular
                    </div>
                  )}

                  <div className="text-[11px] font-bold uppercase tracking-[.1em] mb-3"
                    style={{ color: t.highlight ? 'var(--orange)' : 'var(--text-3)' }}>
                    {t.name}
                  </div>

                  {/* Price */}
                  <div className="font-syne font-extrabold tracking-[-0.04em] leading-none mb-1"
                    style={{ fontSize: 36, color: 'var(--text)' }}>
                    {t.usd === 0 ? 'Custom' : fmt(t.usd, currency)}
                    {'period' in t && t.usd > 0 && (
                      <span className="text-[16px] font-normal ml-1" style={{ color: 'var(--text-3)' }}>
                        {(t as { period?: string }).period}
                      </span>
                    )}
                  </div>

                  {t.usd > 0 && currency !== 'USD' && (
                    <div className="text-[12px] mb-3" style={{ color: 'var(--text-3)' }}>
                      ≈ ${t.usd.toLocaleString()} USD
                    </div>
                  )}
                  {t.usd === 0 && (
                    <div className="text-[12px] mb-3" style={{ color: 'var(--text-3)' }}>
                      Let&apos;s talk scope
                    </div>
                  )}

                  <p className="text-[13px] font-light leading-[1.6] mb-5 pb-5 mt-1"
                    style={{ color: 'var(--text-2)', borderBottom: '1px solid var(--border)' }}>
                    {t.desc}
                  </p>

                  <ul className="flex flex-col gap-[10px] mb-7 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[13px] font-light"
                        style={{ color: 'var(--text-2)' }}>
                        <CheckCircle2 size={14} strokeWidth={2} className="flex-shrink-0 mt-[2px]"
                          style={{ color: 'var(--orange)' }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="/contact"
                    className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-[13px] font-semibold transition-all duration-200 hover:scale-[1.02] text-white"
                    style={{ background: 'var(--orange)' }}>
                    {t.usd === 0 ? 'Get a Custom Quote' : 'Start This Project'} <ArrowRight size={13} strokeWidth={2} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <FadeIn delay={0.2}>
          <div className="p-5 rounded-2xl border text-[13px] font-light leading-[1.7]"
            style={{ background: 'var(--bg2)', borderColor: 'var(--border)', color: 'var(--text-2)' }}>
            <span className="font-semibold" style={{ color: 'var(--text)' }}>Not sure which category fits?</span>{' '}
            Book a free 30-minute discovery call and we will scope it for you — no commitment required.{' '}
            <a href="https://cal.com/esperpartners/discovery" target="_blank" rel="noopener noreferrer"
              className="font-semibold" style={{ color: 'var(--orange)' }}>
              Book a call →
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
