import type { Metadata } from 'next';
import { InstitutionalPage } from '../../src/components/InstitutionalPage';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a equipe do MEI Fácil para suporte, correções e assuntos de privacidade.',
  alternates: { canonical: '/contato' }
};

export default function ContatoPage() {
  return (
    <InstitutionalPage
      eyebrow="Fale conosco"
      title="Contato"
      intro="Use o e-mail para relatar erros, sugerir melhorias ou esclarecer como as ferramentas funcionam."
      updatedAt="28 de agosto de 2026"
    >
      <h2>Atendimento</h2>
      <p>E-mail: <a href="mailto:suporte@meifacil.app">suporte@meifacil.app</a></p>
      <p>Esse é o canal editorial e técnico indicado pelo projeto. Mensagens não são tratadas como consulta contábil, jurídica ou previdenciária individual.</p>
      <p>Para facilitar a análise, inclua a URL da página, descreva o que aconteceu e informe navegador e dispositivo quando o assunto for técnico.</p>

      <h2>Correção editorial</h2>
      <p>Ao apontar uma informação incorreta, envie o trecho, a correção proposta e um link para a fonte oficial. Priorizamos correções que possam afetar decisões fiscais, financeiras ou previdenciárias.</p>

      <h2>Limites do suporte</h2>
      <p>Não acessamos conta Gov.br, CNPJ, dados bancários ou conta do AdSense do usuário. Também não emitimos guias, não recebemos documentos pessoais e não prestamos consultoria contábil individual.</p>

      <h2>Privacidade</h2>
      <p>Não envie CPF, senha, código de acesso, documento de identidade ou dados completos de clientes. Consulte nossa <a href="/politica-de-privacidade">Política de Privacidade</a> para entender o funcionamento local das ferramentas.</p>
    </InstitutionalPage>
  );
}
