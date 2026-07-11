import type { Metadata } from 'next';
import { BlogListClient } from './client';

export const metadata: Metadata = {
  title: 'Blog MEI Fácil | Artigos e Dicas para MEI e Autônomos',
  description: 'Artigos sobre DAS, DASN-SIMEI, notas fiscais, aposentadoria, limite de faturamento e muito mais para Microempreendedores Individuais.',
};

export default function BlogPage() {
  return <BlogListClient />;
}
