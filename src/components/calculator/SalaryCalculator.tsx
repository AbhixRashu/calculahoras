'use client';

import React, { useState, useMemo } from 'react';
import { formatDecimalBR } from '@/lib/calculations';
import { exportTimesheetPdf } from '@/lib/exportPdf';

export function SalaryCalculator() {
  const [salarioBase, setSalarioBase] = useState(3000);
  const [divisorCLT, setDivisorCLT] = useState(220); // 220h (44h semanais) ou 200h (40h semanais)
  const [horasExtras50, setHorasExtras50] = useState(10); // Horas extras normais a 50%
  const [horasExtras100, setHorasExtras100] = useState(4); // Horas extras em domingos/feriados a 100%

  const result = useMemo(() => {
    const valorHoraNormal = salarioBase > 0 && divisorCLT > 0 ? salarioBase / divisorCLT : 0;
    const valorHoraExtra50 = valorHoraNormal * 1.5;
    const valorHoraExtra100 = valorHoraNormal * 2.0;

    const totalExtras50 = horasExtras50 * valorHoraExtra50;
    const totalExtras100 = horasExtras100 * valorHoraExtra100;
    const totalHorasExtras = totalExtras50 + totalExtras100;

    // Estimativa de DSR sobre horas extras (média de 1/6 ou aprox. 16.67%)
    const dsrEstimado = totalHorasExtras * (1 / 6);

    const salarioBrutoTotal = salarioBase + totalHorasExtras + dsrEstimado;

    return {
      valorHoraNormal,
      valorHoraExtra50,
      valorHoraExtra100,
      totalExtras50,
      totalExtras100,
      totalHorasExtras,
      dsrEstimado,
      salarioBrutoTotal,
      totalHorasQtd: horasExtras50 + horasExtras100,
    };
  }, [salarioBase, divisorCLT, horasExtras50, horasExtras100]);

  const handleExport = () => {
    exportTimesheetPdf({
      title: 'Cálculo de Salário e Horas Extras (CLT)',
      type: 'mensual',
      items: [
        { label: 'Salário Base', value: `R$ ${formatDecimalBR(salarioBase)}` },
        { label: 'Divisor CLT', value: `${divisorCLT} horas` },
        { label: 'Valor da Hora Normal', value: `R$ ${formatDecimalBR(result.valorHoraNormal)}/h` },
        { label: 'Hora Extra 50%', value: `R$ ${formatDecimalBR(result.valorHoraExtra50)}/h (${horasExtras50}h)` },
        { label: 'Hora Extra 100%', value: `R$ ${formatDecimalBR(result.valorHoraExtra100)}/h (${horasExtras100}h)` },
        { label: 'DSR sobre Extras', value: `R$ ${formatDecimalBR(result.dsrEstimado)}` },
      ],
      summary: {
        totalLabel: 'Salário Bruto Total com Horas Extras',
        totalValue: `R$ ${formatDecimalBR(result.salarioBrutoTotal)}`,
        decimalValue: `Inclui R$ ${formatDecimalBR(result.totalHorasExtras + result.dsrEstimado)} em adicionais e reflexo de DSR`,
      },
    });
  };

  return (
    <div className="card-elevated w-full max-w-xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="input-label">Salário Bruto Mensal (R$)</label>
          <input
            type="number"
            min="0"
            step="50"
            value={salarioBase}
            onChange={(e) => setSalarioBase(parseFloat(e.target.value) || 0)}
            className="input-field text-lg font-bold"
          />
          <span className="text-xs text-ink-400 mt-1 block">Seu salário registrado na carteira</span>
        </div>

        <div>
          <label className="input-label">Carga horária / Divisor CLT</label>
          <select
            value={divisorCLT}
            onChange={(e) => setDivisorCLT(parseInt(e.target.value, 10) || 220)}
            className="input-field text-sm font-bold"
          >
            <option value={220}>Divisor 220 (44h semanais - Mais comum)</option>
            <option value={200}>Divisor 200 (40h semanais - Seg a Sex)</option>
            <option value={180}>Divisor 180 (36h semanais - Turnos)</option>
            <option value={150}>Divisor 150 (30h semanais)</option>
          </select>
          <span className="text-xs text-ink-400 mt-1 block">
            Hora normal: <strong>R$ {formatDecimalBR(result.valorHoraNormal)}</strong>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="input-label">Horas extras a 50% (Dias normais)</label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={horasExtras50}
            onChange={(e) => setHorasExtras50(parseFloat(e.target.value) || 0)}
            className="input-field text-lg font-bold"
          />
          <span className="text-xs text-ink-400 mt-1 block">
            Valor/hora: R$ {formatDecimalBR(result.valorHoraExtra50)}
          </span>
        </div>

        <div>
          <label className="input-label">Horas extras a 100% (Domingos/Feriados)</label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={horasExtras100}
            onChange={(e) => setHorasExtras100(parseFloat(e.target.value) || 0)}
            className="input-field text-lg font-bold"
          />
          <span className="text-xs text-ink-400 mt-1 block">
            Valor/hora: R$ {formatDecimalBR(result.valorHoraExtra100)}
          </span>
        </div>
      </div>

      {/* Cartão de Resultado */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/90 p-6 text-center space-y-3">
        <div className="text-xs uppercase tracking-wider font-bold text-brand-700">
          Salário bruto estimado a receber
        </div>
        <div className="text-4xl md:text-5xl font-extrabold text-brand-700 tracking-tight">
          R$ {formatDecimalBR(result.salarioBrutoTotal)}
        </div>
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-brand-200/70 text-xs text-brand-900 font-medium">
          <div>
            Extras 50%: <strong>R$ {formatDecimalBR(result.totalExtras50)}</strong>
          </div>
          <div>
            Extras 100%: <strong>R$ {formatDecimalBR(result.totalExtras100)}</strong>
          </div>
          <div>
            Reflexo DSR: <strong>R$ {formatDecimalBR(result.dsrEstimado)}</strong>
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
          Exportar cálculo para PDF
        </button>
      </div>
    </div>
  );
}
