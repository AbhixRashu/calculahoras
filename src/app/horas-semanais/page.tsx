import type { Metadata } from 'next';
import { WeeklyCalculator } from '@/components/calculator/WeeklyCalculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { Calendar, Clock, AlertTriangle, Scale, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calculadora de Horas Semanais | Total da Jornada',
  description:
    'Some as horas trabalhadas de segunda a domingo, calcule a jornada de 44h da CLT e apure horas extras semanais. Grátis, rápida e precisa.',
  keywords: [
    'calculadora de horas semanais',
    'calcular horas semanais',
    'somar horas da semana',
    'jornada 44 horas semanais',
    'calcular horas trabalhadas na semana',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/horas-semanais',
  },
  openGraph: {
    title: 'Calculadora de Horas Semanais | CalculaHoras',
    description:
      'Some as horas trabalhadas nos 7 dias da semana e confira se sua jornada atinge o limite de 44h da CLT.',
    url: 'https://calculahoras.online/horas-semanais',
    type: 'website',
  },
};

const FAQS_HORAS_SEMANAIS: FAQItemData[] = [
  {
    q: 'Como calcular as horas trabalhadas na semana?',
    a: 'Para calcular a jornada semanal, apure os minutos trabalhados em cada dia (descontando o intervalo de cada expediente), some o total de minutos da semana e divida por 60 para obter o total em horas e minutos.',
    example: '5 dias cumprindo 8h48min: 528 minutos por dia × 5 dias = 2.640 minutos ÷ 60 = exatamente 44 horas semanais.',
  },
  {
    q: 'Qual é a jornada semanal máxima permitida pela CLT?',
    a: 'O Artigo 7º, XIII da Constituição Federal e o Artigo 58 da CLT estipulam a duração normal de trabalho não superior a 8 horas diárias e 44 horas semanais para a generalidade dos trabalhadores urbanos e rurais.',
  },
  {
    q: 'Como funciona a jornada de 44h sem trabalhar aos sábados?',
    a: 'Para não trabalhar aos sábados, a empresa e o empregado firmam acordo de compensação de jornada: as 4 horas do sábado são distribuídas de segunda a sexta, trabalhando-se 8 horas e 48 minutos (8,8 horas) por dia.',
  },
  {
    q: 'Quando as horas extras da semana começam a contar?',
    a: 'Existem dois critérios: o diário (quando o empregado passa do limite do dia contratado) e o semanal (quando a soma de todos os dias ultrapassa 44 horas semanais). O critério mais benéfico ao trabalhador deve ser adotado conforme o acordo coletivo.',
  },
  {
    q: 'Qual a diferença entre a jornada de 44h e a de 40h semanais?',
    a: 'A jornada de 44h é o teto máximo constitucional. A jornada de 40h é muito comum em escritórios e órgãos públicos, cumprida em 5 dias de 8 horas de segunda a sexta, utilizando o divisor 200 para cálculo de salário-hora.',
  },
  {
    q: 'O que acontece se eu faltar um dia na semana?',
    a: 'A falta não justificada acarreta o desconto do dia não trabalhado e também a perda da remuneração do DSR (Descanso Semanal Remunerado) daquela semana, conforme a Lei nº 605/1949.',
  },
  {
    q: 'Posso compensar as horas de um dia no outro dia da mesma semana?',
    a: 'Sim, desde que haja acordo de compensação de jornada ou regime de banco de horas devidamente pactuado individualmente ou por convenção coletiva.',
  },
  {
    q: 'A calculadora semanal permite intervalos diferentes em cada dia?',
    a: 'Sim. Em nossa ferramenta semanal você pode preencher os horários específicos e pausas de almoço independentes para cada um dos 7 dias.',
  },
];

export default function HorasSemanaisPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Calculadora de Horas Semanais', item: 'https://calculahoras.online/horas-semanais' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Calculadora de Horas Semanais',
          url: 'https://calculahoras.online/horas-semanais',
          description:
            'Calcule a soma de horas trabalhadas na semana de segunda a domingo com suporte a horas extras e regras da CLT.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Horas Semanais' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5 text-brand-600" />
              Jornada Semanal • 44h CLT • Banco de Horas
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Calculadora de Horas Semanais
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Some as horas trabalhadas em cada dia da semana de segunda a domingo. Compare o total com a jornada padrão de <strong>44 horas da CLT</strong> e apure horas extras semanais.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <WeeklyCalculator />
          </div>
        </div>
      </section>

      {/* Guia Didático e Exemplos Práticos */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Como Funciona a Jornada Semanal no Brasil
            </h2>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              Pela Constituição Federal e pela CLT, o trabalhador sob regime convencional não pode trabalhar mais de 44 horas normais por semana. O excesso deve ser compensado ou remunerado com adicional de horas extras.
            </p>
          </div>

          {/* 3 Exemplos Reais Detalhados */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
              Exemplos Comuns de Escalas Semanais
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                    Escala 1
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Segunda a Sexta (8h48/dia)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Seg a Sex: 8h48min por dia</li>
                    <li>• Sábado: Compensado (folga)</li>
                    <li>• Domingo: DSR remunerado</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      5 dias × 8,8h = 44 horas exatas.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-brand-800">
                  Total: 44h 00min (Sem extras)
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                    Escala 2
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Comercial com Sábado (8h + 4h)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Seg a Sex: 8h/dia (40h)</li>
                    <li>• Sábado: 4h pela manhã</li>
                    <li>• Domingo: DSR remunerado</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      40h + 4h = 44 horas semanais.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-teal-800">
                  Total: 44h 00min (Sem extras)
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Escala 3
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Semana com Horas Extras
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Seg a Sex: 9h30min/dia</li>
                    <li>• Total acumulado: 47h30min</li>
                    <li>• Jornada limite: 44h00min</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      47h30min − 44h00min = 3h30min extras.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-amber-800">
                  Extras: 3h 30min a 50%
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-surface-100 border border-surface-200 text-xs text-ink-600 space-y-2">
            <h4 className="font-bold text-ink-900 text-sm flex items-center gap-2">
              <Scale className="w-4 h-4 text-brand-600" />
              Legislação e Fontes Oficiais
            </h4>
            <p>
              Artigo 7º, inciso XIII da Constituição Federal de 1988 e Artigo 58 do Decreto-Lei nº 5.452/1943 (CLT).
            </p>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre Horas Semanais"
        subtitle="Perguntas frequentes sobre escala de trabalho e limite de 44h CLT:"
        faqs={FAQS_HORAS_SEMANAIS}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/horas-semanais"
        title="Outras Calculadoras de Ponto e Folha"
        subtitle="Ferramentas para complementar seu controle diário e mensal:"
      />
    </>
  );
}
