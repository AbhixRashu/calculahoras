import type { Metadata } from 'next';
import { OvertimeCalculator } from '@/components/calculator/OvertimeCalculator';
import { FAQSection } from '@/components/sections/FAQSection';
import { StructuredData } from '@/components/seo/StructuredData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Horas Extras Online (CLT 50% e 100% com DSR) | CalculaHoras',
  description:
    'Calcule o valor exato das suas horas extras a 50% e 100% conforme a CLT, incluindo o reflexo no DSR (Descanso Semanal Remunerado). Simulação rápida e gratuita.',
  keywords: [
    'calculadora de horas extras',
    'calcular horas extras clt',
    'hora extra 50 por cento',
    'hora extra 100 por cento',
    'reflexo dsr horas extras',
    'limite horas extras clt',
    'divisor 220 calculo hora extra',
  ],
  alternates: {
    canonical: '/horas-extras',
  },
  openGraph: {
    title: 'Calculadora de Horas Extras CLT | CalculaHoras',
    description:
      'Calcule suas horas extras com acréscimo de 50% em dias úteis e 100% em domingos e feriados, com reflexo no DSR.',
    url: 'https://calculahoras.online/horas-extras',
  },
};

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
            { '@type': 'ListItem', position: 2, name: 'Horas Extras', item: 'https://calculahoras.online/horas-extras' },
          ],
        }}
      />

      <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-4">
              <span>⏱️ Art. 59 da CLT e Lei 605/49</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              Calculadora de Horas Extras CLT
            </h1>
            <p className="text-ink-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Descubra quanto você vai receber a mais no seu holerite pelas horas extras trabalhadas a 50%
              (dias de semana e sábados) e 100% (domingos e feriados), com o reflexo obrigatório do DSR.
            </p>
          </div>

          <OvertimeCalculator />

          {/* Guia Didático de Horas Extras */}
          <div className="max-w-3xl mx-auto mt-16 space-y-8 text-ink-700 leading-relaxed">
            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                Qual o limite máximo de horas extras por dia pela CLT?
              </h2>
              <p>
                Segundo o <strong>Artigo 59 da CLT</strong>, a jornada diária de trabalho poderá ser acrescida de horas suplementares em número <strong>não excedente de 2 (duas) horas diárias</strong>, mediante acordo individual, convenção coletiva ou acordo coletivo de trabalho.
              </p>
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                <p className="font-semibold text-amber-900 text-sm">Atenção ao limite legal:</p>
                <p className="text-amber-800 text-xs mt-1">
                  Exceder o limite de 2 horas extras diárias de forma habitual configura infração administrativa para a empresa perante a fiscalização do Ministério do Trabalho.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                Como funciona o reflexo das horas extras no DSR?
              </h2>
              <p>
                A Súmula 172 do Tribunal Superior do Trabalho (TST) e a Lei nº 605/49 determinam que o valor das horas extras habitualmente prestadas deve ser computado no cálculo do <strong>Descanso Semanal Remunerado (DSR)</strong>.
              </p>
              <p>A fórmula para calcular o DSR sobre as horas extras é:</p>
              <div className="p-4 bg-brand-50 border border-brand-200 rounded-xl font-mono text-sm text-brand-900">
                DSR = (Total em R$ das horas extras do mês ÷ Dias úteis do mês) x Domingos e feriados do mês
              </div>
              <p className="text-xs text-ink-500">
                Em média, o DSR acrescenta de 15% a 20% sobre o montante total das horas extras no holerite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas Relacionadas */}
      <section className="py-12 bg-surface-50 border-t border-surface-200/80">
        <div className="container-app max-w-3xl">
          <h2 className="text-2xl font-bold text-ink-900 mb-6">Ferramentas recomendadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/horas-trabalhadas"
              className="p-5 rounded-2xl bg-white border border-surface-200 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-ink-900">Calculadora de Horas Trabalhadas</h3>
              <p className="text-xs text-ink-500 mt-1">Total diário com entrada, saída e intervalo em horas e minutos</p>
            </Link>
            <Link
              href="/calculadora-horas-e-salario"
              className="p-5 rounded-2xl bg-white border border-surface-200 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-ink-900">Calculadora de Salário por Hora</h3>
              <p className="text-xs text-ink-500 mt-1">Descubra o valor da sua hora normal e adicional de horas extras</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
