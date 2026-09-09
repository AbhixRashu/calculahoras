import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { StructuredData } from '@/components/seo/StructuredData';
import { TrendingUp, Scale, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Calcular Horas Extras (50% e 100%): Guia Prático CLT',
  description:
    'Aprenda o passo a passo de como calcular horas extras a 50% e 100% pela CLT, com fórmula do salário-hora e cálculo do DSR.',
  keywords: [
    'como calcular horas extras',
    'calcular hora extra 50%',
    'calcular hora extra 100%',
    'calculo de horas extras passo a passo',
  ],
  alternates: { canonical: 'https://calculahoras.online/guias/como-calcular-horas-extras' },
  openGraph: {
    title: 'Como Calcular Horas Extras (50% e 100%) | CalculaHoras',
    description: 'Guia completo para calcular suas horas extras e reflexo no DSR pela CLT.',
    url: 'https://calculahoras.online/guias/como-calcular-horas-extras',
    type: 'article',
  },
};

export default function GuiaHorasExtras() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Guias', item: 'https://calculahoras.online/guias' },
            { '@type': 'ListItem', position: 3, name: 'Como Calcular Horas Extras', item: 'https://calculahoras.online/guias/como-calcular-horas-extras' },
          ],
        }}
      />
      <StructuredData
        type="article"
        data={{
          headline: 'Como Calcular Horas Extras (50% e 100%): Guia Prático CLT',
          description: 'Aprenda o passo a passo de como calcular horas extras a 50% e 100% pela CLT, com fórmula do salário-hora e cálculo do DSR.',
          url: 'https://calculahoras.online/guias/como-calcular-horas-extras',
        }}
      />

      <article className="py-10 md:py-16 bg-white">
        <div className="container-app max-w-3xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Guias', href: '/guias' },
              { label: 'Como Calcular Horas Extras' },
            ]}
          />

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Legislação e Remuneração
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mt-3 mb-4">
              Como Calcular Horas Extras
            </h1>
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed">
              Entenda como descobrir o valor da sua hora de trabalho, aplicar os percentuais de 50% e 100% e calcular o reflexo obrigatório no DSR.
            </p>
          </header>

          <div className="prose prose-ink max-w-none text-ink-700 leading-relaxed space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                Etapa 1: Encontrar o Salário-Hora Normal
              </h2>
              <p>
                O primeiro passo é dividir o salário mensal pelo divisor correspondente à sua carga horária semanal:
              </p>
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-xs sm:text-sm">
                • 44 horas semanais = Divisor 220 (Ex: R$ 3.300 ÷ 220 = R$ 15,00/hora)<br />
                • 40 horas semanais = Divisor 200 (Ex: R$ 3.000 ÷ 200 = R$ 15,00/hora)
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                Etapa 2: Aplicar o Adicional de 50% ou 100%
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 text-xs sm:text-sm">
                  <strong className="text-amber-800 block mb-1">Horas Extras a 50% (Dias Úteis)</strong>
                  Multiplique o salário-hora por 1,50.<br />
                  Exemplo: R$ 15,00 × 1,50 = <strong>R$ 22,50</strong> por hora extra.
                </div>
                <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 text-xs sm:text-sm">
                  <strong className="text-emerald-800 block mb-1">Horas Extras a 100% (Domingos/Feriados)</strong>
                  Multiplique o salário-hora por 2,00.<br />
                  Exemplo: R$ 15,00 × 2,00 = <strong>R$ 30,00</strong> por hora extra.
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                Etapa 3: Calcular o Reflexo no DSR
              </h2>
              <p>
                Conforme a Lei nº 605/1949 e a Súmula 172 do TST, as horas extras habituais geram acréscimo proporcional no descanso semanal remunerado:
              </p>
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-xs sm:text-sm">
                DSR = (Total em R$ de Horas Extras ÷ Dias Úteis do Mês) × Domingos e Feriados do Mês
              </div>
            </section>

            <section className="p-6 rounded-3xl bg-brand-50 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-ink-900 text-base mb-1">Simule suas Horas Extras</h3>
                <p className="text-xs text-ink-600">Calcule em segundos o valor das suas horas extras e o DSR automaticamente.</p>
              </div>
              <Link href="/horas-extras" className="btn-primary text-xs shrink-0 py-2.5 px-4 font-bold">
                Calculadora de Horas Extras &rarr;
              </Link>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink-900">Guias Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/guias/como-calcular-horas-trabalhadas" className="p-4 rounded-2xl border border-surface-200 hover:border-brand-300 transition-colors">
                  <h3 className="font-semibold text-sm text-ink-900">Como Calcular Horas Trabalhadas</h3>
                  <p className="text-xs text-ink-500 mt-1">Apuração de jornada líquida com intervalo.</p>
                </Link>
                <Link href="/guias/como-calcular-turno-noturno" className="p-4 rounded-2xl border border-surface-200 hover:border-brand-300 transition-colors">
                  <h3 className="font-semibold text-sm text-ink-900">Como Calcular Turno Noturno</h3>
                  <p className="text-xs text-ink-500 mt-1">Adicional de 20% e hora de 52m30s.</p>
                </Link>
              </div>
            </section>

            <footer className="pt-6 border-t border-surface-200 text-xs text-ink-500 space-y-1">
              <div className="flex items-center gap-1 font-semibold text-ink-700">
                <Scale className="w-3.5 h-3.5 text-brand-600" />
                <span>Base Legal: Artigo 59 da CLT, Lei nº 605/1949 e Súmula 172 do TST.</span>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
