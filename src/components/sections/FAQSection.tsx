'use client';

import { useState, useMemo } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TextReveal } from '@/components/animations/TextReveal';
import Link from 'next/link';

type FAQCategory = 'todas' | 'calculos' | 'clt' | 'ferramenta';

interface FAQItem {
  id: string;
  category: 'calculos' | 'clt' | 'ferramenta';
  categoryLabel: string;
  q: string;
  a: string;
  badge?: string;
  example?: string;
  tip?: string;
}

const faqsData: FAQItem[] = [
  // Cálculos & Ponto
  {
    id: 'como-calcular-horas-trabalhadas',
    category: 'calculos',
    categoryLabel: 'Cálculos de Ponto',
    badge: 'Mais Acessada',
    q: 'Como calcular horas trabalhadas diárias?',
    a: 'Para calcular as horas trabalhadas, subtraia o horário de entrada do horário de saída e depois desconte o período de intervalo (almoço/refeição).',
    example: 'Entrada às 08:30, saída às 18:00 com 1h de almoço: 18:00 − 08:30 = 9h 30min no trabalho. Descontando 1h de almoço: 9h 30min − 1h = 8h 30min trabalhadas (ou 8,50 horas em decimal).',
    tip: 'Nossa calculadora principal faz essa conta automaticamente com um clique.',
  },
  {
    id: 'turno-noturno-meia-noite',
    category: 'calculos',
    categoryLabel: 'Cálculos de Ponto',
    q: 'Como calcular turnos que passam da meia-noite (virada de dia)?',
    a: 'Quando o expediente cruza a meia-noite (por exemplo, entrando às 22:00 e saindo às 06:00 do dia seguinte), adicione 24 horas ao horário de saída antes de subtrair o horário de entrada.',
    example: 'Saída às 06:00 (+ 24h = 30:00) − Entrada às 22:00 = 8 horas de duração bruta. Desconte eventuais intervalos.',
    tip: 'O CalculaHoras detecta a virada noturna automaticamente, sem que você precise ajustar o relógio manualmente.',
  },
  {
    id: 'hora-exata-de-saida',
    category: 'calculos',
    categoryLabel: 'Cálculos de Ponto',
    q: 'Como calcular a hora exata em que devo sair do trabalho?',
    a: 'Para planejar o fim da jornada sem dever horas nem fazer extras indesejadas, basta somar: Horário de Entrada + Carga Horária Contratual + Tempo de Intervalo.',
    example: 'Entrada às 08:00 + jornada de 8h + 1h de intervalo = Saída prevista para exatamente 17:00.',
    tip: 'Use nossa ferramenta dedicada "Hora de Saída" no menu superior.',
  },
  {
    id: 'converter-horas-para-decimal',
    category: 'calculos',
    categoryLabel: 'Cálculos de Ponto',
    badge: 'RH & Folha',
    q: 'Como converter horas e minutos (hh:mm) em horas decimais?',
    a: 'Para transformar minutos em decimal, divida a quantidade de minutos por 60 e some com as horas inteiras. A fórmula matemática é: Horas + (Minutos ÷ 60).',
    example: '• 8h 15min = 8 + (15 ÷ 60) = 8,25h\n• 8h 30min = 8 + (30 ÷ 60) = 8,50h\n• 8h 45min = 8 + (45 ÷ 60) = 8,75h',
    tip: 'Softwares de folha de pagamento e contabilidade sempre utilizam o formato decimal para multiplicar pelo valor do salário-hora.',
  },
  {
    id: 'horas-semanais-e-mensais',
    category: 'calculos',
    categoryLabel: 'Cálculos de Ponto',
    q: 'Como calcular horas semanais e mensais?',
    a: 'A jornada semanal é a soma das horas trabalhadas de segunda a sábado (ou domingo). A CLT limita em 44 horas semanais (ou 40 horas em acordos comuns). Para o cálculo mensal oficial, utilizam-se os divisores contratuais: 220 horas para jornada de 44h semanais, e 200 horas para jornada de 40h semanais (incluindo o DSR remunerado).',
    example: 'Trabalhando 8h48min de segunda a sexta: 8,8h × 5 dias = 44 horas semanais exatas.',
  },

  // CLT & Regras Trabalhistas
  {
    id: 'calculo-horas-extras-50-100',
    category: 'clt',
    categoryLabel: 'Regras CLT',
    badge: 'Art. 59 CLT',
    q: 'Como calcular o valor das Horas Extras a 50% e 100%?',
    a: 'A CLT estipula acréscimo obrigatório sobre a hora normal de trabalho: adicional mínimo de 50% em dias úteis e sábados (multiplique por 1,5), e adicional de 100% em domingos e feriados (multiplique por 2,0).',
    example: 'Se sua hora normal vale R$ 20,00:\n• Hora extra a 50%: R$ 20,00 × 1,5 = R$ 30,00\n• Hora extra a 100%: R$ 20,00 × 2,0 = R$ 40,00',
    tip: 'As horas extras também geram reflexo obrigatório no cálculo do DSR (Descanso Semanal Remunerado).',
  },
  {
    id: 'adicional-noturno-clt',
    category: 'clt',
    categoryLabel: 'Regras CLT',
    badge: 'Art. 73 CLT',
    q: 'Como funciona o Adicional Noturno e a hora noturna reduzida?',
    a: 'Para trabalhadores urbanos, o trabalho noturno ocorre entre 22h e 5h. Ele conta com duas vantagens legais: 1) Hora ficta reduzida de 52 minutos e 30 segundos (7 horas de relógio equivalem a 8 horas trabalhadas); 2) Adicional financeiro mínimo de 20% sobre a hora diurna.',
    example: 'Quem cumpre 7 horas corridas entre 22h e 05h recebe o equivalente a 8 horas com mais 20% de adicional sobre cada uma.',
  },
  {
    id: 'tolerancia-atraso-ponto',
    category: 'clt',
    categoryLabel: 'Regras CLT',
    badge: 'Art. 58 CLT',
    q: 'Qual é a tolerância de atraso e adiantamento no ponto pela CLT?',
    a: 'Conforme o Artigo 58, § 1º da CLT, não serão descontadas nem computadas como jornada extraordinária as variações de horário no registro de ponto não excedentes a 5 minutos em cada marcação, observado o limite máximo de 10 minutos diários.',
    example: 'Bater o ponto 4 minutos antes na entrada e 5 minutos depois na saída soma 9 minutos diários, o que está dentro do limite e é desconsiderado.',
    tip: 'Atenção: ultrapassando 10 minutos no total do dia, todo o tempo excedente é computado ou descontado.',
  },
  {
    id: 'intervalo-intrajornada-obrigatorio',
    category: 'clt',
    categoryLabel: 'Regras CLT',
    badge: 'Art. 71 CLT',
    q: 'O que diz a CLT sobre o intervalo de almoço e descanso?',
    a: 'A duração obrigatória do intervalo depende da carga diária:\n• Até 4 horas de trabalho: sem intervalo obrigatório.\n• De 4 a 6 horas diárias: intervalo obrigatório de 15 minutos.\n• Acima de 6 horas diárias: intervalo obrigatório de no mínimo 1 hora e no máximo 2 horas.',
    tip: 'Por acordo ou convenção coletiva, o intervalo de 1 hora pode ser reduzido para 30 minutos.',
  },
  {
    id: 'intervalo-conta-como-trabalho',
    category: 'clt',
    categoryLabel: 'Regras CLT',
    q: 'O intervalo de almoço/refeição conta como hora trabalhada?',
    a: 'Não. Conforme o Artigo 71, § 2º da CLT, os intervalos de descanso e alimentação não são computados na duração da jornada de trabalho. Por isso, são sempre descontados do total de permanência.',
  },
  {
    id: 'banco-de-horas-vs-horas-extras',
    category: 'clt',
    categoryLabel: 'Regras CLT',
    q: 'Qual a diferença entre Banco de Horas e Horas Extras pagas?',
    a: 'Nas horas extras tradicionais, o valor é pago em dinheiro no holerite do mês seguinte com acréscimo de 50% ou 100%. No banco de horas, o tempo excedente é acumulado para compensação futura com folgas ou redução de jornada em até 6 meses (acordo individual) ou 1 ano (acordo coletivo).',
  },

  // Ferramenta, Segurança & Privacidade
  {
    id: 'privacidade-dos-dados',
    category: 'ferramenta',
    categoryLabel: 'Privacidade & Sistema',
    badge: '100% Seguro',
    q: 'Meus horários e dados pessoais ficam salvos em servidores?',
    a: 'Não. O CalculaHoras processa 100% dos cálculos localmente no seu próprio navegador (client-side). Nenhum horário, salário ou dado digitado é enviado ou guardado em servidores remotos.',
    tip: 'Caso utilize o histórico de ponto, as informações ficam salvas apenas no armazenamento local (localStorage) do seu aparelho.',
  },
  {
    id: 'funciona-offline-celular',
    category: 'ferramenta',
    categoryLabel: 'Privacidade & Sistema',
    badge: 'PWA & Offline',
    q: 'A calculadora funciona no celular e sem internet (offline)?',
    a: 'Sim! A ferramenta é totalmente otimizada para smartphones (Android e iPhone) e computadores. Após carregar a página pela primeira vez, ela funciona perfeitamente sem sinal de internet.',
  },
  {
    id: 'exportar-excel-pdf',
    category: 'ferramenta',
    categoryLabel: 'Privacidade & Sistema',
    q: 'Posso exportar os resultados para Excel ou salvar em PDF?',
    a: 'Sim. Em nossas ferramentas de horas você encontra os botões "Copiar Resumo" (que copia os dados tabulados perfeitamente para colar no Microsoft Excel ou Google Sheets) e "Imprimir / PDF" para gerar um espelho limpo.',
  },
  {
    id: 'validade-juridica-calculo',
    category: 'ferramenta',
    categoryLabel: 'Privacidade & Sistema',
    q: 'O cálculo do site serve como comprovante legal trabalhista?',
    a: 'A calculadora é uma ferramenta matemática de apoio e conferência para trabalhadores, autônomos e analistas de RH. Para comprovação jurídica em processos, o documento oficial exigido é o espelho de ponto emitido pelo Registrador Eletrônico de Ponto (REP) conforme a Portaria 671/MTE.',
  },
  {
    id: 'preciso-pagar-ou-cadastrar',
    category: 'ferramenta',
    categoryLabel: 'Privacidade & Sistema',
    badge: 'Grátis',
    q: 'Preciso criar conta ou pagar para usar as calculadoras?',
    a: 'Não. O CalculaHoras é 100% gratuito e não exige nenhum tipo de cadastro, e-mail ou cartão de crédito. Todas as ferramentas estão liberadas sem limites.',
  },
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['como-calcular-horas-trabalhadas']));

  // Filter FAQs based on active category and search query
  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return faqsData.filter((faq) => {
      const matchesCategory = activeCategory === 'todas' || faq.category === activeCategory;
      if (!matchesCategory) return false;

      if (!query) return true;

      return (
        faq.q.toLowerCase().includes(query) ||
        faq.a.toLowerCase().includes(query) ||
        (faq.example && faq.example.toLowerCase().includes(query)) ||
        (faq.tip && faq.tip.toLowerCase().includes(query))
      );
    });
  }, [activeCategory, searchQuery]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    return {
      todas: faqsData.length,
      calculos: faqsData.filter((f) => f.category === 'calculos').length,
      clt: faqsData.filter((f) => f.category === 'clt').length,
      ferramenta: faqsData.filter((f) => f.category === 'ferramenta').length,
    };
  }, []);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    if (openIds.size === filteredFaqs.length) {
      setOpenIds(new Set());
    } else {
      setOpenIds(new Set(filteredFaqs.map((f) => f.id)));
    }
  };

  // Schema.org FAQPage structured data for rich SEO snippets
  const faqSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqsData.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${faq.a}${faq.example ? ` Exemplo: ${faq.example}` : ''}`,
        },
      })),
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-surface-50 relative overflow-hidden" id="faq">
      {/* Schema.org FAQ Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-app max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-4">
              <span>💡 Dúvidas Frequentes & CLT</span>
            </div>
          </ScrollReveal>
          <TextReveal
            text="Perguntas Frequentes sobre Cálculo de Horas"
            tag="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight"
          />
          <ScrollReveal delay={150}>
            <p className="text-ink-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
              Tudo o que você precisa saber sobre marcação de ponto, cálculos matemáticos, legislação trabalhista (CLT) e funcionamento da ferramenta.
            </p>
          </ScrollReveal>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar dúvida por palavra-chave (ex: horas extras, intervalo, noturno, decimal)..."
              className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white border border-surface-200 text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-xs transition-all text-sm md:text-base"
              aria-label="Buscar pergunta"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-ink-400 hover:text-ink-600 transition-colors"
                title="Limpar busca"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Filter Pills & Toggle All Button */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
            <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory('todas')}
                className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  activeCategory === 'todas'
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-white text-ink-600 border border-surface-200 hover:bg-surface-100 hover:text-ink-900'
                }`}
              >
                Todas ({categoryCounts.todas})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('calculos')}
                className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  activeCategory === 'calculos'
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-white text-ink-600 border border-surface-200 hover:bg-surface-100 hover:text-ink-900'
                }`}
              >
                ⏱️ Cálculos ({categoryCounts.calculos})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('clt')}
                className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  activeCategory === 'clt'
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-white text-ink-600 border border-surface-200 hover:bg-surface-100 hover:text-ink-900'
                }`}
              >
                ⚖️ Regras CLT ({categoryCounts.clt})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('ferramenta')}
                className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  activeCategory === 'ferramenta'
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-white text-ink-600 border border-surface-200 hover:bg-surface-100 hover:text-ink-900'
                }`}
              >
                🔒 Sistema & Privacidade ({categoryCounts.ferramenta})
              </button>
            </div>

            {/* Expand / Collapse All */}
            {filteredFaqs.length > 0 && (
              <button
                type="button"
                onClick={handleExpandAll}
                className="text-xs font-semibold text-brand-700 hover:text-brand-800 hover:underline px-2 py-1 transition-colors"
              >
                {openIds.size === filteredFaqs.length ? 'Recolher todos' : 'Expandir todos'}
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="mb-4 text-xs md:text-sm text-ink-500">
            {filteredFaqs.length} {filteredFaqs.length === 1 ? 'pergunta encontrada' : 'perguntas encontradas'} para &quot;<strong>{searchQuery}</strong>&quot;
          </div>
        )}

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-surface-200 p-10 text-center">
            <div className="w-12 h-12 rounded-full bg-surface-100 text-ink-400 flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <p className="font-semibold text-ink-900 text-base mb-1">Nenhuma pergunta encontrada</p>
            <p className="text-sm text-ink-500 mb-4">Tente buscar por outro termo ou limpe os filtros de busca.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todas');
              }}
              className="btn-secondary text-xs py-2 px-4"
            >
              Ver todas as dúvidas
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIds.has(faq.id);

              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-brand-300 shadow-sm ring-1 ring-brand-500/10'
                      : 'border-surface-200 hover:border-surface-300 hover:shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-start justify-between p-5 md:p-6 text-left group gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 pr-2">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-500 bg-surface-100 px-2.5 py-0.5 rounded-full">
                          {faq.categoryLabel}
                        </span>
                        {faq.badge && (
                          <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-full">
                            {faq.badge}
                          </span>
                        )}
                      </div>
                      <span className={`font-semibold transition-colors text-base md:text-lg block leading-snug ${
                        isOpen ? 'text-brand-800' : 'text-ink-900 group-hover:text-brand-700'
                      }`}>
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 mt-1 ${
                        isOpen
                          ? 'bg-brand-600 text-white rotate-180 shadow-xs'
                          : 'bg-surface-100 text-ink-500 group-hover:bg-brand-50 group-hover:text-brand-700'
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-6 pt-2 text-sm md:text-base text-ink-700 leading-relaxed border-t border-surface-100 space-y-3">
                      <p className="whitespace-pre-line text-ink-800 font-normal">
                        {faq.a}
                      </p>

                      {faq.example && (
                        <div className="bg-surface-50 rounded-xl p-3.5 border border-surface-200 text-xs md:text-sm text-ink-700">
                          <strong className="text-ink-900 block mb-1">📌 Exemplo prático:</strong>
                          <p className="whitespace-pre-line font-mono text-[13px] text-ink-800 leading-relaxed">
                            {faq.example}
                          </p>
                        </div>
                      )}

                      {faq.tip && (
                        <div className="flex items-start gap-2.5 bg-brand-50/60 rounded-xl p-3 border border-brand-100 text-xs md:text-sm text-brand-900">
                          <span className="text-base leading-none">💡</span>
                          <span>{faq.tip}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Support & Practical Guides Card */}
        <ScrollReveal delay={200}>
          <div className="mt-12 bg-white rounded-2xl border border-surface-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-ink-900 mb-1">
                Ainda tem alguma dúvida específica?
              </h3>
              <p className="text-ink-500 text-sm md:text-base">
                Explore nossos artigos explicativos completos ou entre em contato com nossa equipe de suporte.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Link
                href="/guias"
                className="btn-secondary text-sm py-2.5 px-5 w-full md:w-auto text-center"
              >
                Ver Todos os Guias
              </Link>
              <Link
                href="/contato"
                className="btn-primary text-sm py-2.5 px-5 w-full md:w-auto text-center whitespace-nowrap"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
