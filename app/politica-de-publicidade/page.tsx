import type { Metadata } from 'next';
import { InstitutionalPage } from '../../src/components/InstitutionalPage';

export const metadata: Metadata = {
  title: 'Política de Publicidade',
  description: 'Entenda como a publicidade é separada do conteúdo editorial e em quais páginas anúncios podem aparecer no MEI Fácil.',
  alternates: { canonical: '/politica-de-publicidade' }
};

export default function PoliticaPublicidadePage() {
  return (
    <InstitutionalPage
      eyebrow="Transparência comercial"
      title="Política de publicidade"
      intro="A publicidade ajuda a financiar o acesso gratuito, mas não determina nossas conclusões editoriais nem substitui o conteúdo da página."
      updatedAt="28 de agosto de 2026"
    >
      <h2>Separação entre conteúdo e anúncio</h2>
      <p>Guias, cálculos, fontes e recomendações editoriais são definidos independentemente dos anunciantes. A presença de um anúncio não significa que o MEI Fácil recomenda, certifica ou possui relação comercial direta com a empresa anunciada.</p>

      <h2>Identificação e posicionamento</h2>
      <p>Anúncios devem permanecer identificáveis como publicidade e não podem ser apresentados como botão de ferramenta, resultado de cálculo, link oficial ou etapa obrigatória. Não usamos textos ou elementos visuais para incentivar cliques em anúncios.</p>

      <h2>Páginas elegíveis</h2>
      <p>O carregamento do AdSense é limitado a páginas longas com conteúdo editorial próprio e suficiente: artigos completos do blog, planos detalhados de ideias de negócios e o guia completo de abertura do MEI.</p>

      <h2>Páginas excluídas</h2>
      <p>Não carregamos anúncios na página inicial, nos hubs de navegação, nas jornadas, nas calculadoras, simuladores, emissor de recibos, checklist, central de serviços oficiais, contato, políticas, termos, páginas de erro ou outras telas cuja finalidade principal seja executar uma ação ou navegar para outro serviço.</p>

      <h2>Cliques e tráfego inválido</h2>
      <p>Nunca pedimos que visitantes cliquem em anúncios para apoiar o projeto. O responsável pelo site, colaboradores e pessoas próximas também não devem clicar nos anúncios nem gerar impressões artificiais. Tráfego automatizado, comprado com incentivo ou originado de práticas enganosas não é aceito.</p>

      <h2>Privacidade</h2>
      <p>O uso de cookies, os controles de personalização e as informações sobre consentimento estão descritos na nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.</p>
    </InstitutionalPage>
  );
}
