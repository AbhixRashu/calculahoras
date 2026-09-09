import type { Metadata } from 'next';
import { NightShiftCalculator } from '@/components/calculator/NightShiftCalculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { Moon, Clock, Scale, AlertTriangle, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calculadora de Turno Noturno | Adicional e Hora Reduzida CLT',
  description:
    'Calcule horas de turno noturno com a hora ficta reduzida (52min30s) e adicional noturno de 20% conforme o Art. 73 da CLT. Rápida, gratuita e precisa.',
  keywords: [
    'calculadora de turno noturno',
    'calcular adicional noturno',
    'hora noturna reduzida 52 minutos e 30 segundos',
    'art 73 clt adicional noturno',
    'calculo turno noturno que passa da meia noite',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/turno-noturno',
  },
  openGraph: {
    title: 'Calculadora de Turno Noturno CLT | CalculaHoras',
    description:
      'Calcule a hora ficta noturna de 52min30s e o adicional financeiro de 20% para jornadas das 22h às 05h.',
    url: 'https://calculahoras.online/turno-noturno',
    type: 'website',
  },
};

const FAQS_TURNO_NOTURNO: FAQItemData[] = [
  {
    q: 'Qual é o horário considerado noturno pela CLT?',
    a: 'Para trabalhadores urbanos (comércio, indústria e serviços), o trabalho noturno compreende o período entre 22:00 de um dia e 05:00 do dia seguinte (Art. 73 da CLT). No trabalho rural, é das 21:00 às 05:00 na lavoura e das 20:00 às 04:00 na pecuária.',
  },
  {
    q: 'O que é a hora noturna reduzida (hora ficta)?',
    a: 'Pelo Artigo 73, § 1º da CLT, a hora de trabalho noturno não tem 60 minutos, mas sim 52 minutos e 30 segundos (52,5 minutos). Isso significa que cada 7 horas corridas no relógio entre 22h e 05h equivalem a 8 horas trabalhadas para efeito de pagamento.',
    example: '7 horas de relógio ÷ (52,5 ÷ 60) = exatamente 8 horas noturnas computadas no contracheque.',
  },
  {
    q: 'Qual é o percentual do Adicional Noturno?',
    a: 'O adicional noturno legal mínimo para empregados urbanos é de 20% sobre o valor da hora diurna normal (Art. 73, caput). Para trabalhadores rurais, o adicional mínimo é de 25%. Algumas convenções coletivas estipulam 25%, 30% ou mais.',
  },
  {
    q: 'O que acontece quando o turno noturno continua após as 05:00 da manhã?',
    a: 'Conforme a Súmula 60, item II do Tribunal Superior do Trabalho (TST), se a jornada noturna foi cumprida integralmente e continuou após as 05:00, as horas trabalhadas em prorrogação após as 05:00 também devem ser pagas com o adicional noturno.',
    example: 'Entrando às 22:00 e saindo às 07:00: as horas entre 05:00 e 07:00 continuam recebendo o adicional de 20% como prorrogação de jornada noturna.',
  },
  {
    q: 'O adicional noturno entra no cálculo de horas extras?',
    a: 'Sim. Conforme a Orientação Jurisprudencial (OJ) 97 da SDI-1 do TST, o adicional noturno integra a base de cálculo da hora extra noturna. Primeiro calcula-se a hora com o adicional noturno e, sobre esse valor, aplica-se o adicional de hora extra (50% ou 100%).',
  },
  {
    q: 'O trabalhador noturno tem direito a intervalo de refeição?',
    a: 'Sim. As regras de intervalo intrajornada do Art. 71 da CLT valem igualmente para a noite: jornadas acima de 6 horas exigem no mínimo 1 hora de pausa para descanso e alimentação.',
  },
  {
    q: 'O adicional noturno gera reflexo no DSR e no 13º salário?',
    a: 'Sim. O adicional noturno pago com habitualidade reflete obrigatoriamente no Descanso Semanal Remunerado (Súmula 172 TST), no 13º salário, nas férias com 1/3 e no FGTS.',
  },
  {
    q: 'Menor de 18 anos pode trabalhar no turno noturno?',
    a: 'Não. O Artigo 7º, inciso XXXIII da Constituição Federal proíbe expressamente qualquer trabalho noturno, perigoso ou insalubre a menores de 18 anos.',
  },
];

export default function TurnoNoturnoPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Turno Noturno', item: 'https://calculahoras.online/turno-noturno' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Calculadora de Turno Noturno CLT',
          url: 'https://calculahoras.online/turno-noturno',
          description:
            'Calcule horas noturnas com redução ficta de 52min30s e adicional de 20% conforme o Artigo 73 da CLT.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Turno Noturno' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Moon className="w-3.5 h-3.5 text-brand-600" />
              Art. 73 CLT • Hora Ficta 52m30s • Adicional 20%
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Calculadora de Turno Noturno
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Calcule suas horas de trabalho noturno com o fator de <strong>redução ficta (52 minutos e 30 segundos)</strong> e o <strong>adicional financeiro mínimo de 20%</strong> conforme as regras trabalhistas do Brasil.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <NightShiftCalculator />
          </div>
        </div>
      </section>

      {/* Guia Didático e Exemplos Práticos */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Os Dois Benefícios Legais do Trabalho Noturno
            </h2>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              Para compensar o desgaste físico e social do trabalho à noite, o Artigo 73 da CLT confere ao trabalhador urbano duas proteções automáticas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
                <span className="font-mono text-xs font-bold text-brand-800 block mb-1">
                  1. Hora Ficta Reduzida (52min30s)
                </span>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Cada 52 minutos e 30 segundos equivale a 1 hora completa. Multiplica-se o tempo no relógio por 1,142857 (ou 60 ÷ 52,5) para encontrar as horas noturnas pagas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
                <span className="font-mono text-xs font-bold text-amber-800 block mb-1">
                  2. Adicional Financeiro de 20%
                </span>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Sobre cada hora noturna trabalhada incide um acréscimo monetário de no mínimo 20% sobre o salário-hora diurno normal.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Exemplos Reais Detalhados */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
              Exemplos Práticos de Escala Noturna
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                    Exemplo 1
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Turno Completo 22:00 às 05:00
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Relógio: 7 horas corridas</li>
                    <li>• Conversão ficta: 7 ÷ 52,5 × 60</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      Equivale a exatamente 8 horas pagas com mais 20% de adicional.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-brand-800">
                  Total Pago: 8h noturnas + 20%
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Exemplo 2
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Prorrogação Noturna (Súmula 60 TST)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Entrada: 22:00 | Saída: 07:00</li>
                    <li>• 1h de ceia/intervalo</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      As horas entre 05:00 e 07:00 também recebem adicional noturno por prorrogação.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-amber-800">
                  Adicional Noturno até 07:00
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                    Exemplo 3
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Turno Misto (18:00 às 02:00)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• 18:00 às 22:00: 4h diurnas normais</li>
                    <li>• 22:00 às 02:00: 4h noturnas reduzidas</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      Apenas o trecho após as 22h tem redução ficta e adicional de 20%.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-teal-800">
                  Jornada com partes diurna e noturna
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
              Artigo 73 do Decreto-Lei nº 5.452/1943 (CLT); Súmula 60 do TST; Orientação Jurisprudencial nº 97 da SDI-1 do TST.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre Turno Noturno"
        subtitle="Perguntas frequentes sobre adicional noturno e hora reduzida da CLT:"
        faqs={FAQS_TURNO_NOTURNO}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/turno-noturno"
        title="Calculadoras Relacionadas"
        subtitle="Confira outras ferramentas úteis para apuração de ponto:"
      />
    </>
  );
}
