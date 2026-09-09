import { DecimalResult } from './types';
import { parseTime, toDecimalHours } from './index';

export function convertToDecimalHours(hours: string, minutes: string): DecimalResult {
  const horasNum = parseInt(hours, 10) || 0;
  const minutosNum = parseInt(minutes, 10) || 0;

  const totalMinutos = horasNum * 60 + minutosNum;
  const decimal = toDecimalHours(totalMinutos);

  return {
    horasDecimais: decimal,
    horasFormatadas: `${horasNum}h ${minutosNum}min = ${decimal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} horas`,
  };
}

export function convertFromDecimalHours(decimalStr: string): DecimalResult {
  const decimal = parseFloat(decimalStr.replace(',', '.')) || 0;
  const horas = Math.floor(decimal);
  const minutos = Math.round((decimal - horas) * 60);

  const totalMinutos = horas * 60 + minutos;

  return {
    horasDecimais: decimal,
    horasFormatadas: `${decimal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} horas = ${horas}h ${minutos}min`,
  };
}
