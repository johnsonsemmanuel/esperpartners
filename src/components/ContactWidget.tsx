'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageCircle, Calendar, ChevronDown } from 'lucide-react';

type Step = 'closed' | 'what' | 'budget' | 'contact' | 'done';

const budgetOptions = [
  'Under $2,000',
  '$2,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
];

const projectTypes = [
  'Website / Landing Page',
  'Web Application / SaaS',
  'Mobile App',
  'E-Commerce Store',
  'AI / Automation',
  'Something else',
];

export default function ContactWidget() {
  const [step, setStep] = useState<Step>('closed');
  const [projectType, setProjectType] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  // Subtle pulse on the button after 8s to draw attention
  useEffect(() => {
    const t = setTimeout(() => setHasInteracted(true), 8000);
    return () => clearTimeout(t);
  }, []);

  const close = () => setStep('closed');
  const open = () => setStep('what');

  const canProceedWhat = projectType !== '';
  const canProceedBudget = budget !== '';
  const canProceedContact = name.trim().length > 1 && /\S+@\S+\.\S+/.test(email);

  async function submit() {
    setSubmitting(true);
    // Fire-and-forget to the existing contact route
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: `Project type: ${projectType}\nBudget: ${budget}\n\n${description}`,
        }),
      });
    } catch (_) { /* silent — we still show the done screen */ }
    setSubmitting(false);
    setStep('done');
  }

  const panelVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 380, damping: 28 } },
    exit: { opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.18 } },
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={open}
        aria-label="Tell us about your project"
        className="fixed flex items-center gap-2 z-[9990] font-semibold text-[13px] text-white"
        style={{
          bottom: 24,
          right: 24,
          height: 48,
          padding: '0 20px 0 16px',
          borderRadius: 100,
          background: 'var(--orange)',
          boxShadow: '0 4px 28px rgba(255,165,0,0.45)',
          cursor: 'none',
        }}
        animate={hasInteracted && step === 'closed'
          ? { scale: [1, 1.06, 1], boxShadow: ['0 4px 28px rgba(255,165,0,0.45)', '0 6px 36px rgba(255,165,0,0.7)', '0 4px 28px rgba(255,165,0,0.45)'] }
          : {}}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        <MessageCircle size={16} strokeWidth={2} />
        Let&apos;s Talk
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {step !== 'closed' && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[9991]"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
          />
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence mode="wait">
        {step !== 'closed' && (
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed z-[9992] flex flex-col"
            style={{
              bottom: 84,
              right: 24,
              width: 'min(420px, calc(100vw - 32px))',
              borderRadius: 20,
              background: 'var(--bg2)',
              border: '1px solid var(--border-hover)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4"
              style={{ borderBottom: '1px solid var(--border)' }}>
              <div>
                <div className="font-syne font-extrabold text-[17px] tracking-[-0.02em]" style={{ color: 'var(--text)' }}>
                  {step === 'done' ? 'Message received.' : "Tell us what you're building"}
                </div>
                {step !== 'done' && (
                  <div className="text-[12px] mt-[2px]" style={{ color: 'var(--text-3)' }}>
                    Step {step === 'what' ? 1 : step === 'budget' ? 2 : 3} of 3 · No commitment
                  </div>
                )}
              </div>
              <button onClick={close} className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'var(--bg3)', cursor: 'none' }}>
                <X size={13} style={{ color: 'var(--text-2)' }} />
              </button>
            </div>

            {/* Progress bar */}
            {step !== 'done' && (
              <div className="h-[2px]" style={{ background: 'var(--border)' }}>
                <motion.div className="h-full" style={{ background: 'var(--orange)' }}
                  animate={{ width: step === 'what' ? '33%' : step === 'budget' ? '66%' : '100%' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }} />
              </div>
            )}

            {/* Body */}
            <div className="px-6 py-5 flex flex-col gap-4">

              <AnimatePresence mode="wait">

                {/* Step 1 — What are you building */}
                {step === 'what' && (
                  <motion.div key="what"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.22 }} className="flex flex-col gap-3">
                    <div className="text-[13px] font-medium" style={{ color: 'var(--text-2)' }}>What type of project?</div>
                    <div className="grid grid-cols-2 gap-2">
                      {projectTypes.map((t) => (
                        <button key={t} onClick={() => setProjectType(t)}
                          className="text-left px-3 py-[10px] rounded-xl text-[12px] font-medium transition-all duration-150"
                          style={{
                            background: projectType === t ? 'var(--orange)' : 'var(--bg3)',
                            color: projectType === t ? '#fff' : 'var(--text-2)',
                            border: `1px solid ${projectType === t ? 'var(--orange)' : 'var(--border)'}`,
                            cursor: 'none',
                          }}>
                          {t}
                        </button>
                      ))}
                    </div>
                    <div>
                      <div className="text-[13px] font-medium mb-2" style={{ color: 'var(--text-2)' }}>
                        Brief description <span style={{ color: 'var(--text-3)' }}>(optional)</span>
                      </div>
                      <textarea
                        ref={textRef}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="e.g. A marketplace for local artisans in Ghana..."
                        rows={3}
                        className="w-full rounded-xl px-4 py-3 text-[13px] font-light resize-none outline-none transition-colors"
                        style={{
                          background: 'var(--bg3)',
                          border: '1px solid var(--border)',
                          color: 'var(--text)',
                          cursor: 'none',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'var(--orange)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>
                    <button
                      onClick={() => canProceedWhat && setStep('budget')}
                      disabled={!canProceedWhat}
                      className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-[13px] font-semibold transition-all duration-150"
                      style={{
                        background: canProceedWhat ? 'var(--orange)' : 'var(--bg3)',
                        color: canProceedWhat ? '#fff' : 'var(--text-3)',
                        cursor: canProceedWhat ? 'none' : 'default',
                        opacity: canProceedWhat ? 1 : 0.5,
                      }}>
                      Next <ArrowRight size={13} strokeWidth={2} />
                    </button>
                  </motion.div>
                )}

                {/* Step 2 — Budget */}
                {step === 'budget' && (
                  <motion.div key="budget"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.22 }} className="flex flex-col gap-3">
                    <div className="text-[13px] font-medium" style={{ color: 'var(--text-2)' }}>What&apos;s your budget range?</div>
                    <div className="flex flex-col gap-2">
                      {budgetOptions.map((b) => (
                        <button key={b} onClick={() => setBudget(b)}
                          className="text-left px-4 py-[11px] rounded-xl text-[13px] font-medium transition-all duration-150 flex items-center justify-between"
                          style={{
                            background: budget === b ? 'rgba(255,165,0,0.12)' : 'var(--bg3)',
                            color: budget === b ? 'var(--orange)' : 'var(--text-2)',
                            border: `1px solid ${budget === b ? 'var(--orange)' : 'var(--border)'}`,
                            cursor: 'none',
                          }}>
                          {b}
                          {budget === b && <div className="w-2 h-2 rounded-full" style={{ background: 'var(--orange)' }} />}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-1">
                      <button onClick={() => setStep('what')}
                        className="flex-1 py-3 rounded-full text-[13px] font-medium transition-all"
                        style={{ background: 'var(--bg3)', color: 'var(--text-3)', cursor: 'none' }}>
                        Back
                      </button>
                      <button
                        onClick={() => canProceedBudget && setStep('contact')}
                        disabled={!canProceedBudget}
                        className="flex-[2] inline-flex items-center justify-center gap-2 py-3 rounded-full text-[13px] font-semibold transition-all duration-150"
                        style={{
                          background: canProceedBudget ? 'var(--orange)' : 'var(--bg3)',
                          color: canProceedBudget ? '#fff' : 'var(--text-3)',
                          cursor: canProceedBudget ? 'none' : 'default',
                          opacity: canProceedBudget ? 1 : 0.5,
                        }}>
                        Next <ArrowRight size={13} strokeWidth={2} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 — Contact */}
                {step === 'contact' && (
                  <motion.div key="contact"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.22 }} className="flex flex-col gap-3">
                    <div className="text-[13px] font-medium" style={{ color: 'var(--text-2)' }}>Where should we reach you?</div>
                    {[
                      { label: 'Your name', value: name, set: setName, type: 'text', placeholder: 'Kwame Asante' },
                      { label: 'Email address', value: email, set: setEmail, type: 'email', placeholder: 'you@company.com' },
                    ].map(({ label, value, set, type, placeholder }) => (
                      <div key={label}>
                        <div className="text-[12px] mb-[6px]" style={{ color: 'var(--text-3)' }}>{label}</div>
                        <input
                          type={type}
                          value={value}
                          onChange={e => set(e.target.value)}
                          placeholder={placeholder}
                          className="w-full rounded-xl px-4 py-[11px] text-[13px] outline-none transition-colors"
                          style={{
                            background: 'var(--bg3)',
                            border: '1px solid var(--border)',
                            color: 'var(--text)',
                            cursor: 'none',
                          }}
                          onFocus={e => (e.target.style.borderColor = 'var(--orange)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                        />
                      </div>
                    ))}

                    <div className="flex gap-2 mt-1">
                      <button onClick={() => setStep('budget')}
                        className="flex-1 py-3 rounded-full text-[13px] font-medium transition-all"
                        style={{ background: 'var(--bg3)', color: 'var(--text-3)', cursor: 'none' }}>
                        Back
                      </button>
                      <button
                        onClick={() => canProceedContact && submit()}
                        disabled={!canProceedContact || submitting}
                        className="flex-[2] inline-flex items-center justify-center gap-2 py-3 rounded-full text-[13px] font-semibold transition-all duration-150"
                        style={{
                          background: canProceedContact ? 'var(--orange)' : 'var(--bg3)',
                          color: canProceedContact ? '#fff' : 'var(--text-3)',
                          cursor: canProceedContact ? 'none' : 'default',
                          opacity: canProceedContact ? 1 : 0.5,
                        }}>
                        {submitting ? 'Sending…' : 'Send Brief'}
                        {!submitting && <ArrowRight size={13} strokeWidth={2} />}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Done */}
                {step === 'done' && (
                  <motion.div key="done"
                    initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }} className="flex flex-col items-center text-center gap-4 py-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(255,165,0,0.12)', border: '1px solid rgba(255,165,0,0.3)' }}>
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <div className="font-syne font-extrabold text-[18px] tracking-[-0.02em] mb-1" style={{ color: 'var(--text)' }}>
                        We&apos;ve got your brief.
                      </div>
                      <div className="text-[13px] font-light leading-[1.6]" style={{ color: 'var(--text-2)' }}>
                        Expect a reply within 24 hours.<br />
                        Want to move faster? Book a call now.
                      </div>
                    </div>
                    <a
                      href="https://cal.com/esperpartners/discovery"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold text-white w-full justify-center"
                      style={{ background: 'var(--orange)', boxShadow: '0 4px 20px rgba(255,165,0,0.35)' }}>
                      <Calendar size={14} strokeWidth={2} />
                      Book a Discovery Call
                    </a>
                    <a
                      href="https://wa.me/233208713610?text=Hi%20Esper%20Partners%2C%20I%27d%20like%20to%20discuss%20a%20project."
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[12px] font-medium"
                      style={{ color: 'var(--text-3)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25D366' }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Or continue on WhatsApp
                    </a>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
