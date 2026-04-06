'use client';

import { Globe, Smartphone, BarChart3, Bot, Building2, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

const spring = { type: 'spring' as const, stiffness: 300, damping: 24 };

const capabilities = [
  'Next.js / React',
  'Flutter / React Native',
  'Node.js / Python / Go',
  'PostgreSQL / MongoDB',
  'AWS / GCP / Vercel',
  'OpenAI / Gemini / LLM',
  'Paystack / Stripe',
  'Docker / CI-CD',
];

const serviceCards = [
  {
    tag: 'Web & Mobile',
    icon: Globe,
    headline: 'Apps that feel alive',
    body: 'High-performance web apps and native mobile experiences with buttery-smooth UX your users will love.',
    span2rows: true,
    accent: false,
  },
  {
    tag: 'Data & Analytics',
    icon: BarChart3,
    headline: 'Revenue intelligence',
    body: 'Real-time dashboards and BI tools that turn raw data into decisions that grow your business faster.',
    span2rows: false,
    accent: false,
    wide: true,
  },
  {
    tag: 'Enterprise',
    icon: Building2,
    headline: 'Mission-critical systems',
    body: 'ERP, CRM, and custom enterprise platforms built for scale, compliance, and the long term.',
    span2rows: false,
    accent: false,
  },
  {
    tag: 'AI & Automation',
    icon: Bot,
    headline: 'Intelligent by default',
    body: 'LLM integrations, ML pipelines, and automation that transforms how your business operates at scale.',
    span2rows: false,
    accent: false,
  },
];

const mobileFeatures = [
  { icon: Globe, label: 'iOS & Android' },
  { icon: Smartphone, label: 'Flutter / RN' },
  { icon: ShoppingCart, label: 'In-app payments' },
  { icon: BarChart3, label: 'Push notifications' },
];

export default function Services() {
  return (
    <section id="features" style={{ padding: '80px 20px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn>
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>What We Build</div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-4"
            style={{ fontSize: 'clamp(28px,3.8vw,52px)', color: 'var(--text)' }}>
            Every Software Solution.<br /><span style={{ color: 'var(--orange)' }}>One Studio.</span>
          </h2>
          <p className="font-light leading-[1.7] mb-10"
            style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 520 }}>
            From landing pages to distributed enterprise systems — we architect, design, and build digital products that scale globally.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="rounded-[16px] overflow-hidden md:rounded-[20px]"
            style={{
              display: 'grid',
              gap: 2,
              background: 'var(--border)',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'auto auto',
            }}
          >
            {/* Web & Mobile — tall left card */}
            <motion.div
              className="bento-card p-6 md:p-9 relative overflow-hidden"
              style={{ gridRow: 'span 2' }}
              whileHover={{ scale: 1.01 }}
              transition={spring}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(255,165,0,0.12)', border: '1px solid rgba(255,165,0,0.2)' }}>
                <Globe size={18} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
              </div>
              <div className="text-[11px] font-bold tracking-[.1em] uppercase mb-2" style={{ color: 'var(--orange)' }}>Web &amp; Mobile</div>
              <div className="font-syne font-extrabold text-[20px] leading-[1.2] tracking-[-0.03em] mb-3" style={{ color: 'var(--text)' }}>
                Apps that feel alive
              </div>
              <p className="text-[14px] font-light leading-[1.65] mb-6" style={{ color: 'var(--text-2)' }}>
                High-performance web apps and native mobile experiences built with React, Next.js, and Flutter — buttery-smooth UX that users love.
              </p>
              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {mobileFeatures.map(({ icon: Icon, label }) => (
                  <div key={label}
                    className="flex items-center gap-2 rounded-xl border px-3 py-[10px] text-[12px] font-medium"
                    style={{ background: 'var(--bg3)', borderColor: 'var(--border)', color: 'var(--text-2)' }}>
                    <Icon size={13} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                    {label}
                  </div>
                ))}
              </div>
              {/* Tech tags */}
              <div className="flex flex-wrap gap-[6px]">
                {['Next.js', 'React', 'Flutter', 'TypeScript'].map(t => (
                  <span key={t} className="text-[11px] px-2 py-[3px] rounded-full font-medium"
                    style={{ background: 'var(--bg3)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Data & Analytics — wide top right */}
            <motion.div
              className="bento-card p-6 md:p-9 relative overflow-hidden"
              style={{ gridColumn: 'span 2' }}
              whileHover={{ scale: 1.01 }}
              transition={spring}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(255,165,0,0.12)', border: '1px solid rgba(255,165,0,0.2)' }}>
                <BarChart3 size={18} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
              </div>
              <div className="text-[11px] font-bold tracking-[.1em] uppercase mb-2" style={{ color: 'var(--orange)' }}>Data &amp; Analytics</div>
              <div className="font-syne font-extrabold text-[20px] leading-[1.2] tracking-[-0.03em] mb-3" style={{ color: 'var(--text)' }}>
                Revenue intelligence
              </div>
              <p className="text-[14px] font-light leading-[1.65]" style={{ color: 'var(--text-2)' }}>
                Real-time dashboards and BI tools that turn raw data into actionable decisions.
                Built on your stack, delivered to your team.
              </p>
              <div className="flex flex-wrap gap-[6px] mt-5">
                {['PostgreSQL', 'BigQuery', 'Metabase', 'Custom Dashboards'].map(t => (
                  <span key={t} className="text-[11px] px-2 py-[3px] rounded-full font-medium"
                    style={{ background: 'var(--bg3)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              className="bento-card p-6 md:p-9 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={spring}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(255,165,0,0.12)', border: '1px solid rgba(255,165,0,0.2)' }}>
                <Building2 size={18} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
              </div>
              <div className="text-[11px] font-bold tracking-[.1em] uppercase mb-2" style={{ color: 'var(--orange)' }}>Enterprise</div>
              <div className="font-syne font-extrabold text-[20px] leading-[1.2] tracking-[-0.03em] mb-2" style={{ color: 'var(--text)' }}>
                Mission-critical systems
              </div>
              <p className="text-[14px] font-light leading-[1.65]" style={{ color: 'var(--text-2)' }}>
                ERP, CRM, and custom enterprise platforms built for Fortune-level scale and compliance.
              </p>
            </motion.div>

            {/* AI & Automation */}
            <motion.div
              className="bento-card p-6 md:p-9 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={spring}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(255,165,0,0.12)', border: '1px solid rgba(255,165,0,0.2)' }}>
                <Bot size={18} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
              </div>
              <div className="text-[11px] font-bold tracking-[.1em] uppercase mb-2" style={{ color: 'var(--orange)' }}>AI &amp; Automation</div>
              <div className="font-syne font-extrabold text-[20px] leading-[1.2] tracking-[-0.03em] mb-2" style={{ color: 'var(--text)' }}>
                Intelligent by default
              </div>
              <p className="text-[14px] font-light leading-[1.65]" style={{ color: 'var(--text-2)' }}>
                LLM integrations, ML pipelines, and automation that transforms how your business operates.
              </p>
            </motion.div>
          </div>
        </FadeIn>

        {/* Tech stack strip */}
        <FadeIn delay={0.3}>
          <div className="mt-6 rounded-[16px] border px-6 py-5 flex flex-wrap gap-3 items-center"
            style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
            <span className="text-[11px] font-bold uppercase tracking-[.1em] mr-2" style={{ color: 'var(--text-3)' }}>
              Our Stack
            </span>
            {capabilities.map(c => (
              <span key={c} className="text-[12px] px-3 py-[5px] rounded-full font-medium"
                style={{ background: 'var(--bg3)', color: 'var(--text-2)', border: '1px solid var(--border)' }}>
                {c}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
