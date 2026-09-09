interface StructuredDataProps {
  type: 'website' | 'webapp' | 'breadcrumb' | 'article';
  data?: Record<string, unknown>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let jsonLd: Record<string, unknown>;

  if (type === 'website') {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'CalculaHoras',
      url: 'https://calculahoras.online',
      description:
        'Calculadora de horas online gratuita para calcular horas trabalhadas, horas extras e muito mais.',
      inLanguage: 'pt-BR',
      ...data,
    };
  } else if (type === 'webapp') {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'CalculaHoras - Calculadora de Horas',
      url: 'https://calculahoras.online',
      description:
        'Calcule horas trabalhadas, horas extras, intervalos e hora de saída gratuitamente.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
      },
      ...data,
    };
  } else if (type === 'article') {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      publisher: {
        '@type': 'Organization',
        name: 'CalculaHoras',
        url: 'https://calculahoras.online',
      },
      inLanguage: 'pt-BR',
      ...data,
    };
  } else {
    jsonLd = data || {};
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
