import type { Metadata } from 'next';
import { JourneyPage } from '../../src/components/JourneyPage';

export const metadata: Metadata = {
  title: 'Já sou MEI: rotina, obrigações e crescimento',
  description: 'Painel de jornada para organizar DAS, receitas, notas, declaração anual, previdência e crescimento de quem já tem MEI.',
  alternates: { canonical: '/ja-sou-mei' }
};

export default function JaSouMeiPage() {
  return <JourneyPage
    eyebrow="Jornada 2 · CNPJ em atividade"
    title="Já sou MEI"
    intro="Use uma rotina simples para manter o CNPJ organizado e enxergar o crescimento antes que ele vire urgência. As ferramentas daqui trabalham juntas, mas não acessam nem alteram seus dados nos sistemas públicos."
    checklist={[
      'Guardar o CCMEI e manter telefone, endereço e atividades atualizados.',
      'Registrar mensalmente toda a receita bruta e arquivar documentos.',
      'Emitir o DAS apenas em canal oficial e conferir pagamentos.',
      'Acompanhar o teto de receita e buscar orientação antes de ultrapassá-lo.'
    ]}
    steps={[
      { title: 'Feche a receita de cada mês', description: 'Some vendas e serviços sem descontar despesas, reúna documentos e preencha o relatório mensal. Essa base alimenta o acompanhamento do limite e a declaração anual.', href: '/checklist-mensal-mei', action: 'Abrir rotina' },
      { title: 'Planeje e pague o DAS', description: 'Confira a composição estimada e depois emita a guia verdadeira no Simples Nacional ou aplicativo oficial. O vencimento mensal é, em regra, no dia 20.', href: '/calculadora-das-mei', action: 'Conferir valor' },
      { title: 'Documente vendas e serviços', description: 'Entenda quando a nota fiscal é obrigatória. Para prestação de serviços pelo MEI, use o emissor nacional; recibo é apenas comprovante de pagamento e não substitui nota.', href: '/blog/mei-nota-fiscal', action: 'Entender notas' },
      { title: 'Monitore o limite e a margem', description: 'Compare faturamento acumulado com o teto e revise a precificação. Crescer além do MEI pode ser positivo quando a transição é planejada.', href: '/limite-faturamento-mei', action: 'Simular limite' },
      { title: 'Entregue a declaração anual', description: 'A DASN-SIMEI é enviada mesmo sem faturamento. Use os totais mensais e conclua o envio no serviço oficial, guardando o recibo.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/declaracao-anual-de-faturamento', action: 'Ver serviço oficial', external: true },
      { title: 'Confira sua proteção previdenciária', description: 'Compare a projeção educativa com seu CNIS no Meu INSS. Pendências e planos de contribuição precisam de análise individual.', href: '/simulador-aposentadoria-mei', action: 'Ver projeção' }
    ]}
    warning="as obrigações podem variar conforme atividade, município, estado, contratação de empregado e situação cadastral. Em atraso, excesso de receita ou dúvida sobre desenquadramento, procure um profissional de contabilidade."
    related={[{ label: 'Central de serviços oficiais', href: '/servicos-oficiais' },{ label: 'Checklist mensal', href: '/checklist-mensal-mei' },{ label: 'Guias do blog', href: '/blog' }]}
  />;
}
