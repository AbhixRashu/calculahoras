import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { StructuredData } from '@/components/seo/StructuredData';
import { Calculator, ArrowRight, Table } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Converter Horas em Decimal: Tabela Completa (7h30 = 7,50h)',
  description:
    'Aprenda a fórmula matemática de conversão de horas e minutos em horas decimais. Tabela prática com 15, 30 e 45 minutos para folha de pagamento.',
  keywords: [
    'como calcular horas em decimal',
    'converter horas em decimal',
    '7h30 em decimal',
    'tabela de minutos para decimal',
  ],
  alternates: { canonical: 'https://calculahoras.online/guias/como-calcular-horas-em-decimal' },
  openGraph: {
    title: 'Como Converter Horas em Decimal | CalculaHoras',
    description: 'Aprenda a transformar minutos em decimal para multiplicar pelo salário-hora.',
    url: 'https://calculahoras.online/guias/como-calcular-horas-em-decimal',
    type: 'article',
  },
};

export default function GuiaHorasEmDecimal() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Guias', item: 'https://calculahoras.online/guias' },
            { '@type': 'ListItem', position: 3, name: 'Horas em Decimal', item: 'https://calculahoras.online/guias/como-calcular-horas-em-decimal' },
          ],
        }}
      />
      <StructuredData
        type="article"
        data={{
          headline: 'Como Converter Horas em Decimal: Tabela Completa (7h30 = 7,50h)',
          description: 'Aprenda a fórmula matemática de conversão de horas e minutos em horas decimais para cálculo de folha de pagamento.',
          url: 'https://calculahoras.online/guias/como-calcular-horas-em-decimal',
        }}
      />

      <article className="py-10 md:py-16 bg-white">
        <div className="container-app max-w-3xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Guias', href: '/guias' },
              { label: 'Horas em Decimal' },
            ]}
          />

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Matemática e Contabilidade
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mt-3 mb-4">
              Como Converter Horas em Decimal
            </h1>
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed">
              Entenda por que 30 minutos não equivalem a 0,30 e veja a tabela prática para converter qualquer tempo para a folha de pagamento.
            </p>
          </header>

          <div className="prose prose-ink max-w-none text-ink-700 leading-relaxed space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                A Razão da Conversão: Base 60 vs Base 100
              </h2>
              <p>
                Os relógios medem o tempo no sistema sexagesimal (1 hora = 60 minutos). Porém, o dinheiro é medido no sistema decimal (1 real = 100 centavos). Para calcular salários, é obrigatório converter os minutos para frações decimais.
              </p>
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-sm text-brand-950 font-bold">
                Horas Decimais = Horas + (Minutos ÷ 60)
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                Tabela de Equivalência Prática
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm bg-surface-50 rounded-2xl border border-surface-200 overflow-hidden font-mono">
                  <thead className="bg-surface-200/70 text-ink-900 font-semibold">
                    <tr>
                      <th className="p-3">Minutos no Relógio</th>
                      <th className="p-3">Conta (÷ 60)</th>
                      <th className="p-3">Valor Decimal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-200">
                    <tr>
                      <td className="p-3">15 minutos</td>
                      <td className="p-3">15 ÷ 60</td>
                      <td className="p-3 font-bold text-brand-700">0,25 h</td>
                    </tr>
                    <tr>
                      <td className="p-3">30 minutos</td>
                      <td className="p-3">30 ÷ 60</td>
                      <td className="p-3 font-bold text-brand-700">0,50 h</td>
                    </tr>
                    <tr>
                      <td className="p-3">45 minutos</td>
                      <td className="p-3">45 ÷ 60</td>
                      <td className="p-3 font-bold text-brand-700">0,75 h</td>
                    </tr>
                    <tr>
                      <td className="p-3">48 minutos (CLT)</td>
                      <td className="p-3">48 ÷ 60</td>
                      <td className="p-3 font-bold text-brand-700">0,80 h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="p-6 rounded-3xl bg-brand-50 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-ink-900 text-base mb-1">Conversor Automático</h3>
                <p className="text-xs text-ink-600">Converta qualquer horário para decimal em tempo real.</p>
              </div>
              <Link href="/horas-decimais" className="btn-primary text-xs shrink-0 py-2.5 px-4 font-bold">
                Calculadora de Horas Decimais &rarr;
              </Link>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink-900">Guias Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/guias/como-calcular-horas-trabalhadas" className="p-4 rounded-2xl border border-surface-200 hover:border-brand-300 transition-colors">
                  <h3 className="font-semibold text-sm text-ink-900">Horas Trabalhadas</h3>
                  <p className="text-xs text-ink-500 mt-1">Como calcular a jornada do dia a dia.</p>
                </Link>
                <Link href="/guias/como-calcular-horas-extras" className="p-4 rounded-2xl border border-surface-200 hover:border-brand-300 transition-colors">
                  <h3 className="font-semibold text-sm text-ink-900">Horas Extras</h3>
                  <p className="text-xs text-ink-500 mt-1">Cálculo de adicionais em folha.</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
