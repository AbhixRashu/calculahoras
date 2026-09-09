import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Como Calcular Hora de Saída',
  description: 'Descubra que horas você precisa sair do trabalho baseado na sua jornada.',
  alternates: { canonical: '/guias/como-calcular-hora-de-saida' },
  openGraph: { title: 'Hora de Saída | CalculaHoras', description: 'Descubra que horas você precisa sair.', url: 'https://calculahoras.online/guias/como-calcular-hora-de-saida' },
};

export default function GuiaHoraSaida() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <nav className="text-sm text-ink-400 mb-6">
            <Link href="/" className="hover:text-brand-600">Início</Link><span className="mx-2">/</span>
            <Link href="/guias" className="hover:text-brand-600">Guias</Link><span className="mx-2">/</span>
            <span className="text-ink-700">Hora de Saída</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-6">Como Calcular a Hora de Saída</h1>
          <p className="text-ink-500 leading-relaxed text-lg mb-10">Descubra o horário exato em que você deve sair do trabalho.</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <article className="prose prose-ink max-w-none text-ink-600 space-y-6">
            <h2 className="text-2xl font-bold text-ink-900">Fórmula</h2>
            <p>Hora de saída = Entrada + Jornada + Intervalo</p>

            <h2 className="text-2xl font-bold text-ink-900">Exemplo</h2>
            <div className="bg-surface-50 rounded-xl p-5 border border-surface-200 my-4">
              <p><strong>Entrada:</strong> 08:30</p>
              <p><strong>Jornada:</strong> 08:00</p>
              <p><strong>Intervalo:</strong> 01:00</p>
              <hr className="my-3 border-surface-200" />
              <p>08:30 + 08:00 + 01:00 = <strong>17:30</strong></p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900">Dica rápida</h2>
            <p>Some tudo em minutos para facilitar:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Entrada: 8×60 + 30 = 510 min</li>
              <li>Jornada: 8×60 = 480 min</li>
              <li>Intervalo: 60 min</li>
              <li>Total: 510 + 480 + 60 = 1050 min</li>
              <li>1050 ÷ 60 = 17h 30min</li>
            </ul>

            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 my-6">
              <p className="font-semibold text-ink-900 mb-2">Calcule sua hora de saída</p>
              <Link href="/hora-de-saida" className="btn-primary text-sm">Calcular hora de saída</Link>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
