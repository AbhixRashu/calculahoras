import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/navigation/Footer';
import { StructuredData } from '@/components/seo/StructuredData';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Calculadora de Horas Online | Horas Trabalhadas e Extras',
    template: '%s | CalculaHoras',
  },
  description:
    'Calcule horas trabalhadas, horas extras, intervalos e hora de saída gratuitamente. Calculadora de horas online rápida, simples e precisa.',
  keywords: [
    'calculadora de horas',
    'calculadora de horas trabalhadas',
    'calculadora de horas extras',
    'calculadora de horas online',
    'horas trabalhadas',
    'horas extras',
    'cálculo de horas',
    'cálculo de jornada',
    'hora de saída',
    'horas semanais',
    'conversão de horas',
  ],
  authors: [{ name: 'CalculaHoras' }],
  creator: 'CalculaHoras',
  metadataBase: new URL('https://calculahoras.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Calculadora de Horas Online | CalculaHoras',
    description:
      'Calcule horas trabalhadas, horas extras e sua hora de saída gratuitamente.',
    url: 'https://calculahoras.online',
    siteName: 'CalculaHoras',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Horas Online | CalculaHoras',
    description:
      'Calcule horas trabalhadas, horas extras e sua hora de saída gratuitamente.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <StructuredData type="website" />
        <StructuredData type="webapp" />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased" suppressHydrationWarning>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
