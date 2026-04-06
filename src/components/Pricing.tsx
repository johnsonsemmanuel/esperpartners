'use client';

import { useReveal } from './useReveal';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const projectTiers = [
  {
    name: 'Starter',
    price: '$2,500',
    priceGHS: '≈ GHS 38,000',
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
    price: '$8,000',
    priceGHS: '≈ GHS 122,000',
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
    price: 'Custom',
    priceGHS: 'Let\'s talk scope',
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
    price: '$1,200',
    priceGHS: '≈ GHS 18,000',
    period: '/month',
    hours: '20 hrs/month',
    desc: 'Ongoing maintenance, bug fixes, and small feature updates for an existing product.',
    features: [
      '20 hours of engineering time',
      'Bug fixes & performance patches',
      'Monthly progress report',
      'Response within 48 hours',
    ],
  },
  {
    name: 'Growth Retainer',
    price: '$2,800',
    priceGHS: '≈ GHS 43,000',
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
    price: '$5,500',
    priceGHS: '≈ GHS 84,000',
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
  },
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section id="pricing" ref={ref} style={{ padding: '100px 40px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Transparent Pricing</div>
        </div>
        <div className="reveal d1">
          <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-4" style={{ fontSize: 'clamp(30px,3.8vw,52px)', color: 'var(--text)' }}>
            Know What You Pay <span style={{ color: 'var(--orange)' }}>Before You Start</span>
          </h2>
          <p className="font-light leading-[1.7] mb-6" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 560 }}>
            No surprise invoices. No scope creep billing. Choose between a fixed-price project or a monthly retainer — whichever fits how you work.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium mb-16"
            style={{ background: 'rgba(255,98,0,0.1)', border: '1px solid rgba(255,98,0,0.2)', color: 'var(--orange)' }}>
            All prices in USD · GHS estimates shown for reference
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
              <div className="font-syne font-extrabold tracking-[-0.04em] leading-none mb-1"
                style={{ fontSize: 40, color: t.highlight ? '#fff' : 'var(--text)' }}>
                {t.price}
              </div>
              <div className="text-[12px] mb-4" style={{ color: t.highlight ? 'rgba(255,255,255,0.6)' : 'var(--text-3)' }}>
                {t.priceGHS}
              </div>
              <p className="text-[13px] font-light leading-[1.6] mb-6 pb-6"
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
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-[13px] font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: t.highlight ? '#fff' : 'var(--orange)',
                  color: t.highlight ? 'var(--orange)' : '#fff',
                }}>
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
                  style={{ background: 'rgba(255,98,0,0.15)', color: 'var(--orange)', border: '1px solid rgba(255,98,0,0.2)' }}>
                  Most Popular
                </div>
              )}
              <div className="text-[12px] font-bold uppercase tracking-[.1em] mb-3" style={{ color: 'var(--text-3)' }}>
                {t.name}
              </div>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-syne font-extrabold tracking-[-0.04em] leading-none" style={{ fontSize: 36, color: 'var(--text)' }}>{t.price}</span>
                <span className="text-[14px] mb-1" style={{ color: 'var(--text-3)' }}>{t.period}</span>
              </div>
              <div className="text-[12px] mb-1" style={{ color: 'var(--text-3)' }}>{t.priceGHS}</div>
              <div className="inline-flex items-center gap-1 text-[12px] font-medium mb-4" style={{ color: 'var(--orange)' }}>
                {t.hours}
              </div>
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
              <a href="#contact"
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
