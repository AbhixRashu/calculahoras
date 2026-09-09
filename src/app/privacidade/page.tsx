import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba como o CalculaHoras protege seus dados. Política de privacidade completa e transparente.',
  alternates: { canonical: 'https://calculahoras.online/privacidade' },
  openGraph: {
    title: 'Política de Privacidade | CalculaHoras',
    description: 'Saiba como o CalculaHoras protege seus dados.',
    url: 'https://calculahoras.online/privacidade',
  },
};

export default function PrivacidadePage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-app max-w-3xl">
        <ScrollReveal>
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">
              Política de Privacidade
            </h1>
            <p className="text-ink-400 text-sm">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="prose prose-ink max-w-none space-y-8 text-ink-600 leading-relaxed">
            <div>
              <p>
                Esta Política de Privacidade descreve como o CalculaHoras coleta, usa e protege as informações dos usuários que acessam nosso site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">1. Informações que Coletamos</h2>
              <h3 className="text-lg font-semibold text-ink-800 mb-2">Dados inseridos pelo usuário</h3>
              <p>
                Os horários e valores inseridos na calculadora são processados exclusivamente no seu navegador (lado do cliente). <strong>Não enviamos, armazenamos ou transmitimos esses dados para nossos servidores.</strong>
              </p>
              <h3 className="text-lg font-semibold text-ink-800 mb-2 mt-4">Dados coletados automaticamente</h3>
              <p>Podemos coletar automaticamente:</p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Endereço IP (anonimizado)</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Sistema operacional</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Fonte de tráfego</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">2. Como Usamos as Informações</h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Melhorar a experiência do usuário</li>
                <li>Analisar tráfego e uso do site</li>
                <li>Detectar e prevenir fraudes</li>
                <li>Cumprir obrigações legais</li>
                <li>Melhorar nossas ferramentas e funcionalidades</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">3. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência. Cookies são pequenos arquivos armazenados no seu dispositivo que nos ajudam a entender como você usa o site.
              </p>
              <p className="mt-3">
                Você pode controlar o uso de cookies através das configurações do seu navegador. A desativação de cookies pode afetar a funcionalidade do site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">4. Compartilhamento de Dados</h2>
              <p>
                <strong>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros</strong>, exceto quando:
              </p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Exigido por lei ou ordem judicial</li>
                <li>Necessário para proteger nossos direitos legais</li>
                <li>Com prestadores de serviços que nos auxiliam na operação do site (ex: analytics)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">5. Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">6. Seus Direitos (LGPD)</h2>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Solicitar acesso aos seus dados pessoais</li>
                <li>Solicitar correção de dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados pessoais</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Obter informações sobre o uso de seus dados</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">7. Retenção de Dados</h2>
              <p>
                Como os dados inseridos na calculadora são processados localmente no seu navegador e não são armazenados em nossos servidores, não há retenção desses dados por nossa parte.
              </p>
              <p className="mt-3">
                Os dados de analytics são retidos pelo período necessário para análise estatística, geralmente não excedendo 26 meses.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">8. Crianças e Adolescentes</h2>
              <p>
                O CalculaHoras não é direcionado a crianças e adolescentes. Não coletamos intencionalmente informações de menores de 13 anos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">9. Alterações nesta Política</h2>
              <p>
                Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. Recomendamos que revise esta página periodicamente para se manter informado sobre como protegemos seus dados.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900 mb-3">10. Contato</h2>
              <p>
                Se tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados, entre em contato:
              </p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>E-mail: <a href="mailto:contato@calculahoras.online" className="text-brand-600 hover:text-brand-700">contato@calculahoras.online</a></li>
                <li>Site: <a href="https://calculahoras.online" className="text-brand-600 hover:text-brand-700">calculahoras.online</a></li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
