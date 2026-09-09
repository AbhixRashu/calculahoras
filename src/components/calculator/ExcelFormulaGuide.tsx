'use client';

import React, { useState } from 'react';
import { copySummaryToClipboard } from '@/lib/exportPdf';

export function ExcelFormulaGuide() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, formula: string) => {
    copySummaryToClipboard(formula).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  const handleDownloadCsv = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      encodeURIComponent(
        'Día,Hora Entrada,Hora Salida,Descanso (hh:mm),Horas Trabajadas,Horas Decimales\n' +
          'Lunes,09:00,18:00,01:00,"=RESIDUO(C2-B2;1)-D2","=(E2*24)"\n' +
          'Martes,09:00,18:00,01:00,"=RESIDUO(C3-B3;1)-D3","=(E3*24)"\n' +
          'Miércoles,09:00,18:00,01:00,"=RESIDUO(C4-B4;1)-D4","=(E4*24)"\n' +
          'Jueves,09:00,18:00,01:00,"=RESIDUO(C5-B5;1)-D5","=(E5*24)"\n' +
          'Viernes,09:00,15:00,00:00,"=RESIDUO(C6-B6;1)-D6","=(E6*24)"\n' +
          'TOTAL SEMANAL,,,,"=SUMA(E2:E6)","=SUMA(F2:F6)"\n'
      );
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', 'plantilla_calculo_horas_excel.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formulas = [
    {
      key: 'basica',
      title: '1. Fórmula básica (Resta con descanso)',
      code: '=(B2 - A2) - C2',
      explanation: 'Donde A2 es Entrada, B2 es Salida y C2 es Descanso (en formato hora). Válida para jornadas dentro del mismo día.',
    },
    {
      key: 'nocturna',
      title: '2. Fórmula infalible para turno nocturno (Cruza medianoche)',
      code: '=RESIDUO(B2 - A2; 1) - C2',
      explanation: 'La función RESIDUO con divisor 1 resuelve automáticamente el cambio de fecha cuando sales al día siguiente (ej. de 22:00 a 06:00).',
    },
    {
      key: 'decimal',
      title: '3. Convertir resultado a horas decimales (para nómina)',
      code: '=(D2 * 24)',
      explanation: 'Excel almacena los días como enteros (1 = 24h). Multiplica la celda de horas por 24 y aplica formato numérico estándar (ej. 8:30 se convierte en 8,50).',
    },
    {
      key: 'formato',
      title: '4. Formato de celda para que NO se reinicie al pasar de 24 horas',
      code: '[h]:mm',
      explanation: 'Si sumas una semana y supera 24h, el formato normal "hh:mm" se reinicia a 0. Pon los corchetes [h]:mm en Formato de Celdas > Personalizada para ver 40:00 sin errores.',
    },
  ];

  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center p-4 bg-brand-50 border border-brand-200 rounded-2xl">
        <div>
          <h3 className="font-bold text-brand-900 text-sm">Plantilla lista para Excel y Google Sheets</h3>
          <p className="text-xs text-brand-700">Descarga el archivo CSV con las fórmulas ya insertadas</p>
        </div>
        <button
          type="button"
          onClick={handleDownloadCsv}
          className="btn-primary py-2 px-4 text-xs font-bold shrink-0 flex items-center gap-1.5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Descargar Plantilla
        </button>
      </div>

      <div className="space-y-4">
        {formulas.map((item) => (
          <div key={item.key} className="p-5 rounded-2xl bg-white border border-surface-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-ink-900 text-sm">{item.title}</h4>
              <button
                type="button"
                onClick={() => handleCopy(item.key, item.code)}
                className="text-xs px-2.5 py-1 rounded-md bg-surface-100 hover:bg-surface-200 text-ink-700 font-medium transition-colors flex items-center gap-1"
              >
                {copiedKey === item.key ? '✓ Copiado' : 'Copiar fórmula'}
              </button>
            </div>
            <div className="bg-ink-900 text-emerald-400 font-mono text-sm px-4 py-2.5 rounded-xl overflow-x-auto selection:bg-brand-600">
              <code>{item.code}</code>
            </div>
            <p className="text-xs text-ink-500 leading-relaxed">{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
