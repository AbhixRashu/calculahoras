'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TextReveal } from '@/components/animations/TextReveal';

const topics = [
  {
    title: 'Jornada de trabalho no Brasil',
    description: 'A CLT prevê jornada máxima de 44h semanais. A maioria dos acordos coletivos estabelece 40h.',
    link: '/guias/como-calcular-horas-trabalhadas',
  },
  {
    title: 'Horas extras',
    description: 'Mínimo de 50% sobre a hora normal. Domingos e feriados: 100%. Turno noturno: +20%.',
    link: '/guias/como-calcular-horas-extras',
  },
  {
    title: 'Intervalo intrajornada',
    description: 'Jornadas acima de 6h: mínimo de 1 hora. Art. 71 da CLT.',
    link: '/guias/como-calcular-intervalo-de-trabalho',
  },
  {
    title: 'Turno noturno',
    description: 'Das 22h às 5h. Hora reduzida: 52min30s. Adicional mínimo: 20%.',
    link: '/guias/como-calcular-turno-noturno',
  },
  {
    title: 'Horas decimais',
    description: '7h30 = 7,50h. Divida os minutos por 60 para converter.',
    link: '/guias/como-calcular-horas-em-decimal',
  },
  {
    title: 'Banco de horas',
    description: 'Registro de horas a compensar. Prazo: 6 meses (acordo individual) ou 1 ano (acordo coletivo).',
    link: '/guias/como-calcular-horas-semanais',
  },
];

export function EducationalSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container-app">
        <div className="text-center mb-14">
          <ScrollReveal>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Aprenda</p>
          </ScrollReveal>
          <TextReveal
            text="Guias de cálculo de horas"
            tag="h2"
            className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight"
          />
          <ScrollReveal delay={200}>
            <p className="text-ink-500 max-w-md mx-auto mt-4">
              Entenda como funcionam os cálculos de horas trabalhadas no Brasil.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {topics.map((topic, i) => (
            <ScrollReveal key={topic.title} delay={100 + i * 80}>
              <Link
                href={topic.link}
                className="group block p-5 rounded-2xl border border-surface-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-semibold text-ink-900 group-hover:text-brand-700 transition-colors mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">{topic.description}</p>
                <div className="mt-3 flex items-center text-sm text-brand-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Ler guia
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="ml-1 group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="text-center mt-10">
            <Link href="/guias" className="text-brand-600 hover:text-brand-700 font-medium text-sm inline-flex items-center gap-1">
              Ver todos os guias
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
