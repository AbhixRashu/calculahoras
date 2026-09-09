import type { Metadata } from 'next';

const BASE_URL = 'https://calculahoras.online';

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const url = `${BASE_URL}${config.path}`;
  const title = config.title;
  const description = config.description;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: config.ogTitle || title,
      description: config.ogDescription || description,
      url,
      siteName: 'CalculaHoras',
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.ogTitle || title,
      description: config.ogDescription || description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CalculaHoras',
    url: BASE_URL,
    description: 'Calculadora de horas online gratuita para calcular horas trabalhadas, horas extras e muito mais.',
    inLanguage: 'pt-BR',
  };
}

export function generateWebApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'CalculaHoras - Calculadora de Horas',
    url: BASE_URL,
    description: 'Calcule horas trabalhadas, horas extras, intervalos e hora de saída gratuitamente.',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}
