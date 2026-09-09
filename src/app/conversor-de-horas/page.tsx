import type { Metadata } from 'next';
import { ConverterCalculator } from '@/components/calculator/ConverterCalculator';
import { FAQSection } from '@/components/sections/FAQSection';
import { StructuredData } from '@/components/seo/StructuredData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conversor de Horas Online Grátis',
  description:
    'Converta entre horas e minutos de forma rápida e precisa. Ferramenta gratuita para conversão de formatos de tempo.',
  alternates: {
    canonical: '/conversor-de-horas',
  },
  openGraph: {
    title: 'Conversor de Horas | CalculaHoras',
    description:
      'Converta entre horas e minutos de forma rápida e precisa.',
    url: 'https://calculahoras.online/conversor-de-horas',
  },
};

export default function ConversorDeHorasPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Conversor de Horas', item: 'https://calculahoras.online/conversor-de-horas' },
          ],
        }}
      />

      <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container-app">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">
              Conversor de Horas
            </h1>
            <p className="text-ink-500 leading-relaxed">
              Converta entre horas e minutos de forma rápida e precisa. Ferramenta gratuita para conversão de formatos de tempo.
            </p>
          </div>

          <ConverterCalculator />

          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-ink-900 mb-4">
              Como converter horas
            </h2>
            <div className="prose prose-ink max-w-none text-ink-600 space-y-4">
              <p>
                Para converter horas em minutos, multiplique o número de horas por 60.
              </p>
              <p>
                <strong>Exemplo:</strong> 2,5 horas x 60 = 150 minutos.
              </p>
              <p>
                Para converter minutos em horas, divida o número de minutos por 60.
              </p>
              <p>
                <strong>Exemplo:</strong> 90 minutos / 60 = 1,5 horas.
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
