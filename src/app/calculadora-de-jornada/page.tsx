import type { Metadata } from 'next';
import { JornadaCalculator } from '@/components/calculator/JornadaCalculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { Clock, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calculadora de Jornada de Trabalho | Progresso e Horas Restantes',
  description:
    'Analise sua jornada de trabalho diária em tempo real: horas previstas, trabalhadas, horas extras e tempo restante com barra de progresso visual.',
  keywords: [
    'calculadora de jornada',
    'analise de jornada de trabalho',
    'quanto falta para acabar o expediente',
    'calcular progresso da jornada',
    'horas restantes trabalho',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/calculadora-de-jornada',
  },
  openGraph: {
    title: 'Calculadora de Jornada de Trabalho | CalculaHoras',
    description:
      'Compare horas trabalhadas versus previstas com barra de progresso visual e acompanhamento em tempo real.',
    url: 'https://calculahoras.online/calculadora-de-jornada',
    type: 'website',
  },
};

const FAQS_JORNADA: FAQItemData[] = [
  {
    q: 'O que é a análise de jornada de trabalho?',
    a: 'A análise de jornada compara o tempo que você já cumpriu no dia com a carga horária contratada (normalmente 8h), indicando quanto tempo já foi trabalhado, quanto falta para sair e se você já entrou em horas extras.',
  },
  {
    q: 'Como funciona a barra de progresso da jornada?',
    a: 'A barra calcula a porcentagem de cumprimento da sua meta do dia. Ao atingir 100%, você cumpriu sua jornada normal. Qualquer tempo acima de 100% passa a ser exibido como horas extras.',
  },
  {
    q: 'O tempo de almoço faz parte do progresso da jornada?',
    a: 'Não. Pelo Artigo 71 da CLT, o almoço é um período de pausa não remunerado. Ele não conta para o cumprimento da meta de horas do dia.',
  },
  {
    q: 'Como calcular quanto tempo falta para eu bater o ponto?',
    a: 'Subtraia as horas já trabalhadas da sua carga horária diária contratada. A ferramenta faz essa conta automaticamente e indica exatamente os minutos restantes.',
  },
];

export default function JornadaPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Análise de Jornada', item: 'https://calculahoras.online/calculadora-de-jornada' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Calculadora de Jornada de Trabalho Online',
          url: 'https://calculahoras.online/calculadora-de-jornada',
          description:
            'Acompanhe o cumprimento da sua jornada diária com barra de progresso e previsão de término.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Análise de Jornada' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5 text-brand-600" />
              Progresso Visual • Meta Diária
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Calculadora de Jornada de Trabalho
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Compare as horas trabalhadas com a meta diária prevista. Acompanhe a barra de progresso e descubra instantaneamente se faltam minutos ou se já há horas extras apuradas.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <JornadaCalculator />
          </div>
        </div>
      </section>

      {/* Guia Didático */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
            Indicadores de Acompanhamento de Ponto
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
              <h3 className="font-bold text-ink-900 text-xs uppercase text-brand-700">Trabalhado</h3>
              <p className="text-xs text-ink-600 mt-1">Tempo efetivo com desconto de almoço.</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
              <h3 className="font-bold text-ink-900 text-xs uppercase text-ink-700">Previsto</h3>
              <p className="text-xs text-ink-600 mt-1">Carga diária contratada (ex: 8h).</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
              <h3 className="font-bold text-ink-900 text-xs uppercase text-amber-700">Restante</h3>
              <p className="text-xs text-ink-600 mt-1">Tempo que falta para atingir a meta.</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
              <h3 className="font-bold text-ink-900 text-xs uppercase text-emerald-700">Horas Extras</h3>
              <p className="text-xs text-ink-600 mt-1">Tempo excedente à meta diária.</p>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre Análise de Jornada"
        subtitle="Perguntas frequentes sobre acompanhamento de ponto:"
        faqs={FAQS_JORNADA}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/calculadora-de-jornada"
        title="Calculadoras Relacionadas"
        subtitle="Ferramentas para calcular sua saída e horas extras:"
      />
    </>
  );
}
