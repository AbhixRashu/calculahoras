'use client';

import React, { useState, useMemo } from 'react';
import { formatDecimalBR } from '@/lib/calculations';
import { exportTimesheetPdf } from '@/lib/exportPdf';

export function OvertimeCalculator() {
  const [salarioBase, setSalarioBase] = useState(3000);
  const [divisorCLT, setDivisorCLT] = useState(220); // 220 ou 200
  const [horasExtras50, setHorasExtras50] = useState(12); // Horas extras normais
  const [horasExtras100, setHorasExtras100] = useState(6); // Domingos e feriados

  const result = useMemo(() => {
    const valorHoraNormal = salarioBase > 0 && divisorCLT > 0 ? salarioBase / divisorCLT : 0;
    const valorHoraExtra50 = valorHoraNormal * 1.5;
    const valorHoraExtra100 = valorHoraNormal * 2.0;

    const valorTotalExtras50 = horasExtras50 * valorHoraExtra50;
    const valorTotalExtras100 = horasExtras100 * valorHoraExtra100;
    const subtotalExtras = valorTotalExtras50 + valorTotalExtras100;

    // Cálculo estimado do DSR (Descanso Semanal Remunerado)
    // Fórmula média: (Total de Horas Extras / Dias Úteis do Mês) * Domingos e Feriados do Mês
    // Em média, equivale a aproximadamente 1/6 (16,67%) do valor das horas extras
    const valorDSR = subtotalExtras * (1 / 6);
    const totalGeralExtras = subtotalExtras + valorDSR;

    const totalHorasQtd = horasExtras50 + horasExtras100;

    return {
      valorHoraNormal,
      valorHoraExtra50,
      valorHoraExtra100,
      valorTotalExtras50,
      valorTotalExtras100,
      subtotalExtras,
      valorDSR,
      totalGeralExtras,
      totalHorasQtd,
    };
  }, [salarioBase, divisorCLT, horasExtras50, horasExtras100]);

  const handleExport = () => {
    exportTimesheetPdf({
      title: 'Relatório Oficial de Horas Extras (CLT)',
      type: 'mensual',
      items: [
        { label: 'Salário Base Registrado', value: `R$ ${formatDecimalBR(salarioBase)}` },
        { label: 'Valor Hora Normal (Divisor ' + divisorCLT + ')', value: `R$ ${formatDecimalBR(result.valorHoraNormal)}/h` },
        { label: 'Horas Extras 50% (' + horasExtras50 + 'h)', value: `R$ ${formatDecimalBR(result.valorTotalExtras50)}` },
        { label: 'Horas Extras 100% (' + horasExtras100 + 'h)', value: `R$ ${formatDecimalBR(result.valorTotalExtras100)}` },
        { label: 'Reflexo no DSR (Lei 605/49)', value: `R$ ${formatDecimalBR(result.valorDSR)}` },
      ],
      summary: {
        totalLabel: 'Total Bruto de Horas Extras a Receber',
        totalValue: `R$ ${formatDecimalBR(result.totalGeralExtras)}`,
        decimalValue: `Correspondente a ${result.totalHorasQtd} horas extras acumuladas com DSR`,
        notes: 'Conforme Art. 59 da CLT e Art. 7º, XVI da Constituição Federal.',
      },
    });
  };

  return (
    <div className="card-elevated w-full max-w-xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="input-label">Salário Bruto na Carteira (R$)</label>
          <input
            type="number"
            min="0"
            step="50"
            value={salarioBase}
            onChange={(e) => setSalarioBase(parseFloat(e.target.value) || 0)}
            className="input-field text-lg font-bold"
          />
          <span className="text-xs text-ink-400 mt-1 block">Base para o cálculo da hora normal</span>
        </div>

        <div>
          <label className="input-label">Jornada Semanal / Divisor CLT</label>
          <select
            value={divisorCLT}
            onChange={(e) => setDivisorCLT(parseInt(e.target.value, 10) || 220)}
            className="input-field text-sm font-bold"
          >
            <option value={220}>Divisor 220 (44 horas semanais)</option>
            <option value={200}>Divisor 200 (40 horas semanais)</option>
            <option value={180}>Divisor 180 (36 horas semanais)</option>
          </select>
          <span className="text-xs text-ink-400 mt-1 block">
            Hora normal: <strong>R$ {formatDecimalBR(result.valorHoraNormal)}</strong>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="input-label">Horas Extras a 50% (Dias úteis e sábado)</label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={horasExtras50}
            onChange={(e) => setHorasExtras50(parseFloat(e.target.value) || 0)}
            className="input-field text-lg font-bold"
          />
          <span className="text-xs text-ink-400 mt-1 block">
            Valor/hora (+50%): R$ {formatDecimalBR(result.valorHoraExtra50)}
          </span>
        </div>

        <div>
          <label className="input-label">Horas Extras a 100% (Domingos e feriados)</label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={horasExtras100}
            onChange={(e) => setHorasExtras100(parseFloat(e.target.value) || 0)}
            className="input-field text-lg font-bold"
          />
          <span className="text-xs text-ink-400 mt-1 block">
            Valor/hora (+100%): R$ {formatDecimalBR(result.valorHoraExtra100)}
          </span>
        </div>
      </div>

      {/* Resultados em destaque */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/90 p-6 text-center space-y-3">
        <div className="text-xs uppercase tracking-wider font-bold text-brand-700">
          Total bruto de horas extras a receber
        </div>
        <div className="text-4xl md:text-5xl font-extrabold text-brand-700 tracking-tight">
          R$ {formatDecimalBR(result.totalGeralExtras)}
        </div>
        <p className="text-xs text-brand-900 font-semibold">
          Já inclui R$ {formatDecimalBR(result.valorDSR)} referente ao reflexo obrigatório no DSR
        </p>

        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-brand-200/70 text-xs text-brand-900 font-medium">
          <div>
            Total extras 50%: <strong>R$ {formatDecimalBR(result.valorTotalExtras50)}</strong>
          </div>
          <div>
            Total extras 100%: <strong>R$ {formatDecimalBR(result.valorTotalExtras100)}</strong>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleExport}
          className="btn-primary flex-1 py-3 flex items-center justify-center gap-2 text-sm font-bold cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          Exportar cálculo de horas extras em PDF
        </button>
      </div>
    </div>
  );
}
