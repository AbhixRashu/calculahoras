import { IntervalResult } from './types';
import { parseTime, formatTime, toDecimalHours } from './index';

export function calculateInterval(
  inicio: string,
  fim: string
): IntervalResult {
  const inicioMin = parseTime(inicio);
  const fimMin = parseTime(fim);

  if (inicioMin === 0 && fimMin === 0) {
    return { duracao: '00:00', duracaoDecimal: 0 };
  }

  let diff = fimMin - inicioMin;
  if (diff < 0) diff += 24 * 60;

  return {
    duracao: formatTime(diff),
    duracaoDecimal: toDecimalHours(diff),
  };
}
