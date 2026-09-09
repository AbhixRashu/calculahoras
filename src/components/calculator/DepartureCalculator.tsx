'use client';

import { useState, useCallback } from 'react';
import { calculateDepartureTime } from '@/lib/calculations/departure';
import { BreakTimeInput } from './BreakTimeInput';

export function DepartureCalculator() {
  const [entrada, setEntrada] = useState('');
  const [jornada, setJornada] = useState('08:00');
  const [intervalo, setIntervalo] = useState('01:00');
  const [result, setResult] = useState<string | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = useCallback(() => {
    const calculated = calculateDepartureTime(entrada, jornada, intervalo);
    setResult(calculated.horaSaida);
    setHasCalculated(true);
  }, [entrada, jornada, intervalo]);

  const handleClear = useCallback(() => {
    setEntrada('');
    setJornada('08:00');
    setIntervalo('01:00');
    setResult(null);
    setHasCalculated(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCalculate();
  }, [handleCalculate]);

  return (
    <div className="card-elevated w-full max-w-lg mx-auto" onKeyDown={handleKeyDown}>
      <div className="space-y-5">
        <div>
          <label htmlFor="dep-entrada" className="input-label">
            Hora de entrada
          </label>
          <input
            id="dep-entrada"
            type="time"
            className="input-field"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            placeholder="08:30"
          />
        </div>

        <div>
          <label htmlFor="dep-jornada" className="input-label">
            Jornada normal
          </label>
          <input
            id="dep-jornada"
            type="time"
            className="input-field"
            value={jornada}
            onChange={(e) => setJornada(e.target.value)}
            placeholder="08:00"
          />
        </div>

        <div className="p-4 rounded-xl bg-surface-50 border border-surface-200">
          <BreakTimeInput
            idPrefix="dep-intervalo"
            label="Intervalo de almoço / descanso"
            value={intervalo}
            onChange={setIntervalo}
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button onClick={handleCalculate} className="btn-primary flex-1">
            Calcular hora de saída
          </button>
          <button onClick={handleClear} className="btn-secondary">
            Limpar
          </button>
        </div>
      </div>

      {hasCalculated && result && (
        <div className="mt-8 pt-6 border-t border-surface-200">
          <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-4">
            Sua hora de saída
          </h3>
          <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 text-center">
            <div className="result-value animate-number-change text-4xl">
              {result}
            </div>
            <div className="result-label mt-2">Hora de saída prevista</div>
          </div>
        </div>
      )}
    </div>
  );
}
