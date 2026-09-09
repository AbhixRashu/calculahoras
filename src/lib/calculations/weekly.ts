import { WeeklyResult } from './types';
import { parseTime, formatTime, toDecimalHours } from './index';

export function calculateWeeklyHours(
  dailyEntries: string[]
): WeeklyResult {
  let totalMinutos = 0;
  let diasTrabalhados = 0;

  for (const entry of dailyEntries) {
    if (entry && entry.trim() !== '') {
      const minutos = parseTime(entry);
      if (minutos > 0) {
        totalMinutos += minutos;
        diasTrabalhados++;
      }
    }
  }

  const mediaMinutos = diasTrabalhados > 0 ? Math.round(totalMinutos / diasTrabalhados) : 0;

  return {
    totalSemanal: formatTime(totalMinutos),
    totalSemanalDecimal: toDecimalHours(totalMinutos),
    mediaDiaria: formatTime(mediaMinutos),
    mediaDiariaDecimal: toDecimalHours(mediaMinutos),
  };
}
