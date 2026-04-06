'use client';

import { motion } from 'framer-motion';

const techs = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter/02569B' },
  { name: 'Swift', logo: 'https://cdn.simpleicons.org/swift/F05138' },
  { name: 'Kotlin', logo: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
  { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'GraphQL', logo: 'https://cdn.simpleicons.org/graphql/E10098' },
  { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/635BFF' },
  { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/96BF48' },
  { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'TensorFlow', logo: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
  { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
];

const doubled = [...techs, ...techs];

export default function TechStack() {
  return (
    <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg2)', overflow: 'hidden', padding: '48px 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-[11px] font-bold uppercase tracking-[.14em] mb-10"
        style={{ color: 'var(--text-3)' }}
      >
        Technologies &amp; Platforms We Master
      </motion.div>

      {/* Marquee row */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg2), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg2), transparent)' }} />

        <motion.div
          className="flex gap-6"
          style={{ width: 'max-content' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border flex-shrink-0 group transition-all duration-300"
              style={{
                background: 'var(--bg3)',
                borderColor: 'var(--border)',
                minWidth: 140,
              }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.05)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.logo}
                  alt={t.name}
                  width={20}
                  height={20}
                  style={{ objectFit: 'contain', filter: 'brightness(0.85)' }}
                />
              </div>
              <span className="font-syne font-bold text-[13px] whitespace-nowrap transition-colors duration-300"
                style={{ color: 'rgba(255,255,255,0.35)' }}>
                {t.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
