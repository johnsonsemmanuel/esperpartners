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

    // Initialize position to center on mount
    mx.current = window.innerWidth / 2;
    my.current = window.innerHeight / 2;
    rx.current = mx.current;
    ry.current = my.current;

    cur.style.left = mx.current + 'px';
    cur.style.top = my.current + 'px';
    ring.style.left = rx.current + 'px';
    ring.style.top = ry.current + 'px';

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
    };

    let rafId: number;
    const loop = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      ring.style.left = rx.current + 'px';
      ring.style.top = ry.current + 'px';
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => { cur.classList.add('h'); ring.classList.add('h'); });
      el.addEventListener('mouseleave', () => { cur.classList.remove('h'); ring.classList.remove('h'); });
    };
    document.querySelectorAll('a, button, .bento-card, .testi-card').forEach(addHover);

    document.addEventListener('mousemove', onMove);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={curRef} id="cur" />
      <div ref={ringRef} id="cur-r" />
    </>
  );
}
