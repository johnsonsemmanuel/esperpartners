'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 340, suffix: '+', label: 'Projects Delivered' },
  { value: 28, suffix: '+', label: 'Countries Served' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 12, suffix: '+', label: 'Years of Excellence' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(current);
            if (current >= target) clearInterval(timer);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-syne font-extrabold text-white tracking-[-0.03em]"
      style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
      {count}<span className="text-[#FF6200]">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <div className="bg-[#111111] py-8 flex justify-center flex-wrap gap-16 px-6">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <CountUp target={s.value} suffix={s.suffix} />
          <div className="text-[13px] text-[#A0A0A0] font-light mt-1 tracking-[0.02em]">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
