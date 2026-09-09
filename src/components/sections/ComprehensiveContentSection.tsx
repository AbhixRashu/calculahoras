import Link from 'next/link';
import {
  Clock,
  TrendingUp,
  LogOut,
  Calculator,
  Calendar,
  Moon,
  Scale,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

export function ComprehensiveContentSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-surface-200">
      <div className="container-app max-w-5xl mx-auto px-4 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Guia Completo & Legislação
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink-900 tracking-tight mt-3">
            Como Funciona o Cálculo de Horas no Brasil
          </h2>
          <p className="text-sm sm:text-base text-ink-600 mt-3 leading-relaxed">
            Entenda detalhadamente cada fórmula matemática, as exigências da Consolidação das Leis do Trabalho (CLT) e como conferir seu espelho de ponto sem erros.
          </p>
        </div>

        {/* 1. Como Calcular Horas Trabalhadas */}
        <div className="bg-surface-50/60 rounded-3xl border border-surface-200 p-6 sm:p-8 md:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
                1. Como Calcular Horas Trabalhadas Diárias
              </h3>
              <p className="text-xs sm:text-sm text-ink-500">
                A fórmula oficial para apuração da jornada líquida efetiva
              </p>
            </div>
          </div>

          <div className="prose prose-ink max-w-none text-ink-700 text-sm sm:text-base space-y-4">
            <p>
              Para calcular o total de horas trabalhadas no dia, subtraia o horário de entrada do horário de saída e, em seguida, desconte o período destinado ao intervalo intrajornada (refeição ou descanso).
            </p>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-surface-200 font-mono text-xs sm:text-sm text-brand-900 shadow-xs">
              <strong>Fórmula:</strong> Total de Horas = (Horário de Saída − Horário de Entrada) − Tempo de Intervalo
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-surface-200">
                <h4 className="font-bold text-ink-900 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Exemplo 1: Expediente Comercial Padrão
                </h4>
                <ul className="text-xs text-ink-600 space-y-1 font-mono">
                  <li>• Entrada: 08:30</li>
                  <li>• Saída: 18:00</li>
                  <li>• Intervalo de almoço: 01:00 (1 hora)</li>
                  <li>• Permanência bruta: 18:00 − 08:30 = 9h 30min</li>
                  <li className="font-bold text-brand-800 pt-1">
                    • Total efetivo: 9h 30min − 1h = 8h 30min (8,50 horas decimais)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-surface-200">
                <h4 className="font-bold text-ink-900 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Exemplo 2: Dois Períodos de Trabalho no Mesmo Dia
                </h4>
                <ul className="text-xs text-ink-600 space-y-1 font-mono">
                  <li>• Manhã: 08:00 às 12:00 = 4 horas</li>
                  <li>• Tarde: 13:00 às 18:00 = 5 horas</li>
                  <li>• Intervalo não computado: 12:00 às 13:00 (1h)</li>
                  <li className="font-bold text-brand-800 pt-1">
                    • Total do dia: 4h + 5h = 9h 00min (com 1h extra sobre a jornada de 8h)
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/horas-trabalhadas"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-800 hover:underline"
              >
                Abrir calculadora de horas trabalhadas &rarr;
              </Link>
              <span className="text-surface-300">•</span>
              <Link
                href="/guias/como-calcular-horas-trabalhadas"
                className="inline-flex items-center gap-1 text-xs text-ink-500 hover:text-brand-700"
              >
                Ver guia completo passo a passo
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Como Calcular Horas Extras */}
        <div className="bg-surface-50/60 rounded-3xl border border-surface-200 p-6 sm:p-8 md:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
                2. Como Calcular Horas Extras e DSR (Art. 59 CLT)
              </h3>
              <p className="text-xs sm:text-sm text-ink-500">
                Adicionais obrigatórios de 50%, 100% e reflexo no repouso semanal
              </p>
            </div>
          </div>

          <div className="prose prose-ink max-w-none text-ink-700 text-sm sm:text-base space-y-4">
            <p>
              Toda hora trabalhada que ultrapassar a jornada contratual diária ou semanal é considerada hora extra. No Brasil, o Artigo 59 da CLT estipula:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-surface-200">
                <span className="text-xs font-bold uppercase text-amber-700 block mb-1">
                  Horas Extras a 50% (Dias Úteis e Sábados)
                </span>
                <p className="text-xs text-ink-600">
                  Acréscimo de no mínimo 50% sobre o valor da hora normal de trabalho.
                </p>
                <div className="mt-2 font-mono text-xs text-brand-900 bg-brand-50/60 p-2 rounded-lg">
                  Valor = Hora Normal × 1,50
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-surface-200">
                <span className="text-xs font-bold uppercase text-emerald-700 block mb-1">
                  Horas Extras a 100% (Domingos e Feriados)
                </span>
                <p className="text-xs text-ink-600">
                  Quando o trabalho ocorre em dias destinados ao descanso, a remuneração é dobrada.
                </p>
                <div className="mt-2 font-mono text-xs text-brand-900 bg-brand-50/60 p-2 rounded-lg">
                  Valor = Hora Normal × 2,00
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-surface-200 space-y-2">
              <h4 className="font-bold text-ink-900 text-xs sm:text-sm">
                Reflexo Obrigatório no DSR (Descanso Semanal Remunerado):
              </h4>
              <p className="text-xs text-ink-600">
                Conforme a Lei nº 605/1949 e a Súmula 172 do TST, as horas extras habituais geram direito ao reflexo financeiro no DSR.
              </p>
              <div className="font-mono text-xs text-brand-900 bg-surface-100 p-2.5 rounded-xl">
                DSR = (Total em R$ de Horas Extras ÷ Dias Úteis do Mês) × (Domingos + Feriados do Mês)
              </div>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link
                href="/horas-extras"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-800 hover:underline"
              >
                Abrir calculadora de horas extras com DSR &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Como Calcular Hora de Saída */}
        <div className="bg-surface-50/60 rounded-3xl border border-surface-200 p-6 sm:p-8 md:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <LogOut className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
                3. Como Calcular a Hora Exata de Saída do Trabalho
              </h3>
              <p className="text-xs sm:text-sm text-ink-500">
                Planeje o término da jornada sem dever horas e sem fazer horas extras involuntárias
              </p>
            </div>
          </div>

          <div className="prose prose-ink max-w-none text-ink-700 text-sm sm:text-base space-y-4">
            <p>
              Para saber exatamente a que horas você deve registrar sua saída, some ao seu horário de entrada a carga horária que você precisa cumprir mais a duração do seu intervalo de almoço.
            </p>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-surface-200 font-mono text-xs sm:text-sm text-brand-900 shadow-xs">
              <strong>Fórmula:</strong> Hora de Saída = Hora de Entrada + Jornada Diária Contratual + Tempo de Intervalo
            </div>

            <div className="bg-white p-4 rounded-2xl border border-surface-200 text-xs sm:text-sm text-ink-600 space-y-1 font-mono">
              <strong className="block font-sans text-ink-900 mb-1">Exemplo clássico:</strong>
              <div>• Entrada: 08:00</div>
              <div>• Carga horária prevista: 8 horas (jornada padrão)</div>
              <div>• Almoço: 1 hora</div>
              <div className="font-bold text-brand-800 pt-1">
                • Cálculo: 08:00 + 08:00 + 01:00 = 17:00 (Hora exata para bater o ponto)
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/hora-de-saida"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-800 hover:underline"
              >
                Calcular sua hora de saída online &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* 4. Conversão de Horas em Decimal */}
        <div className="bg-surface-50/60 rounded-3xl border border-surface-200 p-6 sm:p-8 md:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
                4. Como Transformar Horas e Minutos em Horas Decimais
              </h3>
              <p className="text-xs sm:text-sm text-ink-500">
                A matemática usada por sistemas de RH, contabilidade e Excel
              </p>
            </div>
          </div>

          <div className="prose prose-ink max-w-none text-ink-700 text-sm sm:text-base space-y-4">
            <p>
              Como 1 hora contém 60 minutos (e não 100), não podemos multiplicar horas e minutos diretamente pelo salário. Para converter minutos em decimal, divida os minutos por 60:
            </p>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-surface-200 font-mono text-xs sm:text-sm text-brand-900 shadow-xs">
              <strong>Fórmula:</strong> Horas Decimais = Horas Inteiras + (Minutos ÷ 60)
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm bg-white rounded-2xl border border-surface-200 overflow-hidden">
                <thead className="bg-surface-100/80 text-ink-900 font-semibold border-b border-surface-200">
                  <tr>
                    <th className="p-3">Horas e Minutos (hh:mm)</th>
                    <th className="p-3">Conta Realizada</th>
                    <th className="p-3">Formato Decimal (h)</th>
                    <th className="p-3">Uso Prático na Folha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100 font-mono text-xs">
                  <tr>
                    <td className="p-3 font-semibold text-ink-900">7h 15min</td>
                    <td className="p-3 text-ink-500">7 + (15 ÷ 60)</td>
                    <td className="p-3 font-bold text-brand-700">7,25 h</td>
                    <td className="p-3 text-ink-600 font-sans">Multiplicar pelo salário-hora</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink-900">7h 30min</td>
                    <td className="p-3 text-ink-500">7 + (30 ÷ 60)</td>
                    <td className="p-3 font-bold text-brand-700">7,50 h</td>
                    <td className="p-3 text-ink-600 font-sans">Metade de uma hora exata</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink-900">7h 45min</td>
                    <td className="p-3 text-ink-500">7 + (45 ÷ 60)</td>
                    <td className="p-3 font-bold text-brand-700">7,75 h</td>
                    <td className="p-3 text-ink-600 font-sans">Três quartos de hora</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink-900">8h 20min</td>
                    <td className="p-3 text-ink-500">8 + (20 ÷ 60)</td>
                    <td className="p-3 font-bold text-brand-700">8,33 h</td>
                    <td className="p-3 text-ink-600 font-sans">Dízima arredondada a 2 casas</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink-900">8h 48min</td>
                    <td className="p-3 text-ink-500">8 + (48 ÷ 60)</td>
                    <td className="p-3 font-bold text-brand-700">8,80 h</td>
                    <td className="p-3 text-ink-600 font-sans">Dia da jornada semanal 44h</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-1">
              <Link
                href="/horas-decimais"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-800 hover:underline"
              >
                Abrir conversor de horas decimais completo &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* 5. Horas Semanais, Mensais e Divisores */}
        <div className="bg-surface-50/60 rounded-3xl border border-surface-200 p-6 sm:p-8 md:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
                5. Jornada Semanal (44h CLT) e Divisores Mensais (220 e 200)
              </h3>
              <p className="text-xs sm:text-sm text-ink-500">
                Como a Constituição Federal e a CLT regulam a carga horária periódica
              </p>
            </div>
          </div>

          <div className="prose prose-ink max-w-none text-ink-700 text-sm sm:text-base space-y-4">
            <p>
              O Artigo 7º, inciso XIII da Constituição Federal e o Artigo 58 da CLT fixam o limite máximo de <strong>8 horas diárias e 44 horas semanais</strong> para o regime de trabalho normal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-surface-200">
                <h4 className="font-bold text-ink-900 text-xs sm:text-sm mb-1">
                  Jornada de 44h Semanais (Divisor 220)
                </h4>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Cumprida com 8h48min de segunda a sexta (compensando o sábado), ou 8h de seg a sex + 4h no sábado. Para calcular o salário-hora, divide-se o salário contratual por 220.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-surface-200">
                <h4 className="font-bold text-ink-900 text-xs sm:text-sm mb-1">
                  Jornada de 40h Semanais (Divisor 200)
                </h4>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Cumprida com 8 horas diárias de segunda a sexta, sem trabalho aos sábados. Utiliza o divisor 200 para determinar o valor da hora normal de trabalho.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <Link
                href="/horas-semanais"
                className="text-xs font-bold text-brand-700 hover:text-brand-800 hover:underline"
              >
                Calculadora de Horas Semanais &rarr;
              </Link>
              <Link
                href="/horas-mensais"
                className="text-xs font-bold text-brand-700 hover:text-brand-800 hover:underline"
              >
                Calculadora de Horas Mensais &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* 6. Fontes Oficiais da Legislação Brasileira & Disclaimer */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/80 border border-surface-200 space-y-4">
          <div className="flex items-center gap-2 text-ink-900 font-bold text-base sm:text-lg">
            <Scale className="w-5 h-5 text-brand-600" />
            Base Legal & Fontes Oficiais Brasileiras (Planalto e MTE)
          </div>

          <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
            As regras de cálculo implementadas no CalculaHoras são estritamente fundamentadas na legislação trabalhista brasileira em vigor:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <a
              href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white border border-surface-200 hover:border-brand-300 hover:text-brand-700 flex items-center justify-between transition-colors"
            >
              <span>Artigos 58 e 59 da CLT (Jornada e Horas Extras)</span>
              <ExternalLink className="w-3.5 h-3.5 text-ink-400 shrink-0" />
            </a>

            <a
              href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white border border-surface-200 hover:border-brand-300 hover:text-brand-700 flex items-center justify-between transition-colors"
            >
              <span>Artigo 71 da CLT (Intervalo Intrajornada)</span>
              <ExternalLink className="w-3.5 h-3.5 text-ink-400 shrink-0" />
            </a>

            <a
              href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white border border-surface-200 hover:border-brand-300 hover:text-brand-700 flex items-center justify-between transition-colors"
            >
              <span>Artigo 73 da CLT (Turno e Adicional Noturno)</span>
              <ExternalLink className="w-3.5 h-3.5 text-ink-400 shrink-0" />
            </a>

            <a
              href="https://www.planalto.gov.br/ccivil_03/leis/l0605.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white border border-surface-200 hover:border-brand-300 hover:text-brand-700 flex items-center justify-between transition-colors"
            >
              <span>Lei nº 605/1949 (Repouso Semanal Remunerado - DSR)</span>
              <ExternalLink className="w-3.5 h-3.5 text-ink-400 shrink-0" />
            </a>

            <a
              href="https://www.gov.br/trabalho-e-emprego/pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white border border-surface-200 hover:border-brand-300 hover:text-brand-700 flex items-center justify-between transition-colors"
            >
              <span>Portaria MTE nº 671/2021 (Registro Eletrônico de Ponto)</span>
              <ExternalLink className="w-3.5 h-3.5 text-ink-400 shrink-0" />
            </a>

            <a
              href="https://www.tst.jus.br/sumulas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white border border-surface-200 hover:border-brand-300 hover:text-brand-700 flex items-center justify-between transition-colors"
            >
              <span>Súmulas 60 e 172 do TST (Noturno e DSR)</span>
              <ExternalLink className="w-3.5 h-3.5 text-ink-400 shrink-0" />
            </a>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3 mt-4">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Aviso Legal de Responsabilidade:</strong> O CalculaHoras.online é um aplicativo de utilidade pública para fins matemáticos, educativos e de simulação rápida. Os resultados fornecidos não substituem a assessoria jurídica, contábil ou o espelho oficial de ponto emitido pelo setor de Recursos Humanos e Sistema de Registro Eletrônico de Ponto (SREP) da sua organização, nem anulam cláusulas específicas de Acordos ou Convenções Coletivas de Trabalho (ACT/CCT).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
