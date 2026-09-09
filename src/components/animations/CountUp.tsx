'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export function CountUp({ end, duration = 2000, className = '', suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Initialize with truthful end value so crawlable SSR HTML contains actual values
  const [count, setCount] = useState(end);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset to 0 on client to trigger smooth visual count-up animation
    setCount(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className={className} suppressHydrationWarning>
      {count}{suffix}
    </span>
  );
}
