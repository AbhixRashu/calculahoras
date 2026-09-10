import type { Metadata } from 'next';
import { Calculator } from '@/components/calculator/Calculator';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { StructuredData } from '@/components/seo/StructuredData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Horas Online | CalculaHoras',
  description:
    'Calcule horas trabalhadas, horas extras, intervalos e hora de saída gratuitamente.',
  alternates: {
    canonical: 'https://calculahoras.online/calculadora-de-horas',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CalculadoraDeHorasPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Calculadora de Horas', item: 'https://calculahoras.online/calculadora-de-horas' },
          ],
        }}
      />

      <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container-app">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">
              Calculadora de Horas
            </h1>
            <p className="text-ink-500 leading-relaxed">
              Calcule horas trabalhadas, horas extras, intervalos e hora de saída de forma rápida e gratuita.
            </p>
          </div>

          <Calculator />

          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-ink-900 mb-4">
              Como usar a calculadora
            </h2>
            <div className="prose prose-ink max-w-none text-ink-600 space-y-4">
              <p>
                1. Informe o horário de entrada
              </p>
              <p>
                2. Informe o horário de saída
              </p>
              <p>
                3. Informe o intervalo (pausa)
              </p>
              <p>
                4. Ajuste a jornada normal se necessário (padrão: 8h)
              </p>
              <p>
                5. Clique em &quot;Calcular horas&quot; e veja o resultado
              </p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />

      <section className="py-12 bg-white">
        <div className="container-app max-w-2xl">
          <h2 className="text-2xl font-bold text-ink-900 mb-6">
            Outras ferramentas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/horas-trabalhadas" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
              <h3 className="font-semibold text-ink-900">Horas Trabalhadas</h3>
              <p className="text-sm text-ink-500 mt-1">Total de horas do dia</p>
            </Link>
            <Link href="/horas-extras" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
              <h3 className="font-semibold text-ink-900">Horas Extras</h3>
              <p className="text-sm text-ink-500 mt-1">Calcule suas horas extras</p>
            </Link>
            <Link href="/hora-de-saida" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
              <h3 className="font-semibold text-ink-900">Hora de Saída</h3>
              <p className="text-sm text-ink-500 mt-1">Descubra quando sair</p>
            </Link>
            <Link href="/horas-semanais" className="p-4 rounded-xl border border-surface-200 hover:border-brand-300 transition-colors">
              <h3 className="font-semibold text-ink-900">Horas Semanais</h3>
              <p className="text-sm text-ink-500 mt-1">Totalize sua semana</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
