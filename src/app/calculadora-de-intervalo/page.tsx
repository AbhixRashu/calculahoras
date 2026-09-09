import type { Metadata } from 'next';
import { IntervalCalculator } from '@/components/calculator/IntervalCalculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { Coffee, Clock, Scale, AlertTriangle, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calculadora de Intervalo de Trabalho | Art. 71 CLT',
  description:
    'Calcule a duração exata do seu intervalo de almoço e descanso em horas e minutos. Verifique a conformidade com as regras do Artigo 71 da CLT.',
  keywords: [
    'calculadora de intervalo',
    'calculadora de intervalo de trabalho',
    'intervalo intrajornada clt',
    'art 71 clt intervalo almoco',
    'intervalo de 15 minutos clt',
    'reducao intervalo 30 minutos',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/calculadora-de-intervalo',
  },
  openGraph: {
    title: 'Calculadora de Intervalo de Trabalho | CalculaHoras',
    description:
      'Calcule a duração do seu intervalo de refeição e descanso em horas e minutos com análise do Art. 71 da CLT.',
    url: 'https://calculahoras.online/calculadora-de-intervalo',
    type: 'website',
  },
};

const FAQS_INTERVALO: FAQItemData[] = [
  {
    q: 'O que diz o Artigo 71 da CLT sobre a duração do almoço?',
    a: 'A CLT estabelece regras conforme a duração da jornada diária: até 4h de trabalho não há intervalo obrigatório; de 4h a 6h diárias o intervalo obrigatório é de 15 minutos; acima de 6h diárias o intervalo mínimo é de 1 hora e no máximo de 2 horas.',
  },
  {
    q: 'O intervalo de almoço conta como tempo trabalhado?',
    a: 'Não. Pelo Artigo 71, § 2º da CLT, os intervalos de descanso e alimentação não são computados na duração do trabalho e não são remunerados pelo empregador.',
  },
  {
    q: 'O intervalo de 1 hora pode ser reduzido para 30 minutos?',
    a: 'Sim. Desde a Reforma Trabalhista (Artigo 611-A, III da CLT), o intervalo intrajornada pode ser reduzido para no mínimo 30 minutos mediante Acordo Coletivo de Trabalho (ACT) ou Convenção Coletiva (CCT).',
  },
  {
    q: 'O que acontece se a empresa não conceder o intervalo completo?',
    a: 'Conforme o Artigo 71, § 4º da CLT, a não concessão ou concessão parcial do intervalo mínimo implica o pagamento apenas do período suprimido, com acréscimo de 50% sobre o valor da hora normal, com natureza indenizatória.',
    example: 'Se o empregado tinha direito a 1 hora mas usufruiu apenas 40 minutos: a empresa deve pagar os 20 minutos não usufruídos com 50% de acréscimo.',
  },
  {
    q: 'Posso abrir mão do intervalo para sair 1 hora mais cedo?',
    a: 'Não. O intervalo é uma norma de ordem pública de saúde, higiene e segurança do trabalho. Nem mesmo com a concordância do empregado a empresa pode autorizar o cancelamento do almoço.',
  },
  {
    q: 'Existe tolerância de minutos no retorno do almoço?',
    a: 'Pelo Artigo 58, § 1º da CLT, a tolerância de até 5 minutos por marcação e máximo de 10 minutos diários aplica-se a todas as batidas do ponto, incluindo saída e retorno do intervalo.',
  },
  {
    q: 'Qual o intervalo mínimo entre duas jornadas de trabalho consecutivas?',
    a: 'O intervalo interjornada (Artigo 66 da CLT) determina que entre o término de um dia de trabalho e o início do próximo deve haver um período mínimo de 11 horas consecutivas de descanso.',
  },
  {
    q: 'A calculadora de intervalo aceita horários noturnos?',
    a: 'Sim. Se você sai para o almoço ou ceia às 23:30 e retorna às 00:30, a ferramenta calcula a duração exata de 1 hora sem erros de virada de dia.',
  },
];

export default function IntervaloPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Intervalo de Trabalho', item: 'https://calculahoras.online/calculadora-de-intervalo' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Calculadora de Intervalo de Trabalho CLT',
          url: 'https://calculahoras.online/calculadora-de-intervalo',
          description:
            'Calcule a duração exata do seu intervalo de almoço e descanso em horas e minutos conforme o Art. 71 da CLT.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Calculadora de Intervalo' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Coffee className="w-3.5 h-3.5 text-brand-600" />
              Artigo 71 da CLT • Intervalo Intrajornada
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Calculadora de Intervalo de Trabalho
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Informe os horários de saída e retorno do seu almoço ou descanso para descobrir a duração em <strong>horas e minutos</strong> e conferir se cumpre os requisitos do <strong>Artigo 71 da CLT</strong>.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <IntervalCalculator />
          </div>
        </div>
      </section>

      {/* Guia Didático e Exemplos Práticos */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Tabela de Intervalos Obrigatórios pela CLT
            </h2>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              A duração do intervalo intrajornada depende exclusivamente da carga horária que o trabalhador cumpre naquele dia:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
                <span className="text-xs font-bold uppercase text-ink-500 block mb-1">
                  Até 4 Horas Diárias
                </span>
                <div className="text-base font-bold text-ink-900">Sem Intervalo Obrigatório</div>
                <p className="text-xs text-ink-500 mt-2 leading-relaxed">
                  Para contratos de até 4h/dia, a legislação não exige pausa legal obrigatória.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
                <span className="text-xs font-bold uppercase text-teal-700 block mb-1">
                  De 4 a 6 Horas Diárias
                </span>
                <div className="text-base font-bold text-ink-900">Intervalo de 15 Minutos</div>
                <p className="text-xs text-ink-500 mt-2 leading-relaxed">
                  Pausa mínima obrigatória de 15 minutos (ex: atendentes, recepcionistas, estágio).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
                <span className="text-xs font-bold uppercase text-brand-700 block mb-1">
                  Acima de 6 Horas Diárias
                </span>
                <div className="text-base font-bold text-ink-900">Mínimo de 1h (Máx 2h)</div>
                <p className="text-xs text-ink-500 mt-2 leading-relaxed">
                  Obrigatório no mínimo 1 hora de almoço, podendo ser reduzido a 30 min por acordo coletivo.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-surface-100 border border-surface-200 text-xs text-ink-600 space-y-2">
            <h4 className="font-bold text-ink-900 text-sm flex items-center gap-2">
              <Scale className="w-4 h-4 text-brand-600" />
              Legislação e Fontes Oficiais
            </h4>
            <p>
              Artigo 71 e Artigo 611-A, inciso III do Decreto-Lei nº 5.452/1943 (CLT com redação da Lei 13.467/2017).
            </p>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre Intervalo de Trabalho"
        subtitle="Perguntas frequentes sobre intervalo intrajornada, almoço e descanso:"
        faqs={FAQS_INTERVALO}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/calculadora-de-intervalo"
        title="Calculadoras Relacionadas"
        subtitle="Ferramentas para calcular o restante do seu expediente e horas extras:"
      />
    </>
  );
}
