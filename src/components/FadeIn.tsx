'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

// Sharper easing — feels snappier, less floaty
const ease = [0.22, 1, 0.36, 1] as const;

export function FadeIn({ children, delay = 0, y = 32, className, style }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({
  children,
  className,
  style,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Magnetic hover button — follows cursor within its bounds
// Use as a drop-in wrapper for <a> or <button> elements
export function MagneticWrap({
  children,
  className,
  style,
  as: Tag = 'div',
  ...rest
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 340, damping: 20 });
  const sy = useSpring(y, { stiffness: 340, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
  };

  const reset = () => { x.set(0); y.set(0); };

  const MotionTag = motion(Tag);

  return (
    <MotionTag
      ref={ref}
      style={{ ...style, x: sx, y: sy }}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
