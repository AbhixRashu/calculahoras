'use client';

import { useEffect, useRef, useState } from 'react';
import { getTimelineData, formatTime } from '@/lib/calculations';

interface WorkTimelineProps {
  entrada: string;
  saida: string;
  intervalo: string;
  jornadaNormal: string;
}

export function WorkTimeline({ entrada, saida, intervalo, jornadaNormal }: WorkTimelineProps) {
  const data = getTimelineData(entrada, saida, intervalo, jornadaNormal);
  const [animated, setAnimated] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (data) {
      setAnimated(false);
      requestAnimationFrame(() => setAnimated(true));
    }
  }, [data]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const pad = 20;
    const barY = h / 2 - 12;
    const barH = 24;

    ctx.clearRect(0, 0, w, h);

    if (!data) return;

    const totalMin = data.totalMinutos || 1440;
    const barWidth = w - pad * 2;

    // Background bar
    ctx.fillStyle = '#f5f5f4';
    ctx.beginPath();
    ctx.roundRect(pad, barY, barWidth, barH, 6);
    ctx.fill();

    // Worked portion
    const workedWidth = (data.trabalhadoMinutos / totalMin) * barWidth;
    if (animated && workedWidth > 0) {
      const gradient = ctx.createLinearGradient(pad, 0, pad + workedWidth, 0);
      gradient.addColorStop(0, '#10b981');
      gradient.addColorStop(1, '#059669');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(pad, barY, workedWidth, barH, 6);
      ctx.fill();
    }

    // Interval portion (darker segment)
    if (animated) {
      const intervalStartPct = (parseTimeToMin(data.intervaloInicio) / totalMin);
      const intervalWidth = (parseTimeToMin(data.intervaloFim) - parseTimeToMin(data.intervaloInicio)) / totalMin * barWidth;
      if (intervalWidth > 0) {
        ctx.fillStyle = '#d6d3d1';
        ctx.beginPath();
        ctx.roundRect(pad + intervalStartPct * barWidth, barY, Math.max(0, intervalWidth), barH, 2);
        ctx.fill();
      }
    }

    // Time markers
    ctx.fillStyle = '#78716c';
    ctx.font = '11px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.entrada, pad, barY - 8);
    ctx.fillText(data.saida, pad + barWidth, barY - 8);

    if (data.intervaloInicio !== data.intervaloFim) {
      const intMid = (parseTimeToMin(data.intervaloInicio) + parseTimeToMin(data.intervaloFim)) / 2 / totalMin;
      ctx.fillText(`${data.intervaloInicio}-${data.intervaloFim}`, pad + intMid * barWidth, barY + barH + 16);
    }

    // Labels below
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 12px Inter, system-ui, sans-serif';
    ctx.fillText(`${data.trabalhadoMinutos}min trabalhado`, pad + workedWidth / 2, barY + barH + 32);

  }, [data, animated]);

  if (!data) return null;

  return (
    <div className="w-full">
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="w-full"
          style={{ height: '100px' }}
        />
      </div>
      <div className="flex justify-between mt-2 text-xs text-ink-500">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-brand-500" />
          Trabalhado
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-surface-300" />
          Intervalo
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-surface-200" />
          Descanso
        </div>
      </div>
    </div>
  );
}

function parseTimeToMin(time: string): number {
  if (!time) return 0;
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}
