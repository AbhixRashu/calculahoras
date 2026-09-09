import type { Metadata } from 'next';
import { ExcelFormulaGuide } from '@/components/calculator/ExcelFormulaGuide';
import { StructuredData } from '@/components/seo/StructuredData';
import { FAQSection } from '@/components/sections/FAQSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Como Calcular Horas no Excel e Google Planilhas (Fórmulas e Modelo Grátis)',
  description:
    'Aprenda as fórmulas exatas para somar horas no Excel e Google Sheets, incluindo turno da noite e como evitar que o total zere após 24 horas. Baixe a planilha grátis.',
  keywords: [
    'calcular horas no excel',
    'fórmula somar horas excel',
    'calcular horas trabalhadas excel',
    'horas excel turno da noite',
    'planilha de horas trabalhadas',
    'formato [h]:mm excel',
    'calcular horas google planilhas',
  ],
  alternates: {
    canonical: '/calcular-horas-no-excel',
  },
  openGraph: {
    title: 'Como Calcular Horas no Excel e Planilhas | CalculaHoras',
    description:
      'Fórmulas prontas e infalíveis para somar horas no Excel, evitar o erro das 24h e converter para formato decimal.',
    url: 'https://calculahoras.online/calcular-horas-no-excel',
  },
};

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

      <section className="py-12 md:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-4">
              <span>📊 Guia Prático + Fórmulas Copiáveis</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink-900 tracking-tight mb-4">
              Como Calcular Horas no Excel e Google Planilhas
            </h1>
            <p className="text-ink-600 text-lg leading-relaxed max-w-2xl mx-auto">
              As fórmulas exatas para somar horas trabalhadas, calcular turnos noturnos
              e o formato de célula que impede que o total se reinicie ao passar de 24 horas.
            </p>
          </div>

          <ExcelFormulaGuide />

          {/* Artigo Didático Completo para SEO */}
          <div className="max-w-3xl mx-auto mt-16 space-y-10 text-ink-700 leading-relaxed">
            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                1. O Maior Erro: Por que a soma de horas zera após 24h no Excel?
              </h2>
              <p>
                Por padrão, quando você aplica o formato de hora tradicional <code>hh:mm</code> em uma célula,
                o Excel interpreta que você está informando uma hora do dia (um relógio que vai de 00:00 a 23:59).
                Ao ultrapassar 24 horas (como em uma semana de 40h ou 44h), o relógio dá uma volta completa e recomeça do zero!
              </p>
              <div className="p-4 bg-emerald-50 border-l-4 border-brand-500 rounded-r-xl">
                <p className="font-semibold text-brand-900 text-sm">A Solução Definitiva:</p>
                <p className="text-brand-800 text-sm mt-1">
                  Selecione a célula do total, clique com o botão direito em <strong>Formatar Células &gt; Personalizado</strong> e digite:
                  <code className="font-bold bg-white px-2 py-0.5 rounded ml-1 border border-brand-200">[h]:mm</code>.
                  Os colchetes <code>[ ]</code> dizem ao Excel para acumular as horas indefinidamente.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                2. Como calcular Turno Noturno sem dar erro no Excel
              </h2>
              <p>
                Se um funcionário entra às <strong>22:00</strong> e sai às <strong>06:00</strong> do dia seguinte, uma subtração simples
                como <code>=06:00 - 22:00</code> resultará em um número negativo, exibindo o temido erro <code>######</code> no Excel.
              </p>
              <p>
                Para resolver isso sem precisar colocar datas completas, use a função <code>MOD</code> (ou <code>RESTO</code> dependendo da versão):
              </p>
              <div className="bg-ink-900 text-emerald-400 p-4 rounded-xl font-mono text-sm">
                =MOD(Hora_Saida - Hora_Entrada; 1) - Intervalo
              </div>
              <p className="text-sm text-ink-500">
                Essa fórmula matemática garante que, se a saída for menor que a entrada (mudança de data), o Excel adicionará 1 dia (24h) automaticamente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-200/80 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">
                3. Converter Horas e Minutos para Formato Decimal
              </h2>
              <p>
                Para calcular salários ou horas extras no Excel, você não pode multiplicar uma célula de horas diretamente pelo valor da hora,
                porque 08:30 no relógio representa 8 horas e meia (8,50 no sistema numérico).
              </p>
              <p>
                A fórmula de conversão decimal é simplesmente multiplicar a célula de horas por 24:
              </p>
              <div className="bg-ink-900 text-emerald-400 p-4 rounded-xl font-mono text-sm">
                =(Celula_Horas * 24)
              </div>
              <p className="text-sm text-ink-500">
                Lembre-se de colocar a célula resultante no formato &quot;Número&quot; com 2 casas decimais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas Relacionadas */}
      <section className="py-12 bg-surface-50 border-t border-surface-200/80">
        <div className="container-app max-w-3xl">
          <h2 className="text-2xl font-bold text-ink-900 mb-6">
            Calcule online sem precisar do Excel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/horas-trabalhadas"
              className="p-5 rounded-2xl bg-white border border-surface-200 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-ink-900">Calculadora de Horas Trabalhadas</h3>
              <p className="text-xs text-ink-500 mt-1">Cálculo diário automático com intervalo em horas e minutos</p>
            </Link>
            <Link
              href="/horas-semanais"
              className="p-5 rounded-2xl bg-white border border-surface-200 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-ink-900">Calculadora de Horas Semanais</h3>
              <p className="text-xs text-ink-500 mt-1">Folha de ponto completa de Segunda a Domingo com PDF</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
