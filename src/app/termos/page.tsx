import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Leia os termos de uso do CalculaHoras. Condições gerais de uso da calculadora de horas online.',
  alternates: { canonical: 'https://calculahoras.online/termos' },
  openGraph: {
    title: 'Termos de Uso | CalculaHoras',
    description: 'Condições gerais de uso da calculadora de horas online.',
    url: 'https://calculahoras.online/termos',
  },
};

export default function TermosPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">
              Termos de Uso
            </h1>
            <p className="text-ink-400 text-sm">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="prose prose-ink max-w-none space-y-8 text-ink-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o CalculaHoras (calculahoras.online), você concorda com estes Termos de Uso. Se não concordar com algum dos termos, por favor, não utilize o site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">2. Descrição do Serviço</h2>
              <p>
                O CalculaHoras é uma ferramenta online gratuita que permite o cálculo de horas trabalhadas, horas extras, intervalos, hora de saída, horas semanais, conversão de horas decimais e outros cálculos relacionados a jornada de trabalho.
              </p>
              <p className="mt-3">
                O site é mantido como um serviço público e gratuito, sem necessidade de cadastro ou login.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">3. Uso Aceitável</h2>
              <p>Ao utilizar o CalculaHoras, você concorda em:</p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Utilizar a ferramenta para fins lícitos e pessoais</li>
                <li>Não tentar comprometer a segurança ou disponibilidade do site</li>
                <li>Não reproduzir, distribuir ou modificar o conteúdo sem autorização</li>
                <li>Não utilizar bots, scripts ou ferramentas automatizadas para acessar o site</li>
                <li>Não sobrecarregar os servidores com requisições excessivas</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">4. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo do CalculaHoras, incluindo mas não se limitando a textos, gráficos, logotipos, ícones, imagens, código-fonte e design, é de propriedade do CalculaHoras ou de seus licenciadores e é protegido por leis de direitos autorais.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">5. Isenção de Responsabilidade</h2>
              <p>
                O CalculaHoras é fornecido &quot;como está&quot;, sem garantias de qualquer tipo, expressas ou implícitas. Embora nos esforcemos para manter os cálculos precisos:
              </p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Os resultados são baseados nos dados inseridos pelo usuário</li>
                <li>Não nos responsabilizamos por decisões tomadas com base nos cálculos</li>
                <li>Recomendamos sempre verificar com o departamento de RH ou contabilidade</li>
                <li>Os cálculos não substituem orientação profissional especializada</li>
                <li>Não garantimos disponibilidade ininterrupta do serviço</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">6. Limitação de Responsabilidade</h2>
              <p>
                Em nenhuma circunstância o CalculaHoras será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de uso do site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">7. Links Externos</h2>
              <p>
                O site pode conter links para sites de terceiros. Esses links são fornecidos apenas para conveniência. O CalculaHoras não controla e não se responsabiliza pelo conteúdo desses sites externos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">8. Alterações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site. O uso continuado do site após as alterações constitui aceitação dos novos termos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">9. Lei Aplicável</h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">10. Contato</h2>
              <p>
                Em caso de dúvidas sobre estes termos, entre em contato pelo e-mail:{' '}
                <a href="mailto:contato@calculahoras.online" className="text-brand-600 hover:text-brand-700">
                  contato@calculahoras.online
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
