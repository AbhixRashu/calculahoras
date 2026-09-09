import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { StructuredData } from '@/components/seo/StructuredData';
import { Calendar, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Calcular Horas Semanais (44h CLT): Guia Passo a Passo',
  description:
    'Aprenda como calcular a jornada semanal de trabalho no Brasil. Entenda a escala de 44h semanais, compensação de sábado (8h48/dia) e horas extras.',
  keywords: [
    'como calcular horas semanais',
    'jornada 44 horas semanais como calcular',
    'escala 8h48 compensacao sabado',
  ],
  alternates: { canonical: 'https://calculahoras.online/guias/como-calcular-horas-semanais' },
  openGraph: {
    title: 'Como Calcular Horas Semanais | CalculaHoras',
    description: 'Guia completo sobre a jornada semanal de 44h da CLT e compensação de sábado.',
    url: 'https://calculahoras.online/guias/como-calcular-horas-semanais',
    type: 'article',
  },
};

export default function GuiaHorasSemanais() {
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
            { '@type': 'ListItem', position: 3, name: 'Como Calcular Horas Semanais', item: 'https://calculahoras.online/guias/como-calcular-horas-semanais' },
          ],
        }}
      />
      <StructuredData
        type="article"
        data={{
          headline: 'Como Calcular Horas Semanais (44h CLT): Guia Passo a Passo',
          description: 'Aprenda como calcular a jornada semanal de trabalho no Brasil conforme a Constituição Federal e CLT.',
          url: 'https://calculahoras.online/guias/como-calcular-horas-semanais',
        }}
      />

      <article className="py-10 md:py-16 bg-white">
        <div className="container-app max-w-3xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Guias', href: '/guias' },
              { label: 'Como Calcular Horas Semanais' },
            ]}
          />

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Jornada e Escalas CLT
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mt-3 mb-4">
              Como Calcular Horas Semanais
            </h1>
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed">
              Entenda como somar as horas dos sete dias da semana, a compensação do sábado e como saber se você tem horas extras semanais.
            </p>
          </header>

          <div className="prose prose-ink max-w-none text-ink-700 leading-relaxed space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                O Limite Constitucional de 44 Horas
              </h2>
              <p>
                O Artigo 7º, XIII da Constituição Federal fixa a jornada normal máxima em 8 horas diárias e 44 horas semanais. Existem duas formas clássicas de cumprir essa carga horária:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 text-xs sm:text-sm">
                  <strong className="text-ink-900 block mb-1">Com Sábado Trabalhado:</strong>
                  8 horas de segunda a sexta (40h) + 4 horas no sábado pela manhã = <strong>44 horas semanais</strong>.
                </div>
                <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 text-xs sm:text-sm">
                  <strong className="text-ink-900 block mb-1">Sem Sábado (Compensado):</strong>
                  8 horas e 48 minutos (8,8h) de segunda a sexta = <strong>44 horas semanais</strong> com sábado livre.
                </div>
              </div>
            </section>

            <section className="p-6 rounded-3xl bg-brand-50 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-ink-900 text-base mb-1">Some sua Semana Completa</h3>
                <p className="text-xs text-ink-600">Preencha cada dia com seus intervalos e totalize na hora.</p>
              </div>
              <Link href="/horas-semanais" className="btn-primary text-xs shrink-0 py-2.5 px-4 font-bold">
                Calculadora de Horas Semanais &rarr;
              </Link>
            </section>

            <footer className="pt-6 border-t border-surface-200 text-xs text-ink-500 space-y-1">
              <div className="flex items-center gap-1 font-semibold text-ink-700">
                <Scale className="w-3.5 h-3.5 text-brand-600" />
                <span>Base Legal: Artigo 7º, XIII da CF/88 e Artigo 58 da CLT.</span>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
