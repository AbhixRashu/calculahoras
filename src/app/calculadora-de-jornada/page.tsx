import type { Metadata } from 'next';
import { JornadaCalculator } from '@/components/calculator/JornadaCalculator';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Jornada de Trabalho Online',
  description: 'Analise sua jornada de trabalho: horas previstas, trabalhadas, extras e restantes. Barra de progresso visual.',
  alternates: { canonical: '/calculadora-de-jornada' },
  openGraph: { title: 'Calculadora de Jornada | CalculaHoras', description: 'Analise sua jornada de trabalho com barra de progresso.', url: 'https://calculahoras.online/calculadora-de-jornada' },
};

export default function JornadaPage() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
      <div className="container-app">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">Calculadora de Jornada</h1>
            <p className="text-ink-500 leading-relaxed">Compare horas trabalhadas vs previstas. Veja extras, restantes e progresso visual.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <JornadaCalculator />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-ink-900 mb-4">O que é análise de jornada?</h2>
            <div className="prose prose-ink max-w-none text-ink-600 space-y-4">
              <p>A análise de jornada compara o tempo trabalhado com o previsto contratualmente.</p>
              <p><strong>Indicadores importantes:</strong></p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Trabalhado:</strong> Tempo efetivo de trabalho (com desconto do intervalo)</li>
                <li><strong>Previsto:</strong> Jornada contratual (geralmente 8h)</li>
                <li><strong>Extras:</strong> Tempo acima da jornada prevista</li>
                <li><strong>Restante:</strong> Tempo que falta para completar a jornada</li>
                <li><strong>Percentual:</strong> Quanto da jornada já foi cumprida</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
