'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { AuroraBackground } from '@/components/ui/AuroraBackground';

export function FinalCTASection() {
  return (
    <AuroraBackground className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 via-white/70 to-emerald-50/50" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-app relative text-center">
        <ScrollReveal>
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-3 bg-gradient-to-r from-brand-400/20 to-emerald-400/20 rounded-3xl blur-2xl" />
            <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/90 text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-200/60 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              100% gratuito • Sem cadastro
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 tracking-tight mb-4 leading-[1.1]">
            Calcule suas horas{' '}
            <span className="text-gradient">agora mesmo</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="text-ink-500 text-lg max-w-lg mx-auto mb-10">
            Informe seus horários e descubra o resultado em segundos. Nenhum dado sai do seu navegador.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 via-emerald-400 to-teal-400 rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <Link
              href="/calculadora-de-horas"
              className="relative inline-flex items-center gap-3 btn-primary text-base px-8 py-4 rounded-xl shadow-xl overflow-hidden"
            >
              <BorderBeam size={150} duration={8} colorFrom="#a7f3d0" colorTo="#ffffff" borderWidth={1.5} />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Calcular horas agora</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-ink-400">
            <span className="flex items-center gap-1.5">
              <span className="text-brand-500">✓</span> Gratuito
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-500">✓</span> Sem cadastro
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-500">✓</span> Dados no seu dispositivo
            </span>
          </div>
        </ScrollReveal>
      </div>
    </AuroraBackground>
  );
}
