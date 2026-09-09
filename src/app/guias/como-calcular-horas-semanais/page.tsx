import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Como Calcular Horas Semanais',
  description: 'Totalize as horas trabalhadas na semana e calcule a média diária.',
  alternates: { canonical: '/guias/como-calcular-horas-semanais' },
  openGraph: { title: 'Horas Semanais | CalculaHoras', description: 'Totalize as horas da semana.', url: 'https://calculahoras.online/guias/como-calcular-horas-semanais' },
};

export default function GuiaHorasSemanais() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <nav className="text-sm text-ink-400 mb-6">
            <Link href="/" className="hover:text-brand-600">Início</Link><span className="mx-2">/</span>
            <Link href="/guias" className="hover:text-brand-600">Guias</Link><span className="mx-2">/</span>
            <span className="text-ink-700">Horas Semanais</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-6">Como Calcular Horas Semanais</h1>
          <p className="text-ink-500 leading-relaxed text-lg mb-10">Some as horas de cada dia da semana para obter o total semanal.</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <article className="prose prose-ink max-w-none text-ink-600 space-y-6">
            <h2 className="text-2xl font-bold text-ink-900">Método</h2>
            <p>Some as horas trabalhadas de cada dia (segunda a domingo). A média diária é o total dividido pelos dias trabalhados.</p>

            <h2 className="text-2xl font-bold text-ink-900">Exemplo</h2>
            <div className="bg-surface-50 rounded-xl p-5 border border-surface-200 my-4">
              <p>Segunda a sexta: 8h × 5 dias = <strong>40h semanais</strong></p>
              <p>Média diária: 40 ÷ 5 = <strong>8h por dia</strong></p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900">Jornada semanal no Brasil</h2>
            <p>A CLT prevê jornada máxima de <strong>44 horas semanais</strong> (Art. 7º, XIII da CF/88). A maioria dos acordos coletivos estabelece 40h semanais.</p>

            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 my-6">
              <p className="font-semibold text-ink-900 mb-2">Calcule sua semana</p>
              <Link href="/horas-semanais" className="btn-primary text-sm">Calcular horas semanais</Link>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
