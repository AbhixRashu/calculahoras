import type { Metadata } from 'next';
import { Calculator } from '@/components/calculator/Calculator';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageFAQ, FAQItemData } from '@/components/sections/PageFAQ';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { StructuredData } from '@/components/seo/StructuredData';
import Link from 'next/link';
import { CheckCircle2, AlertTriangle, Scale, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calculadora de Horas Trabalhadas | Calcule Online Grátis',
  description:
    'Calcule suas horas trabalhadas online grátis. Informe entrada, saída e intervalo de almoço e veja o total exato em horas, minutos e formato decimal para folha.',
  keywords: [
    'calculadora de horas trabalhadas',
    'calculadora de horas trabalhadas online grátis',
    'calcular horas trabalhadas',
    'calcular horas de trabalho',
    'calculo de horas trabalhadas',
    'calcular ponto online',
  ],
  alternates: {
    canonical: 'https://calculahoras.online/horas-trabalhadas',
  },
  openGraph: {
    title: 'Calculadora de Horas Trabalhadas | CalculaHoras',
    description:
      'Calcule suas horas trabalhadas diárias de forma rápida, precisa e gratuita sem necessidade de cadastro.',
    url: 'https://calculahoras.online/horas-trabalhadas',
    type: 'website',
  },
};

const FAQS_HORAS_TRABALHADAS: FAQItemData[] = [
  {
    q: 'Como calcular horas trabalhadas diárias com almoço?',
    a: 'Para calcular as horas trabalhadas, pegue o horário de saída, subtraia o horário de entrada e desconte a duração do almoço ou intervalo intrajornada.',
    example: 'Entrada às 08:30, saída às 18:00 com 1h de almoço: 18:00 − 08:30 = 9h 30min de permanência. Descontando 1h de refeição: 9h 30min − 1h = 8h 30min trabalhadas (8,50 horas decimais).',
  },
  {
    q: 'A calculadora de horas trabalhadas é realmente gratuita e online?',
    a: 'Sim. A ferramenta funciona 100% online e de forma totalmente gratuita. Não exigimos cadastro, e-mail, cartão ou download de aplicativo.',
  },
  {
    q: 'O intervalo de refeição conta como hora trabalhada?',
    a: 'Não. Pelo Artigo 71, § 2º da CLT, os intervalos de descanso e alimentação não são computados na duração da jornada de trabalho e devem sempre ser descontados do tempo total de permanência.',
  },
  {
    q: 'Como calcular dois turnos de trabalho no mesmo dia?',
    a: 'Calcule as horas do primeiro turno (saída da manhã menos entrada da manhã), calcule o segundo turno (saída da tarde menos retorno do almoço) e some os dois períodos.',
    example: 'Manhã: 08:00 às 12:00 (4h). Tarde: 13:00 às 17:30 (4h30min). Total do dia: 4h + 4h30min = 8h 30min trabalhadas.',
  },
  {
    q: 'O que diz a CLT sobre a tolerância de minutos no ponto?',
    a: 'Conforme o Artigo 58, § 1º da CLT, não serão descontadas nem computadas como horas extras as variações de horário no registro de ponto que não excedam 5 minutos em cada marcação, observado o limite máximo de 10 minutos diários.',
    example: 'Entrar 4 minutos antes e sair 5 minutos depois soma 9 minutos no dia: não há horas extras nem descontos.',
  },
  {
    q: 'Como transformar o resultado de horas trabalhadas em decimal para o salário?',
    a: 'Para converter horas e minutos em decimal, divida os minutos por 60 e some às horas inteiras. Essa conversão é obrigatória para multiplicar pelo salário-hora.',
    example: '8 horas e 15 minutos = 8 + (15 ÷ 60) = 8,25 horas decimais.',
  },
  {
    q: 'Como calcular horas se meu turno passar da meia-noite?',
    a: 'Quando o expediente termina no dia seguinte, some 24 horas ao horário de saída antes de subtrair o horário de entrada.',
    example: 'Entrando às 21:00 e saindo às 05:00: 05:00 + 24:00 = 29:00. 29:00 − 21:00 = 8 horas brutas.',
  },
  {
    q: 'Qual é o limite máximo de horas diárias permitidas pela CLT?',
    a: 'A jornada padrão é de 8 horas diárias e 44 horas semanais (Art. 58 CLT). O Artigo 59 permite no máximo 2 horas extras por dia mediante acordo ou convenção coletiva, totalizando 10 horas diárias.',
  },
  {
    q: 'Meus horários e anotações de ponto ficam salvos no site?',
    a: 'Não. Os cálculos ocorrem 100% no navegador do seu celular ou computador. Nada é enviado para servidores remotos, garantindo sua total privacidade.',
  },
  {
    q: 'Posso imprimir ou salvar meu espelho de horas em PDF?',
    a: 'Sim. Você pode clicar no botão de copiar resumo ou imprimir para salvar diretamente o relatório detalhado em PDF.',
  },
];

export default function HorasTrabalhadasPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://calculahoras.online' },
            { '@type': 'ListItem', position: 2, name: 'Calculadora de Horas Trabalhadas', item: 'https://calculahoras.online/horas-trabalhadas' },
          ],
        }}
      />
      <StructuredData
        type="webapp"
        data={{
          name: 'Calculadora de Horas Trabalhadas Online Grátis',
          url: 'https://calculahoras.online/horas-trabalhadas',
          description:
            'Ferramenta gratuita para calcular horas trabalhadas diárias, intervalos de almoço e horas extras conforme a CLT.',
        }}
      />

      <section className="py-10 md:py-16 bg-gradient-to-b from-brand-50/60 via-white to-surface-50/50">
        <div className="container-app max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Calculadoras', href: '/' },
              { label: 'Calculadora de Horas Trabalhadas' },
            ]}
          />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              100% Gratuita • Sem Cadastro • Regras CLT
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
              Calculadora de Horas Trabalhadas
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ink-600 leading-relaxed">
              Nossa <strong>calculadora de horas trabalhadas online grátis</strong> foi criada para trabalhadores, autônomos e profissionais de RH calcularem com precisão a jornada líquida diária, descontando o almoço e apurando horas extras instantaneamente.
            </p>
          </div>

          {/* Calculator Component */}
          <div className="bg-white rounded-3xl border border-surface-200 shadow-sm p-4 sm:p-6 md:p-8">
            <Calculator />
          </div>

          {/* Features Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            <div className="p-4 rounded-2xl bg-white border border-surface-200/90 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-ink-900">Horas e Minutos</h4>
                <p className="text-[11px] text-ink-500">Sem conversões confusas</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-surface-200/90 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-ink-900">Sem Cadastro</h4>
                <p className="text-[11px] text-ink-500">Privacidade 100% no navegador</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-surface-200/90 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-ink-900">Padrão CLT</h4>
                <p className="text-[11px] text-ink-500">Art. 58 e 71 respeitados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guia Didático e Exemplos Práticos */}
      <section className="py-12 md:py-16 bg-white border-t border-surface-200">
        <div className="container-app max-w-4xl mx-auto px-4 space-y-12">
          {/* Como Funciona a Conta */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Como Calcular Horas Trabalhadas: Fórmula e Regras
            </h2>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              O cálculo de horas trabalhadas consiste em medir o tempo transcorrido entre a entrada e a saída do empregado e subtrair o período em que ele esteve em repouso ou alimentação (intervalo intrajornada).
            </p>

            <div className="p-4 rounded-2xl bg-surface-50 border border-surface-200 font-mono text-sm text-brand-950">
              <strong>Fórmula Matemática:</strong> Horas Trabalhadas = (Saída − Entrada) − Tempo de Intervalo
            </div>
          </div>

          {/* 3 Exemplos Reais Detalhados */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
              Exemplos Reais de Cálculo de Ponto
            </h3>
            <p className="text-sm text-ink-600">
              Veja na prática como aplicar o cálculo em situações reais do dia a dia de trabalho:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                    Exemplo 1
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Jornada Comercial Típica
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Entrada: 08:30</li>
                    <li>• Saída: 18:00</li>
                    <li>• Almoço: 01:00 (1h)</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      18:00 − 08:30 = 9h 30min de permanência bruta.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-brand-800">
                  Total: 8h 30min (8,50h)
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Exemplo 2
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Jornada com Horas Extras
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Entrada: 08:00</li>
                    <li>• Saída: 19:00</li>
                    <li>• Almoço: 01:00 (1h)</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      19:00 − 08:00 = 11h de permanência. Menos 1h de almoço = 10h trabalhadas.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-amber-800">
                  Total: 8h normais + 2h extras (50%)
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-surface-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                    Exemplo 3
                  </span>
                  <h4 className="font-bold text-ink-900 text-sm mt-2 mb-2">
                    Jornada de 6 Horas (Art. 71, § 1º)
                  </h4>
                  <ul className="text-xs text-ink-600 space-y-1 font-mono">
                    <li>• Entrada: 07:00</li>
                    <li>• Saída: 13:15</li>
                    <li>• Intervalo: 15 minutos</li>
                    <li className="pt-2 text-ink-500 font-sans">
                      13:15 − 07:00 = 6h 15min. Menos 15min de pausa = 6 horas exatas.
                    </li>
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-surface-200 font-mono text-xs font-bold text-teal-800">
                  Total: 6h 00min (6,00h)
                </div>
              </div>
            </div>
          </div>

          {/* Erros Comuns ao Calcular */}
          <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              Erros Comuns ao Calcular Horas Trabalhadas
            </div>
            <ul className="text-xs sm:text-sm text-amber-900 space-y-2 list-disc list-inside leading-relaxed">
              <li>
                <strong>Esquecer de descontar o almoço:</strong> O tempo total na empresa não é o mesmo que tempo trabalhado. O intervalo deve ser sempre deduzido.
              </li>
              <li>
                <strong>Somar minutos como se fossem centavos decimais:</strong> 30 minutos não são 0,30h, mas sim 0,50h. 15 minutos são 0,25h.
              </li>
              <li>
                <strong>Desconsiderar turnos noturnos:</strong> Quando o expediente cruza a meia-noite, a saída deve ser somada a 24 horas para o cálculo não ficar negativo.
              </li>
              <li>
                <strong>Ignorar a tolerância de 10 minutos (Art. 58 CLT):</strong> Pequenas variações de até 5 minutos por batida (máximo 10 min/dia) não contam como atraso nem hora extra.
              </li>
            </ul>
          </div>

          {/* Base Legal CLT */}
          <div className="p-6 rounded-3xl bg-surface-100 border border-surface-200 text-xs text-ink-600 space-y-2">
            <h4 className="font-bold text-ink-900 text-sm flex items-center gap-2">
              <Scale className="w-4 h-4 text-brand-600" />
              Legislação e Fontes Oficiais
            </h4>
            <p>
              As regras de jornada diária e intervalos são disciplinadas pelos artigos 58, 59 e 71 do Decreto-Lei nº 5.452/1943 (CLT) da República Federativa do Brasil.
            </p>
            <p className="text-[11px] text-ink-500">
              Aviso: Esta ferramenta serve para conferência e planejamento pessoal. Consulte seu sindicato ou setor de RH para regras específicas da sua convenção coletiva.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Dedicadas da Página */}
      <PageFAQ
        title="Dúvidas sobre Cálculo de Horas Trabalhadas"
        subtitle="Perguntas frequentes sobre marcação de ponto diário, intervalos e regras da CLT:"
        faqs={FAQS_HORAS_TRABALHADAS}
        includeSchema={true}
      />

      {/* Ferramentas Relacionadas */}
      <RelatedCalculators
        currentPath="/horas-trabalhadas"
        title="Você Também Pode Precisar Dessas Calculadoras"
        subtitle="Ferramentas complementares para completar seu cálculo de horas e salário:"
      />
    </>
  );
}
