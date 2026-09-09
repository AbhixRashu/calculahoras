import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Guias de Cálculo de Horas',
  description: 'Aprenda como calcular horas trabalhadas, horas extras, intervalo, turno noturno e mais. Guias completos em português.',
  alternates: { canonical: '/guias' },
  openGraph: { title: 'Guias | CalculaHoras', description: 'Aprenda como calcular horas trabalhadas.', url: 'https://calculahoras.online/guias' },
};

const guides = [
  { href: '/guias/como-calcular-horas-trabalhadas', title: 'Como Calcular Horas Trabalhadas', desc: 'Passo a passo para calcular suas horas diárias com precisão.' },
  { href: '/guias/como-calcular-horas-extras', title: 'Como Calcular Horas Extras', desc: 'Entenda como identificar e calcular suas horas extras.' },
  { href: '/guias/como-calcular-horas-em-decimal', title: 'Horas em Decimal', desc: 'Converta 7h30 para 7,50 de forma simples.' },
  { href: '/guias/como-calcular-hora-de-saida', title: 'Como Calcular Hora de Saída', desc: 'Descubra que horas precisa sair do trabalho.' },
  { href: '/guias/como-calcular-horas-semanais', title: 'Horas Semanais', desc: 'Totalize as horas da semana corretamente.' },
  { href: '/guias/como-calcular-intervalo-de-trabalho', title: 'Intervalo de Trabalho', desc: 'Calcule a duração do seu intervalo.' },
  { href: '/guias/como-calcular-turno-noturno', title: 'Turno Noturno', desc: 'Entenda horas noturnas e adicional de 20%.' },
];

export default function GuiasPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">Guias de Cálculo</h1>
            <p className="text-ink-500 leading-relaxed text-lg">Aprenda a calcular horas trabalhadas, extras, intervalos e muito mais.</p>
          </div>
        </ScrollReveal>
        <div className="space-y-4">
          {guides.map((guide, i) => (
            <ScrollReveal key={guide.href} delay={i * 80}>
              <Link href={guide.href} className="block p-5 rounded-2xl border border-surface-200 hover:border-brand-300 hover:shadow-md transition-all group">
                <h2 className="text-lg font-semibold text-ink-900 group-hover:text-brand-700 transition-colors">{guide.title}</h2>
                <p className="text-sm text-ink-500 mt-1">{guide.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
