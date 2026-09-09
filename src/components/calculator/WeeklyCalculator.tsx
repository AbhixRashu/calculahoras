'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { parseTime, formatDecimalBR, toDecimalHours } from '@/lib/calculations';
import { exportTimesheetPdf, copySummaryToClipboard } from '@/lib/exportPdf';

export function WeeklyCalculator() {
  const [diasSemana, setDiasSemana] = useState([
    { id: 'segunda', name: 'Segunda-feira', active: true, entrada: '08:00', saida: '17:00', intervalo: '01:00' },
    { id: 'terca', name: 'Terça-feira', active: true, entrada: '08:00', saida: '17:00', intervalo: '01:00' },
    { id: 'quarta', name: 'Quarta-feira', active: true, entrada: '08:00', saida: '17:00', intervalo: '01:00' },
    { id: 'quinta', name: 'Quinta-feira', active: true, entrada: '08:00', saida: '17:00', intervalo: '01:00' },
    { id: 'sexta', name: 'Sexta-feira', active: true, entrada: '08:00', saida: '17:00', intervalo: '01:00' },
    { id: 'sabado', name: 'Sábado', active: false, entrada: '08:00', saida: '12:00', intervalo: '00:00' },
    { id: 'domingo', name: 'Domingo (DSR)', active: false, entrada: '08:00', saida: '12:00', intervalo: '00:00' },
  ]);

  const [limiteSemanalHoras, setLimiteSemanalHoras] = useState(44); // 44h CLT padrão
  const [copied, setCopied] = useState(false);

  const formatHorasPT = (minutosTotal: number): string => {
    const h = Math.floor(Math.abs(minutosTotal) / 60);
    const m = Math.abs(minutosTotal) % 60;
    return `${h}h ${String(m).padStart(2, '0')}min`;
  };

  const handleUpdateDia = (id: string, updates: Partial<(typeof diasSemana)[0]>) => {
    setDiasSemana((prev) =>
      prev.map((d) => (d.id === id ? { ...d, ...updates } : d))
    );
  };

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

  const handleExportPdf = useCallback(() => {
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
      title: 'Folha de Ponto Semanal Completa (CLT)',
      type: 'semanal',
      items: [
        { label: 'Dias Trabalhados', value: `${semanalResult.activeDaysCount} dias` },
        { label: 'Média por Dia', value: semanalResult.mediaDiariaStr },
        { label: `Limite Semanal`, value: `${limiteSemanalHoras} horas` },
        { label: 'Horas Extras da Semana', value: semanalResult.extrasSemanaStr },
      ],
      table: { headers, rows },
      summary: {
        totalLabel: 'Carga Total da Semana',
        totalValue: semanalResult.totalSemanalStr,
        decimalValue: `${formatDecimalBR(semanalResult.totalDecimal)} horas em decimal`,
      },
    });
  }, [semanalResult, limiteSemanalHoras]);

  const handleCopy = useCallback(() => {
    const txt = `Folha de Ponto Semanal - CalculaHoras:\nTotal: ${semanalResult.totalSemanalStr} (${formatDecimalBR(semanalResult.totalDecimal)}h)\nDias trabalhados: ${semanalResult.activeDaysCount}\nMédia: ${semanalResult.mediaDiariaStr}/dia\nExtras: ${semanalResult.extrasSemanaStr}`;
    copySummaryToClipboard(txt).then((ok) => {
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    });
  }, [semanalResult]);

  return (
    <div className="card-elevated w-full max-w-2xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-200/80 pb-3">
        <div>
          <h2 className="text-base font-bold text-ink-900">Preencha sua semana de trabalho</h2>
          <p className="text-xs text-ink-500">Marque os dias trabalhados e informe horários e intervalos</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-ink-600 font-semibold">Carga CLT:</span>
          <select
            value={limiteSemanalHoras}
            onChange={(e) => setLimiteSemanalHoras(parseInt(e.target.value, 10) || 44)}
            className="px-2.5 py-1 bg-surface-100 rounded-lg border border-surface-300 text-xs font-bold text-ink-800"
          >
            <option value={44}>44 horas (CLT padrão)</option>
            <option value={40}>40 horas (Seg a Sex)</option>
            <option value={36}>36 horas (12x36 / Turnos)</option>
            <option value={30}>30 horas (Estágio)</option>
          </select>
        </div>
      </div>

      <div className="space-y-2.5">
        {diasSemana.map((dia) => {
          const diaCalculado = semanalResult.dias.find((d) => d.id === dia.id);
          return (
            <div
              key={dia.id}
              className={`p-3.5 rounded-xl border transition-all ${
                dia.active
                  ? 'bg-white border-surface-300 shadow-xs'
                  : 'bg-surface-50/70 border-surface-200 opacity-60'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5 sm:w-36">
                  <input
                    id={`check-wk-${dia.id}`}
                    type="checkbox"
                    checked={dia.active}
                    onChange={(e) =>
                      handleUpdateDia(dia.id, { active: e.target.checked })
                    }
                    className="w-4 h-4 text-brand-600 rounded cursor-pointer"
                  />
                  <label
                    htmlFor={`check-wk-${dia.id}`}
                    className="text-xs sm:text-sm font-bold text-ink-800 cursor-pointer"
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
                        className="px-2 py-1 text-xs font-bold rounded-md border border-surface-300 bg-white"
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
                        className="px-2 py-1 text-xs font-bold rounded-md border border-surface-300 bg-white"
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

                    <div className="ml-auto font-extrabold text-sm text-brand-700 min-w-[70px] text-right">
                      {diaCalculado?.str}
                    </div>
                  </div>
                ) : (
                  <span className="text-xs text-ink-400 italic">Descanso Semanal Remunerado (Folga)</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Resultados em destaque */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/90 p-6 text-center space-y-2">
        <div className="text-xs uppercase tracking-wider font-bold text-brand-700">
          Horas totais trabalhadas na semana
        </div>
        <div className="text-4xl md:text-5xl font-extrabold text-brand-700 tracking-tight">
          {semanalResult.totalSemanalStr}
        </div>
        <div className="text-sm font-semibold text-brand-900">
          {formatDecimalBR(semanalResult.totalDecimal)} horas em formato decimal • Média: {semanalResult.mediaDiariaStr}/dia
        </div>

        {parseTime(semanalResult.extrasSemanaStr) > 0 && (
          <div className="inline-block text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full mt-2 border border-amber-300">
            + {semanalResult.extrasSemanaStr} de horas extras acima do limite de {limiteSemanalHoras}h
          </div>
        )}
      </div>

      {/* Ações */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="button"
          onClick={handleExportPdf}
          className="btn-primary flex-1 py-3 flex items-center justify-center gap-2 text-sm font-bold"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          Exportar Folha Semanal em PDF
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className="btn-secondary py-3 px-5 text-sm font-semibold flex items-center justify-center gap-1.5"
        >
          {copied ? '✓ Copiado!' : 'Copiar resumo'}
        </button>
      </div>
    </div>
  );
}
