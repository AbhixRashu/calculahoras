'use client';

import React from 'react';

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function AuroraBackground({
  children,
  className = '',
}: AuroraBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute -top-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-3xl opacity-40 mix-blend-multiply filter animate-aurora-blob-1 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(52, 211, 153, 0.08) 50%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-[10%] -right-[15%] w-[55vw] h-[55vw] rounded-full blur-3xl opacity-35 mix-blend-multiply filter animate-aurora-blob-2 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(5, 150, 105, 0.2) 0%, rgba(110, 231, 183, 0.1) 50%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-[20%] left-[25%] w-[50vw] h-[50vw] rounded-full blur-3xl opacity-30 mix-blend-multiply filter animate-aurora-blob-3 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)',
          }}
        />
      </div>
      {children}
    </div>
  );
}
