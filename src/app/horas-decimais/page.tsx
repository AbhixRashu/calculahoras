import type { Metadata } from 'next';
import { DecimalCalculator } from '@/components/calculator/DecimalCalculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { Calculator, Clock, Table, AlertTriangle, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Horas Decimais: Conversor de Horas e Minutos',
  description:
    'Converta horas e minutos (hh:mm) em horas decimais e vice-versa. Veja a tabela de conversão rápida (7h30 = 7,50h, 7h45 = 7,75h) e fórmulas para folha de pagamento.',
  keywords: [
    'horas decimais',
    'conversao de horas',
    'converter horas em decimal',
    'transformar minutos em horas decimais',
    'tabela de horas decimais',
    '7h30 em decimal',
    'horas centesimais',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/horas-decimais',
  },
  openGraph: {
    title: 'Horas Decimais: Conversor de Horas e Minutos | CalculaHoras',
    description:
      'Converta horas e minutos para o formato decimal exigido por softwares de folha de pagamento e contabilidade.',
    url: 'https://calculahoras.online/horas-decimais',
    type: 'website',
  },
};

const FAQS_HORAS_DECIMAIS: FAQItemData[] = [
  {
    q: 'O que são horas decimais e por que elas são usadas?',
    a: 'Horas decimais (ou horas centesimais) expressam frações de hora na base 100 em vez da base 60. Elas são obrigatórias em softwares de folha de pagamento, contabilidade e planilhas porque não é possível multiplicar minutos sexagesimais diretamente pelo valor em reais do salário-hora.',
    example: '8h 30min × R$ 20,00 não pode ser calculado como 8,30 × 20 (daria R$ 166,00 errado). Em formato decimal: 8,50 × R$ 20,00 = R$ 170,00 correto.',
  },
  {
    q: 'Qual a fórmula matemática para transformar minutos em decimal?',
    a: 'Para converter minutos em decimal, basta dividir a quantidade de minutos por 60 e somar às horas inteiras: Horas Decimais = Horas + (Minutos ÷ 60).',
    example: '8 horas e 15 minutos = 8 + (15 ÷ 60) = 8 + 0,25 = 8,25 horas decimais.',
  },
  {
    q: 'Quanto é 7 horas e 30 minutos em horas decimais?',
    a: '7 horas e 30 minutos equivalem a exatamente 7,50 horas decimais (ou 7,5h). Como 30 minutos é a metade de 60, 30 ÷ 60 = 0,50.',
  },
  {
    q: 'Quanto é 7 horas e 45 minutos em horas decimais?',
    a: '7 horas e 45 minutos equivalem a exatamente 7,75 horas decimais. 45 minutos dividido por 60 é igual a 0,75.',
  },
  {
    q: 'Como converter de volta de horas decimais para horas e minutos?',
    a: 'Mantenha a parte inteira como as horas. Pegue a parte decimal (após a vírgula) e multiplique por 60 para descobrir os minutos.',
    example: 'Para converter 8,75h: a parte inteira é 8 horas. Pegue 0,75 × 60 = 45 minutos. Resultado: 8h 45min.',
  },
  {
    q: 'Como lidar com dízimas periódicas como 20 minutos ou 40 minutos?',
    a: '20 minutos equivale a 20 ÷ 60 = 0,333... horas. Para fins de folha de pagamento, a convenção contábil padrão arredonda para 2 casas decimais: 0,33h. Já 40 minutos equivale a 40 ÷ 60 = 0,67h.',
  },
  {
    q: 'Qual é o valor decimal da jornada diária padrão de 8h48min da CLT?',
    a: '8 horas e 48 minutos equivalem a exatamente 8,80 horas decimais (48 ÷ 60 = 0,80). Multiplicando 8,8h por 5 dias na semana obtém-se exatamente as 44 horas semanais da CLT.',
  },
  {
    q: 'A calculadora aceita vírgula e ponto para decimais?',
    a: 'Sim. Nossa ferramenta aceita tanto o padrão brasileiro com vírgula (ex: 8,5) quanto o formato com ponto (ex: 8.5) para facilitar a digitação em qualquer teclado.',
  },
];

export default function HorasDecimaisPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Horas Decimais', item: 'https://calculahoras.online/horas-decimais' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Conversor de Horas Decimais Online',
          url: 'https://calculahoras.online/horas-decimais',
          description:
            'Converta horas e minutos em formato decimal para folha de pagamento e confira a tabela completa de minutos para decimal.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Horas Decimais' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5 text-brand-600" />
              Conversão Centesimal para Folha e RH
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Horas Decimais: Conversor de Horas e Minutos
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Converta horas e minutos (hh:mm) em formato decimal ou faça o caminho inverso. Essencial para multiplicar pelo <strong>salário-hora</strong> em cálculos de folha de pagamento e planilhas.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <DecimalCalculator />
          </div>
        </div>
      </section>

      {/* Guia Didático e Tabela de Equivalências */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Como Converter Horas e Minutos em Horas Decimais
            </h2>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              Como 1 hora contém 60 minutos, não se pode tratar os minutos como decimais diretos (por exemplo, 30 minutos não é 0,30, mas sim 0,50 de uma hora). A fórmula é:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-xs sm:text-sm text-brand-950">
                <strong>Horas:Minutos para Decimal:</strong><br />
                Decimal = Horas + (Minutos ÷ 60)
              </div>

              <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-xs sm:text-sm text-brand-950">
                <strong>Decimal para Horas:Minutos:</strong><br />
                Minutos = Parte Fracionária × 60
              </div>
            </div>
          </div>

          {/* Tabela de Conversão Rápida */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900 flex items-center gap-2">
              <Table className="w-5 h-5 text-brand-600" />
              Tabela de Conversão Rápida: Minutos para Horas Decimais
            </h3>
            <p className="text-xs sm:text-sm text-ink-600">
              Consulte os valores mais frequentes usados em cartões de ponto e holerites:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm bg-white rounded-2xl border border-surface-200 overflow-hidden">
                <thead className="bg-surface-100/80 text-ink-900 font-semibold border-b border-surface-200">
                  <tr>
                    <th className="p-3">Minutos</th>
                    <th className="p-3">Conta (÷ 60)</th>
                    <th className="p-3">Decimal</th>
                    <th className="p-3">Exemplo com 7 horas</th>
                    <th className="p-3">Exemplo com 8 horas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100 font-mono text-xs">
                  <tr>
                    <td className="p-3 font-semibold text-ink-900">05 min</td>
                    <td className="p-3 text-ink-500">5 ÷ 60</td>
                    <td className="p-3 font-bold text-brand-700">0,08 h</td>
                    <td className="p-3 text-ink-700">7h05 = 7,08h</td>
                    <td className="p-3 text-ink-700">8h05 = 8,08h</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink-900">10 min</td>
                    <td className="p-3 text-ink-500">10 ÷ 60</td>
                    <td className="p-3 font-bold text-brand-700">0,17 h</td>
                    <td className="p-3 text-ink-700">7h10 = 7,17h</td>
                    <td className="p-3 text-ink-700">8h10 = 8,17h</td>
                  </tr>
                  <tr className="bg-brand-50/40">
                    <td className="p-3 font-semibold text-brand-900">15 min</td>
                    <td className="p-3 text-brand-700">15 ÷ 60</td>
                    <td className="p-3 font-extrabold text-brand-800">0,25 h</td>
                    <td className="p-3 text-brand-900 font-bold">7h15 = 7,25h</td>
                    <td className="p-3 text-brand-900 font-bold">8h15 = 8,25h</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink-900">20 min</td>
                    <td className="p-3 text-ink-500">20 ÷ 60</td>
                    <td className="p-3 font-bold text-brand-700">0,33 h</td>
                    <td className="p-3 text-ink-700">7h20 = 7,33h</td>
                    <td className="p-3 text-ink-700">8h20 = 8,33h</td>
                  </tr>
                  <tr className="bg-brand-50/40">
                    <td className="p-3 font-semibold text-brand-900">30 min</td>
                    <td className="p-3 text-brand-700">30 ÷ 60</td>
                    <td className="p-3 font-extrabold text-brand-800">0,50 h</td>
                    <td className="p-3 text-brand-900 font-bold">7h30 = 7,50h</td>
                    <td className="p-3 text-brand-900 font-bold">8h30 = 8,50h</td>
                  </tr>
                  <tr className="bg-brand-50/40">
                    <td className="p-3 font-semibold text-brand-900">45 min</td>
                    <td className="p-3 text-brand-700">45 ÷ 60</td>
                    <td className="p-3 font-extrabold text-brand-800">0,75 h</td>
                    <td className="p-3 text-brand-900 font-bold">7h45 = 7,75h</td>
                    <td className="p-3 text-brand-900 font-bold">8h45 = 8,75h</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink-900">48 min</td>
                    <td className="p-3 text-ink-500">48 ÷ 60</td>
                    <td className="p-3 font-bold text-brand-700">0,80 h</td>
                    <td className="p-3 text-ink-700">7h48 = 7,80h</td>
                    <td className="p-3 text-ink-700 font-bold">8h48 = 8,80h (CLT)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Erro Fatal Comum */}
          <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              Erro Fatal: Multiplicar Minutos Diretamente pelo Salário
            </div>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Nunca digite 8h30min como 8,30 ao multiplicar pelo valor da sua hora. Se o seu salário-hora é R$ 20,00, calculando 8,30 × 20 você receberia R$ 166,00, perdendo R$ 4,00 por dia. O valor correto é <strong>8,50 × R$ 20,00 = R$ 170,00</strong>.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre Horas Decimais"
        subtitle="Perguntas frequentes sobre conversão centesimal e cálculo de folha:"
        faqs={FAQS_HORAS_DECIMAIS}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/horas-decimais"
        title="Calculadoras Relacionadas"
        subtitle="Outras ferramentas para facilitar suas contas de horas e minutos:"
      />
    </>
  );
}
