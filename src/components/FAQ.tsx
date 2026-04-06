'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'A simple website takes 5–10 days. A web or mobile app typically takes 8–16 weeks depending on complexity. We give you a clear timeline before we start — and we stick to it.',
  },
  {
    q: 'Do I own the code when you are done?',
    a: 'Yes. 100%. Everything we build belongs to you — source code, design files, database schemas, everything. We hand it all over at the end of the project with no strings attached.',
  },
  {
    q: 'Can you work with my budget?',
    a: 'Our projects start from $800 for a landing page and go up from there. We have transparent pricing on our pricing page. If your budget is tight, tell us — we will scope something that works rather than turn you away.',
  },
  {
    q: 'Do you integrate Paystack and mobile money?',
    a: 'Yes. We have built Paystack, MTN MoMo, Vodafone Cash, and Stripe integrations into multiple products. Payment integration is standard for any e-commerce or fintech project.',
  },
  {
    q: 'What happens after launch?',
    a: 'Every project includes 6 months of post-launch support — bug fixes, performance monitoring, and minor updates. After that, you can move to a monthly retainer or manage it yourself. We do not disappear.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes, fully remote. We work with clients in Ghana, Nigeria, the UK, the USA, and Togo. We communicate via WhatsApp, email, and video calls — whatever works best for you.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <FadeIn>
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-3" style={{ color: 'var(--orange)' }}>FAQ</div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-syne font-extrabold leading-[1.08] tracking-[-0.035em] mb-10"
            style={{ fontSize: 'clamp(28px,3.8vw,48px)', color: 'var(--text)' }}>
            Questions We Get <span style={{ color: 'var(--orange)' }}>All the Time</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-2">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="rounded-2xl border overflow-hidden transition-colors duration-200"
                style={{ background: open === i ? 'var(--bg3)' : 'var(--bg)', borderColor: open === i ? 'var(--orange)' : 'var(--border)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  style={{ cursor: 'none' }}>
                  <span className="font-syne font-bold text-[15px]" style={{ color: 'var(--text)' }}>{f.q}</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ background: open === i ? 'var(--orange)' : 'var(--bg3)', border: '1px solid var(--border)' }}>
                    {open === i
                      ? <Minus size={13} className="text-white" strokeWidth={2} />
                      : <Plus size={13} style={{ color: 'var(--text-2)' }} strokeWidth={2} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}>
                      <div className="px-5 pb-5 text-[14px] font-light leading-[1.75]" style={{ color: 'var(--text-2)' }}>
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
