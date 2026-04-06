'use client';

import { useState } from 'react';

import { CheckCircle2, ArrowRight } from 'lucide-react';

type Currency = 'USD' | 'GHS' | 'NGN';

const rates: Record<Currency, number> = {
  USD: 1,
  GHS: 15.3,   // 1 USD ≈ 15.3 GHS
  NGN: 1620,   // 1 USD ≈ 1620 NGN
};

const symbols: Record<Currency, string> = {
  USD: '$',
  GHS: 'GH₵',
  NGN: '₦',
};

const labels: Record<Currency, string> = {
  USD: 'USD',
  GHS: 'GHS',
  NGN: 'NGN',
};

function fmt(usd: number, currency: Currency): string {
  const val = Math.round(usd * rates[currency]);
  if (val >= 1_000_000) return symbols[currency] + (val / 1_000_000).toFixed(1) + 'M';
  if (val >= 1_000) return symbols[currency] + (val / 1_000).toFixed(0) + 'K';
  return symbols[currency] + val.toLocaleString();
}

const projectTiers = [
  {
    name: 'Starter',
    usd: 2500,
    desc: 'Perfect for landing pages, simple web apps, or MVPs that need to go live fast.',
    features: [
      'Up to 5 pages or screens',
      'Responsive web or mobile UI',
      'Basic CMS or admin panel',
      'Contact / lead capture form',
      '2 rounds of revisions',
      '30 days post-launch support',
    ],
    cta: 'Start a Starter Project',
    highlight: false,
  },
  {
    name: 'Growth',
    usd: 8000,
    desc: 'For businesses that need a full product — web app, mobile app, or a custom platform.',
    features: [
      'Full-stack web or mobile app',
      'User authentication & roles',
      'Database design & API',
      'Payment integration (Paystack, Stripe)',
      'Admin dashboard',
      '3 months post-launch support',
      'Dedicated project manager',
    ],
    cta: 'Start a Growth Project',
    highlight: true,
  },
  {
    name: 'Enterprise',
    usd: 0,
    desc: 'Large-scale platforms, system integrations, or multi-phase builds with ongoing development.',
    features: [
      'Everything in Growth',
      'Multi-platform (web + mobile)',
      'Third-party API integrations',
      'Performance & security audit',
      'CI/CD pipeline setup',
      '6 months post-launch support',
      'SLA & dedicated team',
    ],
    cta: 'Get a Custom Quote',
    highlight: false,
  },
];

const retainerTiers = [
  {
    name: 'Basic Retainer',
    usd: 1200,
    period: '/month',
    hours: '20 hrs/month',
    desc: 'Ongoing maintenance, bug fixes, and small feature updates for an existing product.',
    features: [
      '20 hours of engineering time',
      'Bug fixes & performance patches',
      'Monthly progress report',
      'Response within 48 hours',
    ],
    highlight: false,
  },
  {
    name: 'Growth Retainer',
    usd: 2800,
    period: '/month',
    hours: '50 hrs/month',
    desc: 'Active product development — new features, integrations, and continuous improvement.',
    features: [
      '50 hours of engineering time',
      'New feature development',
      'Weekly sync call',
      'Priority response within 24 hours',
      'Dedicated engineer assigned',
    ],
    highlight: true,
  },
  {
    name: 'Embedded Team',
    usd: 5500,
    period: '/month',
    hours: '100+ hrs/month',
    desc: 'A full embedded engineering team working as an extension of your business.',
    features: [
      '100+ hours of engineering time',
      'Full-stack team (dev + design + QA)',
      'Daily standups available',
      'Sprint planning & roadmap support',
      'Slack / Teams integration',
      'Response within 4 hours',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  
  const [currency, setCurrency] = useState<Currency>('USD');

  return (
    <section id="pricing"  style={{ padding: '80px 20px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>

        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Transparent Pricing</div>
        </div>

        <div className="reveal d1 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-3"
              style={{ fontSize: 'clamp(30px,3.8vw,52px)', color: 'var(--text)' }}>
              Know What You Pay <span style={{ color: 'var(--orange)' }}>Before You Start</span>
            </h2>
            <p className="font-light leading-[1.7]" style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 520 }}>
              No surprise invoices. Fixed-price projects or monthly retainers — your choice.
            </p>
          </div>

          {/* Currency switcher */}
          <div className="flex items-center gap-1 p-1 rounded-full flex-shrink-0"
            style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
            {(['USD', 'GHS', 'NGN'] as Currency[]).map((c) => (
              <button key={c} onClick={() => setCurrency(c)}
                className="px-4 py-[7px] rounded-full text-[13px] font-semibold transition-all duration-200"
                style={{
                  background: currency === c ? 'var(--orange)' : 'transparent',
                  color: currency === c ? '#fff' : 'var(--text-3)',
                  cursor: 'none',
                }}>
                {labels[c]}
              </button>
            ))}
          </div>
        </div>

        {/* Project-based */}
        <div className="reveal d1 mb-4">
          <div className="font-syne font-bold text-[18px] tracking-[-0.02em]" style={{ color: 'var(--text)' }}>Fixed-Price Projects</div>
          <p className="text-[14px] font-light mt-1 mb-8" style={{ color: 'var(--text-2)' }}>One-time engagement. You know the price before we start.</p>
        </div>

        <div className="reveal d2 grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {projectTiers.map((t) => (
            <div key={t.name} className="rounded-[20px] border flex flex-col transition-all duration-300"
              style={{
                background: t.highlight ? 'var(--orange)' : 'var(--bg2)',
                borderColor: t.highlight ? 'var(--orange)' : 'var(--border)',
                padding: '32px 28px',
              }}>
              <div className="text-[12px] font-bold uppercase tracking-[.1em] mb-3"
                style={{ color: t.highlight ? 'rgba(255,255,255,0.7)' : 'var(--text-3)' }}>
                {t.name}
              </div>

              {/* Price */}
              <div className="font-syne font-extrabold tracking-[-0.04em] leading-none mb-1"
                style={{ fontSize: 38, color: t.highlight ? '#fff' : 'var(--text)' }}>
                {t.usd === 0 ? 'Custom' : fmt(t.usd, currency)}
              </div>
              {t.usd > 0 && currency !== 'USD' && (
                <div className="text-[12px] mb-3" style={{ color: t.highlight ? 'rgba(255,255,255,0.5)' : 'var(--text-3)' }}>
                  ≈ {fmt(t.usd, 'USD')} USD
                </div>
              )}
              {t.usd === 0 && (
                <div className="text-[12px] mb-3" style={{ color: t.highlight ? 'rgba(255,255,255,0.5)' : 'var(--text-3)' }}>
                  Let&apos;s talk scope
                </div>
              )}

              <p className="text-[13px] font-light leading-[1.6] mb-6 pb-6 mt-2"
                style={{ color: t.highlight ? 'rgba(255,255,255,0.75)' : 'var(--text-2)', borderBottom: `1px solid ${t.highlight ? 'rgba(255,255,255,0.15)' : 'var(--border)'}` }}>
                {t.desc}
              </p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13px] font-light"
                    style={{ color: t.highlight ? 'rgba(255,255,255,0.85)' : 'var(--text-2)' }}>
                    <CheckCircle2 size={15} strokeWidth={2} className="flex-shrink-0 mt-[2px]"
                      style={{ color: t.highlight ? '#fff' : 'var(--orange)' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/contact"
                className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-[13px] font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{ background: t.highlight ? '#fff' : 'var(--orange)', color: t.highlight ? 'var(--orange)' : '#fff' }}>
                {t.cta} <ArrowRight size={13} strokeWidth={2} />
              </a>
            </div>
          ))}
        </div>

        {/* Retainer */}
        <div className="reveal d1 mb-4">
          <div className="font-syne font-bold text-[18px] tracking-[-0.02em]" style={{ color: 'var(--text)' }}>Monthly Retainers</div>
          <p className="text-[14px] font-light mt-1 mb-8" style={{ color: 'var(--text-2)' }}>Ongoing engineering support. Cancel anytime with 30 days notice.</p>
        </div>

        <div className="reveal d2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {retainerTiers.map((t) => (
            <div key={t.name} className="rounded-[20px] border flex flex-col transition-all duration-300"
              style={{
                background: t.highlight ? 'var(--bg3)' : 'var(--bg2)',
                borderColor: t.highlight ? 'var(--orange)' : 'var(--border)',
                padding: '32px 28px',
              }}>
              {t.highlight && (
                <div className="inline-flex self-start items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[.08em] mb-3"
                  style={{ background: 'rgba(255,165,0,0.15)', color: 'var(--orange)', border: '1px solid rgba(255,165,0,0.25)' }}>
                  Most Popular
                </div>
              )}
              <div className="text-[12px] font-bold uppercase tracking-[.1em] mb-3" style={{ color: 'var(--text-3)' }}>
                {t.name}
              </div>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-syne font-extrabold tracking-[-0.04em] leading-none"
                  style={{ fontSize: 34, color: 'var(--text)' }}>
                  {fmt(t.usd, currency)}
                </span>
                <span className="text-[14px] mb-1" style={{ color: 'var(--text-3)' }}>{t.period}</span>
              </div>
              {currency !== 'USD' && (
                <div className="text-[12px] mb-1" style={{ color: 'var(--text-3)' }}>
                  ≈ {fmt(t.usd, 'USD')} USD/mo
                </div>
              )}
              <div className="text-[12px] font-medium mb-4" style={{ color: 'var(--orange)' }}>{t.hours}</div>
              <p className="text-[13px] font-light leading-[1.6] mb-6 pb-6"
                style={{ color: 'var(--text-2)', borderBottom: '1px solid var(--border)' }}>
                {t.desc}
              </p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13px] font-light" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle2 size={15} strokeWidth={2} className="flex-shrink-0 mt-[2px]" style={{ color: 'var(--orange)' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/contact"
                className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-[13px] font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{ background: 'var(--orange)', color: '#fff' }}>
                Get Started <ArrowRight size={13} strokeWidth={2} />
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="reveal d3 mt-10 p-5 rounded-2xl border text-[13px] font-light leading-[1.7]"
          style={{ background: 'var(--bg2)', borderColor: 'var(--border)', color: 'var(--text-2)' }}>
          <span className="font-semibold" style={{ color: 'var(--text)' }}>Not sure which fits?</span> Send us a brief description of your project and we will recommend the right option within 24 hours — no commitment required.{' '}
          <a href="mailto:hello@esperpartners.com" className="font-semibold" style={{ color: 'var(--orange)' }}>hello@esperpartners.com</a>
        </div>

      </div>
    </section>
  );
}
