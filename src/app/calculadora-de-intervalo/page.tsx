import type { Metadata } from 'next';
import { IntervalCalculator } from '@/components/calculator/IntervalCalculator';
import { StructuredData } from '@/components/seo/StructuredData';
import { FAQSection } from '@/components/sections/FAQSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Intervalo de Almoço e Descanso (Art. 71 CLT) | CalculaHoras',
  description:
    'Calcule a duração exata do seu intervalo de almoço e descanso em horas e minutos. Veja se seu intervalo está conforme as regras do Art. 71 da CLT.',
  keywords: [
    'calculadora de intervalo de trabalho',
    'calculadora de almoço clt',
    'intervalo intrajornada clt',
    'art 71 clt intervalo',
    'calcular horario de almoço',
    'intervalo de 15 minutos clt',
    'redução de intervalo 30 minutos',
  ],
  alternates: {
    canonical: '/calculadora-de-intervalo',
  },
  openGraph: {
    title: 'Calculadora de Intervalo de Almoço | CalculaHoras',
    description:
      'Calcule a duração exata do seu almoço ou descanso em horas e minutos com análise automática do Art. 71 da CLT.',
    url: 'https://calculahoras.online/calculadora-de-intervalo',
  },
};

export default function IntervaloPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Intervalo de Trabalho', item: 'https://calculahoras.online/calculadora-de-intervalo' },
          ],
        }}
      />

      <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-4">
              <span>☕ Intervalo Intrajornada • Art. 71 CLT</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              Calculadora de Intervalo de Almoço e Descanso
            </h1>
            <p className="text-ink-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Informe os horários de saída e retorno do seu intervalo ou digite diretamente em horas e minutos.
              Verifique automaticamente se seu período de descanso cumpre as exigências da CLT.
            </p>
          </div>

          <IntervalCalculator />

          {/* Guia Didático sobre Intervalos na CLT */}
          <div className="max-w-3xl mx-auto mt-16 space-y-8 text-ink-700 leading-relaxed">
            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                O que diz a CLT sobre o Intervalo de Almoço (Artigo 71)?
              </h2>
              <p>
                A legislação trabalhista brasileira (CLT) determina regras claras sobre o intervalo intrajornada (descanso e alimentação):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <h3 className="font-bold text-ink-900 text-sm">Jornada Superior a 6 Horas</h3>
                  <p className="text-xs text-ink-600 mt-1">
                    Obrigatório no mínimo <strong>1 hora</strong> e no máximo <strong>2 horas</strong> de intervalo.
                  </p>
                </div>
                <div className="p-4 bg-surface-50 border border-surface-200 rounded-xl">
                  <h3 className="font-bold text-ink-900 text-sm">Jornada de 4 a 6 Horas</h3>
                  <p className="text-xs text-ink-600 mt-1">
                    Obrigatório um intervalo de no mínimo <strong>15 minutos</strong>.
                  </p>
                </div>
              </div>
              <p className="text-xs text-ink-500 pt-2">
                * Para jornadas inferiores a 4 horas diárias, a lei não exige intervalo obrigatório.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                O intervalo de almoço conta como hora trabalhada?
              </h2>
              <p>
                Não. O período de almoço e descanso não é computado na jornada diária de trabalho (não é remunerado).
                Por essa razão, quem cumpre 8 horas diárias com 1 hora de almoço permanece <strong>9 horas no total</strong> dentro da empresa (por exemplo, das 08:00 às 17:00).
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                O que acontece se a empresa não conceder o intervalo?
              </h2>
              <p>
                Conforme o § 4º do Art. 71 da CLT (com redação dada pela Reforma Trabalhista), a não concessão ou concessão parcial do intervalo mínimo implica o pagamento indenizatório apenas do período suprimido, com acréscimo de <strong>50% sobre o valor da hora normal</strong>.
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
              <p className="text-xs text-ink-500 mt-1">Calcule sua jornada diária com entrada, saída e almoço</p>
            </Link>
            <Link
              href="/hora-de-saida"
              className="p-5 rounded-2xl bg-white border border-surface-200 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-ink-900">Calculadora de Hora de Saída</h3>
              <p className="text-xs text-ink-500 mt-1">Descubra a que horas sair para cumprir a jornada com intervalo</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
