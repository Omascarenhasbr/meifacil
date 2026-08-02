import type { Metadata } from 'next';
import { InstitutionalPage } from '../../src/components/InstitutionalPage';

export const metadata: Metadata = {
  title: 'Política Editorial',
  description: 'Como o MEI Fácil pesquisa, revisa, atualiza e corrige seus guias e ferramentas.',
  alternates: { canonical: '/politica-editorial' }
};

export default function PoliticaEditorialPage() {
  return (
    <InstitutionalPage
      eyebrow="Metodologia"
      title="Política editorial"
      intro="Nosso compromisso é publicar conteúdo útil, identificável e verificável — especialmente em temas fiscais e previdenciários."
    >
      <h2>Fontes e pesquisa</h2>
      <p>Priorizamos legislação e páginas mantidas por Gov.br, Receita Federal, Simples Nacional, INSS e portais oficiais de documentos fiscais. Fontes técnicas reconhecidas podem complementar exemplos de gestão, mas não substituem a regra oficial.</p>

      <h2>Autoria e revisão</h2>
      <p>Os guias são assinados pela Equipe Editorial MEI Fácil e mostram data de publicação, última revisão e fontes consultadas. Não inventamos credenciais profissionais nem apresentamos uma simulação como parecer individual.</p>

      <h2>Como tratamos números e datas</h2>
      <p>Valores dependentes do salário mínimo, limites, vencimentos e regras de transição recebem contexto temporal. Quando uma mudança foi anunciada para o futuro, distinguimos a regra vigente da regra que ainda entrará em vigor.</p>

      <h2>Ferramentas e limitações</h2>
      <p>Cada calculadora deve informar suas premissas. O resultado ajuda no planejamento, mas não consulta bases governamentais e não executa obrigações. O documento ou serviço oficial prevalece em caso de divergência.</p>

      <h2>Correções</h2>
      <p>Quando identificamos erro relevante, corrigimos o conteúdo e atualizamos a data de revisão. Pedidos de correção devem apontar a página, o trecho e uma fonte verificável. Publicidade ou interesse comercial não determinam a conclusão editorial.</p>

      <h2>Uso de automação</h2>
      <p>Ferramentas de automação podem apoiar organização e revisão, mas o texto só é publicado depois de conferência editorial. Não publicamos conteúdo gerado automaticamente sem curadoria.</p>
    </InstitutionalPage>
  );
}
