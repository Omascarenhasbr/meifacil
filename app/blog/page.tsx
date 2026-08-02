import type { Metadata } from 'next';
import { BlogListClient } from './client';

export const metadata: Metadata = {
  title: 'Guias para MEI e Autônomos',
  description: 'Guias revisados sobre DAS, DASN-SIMEI, nota fiscal, aposentadoria, precificação e limite de faturamento.',
  alternates: { canonical: '/blog' }
};

export default function BlogPage() {
  return <BlogListClient />;
}
