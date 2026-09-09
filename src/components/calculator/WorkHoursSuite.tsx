'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { BreakTimeInput } from './BreakTimeInput';
import {
  parseTime,
  formatDecimalBR,
  toDecimalHours,
} from '@/lib/calculations';
import { exportTimesheetPdf, copySummaryToClipboard } from '@/lib/exportPdf';

export type TabMode = 'diaria' | 'semanal' | 'mensual' | 'anual';

interface WorkHoursSuiteProps {
  defaultTab?: TabMode;
  showTabNav?: boolean;
}

export function WorkHoursSuite({
  defaultTab = 'diaria',
  showTabNav = true,
}: WorkHoursSuiteProps) {
  const [activeTab, setActiveTab] = useState<TabMode>(defaultTab);
  const [copied, setCopied] = useState(false);

  const formatHorasPT = (minutosTotal: number): string => {
    const h = Math.floor(Math.abs(minutosTotal) / 60);
    const m = Math.abs(minutosTotal) % 60;
    return `${h}h ${String(m).padStart(2, '0')}min`;
  };

  // ----------------------------------------------------
  // 1. ABA DIÁRIA
  // ----------------------------------------------------
  const [diariaState, setDiariaState] = useState({
    entrada: '08:00',
    saida: '17:00',
    intervalo: '01:00', // 1 hora de almoço
    jornadaPadrao: '08:00', // 8h diárias
  });

  const diariaResult = useMemo(() => {
    const entradaMin = parseTime(diariaState.entrada);
    const saidaMin = parseTime(diariaState.saida);
    const intervaloMin = parseTime(diariaState.intervalo);
    const jornadaMin = parseTime(diariaState.jornadaPadrao) || 480;

    let diff = saidaMin - entradaMin;
    if (diff < 0) diff += 24 * 60; // suporte a turno noturno

    const totalEfetivoMin = Math.max(0, diff - intervaloMin);
    const normaisMin = Math.min(totalEfetivoMin, jornadaMin);
    const extrasMin = Math.max(0, totalEfetivoMin - jornadaMin);

    return {
      totalMinutos: totalEfetivoMin,
      totalHorasStr: formatHorasPT(totalEfetivoMin),
      totalDecimal: toDecimalHours(totalEfetivoMin),
      normaisStr: formatHorasPT(normaisMin),
      extrasStr: formatHorasPT(extrasMin),
      hasExtras: extrasMin > 0,
      diffBrutoMin: diff,
      intervaloMin,
    };
  }, [diariaState]);

  // ----------------------------------------------------
  // 2. ABA SEMANAL (Segunda a Domingo - Padrão CLT 44h / 40h)
  // ----------------------------------------------------
  const [diasSemana, setDiasSemana] = useState([
    { id: 'segunda', name: 'Segunda-feira', active: true, entrada: '08:00', saida: '17:00', intervalo: '01:00' },
    { id: 'terca', name: 'Terça-feira', active: true, entrada: '08:00', saida: '17:00', intervalo: '01:00' },
    { id: 'quarta', name: 'Quarta-feira', active: true, entrada: '08:00', saida: '17:00', intervalo: '01:00' },
    { id: 'quinta', name: 'Quinta-feira', active: true, entrada: '08:00', saida: '17:00', intervalo: '01:00' },
    { id: 'sexta', name: 'Sexta-feira', active: true, entrada: '08:00', saida: '17:00', intervalo: '01:00' },
    { id: 'sabado', name: 'Sábado', active: false, entrada: '08:00', saida: '12:00', intervalo: '00:00' },
    { id: 'domingo', name: 'Domingo (DSR)', active: false, entrada: '08:00', saida: '12:00', intervalo: '00:00' },
  ]);

  const [limiteSemanalHoras, setLimiteSemanalHoras] = useState(44); // 44h CLT padrão ou 40h

  const semanalResult = useMemo(() => {
    let totalSemanalMin = 0;
    const diasCalculados = diasSemana.map((dia) => {
      if (!dia.active) {
        return { ...dia, minutos: 0, str: '0h 00min', decimal: 0 };
      }
      const e = parseTime(dia.entrada);
      const s = parseTime(dia.saida);
      const i = parseTime(dia.intervalo);
      let diff = s - e;
      if (diff < 0) diff += 24 * 60;
      const net = Math.max(0, diff - i);
      totalSemanalMin += net;
      return {
        ...dia,
        minutos: net,
        str: formatHorasPT(net),
        decimal: toDecimalHours(net),
      };
    });

    const activeDaysCount = diasSemana.filter((d) => d.active).length;
    const mediaMin = activeDaysCount > 0 ? Math.round(totalSemanalMin / activeDaysCount) : 0;
    const maxSemanalMin = limiteSemanalHoras * 60;
    const extrasSemanaMin = Math.max(0, totalSemanalMin - maxSemanalMin);

    return {
      dias: diasCalculados,
      totalSemanalMin,
      totalSemanalStr: formatHorasPT(totalSemanalMin),
      totalDecimal: toDecimalHours(totalSemanalMin),
      mediaDiariaStr: formatHorasPT(mediaMin),
      extrasSemanaStr: formatHorasPT(extrasSemanaMin),
      activeDaysCount,
    };
  }, [diasSemana, limiteSemanalHoras]);

  const handleUpdateDia = (id: string, updates: Partial<(typeof diasSemana)[0]>) => {
    setDiasSemana((prev) =>
      prev.map((d) => (d.id === id ? { ...d, ...updates } : d))
    );
  };

  // ----------------------------------------------------
  // 3. ABA MENSAL (CLT - Divisor 220h ou 200h)
  // ----------------------------------------------------
  const [mensualState, setMensualState] = useState({
    diasTrabalhados: 22,
    horasPorDia: 8,
    salarioMensal: 3000,
  });

  const mensualResult = useMemo(() => {
    const totalHoras = mensualState.diasTrabalhados * mensualState.horasPorDia;
    const valorHoraCLT =
      mensualState.salarioMensal > 0
        ? mensualState.salarioMensal / 220 // divisor CLT padrão de 44h semanais
        : 0;
    return {
      totalHoras,
      totalHorasStr: `${totalHoras}h 00min`,
      valorHoraCLT,
    };
  }, [mensualState]);

  // ----------------------------------------------------
  // 4. ABA ANUAL
  // ----------------------------------------------------
  const [anualState, setAnualState] = useState({
    semanasTrabalhadas: 47, // descontando 30 dias de férias CLT e feriados
    horasSemana: 44,
  });

  const anualResult = useMemo(() => {
    const totalHoras = anualState.semanasTrabalhadas * anualState.horasSemana;
    return {
      totalHoras,
      totalHorasStr: `${totalHoras}h 00min`,
    };
  }, [anualState]);

  // ----------------------------------------------------
  // EXPORTAÇÕES EM PDF E CÓPIA
  // ----------------------------------------------------
  const handleExportPdf = useCallback(() => {
    if (activeTab === 'diaria') {
      exportTimesheetPdf({
        title: 'Espelho de Ponto Diário',
        type: 'diaria',
        items: [
          { label: 'Entrada', value: diariaState.entrada },
          { label: 'Saída', value: diariaState.saida },
          { label: 'Intervalo de Almoço', value: diariaState.intervalo },
          { label: 'Horas Normais', value: diariaResult.normaisStr },
          { label: 'Horas Extras', value: diariaResult.extrasStr },
        ],
        summary: {
          totalLabel: 'Total de Horas Trabalhadas no Dia',
          totalValue: diariaResult.totalHorasStr,
          decimalValue: `${formatDecimalBR(diariaResult.totalDecimal)} horas em decimal`,
          notes: diariaResult.hasExtras
            ? `Atenção: Houve ${diariaResult.extrasStr} horas extras acima da jornada normal contratual.`
            : 'Jornada realizada dentro do horário contratual padrão.',
        },
      });
    } else if (activeTab === 'semanal') {
      const headers = ['Dia da Semana', 'Situação', 'Entrada', 'Saída', 'Intervalo', 'Total'];
      const rows = semanalResult.dias.map((d) => [
        d.name,
        d.active ? 'Trabalhado' : 'Folga / DSR',
        d.active ? d.entrada : '-',
        d.active ? d.saida : '-',
        d.active ? d.intervalo : '-',
        d.active ? d.str : '-',
      ]);
      exportTimesheetPdf({
        title: 'Folha de Ponto Semanal',
        type: 'semanal',
        items: [
          { label: 'Dias Trabalhados', value: `${semanalResult.activeDaysCount} dias` },
          { label: 'Média Diária', value: semanalResult.mediaDiariaStr },
          { label: `Horas Extras (+${limiteSemanalHoras}h)`, value: semanalResult.extrasSemanaStr },
        ],
        table: { headers, rows },
        summary: {
          totalLabel: 'Total de Horas da Semana',
          totalValue: semanalResult.totalSemanalStr,
          decimalValue: `${formatDecimalBR(semanalResult.totalDecimal)} horas decimais`,
        },
      });
    } else if (activeTab === 'mensual') {
      exportTimesheetPdf({
        title: 'Cálculo de Jornada Mensal (CLT)',
        type: 'mensual',
        items: [
          { label: 'Dias Úteis Trabalhados', value: `${mensualState.diasTrabalhados} dias` },
          { label: 'Média Diária', value: `${mensualState.horasPorDia}h / dia` },
          { label: 'Salário Base', value: `R$ ${formatDecimalBR(mensualState.salarioMensal)}` },
          { label: 'Valor da Hora (Divisor 220)', value: `R$ ${formatDecimalBR(mensualResult.valorHoraCLT)}/h` },
        ],
        summary: {
          totalLabel: 'Total de Horas Trabalhadas no Mês',
          totalValue: mensualResult.totalHorasStr,
          decimalValue: `Valor aproximado da hora trabalhada: R$ ${formatDecimalBR(mensualResult.valorHoraCLT)}`,
        },
      });
    } else if (activeTab === 'anual') {
      exportTimesheetPdf({
        title: 'Cômputo de Jornada Anual de Trabalho',
        type: 'anual',
        items: [
          { label: 'Semanas Efetivas no Ano', value: `${anualState.semanasTrabalhadas} semanas` },
          { label: 'Carga Semanal Contratual', value: `${anualState.horasSemana}h / semana` },
        ],
        summary: {
          totalLabel: 'Jornada Anual Estimada',
          totalValue: anualResult.totalHorasStr,
          decimalValue: `${anualResult.totalHoras}.00 horas no ano (descontados férias e repouso)`,
        },
      });
    }
  }, [
    activeTab,
    diariaState,
    diariaResult,
    semanalResult,
    mensualState,
    mensualResult,
    anualState,
    anualResult,
    limiteSemanalHoras,
  ]);

  const handleCopySummary = useCallback(() => {
    let summaryText = '';
    if (activeTab === 'diaria') {
      summaryText = `CalculaHoras - Resumo Diário:\nEntrada: ${diariaState.entrada}\nSaída: ${diariaState.saida}\nIntervalo: ${diariaState.intervalo}\nTotal Trabalhado: ${diariaResult.totalHorasStr} (${formatDecimalBR(diariaResult.totalDecimal)}h em decimal)`;
    } else if (activeTab === 'semanal') {
      summaryText = `CalculaHoras - Resumo Semanal:\nTotal da Semana: ${semanalResult.totalSemanalStr} (${formatDecimalBR(semanalResult.totalDecimal)}h decimal)\nDias Trabalhados: ${semanalResult.activeDaysCount}\nMédia por dia: ${semanalResult.mediaDiariaStr}`;
    } else if (activeTab === 'mensual') {
      summaryText = `CalculaHoras - Resumo Mensal:\nDias: ${mensualState.diasTrabalhados} | Total Horas: ${mensualResult.totalHorasStr}`;
    } else {
      summaryText = `CalculaHoras - Resumo Anual:\nSemanas: ${anualState.semanasTrabalhadas} | Total Anual: ${anualResult.totalHorasStr}`;
    }

    copySummaryToClipboard(summaryText).then((ok) => {
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    });
  }, [
    activeTab,
    diariaState,
    diariaResult,
    semanalResult,
    mensualState,
    mensualResult,
    anualState,
    anualResult,
  ]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-surface-200/90 shadow-xl overflow-hidden">
      {/* Abas Superiores */}
      {showTabNav && (
        <div className="flex border-b border-surface-200/80 bg-surface-50/80">
          {[
            { key: 'diaria', label: 'Diária' },
            { key: 'semanal', label: 'Semanal' },
            { key: 'mensual', label: 'Mensal' },
            { key: 'anual', label: 'Anual' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key as TabMode)}
              className={`flex-1 py-3.5 px-3 text-sm font-semibold transition-all border-b-2 text-center ${
                activeTab === tab.key
                  ? 'border-brand-600 text-brand-700 bg-white shadow-xs'
                  : 'border-transparent text-ink-600 hover:text-ink-900 hover:bg-surface-100/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <div className="p-6 md:p-8 space-y-6">
        {/* ==================================================== */}
        {/* ABA 1: DIÁRIA */}
        {/* ==================================================== */}
        {activeTab === 'diaria' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="diaria-entrada" className="input-label">
                  Hora de entrada
                </label>
                <input
                  id="diaria-entrada"
                  type="time"
                  value={diariaState.entrada}
                  onChange={(e) =>
                    setDiariaState((prev) => ({ ...prev, entrada: e.target.value }))
                  }
                  className="input-field text-lg font-bold"
                />
              </div>

              <div>
                <label htmlFor="diaria-saida" className="input-label">
                  Hora de saída
                </label>
                <input
                  id="diaria-saida"
                  type="time"
                  value={diariaState.saida}
                  onChange={(e) =>
                    setDiariaState((prev) => ({ ...prev, saida: e.target.value }))
                  }
                  className="input-field text-lg font-bold"
                />
              </div>
            </div>

            {/* UPGRADE CRUCIAL: INPUT DE INTERVALO COM HORAS E MINUTOS */}
            <div className="p-4 rounded-xl bg-surface-50 border border-surface-200/80">
              <BreakTimeInput
                idPrefix="diaria"
                label="Intervalo de almoço / descanso (Art. 71 CLT)"
                value={diariaState.intervalo}
                onChange={(val) =>
                  setDiariaState((prev) => ({ ...prev, intervalo: val }))
                }
              />
            </div>

            {/* Dica e reset rápido */}
            <div className="flex items-center justify-between text-xs text-ink-500 pt-1">
              <span>Calcula automaticamente turnos da noite (ex: 22:00 às 06:00)</span>
              <button
                type="button"
                onClick={() =>
                  setDiariaState({
                    entrada: '08:00',
                    saida: '17:00',
                    intervalo: '01:00',
                    jornadaPadrao: '08:00',
                  })
                }
                className="text-brand-600 hover:underline font-semibold"
              >
                Redefinir padrão (8h às 17h)
              </button>
            </div>

            {/* Bloco de Resultado em Destaque */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/90 p-6 text-center space-y-2 shadow-xs">
              <div className="text-xs uppercase tracking-wider font-bold text-brand-700">
                Horas totais trabalhadas no dia
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-brand-700 tracking-tight">
                {diariaResult.totalHorasStr}
              </div>
              <div className="text-sm font-medium text-brand-900">
                {formatDecimalBR(diariaResult.totalDecimal)} horas em formato decimal
              </div>

              {diariaResult.hasExtras && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Inclui {diariaResult.extrasStr} de horas extras
                </div>
              )}
            </div>

            {/* Linha do tempo visual do expediente */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-ink-500 font-medium">
                <span>{diariaState.entrada} Entrada</span>
                <span>Intervalo: {diariaState.intervalo}</span>
                <span>{diariaState.saida} Saída</span>
              </div>
              <div className="h-3 w-full bg-surface-200 rounded-full overflow-hidden flex">
                <div
                  className="bg-brand-500 h-full transition-all duration-300"
                  style={{
                    width: `${Math.max(
                      15,
                      Math.min(
                        85,
                        (diariaResult.totalMinutos / (diariaResult.diffBrutoMin || 1)) * 100
                      )
                    )}%`,
                  }}
                  title="Horas trabalhadas"
                />
                <div
                  className="bg-amber-400 h-full transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      50,
                      (diariaResult.intervaloMin / (diariaResult.diffBrutoMin || 1)) * 100
                    )}%`,
                  }}
                  title="Intervalo intrajornada"
                />
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* ABA 2: SEMANAL */}
        {/* ==================================================== */}
        {activeTab === 'semanal' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs text-ink-600 font-medium">
                Marque os dias de trabalho da sua semana:
              </span>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-ink-500 font-medium">Carga semanal CLT:</span>
                <select
                  value={limiteSemanalHoras}
                  onChange={(e) => setLimiteSemanalHoras(parseInt(e.target.value, 10) || 44)}
                  className="px-2 py-1 bg-surface-100 rounded-md border border-surface-300 text-xs font-semibold"
                >
                  <option value={44}>44 horas (CLT padrão)</option>
                  <option value={40}>40 horas (Seg a Sex)</option>
                  <option value={36}>36 horas (Turnos)</option>
                  <option value={30}>30 horas (Estágio/Meio período)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
              {diasSemana.map((dia) => {
                const diaCalculado = semanalResult.dias.find((d) => d.id === dia.id);
                return (
                  <div
                    key={dia.id}
                    className={`p-3 rounded-xl border transition-all ${
                      dia.active
                        ? 'bg-white border-surface-300 shadow-xs'
                        : 'bg-surface-50/70 border-surface-200 opacity-60'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5 sm:w-36">
                        <input
                          id={`check-${dia.id}`}
                          type="checkbox"
                          checked={dia.active}
                          onChange={(e) =>
                            handleUpdateDia(dia.id, { active: e.target.checked })
                          }
                          className="w-4 h-4 text-brand-600 rounded cursor-pointer"
                        />
                        <label
                          htmlFor={`check-${dia.id}`}
                          className="text-xs sm:text-sm font-semibold text-ink-800 cursor-pointer"
                        >
                          {dia.name}
                        </label>
                      </div>

                      {dia.active ? (
                        <div className="flex flex-1 flex-wrap items-center gap-2">
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-ink-400">Entrada:</span>
                            <input
                              type="time"
                              value={dia.entrada}
                              onChange={(e) =>
                                handleUpdateDia(dia.id, { entrada: e.target.value })
                              }
                              className="px-2 py-1 text-xs font-semibold rounded-md border border-surface-300 bg-white"
                            />
                          </div>

                          <div className="flex items-center gap-1">
                            <span className="text-xs text-ink-400">Saída:</span>
                            <input
                              type="time"
                              value={dia.saida}
                              onChange={(e) =>
                                handleUpdateDia(dia.id, { saida: e.target.value })
                              }
                              className="px-2 py-1 text-xs font-semibold rounded-md border border-surface-300 bg-white"
                            />
                          </div>

                          <div className="flex items-center gap-1">
                            <span className="text-xs text-ink-500 font-semibold">Almoço:</span>
                            <select
                              value={dia.intervalo}
                              onChange={(e) =>
                                handleUpdateDia(dia.id, { intervalo: e.target.value })
                              }
                              className="px-2 py-1 text-xs font-bold rounded-md border border-surface-300 bg-white hover:border-brand-500 text-ink-800 cursor-pointer"
                              title="Duração do intervalo de almoço"
                            >
                              <option value="00:00">Sem almoço (0h)</option>
                              <option value="00:15">15 min</option>
                              <option value="00:30">30 min</option>
                              <option value="00:45">45 min</option>
                              <option value="01:00">1h 00min (Padrão)</option>
                              <option value="01:15">1h 15min</option>
                              <option value="01:30">1h 30min</option>
                              <option value="02:00">2h 00min</option>
                            </select>
                          </div>

                          <div className="ml-auto font-bold text-sm text-brand-700 min-w-[70px] text-right">
                            {diaCalculado?.str}
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs text-ink-400 italic">Folga / Descanso</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Resultado Semanal */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/90 p-6 text-center space-y-2">
              <div className="text-xs uppercase tracking-wider font-bold text-brand-700">
                Horas totais da semana
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-brand-700 tracking-tight">
                {semanalResult.totalSemanalStr}
              </div>
              <div className="text-sm font-medium text-brand-900">
                {formatDecimalBR(semanalResult.totalDecimal)} horas em decimal • Média de{' '}
                {semanalResult.mediaDiariaStr}/dia ({semanalResult.activeDaysCount} dias trabalhados)
              </div>

              {parseTime(semanalResult.extrasSemanaStr) > 0 && (
                <div className="text-xs font-semibold text-amber-800 bg-amber-100 py-1 px-3 rounded-full inline-block mt-2">
                  + {semanalResult.extrasSemanaStr} de horas extras acima de {limiteSemanalHoras}h semanais
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* ABA 3: MENSAL (CLT) */}
        {/* ==================================================== */}
        {activeTab === 'mensual' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="input-label">Dias úteis trabalhados no mês</label>
                <input
                  type="number"
                  min="1"
                  max="31"
                  value={mensualState.diasTrabalhados}
                  onChange={(e) =>
                    setMensualState((p) => ({
                      ...p,
                      diasTrabalhados: parseInt(e.target.value, 10) || 0,
                    }))
                  }
                  className="input-field text-lg font-bold"
                />
                <span className="text-xs text-ink-400 mt-1 block">
                  Normalmente entre 21 e 23 dias úteis
                </span>
              </div>

              <div>
                <label className="input-label">Média de horas por dia</label>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="24"
                  value={mensualState.horasPorDia}
                  onChange={(e) =>
                    setMensualState((p) => ({
                      ...p,
                      horasPorDia: parseFloat(e.target.value) || 0,
                    }))
                  }
                  className="input-field text-lg font-bold"
                />
                <span className="text-xs text-ink-400 mt-1 block">
                  Jornada de 8h/dia (ou 8.8h para fechar 44h sem sábado)
                </span>
              </div>
            </div>

            <div>
              <label className="input-label">Salário Bruto Mensal (R$ opcional)</label>
              <input
                type="number"
                step="50"
                min="0"
                value={mensualState.salarioMensal || ''}
                placeholder="3000.00"
                onChange={(e) =>
                  setMensualState((p) => ({
                    ...p,
                    salarioMensal: parseFloat(e.target.value) || 0,
                  }))
                }
                className="input-field text-lg font-semibold"
              />
              <span className="text-xs text-ink-400 mt-1 block">
                Calcula o valor da sua hora de trabalho conforme o divisor 220 da CLT
              </span>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/90 p-6 text-center space-y-2">
              <div className="text-xs uppercase tracking-wider font-bold text-brand-700">
                Jornada mensal estimada
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-brand-700 tracking-tight">
                {mensualResult.totalHorasStr}
              </div>
              {mensualResult.valorHoraCLT > 0 && (
                <div className="text-sm font-semibold text-brand-900 mt-1">
                  Valor da sua hora normal (divisor 220):{' '}
                  <span className="text-base text-brand-700 font-bold">
                    R$ {formatDecimalBR(mensualResult.valorHoraCLT)}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* ABA 4: ANUAL */}
        {/* ==================================================== */}
        {activeTab === 'anual' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="input-label">Semanas úteis no ano</label>
                <input
                  type="number"
                  min="30"
                  max="52"
                  value={anualState.semanasTrabalhadas}
                  onChange={(e) =>
                    setAnualState((p) => ({
                      ...p,
                      semanasTrabalhadas: parseInt(e.target.value, 10) || 0,
                    }))
                  }
                  className="input-field text-lg font-bold"
                />
                <span className="text-xs text-ink-400 mt-1 block">
                  Descontando 30 dias de férias da CLT e feriados: 47 a 48 semanas
                </span>
              </div>

              <div>
                <label className="input-label">Carga horária semanal</label>
                <input
                  type="number"
                  step="1"
                  min="1"
                  max="60"
                  value={anualState.horasSemana}
                  onChange={(e) =>
                    setAnualState((p) => ({
                      ...p,
                      horasSemana: parseFloat(e.target.value) || 0,
                    }))
                  }
                  className="input-field text-lg font-bold"
                />
                <span className="text-xs text-ink-400 mt-1 block">
                  Padrão CLT: 44 horas semanais (ou 40h)
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/90 p-6 text-center space-y-2">
              <div className="text-xs uppercase tracking-wider font-bold text-brand-700">
                Jornada anual estimada
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-brand-700 tracking-tight">
                {anualResult.totalHorasStr}
              </div>
              <div className="text-sm font-medium text-brand-900">
                {anualResult.totalHoras}.00 horas trabalhadas no ano
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* BOTÕES DE EXPORTAR E COPIAR */}
        {/* ==================================================== */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={handleExportPdf}
            className="btn-primary flex-1 py-3.5 flex items-center justify-center gap-2 text-base font-bold shadow-md cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            Exportar para PDF
          </button>

          <button
            type="button"
            onClick={handleCopySummary}
            className="btn-secondary py-3.5 px-5 flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer"
          >
            {copied ? (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-brand-600"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copiar resumo</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-ink-400 text-center pt-1">
          Os cálculos são realizados no seu navegador. Nenhum dado é enviado ou armazenado.
        </p>
      </div>
    </div>
  );
}
