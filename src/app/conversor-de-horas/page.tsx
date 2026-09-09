import type { Metadata } from 'next';
import { ConverterCalculator } from '@/components/calculator/ConverterCalculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { Clock, Calculator, ArrowRightLeft, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conversor de Horas | Minutos, Segundos e Decimal',
  description:
    'Converta entre horas, minutos, segundos e horas decimais instantaneamente. Ferramenta online gratuita e precisa para conversão de unidades de tempo.',
  keywords: [
    'conversor de horas',
    'converter horas em minutos',
    'converter minutos em horas',
    'horas para segundos',
    'conversão de tempo online',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/conversor-de-horas',
  },
  openGraph: {
    title: 'Conversor de Horas | CalculaHoras',
    description:
      'Transforme horas em minutos, minutos em horas ou converta frações de tempo para decimal com precisão.',
    url: 'https://calculahoras.online/conversor-de-horas',
    type: 'website',
  },
};

const FAQS_CONVERSOR: FAQItemData[] = [
  {
    q: 'Como converter horas em minutos?',
    a: 'Como cada hora possui exatamente 60 minutos, multiplique o valor de horas por 60.',
    example: '3,5 horas × 60 = 210 minutos.',
  },
  {
    q: 'Como converter minutos em horas e minutos?',
    a: 'Divida o total de minutos por 60. A parte inteira da divisão são as horas. O resto da divisão são os minutos restantes.',
    example: '195 minutos ÷ 60 = 3 (com resto 15). Resultado: 3h 15min (ou 3,25 horas em decimal).',
  },
  {
    q: 'Quantos segundos tem 1 hora?',
    a: '1 hora tem 60 minutos e cada minuto tem 60 segundos. Logo, 1 hora contém 60 × 60 = 3.600 segundos.',
  },
  {
    q: 'Como converter horas em dias?',
    a: 'Como 1 dia possui 24 horas, divida o número de horas por 24.',
    example: '72 horas ÷ 24 = exatamente 3 dias.',
  },
  {
    q: 'Qual a diferença entre horas e minutos (sexagesimal) e decimal?',
    a: 'O formato sexagesimal utiliza a base 60 (onde 60 minutos completam 1 hora). O formato decimal utiliza a base 100 (onde 0,50 representa meia hora e 0,25 representa um quarto de hora).',
  },
  {
    q: 'Como converter 90 minutos em horas decimais?',
    a: '90 minutos dividido por 60 é igual a 1,50 horas decimais (1 hora e meia).',
  },
  {
    q: 'Por que planilhas do Excel zeram as horas após 24h?',
    a: 'Porque o formato padrão de hora (hh:mm) no Excel reinicia após 24 horas. Para somar mais de 24 horas sem zerar, use a formatação personalizada [h]:mm no Excel.',
  },
  {
    q: 'A ferramenta aceita números fracionados?',
    a: 'Sim. Você pode digitar valores decimais usando vírgula ou ponto (ex: 2,75 ou 2.75).',
  },
];

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
      <StructuredData
        type="webapp"
        data={{
          name: 'Conversor de Horas e Minutos Online',
          url: 'https://calculahoras.online/conversor-de-horas',
          description:
            'Converta entre horas, minutos, segundos e frações decimais instantaneamente.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Conversor de Horas' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <ArrowRightLeft className="w-3.5 h-3.5 text-brand-600" />
              Horas • Minutos • Segundos • Decimal
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Conversor de Horas
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Converta instantaneamente entre horas, minutos, segundos e formato centesimal. Ferramenta rápida e gratuita para estudos, cálculos trabalhistas e planilhas.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <ConverterCalculator />
          </div>
        </div>
      </section>

      {/* Guia Didático e Exemplos Práticos */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Fórmulas de Conversão de Tempo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-xs sm:text-sm">
                <strong className="text-brand-900 block mb-1">Horas para Minutos:</strong>
                Minutos = Horas × 60
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-xs sm:text-sm">
                <strong className="text-brand-900 block mb-1">Minutos para Horas:</strong>
                Horas = Minutos ÷ 60
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-xs sm:text-sm">
                <strong className="text-brand-900 block mb-1">Horas para Segundos:</strong>
                Segundos = Horas × 3.600
              </div>
            </div>
          </div>

          {/* 3 Exemplos Reais Detalhados */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
              Exemplos Práticos de Conversão
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200">
                <h4 className="font-bold text-ink-900 text-sm mb-2">2,5 Horas em Minutos</h4>
                <p className="text-xs text-ink-600 font-mono leading-relaxed">
                  2,5 × 60 = <strong>150 minutos</strong> (2 horas e 30 minutos).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200">
                <h4 className="font-bold text-ink-900 text-sm mb-2">135 Minutos em Horas</h4>
                <p className="text-xs text-ink-600 font-mono leading-relaxed">
                  135 ÷ 60 = <strong>2,25 horas</strong> (2 horas e 15 minutos).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200">
                <h4 className="font-bold text-ink-900 text-sm mb-2">4 Horas em Segundos</h4>
                <p className="text-xs text-ink-600 font-mono leading-relaxed">
                  4 × 3.600 = <strong>14.400 segundos</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre Conversão de Horas"
        subtitle="Perguntas frequentes sobre medidas de tempo e frações de hora:"
        faqs={FAQS_CONVERSOR}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/conversor-de-horas"
        title="Calculadoras Relacionadas"
        subtitle="Ferramentas para calcular jornadas de trabalho e folha de ponto:"
      />
    </>
  );
}
