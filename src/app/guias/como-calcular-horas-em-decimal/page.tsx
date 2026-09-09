import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Como Calcular Horas em Decimal',
  description: 'Converta horas e minutos em formato decimal. 7h30 = 7,50 horas.',
  alternates: { canonical: '/guias/como-calcular-horas-em-decimal' },
  openGraph: { title: 'Horas em Decimal | CalculaHoras', description: 'Converta horas e minutos em formato decimal.', url: 'https://calculahoras.online/guias/como-calcular-horas-em-decimal' },
};

export default function GuiaHorasDecimal() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <nav className="text-sm text-ink-400 mb-6">
            <Link href="/" className="hover:text-brand-600">Início</Link><span className="mx-2">/</span>
            <Link href="/guias" className="hover:text-brand-600">Guias</Link><span className="mx-2">/</span>
            <span className="text-ink-700">Horas em Decimal</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-6">Como Calcular Horas em Decimal</h1>
          <p className="text-ink-500 leading-relaxed text-lg mb-10">Converta horas e minutos em formato decimal de forma simples.</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <article className="prose prose-ink max-w-none text-ink-600 space-y-6">
            <h2 className="text-2xl font-bold text-ink-900">Fórmula</h2>
            <p>Horas decimais = Horas + (Minutos ÷ 60)</p>

            <h2 className="text-2xl font-bold text-ink-900">Tabela de conversão rápida</h2>
            <div className="bg-surface-50 rounded-xl p-5 border border-surface-200 my-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p>7h 00min = <strong>7,00 h</strong></p>
                <p>7h 15min = <strong>7,25 h</strong></p>
                <p>7h 30min = <strong>7,50 h</strong></p>
                <p>7h 45min = <strong>7,75 h</strong></p>
                <p>8h 00min = <strong>8,00 h</strong></p>
                <p>8h 20min = <strong>8,33 h</strong></p>
                <p>8h 30min = <strong>8,50 h</strong></p>
                <p>8h 40min = <strong>8,67 h</strong></p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-ink-900">Exemplo</h2>
            <p>7 horas e 30 minutos: 7 + (30 ÷ 60) = 7 + 0,5 = <strong>7,50 horas</strong></p>

            <h2 className="text-2xl font-bold text-ink-900">Por que usar decimal?</h2>
            <p>O formato decimal é útil para cálculos de folha de pagamento, controle de ponto e emissão de relatórios.</p>

            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 my-6">
              <p className="font-semibold text-ink-900 mb-2">Converta agora</p>
              <Link href="/horas-decimais" className="btn-primary text-sm">Converter para decimal</Link>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
