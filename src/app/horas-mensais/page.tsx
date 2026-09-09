import type { Metadata } from 'next';
import { MonthlyCalculator } from '@/components/calculator/MonthlyCalculator';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Horas Mensais Online Grátis',
  description: 'Calcule o total de horas trabalhadas no mês. Previsto vs realizado, horas extras e média diária.',
  alternates: { canonical: '/horas-mensais' },
  openGraph: { title: 'Calculadora de Horas Mensais | CalculaHoras', description: 'Calcule o total de horas trabalhadas no mês.', url: 'https://calculahoras.online/horas-mensais' },
};

export default function HorasMensaisPage() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
      <div className="container-app">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">Calculadora de Horas Mensais</h1>
            <p className="text-ink-500 leading-relaxed">Calcule o total de horas trabalhadas no mês com base nos dias úteis e jornada diária.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <MonthlyCalculator />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Como calcular horas mensais</h2>
            <div className="prose prose-ink max-w-none text-ink-600 space-y-4">
              <p>Multipique os dias úteis do mês pelas horas diárias para obter o total previsto.</p>
              <p><strong>Exemplo:</strong> 22 dias úteis × 8h = 176 horas mensais previstas.</p>
              <p>Se você trabalhou 180 horas, tem 4 horas extras no mês.</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-ink-900 mb-6">Ferramentas relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/horas-semanais" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
                <h3 className="font-semibold text-ink-900">Horas Semanais</h3>
                <p className="text-sm text-ink-500 mt-1">Totalize sua semana</p>
              </Link>
              <Link href="/horas-extras" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
                <h3 className="font-semibold text-ink-900">Horas Extras</h3>
                <p className="text-sm text-ink-500 mt-1">Calcule suas extras</p>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
