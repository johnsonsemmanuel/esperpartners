'use client';

import { Globe, Smartphone, Layers, ShoppingCart, Bot, Cloud, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn';

const services = [
  { icon: Globe, title: 'Websites', desc: 'Business sites, landing pages, WordPress — fast, mobile-ready, and built to convert.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'iOS & Android apps built with Flutter. From MVP to full consumer product.' },
  { icon: Layers, title: 'Web Applications', desc: 'Custom SaaS, dashboards, and platforms built to scale with your business.' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Shopify stores, WooCommerce, and custom marketplaces with local payment integration.' },
  { icon: Bot, title: 'AI & Automation', desc: 'LLM integrations, chatbots, and automation pipelines that save time and money.' },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'Infrastructure, CI/CD, and deployment that keeps your product fast and always online.' },
];

export default function ServicesSnapshot() {
  return (
    <section id="features" style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn>
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-3" style={{ color: 'var(--orange)' }}>What We Build</div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em]"
              style={{ fontSize: 'clamp(28px,3.8vw,48px)', color: 'var(--text)' }}>
              Every Software Solution.<br /><span style={{ color: 'var(--orange)' }}>One Studio.</span>
            </h2>
            <a href="/services"
              className="inline-flex items-center gap-2 text-[14px] font-semibold flex-shrink-0 transition-all duration-200 hover:gap-3"
              style={{ color: 'var(--orange)' }}>
              See All Services <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <FadeInItem key={s.title}>
                <motion.div
                  className="p-6 rounded-2xl border flex flex-col gap-3 group h-full"
                  style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}
                  whileHover={{ y: -4, borderColor: 'var(--orange)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--orange)]"
                    style={{ background: 'rgba(255,165,0,0.1)' }}>
                    <Icon size={18} strokeWidth={1.5} style={{ color: 'var(--orange)' }} className="group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="font-syne font-bold text-[16px] tracking-[-0.02em]" style={{ color: 'var(--text)' }}>{s.title}</div>
                  <div className="text-[13px] font-light leading-[1.65]" style={{ color: 'var(--text-2)' }}>{s.desc}</div>
                </motion.div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
