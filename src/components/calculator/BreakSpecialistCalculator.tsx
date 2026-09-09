'use client';

import React, { useState, useMemo } from 'react';
import { BreakTimeInput } from './BreakTimeInput';
import { parseTime, formatHoursSpanish, formatDecimalES, toDecimalHours } from '@/lib/calculations';
import { exportTimesheetPdf } from '@/lib/exportPdf';

export function BreakSpecialistCalculator() {
  const [entrada, setEntrada] = useState('08:30');
  const [saida, setSaida] = useState('18:00');
  const [descansoComida, setDescansoComida] = useState('01:00'); // 1 hora
  const [descansoCafe, setDescansoCafe] = useState('00:15'); // 15 min
  const [computaCafe, setComputaCafe] = useState(false); // si el café cuenta como tiempo de trabajo por convenio

  const result = useMemo(() => {
    const eMin = parseTime(entrada);
    const sMin = parseTime(saida);
    const comidaMin = parseTime(descansoComida);
    const cafeMin = parseTime(descansoCafe);

    let tiempoPresenciaMin = sMin - eMin;
    if (tiempoPresenciaMin < 0) tiempoPresenciaMin += 24 * 60;

    const totalDescansosMin = comidaMin + cafeMin;

    // Si el descanso de café computa como trabajo según convenio, solo restamos la comida
    const descuentoEfectivoMin = computaCafe ? comidaMin : totalDescansosMin;
    const tiempoEfectivoMin = Math.max(0, tiempoPresenciaMin - descuentoEfectivoMin);

    return {
      tiempoPresenciaMin,
      tiempoPresenciaStr: formatHoursSpanish(tiempoPresenciaMin),
      totalDescansosMin,
      totalDescansosStr: formatHoursSpanish(totalDescansosMin),
      tiempoEfectivoMin,
      tiempoEfectivoStr: formatHoursSpanish(tiempoEfectivoMin),
      tiempoEfectivoDecimal: toDecimalHours(tiempoEfectivoMin),
    };
  }, [entrada, saida, descansoComida, descansoCafe, computaCafe]);

  const handleExport = () => {
    exportTimesheetPdf({
      title: 'Cálculo de Jornada con Descansos',
      type: 'diaria',
      items: [
        { label: 'Hora de Entrada', value: entrada },
        { label: 'Hora de Salida', value: saida },
        { label: 'Tiempo en Empresa (Bruto)', value: result.tiempoPresenciaStr },
        { label: 'Pausa Comida', value: descansoComida },
        { label: 'Pausa Café/Corta', value: `${descansoCafe} (${computaCafe ? 'Computa como trabajo' : 'No computa'})` },
        { label: 'Total Descansos Descontados', value: result.totalDescansosStr },
      ],
      summary: {
        totalLabel: 'Tiempo Efectivo de Trabajo',
        totalValue: result.tiempoEfectivoStr,
        decimalValue: `${formatDecimalES(result.tiempoEfectivoDecimal)} horas decimales`,
        notes: computaCafe
          ? 'La pausa corta se ha considerado tiempo de trabajo efectivo conforme a convenio.'
          : 'Todos los descansos se han descontado del cómputo total de trabajo.',
      },
    });
  };

  return (
    <div className="card-elevated w-full max-w-xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="input-label">Hora de entrada</label>
          <input
            type="time"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            className="input-field text-lg font-semibold"
          />
        </div>

        <div>
          <label className="input-label">Hora de salida</label>
          <input
            type="time"
            value={saida}
            onChange={(e) => setSaida(e.target.value)}
            className="input-field text-lg font-semibold"
          />
        </div>
      </div>

      {/* Break 1: Main Meal Break with Hours and Minutes */}
      <div className="p-4 rounded-xl bg-surface-50 border border-surface-200/80 space-y-2">
        <BreakTimeInput
          idPrefix="break-comida"
          label="Pausa principal (Almuerzo / Comida)"
          value={descansoComida}
          onChange={setDescansoComida}
        />
        <span className="text-xs text-ink-400 block pt-1">
          Normalmente entre 30 min y 2 horas. No computable como tiempo de trabajo.
        </span>
      </div>

      {/* Break 2: Secondary Coffee / Rest Break */}
      <div className="p-4 rounded-xl bg-surface-50 border border-surface-200/80 space-y-3">
        <BreakTimeInput
          idPrefix="break-cafe"
          label="Pausa secundaria (Café, refrigerio o bocadillo)"
          value={descansoCafe}
          onChange={setDescansoCafe}
        />

        <div className="flex items-center gap-2 pt-1 border-t border-surface-200/50">
          <input
            id="computa-check"
            type="checkbox"
            checked={computaCafe}
            onChange={(e) => setComputaCafe(e.target.checked)}
            className="w-4 h-4 text-brand-600 rounded cursor-pointer"
          />
          <label htmlFor="computa-check" className="text-xs text-ink-700 font-medium cursor-pointer">
            ¿Tu convenio considera esta pausa como tiempo de trabajo efectivo? (Bocadillo remunerado)
          </label>
        </div>
      </div>

      {/* Results */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/80 p-6 text-center space-y-3">
        <div className="text-xs uppercase tracking-wider font-bold text-brand-700">
          Tiempo efectivo de trabajo resultante
        </div>
        <div className="text-4xl md:text-5xl font-extrabold text-brand-700 tracking-tight">
          {result.tiempoEfectivoStr}
        </div>
        <div className="text-sm font-semibold text-brand-900">
          {formatDecimalES(result.tiempoEfectivoDecimal)} horas en decimal
        </div>

        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-brand-200/60 text-xs text-brand-900 font-medium">
          <div>
            Permanencia total: <strong>{result.tiempoPresenciaStr}</strong>
          </div>
          <div>
            Total pausas: <strong>{result.totalDescansosStr}</strong>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleExport}
          className="btn-primary flex-1 flex items-center justify-center gap-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          Exportar informe con descansos en PDF
        </button>
      </div>
    </div>
  );
}
