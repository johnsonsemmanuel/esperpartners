'use client';

import { ArrowRight, Globe, Layers, Smartphone, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

const teasers = [
  {
    icon: Globe,
    label: 'Website',
    from: '$800',
    desc: 'Landing pages, business sites & WordPress stores',
  },
  {
    icon: Layers,
    label: 'Web App / SaaS',
    from: '$4,500',
    desc: 'MVPs, full products, enterprise platforms',
  },
  {
    icon: Smartphone,
    label: 'Mobile App',
    from: '$5,000',
    desc: 'iOS & Android — Flutter or React Native',
  },
  {
    icon: RefreshCw,
    label: 'Monthly Retainer',
    from: '$1,200/mo',
    desc: 'Ongoing dev, support, or an embedded team',
  },
];

const spring = { type: 'spring' as const, stiffness: 300, damping: 22 };

export default function PricingTeaser() {
  return (
    <section style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn>
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>
            Transparent Pricing
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2
                className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-3"
                style={{ fontSize: 'clamp(28px,3.8vw,52px)', color: 'var(--text)' }}
              >
                No surprise invoices.<br />
                <span style={{ color: 'var(--orange)' }}>Ever.</span>
              </h2>
              <p className="font-light leading-[1.7]" style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 460 }}>
                We publish real prices — in USD, GHS, or NGN. Scope a project in minutes, not weeks.
              </p>
            </div>
            <motion.a
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full font-semibold text-[14px] flex-shrink-0 text-white"
              style={{ background: 'var(--orange)', boxShadow: '0 6px 28px rgba(255,165,0,0.35)' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              See Full Pricing <ArrowRight size={14} strokeWidth={2} />
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {teasers.map(({ icon: Icon, label, from, desc }) => (
              <motion.a
                key={label}
                href="/pricing"
                className="rounded-[18px] border flex flex-col gap-4 p-6 no-underline transition-colors duration-200 group"
                style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}
                whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
                transition={spring}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,165,0,0.1)', border: '1px solid rgba(255,165,0,0.2)' }}>
                  <Icon size={18} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-syne font-extrabold text-[17px] tracking-[-0.02em] mb-1" style={{ color: 'var(--text)' }}>
                    {label}
                  </div>
                  <div className="text-[12px] font-light" style={{ color: 'var(--text-3)' }}>
                    {desc}
                  </div>
                </div>
                <div className="mt-auto pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="text-[11px] uppercase tracking-[.08em] mb-[3px]" style={{ color: 'var(--text-3)' }}>
                    Starting from
                  </div>
                  <div className="font-syne font-extrabold text-[22px] tracking-[-0.03em]" style={{ color: 'var(--orange)' }}>
                    {from}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-5 p-4 rounded-2xl border text-[13px] font-light text-center"
            style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-3)' }}>
            Prices shown in USD · also available in{' '}
            <span className="font-semibold" style={{ color: 'var(--text-2)' }}>GH₵ cedis</span> and{' '}
            <span className="font-semibold" style={{ color: 'var(--text-2)' }}>₦ naira</span> on the pricing page.{' '}
            <a href="https://cal.com/esperpartners/discovery" target="_blank" rel="noopener noreferrer"
              className="font-semibold" style={{ color: 'var(--orange)' }}>
              Not sure what you need? Book a free call →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
