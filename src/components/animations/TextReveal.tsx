'use client';

import { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  wordByWord?: boolean;
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  tag: Tag = 'h2',
  wordByWord = true,
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (wordByWord) {
    const words = text.split(' ');
    return (
      <div ref={ref} className={className}>
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 60}ms`,
            }}
          >
            {word}
            {i < words.length - 1 && '\u00A0'}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {text}
    </div>
  );
}
