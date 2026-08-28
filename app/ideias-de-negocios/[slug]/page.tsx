import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BusinessIdeaArticle } from '../../../src/components/BusinessIdeaArticle';
import { businessIdeas } from '../../../src/data/businessIdeas';
import { AdSenseScript } from '../../../src/components/AdSenseScript';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return businessIdeas.map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const idea = businessIdeas.find((item) => item.slug === slug);
  if (!idea) return { title: 'Ideia não encontrada' };

  return {
    title: idea.seo.metaTitle,
    description: idea.seo.metaDescription,
    alternates: { canonical: `https://meifacil.blog/ideias-de-negocios/${idea.slug}` },
    openGraph: {
      title: idea.seo.metaTitle,
      description: idea.seo.metaDescription,
      type: 'article',
      publishedTime: idea.date,
      modifiedTime: idea.updatedAt,
      authors: ['Equipe Editorial MEI Fácil'],
      url: `/ideias-de-negocios/${idea.slug}`,
      tags: idea.tags,
      images: []
    },
    twitter: {
      card: 'summary',
      title: idea.seo.metaTitle,
      description: idea.seo.metaDescription,
      images: []
    }
  };
}

export default async function BusinessIdeaPage({ params }: Props) {
  const { slug } = await params;
  const idea = businessIdeas.find((item) => item.slug === slug);
  if (!idea) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: idea.title,
    description: idea.summary,
    datePublished: idea.date,
    dateModified: idea.updatedAt,
    mainEntityOfPage: `https://meifacil.blog/ideias-de-negocios/${idea.slug}`,
    author: { '@type': 'Organization', name: 'Equipe Editorial MEI Fácil', url: 'https://meifacil.blog/sobre' },
    publisher: { '@type': 'Organization', name: 'MEI Fácil', url: 'https://meifacil.blog/' },
    citation: idea.sources.map((source) => source.url),
    about: { '@type': 'Occupation', name: idea.occupation.name, occupationalCategory: idea.occupation.cnae },
    inLanguage: 'pt-BR',
    isAccessibleForFree: true,
    articleSection: idea.category,
    keywords: idea.tags.join(', ')
  };

  return <><AdSenseScript /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><BusinessIdeaArticle idea={idea} /></>;
}
