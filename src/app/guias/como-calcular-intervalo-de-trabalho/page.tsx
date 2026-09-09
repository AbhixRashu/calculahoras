import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { StructuredData } from '@/components/seo/StructuredData';
import { Coffee, Scale, ArrowRight, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Calcular o Intervalo de Trabalho (Art. 71 CLT): Guia Completo',
  description:
    'Aprenda as regras da CLT sobre o intervalo intrajornada para almoço e descanso: 15 minutos, 1 hora, redução para 30 min e indenização.',
  keywords: [
    'como calcular intervalo de trabalho',
    'intervalo intrajornada regras clt',
    'art 71 clt almoco',
  ],
  alternates: { canonical: 'https://calculahoras.online/guias/como-calcular-intervalo-de-trabalho' },
  openGraph: {
    title: 'Como Calcular o Intervalo de Trabalho | CalculaHoras',
    description: 'Guia completo sobre regras de almoço e descanso na CLT.',
    url: 'https://calculahoras.online/guias/como-calcular-intervalo-de-trabalho',
    type: 'article',
  },
};

export default function GuiaIntervaloDeTrabalho() {
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
            { '@type': 'ListItem', position: 3, name: 'Intervalo de Trabalho', item: 'https://calculahoras.online/guias/como-calcular-intervalo-de-trabalho' },
          ],
        }}
      />
      <StructuredData
        type="article"
        data={{
          headline: 'Como Calcular o Intervalo de Trabalho (Art. 71 CLT): Guia Completo',
          description: 'Aprenda as regras da CLT sobre o intervalo intrajornada para almoço e descanso conforme a CLT.',
          url: 'https://calculahoras.online/guias/como-calcular-intervalo-de-trabalho',
        }}
      />

      <article className="py-10 md:py-16 bg-white">
        <div className="container-app max-w-3xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Guias', href: '/guias' },
              { label: 'Intervalo de Trabalho' },
            ]}
          />

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Direito do Trabalho
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mt-3 mb-4">
              Como Calcular o Intervalo de Trabalho (Art. 71 CLT)
            </h1>
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed">
              Tudo o que você precisa saber sobre o intervalo para alimentação e descanso: obrigatoriedade, duração e consequências da supressão.
            </p>
          </header>

          <div className="prose prose-ink max-w-none text-ink-700 leading-relaxed space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight">
                Duração Exigida por Lei
              </h2>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm">
                <li><strong>Jornadas até 4 horas diárias:</strong> Não há intervalo obrigatório.</li>
                <li><strong>Jornadas de 4 a 6 horas diárias:</strong> Intervalo obrigatório de 15 minutos.</li>
                <li><strong>Jornadas superiores a 6 horas diárias:</strong> Intervalo obrigatório de no mínimo 1 hora e no máximo 2 horas.</li>
              </ul>
            </section>

            <section className="p-6 rounded-3xl bg-brand-50 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-ink-900 text-base mb-1">Verifique seu Intervalo</h3>
                <p className="text-xs text-ink-600">Calcule a duração exata da sua pausa e veja se cumpre a lei.</p>
              </div>
              <Link href="/calculadora-de-intervalo" className="btn-primary text-xs shrink-0 py-2.5 px-4 font-bold">
                Calculadora de Intervalo &rarr;
              </Link>
            </section>

            <footer className="pt-6 border-t border-surface-200 text-xs text-ink-500 space-y-1">
              <div className="flex items-center gap-1 font-semibold text-ink-700">
                <Scale className="w-3.5 h-3.5 text-brand-600" />
                <span>Base Legal: Artigo 71 do Decreto-Lei nº 5.452/1943 (CLT).</span>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
