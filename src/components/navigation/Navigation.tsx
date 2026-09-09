'use client';

import Link from 'next/link';
import { useState } from 'react';

const mainNavLinks = [
  { href: '/', label: 'Início' },
  { href: '/horas-trabalhadas', label: 'Diária' },
  { href: '/horas-semanais', label: 'Semanal' },
  { href: '/horas-mensais', label: 'Mensal' },
  { href: '/horas-extras', label: 'Horas Extras' },
  { href: '/calculadora-horas-e-salario', label: 'Salário/Hora' },
  { href: '/calcular-horas-no-excel', label: 'Excel' },
  {
    label: 'Mais Ferramentas',
    children: [
      { href: '/calculadora-de-intervalo', label: 'Intervalo e Almoço' },
      { href: '/calculadora-de-horas-anuais', label: 'Horas Anuais' },
      { href: '/turno-noturno', label: 'Turno Noturno CLT' },
      { href: '/hora-de-saida', label: 'Hora de Saída' },
      { href: '/horas-decimais', label: 'Horas Decimais' },
      { href: '/conversor-de-horas', label: 'Conversor de Horas' },
    ],
  },
  { href: '/guias', label: 'Guias CLT' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-surface-200/80">
      <div className="container-app flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center group-hover:bg-brand-700 transition-colors shadow-xs">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-ink-900">
            Calcula<span className="text-brand-600">Horas</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {mainNavLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="px-3 py-2 text-sm font-semibold text-ink-600 hover:text-ink-900 hover:bg-surface-100/80 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-2xl border border-surface-200 shadow-xl py-2 z-50 animate-fade-in">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-medium text-ink-600 hover:text-brand-700 hover:bg-surface-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-ink-600 hover:text-ink-900 hover:bg-surface-100/80 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/horas-trabalhadas" className="btn-primary text-xs py-2 px-4 shadow-sm font-bold">
            Calcular Agora
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl hover:bg-surface-100 transition-colors"
          aria-label="Menu de Navegação"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile Aberto */}
      {isOpen && (
        <div className="lg:hidden border-t border-surface-200 bg-white shadow-2xl">
          <div className="container-app py-4 space-y-1">
            {mainNavLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="border-t border-surface-100 pt-2 mt-2">
                  <p className="px-3 py-1 text-xs font-bold text-ink-400 uppercase tracking-wider">{link.label}</p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-3 py-2 text-sm font-medium text-ink-700 hover:bg-surface-100 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-semibold text-ink-800 hover:bg-surface-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/horas-trabalhadas"
              className="block btn-primary text-center text-sm mt-4 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Calcular Agora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
