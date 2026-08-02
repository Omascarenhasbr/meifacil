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
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9176810679156928"
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
