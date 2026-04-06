'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
    };

    const loop = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      ring.style.left = rx.current + 'px';
      ring.style.top = ry.current + 'px';
      requestAnimationFrame(loop);
    };
    const raf = requestAnimationFrame(loop);

    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => { cur.classList.add('h'); ring.classList.add('h'); });
      el.addEventListener('mouseleave', () => { cur.classList.remove('h'); ring.classList.remove('h'); });
    };
    document.querySelectorAll('a, button, .bento-card, .testi-card, .faq-item, .step-item').forEach(addHover);

    document.addEventListener('mousemove', onMove);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={curRef} id="cur" />
      <div ref={ringRef} id="cur-r" />
    </>
  );
}
