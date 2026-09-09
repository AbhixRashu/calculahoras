import type { Metadata } from 'next';
import { DepartureCalculator } from '@/components/calculator/DepartureCalculator';
import { FAQSection } from '@/components/sections/FAQSection';
import { StructuredData } from '@/components/seo/StructuredData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Hora de Saída Online Grátis',
  description:
    'Descubra que horas você precisa sair do trabalho. Informe entrada, jornada e intervalo e veja a hora de saída prevista.',
  alternates: {
    canonical: '/hora-de-saida',
  },
  openGraph: {
    title: 'Calculadora de Hora de Saída | CalculaHoras',
    description:
      'Descubra que horas você precisa sair do trabalho.',
    url: 'https://calculahoras.online/hora-de-saida',
  },
};

export default function HoraDeSaidaPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Hora de Saída', item: 'https://calculahoras.online/hora-de-saida' },
          ],
        }}
      />

      <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container-app">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">
              Calculadora de Hora de Saída
            </h1>
            <p className="text-ink-500 leading-relaxed">
              Descubra que horas você precisa sair do trabalho. Informe o horário de entrada, a jornada desejada e o intervalo.
            </p>
          </div>

          <DepartureCalculator />

          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-ink-900 mb-4">
              Como calcular a hora de saída
            </h2>
            <div className="prose prose-ink max-w-none text-ink-600 space-y-4">
              <p>
                Para calcular a hora de saída, some o horário de entrada com a jornada de trabalho e o intervalo.
              </p>
              <p>
                <strong>Exemplo:</strong> Entrada às 08:30, jornada de 8 horas, intervalo de 1 hora.
              </p>
              <p>
                08:30 + 08:00 + 01:00 = <strong>17:30</strong>. Você deve sair às 17:30.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-app max-w-2xl">
          <h2 className="text-2xl font-bold text-ink-900 mb-6">
            Ferramentas relacionadas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/horas-trabalhadas" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
              <h3 className="font-semibold text-ink-900">Horas Trabalhadas</h3>
              <p className="text-sm text-ink-500 mt-1">Total de horas do dia</p>
            </Link>
            <Link href="/horas-extras" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
              <h3 className="font-semibold text-ink-900">Horas Extras</h3>
              <p className="text-sm text-ink-500 mt-1">Calcule suas horas extras</p>
            </Link>
            <Link href="/horas-semanais" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
              <h3 className="font-semibold text-ink-900">Horas Semanais</h3>
              <p className="text-sm text-ink-500 mt-1">Totalize sua semana</p>
            </Link>
            <Link href="/horas-decimais" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
              <h3 className="font-semibold text-ink-900">Horas Decimais</h3>
              <p className="text-sm text-ink-500 mt-1">Converta para decimal</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
