export interface TimeEntry {
  entrada: string;
  saida: string;
  intervalo: string;
  jornadaNormal: string;
}

export interface CalculationResult {
  horasTrabalhadas: string;
  horasNormais: string;
  horasExtras: string;
  horasTrabalhadasDecimal: number;
  horasNormaisDecimal: number;
  horasExtrasDecimal: number;
  horasTrabalhadasMinutos: number;
  horasNormaisMinutos: number;
  horasExtrasMinutos: number;
  totalHoras: number;
  totalMinutos: number;
}

export interface WeeklyDayEntry {
  dayId: string;
  name: string;
  active: boolean;
  entrada: string;
  saida: string;
  intervalo: string; // 'HH:MM'
}

export interface SalaryResult {
  horasOrdinarias: number;
  horasExtras: number;
  precioHora: number;
  recargoExtraPercent: number;
  salarioBase: number;
  salarioExtras: number;
  salarioTotalBruto: number;
}

export interface AnnualResult {
  semanasLaborables: number;
  horasSemanales: number;
  diasVacaciones: number;
  horasTotales: number;
  diferenciaConvenio: number; // relative to e.g. 1826h
}

export interface TimelineData {
  entrada: string;
  saida: string;
  intervaloInicio: string;
  intervaloFim: string;
  totalMinutos: number;
  trabalhadoMinutos: number;
  percentTrabalhado: number;
  percentIntervalo: number;
  isOvernight: boolean;
}

export interface DepartureResult {
  horaSaida: string;
}

export interface WeeklyResult {
  totalSemanal: string;
  totalSemanalDecimal: number;
  mediaDiaria: string;
  mediaDiariaDecimal: number;
}

export interface MonthlyResult {
  horasPrevistas: string;
  horasTrabalhadas: string;
  horasRestantes: string;
  horasExtras: string;
  horasPrevistasDecimal: number;
  horasTrabalhadasDecimal: number;
}

export interface IntervalResult {
  duracao: string;
  duracaoDecimal: number;
}

export interface NightShiftResult {
  horasTrabalhadas: string;
  horasNoturnas: string;
  adicionalNoturno: string;
  horasTrabalhadasDecimal: number;
  horasNoturnasDecimal: number;
}

export interface JornadaResult {
  trabalhado: string;
  previsto: string;
  extras: string;
  restante: string;
  percentualCompleto: number;
}

export interface HistoryEntry {
  id: string;
  date: string;
  entrada: string;
  saida: string;
  intervalo: string;
  resultado: string;
  decimal: number;
}

export interface ConversionResult {
  resultado: string;
  resultadoDecimal: number;
}

export interface DecimalResult {
  horasDecimais: number;
  horasFormatadas: string;
}

