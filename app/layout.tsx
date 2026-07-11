import type { Metadata } from 'next';
import './globals.css';
import { ClientLayout } from '../src/components/ClientLayout';

export const metadata: Metadata = {
  title: {
    default: 'MEI Fácil | Hub de Ferramentas e Gestão para Autônomos',
    template: '%s | MEI Fácil',
  },
  description: 'Ferramentas gratuitas para MEI: Calculadora DAS, Simulador de Limite de Faturamento, Emissor de Recibos, Checklist Mensal, Precificação e Simulador de Aposentadoria. Tudo em um lugar.',
  metadataBase: new URL('https://meifacil.blog'),
  alternates: {
    canonical: 'https://meifacil.blog/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
