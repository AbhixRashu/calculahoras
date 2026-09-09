import { JornadaResult } from './types';
import { parseTime, formatTime, toDecimalHours } from './index';

export function calculateJornada(
  entrada: string,
  saida: string,
  intervalo: string,
  jornadaNormal: string
): JornadaResult {
  const entradaMin = parseTime(entrada);
  const saidaMin = parseTime(saida);
  const intervaloMin = parseTime(intervalo);
  const jornadaMin = parseTime(jornadaNormal) || 480;

  if (entradaMin === 0 && saidaMin === 0) {
    return {
      trabalhado: '00:00',
      previsto: formatTime(jornadaMin),
      extras: '00:00',
      restante: formatTime(jornadaMin),
      percentualCompleto: 0,
    };
  }

  let diffMinutos = saidaMin - entradaMin;
  if (diffMinutos < 0) diffMinutos += 24 * 60;

  const trabalhado = Math.max(0, diffMinutos - intervaloMin);
  const extras = Math.max(0, trabalhado - jornadaMin);
  const restante = Math.max(0, jornadaMin - trabalhado);
  const percentual = Math.min(100, (trabalhado / jornadaMin) * 100);

  return {
    trabalhado: formatTime(trabalhado),
    previsto: formatTime(jornadaMin),
    extras: formatTime(extras),
    restante: formatTime(restante),
    percentualCompleto: Math.round(percentual),
  };
}
