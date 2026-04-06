'use client';

import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

const offices = [
  { city: 'Accra, Ghana', flag: '🇬🇭', email: 'gh@esperpartners.com', note: 'Primary office' },
  { city: 'Lagos, Nigeria', flag: '🇳🇬', email: 'ng@esperpartners.com', note: 'West Africa hub' },
  { city: 'London, UK', flag: '🇬🇧', email: 'uk@esperpartners.com', note: 'Europe & US clients' },
];

const faqs = [
  { q: 'How quickly do you respond?', a: 'Within 48 hours on business days. For urgent enquiries, email hello@esperpartners.com directly.' },
  { q: 'Do you work with startups?', a: 'Yes. We work with early-stage founders, growing startups, and established businesses. Our Starter package is designed specifically for first-time builds.' },
  { q: 'Can I see your work before committing?', a: 'Absolutely. Book a discovery call and we will walk you through relevant case studies and past projects similar to yours.' },
  { q: 'What information do I need to start?', a: 'Just a rough idea of what you want to build. We will help you scope it properly during the discovery call — no detailed brief required upfront.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', country: '', project: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Get In Touch</div>
            <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-0.04em] mb-4"
              style={{ fontSize: 'clamp(36px,5vw,72px)', color: 'var(--text)', maxWidth: 700 }}>
              Tell Us What<br /><span style={{ color: 'var(--orange)' }}>You Are Building</span>
            </h1>
            <p className="font-light leading-[1.7]" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 500 }}>
              We respond within 48 hours with a clear proposal — no jargon, no pressure, no obligation.
            </p>
          </div>
        </div>

        {/* Book a call banner */}
        <div style={{ background: 'var(--orange)', padding: '20px' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4" style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-white flex-shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-syne font-bold text-white text-[15px]">Prefer to talk first?</div>
                <div className="text-white/80 text-[13px]">Book a free 30-min discovery call — we use Google Meet.</div>
              </div>
            </div>
            <a href="https://cal.com/esperpartners/discovery"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px] flex-shrink-0 transition-all duration-200 hover:scale-[1.03]"
              style={{ background: '#fff', color: 'var(--orange)' }}>
              Book Discovery Call <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Main content */}
        <div style={{ padding: '80px 20px', background: 'var(--bg2)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20" style={{ maxWidth: 1180, margin: '0 auto' }}>

            {/* Form */}
            <div>
              <h2 className="font-syne font-extrabold text-[24px] tracking-[-0.03em] mb-2" style={{ color: 'var(--text)' }}>
                Send Us a Message
              </h2>
              <p className="text-[14px] font-light mb-8" style={{ color: 'var(--text-2)' }}>
                Fill this in and we will reply within 48 hours with a tailored proposal.
              </p>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center text-center p-10 rounded-2xl border gap-4"
                  style={{ background: 'var(--bg3)', borderColor: 'var(--border)', minHeight: 300 }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                  <div className="font-syne font-bold text-[20px]" style={{ color: 'var(--text)' }}>Message Sent</div>
                  <p className="text-[14px] font-light" style={{ color: 'var(--text-2)' }}>
                    We will get back to you within 48 hours at <strong style={{ color: 'var(--text)' }}>{form.email}</strong>
                  </p>
                  <a href="https://cal.com/esperpartners/discovery" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px] mt-2"
                    style={{ background: 'var(--orange)', color: '#fff' }}>
                    Also Book a Discovery Call <ArrowRight size={14} strokeWidth={2} />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>Full Name *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-colors duration-200"
                        style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--orange)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-colors duration-200"
                        style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--orange)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>Country</label>
                      <select value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-colors duration-200"
                        style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                        <option value="">Select country</option>
                        <option>Ghana</option>
                        <option>Nigeria</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Togo</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>Budget Range</label>
                      <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-colors duration-200"
                        style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                        <option value="">Select budget</option>
                        <option>Under $2,500 / GH₵38K</option>
                        <option>$2,500 – $8,000 / GH₵38K–122K</option>
                        <option>$8,000 – $20,000</option>
                        <option>$20,000+</option>
                        <option>Monthly retainer</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>What are you building? *</label>
                    <input required value={form.project} onChange={e => setForm({ ...form, project: e.target.value })}
                      placeholder="e.g. Mobile app for food delivery in Accra"
                      className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-colors duration-200"
                      style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--orange)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>Tell us more</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Timeline, existing systems, specific requirements..."
                      rows={4}
                      className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-colors duration-200 resize-none"
                      style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--orange)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                  </div>

                  {status === 'error' && (
                    <div className="text-[13px] px-4 py-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171' }}>
                      Something went wrong. Please email us directly at hello@esperpartners.com
                    </div>
                  )}

                  <button type="submit" disabled={status === 'sending'}
                    className="inline-flex items-center justify-center gap-2 py-4 rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02] mt-2 disabled:opacity-60"
                    style={{ background: 'var(--orange)', color: '#fff', cursor: 'none' }}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    {status !== 'sending' && <ArrowRight size={16} strokeWidth={2} />}
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-6">
              {/* Book call card */}
              <div className="p-6 rounded-2xl border" style={{ background: 'var(--bg3)', borderColor: 'var(--orange)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Calendar size={18} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                  <div className="font-syne font-bold text-[15px]" style={{ color: 'var(--text)' }}>Book a Discovery Call</div>
                </div>
                <p className="text-[13px] font-light leading-[1.6] mb-4" style={{ color: 'var(--text-2)' }}>
                  30 minutes on Google Meet. We learn about your project, you learn about how we work. No commitment required.
                </p>
                <a href="https://cal.com/esperpartners/discovery" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-[13px] transition-all duration-200 hover:scale-[1.02]"
                  style={{ background: 'var(--orange)', color: '#fff' }}>
                  Pick a Time <ArrowRight size={13} strokeWidth={2} />
                </a>
              </div>

              {/* Direct email */}
              <div className="p-6 rounded-2xl border" style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={18} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                  <div className="font-syne font-bold text-[15px]" style={{ color: 'var(--text)' }}>Direct Email</div>
                </div>
                <a href="mailto:hello@esperpartners.com" className="text-[15px] font-medium no-underline" style={{ color: 'var(--orange)' }}>
                  hello@esperpartners.com
                </a>
                <p className="text-[13px] font-light mt-2" style={{ color: 'var(--text-2)' }}>
                  For general enquiries, partnerships, or if you prefer email over forms.
                </p>
              </div>

              {/* Response time */}
              <div className="p-6 rounded-2xl border" style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={18} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                  <div className="font-syne font-bold text-[15px]" style={{ color: 'var(--text)' }}>Response Time</div>
                </div>
                <div className="font-syne font-extrabold text-[28px] tracking-[-0.03em]" style={{ color: 'var(--text)' }}>48 hrs</div>
                <p className="text-[13px] font-light mt-1" style={{ color: 'var(--text-2)' }}>
                  Every enquiry gets a clear, honest proposal — not a generic reply.
                </p>
              </div>

              {/* Offices */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} style={{ color: 'var(--orange)' }} strokeWidth={1.5} />
                  <div className="text-[12px] font-bold uppercase tracking-[.1em]" style={{ color: 'var(--text-3)' }}>Where We Operate</div>
                </div>
                <div className="flex flex-col gap-3">
                  {offices.map((o) => (
                    <div key={o.city} className="flex items-center justify-between p-4 rounded-xl border"
                      style={{ background: 'var(--bg3)', borderColor: 'var(--border)' }}>
                      <div className="flex items-center gap-3">
                        <span className="text-[20px]">{o.flag}</span>
                        <div>
                          <div className="text-[14px] font-medium" style={{ color: 'var(--text)' }}>{o.city}</div>
                          <div className="text-[11px]" style={{ color: 'var(--text-3)' }}>{o.note}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ padding: '80px 20px', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-4" style={{ color: 'var(--orange)' }}>FAQ</div>
            <h2 className="font-syne font-extrabold leading-[1.1] tracking-[-0.03em] mb-10"
              style={{ fontSize: 'clamp(24px,3vw,40px)', color: 'var(--text)' }}>
              Common Questions
            </h2>
            <div className="flex flex-col gap-2 rounded-[16px] overflow-hidden" style={{ background: 'var(--border)' }}>
              {faqs.map((f) => (
                <div key={f.q} className="p-6" style={{ background: 'var(--bg2)' }}>
                  <div className="font-syne font-bold text-[15px] mb-2" style={{ color: 'var(--text)' }}>{f.q}</div>
                  <div className="text-[14px] font-light leading-[1.7]" style={{ color: 'var(--text-2)' }}>{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
