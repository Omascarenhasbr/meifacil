import type { Metadata } from 'next';
import Link from 'next/link';
import { InstitutionalPage } from '../../src/components/InstitutionalPage';

export const metadata: Metadata = {
  title: 'Sobre o MEI Fácil',
  description: 'Conheça o propósito, os limites e a forma de trabalho do MEI Fácil.',
  alternates: { canonical: '/sobre' }
};

export default function SobrePage() {
  return (
    <InstitutionalPage
      eyebrow="Transparência"
      title="Sobre o MEI Fácil"
      intro="Um projeto independente que transforma regras dispersas em ferramentas simples e guias verificáveis para o dia a dia do microempreendedor."
      updatedAt="28 de agosto de 2026"
    >
      <h2>Por que este site existe</h2>
      <p>O MEI precisa lidar com valores, prazos e portais diferentes, muitas vezes sem uma equipe administrativa. Criamos calculadoras, checklists e explicações para ajudar o usuário a organizar essas informações antes de acessar o canal oficial.</p>

      <h2>O que entregamos</h2>
      <ul>
        <li>Simulações educativas com premissas visíveis.</li>
        <li>Guias escritos a partir de fontes governamentais e documentos de referência.</li>
        <li>Links diretos para o serviço oficial sempre que uma ação precisa ser concluída fora do site.</li>
        <li>Revisões datadas para assuntos que mudam com salário mínimo, legislação ou calendário.</li>
      </ul>

      <h2>O que não somos</h2>
      <p>O MEI Fácil não pertence ao Governo Federal, à Receita Federal, ao INSS, ao Sebrae ou a qualquer plataforma citada. Não emitimos DAS, não recebemos tributos e não acessamos dados do CNPJ. As ferramentas não substituem contador, advogado ou análise previdenciária individual.</p>

      <h2>Responsabilidade editorial</h2>
      <p>Os conteúdos são publicados sob autoria institucional da Equipe Editorial MEI Fácil porque as páginas são mantidas e atualizadas como parte do projeto, e não como opinião pessoal. Pesquisa, redação e revisão documental são internas. Quando não há revisão assinada por contador, advogado ou especialista externo, não sugerimos que ela exista.</p>
      <p>Nossa <Link href="/politica-editorial">política editorial</Link> explica como selecionamos fontes, usamos automação, corrigimos erros e distinguimos cálculo educativo de orientação oficial.</p>

      <h2>Como verificar o que publicamos</h2>
      <p>Os guias identificam data de revisão e fontes consultadas. Nas ferramentas, exibimos premissas, limitações e um caminho para o serviço responsável. O leitor deve conseguir reproduzir uma conta, abrir a fonte original e entender onde termina a explicação educativa.</p>

      <h2>Financiamento e independência</h2>
      <p>O projeto pretende ser financiado por publicidade do Google AdSense. Anunciantes não escolhem pautas, não aprovam artigos e não alteram a conclusão de um guia. A <Link href="/politica-de-publicidade">política de publicidade</Link> informa em quais páginas anúncios podem aparecer e como eles são separados das ferramentas.</p>

      <h2>Contato</h2>
      <p>Encontrou informação desatualizada ou um problema em uma ferramenta? Consulte a <Link href="/contato">página de contato</Link> e envie o endereço da página, a correção sugerida e, se possível, a fonte correspondente.</p>
    </InstitutionalPage>
  );
}
