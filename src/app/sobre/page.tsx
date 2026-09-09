import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Sobre o CalculaHoras',
  description:
    'Conheça o CalculaHoras, uma calculadora de horas online gratuita criada para ajudar trabalhadores brasileiros a controlar suas jornadas de trabalho.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre o CalculaHoras',
    description: 'Conheça a ferramenta que ajuda milhares de trabalhadores brasileiros.',
    url: 'https://calculahoras.online/sobre',
  },
};

export default function SobrePage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-6">
              Sobre o CalculaHoras
            </h1>
            <p className="text-ink-500 leading-relaxed text-lg">
              Ajudamos trabalhadores brasileiros a terem controle total sobre suas jornadas de trabalho.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="prose prose-ink max-w-none space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-ink-900 mb-3">O que é o CalculaHoras?</h2>
              <p className="text-ink-600 leading-relaxed">
                O CalculaHoras é uma ferramenta online gratuita criada para simplificar o cálculo de horas trabalhadas no Brasil. Seja você um trabalhador CLT,自由职业者 ou gestor de pessoas, nossa calculadora oferece resultados rápidos e precisos para o planejamento da sua jornada.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-900 mb-3">Nossa Missão</h2>
              <p className="text-ink-600 leading-relaxed">
                Acreditamos que todo trabalhador merece ter acesso fácil e gratuito a ferramentas que auxiliam no controle de sua jornada. Nosso objetivo é oferecer uma experiência simples, rápida e confiável para que você possa focar no que realmente importa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-900 mb-3">Por que escolher o CalculaHoras?</h2>
              <ul className="space-y-3 text-ink-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>100% gratuito</strong> — Sem taxas ocultas, sem assinaturas, sem limites de uso.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Sem cadastro</strong> — Acesse e calcule imediatamente, sem criar conta.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Preciso e confiável</strong> — Cálculos validados para diversos cenários, incluindo turnos noturnos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Funciona no celular</strong> — Design responsivo para usar em qualquer dispositivo.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-900 mb-3">Ferramentas Disponíveis</h2>
              <p className="text-ink-600 leading-relaxed">
                Oferecemos um conjunto completo de ferramentas para diferentes necessidades:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[
                  { href: '/calculadora-de-horas', title: 'Calculadora de Horas', desc: 'Calculadora principal completa' },
                  { href: '/horas-trabalhadas', title: 'Horas Trabalhadas', desc: 'Calcule horas do dia' },
                  { href: '/horas-extras', title: 'Horas Extras', desc: 'Identifique suas extras' },
                  { href: '/hora-de-saida', title: 'Hora de Saída', desc: 'Descubra quando sair' },
                  { href: '/horas-semanais', title: 'Horas Semanais', desc: 'Totalize a semana' },
                  { href: '/horas-decimais', title: 'Horas Decimais', desc: 'Converta para decimal' },
                  { href: '/conversor-de-horas', title: 'Conversor', desc: 'Converta formatos' },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="block p-4 rounded-xl border border-surface-200 hover:border-brand-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="font-semibold text-ink-900 text-sm">{tool.title}</h3>
                    <p className="text-xs text-ink-500 mt-1">{tool.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-900 mb-3">Contato</h2>
              <p className="text-ink-600 leading-relaxed">
                Tem sugestões, dúvidas ou quer entrar em contato? Acesse nossa página de{' '}
                <Link href="/contato" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
                  contato
                </Link>{' '}
                ou envie um e-mail para{' '}
                <a href="mailto:contato@calculahoras.online" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
                  contato@calculahoras.online
                </a>.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
