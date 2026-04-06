'use client';

import { ShoppingCart, Building2, Smartphone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn';

const projects = [
  { tag: 'E-Commerce · Ghana', title: 'Multi-Vendor Marketplace for a Ghanaian Retail Brand', sub: 'Built a full-stack marketplace with vendor dashboards, mobile money integration, and real-time order tracking.', icon: ShoppingCart, bg: '#1A1A1A', span: true },
  { tag: 'SaaS · UK', title: 'B2B Operations Platform', sub: 'Custom CRM and invoicing system replacing spreadsheets for a London-based logistics company.', icon: Building2, bg: '#FFA500', span: false },
  { tag: 'Mobile · Nigeria', title: 'Fintech Mobile App', sub: 'Cross-platform savings and payments app for a Nigerian fintech startup — launched on iOS and Android.', icon: Smartphone, bg: '#141414', span: false },
];

export default function Showcase() {
  return (
    <section id="work" style={{ padding: '80px 20px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn><div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Selected Work</div></FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-2" style={{ fontSize: 'clamp(30px,3.8vw,52px)', color: 'var(--text)' }}>
                Real Projects. <span style={{ color: 'var(--orange)' }}>Real Results.</span>
              </h2>
              <p className="font-light leading-[1.7]" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 520 }}>
                A selection of products we have built for clients across Africa, the UK, and the US.
              </p>
            </div>
            <a href="/case-studies"
              className="inline-flex items-center gap-2 text-[14px] font-semibold flex-shrink-0 transition-all duration-200 hover:gap-3"
              style={{ color: 'var(--orange)' }}>
              View All Projects <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>
        </FadeIn>

        <FadeInStagger className="grid gap-5 grid-cols-1 md:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeInItem key={i}>
                <motion.div
                  className="relative rounded-[20px] overflow-hidden flex flex-col justify-between p-9 group"
                  style={{ background: p.bg, minHeight: p.span ? 480 : 300, gridRow: p.span ? 'span 2' : undefined, border: '1px solid var(--border)' }}
                  whileHover={{ scale: 0.985 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}>                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
                    <Icon size={200} strokeWidth={0.5} className="text-white" />
                  </div>
                  <div className="relative z-[1] flex justify-end">
                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={16} className="text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="relative z-[1]">
                    <span className="inline-block text-[11px] font-semibold tracking-[.08em] uppercase px-3 py-1 rounded-full border border-white/20 mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {p.tag}
                    </span>
                    <div className="font-syne font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-2" style={{ fontSize: 'clamp(18px,2.2vw,26px)' }}>
                      {p.title}
                    </div>
                    <div className="text-[14px] font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.sub}</div>
                  </div>
                </motion.div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
