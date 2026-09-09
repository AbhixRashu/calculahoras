'use client';

import { useState, useCallback } from 'react';
import { convertToDecimalHours, convertFromDecimalHours } from '@/lib/calculations/decimal';

export function DecimalCalculator() {
  const [direction, setDirection] = useState<'paraDecimal' | 'deDecimal'>('paraDecimal');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [decimalStr, setDecimalStr] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = useCallback(() => {
    if (direction === 'paraDecimal') {
      const calculated = convertToDecimalHours(hours, minutes);
      setResult(calculated.horasFormatadas);
    } else {
      const calculated = convertFromDecimalHours(decimalStr);
      setResult(calculated.horasFormatadas);
    }
  }, [direction, hours, minutes, decimalStr]);

  const handleClear = useCallback(() => {
    setHours('');
    setMinutes('');
    setDecimalStr('');
    setResult(null);
  }, []);

  return (
    <div className="card-elevated w-full max-w-lg mx-auto">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setDirection('paraDecimal')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
            direction === 'paraDecimal'
              ? 'bg-brand-600 text-white'
              : 'bg-surface-100 text-ink-600 hover:bg-surface-200'
          }`}
        >
          Horas → Decimal
        </button>
        <button
          onClick={() => setDirection('deDecimal')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
            direction === 'deDecimal'
              ? 'bg-brand-600 text-white'
              : 'bg-surface-100 text-ink-600 hover:bg-surface-200'
          }`}
        >
          Decimal → Horas
        </button>
      </div>

      <div className="space-y-5">
        {direction === 'paraDecimal' ? (
          <div className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="dec-hours" className="input-label">Horas</label>
              <input
                id="dec-hours"
                type="number"
                className="input-field"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="8"
                min="0"
                max="23"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="dec-minutes" className="input-label">Minutos</label>
              <input
                id="dec-minutes"
                type="number"
                className="input-field"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="30"
                min="0"
                max="59"
              />
            </div>
          </div>
        ) : (
          <div>
            <label htmlFor="dec-value" className="input-label">Valor decimal</label>
            <input
              id="dec-value"
              type="text"
              className="input-field"
              value={decimalStr}
              onChange={(e) => setDecimalStr(e.target.value)}
              placeholder="7,5"
            />
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <button onClick={handleCalculate} className="btn-primary flex-1">
            Converter
          </button>
          <button onClick={handleClear} className="btn-secondary">
            Limpar
          </button>
        </div>
      </div>

      {result && (
        <div className="mt-8 pt-6 border-t border-surface-200">
          <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-4">
            Resultado
          </h3>
          <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 text-center">
            <div className="result-value animate-number-change text-2xl">
              {result}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
