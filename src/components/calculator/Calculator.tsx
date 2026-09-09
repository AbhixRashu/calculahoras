'use client';

import { useState, useCallback } from 'react';
import { calculateWorkedHours } from '@/lib/calculations';
import { formatDecimalES } from '@/lib/calculations';
import type { CalculationResult, TimeEntry } from '@/lib/calculations/types';
import { WorkTimeline } from '@/components/timeline/WorkTimeline';
import { SmartResults } from '@/components/results/SmartResults';
import { CalculatorHistory, saveToHistory } from './CalculatorHistory';
import { BreakTimeInput } from './BreakTimeInput';
import { exportTimesheetPdf, copySummaryToClipboard } from '@/lib/exportPdf';

export function Calculator() {
  const [entry, setEntry] = useState<TimeEntry>({
    entrada: '09:00',
    saida: '18:00',
    intervalo: '01:00',
    jornadaNormal: '08:00',
  });

  const [result, setResult] = useState<CalculationResult | null>(() =>
    calculateWorkedHours('09:00', '18:00', '01:00', '08:00')
  );
  const [hasCalculated, setHasCalculated] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleChange = useCallback((field: keyof TimeEntry, value: string) => {
    setEntry((prev) => {
      const updated = { ...prev, [field]: value };
      // Auto-recalculate for instant fluid responsiveness
      const calculated = calculateWorkedHours(
        updated.entrada,
        updated.saida,
        updated.intervalo,
        updated.jornadaNormal
      );
      setResult(calculated);
      setHasCalculated(true);
      return updated;
    });
  }, []);

  const handleCalculate = useCallback(() => {
    const calculated = calculateWorkedHours(
      entry.entrada,
      entry.saida,
      entry.intervalo,
      entry.jornadaNormal
    );
    setResult(calculated);
    setHasCalculated(true);
    saveToHistory({
      entrada: entry.entrada,
      saida: entry.saida,
      intervalo: entry.intervalo,
      resultado: calculated.horasTrabalhadas,
      decimal: calculated.horasTrabalhadasDecimal,
    });
  }, [entry]);

  const handleClear = useCallback(() => {
    setEntry({ entrada: '', saida: '', intervalo: '00:00', jornadaNormal: '08:00' });
    setResult(null);
    setHasCalculated(false);
  }, []);

  const handleExportPdf = useCallback(() => {
    if (!result) return;
    exportTimesheetPdf({
      title: 'Registro Diario de Horas de Trabajo',
      type: 'diaria',
      items: [
        { label: 'Hora de Entrada', value: entry.entrada || '-' },
        { label: 'Hora de Salida', value: entry.saida || '-' },
        { label: 'Descanso / Pausa', value: entry.intervalo },
        { label: 'Horas Ordinarias', value: `${result.horasNormais} h` },
        { label: 'Horas Extras', value: `${result.horasExtras} h` },
      ],
      summary: {
        totalLabel: 'Total Horas Efectivas Trabajadas',
        totalValue: `${result.totalHoras} h ${String(result.totalMinutos).padStart(2, '0')} min`,
        decimalValue: `${formatDecimalES(result.horasTrabalhadasDecimal)} horas en decimal`,
      },
    });
  }, [entry, result]);

  const handleCopySummary = useCallback(() => {
    if (!result) return;
    const txt = `CalculaHoras - Registro Diario:\nEntrada: ${entry.entrada}\nSalida: ${entry.saida}\nDescanso: ${entry.intervalo}\nTotal: ${result.totalHoras}h ${result.totalMinutos}min (${formatDecimalES(result.horasTrabalhadasDecimal)}h decimal)`;
    copySummaryToClipboard(txt).then((ok) => {
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    });
  }, [entry, result]);

  return (
    <div className="card-elevated w-full max-w-xl mx-auto space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="entrada" className="input-label">Hora de entrada</label>
            <input
              id="entrada"
              type="time"
              className="input-field text-lg font-semibold"
              value={entry.entrada}
              onChange={(e) => handleChange('entrada', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="saida" className="input-label">Hora de salida</label>
            <input
              id="saida"
              type="time"
              className="input-field text-lg font-semibold"
              value={entry.saida}
              onChange={(e) => handleChange('saida', e.target.value)}
            />
          </div>
        </div>

        {/* Upgraded Break Input with Hours, Minutes, and Presets */}
        <div className="p-4 rounded-xl bg-surface-50 border border-surface-200/80">
          <BreakTimeInput
            idPrefix="calc-daily"
            label="Descanso (pausa comida o café)"
            value={entry.intervalo}
            onChange={(val) => handleChange('intervalo', val)}
          />
        </div>

        <div>
          <label htmlFor="jornada" className="input-label">Jornada ordinaria de referencia</label>
          <input
            id="jornada"
            type="time"
            className="input-field"
            value={entry.jornadaNormal}
            onChange={(e) => handleChange('jornadaNormal', e.target.value)}
          />
          <span className="text-xs text-ink-400 mt-1 block">
            Por defecto 08:00 (jornada completa diaria de 8 horas)
          </span>
        </div>

        <div className="flex gap-3 pt-2">
          <button onClick={handleCalculate} className="btn-primary flex-1 flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            Calcular horas
          </button>
          <button onClick={handleClear} className="btn-secondary">
            Limpiar
          </button>
        </div>
      </div>

      {hasCalculated && result && (
        <div className="space-y-6 pt-2 border-t border-surface-200/80">
          <SmartResults result={result} entrada={entry.entrada} saida={entry.saida} intervalo={entry.intervalo} />

          {/* Export and copy bar */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={handleExportPdf}
              className="btn-primary flex-1 py-2.5 text-sm flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Exportar a PDF
            </button>
            <button
              type="button"
              onClick={handleCopySummary}
              className="btn-secondary py-2.5 px-4 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              {copied ? '✓ ¡Copiado!' : 'Copiar resumen'}
            </button>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-ink-700 mb-3">Línea del tiempo del día</h4>
            <WorkTimeline entrada={entry.entrada} saida={entry.saida} intervalo={entry.intervalo} jornadaNormal={entry.jornadaNormal} />
          </div>
        </div>
      )}

      {/* Privacy notice */}
      <p className="text-xs text-ink-400 text-center mt-2">
        Tus horarios permanecen en tu dispositivo. Ningún dato se envía ni se almacena en servidores.
      </p>

      <CalculatorHistory />
    </div>
  );
}
