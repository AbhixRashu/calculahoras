import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com o CalculaHoras. Envie dúvidas, sugestões ou reporte erros sobre nossas calculadoras de horas online.',
  alternates: { canonical: 'https://calculahoras.online/contato' },
  openGraph: {
    title: 'Contato | CalculaHoras',
    description:
      'Entre em contato com o CalculaHoras. Envie dúvidas, sugestões ou reporte erros.',
    url: 'https://calculahoras.online/contato',
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
