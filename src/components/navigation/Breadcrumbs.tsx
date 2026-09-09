import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Navegação estrutural"
      className={`text-xs md:text-sm text-ink-500 mb-6 overflow-x-auto py-1 ${className}`}
    >
      <ol className="flex items-center gap-1.5 whitespace-nowrap">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 text-ink-500 hover:text-brand-700 transition-colors"
            title="Página Inicial"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-ink-400 shrink-0" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-ink-500 hover:text-brand-700 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-ink-800" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
