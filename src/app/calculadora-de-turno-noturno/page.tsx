import type { Metadata } from 'next';
import { NightShiftCalculator } from '@/components/calculator/NightShiftCalculator';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Turno Noturno Online | CalculaHoras',
  description: 'Calcule horas de turno noturno com adicional de 20% conforme a CLT.',
  alternates: { canonical: 'https://calculahoras.online/turno-noturno' },
  robots: { index: false, follow: true },
};

export default function TurnoNoturnoPage() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
      <div className="container-app">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">Calculadora de Turno Noturno</h1>
            <p className="text-ink-500 leading-relaxed">Calcule horas noturnas com adicional de 20% conforme a legislação brasileira.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <NightShiftCalculator />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-ink-900 mb-4">O que é turno noturno?</h2>
            <div className="prose prose-ink max-w-none text-ink-600 space-y-4">
              <p>Conforme a CLT, considera-se trabalho noturno o realizado entre as 22h e as 5h.</p>
              <p><strong>Características importantes:</strong></p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Horário:</strong> Das 22h às 5h (Art. 73 CLT)</li>
                <li><strong>Adicional:</strong> Mínimo de 20% sobre a hora normal</li>
                <li><strong>Hora reduzida:</strong> 52 minutos e 30 segundos (Art. 73 §1º)</li>
                <li><strong>Aplica-se a:</strong> Trabalhadores urbanos (indústria, comércio, serviços)</li>
              </ul>
              <p><strong>Importante:</strong> Este cálculo é uma referência. Consulte seu departamento de RH ou sindicato para valores exatos do seu contrato.</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-ink-900 mb-6">Ferramentas relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/horas-extras" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
                <h3 className="font-semibold text-ink-900">Horas Extras</h3>
                <p className="text-sm text-ink-500 mt-1">Calcule suas extras</p>
              </Link>
              <Link href="/calculadora-de-jornada" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
                <h3 className="font-semibold text-ink-900">Análise de Jornada</h3>
                <p className="text-sm text-ink-500 mt-1">Veja o progresso</p>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
