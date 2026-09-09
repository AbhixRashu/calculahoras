'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TextReveal } from '@/components/animations/TextReveal';
import { SpotlightCard } from '@/components/animations/SpotlightCard';
import { BorderBeam } from '@/components/ui/BorderBeam';

const tools = [
  {
    title: 'Calculadora de Horas Diárias',
    description: 'Calcule as horas trabalhadas em um dia com horário de entrada, saída e intervalo em minutos e horas. Suporte a turnos da noite.',
    href: '/horas-trabalhadas',
    badge: 'Mais usada',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Calculadora de Horas Semanais',
    description: 'Some as horas dos sete dias da semana, dia a dia, com intervalos independentes e cálculo automático de horas extras sobre as 44h CLT.',
    href: '/horas-semanais',
    badge: 'Folha de Ponto',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Calculadora de Horas Mensais',
    description: 'Calcule o total de horas trabalhadas no mês com base nos dias úteis, média diária e divisor 220 ou 200 da CLT.',
    href: '/horas-mensais',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
        <path d="M7 16h6" />
      </svg>
    ),
  },
  {
    title: 'Calculadora de Horas Anuais',
    description: 'Calcule sua jornada anual considerando as semanas efetivamente trabalhadas, descontando os 30 dias de férias da CLT e feriados.',
    href: '/calculadora-de-horas-anuais',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 14 10" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
      </svg>
    ),
  },
  {
    title: 'Calculadora com Intervalo (Almoço)',
    description: 'Desconte com precisão as pausas de almoço em horas e minutos e descubra se o seu intervalo respeita o Art. 71 da CLT.',
    href: '/calculadora-de-intervalo',
    badge: 'Art. 71 CLT',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: 'Calculadora de Horas e Salário',
    description: 'Converta suas horas trabalhadas em dinheiro: calcule o valor exato da sua hora a partir do salário mensal e o valor de cada adicional.',
    href: '/calculadora-horas-e-salario',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Calculadora de Horas Extras',
    description: 'Descubra quantas horas extras você fez, o acréscimo de 50% em dias úteis e 100% aos domingos/feriados com reflexo no DSR.',
    href: '/horas-extras',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Calcular Horas no Excel',
    description: 'As fórmulas prontas para somar horas no Excel e Google Planilhas, turno da noite e o formato [h]:mm para não zerar após 24h.',
    href: '/calcular-horas-no-excel',
    badge: 'Download Grátis',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Turno Noturno e Adicional',
    description: 'Calcule horas com redução ficta noturna da CLT (52min30s) e adicional noturno de 20% para jornadas das 22h às 05h.',
    href: '/calculadora-de-turno-noturno',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
];

export function ToolsGridSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Glow sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-app relative">
        <div className="text-center mb-14">
          <ScrollReveal>
            <p className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-3">
              Ferramentas de Cálculo de Jornada
            </p>
          </ScrollReveal>
          <TextReveal
            text="Tudo o que você precisa para seu ponto"
            tag="h2"
            className="text-3xl md:text-4xl font-extrabold text-ink-900 tracking-tight"
          />
          <ScrollReveal delay={200}>
            <p className="text-ink-500 max-w-lg mx-auto mt-4 text-base">
              Calculadoras dedicadas e otimizadas para cada situação trabalhista da CLT.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const isHighlighted = index === 0;
            return (
              <ScrollReveal key={tool.href} delay={100 + index * 60}>
                <SpotlightCard
                  className="h-full rounded-2xl border border-surface-200/90"
                  spotlightColor={isHighlighted ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.07)'}
                >
                  <Link
                    href={tool.href}
                    className="group relative flex flex-col justify-between h-full bg-white/95 backdrop-blur-xs p-6 rounded-2xl hover:border-brand-400 hover:shadow-xl hover:shadow-brand-500/8 transition-all duration-300 hover:-translate-y-1"
                  >
                    {isHighlighted && <BorderBeam size={200} duration={10} colorFrom="#10b981" colorTo="#34d399" borderWidth={1} />}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs ${
                          isHighlighted
                            ? 'bg-brand-600 text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-brand-500/30'
                            : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
                        }`}>
                          {tool.icon}
                        </div>
                        {tool.badge && (
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-100/80 text-brand-800 border border-brand-200/50">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-brand-700 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-ink-500 leading-relaxed">{tool.description}</p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-surface-100 flex items-center justify-between">
                      <span className="text-xs text-brand-600 font-bold group-hover:text-brand-700 transition-colors flex items-center gap-1">
                        Acessar calculadora
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                      <span className="text-[10px] font-semibold text-ink-300 group-hover:text-brand-400 transition-colors">
                        #{index + 1}
                      </span>
                    </div>
                  </Link>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
