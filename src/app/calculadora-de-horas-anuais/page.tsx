import type { Metadata } from 'next';
import { WorkHoursSuite } from '@/components/calculator/WorkHoursSuite';
import { StructuredData } from '@/components/seo/StructuredData';
import { FAQSection } from '@/components/sections/FAQSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Horas Anuais de Trabalho (CLT) | CalculaHoras',
  description:
    'Calcule sua jornada de trabalho anual estimada. Saiba quantas horas você trabalha no ano descontando 30 dias de férias da CLT, feriados e folgas semanais.',
  keywords: [
    'calculadora de horas anuais',
    'quantas horas tem um ano de trabalho',
    'horas de trabalho por ano clt',
    'jornada anual 44 horas',
    'calculo anual horas trabalhadas',
  ],
  alternates: {
    canonical: '/calculadora-de-horas-anuais',
  },
  openGraph: {
    title: 'Calculadora de Horas Anuais | CalculaHoras',
    description:
      'Calcule sua jornada de trabalho anual a partir das semanas efetivamente trabalhadas e da sua carga horária semanal.',
    url: 'https://calculahoras.online/calculadora-de-horas-anuais',
  },
};

export default function CalculadoraHorasAnuaisPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Horas Anuais', item: 'https://calculahoras.online/calculadora-de-horas-anuais' },
          ],
        }}
      />

      <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-4">
              <span>📅 Cômputo Anual de Trabalho</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              Calculadora de Horas Anuais de Trabalho
            </h1>
            <p className="text-ink-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Calcule quantas horas você trabalha em um ano completo, considerando sua carga horária semanal
              e descontando os 30 dias de férias garantidos pela CLT e feriados nacionais.
            </p>
          </div>

          <WorkHoursSuite defaultTab="anual" showTabNav={false} />

          {/* Guia Didático */}
          <div className="max-w-3xl mx-auto mt-16 space-y-8 text-ink-700 leading-relaxed">
            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                Como é feito o cálculo de horas de trabalho no ano?
              </h2>
              <p>
                Um ano possui aproximadamente 52 semanas. Ao descontar o período aquisitivo de <strong>30 dias corridos de férias (aproximadamente 4 semanas e meia)</strong> e os feriados nacionais que caem em dias úteis, um trabalhador brasileiro cumpre em média <strong>47 a 48 semanas efetivas de trabalho</strong> no ano.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <h3 className="font-bold text-ink-900 text-sm">Carga de 44h semanais (CLT padrão)</h3>
                  <p className="text-xs text-ink-600 mt-1">
                    47 semanas x 44 horas = <strong>2.068 horas anuais</strong> de efetivo trabalho.
                  </p>
                </div>
                <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <h3 className="font-bold text-ink-900 text-sm">Carga de 40h semanais (Seg a Sex)</h3>
                  <p className="text-xs text-ink-600 mt-1">
                    47 semanas x 40 horas = <strong>1.880 horas anuais</strong> de efetivo trabalho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas Relacionadas */}
      <section className="py-12 bg-surface-50 border-t border-surface-200/80">
        <div className="container-app max-w-3xl">
          <h2 className="text-2xl font-bold text-ink-900 mb-6">Outros cálculos de jornada</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/horas-trabalhadas"
              className="p-4 rounded-xl bg-white border border-surface-200 hover:border-brand-300 transition-all text-center"
            >
              <h3 className="font-bold text-ink-900 text-sm">Horas Diárias</h3>
              <p className="text-xs text-ink-500 mt-1">Cálculo de entrada e saída</p>
            </Link>
            <Link
              href="/horas-semanais"
              className="p-4 rounded-xl bg-white border border-surface-200 hover:border-brand-300 transition-all text-center"
            >
              <h3 className="font-bold text-ink-900 text-sm">Horas Semanais</h3>
              <p className="text-xs text-ink-500 mt-1">Total de 44h ou 40h</p>
            </Link>
            <Link
              href="/horas-mensais"
              className="p-4 rounded-xl bg-white border border-surface-200 hover:border-brand-300 transition-all text-center"
            >
              <h3 className="font-bold text-ink-900 text-sm">Horas Mensais</h3>
              <p className="text-xs text-ink-500 mt-1">Divisor 220 da CLT</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
