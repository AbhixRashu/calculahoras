import type { Metadata } from 'next';
import { SalaryCalculator } from '@/components/calculator/SalaryCalculator';
import { StructuredData } from '@/components/seo/StructuredData';
import { FAQSection } from '@/components/sections/FAQSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Salário por Hora e Horas Extras (CLT) | CalculaHoras',
  description:
    'Calcule quanto vale sua hora de trabalho a partir do salário mensal. Descubra o valor das horas extras a 50% e 100% com reflexo no DSR pela CLT.',
  keywords: [
    'calculadora de salario por hora',
    'quanto vale minha hora trabalhada',
    'calcular valor da hora clt',
    'divisor 220 horas extras',
    'calculo de horas extras e salario',
    'reflexo dsr horas extras',
  ],
  alternates: {
    canonical: '/calculadora-horas-e-salario',
  },
  openGraph: {
    title: 'Calculadora de Salário e Horas Extras | CalculaHoras',
    description:
      'Converta suas horas trabalhadas em dinheiro: calcule o valor da hora normal e os adicionais de 50% e 100% de horas extras.',
    url: 'https://calculahoras.online/calculadora-horas-e-salario',
  },
};

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
            { '@type': 'ListItem', position: 2, name: 'Salário e Horas', item: 'https://calculahoras.online/calculadora-horas-e-salario' },
          ],
        }}
      />

      <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-4">
              <span>💰 Cálculo Salarial Conforme CLT</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              Calculadora de Salário por Hora e Horas Extras
            </h1>
            <p className="text-ink-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Descubra exatamente quanto vale cada hora do seu expediente e quanto você deve receber
              pelas horas extras trabalhadas a 50% e 100% com o cálculo oficial da CLT.
            </p>
          </div>

          <SalaryCalculator />

          {/* Guia Didático de Salário e CLT */}
          <div className="max-w-3xl mx-auto mt-16 space-y-8 text-ink-700 leading-relaxed">
            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                Como calcular o valor da hora de trabalho pela CLT?
              </h2>
              <p>
                No Brasil, para quem trabalha <strong>44 horas semanais</strong> (jornada padrão da CLT), a lei estabelece o
                uso do <strong>divisor 220</strong>. Já para quem cumpre <strong>40 horas semanais</strong> (de segunda a sexta-feira),
                o divisor utilizado é o <strong>200</strong>.
              </p>
              <div className="p-4 bg-brand-50 border border-brand-200 rounded-xl font-mono text-sm text-brand-900">
                Valor da Hora = Salário Bruto Mensal ÷ 220
              </div>
              <p className="text-sm text-ink-500">
                <strong>Exemplo:</strong> Se você recebe um salário de R$ 3.300,00:
                <br />
                R$ 3.300,00 ÷ 220 = <strong>R$ 15,00 por hora normal</strong>.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                Qual o valor da Hora Extra (50% e 100%)?
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Hora Extra a 50% (dias úteis e sábados):</strong> Você recebe o valor da hora normal acrescido de 50%.
                  No exemplo de R$ 15,00/h, a hora extra a 50% será de <strong>R$ 22,50</strong> (15 x 1,5).
                </li>
                <li>
                  <strong>Hora Extra a 100% (domingos e feriados):</strong> Você recebe o dobro do valor da hora normal.
                  No exemplo de R$ 15,00/h, a hora extra a 100% será de <strong>R$ 30,00</strong> (15 x 2).
                </li>
              </ul>
              <p className="text-sm text-ink-500">
                * Além disso, as horas extras habituais geram reflexo no Descanso Semanal Remunerado (DSR),
                acrescentando em média 16,6% a mais sobre o valor das extras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
