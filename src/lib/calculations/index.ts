import { CalculationResult } from './types';

export function parseTime(timeStr: string): number {
  if (!timeStr || timeStr.trim() === '') return 0;
  const cleaned = timeStr.trim().replace(/[.,]/g, ':');
  const parts = cleaned.split(':');
  if (parts.length !== 2) return 0;
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  if (isNaN(hours) || isNaN(minutes)) return 0;
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return 0;
  return hours * 60 + minutes;
}

export function formatTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

export function formatResultTime(totalMinutes: number): string {
  const hours = Math.floor(Math.abs(totalMinutes) / 60);
  const minutes = Math.abs(totalMinutes) % 60;
  if (totalMinutes < 0) return `-${hours}h ${minutes}min`;
  return `${hours}h ${String(minutes).padStart(2, '0')}min`;
}

export function toDecimalHours(totalMinutes: number): number {
  return Math.round((totalMinutes / 60) * 100) / 100;
}

export function formatDecimalBR(num: number): string {
  return num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatDecimalES(num: number): string {
  return num.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatHoursSpanish(totalMinutes: number): string {
  const hours = Math.floor(Math.abs(totalMinutes) / 60);
  const minutes = Math.abs(totalMinutes) % 60;
  return `${hours} h ${String(minutes).padStart(2, '0')} min`;
}

export function minutesToHM(totalMinutes: number): { hours: number; minutes: number } {
  return {
    hours: Math.floor(Math.abs(totalMinutes) / 60),
    minutes: Math.abs(totalMinutes) % 60,
  };
}


export function calculateWorkedHours(
  entrada: string,
  saida: string,
  intervalo: string,
  jornadaNormal: string
): CalculationResult {
  const entradaMin = parseTime(entrada);
  const saidaMin = parseTime(saida);
  const intervaloMin = parseTime(intervalo);
  const jornadaMin = parseTime(jornadaNormal) || 480;

  if (entradaMin === 0 && saidaMin === 0) {
    return {
      horasTrabalhadas: '00:00',
      horasNormais: '00:00',
      horasExtras: '00:00',
      horasTrabalhadasDecimal: 0,
      horasNormaisDecimal: 0,
      horasExtrasDecimal: 0,
      horasTrabalhadasMinutos: 0,
      horasNormaisMinutos: 0,
      horasExtrasMinutos: 0,
      totalHoras: 0,
      totalMinutos: 0,
    };
  }

  let diffMinutos = saidaMin - entradaMin;
  if (diffMinutos < 0) diffMinutos += 24 * 60;

  const horasTrabalhadasBruto = diffMinutos - intervaloMin;
  const horasTrabalhadas = Math.max(0, horasTrabalhadasBruto);

  const horasNormais = Math.min(horasTrabalhadas, jornadaMin);
  const horasExtras = Math.max(0, horasTrabalhadas - jornadaMin);

  const totalHoras = Math.floor(horasTrabalhadas / 60);
  const totalMinutos = horasTrabalhadas % 60;

  return {
    horasTrabalhadas: formatTime(horasTrabalhadas),
    horasNormais: formatTime(horasNormais),
    horasExtras: formatTime(horasExtras),
    horasTrabalhadasDecimal: toDecimalHours(horasTrabalhadas),
    horasNormaisDecimal: toDecimalHours(horasNormais),
    horasExtrasDecimal: toDecimalHours(horasExtras),
    horasTrabalhadasMinutos: horasTrabalhadas,
    horasNormaisMinutos: horasNormais,
    horasExtrasMinutos: horasExtras,
    totalHoras,
    totalMinutos,
  };
}

export function getTimelineData(
  entrada: string,
  saida: string,
  intervalo: string,
  jornadaNormal: string
) {
  const entradaMin = parseTime(entrada);
  const saidaMin = parseTime(saida);
  const intervaloMin = parseTime(intervalo) || 60;
  const jornadaMin = parseTime(jornadaNormal) || 480;

  if (entradaMin === 0) return null;

  let saidaCalc = saidaMin;
  if (saidaCalc === 0) {
    saidaCalc = entradaMin + jornadaMin + intervaloMin;
    saidaCalc = saidaCalc % (24 * 60);
  }

  const intervaloInicio = entradaMin + Math.floor((saidaCalc > entradaMin ? saidaCalc - entradaMin : saidaCalc + 24 * 60 - entradaMin - intervaloMin) / 2);
  const intervaloFim = intervaloInicio + intervaloMin;

  const totalDia = saidaCalc >= entradaMin ? saidaCalc - entradaMin : saidaCalc + 24 * 60 - entradaMin;
  const trabalhado = totalDia - intervaloMin;
  const percentTrabalhado = Math.min(100, (trabalhado / jornadaMin) * 100);
  const percentIntervalo = (intervaloMin / totalDia) * 100;

  return {
    entrada: formatTime(entradaMin),
    saida: formatTime(saidaCalc),
    intervaloInicio: formatTime(intervaloInicio % (24 * 60)),
    intervaloFim: formatTime(intervaloFim % (24 * 60)),
    totalMinutos: totalDia,
    trabalhadoMinutos: Math.max(0, trabalhado),
    percentTrabalhado,
    percentIntervalo,
    isOvernight: saidaCalc < entradaMin,
  };
}
