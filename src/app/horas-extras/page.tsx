import type { Metadata } from 'next';
import { OvertimeCalculator } from '@/components/calculator/OvertimeCalculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import Link from 'next/link';
import { Clock, TrendingUp, Scale, AlertTriangle, CheckCircle2, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calculadora de Horas Extras | Calcule suas Horas Online',
  description:
    'Calcule suas horas extras online com adicionais de 50% e 100% conforme o Art. 59 da CLT, com reflexo no DSR. Rápida, gratuita e precisa.',
  keywords: [
    'calculadora de horas extras',
    'calcular horas extras',
    'hora extra 50 por cento',
    'hora extra 100 por cento',
    'calculo hora extra clt',
    'reflexo dsr hora extra',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/horas-extras',
  },
  openGraph: {
    title: 'Calculadora de Horas Extras CLT | CalculaHoras',
    description:
      'Descubra quanto você vai receber pelas horas extras a 50% e 100%, com o reflexo obrigatório do DSR.',
    url: 'https://calculahoras.online/horas-extras',
    type: 'website',
  },
};

const FAQS_HORAS_EXTRAS: FAQItemData[] = [
  {
    q: 'Como calcular o valor de 1 hora extra a 50%?',
    a: 'Primeiro divida seu salário mensal pelo divisor da sua jornada (220 para 44h semanais ou 200 para 40h semanais) para achar o salário-hora. Em seguida, multiplique o salário-hora por 1,50.',
    example: 'Salário de R$ 2.640,00 ÷ 220 = R$ 12,00 por hora normal. Hora extra a 50%: R$ 12,00 × 1,50 = R$ 18,00 por hora extra trabalhada.',
  },
  {
    q: 'Quando a hora extra deve ser paga a 100%?',
    a: 'O adicional de 100% (hora em dobro) é obrigatório por lei quando o trabalho extraordinário ocorre em domingos ou feriados civis e religiosos, desde que o empregado não tenha folga compensatória na mesma semana.',
    example: 'Salário-hora de R$ 15,00. Trabalhou 4 horas no feriado de 7 de setembro: R$ 15,00 × 2,00 = R$ 30,00 por hora × 4 horas = R$ 120,00.',
  },
  {
    q: 'Qual é o limite legal de horas extras por dia pela CLT?',
    a: 'O Artigo 59 da CLT estabelece que a jornada de trabalho só pode ser prorrogada em até no máximo 2 (duas) horas extras por dia, mediante acordo individual, convenção ou acordo coletivo.',
  },
  {
    q: 'Como funciona o cálculo do DSR sobre as horas extras?',
    a: 'Conforme a Lei nº 605/1949 e a Súmula 172 do TST, as horas extras habituais integram o Descanso Semanal Remunerado. A conta divide o total em dinheiro de horas extras pelos dias úteis do mês e multiplica pelo número de domingos e feriados.',
    example: 'R$ 400 em extras em mês com 25 dias úteis e 5 domingos/feriados: (R$ 400 ÷ 25) × 5 = R$ 80 de DSR a mais no holerite.',
  },
  {
    q: 'As horas extras entram no cálculo de férias e 13º salário?',
    a: 'Sim. Por terem natureza salarial habitual, a média das horas extras prestadas ao longo do ano reflete obrigatoriamente no 13º salário, nas férias remuneradas (com o terço constitucional) e no FGTS.',
  },
  {
    q: 'Qual a diferença entre Banco de Horas e pagamento de Horas Extras?',
    a: 'No pagamento tradicional, as horas extras são quitadas em folha com o adicional de 50% ou 100%. No banco de horas, as horas excedentes são compensadas com folgas ou saídas antecipadas em até 6 meses (acordo individual) ou 1 ano (acordo coletivo).',
  },
  {
    q: 'Como calcular horas extras para quem ganha salário com comissão?',
    a: 'Conforme a Súmula 340 do TST, o empregado comissionista que cumpre jornada extraordinária tem direito apenas ao adicional de horas extras (50% ou mais) sobre o valor-hora das comissões recebidas no mês.',
  },
  {
    q: 'Existe tolerância antes de começar a contar hora extra?',
    a: 'Sim. Conforme o Art. 58, § 1º da CLT, variações no ponto de até 5 minutos por batida, até o limite de 10 minutos diários, não são computadas nem como atraso nem como horas extras.',
  },
  {
    q: 'O que acontece se a empresa não pagar as horas extras?',
    a: 'O não pagamento habitual constitui infração trabalhista e gera passivo que pode ser cobrado judicialmente na Justiça do Trabalho com juros e correção monetária nos últimos 5 anos de contrato.',
  },
  {
    q: 'A calculadora de horas extras desconta impostos (INSS e IRRF)?',
    a: 'Nossa calculadora apura o valor bruto exato das horas extras e do DSR. Para o valor líquido em folha, incidem as alíquotas progressivas de INSS e Imposto de Renda Retido na Fonte (IRRF) sobre o total da remuneração.',
  },
];

export default function HorasExtrasPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Calculadora de Horas Extras', item: 'https://calculahoras.online/horas-extras' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Calculadora de Horas Extras CLT',
          url: 'https://calculahoras.online/horas-extras',
          description:
            'Calcule suas horas extras a 50% e 100% com reflexo no DSR conforme a Consolidação das Leis do Trabalho (CLT).',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Calculadora de Horas Extras' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-brand-600" />
              Art. 59 CLT • Lei 605/49 • Súmula 172 TST
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Calculadora de Horas Extras
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Descubra exatamente quanto você deve receber pelas horas extras a <strong>50% (dias úteis)</strong> e <strong>100% (domingos e feriados)</strong>, com simulação completa do <strong>DSR</strong> e valor por hora normal.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <OvertimeCalculator />
          </div>
        </div>
      </section>

      {/* Guia Didático e Exemplos Práticos */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Como Funciona o Cálculo de Horas Extras pela CLT
            </h2>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              O cálculo de horas extras divide-se em três etapas fundamentais: encontrar o valor da hora normal, aplicar o percentual de acréscimo legal ou convencional e calcular o reflexo obrigatório no Descanso Semanal Remunerado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
                <span className="font-mono text-xs font-bold text-amber-800 block mb-1">
                  1. Passo: Salário-Hora
                </span>
                <div className="font-mono text-xs text-ink-800 bg-white p-2.5 rounded-xl border border-surface-200">
                  Hora Normal = Salário Mensal ÷ Divisor (220 ou 200)
                </div>
                <p className="text-xs text-ink-500 mt-2">
                  O divisor 220 aplica-se para 44h semanais; o divisor 200 aplica-se para 40h semanais.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200">
                <span className="font-mono text-xs font-bold text-emerald-800 block mb-1">
                  2. Passo: Adicional de 50% ou 100%
                </span>
                <div className="font-mono text-xs text-ink-800 bg-white p-2.5 rounded-xl border border-surface-200">
                  Hora 50% = Hora Normal × 1,50<br />
                  Hora 100% = Hora Normal × 2,00
                </div>
                <p className="text-xs text-ink-500 mt-2">
                  Algumas convenções sindicais estipulam 60%, 70% ou 80% para dias de semana.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Exemplos Reais Detalhados */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
              Exemplos Práticos de Cálculo de Horas Extras
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Exemplo 1
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    10 Horas Extras a 50% no Mês
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Salário: R$ 2.200,00</li>
                    <li>• Hora normal: R$ 10,00</li>
                    <li>• Hora com 50%: R$ 15,00</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      10 horas × R$ 15,00 = R$ 150,00 brutos de horas extras.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-amber-800">
                  Total Horas: R$ 150,00 (+ DSR)
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Exemplo 2
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Trabalho em Domingo (100%)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Salário: R$ 3.300,00 (R$ 15/h)</li>
                    <li>• Hora em dobro (100%): R$ 30,00</li>
                    <li>• 6 horas trabalhadas no domingo</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      6 horas × R$ 30,00 = R$ 180,00 pelas horas do domingo.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-emerald-800">
                  Total Horas: R$ 180,00 (+ DSR)
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                    Exemplo 3
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Reflexo Completo no DSR
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• R$ 500,00 de horas extras no mês</li>
                    <li>• 25 dias úteis no mês</li>
                    <li>• 5 domingos e feriados</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      (R$ 500 ÷ 25) × 5 = R$ 100,00 de DSR.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-brand-800">
                  Valor Total no Holerite: R$ 600,00
                </div>
              </div>
            </div>
          </div>

          {/* Limite Legal e Cuidados */}
          <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              Regras Importantes e Limites da CLT (Art. 59)
            </div>
            <ul className="text-xs sm:text-sm text-amber-900 space-y-2 list-disc list-inside leading-relaxed">
              <li>
                <strong>Limite de 2 horas extras diárias:</strong> A realização de mais de 2 horas suplementares por dia é ilegal perante a fiscalização do Ministério do Trabalho, salvo casos de força maior devidamente justificados.
              </li>
              <li>
                <strong>Intervalo entre jornadas (Art. 66 CLT):</strong> Entre o fim de uma jornada e o início da próxima deve haver um descanso obrigatório ininterrupto de no mínimo 11 horas.
              </li>
              <li>
                <strong>Acordo individual escrito ou CCT:</strong> A prestação de horas extras exige acordo prévio entre empregador e empregado ou previsão na Convenção Coletiva.
              </li>
            </ul>
          </div>

          {/* Base Legal */}
          <div className="p-6 rounded-3xl bg-surface-100 border border-surface-200 text-xs text-ink-600 space-y-2">
            <h4 className="font-bold text-ink-900 text-sm flex items-center gap-2">
              <Scale className="w-4 h-4 text-brand-600" />
              Legislação e Fontes Oficiais
            </h4>
            <p>
              Artigo 59 do Decreto-Lei nº 5.452/1943 (CLT); Lei nº 605/1949 (DSR); Súmulas 172, 340 e 376 do Tribunal Superior do Trabalho (TST).
            </p>
            <p className="text-[11px] text-ink-500">
              Aviso: Os valores são simulações matemáticas baseadas na legislação federal. Consulte sempre a Convenção Coletiva da sua categoria para eventuais percentuais superiores.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas Frequentes sobre Horas Extras"
        subtitle="Entenda seus direitos, adicionais de 50% e 100% e cálculo de DSR:"
        faqs={FAQS_HORAS_EXTRAS}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/horas-extras"
        title="Calculadoras Relacionadas para seu Cálculo de Ponto"
        subtitle="Confira outras ferramentas úteis para planejar sua jornada e salário:"
      />
    </>
  );
}
