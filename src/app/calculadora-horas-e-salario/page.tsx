import type { Metadata } from 'next';
import { SalaryCalculator } from '@/components/calculator/SalaryCalculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { DollarSign, Clock, Scale, TrendingUp, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calculadora de Salário por Hora e Horas Extras | CalculaHoras',
  description:
    'Calcule quanto vale sua hora de trabalho a partir do salário mensal e descubra o valor exato das horas extras a 50% e 100% com reflexo no DSR pela CLT.',
  keywords: [
    'calculadora de salario por hora',
    'quanto vale minha hora trabalhada',
    'calcular valor da hora clt',
    'divisor 220 horas extras',
    'calculo de horas extras e salario',
    'salario hora clt',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/calculadora-horas-e-salario',
  },
  openGraph: {
    title: 'Calculadora de Salário por Hora e Horas Extras | CalculaHoras',
    description:
      'Converta seu salário mensal em valor por hora normal e calcule seus adicionais de horas extras com precisão.',
    url: 'https://calculahoras.online/calculadora-horas-e-salario',
    type: 'website',
  },
};

const FAQS_SALARIO_HORA: FAQItemData[] = [
  {
    q: 'Como calcular quanto vale a minha hora de trabalho?',
    a: 'Para descobrir o valor da hora normal, divida o seu salário mensal bruto pelo divisor contratual da sua jornada semanal (220 para 44h semanais ou 200 para 40h semanais).',
    example: 'Salário de R$ 3.300,00 ÷ 220 = R$ 15,00 por hora normal de trabalho.',
  },
  {
    q: 'Qual divisor devo usar para jornada de 44 horas semanais?',
    a: 'Para jornada de 44 horas semanais, o divisor oficial determinado pelo Artigo 64 da CLT é 220. Esse número considera 7,333 horas por dia multiplicadas por 30 dias no mês comercial.',
  },
  {
    q: 'Qual divisor usar para jornada de 40 horas semanais?',
    a: 'Para quem trabalha 40 horas semanais (segunda a sexta, 8 horas por dia sem trabalhar aos sábados), o divisor oficial estabelecido pelo Tribunal Superior do Trabalho (Súmula 431) é 200.',
    example: 'Salário de R$ 4.000,00 ÷ 200 = R$ 20,00 por hora.',
  },
  {
    q: 'Como calcular o valor de horas extras a partir do salário-hora?',
    a: 'Multiplique o salário-hora pelo fator de acréscimo legal: 1,50 para hora extra a 50% (dias de semana e sábados) ou 2,00 para hora extra a 100% (domingos e feriados).',
    example: 'Com salário-hora de R$ 16,00: hora extra 50% = R$ 24,00; hora extra 100% = R$ 32,00.',
  },
  {
    q: 'Benefícios como vale-transporte e alimentação entram no cálculo da hora?',
    a: 'Não. Conforme a Reforma Trabalhista (Artigo 457, § 2º da CLT), ajudas de custo, vale-refeição, vale-alimentação e diárias não integram a remuneração nem servem de base para o valor do salário-hora.',
  },
  {
    q: 'Comissões e gratificações de função integram o valor da hora?',
    a: 'Sim. Gratificações contratuais e comissões habituais possuem natureza salarial e devem ser somadas ao salário base antes da divisão pelo divisor mensal.',
  },
  {
    q: 'Como o cálculo do salário-hora afeta o desconto de faltas?',
    a: 'Cada dia de falta injustificada acarreta o desconto do valor correspondente a 1/30 do salário mensal, além do DSR daquela semana.',
  },
  {
    q: 'Qual o salário-hora de quem ganha 1 salário mínimo?',
    a: 'Em uma jornada de 44h semanais (divisor 220), divida o valor oficial do salário mínimo federal vigente por 220 para obter o piso do salário-hora nacional.',
  },
];

export default function CalculadoraSalarioPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Salário por Hora', item: 'https://calculahoras.online/calculadora-horas-e-salario' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Calculadora de Salário por Hora e Horas Extras',
          url: 'https://calculahoras.online/calculadora-horas-e-salario',
          description:
            'Calcule o valor do salário por hora a partir do salário mensal e descubra o valor de horas extras e DSR conforme a CLT.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Salário por Hora' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <DollarSign className="w-3.5 h-3.5 text-brand-600" />
              Divisores 220 e 200 da CLT • Horas Extras em Reais
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Calculadora de Salário por Hora
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Descubra quanto vale exatamente cada hora do seu expediente e saiba quanto você receberá no contracheque por cada <strong>hora extra a 50% ou 100%</strong>, incluindo o cálculo do <strong>DSR</strong>.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <SalaryCalculator />
          </div>
        </div>
      </section>

      {/* Guia Didático e Exemplos Práticos */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Como Converter o Salário Mensal em Valor por Hora
            </h2>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              O Artigo 64 da CLT determina a fórmula oficial para encontrar o salário-hora do empregado mensalista:
            </p>

            <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-sm text-brand-950">
              <strong>Fórmula do Salário-Hora:</strong> Valor da Hora = Salário Mensal Bruto ÷ Divisor Mensal (220 ou 200)
            </div>
          </div>

          {/* 3 Exemplos Reais Detalhados */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
              Exemplos Práticos com Diferentes Salários
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                    Salário R$ 2.200
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Jornada 44h (Divisor 220)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• R$ 2.200 ÷ 220 = R$ 10,00/h</li>
                    <li>• Hora extra 50%: R$ 15,00</li>
                    <li>• Hora extra 100%: R$ 20,00</li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-brand-800">
                  Hora Normal: R$ 10,00
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                    Salário R$ 4.000
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Jornada 40h (Divisor 200)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• R$ 4.000 ÷ 200 = R$ 20,00/h</li>
                    <li>• Hora extra 50%: R$ 30,00</li>
                    <li>• Hora extra 100%: R$ 40,00</li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-teal-800">
                  Hora Normal: R$ 20,00
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Salário R$ 6.600
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Jornada 44h (Divisor 220)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• R$ 6.600 ÷ 220 = R$ 30,00/h</li>
                    <li>• Hora extra 50%: R$ 45,00</li>
                    <li>• Hora extra 100%: R$ 60,00</li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-amber-800">
                  Hora Normal: R$ 30,00
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
              Artigo 64 do Decreto-Lei nº 5.452/1943 (CLT); Súmula 431 do Tribunal Superior do Trabalho (TST).
            </p>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre Salário por Hora"
        subtitle="Perguntas frequentes sobre valor da hora de trabalho, divisores e holerite:"
        faqs={FAQS_SALARIO_HORA}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/calculadora-horas-e-salario"
        title="Calculadoras Relacionadas"
        subtitle="Ferramentas úteis para complementar seu controle de horas e remuneração:"
      />
    </>
  );
}
