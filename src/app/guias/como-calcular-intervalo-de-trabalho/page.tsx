import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Como Calcular Intervalo de Trabalho',
  description: 'Calcule a duração do intervalo e entenda os direitos conforme a CLT.',
  alternates: { canonical: '/guias/como-calcular-intervalo-de-trabalho' },
  openGraph: { title: 'Intervalo de Trabalho | CalculaHoras', description: 'Calcule a duração do intervalo.', url: 'https://calculahoras.online/guias/como-calcular-intervalo-de-trabalho' },
};

export default function GuiaIntervalo() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <nav className="text-sm text-ink-400 mb-6">
            <Link href="/" className="hover:text-brand-600">Início</Link><span className="mx-2">/</span>
            <Link href="/guias" className="hover:text-brand-600">Guias</Link><span className="mx-2">/</span>
            <span className="text-ink-700">Intervalo</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-6">Como Calcular Intervalo de Trabalho</h1>
          <p className="text-ink-500 leading-relaxed text-lg mb-10">Entenda a importância do intervalo e como calculá-lo.</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <article className="prose prose-ink max-w-none text-ink-600 space-y-6">
            <h2 className="text-2xl font-bold text-ink-900">O que diz a CLT?</h2>
            <p>Art. 71: Para jornadas superiores a 6h, o intervalo mínimo é de <strong>1 hora</strong>.</p>
            <p>Art. 71 §4º: Intervalo de 15 a 30 minutos para jornadas de 6h (acordo individual escrito).</p>

            <h2 className="text-2xl font-bold text-ink-900">Como calcular</h2>
            <p>Subtraia o horário de retorno do horário de início do intervalo.</p>
            <div className="bg-surface-50 rounded-xl p-5 border border-surface-200 my-4">
              <p><strong>Início:</strong> 12:00</p>
              <p><strong>Fim:</strong> 13:00</p>
              <p>13:00 − 12:00 = <strong>1 hora de intervalo</strong></p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900">Se o intervalo for reduzido?</h2>
            <p>Se o empregador não conceder o intervalo completo, deverá pagar o período não gozado como hora extra (Art. 71 §4º).</p>

            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 my-6">
              <p className="font-semibold text-ink-900 mb-2">Calcule seu intervalo</p>
              <Link href="/calculadora-de-intervalo" className="btn-primary text-sm">Calcular intervalo</Link>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
