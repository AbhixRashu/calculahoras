'use client';

import { useState, useMemo } from 'react';
import { parseTime, formatDecimalBR, toDecimalHours } from '@/lib/calculations';
import { BreakTimeInput } from './BreakTimeInput';

export function IntervalCalculator() {
  const [modo, setModo] = useState<'horario' | 'duracao'>('horario');
  const [inicio, setInicio] = useState('12:00');
  const [fim, setFim] = useState('13:00');
  const [intervaloDireto, setIntervaloDireto] = useState('01:00');
  const [jornadaDiaria, setJornadaDiaria] = useState(8); // 8h diárias padrão

  const result = useMemo(() => {
    let duracaoMin = 0;
    if (modo === 'horario') {
      const iMin = parseTime(inicio);
      const fMin = parseTime(fim);
      let diff = fMin - iMin;
      if (diff < 0) diff += 24 * 60;
      duracaoMin = diff;
    } else {
      duracaoMin = parseTime(intervaloDireto);
    }

    const horas = Math.floor(duracaoMin / 60);
    const minutos = duracaoMin % 60;
    const duracaoStr = `${horas}h ${String(minutos).padStart(2, '0')}min`;
    const duracaoDecimal = toDecimalHours(duracaoMin);

    // Regras da CLT (Art. 71)
    let regraMinimoMin = 0;
    let situacaoCLT: 'conforme' | 'abaixo' | 'adequado' = 'conforme';
    let mensagemCLT = '';

    if (jornadaDiaria > 6) {
      regraMinimoMin = 60; // mínimo 1 hora
      if (duracaoMin < 60) {
        situacaoCLT = 'abaixo';
        const faltam = 60 - duracaoMin;
        mensagemCLT = `Atenção: Para jornada superior a 6h, a CLT exige no mínimo 1 hora de intervalo. Faltaram ${faltam} minutos (Art. 71 CLT).`;
      } else if (duracaoMin > 120) {
        mensagemCLT = 'Intervalo superior a 2 horas. Permitido apenas mediante acordo ou convenção coletiva.';
      } else {
        mensagemCLT = 'Intervalo em conformidade com o Artigo 71 da CLT (entre 1h e 2h de descanso).';
      }
    } else if (jornadaDiaria >= 4) {
      regraMinimoMin = 15;
      if (duracaoMin < 15) {
        situacaoCLT = 'abaixo';
        mensagemCLT = 'Para jornadas de 4h a 6h, a CLT exige no mínimo 15 minutos de descanso.';
      } else {
        mensagemCLT = 'Intervalo dentro da exigência legal de 15 minutos.';
      }
    } else {
      mensagemCLT = 'Jornada inferior a 4 horas: não há obrigatoriedade de intervalo intrajornada.';
    }

    return {
      duracaoMin,
      duracaoStr,
      duracaoDecimal,
      situacaoCLT,
      mensagemCLT,
      regraMinimoMin,
    };
  }, [modo, inicio, fim, intervaloDireto, jornadaDiaria]);

  return (
    <div className="card-elevated w-full max-w-lg mx-auto space-y-6">
      {/* Seletor de Modo */}
      <div className="flex bg-surface-100 p-1 rounded-xl">
        <button
          type="button"
          onClick={() => setModo('horario')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
            modo === 'horario'
              ? 'bg-white text-ink-900 shadow-xs'
              : 'text-ink-600 hover:text-ink-900'
          }`}
        >
          Por Horário (Saída e Retorno)
        </button>
        <button
          type="button"
          onClick={() => setModo('duracao')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
            modo === 'duracao'
              ? 'bg-white text-ink-900 shadow-xs'
              : 'text-ink-600 hover:text-ink-900'
          }`}
        >
          Inserir Horas e Minutos
        </button>
      </div>

      <div className="space-y-4">
        {modo === 'horario' ? (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="int-inicio" className="input-label">Saída para almoço</label>
              <input
                id="int-inicio"
                type="time"
                className="input-field text-lg font-bold"
                value={inicio}
                onChange={(e) => setInicio(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="int-fim" className="input-label">Retorno do almoço</label>
              <input
                id="int-fim"
                type="time"
                className="input-field text-lg font-bold"
                value={fim}
                onChange={(e) => setFim(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-surface-50 border border-surface-200">
            <BreakTimeInput
              idPrefix="calc-intervalo-page"
              label="Duração do intervalo"
              value={intervaloDireto}
              onChange={setIntervaloDireto}
            />
          </div>
        )}

        <div>
          <label className="input-label">Sua jornada diária total de trabalho</label>
          <select
            value={jornadaDiaria}
            onChange={(e) => setJornadaDiaria(parseFloat(e.target.value) || 8)}
            className="input-field text-sm font-semibold"
          >
            <option value={8}>8 horas diárias (Jornada padrão integral)</option>
            <option value={6}>6 horas diárias (Ex: operadores, atendentes, estagiários)</option>
            <option value={4}>4 horas diárias (Meio período)</option>
            <option value={12}>12 horas (Escala 12x36)</option>
          </select>
        </div>
      </div>

      {/* Resultado */}
      <div className="pt-5 border-t border-surface-200 space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/90 p-6 text-center space-y-2">
          <p className="text-xs uppercase font-bold text-brand-700 tracking-wider">
            Tempo total de intervalo
          </p>
          <div className="text-4xl md:text-5xl font-extrabold text-brand-700 tracking-tight">
            {result.duracaoStr}
          </div>
          <p className="text-sm font-semibold text-brand-900">
            {formatDecimalBR(result.duracaoDecimal)} horas em decimal ({result.duracaoMin} minutos)
          </p>
        </div>

        {/* Parecer CLT */}
        <div
          className={`p-4 rounded-xl border text-xs leading-relaxed ${
            result.situacaoCLT === 'abaixo'
              ? 'bg-amber-50 border-amber-300 text-amber-900'
              : 'bg-emerald-50 border-emerald-300 text-emerald-900'
          }`}
        >
          <div className="font-bold mb-1 flex items-center gap-1.5">
            <span>{result.situacaoCLT === 'abaixo' ? '⚠️ Alerta Trabalhista' : '✅ Conforme a CLT'}</span>
          </div>
          <p>{result.mensagemCLT}</p>
        </div>
      </div>
    </div>
  );
}
