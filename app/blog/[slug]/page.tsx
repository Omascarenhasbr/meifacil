import type { Metadata } from 'next';
import { posts } from '../../../src/data/posts';
import { BlogPostClient } from './client';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate all blog post URLs at build time
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// Generate per-post SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: 'Artigo não encontrado' };

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    alternates: {
      canonical: `https://meifacil.blog/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      authors: ['Equipe Editorial MEI Fácil'],
      url: `/blog/${post.slug}`,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.updatedAt,
    mainEntityOfPage: `https://meifacil.blog/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Equipe Editorial MEI Fácil',
      url: 'https://meifacil.blog/sobre'
    },
    publisher: {
      '@type': 'Organization',
      name: 'MEI Fácil',
      url: 'https://meifacil.blog/'
    },
    citation: post.sources.map((source) => source.url)
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BlogPostClient slug={slug} />
    </>
  );
}
