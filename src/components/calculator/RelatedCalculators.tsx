import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface RelatedItem {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

interface RelatedCalculatorsProps {
  currentPath?: string;
  items?: RelatedItem[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_TOOLS: RelatedItem[] = [
  {
    title: 'Horas Trabalhadas',
    description: 'Cálculo diário com horários de entrada, saída e desconto de intervalo.',
    href: '/horas-trabalhadas',
    badge: 'Mais usada',
  },
  {
    title: 'Horas Extras CLT',
    description: 'Cálculo com adicionais de 50% e 100% e reflexo obrigatório no DSR.',
    href: '/horas-extras',
    badge: 'Art. 59 CLT',
  },
  {
    title: 'Hora de Saída',
    description: 'Descubra a hora exata em que você deve bater o ponto de saída.',
    href: '/hora-de-saida',
  },
  {
    title: 'Horas Semanais',
    description: 'Some as horas dos 7 dias da semana e confira a jornada de 44h CLT.',
    href: '/horas-semanais',
  },
  {
    title: 'Horas Mensais',
    description: 'Total mensal com divisores 220 e 200 para controle de folha.',
    href: '/horas-mensais',
  },
  {
    title: 'Horas Decimais',
    description: 'Converta horas e minutos (hh:mm) para decimal e facilite contas de folha.',
    href: '/horas-decimais',
  },
  {
    title: 'Turno Noturno',
    description: 'Cálculo com hora ficta de 52min30s e adicional noturno de 20%.',
    href: '/turno-noturno',
    badge: 'Art. 73 CLT',
  },
  {
    title: 'Intervalo de Trabalho',
    description: 'Verifique se seu intervalo de almoço cumpre o Artigo 71 da CLT.',
    href: '/calculadora-de-intervalo',
  },
  {
    title: 'Conversor de Horas',
    description: 'Transforme horas em minutos, segundos ou formato centesimal.',
    href: '/conversor-de-horas',
  },
  {
    title: 'Horas e Salário',
    description: 'Descubra o valor exato do seu salário-hora a partir do salário mensal.',
    href: '/calculadora-horas-e-salario',
  },
];

export function RelatedCalculators({
  currentPath,
  items,
  title = 'Calculadoras e Ferramentas Relacionadas',
  subtitle = 'Conheça outras ferramentas gratuitas para gerenciar seus horários e direitos trabalhistas:',
}: RelatedCalculatorsProps) {
  // If no custom items passed, filter out current page from default tools
  const toolsToDisplay = items || DEFAULT_TOOLS.filter((t) => t.href !== currentPath).slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-white border-t border-surface-200">
      <div className="container-app max-w-5xl mx-auto px-4">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl font-bold text-ink-900 tracking-tight">{title}</h2>
          <p className="text-sm text-ink-500 mt-1">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {toolsToDisplay.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-5 rounded-2xl border border-surface-200 hover:border-brand-300 hover:shadow-md bg-surface-50/50 hover:bg-white transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-ink-900 group-hover:text-brand-700 transition-colors text-base">
                    {tool.title}
                  </h3>
                  {tool.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-100 text-brand-800 shrink-0">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink-500 leading-relaxed line-clamp-3">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-surface-200/60 flex items-center text-xs font-semibold text-brand-700 group-hover:text-brand-800">
                <span>Acessar calculadora</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
