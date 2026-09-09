'use client';

import { useState } from 'react';
import type { CalculationResult } from '@/lib/calculations/types';
import { formatDecimalES } from '@/lib/calculations';

interface SmartResultsProps {
  result: CalculationResult;
  entrada: string;
  saida: string;
  intervalo: string;
  jornadaNormal?: string;
}

export function SmartResults({ result, entrada, saida, intervalo, jornadaNormal = '08:00' }: SmartResultsProps) {
  const [copied, setCopied] = useState(false);

  const textResult = `Horas trabajadas: ${result.horasTrabalhadas} (${formatDecimalES(result.horasTrabalhadasDecimal)} h)
Horas ordinarias: ${result.horasNormais}
Horas extras: ${result.horasExtras}
Entrada: ${entrada} | Salida: ${saida} | Descanso: ${intervalo}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textResult);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = textResult;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Cálculo de horas — CalculaHoras',
          text: textResult,
          url: window.location.href,
        });
      } catch { /* user cancelled */ }
    } else {
      handleCopy();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mt-4 pt-4 border-t border-surface-200">
      {/* Primary result */}
      <div className="text-center mb-5">
        <p className="text-xs font-semibold text-ink-400 uppercase tracking-wider mb-1">Resultado del cálculo</p>
        <div className="text-5xl md:text-6xl font-bold text-brand-600 tracking-tight">
          {result.totalHoras}<span className="text-3xl font-semibold">h</span> {result.totalMinutos}<span className="text-3xl font-semibold">min</span>
        </div>
        <p className="text-ink-500 mt-1 font-medium">Horas totales de trabajo efectivo</p>
      </div>

      {/* Detail grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-brand-50 rounded-xl p-3.5 border border-brand-100 text-center">
          <p className="text-2xl font-bold text-brand-700">{formatDecimalES(result.horasTrabalhadasDecimal)} h</p>
          <p className="text-xs text-ink-500 mt-0.5">En formato decimal</p>
        </div>
        <div className="bg-surface-100 rounded-xl p-3.5 border border-surface-200 text-center">
          <p className="text-2xl font-bold text-ink-800">{result.horasNormais}</p>
          <p className="text-xs text-ink-500 mt-0.5">Horas ordinarias</p>
        </div>
        <div className="bg-surface-100 rounded-xl p-3.5 border border-surface-200 text-center">
          <p className="text-2xl font-bold text-ink-800">{result.horasExtras}</p>
          <p className="text-xs text-ink-500 mt-0.5">Horas extras</p>
        </div>
        <div className="bg-brand-50 rounded-xl p-3.5 border border-brand-100 text-center">
          <p className="text-2xl font-bold text-brand-700">
            {result.horasExtras !== '00:00' ? '+' : ''}{result.horasExtrasDecimal > 0 ? formatDecimalES(result.horasExtrasDecimal) : '0,00'} h
          </p>
          <p className="text-xs text-ink-500 mt-0.5">Extras en decimal</p>
        </div>
      </div>

      {/* Progress ring */}
      <div className="flex justify-center mb-5">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#e7e5e4" strokeWidth="8" />
            <circle
              cx="60" cy="60" r="52" fill="none" stroke="#10b981" strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 52}`}
              strokeDashoffset={`${2 * Math.PI * 52 * (1 - Math.min(1, result.horasTrabalhadasMinutos / (parseTime(jornadaNormal) || 480)))}`}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-ink-900">{Math.round(Math.min(100, (result.horasTrabalhadasMinutos / (parseTime(jornadaNormal) || 480)) * 100))}%</span>
            <span className="text-xs text-ink-500">de la jornada</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-surface-100 hover:bg-surface-200 text-ink-700 transition-colors"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              ¡Copiado!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
              Copiar resultado
            </>
          )}
        </button>
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-surface-100 hover:bg-surface-200 text-ink-700 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
          Compartir
        </button>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-surface-100 hover:bg-surface-200 text-ink-700 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>
          Imprimir
        </button>
      </div>
    </div>
  );
}

function parseTime(timeStr: string): number {
  if (!timeStr) return 0;
  const [h, m] = timeStr.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}
