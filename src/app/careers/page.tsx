'use client';

import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Clock, Users } from 'lucide-react';

const openRoles = [
  { title: 'Full-Stack Engineer', type: 'Full-time / Contract', location: 'Remote (Ghana / Nigeria / UK)', skills: ['React / Next.js', 'Node.js', 'PostgreSQL', 'REST APIs'] },
  { title: 'Flutter Mobile Developer', type: 'Full-time / Contract', location: 'Remote (Ghana / Nigeria)', skills: ['Flutter / Dart', 'Firebase', 'REST APIs', 'App Store deployment'] },
  { title: 'UI/UX Designer', type: 'Contract / Freelance', location: 'Remote', skills: ['Figma', 'Prototyping', 'Design systems', 'Mobile-first design'] },
  { title: 'DevOps / Cloud Engineer', type: 'Contract', location: 'Remote', skills: ['AWS / GCP', 'Docker / Kubernetes', 'CI/CD', 'Linux'] },
];

const perks = [
  'Remote-first — work from anywhere',
  'Flexible hours, results-focused culture',
  'Work on real products for real clients',
  'Competitive pay in USD or GHS',
  'Learn from senior engineers',
  'No bureaucracy, no bloat',
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: '', email: '', role: '', link: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative overflow-hidden" style={{ padding: '140px 20px 80px', background: 'var(--bg)' }}>
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Join the Team</div>
            <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-0.04em] mb-4"
              style={{ fontSize: 'clamp(36px,5vw,72px)', color: 'var(--text)', maxWidth: 700 }}>
              Build Software That<br /><span style={{ color: 'var(--orange)' }}>Actually Matters</span>
            </h1>
            <p className="font-light leading-[1.7]" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 540 }}>
              We are a small, focused team. We do not hire to fill seats — we hire when we find someone exceptional. If that is you, we want to hear from you.
            </p>
          </div>
        </div>

        {/* Why join */}
        <div style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Why Esper Partners</div>
                <h2 className="font-syne font-extrabold leading-[1.1] tracking-[-0.03em] mb-6"
                  style={{ fontSize: 'clamp(26px,3vw,40px)', color: 'var(--text)' }}>
                  Small team. Real work. <span style={{ color: 'var(--orange)' }}>No nonsense.</span>
                </h2>
                <p className="font-light leading-[1.7] mb-4" style={{ fontSize: 15, color: 'var(--text-2)' }}>
                  We are not a 200-person agency where you get lost. You will work directly on client projects, own your work, and see the impact of what you build.
                </p>
                <p className="font-light leading-[1.7]" style={{ fontSize: 15, color: 'var(--text-2)' }}>
                  We work with clients in Ghana, Nigeria, the UK, and the USA — so you get exposure to different markets, industries, and technical challenges.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {perks.map((p) => (
                  <div key={p} className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}>
                    <CheckCircle2 size={15} strokeWidth={2} className="flex-shrink-0 mt-[2px]" style={{ color: 'var(--orange)' }} />
                    <span className="text-[13px] font-light" style={{ color: 'var(--text-2)' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Open roles */}
        <div style={{ padding: '80px 20px', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Open Roles</div>
            <h2 className="font-syne font-extrabold leading-[1.1] tracking-[-0.03em] mb-10"
              style={{ fontSize: 'clamp(26px,3vw,40px)', color: 'var(--text)' }}>
              Current Openings
            </h2>
            <div className="flex flex-col gap-3 mb-16">
              {openRoles.map((r) => (
                <div key={r.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border transition-colors duration-300 hover:border-[var(--orange)]"
                  style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
                  <div>
                    <div className="font-syne font-bold text-[16px] mb-1" style={{ color: 'var(--text)' }}>{r.title}</div>
                    <div className="flex flex-wrap gap-3 text-[12px]" style={{ color: 'var(--text-3)' }}>
                      <span className="flex items-center gap-1"><Clock size={11} strokeWidth={1.5} /> {r.type}</span>
                      <span className="flex items-center gap-1"><MapPin size={11} strokeWidth={1.5} /> {r.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {r.skills.map((s) => (
                        <span key={s} className="text-[11px] px-2 py-[3px] rounded-md"
                          style={{ background: 'var(--bg3)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href="#apply"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold flex-shrink-0 transition-all duration-200 hover:scale-[1.03]"
                    style={{ background: 'var(--orange)', color: '#fff' }}>
                    Apply <ArrowRight size={13} strokeWidth={2} />
                  </a>
                </div>
              ))}
            </div>

            {/* Application form */}
            <div id="apply" className="rounded-[20px] border p-8" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-3 mb-6">
                <Users size={20} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                <h3 className="font-syne font-bold text-[20px]" style={{ color: 'var(--text)' }}>Apply Now</h3>
              </div>
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle2 size={40} style={{ color: 'var(--orange)' }} strokeWidth={1.5} className="mx-auto mb-4" />
                  <div className="font-syne font-bold text-[18px] mb-2" style={{ color: 'var(--text)' }}>Application Received</div>
                  <p className="text-[14px] font-light" style={{ color: 'var(--text-2)' }}>We will review your application and get back to you within 5 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name" className="w-full rounded-xl px-4 py-3 text-[14px] outline-none"
                      style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--orange)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com" className="w-full rounded-xl px-4 py-3 text-[14px] outline-none"
                      style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--orange)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>Role Applying For *</label>
                    <select required value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-[14px] outline-none"
                      style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                      <option value="">Select a role</option>
                      {openRoles.map(r => <option key={r.title}>{r.title}</option>)}
                      <option>Other / General Application</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>Portfolio / GitHub / LinkedIn</label>
                    <input value={form.link} onChange={e => setForm({ ...form, link: e.target.value })}
                      placeholder="https://" className="w-full rounded-xl px-4 py-3 text-[14px] outline-none"
                      style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--orange)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>Why Esper Partners? *</label>
                    <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about yourself and why you want to work with us..." rows={4}
                      className="w-full rounded-xl px-4 py-3 text-[14px] outline-none resize-none"
                      style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--orange)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02]"
                      style={{ background: 'var(--orange)', color: '#fff', cursor: 'none' }}>
                      Submit Application <ArrowRight size={16} strokeWidth={2} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
