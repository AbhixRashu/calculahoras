import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Como Calcular Horas Extras',
  description: 'Guia para calcular horas extras trabalhadas. Entenda o que são e como identificá-las.',
  alternates: { canonical: '/guias/como-calcular-horas-extras' },
  openGraph: { title: 'Como Calcular Horas Extras | CalculaHoras', description: 'Guia para calcular horas extras.', url: 'https://calculahoras.online/guias/como-calcular-horas-extras' },
};

export default function GuiaHorasExtras() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <nav className="text-sm text-ink-400 mb-6">
            <Link href="/" className="hover:text-brand-600">Início</Link><span className="mx-2">/</span>
            <Link href="/guias" className="hover:text-brand-600">Guias</Link><span className="mx-2">/</span>
            <span className="text-ink-700">Horas Extras</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-6">Como Calcular Horas Extras</h1>
          <p className="text-ink-500 leading-relaxed text-lg mb-10">Entenda o que são horas extras e como calculá-las corretamente.</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <article className="prose prose-ink max-w-none text-ink-600 space-y-6">
            <h2 className="text-2xl font-bold text-ink-900">O que são horas extras?</h2>
            <p>Horas extras são o tempo trabalhado além da jornada contratual. Se sua jornada é 8h e você trabalhou 9h, tem 1 hora extra.</p>

            <h2 className="text-2xl font-bold text-ink-900">Fórmula</h2>
            <p>Horas extras = Horas trabalhadas − Jornada normal</p>

            <h2 className="text-2xl font-bold text-ink-900">Exemplo</h2>
            <div className="bg-surface-50 rounded-xl p-5 border border-surface-200 my-4">
              <p><strong>Jornada normal:</strong> 08:00</p>
              <p><strong>Trabalhado:</strong> 09:30</p>
              <p>9h 30min − 8h = <strong>1h 30min de horas extras</strong></p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900">Adicionais conforme a CLT</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Horas extras:</strong> Mínimo de 50% sobre a hora normal</li>
              <li><strong>Domingos e feriados:</strong> Adicional de 100%</li>
              <li><strong>Turno noturno:</strong> +20% noturno +50% extra</li>
            </ul>
            <p><strong>Nota:</strong> Valores podem variar conforme acordo coletivo ou contrato. Consulte seu RH.</p>

            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 my-6">
              <p className="font-semibold text-ink-900 mb-2">Calcule suas horas extras</p>
              <Link href="/horas-extras" className="btn-primary text-sm">Calcular horas extras</Link>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
