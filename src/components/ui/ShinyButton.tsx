'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ShinyButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function ShinyButton({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ShinyButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer focus:outline-hidden';

  const variantStyles = {
    primary:
      'bg-brand-600 text-white shadow-md shadow-brand-500/20 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30',
    secondary:
      'bg-surface-100 text-ink-800 hover:bg-surface-200 border border-surface-200',
    outline:
      'bg-white text-ink-700 border border-surface-300 hover:border-brand-500 hover:text-brand-700 shadow-2xs',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Moving Shimmer Reflection */}
      <span className="absolute inset-0 w-full h-full block">
        <span className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/20 to-transparent rotate-45 pointer-events-none transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </span>

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
