'use client';

export async function triggerConfetti() {
  try {
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#10b981', '#059669', '#34d399', '#6ee7b7', '#f59e0b'],
      disableForReducedMotion: true,
    });
  } catch {
    // Graceful fallback if package is not present
  }
}
