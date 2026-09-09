import type { MetadataRoute } from 'next';

const BASE_URL = 'https://calculahoras.online';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, freq: 'daily' as const },
    { path: '/horas-trabalhadas', priority: 0.9, freq: 'weekly' as const },
    { path: '/horas-semanais', priority: 0.9, freq: 'weekly' as const },
    { path: '/horas-mensais', priority: 0.8, freq: 'weekly' as const },
    { path: '/horas-extras', priority: 0.9, freq: 'weekly' as const },
    { path: '/calculadora-horas-e-salario', priority: 0.8, freq: 'weekly' as const },
    { path: '/calcular-horas-no-excel', priority: 0.8, freq: 'weekly' as const },
    { path: '/calculadora-de-intervalo', priority: 0.8, freq: 'weekly' as const },
    { path: '/calculadora-de-horas-anuais', priority: 0.7, freq: 'monthly' as const },
    { path: '/calculadora-de-turno-noturno', priority: 0.7, freq: 'monthly' as const },
    { path: '/hora-de-saida', priority: 0.7, freq: 'monthly' as const },
    { path: '/horas-decimais', priority: 0.7, freq: 'monthly' as const },
    { path: '/conversor-de-horas', priority: 0.6, freq: 'monthly' as const },
    { path: '/calculadora-de-horas', priority: 0.7, freq: 'monthly' as const },
    { path: '/guias', priority: 0.7, freq: 'weekly' as const },
    { path: '/guias/como-calcular-horas-trabalhadas', priority: 0.6, freq: 'monthly' as const },
    { path: '/guias/como-calcular-horas-extras', priority: 0.6, freq: 'monthly' as const },
    { path: '/guias/como-calcular-horas-em-decimal', priority: 0.6, freq: 'monthly' as const },
    { path: '/guias/como-calcular-hora-de-saida', priority: 0.6, freq: 'monthly' as const },
    { path: '/guias/como-calcular-horas-semanais', priority: 0.6, freq: 'monthly' as const },
    { path: '/guias/como-calcular-intervalo-de-trabalho', priority: 0.6, freq: 'monthly' as const },
    { path: '/guias/como-calcular-turno-noturno', priority: 0.6, freq: 'monthly' as const },
    { path: '/sobre', priority: 0.4, freq: 'monthly' as const },
    { path: '/contato', priority: 0.4, freq: 'monthly' as const },
    { path: '/termos', priority: 0.3, freq: 'yearly' as const },
    { path: '/privacidade', priority: 0.3, freq: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.freq,
    priority: route.priority,
  }));
}
