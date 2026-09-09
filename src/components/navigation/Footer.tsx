import Link from 'next/link';
import { getCurrentYear } from '@/lib/utils';

const calcLinks = [
  { href: '/calculadora-de-horas', label: 'Calculadora de Horas' },
  { href: '/horas-trabalhadas', label: 'Horas Trabalhadas' },
  { href: '/horas-extras', label: 'Horas Extras' },
  { href: '/hora-de-saida', label: 'Hora de Saída' },
  { href: '/horas-semanais', label: 'Horas Semanais' },
  { href: '/horas-mensais', label: 'Horas Mensais' },
  { href: '/horas-decimais', label: 'Horas Decimais' },
  { href: '/calculadora-de-intervalo', label: 'Intervalo' },
  { href: '/calculadora-de-turno-noturno', label: 'Turno Noturno' },
  { href: '/calculadora-de-jornada', label: 'Análise de Jornada' },
];

const guideLinks = [
  { href: '/guias', label: 'Todos os Guias' },
  { href: '/guias/como-calcular-horas-trabalhadas', label: 'Horas Trabalhadas' },
  { href: '/guias/como-calcular-horas-extras', label: 'Horas Extras' },
  { href: '/guias/como-calcular-horas-em-decimal', label: 'Horas em Decimal' },
  { href: '/guias/como-calcular-turno-noturno', label: 'Turno Noturno' },
];

const legalLinks = [
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
  { href: '/privacidade', label: 'Privacidade' },
  { href: '/termos', label: 'Termos' },
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
              Calculadora de horas online gratuita para calcular horas trabalhadas, horas extras e muito mais.
            </p>
            <p className="text-surface-500 text-xs mt-3">
              Seus dados permanecem no seu dispositivo.
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-400 mb-4">Mais Ferramentas</h3>
            <ul className="space-y-2">
              {calcLinks.slice(6).map((link) => (
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-400 mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-surface-300 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface-500 text-sm">
            &copy; {getCurrentYear()} CalculaHoras. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/guias" className="text-surface-500 hover:text-surface-300 transition-colors">Guias</Link>
            <Link href="/sobre" className="text-surface-500 hover:text-surface-300 transition-colors">Sobre</Link>
            <Link href="/contato" className="text-surface-500 hover:text-surface-300 transition-colors">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
