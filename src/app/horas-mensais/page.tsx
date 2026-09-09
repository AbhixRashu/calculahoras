import type { Metadata } from 'next';
import { MonthlyCalculator } from '@/components/calculator/MonthlyCalculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { Calendar, Clock, Scale, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calculadora de Horas Mensais | Calcule sua Jornada',
  description:
    'Calcule o total de horas trabalhadas no mês com base em dias úteis, média diária e divisores 220 e 200 da CLT. Grátis, rápida e precisa.',
  keywords: [
    'calculadora de horas mensais',
    'calcular horas mensais',
    'horas trabalhadas no mes',
    'divisor 220 clt',
    'divisor 200 clt',
    'calculo jornada mensal',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/horas-mensais',
  },
  openGraph: {
    title: 'Calculadora de Horas Mensais | CalculaHoras',
    description:
      'Calcule as horas trabalhadas no mês, compare previsto versus realizado e entenda os divisores contratuais da CLT.',
    url: 'https://calculahoras.online/horas-mensais',
    type: 'website',
  },
};

const FAQS_HORAS_MENSAIS: FAQItemData[] = [
  {
    q: 'Como calcular as horas trabalhadas no mês?',
    a: 'Multiplique os dias úteis efetivamente trabalhados no mês pela carga horária diária contratual. Se houver horas extras ou atrasos, some ou subtraia da quantidade base prevista.',
    example: '21 dias úteis no mês × 8 horas por dia = 168 horas normais de trabalho efetivo.',
  },
  {
    q: 'Por que o divisor mensal da CLT é 220 se o mês tem cerca de 176 horas trabalhadas?',
    a: 'O divisor 220 (para quem cumpre 44h semanais) inclui não apenas as horas trabalhadas em dias úteis, mas também a remuneração de todos os domingos e feriados do mês (DSR remunerado), considerando o mês comercial padrão de 30 dias.',
  },
  {
    q: 'Quando devo usar o divisor 200 em vez de 220?',
    a: 'O divisor 200 deve ser utilizado para empregados que cumprem jornada semanal de 40 horas (geralmente 8h de segunda a sexta, sem trabalhar aos sábados). Para jornada de 30 horas semanais, usa-se o divisor 150.',
  },
  {
    q: 'Feriados contam como horas trabalhadas no mês?',
    a: 'Para quem é mensalista, os feriados civis e religiosos são dias de descanso remunerado (DSR). Não há necessidade de trabalhar nem de compensar, mantendo-se o salário integral.',
  },
  {
    q: 'Como calcular horas extras acumuladas no mês?',
    a: 'Subtraia o total de horas contratuais previstas no mês do total de horas efetivamente trabalhadas no espelho de ponto. Todo o tempo excedente deve ser pago com adicional de 50% ou 100%.',
    example: 'Previsto no mês: 176h. Realizado: 192h. Total de horas extras acumuladas: 192 − 176 = 16 horas extras no mês.',
  },
  {
    q: 'O que é considerado falta injustificada no mês?',
    a: 'É a ausência sem atestado médico válido ou sem respaldo no Artigo 473 da CLT. Cada falta gera o desconto do dia de trabalho e também do descanso semanal daquela semana.',
  },
  {
    q: 'A calculadora mensal permite considerar feriados e férias?',
    a: 'Sim. Em nossa ferramenta você pode personalizar a quantidade exata de dias úteis do mês em curso para obter a meta de horas precisa.',
  },
  {
    q: 'Como o cálculo mensal influencia o valor da rescisão?',
    a: 'O saldo de salário na rescisão contratual é obtido dividindo-se o salário mensal por 30 e multiplicando pelos dias trabalhados no mês do desligamento.',
  },
];

export default function HorasMensaisPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Calculadora de Horas Mensais', item: 'https://calculahoras.online/horas-mensais' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Calculadora de Horas Mensais',
          url: 'https://calculahoras.online/horas-mensais',
          description:
            'Calcule o total de horas trabalhadas no mês, previsto versus realizado e divisores 220 e 200 da CLT.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Horas Mensais' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5 text-brand-600" />
              Divisores 220 e 200 • Controle Mensal de Folha
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Calculadora de Horas Mensais
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Calcule a quantidade total de horas trabalhadas no mês com base nos dias úteis e na jornada diária contratada. Compare o tempo <strong>previsto versus realizado</strong> e confira suas horas extras.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <MonthlyCalculator />
          </div>
        </div>
      </section>

      {/* Guia Didático e Exemplos Práticos */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Como Calcular a Carga Horária Mensal pela CLT
            </h2>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              Para calcular as horas mensais de trabalho, utiliza-se a quantidade de dias úteis do mês multiplicada pela jornada diária contratual:
            </p>

            <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-sm text-brand-950">
              <strong>Fórmula Mensal Efetiva:</strong> Total Mensal = Dias Úteis Trabalhados × Horas Diárias de Trabalho
            </div>
          </div>

          {/* 3 Exemplos Reais Detalhados */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
              Exemplos Práticos de Apuração Mensal
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                    Exemplo 1
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Mês de 22 Dias Úteis (8h/dia)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Dias úteis: 22 dias</li>
                    <li>• Carga diária: 8 horas</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      22 × 8h = 176 horas de trabalho presencial efetivo.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-brand-800">
                  Total Previsto: 176h 00min
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                    Exemplo 2
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Escala 44h Compensada (8h48)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Dias úteis: 21 dias</li>
                    <li>• Carga diária: 8,8 horas</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      21 × 8,8h = 184,8 horas (184h 48min).
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-teal-800">
                  Total Previsto: 184h 48min
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Exemplo 3
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Mês com Horas Extras Acumuladas
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Previsto no mês: 176 horas</li>
                    <li>• Realizado no espelho: 190 horas</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      190h − 176h = 14 horas extras a receber.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-amber-800">
                  Extras no Mês: 14h a 50%
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
              Artigo 64 do Decreto-Lei nº 5.452/1943 (CLT) e Súmula 431 do Tribunal Superior do Trabalho (TST) sobre aplicação dos divisores mensais.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre Horas Mensais"
        subtitle="Perguntas frequentes sobre apuração mensal de ponto e divisores:"
        faqs={FAQS_HORAS_MENSAIS}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/horas-mensais"
        title="Calculadoras Relacionadas"
        subtitle="Outras ferramentas para o controle completo de jornadas de trabalho:"
      />
    </>
  );
}
