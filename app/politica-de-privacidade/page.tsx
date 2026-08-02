import type { Metadata } from 'next';
import { InstitutionalPage } from '../../src/components/InstitutionalPage';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Saiba quais dados o MEI Fácil processa, como funciona o armazenamento local e como a publicidade pode usar cookies.',
  alternates: { canonical: '/politica-de-privacidade' }
};

export default function PrivacidadePage() {
  return (
    <InstitutionalPage
      eyebrow="Privacidade"
      title="Política de Privacidade"
      intro="Esta política descreve, em linguagem direta, como as ferramentas tratam dados no navegador e como serviços de terceiros podem operar."
    >
      <h2>Dados inseridos nas ferramentas</h2>
      <p>Os cálculos são executados no navegador. Quando uma função precisa manter preferências ou checklist, ela pode usar armazenamento local do dispositivo. Esses dados não são enviados ao MEI Fácil por um cadastro de usuário.</p>

      <h2>Dados que você não deve informar</h2>
      <p>Não solicitamos senha Gov.br, código de acesso, dados bancários ou documentos de identidade. Evite inserir dados pessoais reais de terceiros em equipamentos compartilhados. O emissor de recibo é uma ferramenta local e o usuário é responsável pelo conteúdo gerado.</p>

      <h2>Cookies e publicidade</h2>
      <p>O site pretende utilizar o Google AdSense para financiar o conteúdo gratuito. O Google e seus parceiros podem usar cookies ou tecnologias semelhantes para medir publicidade, prevenir fraude e, conforme consentimento e configuração aplicável, personalizar anúncios. As opções e controles do Google podem ser consultados nas configurações de anúncios da conta Google.</p>

      <h2>Registros técnicos</h2>
      <p>O provedor de hospedagem pode registrar endereço IP, data, página acessada, agente do navegador e eventos de segurança para entregar e proteger o site. Esses registros seguem as políticas e prazos do provedor.</p>

      <h2>Links externos</h2>
      <p>Links para Gov.br, Receita Federal, INSS, Sebrae e outros serviços levam a sites com políticas próprias. Confira o domínio antes de informar dados ou realizar pagamento.</p>

      <h2>Seus controles</h2>
      <p>Você pode apagar dados locais nas configurações do navegador, bloquear cookies e ajustar consentimento quando o respectivo controle estiver disponível. Bloquear armazenamento pode impedir funções como manter o checklist entre visitas.</p>

      <h2>Contato sobre privacidade</h2>
      <p>Pedidos relacionados a esta política podem ser enviados para <a href="mailto:suporte@meifacil.app">suporte@meifacil.app</a>. Não envie documentos pessoais completos no primeiro contato.</p>
    </InstitutionalPage>
  );
}
