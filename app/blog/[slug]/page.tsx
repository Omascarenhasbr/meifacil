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
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      {/* Static HTML content for crawlers — visible before JS loads */}
      <div className="sr-only" aria-hidden="false">
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Interactive client component */}
      <BlogPostClient slug={slug} />
    </>
  );
}
