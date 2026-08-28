import type { Metadata } from 'next';
import GuiaIniciante from '../../src/components/GuiaIniciante';
import { AdSenseScript } from '../../src/components/AdSenseScript';

export const metadata: Metadata = {
  title: 'Como abrir MEI: guia completo e primeiros 30 dias',
  description: 'Confira se pode ser MEI, valide atividade e preço, formalize no Portal do Empreendedor e organize as primeiras obrigações.',
  alternates: { canonical: '/guia-iniciante' },
  openGraph: {
    type: 'article',
    title: 'Como abrir MEI: decisões, formalização e primeiros 30 dias',
    description: 'Uma trilha verificável para escolher ocupação, formalizar no canal oficial e começar a rotina do CNPJ.',
    url: '/guia-iniciante',
    images: []
  },
  twitter: {
    card: 'summary',
    title: 'Como abrir MEI: decisões, formalização e primeiros 30 dias',
    description: 'Uma trilha verificável para escolher ocupação, formalizar no canal oficial e começar a rotina do CNPJ.',
    images: []
  }
};

export default function GuiaIniciantePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Como abrir MEI e organizar os primeiros 30 dias',
    description: 'Confira se pode ser MEI, valide atividade e preço, formalize no Portal do Empreendedor e organize as primeiras obrigações.',
    inLanguage: 'pt-BR',
    dateModified: '2026-08-28',
    step: [
      'Confirmar se o MEI cabe no negócio',
      'Validar cliente, oferta e preço',
      'Formalizar no Portal do Empreendedor',
      'Verificar licenciamento e endereço',
      'Organizar os primeiros 30 dias'
    ].map((name, index) => ({ '@type': 'HowToStep', position: index + 1, name }))
  };

  return <><AdSenseScript /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><GuiaIniciante /></>;
}
