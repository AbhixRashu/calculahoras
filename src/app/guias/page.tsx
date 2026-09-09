import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { StructuredData } from '@/components/seo/StructuredData';
import { BookOpen, Clock, TrendingUp, LogOut, Calculator, Calendar, Coffee, Moon, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Guias Educativos de Cálculo de Horas e CLT | CalculaHoras',
  description:
    'Aprenda o passo a passo de como calcular horas trabalhadas, horas extras, intervalos, hora de saída, horas decimais e turno noturno conforme a CLT.',
  keywords: [
    'guias de cálculo de horas',
    'como calcular horas trabalhadas guia',
    'como calcular horas extras guia',
    'regras clt calculo de ponto',
    'aprender calcular horas',
  ],
  alternates: { canonical: 'https://calculahoras.online/guias' },
  openGraph: {
    title: 'Central de Guias de Cálculo de Horas | CalculaHoras',
    description: 'Aprenda como calcular horas trabalhadas, horas extras, intervalos e turno noturno com fórmulas e exemplos.',
    url: 'https://calculahoras.online/guias',
    type: 'website',
  },
};

const guidesList = [
  {
    href: '/guias/como-calcular-horas-trabalhadas',
    title: 'Como Calcular Horas Trabalhadas Diárias',
    desc: 'Passo a passo completo com fórmula matemática, desconto de almoço e exemplos práticos com minutos e formato decimal.',
    calcHref: '/horas-trabalhadas',
    calcLabel: 'Calculadora Diária',
    icon: Clock,
    badge: 'Mais Acessado',
  },
  {
    href: '/guias/como-calcular-horas-extras',
    title: 'Como Calcular Horas Extras a 50% e 100%',
    desc: 'Entenda como calcular o valor da sua hora normal, aplicar os percentuais de acréscimo e calcular o reflexo obrigatório no DSR.',
    calcHref: '/horas-extras',
    calcLabel: 'Calculadora de Extras',
    icon: TrendingUp,
    badge: 'Art. 59 CLT',
  },
  {
    href: '/guias/como-calcular-hora-de-saida',
    title: 'Como Calcular a Hora Exata de Saída',
    desc: 'Aprenda a somar a entrada, a jornada diária e o intervalo para saber o momento exato de bater o ponto sem fazer horas extras.',
    calcHref: '/hora-de-saida',
    calcLabel: 'Calculadora de Saída',
    icon: LogOut,
  },
  {
    href: '/guias/como-calcular-horas-em-decimal',
    title: 'Como Converter Horas em Decimal (7h30 = 7,50h)',
    desc: 'Descubra por que 30 minutos não é 0,30h e aprenda a converter qualquer fração de tempo para cálculo de salário e folha.',
    calcHref: '/horas-decimais',
    calcLabel: 'Conversor Decimal',
    icon: Calculator,
    badge: 'RH e Folha',
  },
  {
    href: '/guias/como-calcular-horas-semanais',
    title: 'Como Calcular Horas Semanais (44h CLT)',
    desc: 'Como somar os 7 dias da semana, como funciona a compensação do sábado (8h48/dia) e apuração de banco de horas.',
    calcHref: '/horas-semanais',
    calcLabel: 'Calculadora Semanal',
    icon: Calendar,
  },
  {
    href: '/guias/como-calcular-intervalo-de-trabalho',
    title: 'Como Calcular o Intervalo de Almoço (Art. 71 CLT)',
    desc: 'Regras da CLT para intervalos de 15 minutos e 1 hora, redução para 30 minutos e indenização por intervalo suprimido.',
    calcHref: '/calculadora-de-intervalo',
    calcLabel: 'Calculadora de Intervalo',
    icon: Coffee,
  },
  {
    href: '/guias/como-calcular-turno-noturno',
    title: 'Como Calcular Turno Noturno e Adicional de 20%',
    desc: 'Como funciona a hora ficta reduzida de 52min30s, a virada da meia-noite e a prorrogação noturna após as 05:00.',
    calcHref: '/turno-noturno',
    calcLabel: 'Calculadora Noturna',
    icon: Moon,
    badge: 'Art. 73 CLT',
  },
];

export default function GuiasHubPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Guias Educativos', item: 'https://calculahoras.online/guias' },
          ],
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Guias Educativos' }]} />

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-brand-600" />
              Central Educativa de Ponto e Legislação CLT
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Guias de Cálculo de Horas
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Tutoriais práticos, passo a passo, fórmulas matemáticas e legislação oficial para você dominar todos os cálculos de jornada de trabalho no Brasil.
            </p>
          </div>

          <div className="space-y-4">
            {guidesList.map((guide) => {
              const Icon = guide.icon;
              return (
                <div
                  key={guide.href}
                  className="p-6 rounded-3xl bg-white border border-surface-200 hover:border-brand-300 hover:shadow-md transition-all duration-200 group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Link href={guide.href}>
                          <h2 className="text-lg font-bold text-ink-900 group-hover:text-brand-700 transition-colors">
                            {guide.title}
                          </h2>
                        </Link>
                        {guide.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-100 text-brand-800">
                            {guide.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-ink-500 leading-relaxed max-w-xl">
                        {guide.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-surface-100">
                    <Link
                      href={guide.calcHref}
                      className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-surface-100 hover:bg-brand-50 text-ink-700 hover:text-brand-800 transition-colors"
                    >
                      {guide.calcLabel}
                    </Link>
                    <Link
                      href={guide.href}
                      className="text-xs font-bold text-brand-700 group-hover:text-brand-800 inline-flex items-center gap-1"
                    >
                      <span>Ler guia</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
