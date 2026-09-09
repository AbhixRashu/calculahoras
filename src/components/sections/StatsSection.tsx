'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { CountUp } from '@/components/animations/CountUp';
import { SpotlightCard } from '@/components/animations/SpotlightCard';

const stats = [
  {
    value: 10, suffix: '+', label: 'Ferramentas', description: 'calculadoras disponíveis',
    icon: '🛠️', color: 'text-brand-600', bg: 'bg-brand-50',
  },
  {
    value: 100, suffix: '%', label: 'Gratuito', description: 'sem custos ou assinaturas',
    icon: '✅', color: 'text-emerald-600', bg: 'bg-emerald-50',
  },
  {
    value: 0, suffix: '', label: 'Cadastros', description: 'use sem criar conta',
    icon: '🔒', color: 'text-teal-600', bg: 'bg-teal-50',
  },
  {
    value: 24, suffix: '/7', label: 'Disponível', description: 'sempre online e rápido',
    icon: '⚡', color: 'text-amber-600', bg: 'bg-amber-50',
  },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-white via-surface-50/60 to-white border-y border-surface-100">
      {/* Aurora glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brand-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-app relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <SpotlightCard
                className="rounded-2xl border border-surface-200/80"
                spotlightColor="rgba(16, 185, 129, 0.09)"
              >
                <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl text-center group hover:border-brand-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl md:text-4xl font-extrabold mb-1 ${stat.color}`}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-bold text-ink-900">{stat.label}</div>
                  <div className="text-xs text-ink-400 mt-0.5 leading-tight">{stat.description}</div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
