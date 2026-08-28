import type { Metadata } from 'next';
import './globals.css';
import { ClientLayout } from '../src/components/ClientLayout';

export const metadata: Metadata = {
  title: {
    default: 'MEI Fácil | Ferramentas e Guias para Microempreendedores',
    template: '%s | MEI Fácil',
  },
  description: 'Ferramentas gratuitas e guias revisados para MEI: DAS, limite de faturamento, nota fiscal, recibos, precificação e aposentadoria.',
  metadataBase: new URL('https://meifacil.blog'),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Equipe Editorial MEI Fácil', url: '/sobre' }],
  creator: 'MEI Fácil',
  publisher: 'MEI Fácil',
  category: 'Educação financeira e gestão para microempreendedores',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'MEI Fácil',
    title: 'MEI Fácil | Ferramentas e Guias para Microempreendedores',
    description: 'Cálculos transparentes e guias revisados para organizar as obrigações do MEI.',
    url: '/',
    images: [{ url: '/mei-facil-social.png', width: 1536, height: 1024, alt: 'MEI Fácil: jornadas, ferramentas e guias para microempreendedores' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEI Fácil',
    description: 'Ferramentas e guias revisados para microempreendedores.',
    images: ['/mei-facil-social.png']
  },
  other: {
    'google-adsense-account': 'ca-pub-9176810679156928'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MEI Fácil',
    url: 'https://meifacil.blog',
    description: 'Projeto editorial independente com ferramentas e guias verificáveis para microempreendedores.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'suporte editorial e técnico',
      email: 'suporte@meifacil.app',
      availableLanguage: 'Portuguese'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MEI Fácil',
    url: 'https://meifacil.blog',
    inLanguage: 'pt-BR',
    publisher: { '@type': 'Organization', name: 'MEI Fácil' }
  };

  return (
    <html lang="pt-BR">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
