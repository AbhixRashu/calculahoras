import type { Metadata } from 'next';
import { ExcelFormulaGuide } from '@/components/calculator/ExcelFormulaGuide';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { FileSpreadsheet, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Calcular Horas no Excel e Google Planilhas | Fórmulas Prontas',
  description:
    'Aprenda as fórmulas exatas para somar horas no Excel e Google Sheets, turno noturno e formato [h]:mm para não zerar após 24 horas. Gratuito e prático.',
  keywords: [
    'calcular horas no excel',
    'fórmula somar horas excel',
    'calcular horas trabalhadas excel',
    'formato [h]:mm excel',
    'calcular horas google planilhas',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/calcular-horas-no-excel',
  },
  openGraph: {
    title: 'Como Calcular Horas no Excel e Planilhas | CalculaHoras',
    description:
      'Fórmulas prontas e infalíveis para somar horas no Excel, evitar o erro das 24h e converter para formato decimal.',
    url: 'https://calculahoras.online/calcular-horas-no-excel',
    type: 'website',
  },
};

const FAQS_EXCEL: FAQItemData[] = [
  {
    q: 'Qual a fórmula básica para calcular horas trabalhadas no Excel?',
    a: 'Se a entrada está na célula B2, o almoço na C2 e a saída na D2, a fórmula é: =(D2 - B2) - C2. Certifique-se de formatar a célula do resultado como hora (hh:mm).',
    example: '=(18:00 - 08:30) - 01:00 = 08:30 no formato hh:mm.',
  },
  {
    q: 'Por que o Excel zera a soma de horas quando passa de 24 horas?',
    a: 'Porque o formato padrão "hh:mm" mostra apenas a hora do dia (de 00:00 a 23:59). Para exibir o total acumulado acima de 24 horas (como 44h ou 180h), você deve formatar a célula como personalizável usando colchetes: [h]:mm.',
  },
  {
    q: 'Como calcular turno da noite que passa da meia-noite no Excel?',
    a: 'Utilize a função MOD (resto da divisão) para evitar erros de horário negativo quando a saída é menor que a entrada: =MOD(Saida - Entrada; 1) - Intervalo.',
    example: '=MOD("06:00" - "22:00"; 1) resulta em exatamente 8 horas.',
  },
  {
    q: 'Como converter horas do Excel para decimal para multiplicar pelo salário?',
    a: 'No Excel, 1 dia inteiro equivale ao número 1. Portanto, basta multiplicar a célula com a hora por 24 e formatar o resultado como número comum: =(Celula_Horas * 24).',
    example: '08:30 * 24 = 8,50 horas decimais. Em seguida multiplique pelo salário-hora: =8,50 * 25.',
  },
  {
    q: 'As fórmulas do Excel funcionam no Google Planilhas (Google Sheets)?',
    a: 'Sim. As fórmulas de subtração direta, a função MOD e a formatação [h]:mm funcionam com a mesma sintaxe tanto no Microsoft Excel quanto no Google Planilhas.',
  },
  {
    q: 'Como somar uma coluna inteira de horas no Excel?',
    a: 'Utilize a fórmula =SOMA(E2:E31) e formate a célula final como [h]:mm ou [hh]:mm para ver a soma total do mês sem que ela zere a cada 24 horas.',
  },
];

export default function CalcularHorasNoExcelPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Calcular Horas no Excel', item: 'https://calculahoras.online/calcular-horas-no-excel' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Guia de Fórmulas de Horas no Excel e Google Sheets',
          url: 'https://calculahoras.online/calcular-horas-no-excel',
          description:
            'Guia completo com fórmulas prontas para somar horas no Excel, turnos noturnos e formato [h]:mm.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Calcular Horas no Excel' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <FileSpreadsheet className="w-3.5 h-3.5 text-brand-600" />
              Excel & Google Sheets • Fórmulas Copiáveis
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Como Calcular Horas no Excel
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Aprenda as fórmulas exatas para somar horas trabalhadas, calcular turnos que passam da meia-noite e usar o formato <strong>[h]:mm</strong> para impedir que o total zere após 24 horas.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <ExcelFormulaGuide />
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre Fórmulas de Horas no Excel"
        subtitle="Perguntas frequentes sobre planilhas de ponto eletrônico:"
        faqs={FAQS_EXCEL}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/calcular-horas-no-excel"
        title="Calcule Online Sem Precisar de Planilhas"
        subtitle="Se preferir, utilize nossas calculadoras online gratuitas prontas para usar:"
      />
    </>
  );
}
