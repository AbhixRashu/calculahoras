'use client';

import { useState, useCallback } from 'react';
import { convertTime } from '@/lib/calculations/converter';

export function ConverterCalculator() {
  const [direction, setDirection] = useState<'paraMinutos' | 'paraHoras'>('paraMinutos');
  const [value, setValue] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = useCallback(() => {
    const calculated = convertTime(value, direction);
    setResult(calculated.resultado);
  }, [value, direction]);

  const handleClear = useCallback(() => {
    setValue('');
    setResult(null);
  }, []);

  return (
    <div className="card-elevated w-full max-w-lg mx-auto">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setDirection('paraMinutos')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
            direction === 'paraMinutos'
              ? 'bg-brand-600 text-white'
              : 'bg-surface-100 text-ink-600 hover:bg-surface-200'
          }`}
        >
          Horas → Minutos
        </button>
        <button
          onClick={() => setDirection('paraHoras')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
            direction === 'paraHoras'
              ? 'bg-brand-600 text-white'
              : 'bg-surface-100 text-ink-600 hover:bg-surface-200'
          }`}
        >
          Minutos → Horas
        </button>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="conv-value" className="input-label">
            {direction === 'paraMinutos' ? 'Horas (decimal)' : 'Minutos'}
          </label>
          <input
            id="conv-value"
            type="text"
            className="input-field"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={direction === 'paraMinutos' ? '7,5' : '450'}
          />
        </div>

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
