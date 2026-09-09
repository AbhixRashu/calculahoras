import { MonthlyResult } from './types';
import { parseTime, formatTime, toDecimalHours } from './index';

export function calculateMonthlyHours(
  diasUteis: number,
  horasDiarias: string,
  semanasPorMes: number = 4
): MonthlyResult {
  const horasMin = parseTime(horasDiarias) || 480;
  const totalMesMin = horasMin * diasUteis * semanasPorMes;

  return {
    horasPrevistas: formatTime(totalMesMin),
    horasTrabalhadas: formatTime(totalMesMin),
    horasRestantes: '00:00',
    horasExtras: '00:00',
    horasPrevistasDecimal: toDecimalHours(totalMesMin),
    horasTrabalhadasDecimal: toDecimalHours(totalMesMin),
  };
}

export function calculateMonthlyWithTarget(
  diasUteis: number,
  horasDiarias: string,
  horasRealizadas: string,
  semanasPorMes: number = 4
): MonthlyResult {
  const horasMin = parseTime(horasDiarias) || 480;
  const realizadasMin = parseTime(horasRealizadas);
  const previstoMin = horasMin * diasUteis * semanasPorMes;
  const diferenca = realizadasMin - previstoMin;

  return {
    horasPrevistas: formatTime(previstoMin),
    horasTrabalhadas: formatTime(realizadasMin),
    horasRestantes: diferenca < 0 ? formatTime(Math.abs(diferenca)) : '00:00',
    horasExtras: diferenca > 0 ? formatTime(diferenca) : '00:00',
    horasPrevistasDecimal: toDecimalHours(previstoMin),
    horasTrabalhadasDecimal: toDecimalHours(realizadasMin),
  };
}
