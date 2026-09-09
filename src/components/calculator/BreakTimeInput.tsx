'use client';

import React, { useState, useEffect, useId } from 'react';

interface BreakTimeInputProps {
  value: string; // 'HH:MM' or minutes string
  onChange: (value: string) => void;
  label?: string;
  idPrefix?: string;
  showPresets?: boolean;
}

export function BreakTimeInput({
  value,
  onChange,
  label = 'Intervalo de descanso / almoço',
  idPrefix,
  showPresets = true,
}: BreakTimeInputProps) {
  const autoId = useId();
  const baseId = idPrefix || autoId;

  // Converte valor recebido ('HH:MM' ou minutos em número) em horas e minutos
  const parseHM = (val: string): { hours: number; minutes: number } => {
    if (!val) return { hours: 0, minutes: 0 };
    if (val.includes(':')) {
      const [h, m] = val.split(':').map((n) => parseInt(n, 10) || 0);
      return { hours: Math.max(0, h), minutes: Math.min(59, Math.max(0, m)) };
    }
    const totalMin = parseInt(val, 10) || 0;
    return {
      hours: Math.floor(totalMin / 60),
      minutes: totalMin % 60,
    };
  };

  const initial = parseHM(value);
  const [hours, setHours] = useState<number>(initial.hours);
  const [minutes, setMinutes] = useState<number>(initial.minutes);

  useEffect(() => {
    const parsed = parseHM(value);
    setHours(parsed.hours);
    setMinutes(parsed.minutes);
  }, [value]);

  const updateBreak = (newHours: number, newMinutes: number) => {
    const h = Math.max(0, Math.min(23, isNaN(newHours) ? 0 : newHours));
    const m = Math.max(0, Math.min(59, isNaN(newMinutes) ? 0 : newMinutes));
    setHours(h);
    setMinutes(m);
    const formatted = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    onChange(formatted);
  };

  const totalMinutes = hours * 60 + minutes;

  const presets = [
    { label: '0 min', h: 0, m: 0 },
    { label: '15 min', h: 0, m: 15 },
    { label: '30 min', h: 0, m: 30 },
    { label: '45 min', h: 0, m: 45 },
    { label: '1 h', h: 1, m: 0 },
    { label: '1 h 15 min', h: 1, m: 15 },
    { label: '1 h 30 min', h: 1, m: 30 },
    { label: '2 h', h: 2, m: 0 },
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="input-label mb-0 text-ink-800">{label}</label>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
          {totalMinutes === 0
            ? 'Sem intervalo (0 min)'
            : `${hours > 0 ? `${hours}h ` : ''}${minutes}min (${totalMinutes} min no total)`}
        </span>
      </div>

      {/* Input duplo intuitivo: Horas e Minutos */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="relative">
          <input
            id={`${baseId}-hours`}
            type="number"
            min="0"
            max="12"
            value={hours === 0 && minutes === 0 ? '' : hours}
            placeholder="0"
            onChange={(e) => updateBreak(parseInt(e.target.value, 10) || 0, minutes)}
            className="input-field pr-14 text-center text-lg font-bold"
            aria-label="Horas de intervalo"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-ink-400 pointer-events-none uppercase tracking-wider">
            horas
          </span>
        </div>

        <div className="relative">
          <input
            id={`${baseId}-minutes`}
            type="number"
            min="0"
            max="59"
            step="5"
            value={minutes === 0 && hours === 0 ? '' : minutes}
            placeholder="0"
            onChange={(e) => updateBreak(hours, parseInt(e.target.value, 10) || 0)}
            className="input-field pr-12 text-center text-lg font-bold"
            aria-label="Minutos de intervalo"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-ink-400 pointer-events-none uppercase tracking-wider">
            min
          </span>
        </div>
      </div>

      {/* Botões rápidos com um clique */}
      {showPresets && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {presets.map((preset) => {
            const isSelected = hours === preset.h && minutes === preset.m;
            return (
              <button
                key={preset.label}
                type="button"
                onClick={() => updateBreak(preset.h, preset.m)}
                className={`text-xs px-2.5 py-1 rounded-lg transition-all font-medium ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-xs font-semibold scale-[1.02]'
                    : 'bg-surface-100 hover:bg-surface-200 text-ink-700 hover:text-ink-900 border border-surface-200/70'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
