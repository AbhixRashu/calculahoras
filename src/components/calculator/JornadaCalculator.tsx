'use client';

import { useState, useCallback } from 'react';
import { calculateJornada } from '@/lib/calculations/jornada';
import { formatDecimalBR, toDecimalHours } from '@/lib/calculations';
import { BreakTimeInput } from './BreakTimeInput';

export function JornadaCalculator() {
  const [entrada, setEntrada] = useState('08:00');
  const [saida, setSaida] = useState('17:00');
  const [intervalo, setIntervalo] = useState('01:00');
  const [jornada, setJornada] = useState('08:00');
  const [result, setResult] = useState<ReturnType<typeof calculateJornada> | null>(null);

  const handleCalculate = useCallback(() => {
    const calculated = calculateJornada(entrada, saida, intervalo, jornada);
    setResult(calculated);
  }, [entrada, saida, intervalo, jornada]);

  const handleClear = () => {
    setEntrada('');
    setSaida('');
    setIntervalo('00:00');
    setJornada('08:00');
    setResult(null);
  };

  return (
    <div className="card-elevated w-full max-w-lg mx-auto">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="jorn-entrada" className="input-label">Hora de entrada</label>
            <input id="jorn-entrada" type="time" className="input-field" value={entrada} onChange={(e) => setEntrada(e.target.value)} />
          </div>
          <div>
            <label htmlFor="jorn-saida" className="input-label">Hora de saída</label>
            <input id="jorn-saida" type="time" className="input-field" value={saida} onChange={(e) => setSaida(e.target.value)} />
          </div>
        </div>
        <div className="p-4 rounded-xl bg-surface-50 border border-surface-200">
          <BreakTimeInput
            idPrefix="jorn-intervalo"
            label="Intervalo de almoço / descanso"
            value={intervalo}
            onChange={setIntervalo}
          />
        </div>
        <div>
          <label htmlFor="jorn-jornada" className="input-label">Jornada prevista</label>
          <input id="jorn-jornada" type="time" className="input-field" value={jornada} onChange={(e) => setJornada(e.target.value)} />
        </div>
        <div className="flex gap-3 pt-2">
          <button onClick={handleCalculate} className="btn-primary flex-1">Analisar jornada</button>
          <button onClick={handleClear} className="btn-secondary">Limpar</button>
        </div>
      </div>
      {result && (
        <div className="mt-8 pt-6 border-t border-surface-200">
          <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-4">Análise da jornada</h3>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-ink-600">Progresso da jornada</span>
              <span className="font-semibold text-brand-600">{result.percentualCompleto}%</span>
            </div>
            <div className="w-full h-3 bg-surface-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-full transition-all duration-1000"
                style={{ width: `${result.percentualCompleto}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-brand-50 rounded-xl p-4 border border-brand-100">
              <p className="text-2xl font-bold text-brand-700">{result.trabalhado}</p>
              <p className="text-xs text-ink-500 mt-1">Trabalhado</p>
            </div>
            <div className="bg-surface-100 rounded-xl p-4 border border-surface-200">
              <p className="text-2xl font-bold text-ink-800">{result.previsto}</p>
              <p className="text-xs text-ink-500 mt-1">Previsto</p>
            </div>
            <div className="bg-surface-100 rounded-xl p-4 border border-surface-200">
              <p className="text-2xl font-bold text-brand-600">{result.extras}</p>
              <p className="text-xs text-ink-500 mt-1">Extras</p>
            </div>
            <div className="bg-surface-100 rounded-xl p-4 border border-surface-200">
              <p className="text-2xl font-bold text-ink-800">{result.restante}</p>
              <p className="text-xs text-ink-500 mt-1">Restante</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
