'use client';

import { useState, useCallback } from 'react';
import { calculateNightShift } from '@/lib/calculations/nightshift';
import { formatDecimalBR } from '@/lib/calculations';
import { BreakTimeInput } from './BreakTimeInput';

export function NightShiftCalculator() {
  const [entrada, setEntrada] = useState('22:00');
  const [saida, setSaida] = useState('06:00');
  const [intervalo, setIntervalo] = useState('01:00');
  const [jornada, setJornada] = useState('08:00');
  const [result, setResult] = useState<ReturnType<typeof calculateNightShift> | null>(null);

  const handleCalculate = useCallback(() => {
    const calculated = calculateNightShift(entrada, saida, intervalo, jornada);
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
      <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 mb-5">
        <p className="text-sm text-amber-800">
          <strong>Turno noturno:</strong> Das 22h às 5h. Conforme a CLT, a hora noturna tem 52min30s e adicional de 20%.
        </p>
      </div>
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="not-entrada" className="input-label">Hora de entrada</label>
            <input id="not-entrada" type="time" className="input-field" value={entrada} onChange={(e) => setEntrada(e.target.value)} placeholder="22:00" />
          </div>
          <div>
            <label htmlFor="not-saida" className="input-label">Hora de saída</label>
            <input id="not-saida" type="time" className="input-field" value={saida} onChange={(e) => setSaida(e.target.value)} placeholder="06:00" />
          </div>
        </div>
        <div className="p-4 rounded-xl bg-surface-50 border border-surface-200">
          <BreakTimeInput
            idPrefix="not-intervalo"
            label="Intervalo de descanso (horas e minutos)"
            value={intervalo}
            onChange={setIntervalo}
          />
        </div>
        <div>
          <label htmlFor="not-jornada" className="input-label">Jornada normal</label>
          <input id="not-jornada" type="time" className="input-field" value={jornada} onChange={(e) => setJornada(e.target.value)} />
        </div>
        <div className="flex gap-3 pt-2">
          <button onClick={handleCalculate} className="btn-primary flex-1">Calcular turno noturno</button>
          <button onClick={handleClear} className="btn-secondary">Limpar</button>
        </div>
      </div>
      {result && (
        <div className="mt-8 pt-6 border-t border-surface-200">
          <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-4">Resultado do turno noturno</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-brand-50 rounded-xl p-4 border border-brand-100">
              <p className="text-2xl font-bold text-brand-700">{result.horasTrabalhadas}</p>
              <p className="text-xs text-ink-500 mt-1">Total trabalhado</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <p className="text-2xl font-bold text-amber-700">{result.horasNoturnas}</p>
              <p className="text-xs text-ink-500 mt-1">Horas noturnas</p>
            </div>
            <div className="bg-surface-100 rounded-xl p-4 border border-surface-200">
              <p className="text-2xl font-bold text-ink-800">{result.adicionalNoturno}</p>
              <p className="text-xs text-ink-500 mt-1">Adicional 20%</p>
            </div>
            <div className="bg-surface-100 rounded-xl p-4 border border-surface-200">
              <p className="text-2xl font-bold text-ink-800">{formatDecimalBR(result.horasTrabalhadasDecimal)} h</p>
              <p className="text-xs text-ink-500 mt-1">Em decimal</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
