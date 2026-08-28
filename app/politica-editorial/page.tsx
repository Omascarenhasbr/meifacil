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
      updatedAt="28 de agosto de 2026"
    >
      <h2>O que precisa existir antes da publicação</h2>
      <p>Uma página editorial deve responder a uma dúvida concreta, acrescentar contexto próprio e permitir que o leitor encontre a origem das regras principais. Não publicamos páginas criadas apenas para repetir palavras-chave, preencher uma categoria ou alcançar uma quantidade artificial de artigos.</p>

      <h2>Fontes e pesquisa</h2>
      <p>Priorizamos legislação e páginas mantidas por Gov.br, Receita Federal, Simples Nacional, INSS e portais oficiais de documentos fiscais. Fontes técnicas reconhecidas podem complementar exemplos de gestão, mas não substituem a regra oficial.</p>

      <h2>Autoria e revisão</h2>
      <p>Os guias são assinados institucionalmente pela Equipe Editorial MEI Fácil e mostram data de publicação, última revisão e fontes consultadas. A autoria institucional significa pesquisa, redação e revisão documental internas. Não inventamos credenciais profissionais, não afirmamos revisão especializada inexistente e não apresentamos uma simulação como parecer individual.</p>

      <h2>Como tratamos números e datas</h2>
      <p>Valores dependentes do salário mínimo, limites, vencimentos e regras de transição recebem contexto temporal. Quando uma mudança foi anunciada para o futuro, distinguimos a regra vigente da regra que ainda entrará em vigor.</p>

      <h2>Ferramentas e limitações</h2>
      <p>Cada calculadora deve informar suas premissas. O resultado ajuda no planejamento, mas não consulta bases governamentais e não executa obrigações. O documento ou serviço oficial prevalece em caso de divergência.</p>

      <h2>Correções</h2>
      <p>Quando identificamos erro relevante, corrigimos o conteúdo, revisamos páginas relacionadas e atualizamos a data de revisão. Pedidos de correção devem apontar a página, o trecho e uma fonte verificável. Publicidade ou interesse comercial não determinam a conclusão editorial.</p>

      <h2>Uso de automação</h2>
      <p>Ferramentas de automação podem apoiar pesquisa, organização, comparação e revisão. Antes da publicação, os dados objetivos devem ser confrontados com as fontes listadas, exemplos precisam ser identificados como exemplos e afirmações que não possam ser sustentadas devem ser removidas. Não publicamos conteúdo automaticamente apenas para aumentar o volume do site.</p>

      <h2>Publicidade e conflitos de interesse</h2>
      <p>Receita publicitária não altera pauta, fontes ou conclusão. Conteúdo patrocinado, parceria ou relação comercial deverá ser identificado quando existir. Consulte a <a href="/politica-de-publicidade">política de publicidade</a>.</p>
    </InstitutionalPage>
  );
}
