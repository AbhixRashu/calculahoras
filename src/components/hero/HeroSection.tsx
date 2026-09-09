'use client';

import { WorkHoursSuite } from '@/components/calculator/WorkHoursSuite';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { FlipWords } from '@/components/ui/FlipWords';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Sparkles, Clock, FileSpreadsheet, ShieldCheck, FileCheck, Zap, DollarSign, Coffee } from 'lucide-react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const centerX = w * 0.85;
      const centerY = h * 0.35;

      // Arcos de relógio decorativos
      for (let i = 0; i < 3; i++) {
        const radius = 120 + i * 70;
        const startAngle = time * 0.0006 + i * 0.8;
        const endAngle = startAngle + Math.PI * 0.5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.08 - i * 0.02})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      time++;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const flipWordsList = [
    'horas de trabalho',
    'horas extras CLT',
    'jornada e ponto',
    'horas e salário',
    'intervalo e almoço',
  ];

  return (
    <AuroraBackground className="relative py-10 md:py-16 lg:py-20 bg-gradient-to-b from-brand-50/50 via-white/80 to-surface-50/50">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-app relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout 2 Colunas no Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Coluna Esquerda: Conteúdo, Título SEO e Diferenciais */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/90 text-brand-800 text-xs font-bold uppercase tracking-wider shadow-xs border border-brand-200/60 hover:bg-brand-100 transition-colors">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Calculadora de Horas CLT • 100% Gratuita
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-ink-900 tracking-tight leading-[1.14]">
              Calculadora de Horas
              <span className="block text-gradient text-2xl sm:text-3xl lg:text-[2.1rem] mt-1.5 font-bold">
                <FlipWords words={flipWordsList} duration={3200} />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-ink-600 leading-relaxed">
              <strong>Calculadora de horas online</strong> rápida e gratuita para calcular suas{' '}
              <strong className="text-ink-900">horas trabalhadas</strong>, apurar{' '}
              <strong className="text-ink-900">horas extras</strong> (50% e 100%) e planejar sua{' '}
              <strong className="text-ink-900">hora de saída</strong> com intervalo de almoço em horas e minutos.
            </p>

            {/* Destaques de Funcionalidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-xs border border-surface-200/90 shadow-xs hover:shadow-md hover:border-brand-300 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 text-brand-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink-900">Almoço em Horas e Minutos</h4>
                  <p className="text-[11px] text-ink-500 leading-tight mt-0.5">Sem minutos confusos de cabeça</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-xs border border-surface-200/90 shadow-xs hover:shadow-md hover:border-brand-300 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink-900">Exportar para PDF</h4>
                  <p className="text-[11px] text-ink-500 leading-tight mt-0.5">Espelho de ponto oficial para RH</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-xs border border-surface-200/90 shadow-xs hover:shadow-md hover:border-brand-300 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 text-brand-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink-900">Regras da CLT</h4>
                  <p className="text-[11px] text-ink-500 leading-tight mt-0.5">44h semanais, Art. 71 e 59</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-xs border border-surface-200/90 shadow-xs hover:shadow-md hover:border-brand-300 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 text-teal-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink-900">100% Privado</h4>
                  <p className="text-[11px] text-ink-500 leading-tight mt-0.5">Seus dados não saem do navegador</p>
                </div>
              </div>
            </div>

            {/* Acesso rápido às ferramentas principais */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-ink-400 block mb-2.5">
                Cálculos rápidos mais procurados:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/horas-extras"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/90 hover:bg-brand-50 hover:text-brand-700 text-ink-700 border border-surface-200 hover:border-brand-300 shadow-2xs transition-all hover:scale-[1.02]"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Horas Extras 50% / 100%
                </Link>
                <Link
                  href="/calculadora-horas-e-salario"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/90 hover:bg-brand-50 hover:text-brand-700 text-ink-700 border border-surface-200 hover:border-brand-300 shadow-2xs transition-all hover:scale-[1.02]"
                >
                  <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                  Salário por Hora
                </Link>
                <Link
                  href="/calcular-horas-no-excel"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/90 hover:bg-brand-50 hover:text-brand-700 text-ink-700 border border-surface-200 hover:border-brand-300 shadow-2xs transition-all hover:scale-[1.02]"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-green-600" />
                  Fórmulas no Excel
                </Link>
                <Link
                  href="/calculadora-de-intervalo"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/90 hover:bg-brand-50 hover:text-brand-700 text-ink-700 border border-surface-200 hover:border-brand-300 shadow-2xs transition-all hover:scale-[1.02]"
                >
                  <Coffee className="w-3.5 h-3.5 text-amber-600" />
                  Intervalo Art. 71 CLT
                </Link>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Suíte com Abas (Diária, Semanal, Mensal, Anual) */}
          <div className="lg:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-400/25 via-emerald-300/20 to-teal-400/25 rounded-3xl blur-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl overflow-hidden bg-white/95 backdrop-blur-xl border border-surface-200/90 shadow-xl shadow-brand-900/5">
                <BorderBeam size={300} duration={14} colorFrom="#10b981" colorTo="#34d399" />
                <WorkHoursSuite defaultTab="diaria" showTabNav={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}

