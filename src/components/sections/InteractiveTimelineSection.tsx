'use client';

import { useState } from 'react';
import { Clock, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';

interface TimelineScenario {
  id: string;
  name: string;
  description: string;
  entrada: string;
  inicioIntervalo: string;
  fimIntervalo: string;
  saida: string;
  duracaoIntervalo: string;
  horasNormais: string;
  horasExtras: string;
  totalTrabalhado: string;
  totalDecimal: string;
  isNight?: boolean;
}

const SCENARIOS: TimelineScenario[] = [
  {
    id: 'padrao',
    name: 'Jornada Padrão 8h (CLT)',
    description: 'Expediente comercial típico com 1h de almoço conforme Artigo 71 da CLT.',
    entrada: '08:00',
    inicioIntervalo: '12:00',
    fimIntervalo: '13:00',
    saida: '17:00',
    duracaoIntervalo: '1h 00min',
    horasNormais: '8h 00min',
    horasExtras: '0h 00min',
    totalTrabalhado: '8h 00min',
    totalDecimal: '8,00h',
  },
  {
    id: 'extras',
    name: 'Jornada com Horas Extras (50%)',
    description: 'Entrada às 08:00 e saída estendida até 18:30 (1h30 extra apurada no dia).',
    entrada: '08:00',
    inicioIntervalo: '12:00',
    fimIntervalo: '13:00',
    saida: '18:30',
    duracaoIntervalo: '1h 00min',
    horasNormais: '8h 00min',
    horasExtras: '1h 30min',
    totalTrabalhado: '9h 30min',
    totalDecimal: '9,50h',
  },
  {
    id: 'noturno',
    name: 'Turno Noturno (Virada de Dia)',
    description: 'Entrada às 22:00 e saída às 06:00 do dia seguinte com 1h de ceia.',
    entrada: '22:00',
    inicioIntervalo: '01:00',
    fimIntervalo: '02:00',
    saida: '06:00',
    duracaoIntervalo: '1h 00min',
    horasNormais: '7h 00min',
    horasExtras: '0h 00min',
    totalTrabalhado: '7h 00min relógio (+ redução ficta Art. 73)',
    totalDecimal: '7,00h relógio = 8,00h noturnas',
    isNight: true,
  },
];

export function InteractiveTimelineSection() {
  const [selectedScenario, setSelectedScenario] = useState<string>('padrao');
  const active = SCENARIOS.find((s) => s.id === selectedScenario) || SCENARIOS[0];

  return (
    <section className="py-16 md:py-24 bg-surface-50/70 border-b border-surface-200 relative overflow-hidden">
      <div className="container-app max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Visualização da Jornada Passo a Passo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink-900 tracking-tight">
            Linha do Tempo Interativa de Horas
          </h2>
          <p className="text-sm sm:text-base text-ink-600 mt-3 leading-relaxed">
            Entenda como os horários de entrada, almoço e saída são decompostos no cálculo oficial do ponto eletrônico.
          </p>
        </div>

        {/* Scenario Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {SCENARIOS.map((sc) => {
            const isSel = sc.id === selectedScenario;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedScenario(sc.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSel
                    ? 'bg-brand-600 text-white shadow-sm ring-2 ring-brand-500/20'
                    : 'bg-white text-ink-600 hover:bg-surface-100 border border-surface-200'
                }`}
              >
                {sc.name}
              </button>
            );
          })}
        </div>

        {/* Visual Timeline Card */}
        <div className="bg-white rounded-3xl border border-surface-200/90 shadow-sm p-6 sm:p-8 md:p-10 relative">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-ink-900">{active.name}</h3>
            <p className="text-xs sm:text-sm text-ink-500 mt-1">{active.description}</p>
          </div>

          {/* Timeline Milestones */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-100">
              <div className="flex items-center gap-2 text-brand-700 text-xs font-bold uppercase mb-1">
                <Clock className="w-4 h-4 text-brand-600" />
                Entrada (Início)
              </div>
              <div className="text-2xl font-extrabold text-ink-900 font-mono">{active.entrada}</div>
              <div className="text-[11px] text-ink-500 mt-0.5">Primeiro registro</div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase mb-1">
                <Coffee className="w-4 h-4 text-amber-600" />
                Almoço / Intervalo
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-ink-900 font-mono">
                {active.inicioIntervalo} — {active.fimIntervalo}
              </div>
              <div className="text-[11px] text-amber-800 mt-0.5 font-medium">
                Desconto: {active.duracaoIntervalo}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100">
              <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase mb-1">
                <Clock className="w-4 h-4 text-teal-600" />
                Saída (Fim)
              </div>
              <div className="text-2xl font-extrabold text-ink-900 font-mono">{active.saida}</div>
              <div className="text-[11px] text-ink-500 mt-0.5">
                {active.isNight ? 'Dia seguinte (+24h)' : 'Bate ponto final'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Total Efetivo
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-800 font-mono">
                {active.totalTrabalhado}
              </div>
              <div className="text-[11px] text-emerald-700 mt-0.5 font-semibold">
                Decimal: {active.totalDecimal}
              </div>
            </div>
          </div>

          {/* Visual Progress Bar Flow */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-ink-500 px-1">
              <span>{active.entrada} (Início)</span>
              <span>{active.inicioIntervalo} (Intervalo)</span>
              <span>{active.fimIntervalo} (Retorno)</span>
              <span>{active.saida} (Término)</span>
            </div>

            <div className="h-4 sm:h-5 rounded-full bg-surface-200 overflow-hidden flex shadow-inner">
              <div
                className="bg-brand-500 h-full flex items-center justify-center text-[10px] text-white font-bold"
                style={{ width: '45%' }}
                title="1º Período de Trabalho"
              >
                Trabalho
              </div>
              <div
                className="bg-amber-400 h-full flex items-center justify-center text-[10px] text-amber-950 font-bold"
                style={{ width: '15%' }}
                title="Intervalo não computado"
              >
                Pausa
              </div>
              <div
                className="bg-brand-500 h-full flex items-center justify-center text-[10px] text-white font-bold"
                style={{ width: active.id === 'extras' ? '30%' : '40%' }}
                title="2º Período de Trabalho"
              >
                Trabalho
              </div>
              {active.id === 'extras' && (
                <div
                  className="bg-emerald-500 h-full flex items-center justify-center text-[10px] text-white font-bold animate-pulse"
                  style={{ width: '10%' }}
                  title="Horas Extras (50%)"
                >
                  Extra
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-ink-600">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                  Horas Normais: <strong>{active.horasNormais}</strong>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  Intervalo: <strong>{active.duracaoIntervalo}</strong>
                </span>
                {active.id === 'extras' && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    Horas Extras: <strong>{active.horasExtras}</strong>
                  </span>
                )}
              </div>
              <span className="text-[11px] text-ink-500 font-medium">
                Regra: Art. 71, § 2º CLT — O intervalo não é remunerado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
