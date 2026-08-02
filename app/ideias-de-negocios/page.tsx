import type { Metadata } from 'next';
import { BusinessIdeasHub } from '../../src/components/BusinessIdeasHub';

export const metadata: Metadata = {
  title: 'Ideias de negócios para começar e validar',
  description: 'Ideias de negócios com oferta mínima, cenário de investimento, ocupação MEI e plano para validar clientes antes de abrir o CNPJ.',
  alternates: { canonical: '/ideias-de-negocios' },
  openGraph: {
    title: 'Ideias de negócios para validar antes do CNPJ',
    description: 'Planos práticos para testar demanda, calcular custos e conferir o enquadramento como MEI.',
    url: '/ideias-de-negocios'
  }
};

export default function BusinessIdeasPage() {
  return <BusinessIdeasHub />;
}
