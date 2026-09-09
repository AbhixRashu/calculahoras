import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Como Calcular Turno Noturno',
  description: 'Entenda horas noturnas, adicional de 20% e hora reduzida conforme a CLT.',
  alternates: { canonical: '/guias/como-calcular-turno-noturno' },
  openGraph: { title: 'Turno Noturno | CalculaHoras', description: 'Entenda horas noturnas e adicional de 20%.', url: 'https://calculahoras.online/guias/como-calcular-turno-noturno' },
};

export default function GuiaTurnoNoturno() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <nav className="text-sm text-ink-400 mb-6">
            <Link href="/" className="hover:text-brand-600">Início</Link><span className="mx-2">/</span>
            <Link href="/guias" className="hover:text-brand-600">Guias</Link><span className="mx-2">/</span>
            <span className="text-ink-700">Turno Noturno</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-6">Como Calcular Turno Noturno</h1>
          <p className="text-ink-500 leading-relaxed text-lg mb-10">Entenda as particularidades do trabalho noturno na legislação brasileira.</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <article className="prose prose-ink max-w-none text-ink-600 space-y-6">
            <h2 className="text-2xl font-bold text-ink-900">Definição legal</h2>
            <p>Conforme a CLT (Art. 73), trabalho noturno é o realizado entre <strong>22h e 5h</strong>.</p>

            <h2 className="text-2xl font-bold text-ink-900">Características</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Horário:</strong> 22h às 5h (7 horas)</li>
              <li><strong>Adicional:</strong> Mínimo de 20% sobre hora normal</li>
              <li><strong>Hora reduzida:</strong> 52 minutos e 30 segundos</li>
              <li><strong>Aplicação:</strong> Trabalhadores urbanos</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900">Exemplo prático</h2>
            <div className="bg-surface-50 rounded-xl p-5 border border-surface-200 my-4">
              <p><strong>Entrada:</strong> 22:00</p>
              <p><strong>Saída:</strong> 06:00</p>
              <p><strong>Intervalo:</strong> 01:00</p>
              <hr className="my-3 border-surface-200" />
              <p>Total trabalhado: 8h (descontando intervalo)</p>
              <p>Horas noturnas: 7h (22h às 05h)</p>
              <p>Adicional 20%: 1h 24min</p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900">Horas extras noturnas</h2>
            <p>Se houver horas extras em turno noturno, incidem ambos os adicionais: 20% noturno + 50% extra = 70% sobre a hora normal.</p>

            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 my-6">
              <p className="font-semibold text-ink-900 mb-2">Calcule seu turno</p>
              <Link href="/calculadora-de-turno-noturno" className="btn-primary text-sm">Calcular turno noturno</Link>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
