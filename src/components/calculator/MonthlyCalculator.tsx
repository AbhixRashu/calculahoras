'use client';

import { useState, useCallback } from 'react';
import { calculateMonthlyWithTarget } from '@/lib/calculations/monthly';
import { formatDecimalBR } from '@/lib/calculations';

export function MonthlyCalculator() {
  const [diasUteis, setDiasUteis] = useState('22');
  const [horasDiarias, setHorasDiarias] = useState('08:00');
  const [horasRealizadas, setHorasRealizadas] = useState('');
  const [result, setResult] = useState<ReturnType<typeof calculateMonthlyWithTarget> | null>(null);

  const handleCalculate = useCallback(() => {
    const dias = parseInt(diasUteis) || 22;
    const calculated = calculateMonthlyWithTarget(dias, horasDiarias, horasRealizadas || '00:00');
    setResult(calculated);
  }, [diasUteis, horasDiarias, horasRealizadas]);

  const handleClear = () => {
    setDiasUteis('22');
    setHorasDiarias('08:00');
    setHorasRealizadas('');
    setResult(null);
  };

  return (
    <div className="card-elevated w-full max-w-lg mx-auto">
      <div className="space-y-5">
        <div>
          <label htmlFor="mensal-dias" className="input-label">Dias úteis por mês</label>
          <input id="mensal-dias" type="number" className="input-field" value={diasUteis} onChange={(e) => setDiasUteis(e.target.value)} min="1" max="31" />
        </div>
        <div>
          <label htmlFor="mensal-horas" className="input-label">Horas diárias</label>
          <input id="mensal-horas" type="time" className="input-field" value={horasDiarias} onChange={(e) => setHorasDiarias(e.target.value)} />
        </div>
        <div>
          <label htmlFor="mensal-realizadas" className="input-label">Horas realizadas (opcional)</label>
          <input id="mensal-realizadas" type="time" className="input-field" value={horasRealizadas} onChange={(e) => setHorasRealizadas(e.target.value)} placeholder="08:00" />
          <p className="text-xs text-ink-400 mt-1">Deixe vazio para calcular apenas o previsto</p>
        </div>
        <div className="flex gap-3 pt-2">
          <button onClick={handleCalculate} className="btn-primary flex-1">Calcular mensal</button>
          <button onClick={handleClear} className="btn-secondary">Limpar</button>
        </div>
      </div>
      {result && (
        <div className="mt-8 pt-6 border-t border-surface-200">
          <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-4">Resultado mensal</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-brand-50 rounded-xl p-4 border border-brand-100">
              <p className="text-2xl font-bold text-brand-700">{result.horasPrevistas}</p>
              <p className="text-xs text-ink-500 mt-1">Horas previstas</p>
            </div>
            <div className="bg-surface-100 rounded-xl p-4 border border-surface-200">
              <p className="text-2xl font-bold text-ink-800">{result.horasTrabalhadas}</p>
              <p className="text-xs text-ink-500 mt-1">Horas trabalhadas</p>
            </div>
            <div className="bg-surface-100 rounded-xl p-4 border border-surface-200">
              <p className="text-2xl font-bold text-brand-600">{result.horasExtras}</p>
              <p className="text-xs text-ink-500 mt-1">Horas extras</p>
            </div>
            <div className="bg-surface-100 rounded-xl p-4 border border-surface-200">
              <p className="text-2xl font-bold text-ink-800">{formatDecimalBR(result.horasPrevistasDecimal)} h</p>
              <p className="text-xs text-ink-500 mt-1">Em decimal</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
