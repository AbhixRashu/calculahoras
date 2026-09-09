import type { Metadata } from 'next';
import { DepartureCalculator } from '@/components/calculator/DepartureCalculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import { LogOut, Clock, Coffee, AlertTriangle, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calculadora de Hora de Saída | Descubra seu Horário',
  description:
    'Calcule a hora exata de bater o ponto de saída do trabalho. Informe horário de entrada, tempo de almoço e jornada contratual. 100% gratuito e online.',
  keywords: [
    'calculadora de hora de saída',
    'hora de saida do trabalho',
    'calcular hora de saida',
    'que horas posso sair do trabalho',
    'calcular horario de saida',
    'hora exata de saida clt',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/hora-de-saida',
  },
  openGraph: {
    title: 'Calculadora de Hora de Saída | CalculaHoras',
    description:
      'Descubra a hora exata em que você deve registrar sua saída para cumprir sua jornada sem dever horas.',
    url: 'https://calculahoras.online/hora-de-saida',
    type: 'website',
  },
};

const FAQS_HORA_DE_SAIDA: FAQItemData[] = [
  {
    q: 'Como calcular a que horas devo sair do trabalho?',
    a: 'Para descobrir o horário exato de saída, some ao seu horário de entrada a quantidade de horas que você precisa trabalhar no dia mais o tempo do seu intervalo de almoço.',
    example: 'Entrada às 08:00 + 8 horas de jornada + 1 hora de almoço = Saída programada para as 17:00 em ponto.',
  },
  {
    q: 'O tempo de almoço atrasa minha hora de saída?',
    a: 'Sim. Pelo Artigo 71, § 2º da CLT, os intervalos de alimentação e repouso não contam como jornada de trabalho. Portanto, se você fizer 1h30 de almoço em vez de 1h, sua hora de saída será adiada em 30 minutos para cumprir a mesma carga horária.',
  },
  {
    q: 'Qual é a tolerância no horário de saída pela CLT?',
    a: 'O Artigo 58, § 1º da CLT permite uma variação de até 5 minutos por registro de ponto, sem ultrapassar o teto diário de 10 minutos somando entrada e saída. Variações dentro desse limite não são descontadas nem geram horas extras.',
  },
  {
    q: 'Posso sair mais cedo se não fizer o intervalo de almoço?',
    a: 'Não é permitido por lei. O Artigo 71 da CLT obriga a concessão de no mínimo 1 hora de intervalo para jornadas superiores a 6 horas diárias. Trabalhar sem almoço para sair mais cedo viola a norma de segurança e saúde do trabalho, gerando multa para a empresa.',
  },
  {
    q: 'Como planejar a hora de saída em jornada de 6 horas?',
    a: 'Para jornadas de 6 horas diárias (como atendimento ou telemarketing), a CLT exige intervalo obrigatório de 15 minutos (Art. 71, § 1º). Assim, sua permanência será de 6h15min.',
    example: 'Entrada às 07:00 + 6h de trabalho + 15 min de intervalo = Saída prevista para 13:15.',
  },
  {
    q: 'E se eu tiver que fazer horas extras, a que horas saio?',
    a: 'Basta somar as horas extras desejadas à sua hora regular de saída. Lembre-se que o limite legal máximo do Artigo 59 da CLT é de 2 horas extras por dia.',
    example: 'Saída normal às 17:00 + 1h30min de hora extra autorizada = Saída às 18:30.',
  },
  {
    q: 'Como funciona para quem faz horário flexível?',
    a: 'Em empresas com banco de horas ou jornada flexível, basta registrar a entrada real e adicionar a meta diária (por exemplo, 8 horas) mais o tempo gasto no almoço para encontrar a hora de bater o ponto.',
  },
  {
    q: 'A calculadora de hora de saída armazena meus dados?',
    a: 'Não. O processamento é realizado instantaneamente no seu navegador, sem envio de dados ou necessidade de login.',
  },
];

export default function HoraDeSaidaPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Calculadora de Hora de Saída', item: 'https://calculahoras.online/hora-de-saida' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Calculadora de Hora de Saída',
          url: 'https://calculahoras.online/hora-de-saida',
          description:
            'Descubra a que horas sair do trabalho somando horário de entrada, jornada e intervalo.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Hora de Saída' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <LogOut className="w-3.5 h-3.5 text-brand-600" />
              Previsão Exata de Fim de Expediente
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Calculadora de Hora de Saída
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Descubra a que horas você deve registrar sua saída do trabalho. Informe seu horário de entrada, a jornada diária prevista e a duração do seu intervalo de almoço.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <DepartureCalculator />
          </div>
        </div>
      </section>

      {/* Guia Didático e Exemplos Práticos */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Como Funciona a Conta da Hora de Saída
            </h2>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              Para nunca dever horas ao banco de horas e nem ultrapassar a jornada sem autorização da chefia, a conta é puramente aditiva:
            </p>

            <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-sm text-brand-950">
              <strong>Fórmula:</strong> Hora de Saída = Hora de Entrada + Carga Horária Normal + Duração do Intervalo
            </div>
          </div>

          {/* 3 Exemplos Reais Detalhados */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
              Exemplos Práticos de Cálculo de Hora de Saída
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                    Exemplo 1
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Jornada Padrão de 8 Horas
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Entrada: 08:00</li>
                    <li>• Jornada: 08:00</li>
                    <li>• Almoço: 01:00 (1h)</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      08:00 + 8h + 1h = 17:00 em ponto.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-brand-800">
                  Hora de Saída: 17:00
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                    Exemplo 2
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Almoço Estendido de 1h30min
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Entrada: 08:30</li>
                    <li>• Jornada: 08:00</li>
                    <li>• Almoço: 01:30 (1h30)</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      08:30 + 8h + 1h30 = 18:00.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-teal-800">
                  Hora de Saída: 18:00
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Exemplo 3
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Jornada de 6 Horas (+15m)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Entrada: 07:00</li>
                    <li>• Jornada: 06:00</li>
                    <li>• Intervalo: 15 min</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      07:00 + 6h + 15min = 13:15.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-amber-800">
                  Hora de Saída: 13:15
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              Atenção às Regras de Intervalo (Art. 71 CLT)
            </div>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Não tente &quot;engolir&quot; o almoço para sair mais cedo se sua jornada for superior a 6 horas diárias. A concessão do intervalo é obrigatória pela CLT e visa preservar a saúde física e mental do trabalhador.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ
        title="Dúvidas sobre a Hora de Saída"
        subtitle="Perguntas frequentes sobre término de jornada e intervalos:"
        faqs={FAQS_HORA_DE_SAIDA}
        includeSchema={true}
      />

      <RelatedCalculators
        currentPath="/hora-de-saida"
        title="Calculadoras Relacionadas"
        subtitle="Ferramentas para calcular o restante do seu espelho de ponto:"
      />
    </>
  );
}
