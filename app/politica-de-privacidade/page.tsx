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
      intro="Esta política explica quais dados podem ser processados, por que isso acontece e quais controles o visitante possui ao usar o MEI Fácil."
      updatedAt="28 de agosto de 2026"
    >
      <h2>Quem mantém este site</h2>
      <p>O MEI Fácil é um projeto editorial independente, disponível em <a href="https://meifacil.blog">meifacil.blog</a>. Dúvidas sobre esta política e pedidos relacionados a privacidade podem ser encaminhados pelo canal informado na nossa <a href="/contato">página de contato</a>.</p>

      <h2>Dados inseridos nas ferramentas</h2>
      <p>Os cálculos são executados no navegador. Quando uma função precisa manter preferências ou um checklist, ela pode usar armazenamento local do dispositivo. O MEI Fácil não possui cadastro de usuário e não recebe esses campos em um banco de dados próprio.</p>

      <h2>Dados que você não deve informar</h2>
      <p>Não solicitamos senha Gov.br, código de acesso, dados bancários ou documentos de identidade. Evite inserir dados pessoais reais de terceiros em equipamentos compartilhados. O emissor de recibo é uma ferramenta local e o usuário é responsável pelo conteúdo gerado.</p>

      <h2>Google AdSense, cookies e publicidade</h2>
      <p>O site usa o Google AdSense para tentar financiar o conteúdo gratuito. Terceiros, incluindo o Google, podem inserir ou ler cookies no navegador e usar beacons da Web, endereços IP ou tecnologias semelhantes como consequência da veiculação de anúncios.</p>
      <p>O Google e seus parceiros podem usar cookies de publicidade para veicular anúncios com base em visitas anteriores ao MEI Fácil ou a outros sites. A personalização depende das escolhas do usuário, da região e das configurações aplicáveis. Saiba <a href="https://policies.google.com/technologies/partner-sites?hl=pt-BR" target="_blank" rel="noopener noreferrer">como o Google usa informações de sites que utilizam seus serviços</a>.</p>
      <p>O visitante pode controlar a personalização em <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">Minha Central de Anúncios</a> e consultar outras opções nas <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Configurações de anúncios do Google</a>.</p>

      <h2>Consentimento e regiões com regras específicas</h2>
      <p>Quando exigido pelas regras aplicáveis, uma mensagem de consentimento permite aceitar, recusar ou gerenciar finalidades antes da publicidade personalizada. Para visitantes do Espaço Econômico Europeu, Reino Unido e Suíça, o projeto utiliza a solução de gestão de consentimento disponibilizada ou certificada pelo Google quando a publicidade está ativa.</p>

      <h2>Páginas onde a publicidade pode aparecer</h2>
      <p>O código de publicidade é limitado a artigos completos do blog, planos detalhados de ideias de negócios e ao guia longo de abertura do MEI. Não carregamos anúncios na página inicial, nos hubs de navegação, nas jornadas, nas calculadoras, no emissor de recibos, no checklist, na central de serviços oficiais, nas páginas institucionais ou em páginas de erro. Consulte também nossa <a href="/politica-de-publicidade">política de publicidade</a>.</p>

      <h2>Registros técnicos</h2>
      <p>O provedor de hospedagem pode processar endereço IP, data, página acessada, agente do navegador e eventos de segurança para entregar e proteger o site. Esses registros seguem as políticas e prazos do provedor e podem ser necessários para segurança, prevenção de abuso e funcionamento da rede.</p>

      <h2>Links externos</h2>
      <p>Links para Gov.br, Receita Federal, INSS, Sebrae e outros serviços levam a sites com políticas próprias. Confira o domínio antes de informar dados ou realizar pagamento.</p>

      <h2>Seus controles e direitos</h2>
      <p>Você pode apagar dados locais nas configurações do navegador, bloquear cookies, revisar escolhas de consentimento e desativar a personalização de anúncios. Bloquear armazenamento pode impedir funções como manter o checklist entre visitas.</p>
      <p>Quando a legislação aplicável assegurar direitos adicionais — como confirmação de tratamento, acesso, correção, eliminação ou oposição — use o canal de contato para apresentar o pedido. Podemos solicitar informações suficientes apenas para localizar e responder à solicitação, sem pedir senha ou documento completo por e-mail.</p>

      <h2>Contato sobre privacidade</h2>
      <p>Pedidos relacionados a esta política podem ser enviados para <a href="mailto:suporte@meifacil.app">suporte@meifacil.app</a>. Não envie documentos pessoais completos no primeiro contato.</p>
    </InstitutionalPage>
  );
}
