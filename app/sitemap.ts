import type { MetadataRoute } from 'next';
import { posts } from '../src/data/posts';
import { businessIdeas } from '../src/data/businessIdeas';

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
    '/ideias-de-negocios',
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
      changeFrequency: route === '/blog' || route === '/ideias-de-negocios' ? 'weekly' as const : 'monthly' as const,
      priority: route === '' ? 1 : route === '/blog' || route === '/ideias-de-negocios' ? 0.9 : route.startsWith('/politica') || route === '/termos-de-uso' ? 0.3 : 0.7
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: post.featured ? 0.9 : 0.8
    })),
    ...businessIdeas.map((idea) => ({
      url: `${baseUrl}/ideias-de-negocios/${idea.slug}`,
      lastModified: new Date(idea.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: idea.featured ? 0.9 : 0.8
    }))
  ];
}
