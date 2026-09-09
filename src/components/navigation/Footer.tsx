import Link from 'next/link';
import { getCurrentYear } from '@/lib/utils';

const calcLinks = [
  { href: '/', label: 'Calculadora de Horas' },
  { href: '/horas-trabalhadas', label: 'Horas Trabalhadas' },
  { href: '/horas-extras', label: 'Horas Extras' },
  { href: '/hora-de-saida', label: 'Hora de Saída' },
  { href: '/horas-semanais', label: 'Horas Semanais' },
  { href: '/horas-mensais', label: 'Horas Mensais' },
  { href: '/horas-decimais', label: 'Horas Decimais' },
  { href: '/turno-noturno', label: 'Turno Noturno' },
  { href: '/calculadora-de-intervalo', label: 'Intervalo de Trabalho' },
  { href: '/conversor-de-horas', label: 'Conversor de Horas' },
  { href: '/calculadora-horas-e-salario', label: 'Salário por Hora' },
  { href: '/calcular-horas-no-excel', label: 'Horas no Excel' },
];

const guideLinks = [
  { href: '/guias', label: 'Central de Guias' },
  { href: '/guias/como-calcular-horas-trabalhadas', label: 'Calcular Horas Trabalhadas' },
  { href: '/guias/como-calcular-horas-extras', label: 'Calcular Horas Extras' },
  { href: '/guias/como-calcular-hora-de-saida', label: 'Calcular Hora de Saída' },
  { href: '/guias/como-calcular-horas-em-decimal', label: 'Horas em Decimal' },
  { href: '/guias/como-calcular-turno-noturno', label: 'Turno Noturno CLT' },
];

const legalLinks = [
  { href: '/sobre', label: 'Sobre o Projeto' },
  { href: '/contato', label: 'Contato & Suporte' },
  { href: '/privacidade', label: 'Política de Privacidade' },
  { href: '/termos', label: 'Termos de Uso' },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white mt-auto">
      <div className="container-app py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">
                Calcula<span className="text-brand-400">Horas</span>
              </span>
            </Link>
            <p className="text-surface-400 text-sm leading-relaxed">
              Calculadora de horas online gratuita para apuração de horas trabalhadas, horas extras, intervalos e previsão de término de jornada.
            </p>
            <p className="text-surface-500 text-xs mt-3">
              Processamento 100% no navegador. Seus dados não saem do seu aparelho.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-400 mb-4">Calculadoras</h3>
            <ul className="space-y-2">
              {calcLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-surface-300 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-400 mb-4">Mais Ferramentas & Guias</h3>
            <ul className="space-y-2">
              {calcLinks.slice(6, 9).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-surface-300 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
              {guideLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-surface-300 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-400 mb-4">Institucional & Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-surface-300 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-10 pt-6 border-t border-ink-800 text-[11px] text-surface-500 leading-relaxed text-center md:text-left">
          <strong>Aviso de Isenção de Responsabilidade:</strong> O CalculaHoras.online é um portal de cálculos matemáticos e informativos. Os resultados aqui simulados são baseados na CLT e na legislação trabalhista brasileira geral, não substituindo o espelho de ponto oficial nem a assessoria de contadores, advogados ou departamentos de Recursos Humanos.
        </div>

        <div className="mt-6 pt-6 border-t border-ink-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface-500 text-sm">
            &copy; {getCurrentYear()} CalculaHoras.online. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/guias" className="text-surface-500 hover:text-surface-300 transition-colors">Guias</Link>
            <Link href="/#faq" className="text-surface-500 hover:text-surface-300 transition-colors">Dúvidas Frequentes</Link>
            <Link href="/privacidade" className="text-surface-500 hover:text-surface-300 transition-colors">Privacidade</Link>
            <Link href="/termos" className="text-surface-500 hover:text-surface-300 transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
