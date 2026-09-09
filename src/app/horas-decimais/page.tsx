import type { Metadata } from 'next';
import { DecimalCalculator } from '@/components/calculator/DecimalCalculator';
import { FAQSection } from '@/components/sections/FAQSection';
import { StructuredData } from '@/components/seo/StructuredData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Horas Decimais Online Grátis',
  description:
    'Converta horas e minutos em formato decimal ou vice-versa. Ferramenta rápida e precisa para conversão de horas.',
  alternates: {
    canonical: '/horas-decimais',
  },
  openGraph: {
    title: 'Calculadora de Horas Decimais | CalculaHoras',
    description:
      'Converta horas e minutos em formato decimal ou vice-versa.',
    url: 'https://calculahoras.online/horas-decimais',
  },
};

export default function HorasDecimaisPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Horas Decimais', item: 'https://calculahoras.online/horas-decimais' },
          ],
        }}
      />

      <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container-app">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">
              Calculadora de Horas Decimais
            </h1>
            <p className="text-ink-500 leading-relaxed">
              Converta horas e minutos em formato decimal ou vice-versa. Ferramenta rápida e precisa para conversão de horas.
            </p>
          </div>

          <DecimalCalculator />

          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-ink-900 mb-4">
              Como converter horas em decimal
            </h2>
            <div className="prose prose-ink max-w-none text-ink-600 space-y-4">
              <p>
                Para converter horas e minutos em decimal, divida os minutos por 60 e some às horas.
              </p>
              <p>
                <strong>Exemplo:</strong> 7h 30min = 7 + (30/60) = <strong>7,5 horas</strong>.
              </p>
              <p>
                Para converter de decimal para horas: multiplique a parte decimal por 60 para obter os minutos.
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
            <Link href="/hora-de-saida" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
              <h3 className="font-semibold text-ink-900">Hora de Saída</h3>
              <p className="text-sm text-ink-500 mt-1">Descubra quando sair</p>
            </Link>
            <Link href="/conversor-de-horas" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
              <h3 className="font-semibold text-ink-900">Conversor de Horas</h3>
              <p className="text-sm text-ink-500 mt-1">Converta formatos de tempo</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
