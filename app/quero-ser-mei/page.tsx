import type { Metadata } from 'next';
import { JourneyPage } from '../../src/components/JourneyPage';

export const metadata: Metadata = {
  title: 'Quero ser MEI: da ideia ao CNPJ',
  description: 'Jornada gratuita para verificar se você pode ser MEI, escolher atividade, formalizar no portal oficial e cumprir os primeiros passos.',
  alternates: { canonical: '/quero-ser-mei' }
};

export default function QueroSerMeiPage() {
  return <JourneyPage
    eyebrow="Jornada 1 · Antes do CNPJ"
    title="Quero ser MEI"
    intro="Organize a decisão antes de abrir o CNPJ. Esta trilha separa pesquisa, formalização oficial e primeiros cuidados para você não contratar intermediários desnecessários nem começar com a atividade errada."
    checklist={[
      'Ter acesso à sua conta gov.br e conferir seus dados pessoais.',
      'Descrever o que você realmente vende ou faz, sem escolher atividade apenas pelo nome mais parecido.',
      'Estimar receita, custos e necessidade de emitir nota fiscal.',
      'Verificar exigências da prefeitura, vigilância, bombeiros ou conselho profissional para a atividade e o endereço.'
    ]}
    steps={[
      { title: 'Escolha uma ideia e valide a demanda', description: 'Antes de investir ou abrir o CNPJ, transforme sua habilidade em uma oferta pequena, converse com o público e busque os primeiros pedidos pagos. Assim você testa cliente, preço e rotina com menos risco.', href: '/ideias-de-negocios', action: 'Explorar ideias' },
      { title: 'Confira se o MEI cabe no seu negócio', description: 'Valide ocupação permitida, limite de receita, participação em outras empresas e possibilidade de contratar no máximo um empregado. Se um requisito não couber, avalie outro tipo empresarial antes de formalizar.', href: '/guia-iniciante', action: 'Fazer a trilha' },
      { title: 'Planeje preço e faturamento', description: 'Transforme custos, horas produtivas e reservas em uma referência de preço. Depois projete a receita anual para saber se o teto do MEI é compatível com sua meta.', href: '/calculadora-preco-hora-autonomo', action: 'Calcular preço' },
      { title: 'Formalize gratuitamente no portal oficial', description: 'A abertura do MEI é gratuita. Faça o procedimento no Portal do Empreendedor, confira todos os dados antes de concluir e salve o CCMEI.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei', action: 'Ir ao gov.br', external: true, note: 'Desconfie de cobranças para “ativar” um CNPJ recém-aberto.' },
      { title: 'Organize o primeiro mês', description: 'Separe conta e documentos do negócio, entenda quando emitir nota, registre receitas e programe o DAS. Essas rotinas evitam que a empresa comece acumulando pendências.', href: '/checklist-mensal-mei', action: 'Abrir checklist' },
      { title: 'Use somente os canais corretos', description: 'Tenha atalhos confiáveis para CCMEI, DAS, declaração anual e nota fiscal. O MEI Fácil explica; a conclusão do serviço acontece no órgão responsável.', href: '/servicos-oficiais', action: 'Ver serviços' }
    ]}
    warning="a formalização não substitui licenças, autorizações e regras locais da atividade. Confirme as exigências no município e procure apoio contábil quando sua situação não for simples."
    related={[{ label: 'Ideias de negócios para validar', href: '/ideias-de-negocios' },{ label: 'Trilha detalhada do iniciante', href: '/guia-iniciante' },{ label: 'Calculadora de preço', href: '/calculadora-preco-hora-autonomo' },{ label: 'Guias revisados', href: '/blog' }]}
  />;
}
