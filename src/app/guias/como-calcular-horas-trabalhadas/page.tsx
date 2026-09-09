import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Como Calcular Horas Trabalhadas',
  description: 'Guia completo para calcular horas trabalhadas diárias. Passo a passo com exemplos práticos.',
  alternates: { canonical: '/guias/como-calcular-horas-trabalhadas' },
  openGraph: { title: 'Como Calcular Horas Trabalhadas | CalculaHoras', description: 'Guia completo para calcular horas trabalhadas.', url: 'https://calculahoras.online/guias/como-calcular-horas-trabalhadas' },
};

export default function GuiaHorasTrabalhadas() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <nav className="text-sm text-ink-400 mb-6">
            <Link href="/" className="hover:text-brand-600">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/guias" className="hover:text-brand-600">Guias</Link>
            <span className="mx-2">/</span>
            <span className="text-ink-700">Horas Trabalhadas</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-6">Como Calcular Horas Trabalhadas</h1>
          <p className="text-ink-500 leading-relaxed text-lg mb-10">Aprenda a calcular suas horas trabalhadas diárias de forma simples e precisa.</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <article className="prose prose-ink max-w-none text-ink-600 space-y-6">
            <h2 className="text-2xl font-bold text-ink-900">Fórmula básica</h2>
            <p>Horas trabalhadas = (Saída − Entrada) − Intervalo</p>
            <p>É simples assim. Subtraia o horário de entrada do horário de saída e desconte o intervalo.</p>

            <h2 className="text-2xl font-bold text-ink-900">Exemplo prático</h2>
            <div className="bg-surface-50 rounded-xl p-5 border border-surface-200 my-4">
              <p><strong>Entrada:</strong> 08:30</p>
              <p><strong>Saída:</strong> 18:00</p>
              <p><strong>Intervalo:</strong> 01:00</p>
              <hr className="my-3 border-surface-200" />
              <p>18:00 − 08:30 = 9h 30min</p>
              <p>9h 30min − 1h intervalo = <strong>8h 30min trabalhadas</strong></p>
              <p>Em decimal: <strong>8,50 horas</strong></p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900">Turnos que passam da meia-noite</h2>
            <p>Se você entra às 22:00 e sai às 06:00 do dia seguinte, a saída é maior que a entrada? Não. Nesse caso, some 24h à saída:</p>
            <div className="bg-surface-50 rounded-xl p-5 border border-surface-200 my-4">
              <p>06:00 + 24:00 = 30:00</p>
              <p>30:00 − 22:00 = <strong>8 horas</strong></p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900">Erros comuns</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Esquecer de descontar o intervalo</li>
              <li>Não considerar turnos noturnos (22h–05h)</li>
              <li>Confundir 12h com 00h em turnos overnight</li>
              <li>Não arredondar corretamente para decimal</li>
            </ul>

            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 my-6">
              <p className="font-semibold text-ink-900 mb-2">Calcule agora</p>
              <p className="text-sm text-ink-600 mb-4">Use nossa calculadora para obter o resultado instantâneo.</p>
              <Link href="/horas-trabalhadas" className="btn-primary text-sm">Calcular horas trabalhadas</Link>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
