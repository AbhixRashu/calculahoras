import { NightShiftResult } from './types';
import { parseTime, formatTime, toDecimalHours } from './index';

// Brazilian law: night shift is 22:00-05:00, with 20% premium
// Also: night hour = 52min 30sec (constitutional reduction)

export function calculateNightShift(
  entrada: string,
  saida: string,
  intervalo: string,
  jornadaNormal: string
): NightShiftResult {
  const entradaMin = parseTime(entrada);
  const saidaMin = parseTime(saida);
  const intervaloMin = parseTime(intervalo);
  const jornadaMin = parseTime(jornadaNormal) || 480;

  if (entradaMin === 0 && saidaMin === 0) {
    return {
      horasTrabalhadas: '00:00',
      horasNoturnas: '00:00',
      adicionalNoturno: '00:00',
      horasTrabalhadasDecimal: 0,
      horasNoturnasDecimal: 0,
    };
  }

  let diffMinutos = saidaMin - entradaMin;
  if (diffMinutos < 0) diffMinutos += 24 * 60;

  const totalTrabalhado = Math.max(0, diffMinutos - intervaloMin);

  // Calculate night hours (22:00 to 05:00 = 330 minutes window)
  let horasNoturnas = 0;
  const NIGHT_START = 22 * 60; // 22:00 in minutes
  const NIGHT_END = 5 * 60;    // 05:00 in minutes

  // Simulate minute by minute for accuracy
  for (let i = 0; i < totalTrabalhado; i++) {
    const currentMinute = (entradaMin + i) % (24 * 60);
    const hour = Math.floor(currentMinute / 60);

    // Night hours: 22:00-05:00
    if (hour >= 22 || hour < 5) {
      horasNoturnas++;
    }
  }

  // Apply constitutional reduction: 1 night hour = 52min 30sec
  const horasNoturnasReduzidas = Math.round(horasNoturnas * (52.5 / 60));
  const adicionalNoturno = Math.round(totalTrabalhado * 0.2);

  return {
    horasTrabalhadas: formatTime(totalTrabalhado),
    horasNoturnas: formatTime(horasNoturnas),
    adicionalNoturno: formatTime(adicionalNoturno),
    horasTrabalhadasDecimal: toDecimalHours(totalTrabalhado),
    horasNoturnasDecimal: toDecimalHours(horasNoturnas),
  };
}
