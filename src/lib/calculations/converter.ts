import { ConversionResult } from './types';
import { parseTime, toDecimalHours } from './index';

export function convertTime(
  value: string,
  direction: 'paraMinutos' | 'paraHoras'
): ConversionResult {
  if (!value || value.trim() === '') {
    return { resultado: '0', resultadoDecimal: 0 };
  }

  if (direction === 'paraMinutos') {
    const decimal = parseFloat(value.replace(',', '.')) || 0;
    const horas = Math.floor(decimal);
    const minutos = Math.round((decimal - horas) * 60);
    const totalMinutos = horas * 60 + minutos;
    return {
      resultado: `${totalMinutos} minutos`,
      resultadoDecimal: totalMinutos,
    };
  } else {
    const minutos = parseInt(value, 10) || 0;
    const horas = Math.floor(minutos / 60);
    const minRestantes = minutos % 60;
    const decimal = toDecimalHours(minutos);
    return {
      resultado: `${horas}h ${minRestantes}min (${decimal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} horas)`,
      resultadoDecimal: decimal,
    };
  }
}
