import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { StructuredData } from '@/components/seo/StructuredData';
import { Clock, Calculator, ArrowRight, CheckCircle2, AlertTriangle, Scale, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Calcular Horas Trabalhadas: Guia Passo a Passo com Exemplos',
  description:
    'Aprenda como calcular horas trabalhadas diárias com desconto de intervalo e formato decimal. Guia passo a passo com exemplos práticos e regras da CLT.',
  keywords: [
    'como calcular horas trabalhadas',
    'passo a passo calcular horas de trabalho',
    'calcular horas trabalhadas formula',
    'como calcular ponto diario',
  ],
  alternates: { canonical: 'https://calculahoras.online/guias/como-calcular-horas-trabalhadas' },
  openGraph: {
    title: 'Como Calcular Horas Trabalhadas | Guia Prático CalculaHoras',
    description: 'Aprenda o passo a passo exato para calcular suas horas diárias com desconto de almoço.',
    url: 'https://calculahoras.online/guias/como-calcular-horas-trabalhadas',
    type: 'article',
  },
};

export default function GuiaHorasTrabalhadas() {
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
            { '@type': 'ListItem', position: 3, name: 'Como Calcular Horas Trabalhadas', item: 'https://calculahoras.online/guias/como-calcular-horas-trabalhadas' },
          ],
        }}
      />
      <StructuredData
        type="article"
        data={{
          headline: 'Como Calcular Horas Trabalhadas: Guia Passo a Passo com Exemplos',
          description: 'Aprenda como calcular horas trabalhadas diárias com desconto de intervalo e formato decimal conforme a CLT.',
          url: 'https://calculahoras.online/guias/como-calcular-horas-trabalhadas',
        }}
      />

      <article className="py-10 md:py-16 bg-white">
        <div className="container-app max-w-3xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Guias', href: '/guias' },
              { label: 'Como Calcular Horas Trabalhadas' },
            ]}
          />

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Guia Didático de Ponto
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mt-3 mb-4">
              Como Calcular Horas Trabalhadas
            </h1>
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed">
              Descubra a fórmula matemática exata, como descontar corretamente o intervalo de almoço e como converter o resultado em horas decimais para folha de pagamento.
            </p>
          </header>

          <div className="prose prose-ink max-w-none text-ink-700 leading-relaxed space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                A Fórmula Básica do Cálculo de Horas
              </h2>
              <p>
                O cálculo de horas trabalhadas em um dia baseia-se na diferença entre o horário de término (saída) e o horário de início (entrada), subtraindo-se qualquer pausa concedida para refeição ou descanso.
              </p>
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-sm text-brand-950 font-bold">
                Horas Trabalhadas = (Horário de Saída − Horário de Entrada) − Duração do Intervalo
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                Exemplo Passo a Passo com Números Reais
              </h2>
              <p>
                Suponha que um funcionário registre sua entrada às <strong>08:30</strong>, saia às <strong>18:00</strong> e faça <strong>1 hora</strong> de almoço:
              </p>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 space-y-3 font-mono text-xs sm:text-sm">
                <div><strong>Passo 1:</strong> 18:00 − 08:30 = 9 horas e 30 minutos de permanência total.</div>
                <div><strong>Passo 2:</strong> Subtrair 1 hora de almoço: 9h 30min − 1h 00min = 8h 30min trabalhadas.</div>
                <div className="text-brand-800 font-bold pt-1 border-t border-surface-200">
                  <strong>Resultado:</strong> 8 horas e 30 minutos trabalhadas (8,50 horas em decimal).
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                Como Calcular Turnos que Passam da Meia-Noite
              </h2>
              <p>
                Quando a jornada atravessa a meia-noite (por exemplo, entrando às 22:00 e saindo às 06:00 do dia seguinte), a saída parece menor que a entrada. Para resolver matematicamente, adicione 24 horas ao horário de saída:
              </p>
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-xs sm:text-sm">
                06:00 + 24:00 = 30:00.<br />
                30:00 − 22:00 = 8 horas de permanência.
              </div>
            </section>

            <section className="p-6 rounded-3xl bg-brand-50 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-ink-900 text-base mb-1">Calcule Agora Online</h3>
                <p className="text-xs text-ink-600">Use nossa calculadora gratuita para apurar suas horas sem fazer contas de cabeça.</p>
              </div>
              <Link href="/horas-trabalhadas" className="btn-primary text-xs shrink-0 py-2.5 px-4 font-bold">
                Calcular Horas Trabalhadas &rarr;
              </Link>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink-900">Guias Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/guias/como-calcular-horas-extras" className="p-4 rounded-2xl border border-surface-200 hover:border-brand-300 transition-colors">
                  <h3 className="font-semibold text-sm text-ink-900">Como Calcular Horas Extras</h3>
                  <p className="text-xs text-ink-500 mt-1">Adicionais de 50% e 100% e reflexo no DSR.</p>
                </Link>
                <Link href="/guias/como-calcular-horas-em-decimal" className="p-4 rounded-2xl border border-surface-200 hover:border-brand-300 transition-colors">
                  <h3 className="font-semibold text-sm text-ink-900">Como Converter para Decimal</h3>
                  <p className="text-xs text-ink-500 mt-1">Transforme minutos em frações centesimais.</p>
                </Link>
              </div>
            </section>

            <footer className="pt-6 border-t border-surface-200 text-xs text-ink-500 space-y-1">
              <div className="flex items-center gap-1 font-semibold text-ink-700">
                <Scale className="w-3.5 h-3.5 text-brand-600" />
                <span>Base Legal: Artigos 58 e 71 do Decreto-Lei nº 5.452/1943 (CLT).</span>
              </div>
              <p>Este guia tem finalidade estritamente educativa e informativa.</p>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
