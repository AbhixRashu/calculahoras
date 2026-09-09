import type { Metadata } from 'next';
import { WorkHoursSuite } from '@/components/calculator/WorkHoursSuite';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { Calendar, Clock, Scale, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calculadora de Horas Anuais de Trabalho (CLT) | CalculaHoras',
  description:
    'Calcule sua jornada anual de trabalho descontando 30 dias de férias da CLT, folgas e feriados nacionais. Rápido, gratuito e preciso.',
  keywords: [
    'calculadora de horas anuais',
    'quantas horas tem um ano de trabalho',
    'horas de trabalho por ano clt',
    'jornada anual 44 horas',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/calculadora-de-horas-anuais',
  },
  openGraph: {
    title: 'Calculadora de Horas Anuais | CalculaHoras',
    description:
      'Calcule sua jornada de trabalho anual a partir das semanas efetivamente trabalhadas e da sua carga horária semanal.',
    url: 'https://calculahoras.online/calculadora-de-horas-anuais',
    type: 'website',
  },
};

const FAQS_ANUAIS: FAQItemData[] = [
  {
    q: 'Quantas horas de trabalho tem um ano no Brasil?',
    a: 'Em média, um ano possui cerca de 2.068 horas de trabalho efetivo para quem cumpre 44 horas semanais, e cerca de 1.880 horas para quem cumpre 40 horas semanais, já descontados os 30 dias corridos de férias da CLT e feriados nacionais.',
  },
  {
    q: 'Quantas semanas úteis tem um ano após o desconto de férias?',
    a: 'O ano tem 52 semanas no total. Descontando 30 dias de férias (aproximadamente 4,3 semanas) e a média de feriados em dias úteis, restam entre 46 e 47 semanas efetivamente trabalhadas.',
  },
  {
    q: 'Como calcular o total de horas anuais para quem cumpre 44h semanais?',
    a: 'Multiplique as semanas efetivamente trabalhadas por 44 horas: 47 semanas × 44 horas = 2.068 horas anuais de trabalho.',
  },
  {
    q: 'Como calcular o total de horas anuais para quem cumpre 40h semanais?',
    a: 'Multiplique 47 semanas por 40 horas: 47 semanas × 40 horas = 1.880 horas anuais de trabalho efetivo.',
  },
  {
    q: 'Férias de 30 dias contam como horas trabalhadas no ano?',
    a: 'As férias são período de descanso remunerado. O trabalhador recebe seu salário normal acrescido do terço constitucional (1/3), porém não há prestação de horas de trabalho durante o período.',
  },
  {
    q: 'O que é o cômputo anual do banco de horas?',
    a: 'Pelo Artigo 59, § 2º da CLT, quando pactuado por convenção coletiva, o banco de horas pode ter compensação anual, devendo as horas extras acumuladas ser compensadas com folgas ou quitadas com adicional ao término de 12 meses.',
  },
];

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
      <StructuredData
        type="webapp"
        data={{
          name: 'Calculadora de Horas Anuais de Trabalho',
          url: 'https://calculahoras.online/calculadora-de-horas-anuais',
          description:
            'Calcule sua jornada anual de trabalho descontando férias e feriados conforme a CLT.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Horas Anuais' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5 text-brand-600" />
              Cômputo Anual • Férias CLT • 52 Semanas
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Calculadora de Horas Anuais
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Descubra quantas horas você trabalha em um ano completo, considerando sua jornada semanal e descontando os <strong>30 dias de férias da CLT</strong> e feriados.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <WorkHoursSuite defaultTab="anual" showTabNav={false} />
          </div>
        </div>
      </section>

      {/* Guia Didático */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
            Como Funciona o Cálculo de Horas Anuais
          </h2>
          <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
            O ano civil possui 52 semanas. Ao descontar o período aquisitivo de 30 dias de férias e feriados em dias úteis, obtém-se entre 46 e 47 semanas úteis efetivamente trabalhadas no Brasil:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200">
              <h3 className="font-bold text-ink-900 text-sm mb-1">Jornada 44h Semanais (CLT Padrão)</h3>
              <p className="text-xs text-ink-600 font-mono">
                47 semanas × 44 horas = <strong>2.068 horas anuais</strong> de trabalho efetivo.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200">
              <h3 className="font-bold text-ink-900 text-sm mb-1">Jornada 40h Semanais (Seg a Sex)</h3>
              <p className="text-xs text-ink-600 font-mono">
                47 semanas × 40 horas = <strong>1.880 horas anuais</strong> de trabalho efetivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre Horas Anuais"
        subtitle="Perguntas frequentes sobre o cômputo anual da jornada de trabalho:"
        faqs={FAQS_ANUAIS}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/calculadora-de-horas-anuais"
        title="Calculadoras Relacionadas"
        subtitle="Ferramentas para calcular jornadas diárias, semanais e mensais:"
      />
    </>
  );
}
