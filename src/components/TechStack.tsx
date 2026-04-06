const techs = ['React', 'Next.js', 'Node.js', 'Python', 'Swift', 'Kotlin', 'AWS', 'Kubernetes', 'PostgreSQL', 'GraphQL', 'TensorFlow', 'Rust', 'TypeScript', 'Flutter', 'Stripe', 'Shopify'];
const doubled = [...techs, ...techs];

export default function TechStack() {
  return (
    <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg2)', overflow: 'hidden', padding: '36px 0' }}>
      <div className="text-center text-[12px] uppercase tracking-[.1em] mb-6" style={{ color: 'var(--text-3)', letterSpacing: '.1em' }}>
        Technologies &amp; Platforms We Master
      </div>
      <div className="marquee-track flex" style={{ width: 'max-content' }}>
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-3 px-9 font-syne font-bold text-[16px] tracking-[-0.02em] whitespace-nowrap transition-colors duration-300 select-none"
            style={{ color: 'rgba(255,255,255,0.2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}>
            {t}
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--border-hover)' }} />
          </span>
        ))}
      </div>
    </div>
  );
}
