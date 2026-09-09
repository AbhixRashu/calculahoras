'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TextReveal } from '@/components/animations/TextReveal';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Informe seu horário de entrada',
      description: 'Digite o horário exato em que você começou a trabalhar.',
      badge: 'Entrada',
    },
    {
      number: '02',
      title: 'Adicione saída e intervalo',
      description: 'Preencha o horário de saída e o tempo de intervalo em horas e minutos.',
      badge: 'Expediente',
    },
    {
      number: '03',
      title: 'Veja o total trabalhado',
      description: 'O resultado aparece instantaneamente com horas normais, extras e opção de exportar em PDF.',
      badge: 'Resultado & PDF',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-surface-50/60 border-y border-surface-200/70 relative overflow-hidden">
      <div className="container-app relative">
        <div className="text-center mb-12">
          <ScrollReveal>
            <p className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-2">
              Simples, Rápido e Sem Cadastro
            </p>
          </ScrollReveal>
          <TextReveal
            text="Como funciona o cálculo"
            tag="h2"
            className="text-3xl md:text-4xl font-extrabold text-ink-900 tracking-tight"
          />
          <ScrollReveal delay={150}>
            <p className="text-ink-500 max-w-lg mx-auto mt-3 text-sm md:text-base">
              Três passos simples para calcular suas horas trabalhadas conforme as regras da CLT.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Step Cards in a clean, balanced 3-column row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={150 + index * 100}>
              <div className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-surface-200/80 shadow-xs hover:border-brand-300 transition-all hover:-translate-y-1">
                {/* Step circle badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-extrabold text-xl mb-4 flex items-center justify-center shadow-md shadow-brand-600/20">
                  {step.number}
                </div>

                <span className="text-[11px] font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-2.5 py-0.5 rounded-full mb-2">
                  {step.badge}
                </span>

                <h3 className="text-base font-bold text-ink-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-ink-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
