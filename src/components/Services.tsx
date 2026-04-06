'use client';

import { useEffect, useRef } from 'react';

const services = [
  { icon: '🌐', name: 'Web Development', desc: 'High-performance websites and progressive web apps crafted for speed, accessibility, and conversion.' },
  { icon: '📱', name: 'Mobile Applications', desc: 'Native iOS, Android, and cross-platform apps with buttery-smooth UX and enterprise-ready architecture.' },
  { icon: '🏗️', name: 'Enterprise Software', desc: 'Mission-critical systems, ERP integrations, and custom platforms built for Fortune-level scale.' },
  { icon: '🤖', name: 'AI & Automation', desc: 'Machine learning pipelines, LLM integrations, and intelligent automation that transforms operations.' },
  { icon: '☁️', name: 'Cloud & DevOps', desc: 'Infrastructure design, CI/CD pipelines, Kubernetes orchestration, and 99.99% uptime guarantees.' },
  { icon: '🔐', name: 'Cybersecurity', desc: 'Penetration testing, compliance frameworks, and zero-trust architecture for regulated industries.' },
  { icon: '🛒', name: 'E-Commerce Solutions', desc: 'Custom storefronts, headless commerce, payment gateway integrations, and supply chain systems.' },
  { icon: '📊', name: 'Data & Analytics', desc: 'Real-time dashboards, data warehouses, and BI tools that turn raw data into strategic decisions.' },
  { icon: '🔌', name: 'API & Integrations', desc: 'RESTful and GraphQL APIs, microservices architecture, and seamless third-party integrations.' },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-[120px] px-12 max-w-[1200px] mx-auto">
      <div className="reveal">
        <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF6200] mb-4">What We Build</div>
      </div>
      <div className="reveal reveal-d1">
        <h2 className="font-syne font-extrabold text-black leading-[1.1] tracking-[-0.03em] mb-4"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: 600 }}>
          Every Software Need. One Studio.
        </h2>
        <p className="text-[17px] text-[#5A5A5A] font-light leading-[1.7] mb-16" style={{ maxWidth: 540 }}>
          From landing pages to distributed enterprise systems — we architect, design, and build digital products that scale.
        </p>
      </div>

      <div className="reveal reveal-d2 grid gap-[2px] rounded-3xl overflow-hidden bg-[#E0E0E0]"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {services.map((s) => (
          <div
            key={s.name}
            className="service-card relative bg-white p-10 transition-all duration-300 hover:bg-[#F7F7F5] group overflow-hidden"
          >
            <div className="service-card-bar" />
            <div
              className="w-[52px] h-[52px] bg-[#F2F2F2] rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:bg-[#FF6200] group-hover:scale-110 group-hover:-rotate-[4deg]"
            >
              {s.icon}
            </div>
            <div className="font-syne font-bold text-[18px] text-black mb-[10px] tracking-[-0.02em]">{s.name}</div>
            <div className="text-[14px] text-[#5A5A5A] leading-[1.65] font-light">{s.desc}</div>
            <a
              href="#contact"
              className="inline-flex items-center gap-[6px] mt-5 text-[13px] font-semibold text-[#FF6200] no-underline transition-all duration-200 hover:gap-[10px]"
            >
              Explore →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
