import { DepartureResult } from './types';
import { parseTime, formatTime } from './index';

export function calculateDepartureTime(
  entrada: string,
  jornadaNormal: string,
  intervalo: string
): DepartureResult {
  const entradaMin = parseTime(entrada);
  const jornadaMin = parseTime(jornadaNormal) || 480;
  const intervaloMin = parseTime(intervalo) || 60;

  if (entradaMin === 0) {
    return { horaSaida: '00:00' };
  }

  const saidaMin = entradaMin + jornadaMin + intervaloMin;
  const saidaAjustada = saidaMin % (24 * 60);

  return { horaSaida: formatTime(saidaAjustada) };
}
