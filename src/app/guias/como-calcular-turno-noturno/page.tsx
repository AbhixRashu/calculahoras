import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { StructuredData } from '@/components/seo/StructuredData';
import { Moon, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Calcular Turno Noturno e Adicional de 20%: Guia Prático CLT',
  description:
    'Aprenda como funciona o cálculo do trabalho noturno: hora ficta de 52min30s, adicional de 20% (Art. 73 CLT) e prorrogação de jornada (Súmula 60 TST).',
  keywords: [
    'como calcular turno noturno',
    'adicional noturno como calcular',
    'hora noturna reduzida 52min30s',
    'calculo turno da noite clt',
  ],
  alternates: { canonical: 'https://calculahoras.online/guias/como-calcular-turno-noturno' },
  openGraph: {
    title: 'Como Calcular Turno Noturno | CalculaHoras',
    description: 'Guia completo sobre hora ficta noturna e adicional de 20% na CLT.',
    url: 'https://calculahoras.online/guias/como-calcular-turno-noturno',
    type: 'article',
  },
};

export default function GuiaTurnoNoturno() {
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
            { '@type': 'ListItem', position: 3, name: 'Turno Noturno', item: 'https://calculahoras.online/guias/como-calcular-turno-noturno' },
          ],
        }}
      />
      <StructuredData
        type="article"
        data={{
          headline: 'Como Calcular Turno Noturno e Adicional de 20%: Guia Prático CLT',
          description: 'Aprenda como funciona o cálculo do trabalho noturno com hora ficta de 52min30s e adicional de 20% na CLT.',
          url: 'https://calculahoras.online/guias/como-calcular-turno-noturno',
        }}
      />

      <article className="py-10 md:py-16 bg-white">
        <div className="container-app max-w-3xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Guias', href: '/guias' },
              { label: 'Turno Noturno' },
            ]}
          />

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Trabalho Noturno
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mt-3 mb-4">
              Como Calcular Turno Noturno e Adicional
            </h1>
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed">
              Descubra como aplicar a hora reduzida de 52 minutos e 30 segundos e o adicional de 20% para jornadas das 22h às 05h.
            </p>
          </header>

          <div className="prose prose-ink max-w-none text-ink-700 leading-relaxed space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                As Duas Vantagens Legais da Noite (Art. 73 CLT)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 text-xs sm:text-sm">
                  <strong className="text-brand-900 block mb-1">Hora Ficta de 52m30s</strong>
                  7 horas no relógio entre 22h e 05h equivalem a <strong>8 horas trabalhadas</strong> para pagamento.
                </div>
                <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 text-xs sm:text-sm">
                  <strong className="text-amber-900 block mb-1">Adicional Mínimo de 20%</strong>
                  Acréscimo monetário de no mínimo 20% sobre o valor da hora normal diurna.
                </div>
              </div>
            </section>

            <section className="p-6 rounded-3xl bg-brand-50 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-ink-900 text-base mb-1">Calcule seu Turno Noturno</h3>
                <p className="text-xs text-ink-600">Simule horas fictas e adicional noturno com precisão.</p>
              </div>
              <Link href="/turno-noturno" className="btn-primary text-xs shrink-0 py-2.5 px-4 font-bold">
                Calculadora de Turno Noturno &rarr;
              </Link>
            </section>

            <footer className="pt-6 border-t border-surface-200 text-xs text-ink-500 space-y-1">
              <div className="flex items-center gap-1 font-semibold text-ink-700">
                <Scale className="w-3.5 h-3.5 text-brand-600" />
                <span>Base Legal: Artigo 73 do Decreto-Lei nº 5.452/1943 (CLT) e Súmula 60 do TST.</span>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
