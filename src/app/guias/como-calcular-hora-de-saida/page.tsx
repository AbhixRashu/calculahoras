import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { StructuredData } from '@/components/seo/StructuredData';
import { LogOut, Scale, ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Calcular a Hora de Saída do Trabalho: Guia Passo a Passo',
  description:
    'Aprenda como calcular sua hora exata de saída somando entrada, carga horária e almoço. Evite dever horas e não faça horas extras sem querer.',
  keywords: [
    'como calcular hora de saida',
    'calcular horario de saida passo a passo',
    'que horas sair do trabalho calculo',
  ],
  alternates: { canonical: 'https://calculahoras.online/guias/como-calcular-hora-de-saida' },
  openGraph: {
    title: 'Como Calcular a Hora de Saída | CalculaHoras',
    description: 'Guia prático para saber a hora exata de bater o ponto no final do dia.',
    url: 'https://calculahoras.online/guias/como-calcular-hora-de-saida',
    type: 'article',
  },
};

export default function GuiaHoraDeSaida() {
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
            { '@type': 'ListItem', position: 3, name: 'Como Calcular Hora de Saída', item: 'https://calculahoras.online/guias/como-calcular-hora-de-saida' },
          ],
        }}
      />
      <StructuredData
        type="article"
        data={{
          headline: 'Como Calcular a Hora de Saída do Trabalho: Guia Passo a Passo',
          description: 'Aprenda como calcular sua hora exata de saída somando entrada, carga horária e almoço conforme a CLT.',
          url: 'https://calculahoras.online/guias/como-calcular-hora-de-saida',
        }}
      />

      <article className="py-10 md:py-16 bg-white">
        <div className="container-app max-w-3xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Guias', href: '/guias' },
              { label: 'Como Calcular Hora de Saída' },
            ]}
          />

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Planejamento de Jornada
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mt-3 mb-4">
              Como Calcular a Hora de Saída
            </h1>
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed">
              Aprenda a fórmula simples para calcular exatamente o horário de bater o ponto final sem dever horas ao banco de horas.
            </p>
          </header>

          <div className="prose prose-ink max-w-none text-ink-700 leading-relaxed space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                A Fórmula da Hora de Saída
              </h2>
              <p>
                A hora de saída é uma soma direta de três componentes: quando você entrou, quantas horas você precisa trabalhar e quanto tempo durou seu almoço.
              </p>
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-sm text-brand-950 font-bold">
                Hora de Saída = Hora de Entrada + Carga Horária Contratual + Tempo de Intervalo
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                Exemplos de Aplicação Prática
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 text-xs sm:text-sm font-mono">
                  <strong>Jornada de 8h com 1h de almoço:</strong><br />
                  Entrada às 08:00 + 8h jornada + 1h almoço = <strong>17:00</strong> de saída.
                </div>
                <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 text-xs sm:text-sm font-mono">
                  <strong>Jornada de 8h48 (Compensação de Sábado):</strong><br />
                  Entrada às 08:00 + 8h48min + 1h almoço = <strong>17:48</strong> de saída.
                </div>
                <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 text-xs sm:text-sm font-mono">
                  <strong>Jornada de 6h com 15 min de intervalo:</strong><br />
                  Entrada às 07:00 + 6h jornada + 15 min = <strong>13:15</strong> de saída.
                </div>
              </div>
            </section>

            <section className="p-6 rounded-3xl bg-brand-50 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-ink-900 text-base mb-1">Calcule sua Hora de Saída</h3>
                <p className="text-xs text-ink-600">Descubra em segundos que horas você deve sair hoje.</p>
              </div>
              <Link href="/hora-de-saida" className="btn-primary text-xs shrink-0 py-2.5 px-4 font-bold">
                Calculadora de Hora de Saída &rarr;
              </Link>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink-900">Guias Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/guias/como-calcular-intervalo-de-trabalho" className="p-4 rounded-2xl border border-surface-200 hover:border-brand-300 transition-colors">
                  <h3 className="font-semibold text-sm text-ink-900">Intervalo de Trabalho</h3>
                  <p className="text-xs text-ink-500 mt-1">Regras do Art. 71 da CLT para refeição.</p>
                </Link>
                <Link href="/guias/como-calcular-horas-semanais" className="p-4 rounded-2xl border border-surface-200 hover:border-brand-300 transition-colors">
                  <h3 className="font-semibold text-sm text-ink-900">Horas Semanais</h3>
                  <p className="text-xs text-ink-500 mt-1">Como totalizar 44h na semana.</p>
                </Link>
              </div>
            </section>

            <footer className="pt-6 border-t border-surface-200 text-xs text-ink-500 space-y-1">
              <div className="flex items-center gap-1 font-semibold text-ink-700">
                <Scale className="w-3.5 h-3.5 text-brand-600" />
                <span>Base Legal: Artigos 58 e 71 da CLT.</span>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
