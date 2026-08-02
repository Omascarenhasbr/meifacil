import type { MetadataRoute } from 'next';
import { posts } from '../src/data/posts';

export const dynamic = 'force-static';

const baseUrl = 'https://meifacil.blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/quero-ser-mei',
    '/ja-sou-mei',
    '/servicos-oficiais',
    '/guia-iniciante',
    '/calculadora-das-mei',
    '/limite-faturamento-mei',
    '/calculadora-preco-hora-autonomo',
    '/emissor-recibo-mei',
    '/checklist-mensal-mei',
    '/simulador-aposentadoria-mei',
    '/blog',
    '/sobre',
    '/politica-editorial',
    '/contato',
    '/politica-de-privacidade',
    '/termos-de-uso'
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date('2026-08-02'),
      changeFrequency: route === '/blog' ? 'weekly' as const : 'monthly' as const,
      priority: route === '' ? 1 : route === '/blog' ? 0.9 : route.startsWith('/politica') || route === '/termos-de-uso' ? 0.3 : 0.7
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: post.featured ? 0.9 : 0.8
    }))
  ];
}
