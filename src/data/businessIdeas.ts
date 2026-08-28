export interface BusinessIdeaSource {
  name: string;
  url: string;
}

export interface BusinessIdea {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  date: string;
  updatedAt: string;
  readTime: number;
  featured: boolean;
  audience: string;
  investmentRange: string;
  validationGoal: string;
  occupation: {
    name: string;
    cnae: string;
    note: string;
  };
  content: string;
  sources: BusinessIdeaSource[];
  relatedTool: {
    name: string;
    path: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export const businessIdeas: BusinessIdea[] = [
  {
    slug: 'marmitas-por-encomenda',
    title: 'Marmitas por encomenda: como testar a ideia antes de investir',
    summary: 'Um plano enxuto para definir cardápio, calcular custo por porção, conseguir os primeiros pedidos e verificar as exigências sanitárias locais.',
    category: 'Alimentação',
    tags: ['marmitas', 'alimentação', 'delivery', 'validação'],
    date: '2026-08-02',
    updatedAt: '2026-08-02',
    readTime: 8,
    featured: true,
    audience: 'Quem já cozinha bem, tem acesso a uma cozinha adequada e consegue atender uma região pequena.',
    investmentRange: 'Teste editorial: R$ 250 a R$ 700',
    validationGoal: 'Vender 20 marmitas pagas para pelo menos 8 clientes em duas semanas.',
    occupation: {
      name: 'Marmiteiro(a) independente',
      cnae: '5620-1/04',
      note: 'Confirme o enquadramento e as regras da Vigilância Sanitária, prefeitura e Corpo de Bombeiros antes de produzir regularmente.'
    },
    content: `
      <p>Marmita por encomenda pode começar com poucos pratos e uma rota curta. O teste não é comprar equipamentos nem montar um cardápio enorme: é descobrir se pessoas reais pagam por uma refeição específica, em dias e horários que você consegue cumprir.</p>

      <h2 id="oferta-minima">Comece com uma oferta mínima</h2>
      <p>Escolha um público e um problema: almoço caseiro para trabalhadores próximos, refeições congeladas para a semana ou cardápio com restrição que você domina. Monte no máximo duas opções por dia, informe peso aproximado, ingredientes importantes, prazo para pedir e área de entrega. Quanto menor a variação inicial, mais fácil medir custo e qualidade.</p>
      <p>Antes de anunciar, converse com dez pessoas do público escolhido. Pergunte o que compram hoje, quanto tempo perdem, quais dias têm maior dificuldade e por que deixariam de comprar. Não apresente a solução antes de entender a rotina.</p>

      <h2 id="cenario-investimento">Cenário de teste, não promessa de custo</h2>
      <p>O intervalo de R$ 250 a R$ 700 é apenas um cenário editorial para uma rodada pequena, supondo que você já tenha cozinha e utensílios adequados. Ele pode incluir ingredientes, embalagens, etiquetas e deslocamento. Preços locais, quantidade e exigências sanitárias mudam completamente a conta. Não compre freezer, fogão ou estoque grande antes dos primeiros pedidos pagos.</p>

      <h2 id="calcular-porcao">Calcule cada porção antes de definir o preço</h2>
      <p>Some ingredientes realmente usados, embalagem, gás ou energia estimados, taxa de pagamento, entrega, perdas e seu tempo. Divida custos compartilhados pela quantidade produzida. Se uma rodada de dez unidades custar R$ 180 e exigir cinco horas de trabalho, ainda falta remunerar essas horas e reservar margem para imprevistos.</p>
      <p>Registre previsão e valor real de cada rodada. O preço que gera pedidos, mas não paga reposição e trabalho, não validou um negócio sustentável. Use a calculadora de preço do MEI Fácil como referência e ajuste com os dados da cozinha.</p>

      <h2 id="primeiros-clientes">Como buscar os primeiros clientes</h2>
      <ul>
        <li>Faça uma foto fiel do prato e publique o cardápio com data, preço e limite de pedidos.</li>
        <li>Ofereça retirada em um ponto ou uma rota curta antes de prometer entregas distantes.</li>
        <li>Peça pagamento ou sinal para separar curiosidade de demanda real.</li>
        <li>Após a entrega, pergunte sobre sabor, quantidade, embalagem, pontualidade e recompra.</li>
      </ul>

      <h2 id="ocupacao-e-licencas">Ocupação, CNAE e segurança dos alimentos</h2>
      <p>A lista oficial relaciona <strong>Marmiteiro(a) independente</strong> ao CNAE <strong>5620-1/04</strong>. Isso não autoriza automaticamente qualquer cozinha ou endereço. Estabelecimentos de alimentos estão sujeitos ao controle sanitário, e o licenciamento é conduzido por autoridades locais. Consulte a prefeitura e a Vigilância Sanitária antes de vender regularmente; verifique também regras para água, armazenamento, temperatura, manipulação, resíduos e transporte.</p>

      <h2 id="plano-sete-dias">Plano de validação em sete dias</h2>
      <ol>
        <li>Dia 1: escolha público, região e uma refeição.</li>
        <li>Dias 2 e 3: entreviste dez potenciais clientes e ajuste a oferta.</li>
        <li>Dia 4: faça ficha de custo e consulte exigências locais.</li>
        <li>Dia 5: abra uma pré-venda com quantidade limitada.</li>
        <li>Dia 6: produza somente o vendido e registre tempo e perdas.</li>
        <li>Dia 7: analise margem, avaliações e intenção de recompra.</li>
      </ol>

      <h2 id="decisao">Quando avançar, ajustar ou parar</h2>
      <p>Avance se clientes pagaram, a entrega coube na rotina e o preço cobriu custos e trabalho. Ajuste quando há interesse, mas o cardápio, região ou quantidade criam desperdício. Pare a rodada se segurança, licenciamento ou estrutura não estiverem adequados. O objetivo do teste é comprar informação barata antes de assumir despesas fixas.</p>
    `,
    sources: [
      { name: 'Portal do Empreendedor — ocupações permitidas com a letra M', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/atividades-permitidas/m' },
      { name: 'Anvisa — controle sanitário de alimentos', url: 'https://www.gov.br/anvisa/pt-br/assuntos/alimentos/controle-sanitario/' },
      { name: 'Redesim — licenciamento', url: 'https://www.gov.br/empresas-e-negocios/pt-br/redesim/ajuda/licenciamento' },
      { name: 'Sebrae — como validar uma ideia de negócio', url: 'https://blog.rn.sebrae.com.br/como-validar-ideia/' }
    ],
    relatedTool: { name: 'Calculadora de Precificação', path: '/calculadora-preco-hora-autonomo' },
    seo: {
      metaTitle: 'Marmitas por encomenda: custo, CNAE e teste da ideia',
      metaDescription: 'Veja como testar marmitas por encomenda, calcular custo por porção, buscar clientes e conferir CNAE e exigências sanitárias.'
    }
  },
  {
    slug: 'costura-e-ajustes-sob-medida',
    title: 'Costura e ajustes sob medida: plano para conquistar os primeiros clientes',
    summary: 'Como escolher serviços simples, cobrar por tempo e material, montar um portfólio real e validar demanda no seu bairro.',
    category: 'Serviços locais',
    tags: ['costura', 'ajustes', 'serviços locais', 'precificação'],
    date: '2026-08-02',
    updatedAt: '2026-08-02',
    readTime: 8,
    featured: true,
    audience: 'Quem já sabe operar máquina de costura e executar ajustes com acabamento consistente.',
    investmentRange: 'Teste editorial: R$ 150 a R$ 600',
    validationGoal: 'Concluir 12 serviços pagos para pelo menos 6 clientes em 30 dias.',
    occupation: {
      name: 'Costureiro(a) sob medida independente',
      cnae: '1412-6/02',
      note: 'A lista também diferencia costureiro(a) de roupas, exceto sob medida, no CNAE 1412-6/01. Escolha pelo trabalho real.'
    },
    content: `
      <p>Ajustes de roupas resolvem um problema concreto e podem ser testados com estrutura pequena por quem já domina a técnica. O desafio é transformar habilidade em um serviço previsível: prazo realista, acabamento, prova quando necessária e preço que remunere o tempo.</p>

      <h2 id="recorte-inicial">Escolha um recorte inicial</h2>
      <p>Comece com três a cinco serviços que você executa bem: barra simples, troca de zíper, ajuste de cintura, pequenos reparos ou customização básica. Para cada um, defina o que precisa avaliar presencialmente, materiais incluídos, prazo e situações que exigem novo orçamento. Evite aceitar peças caras ou técnicas que ainda não domina apenas para fechar a venda.</p>

      <h2 id="cenario-investimento">Cenário para uma primeira rodada</h2>
      <p>O intervalo de R$ 150 a R$ 600 pressupõe que máquina e ferramentas principais já estejam disponíveis. Pode cobrir linhas, agulhas, aviamentos básicos, embalagens e divulgação local. É um exercício editorial, não uma cotação. Se você ainda precisa comprar máquina ou fazer treinamento, trate isso como decisão separada e valide interesse antes de financiar equipamento.</p>

      <h2 id="formar-preco">Preço precisa considerar trabalho invisível</h2>
      <p>Cronometre recebimento, marcação, execução, prova, acabamento e entrega. Some aviamentos, manutenção proporcional da máquina, energia, deslocamento e risco de retrabalho. Uma barra que leva 25 minutos na máquina pode consumir quase uma hora quando todo o atendimento é incluído.</p>
      <p>Crie uma tabela interna, mas confirme o estado da peça antes de prometer valor final. Registre horas estimadas e realizadas durante um mês; a diferença mostra quais serviços precisam de novo preço ou devem sair do cardápio.</p>

      <h2 id="portfolio-clientes">Portfólio e primeiros clientes</h2>
      <ul>
        <li>Fotografe antes e depois apenas com autorização e boa luz.</li>
        <li>Crie uma ficha de entrada com peça, serviço, defeitos existentes, prazo e valor.</li>
        <li>Divulgue em grupos do bairro e estabeleça um raio claro de atendimento.</li>
        <li>Converse com brechós, lojas e lavanderias sem prometer volume que não consegue entregar.</li>
        <li>Peça indicação depois de uma entrega aprovada, não antes.</li>
      </ul>

      <h2 id="ocupacao">Escolha a ocupação pelo serviço real</h2>
      <p>O Portal do Empreendedor lista <strong>Costureiro(a) sob medida independente</strong> no CNAE <strong>1412-6/02</strong> e distingue a confecção de roupas, exceto sob medida, no CNAE 1412-6/01. Descrever corretamente o trabalho importa para cadastro, emissão de nota e licenciamento. Consulte as regras de uso do imóvel, atendimento no endereço e descarte de materiais no município.</p>

      <h2 id="plano-sete-dias">Plano de validação em sete dias</h2>
      <ol>
        <li>Liste os serviços que você domina e o tempo de cada um.</li>
        <li>Entreviste cinco pessoas e dois comércios próximos sobre demandas recorrentes.</li>
        <li>Monte ficha de custo e regras de recebimento.</li>
        <li>Publique cinco vagas de teste com prazo definido.</li>
        <li>Execute, fotografe com permissão e registre horas.</li>
        <li>Entregue e colete avaliação.</li>
        <li>Revise preços e limite semanal.</li>
      </ol>

      <h2 id="criterios-decisao">Critérios de decisão</h2>
      <p>Há sinal positivo quando clientes aceitam o prazo e o preço, o retrabalho é baixo e surgem pedidos repetidos ou indicações. Se apenas serviços demorados vendem abaixo do custo, mude o recorte. A validação mede uma oferta específica; ela não exige abrir o CNPJ antes de confirmar demanda, mas a atividade regular deve ser formalizada e licenciada corretamente.</p>
    `,
    sources: [
      { name: 'Portal do Empreendedor — ocupações permitidas com a letra C', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/atividades-permitidas/c' },
      { name: 'Portal do Empreendedor — como escolher ocupações', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/quais-as-ocupacoes-que-podem-ser-mei' },
      { name: 'Sebrae — como validar uma ideia de negócio', url: 'https://blog.rn.sebrae.com.br/como-validar-ideia/' }
    ],
    relatedTool: { name: 'Calculadora de Precificação', path: '/calculadora-preco-hora-autonomo' },
    seo: {
      metaTitle: 'Costura e ajustes: como começar, cobrar e validar',
      metaDescription: 'Aprenda a testar serviços de costura e ajustes, montar preços, conseguir clientes e escolher a ocupação MEI compatível.'
    }
  },
  {
    slug: 'pet-sitter-cuidador-de-animais',
    title: 'Pet sitter: como validar um serviço de cuidados para animais',
    summary: 'Um roteiro para definir visitas, criar protocolo de segurança, cobrar corretamente e conquistar confiança sem começar em grande escala.',
    category: 'Cuidados',
    tags: ['pet sitter', 'animais', 'serviço domiciliar', 'segurança'],
    date: '2026-08-02',
    updatedAt: '2026-08-02',
    readTime: 8,
    featured: true,
    audience: 'Quem tem experiência responsável com animais e consegue atender uma área geográfica limitada.',
    investmentRange: 'Teste editorial: R$ 100 a R$ 450',
    validationGoal: 'Realizar 10 visitas pagas para 3 famílias, sem falhas de protocolo.',
    occupation: {
      name: 'Cuidador(a) de animais (pet sitter) independente',
      cnae: '9609-2/08',
      note: 'O serviço de cuidado não substitui atendimento veterinário. Verifique regras locais e encaminhe emergências a profissional habilitado.'
    },
    content: `
      <p>Pet sitter cuida do animal na ausência temporária do tutor, geralmente por visitas no domicílio. A confiança é central: antes de pensar em muitos clientes, você precisa demonstrar rotina, comunicação, limites e resposta a imprevistos.</p>

      <h2 id="servico-minimo">Defina o serviço mínimo com clareza</h2>
      <p>Escolha espécie e porte com os quais você tem experiência. Descreva duração da visita, alimentação, troca de água, higiene combinada, brincadeira, atualização por mensagem e área atendida. Diga explicitamente o que não faz: procedimentos veterinários, aplicação de medicamentos sem orientação adequada, animais agressivos sem avaliação ou hospedagem quando não houver estrutura.</p>

      <h2 id="protocolo-seguranca">Crie um protocolo antes do primeiro atendimento</h2>
      <p>Faça uma visita inicial com o tutor. Registre contatos, veterinário de referência, alimentação, comportamento, acesso ao imóvel, autorização de emergência e sinais que exigem contato imediato. Combine quem decide e paga em caso de atendimento veterinário. Proteja chaves, endereços e imagens do cliente; não publique localização em tempo real.</p>

      <h2 id="cenario-investimento">O que o cenário de investimento representa</h2>
      <p>R$ 100 a R$ 450 pode cobrir transporte de uma rodada curta, materiais de apoio, identificação e divulgação simples. É uma hipótese editorial, não um valor garantido. Distância entre clientes costuma ser o custo oculto mais importante. Teste em uma única região antes de aceitar agendas espalhadas.</p>

      <h2 id="preco-visita">Como calcular o preço da visita</h2>
      <p>Inclua tempo de deslocamento, visita inicial, atendimento, atualizações, administração e reserva para cancelamentos. Some transporte e eventuais materiais. Crie adicionais transparentes para feriados, segundo animal, distância ou visita prolongada, sem alterar regras depois da contratação.</p>
      <p>Um cliente que parece ocupar 30 minutos pode consumir 90 minutos entre ida, acesso, cuidado, mensagem e retorno. Registre a duração completa para não validar um preço insustentável.</p>

      <h2 id="confianca-clientes">Conquiste os primeiros clientes com prova de processo</h2>
      <ul>
        <li>Apresente seu protocolo e faça perguntas específicas sobre o animal.</li>
        <li>Use um termo simples com datas, tarefas, contatos e preço.</li>
        <li>Comece com clientes indicados e poucos horários.</li>
        <li>Envie atualização objetiva em cada visita, respeitando privacidade.</li>
        <li>Peça depoimento somente depois do serviço concluído.</li>
      </ul>

      <h2 id="ocupacao-limites">Ocupação permitida e limites profissionais</h2>
      <p>A lista oficial relaciona <strong>Cuidador(a) de animais (pet sitter) independente</strong> ao CNAE <strong>9609-2/08</strong>. O cadastro não transforma o cuidador em médico-veterinário. Diagnóstico, prescrição e procedimentos privativos devem ser encaminhados a profissional habilitado. Consulte o município sobre atendimento, publicidade e outras exigências aplicáveis.</p>

      <h2 id="plano-validacao">Teste de sete dias</h2>
      <ol>
        <li>Defina região, animais atendidos e limites.</li>
        <li>Monte formulário, protocolo e termo simples.</li>
        <li>Converse com dez tutores sobre ausências e dificuldades.</li>
        <li>Ofereça três agendas-piloto pagas.</li>
        <li>Faça visita inicial e simule uma emergência de comunicação.</li>
        <li>Execute as visitas e registre tempo total.</li>
        <li>Revise preço, raio e protocolo com o feedback.</li>
      </ol>

      <h2 id="sinal-validacao">Sinais para continuar</h2>
      <p>Continue quando tutores entendem a proposta, pagam pelo processo e voltariam a contratar. Ajuste se deslocamento elimina a margem ou se pedidos exigem tarefas fora da sua competência. Interrompa quando não for possível garantir acesso, segurança ou resposta a emergências.</p>
    `,
    sources: [
      { name: 'Portal do Empreendedor — ocupações permitidas com a letra C', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/atividades-permitidas/c' },
      { name: 'Portal do Empreendedor — como escolher ocupações', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/quais-as-ocupacoes-que-podem-ser-mei' },
      { name: 'Sebrae — como validar uma ideia de negócio', url: 'https://blog.rn.sebrae.com.br/como-validar-ideia/' }
    ],
    relatedTool: { name: 'Calculadora de Precificação', path: '/calculadora-preco-hora-autonomo' },
    seo: {
      metaTitle: 'Pet sitter: como começar, cobrar e validar o serviço',
      metaDescription: 'Veja como estruturar visitas de pet sitter, criar protocolo de segurança, calcular preço e validar clientes antes de crescer.'
    }
  },
  {
    slug: 'manutencao-de-computadores',
    title: 'Manutenção de computadores: como começar com serviços bem definidos',
    summary: 'Escolha problemas que você sabe resolver, proteja os dados do cliente, forme preço e teste a demanda sem comprar estoque desnecessário.',
    category: 'Tecnologia',
    tags: ['computadores', 'manutenção', 'suporte', 'dados'],
    date: '2026-08-02',
    updatedAt: '2026-08-02',
    readTime: 9,
    featured: false,
    audience: 'Quem possui conhecimento técnico prático e consegue diagnosticar sem prometer recuperação ou conserto antes da avaliação.',
    investmentRange: 'Teste editorial: R$ 200 a R$ 900',
    validationGoal: 'Concluir 8 diagnósticos ou serviços pagos com termo de atendimento e margem positiva.',
    occupation: {
      name: 'Técnico(a) de manutenção de computador independente',
      cnae: '9511-8/00',
      note: 'Defina responsabilidade por dados, peças e garantia do serviço. Não prometa recuperação de arquivos sem diagnóstico e autorização.'
    },
    content: `
      <p>Manutenção de computadores pode atender residências e pequenos negócios, mas confiança e escopo importam tanto quanto técnica. Um começo seguro oferece poucos serviços, documenta o estado do equipamento e evita assumir responsabilidade ilimitada por dados ou defeitos anteriores.</p>

      <h2 id="servicos-iniciais">Escolha serviços que você consegue provar</h2>
      <p>Comece com diagnóstico, limpeza física adequada, troca de componentes compatíveis, instalação autorizada de sistema e configuração básica. Separe suporte remoto, visita e bancada. Não ofereça reparo eletrônico, recuperação avançada ou rede empresarial se não tiver ferramentas, prática e segurança para isso.</p>

      <h2 id="entrada-e-dados">Crie uma ordem de serviço</h2>
      <p>Registre identificação do equipamento, acessórios entregues, marcas de uso, sintoma relatado, senha quando indispensável, autorização de backup, risco conhecido e prazo de diagnóstico. Oriente o cliente a fazer cópia dos dados sempre que possível. Informe antes de abrir o equipamento e peça aprovação escrita para comprar peças ou ampliar o serviço.</p>

      <h2 id="cenario-investimento">Cenário de teste enxuto</h2>
      <p>O intervalo de R$ 200 a R$ 900 supõe que você já tenha computador de apoio e ferramentas básicas. Pode incluir itens de limpeza apropriados, adaptadores, armazenamento temporário e deslocamento. Não é cotação nem recomendação de compra. Peças devem, de preferência, ser adquiridas após orçamento aprovado para não criar estoque parado.</p>

      <h2 id="formar-preco">Diagnóstico também consome trabalho</h2>
      <p>Some atendimento, triagem, testes, pesquisa de compatibilidade, execução, atualização ao cliente e validação final. Defina se o diagnóstico é cobrado e quando seu valor é abatido do serviço. Peça não é lucro: separe custo do componente, frete e mão de obra, com garantia descrita para cada parte.</p>
      <p>Registre taxa de retorno por problema não resolvido. Muitos retornos indicam falha no diagnóstico, no teste final ou no limite comunicado.</p>

      <h2 id="primeiros-clientes">Primeiros clientes sem promessas exageradas</h2>
      <ul>
        <li>Publique uma lista curta de sintomas atendidos e o que depende de diagnóstico.</li>
        <li>Ofereça atendimento piloto para indicações próximas e documente cada etapa.</li>
        <li>Entregue relatório simples com o que foi feito e recomendações.</li>
        <li>Apague cópias temporárias e credenciais conforme combinado.</li>
        <li>Peça avaliação sobre clareza, prazo e solução, não apenas sobre simpatia.</li>
      </ul>

      <h2 id="ocupacao">Ocupação e responsabilidade</h2>
      <p>A atividade aparece como <strong>Técnico(a) de manutenção de computador independente</strong>, CNAE <strong>9511-8/00</strong>. Confirme a descrição oficial no momento da formalização e as regras municipais para funcionamento e atendimento. Use software licenciado, proteja dados pessoais e não acesse conteúdo do cliente além do necessário e autorizado.</p>

      <h2 id="plano-sete-dias">Plano de validação em sete dias</h2>
      <ol>
        <li>Escolha cinco problemas que sabe diagnosticar.</li>
        <li>Prepare ordem de serviço, checklist e política de dados.</li>
        <li>Entreviste dez pessoas ou pequenos negócios.</li>
        <li>Ofereça quatro diagnósticos com preço e prazo claros.</li>
        <li>Execute testes, registre horas e peça aprovação para mudanças.</li>
        <li>Entregue relatório e colete avaliação.</li>
        <li>Revise escopo, preço e taxa de solução.</li>
      </ol>

      <h2 id="decisao">O que precisa acontecer para avançar</h2>
      <p>O teste funciona quando clientes pagam pelo diagnóstico, o tempo cabe no preço e os retornos são baixos. Ajuste se toda demanda exige habilidades fora do escopo. Pare de aceitar um tipo de reparo quando faltar ferramenta, segurança ou controle sobre os dados envolvidos.</p>
    `,
    sources: [
      { name: 'Contrata+Brasil — referência oficial para manutenção de computador', url: 'https://contratamaisbrasil.sistema.gov.br/oportunidades/10253' },
      { name: 'Portal do Empreendedor — como escolher ocupações', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/quais-as-ocupacoes-que-podem-ser-mei' },
      { name: 'Sebrae — como validar uma ideia de negócio', url: 'https://blog.rn.sebrae.com.br/como-validar-ideia/' }
    ],
    relatedTool: { name: 'Calculadora de Precificação', path: '/calculadora-preco-hora-autonomo' },
    seo: {
      metaTitle: 'Manutenção de computadores: como começar e cobrar',
      metaDescription: 'Aprenda a definir serviços de manutenção de computadores, proteger dados, calcular preço e testar a demanda com baixo risco.'
    }
  },
  {
    slug: 'fotografia-de-produtos',
    title: 'Fotografia de produtos: uma oferta enxuta para pequenos negócios',
    summary: 'Como montar um pacote simples, produzir um portfólio honesto, precificar uso e edição e validar clientes comerciais.',
    category: 'Conteúdo e imagem',
    tags: ['fotografia', 'produtos', 'conteúdo', 'pequenos negócios'],
    date: '2026-08-02',
    updatedAt: '2026-08-02',
    readTime: 8,
    featured: false,
    audience: 'Quem já domina iluminação, composição e edição básica, mesmo começando com equipamento simples.',
    investmentRange: 'Teste editorial: R$ 100 a R$ 800',
    validationGoal: 'Vender 3 ensaios-piloto e entregar no prazo com aprovação do escopo.',
    occupation: {
      name: 'Fotógrafo(a) independente',
      cnae: '7420-0/01',
      note: 'Combine quantidade de fotos, edição, formatos, prazo, uso das imagens e autorização de portfólio por escrito.'
    },
    content: `
      <p>Pequenos comércios precisam mostrar produtos em cardápios, catálogos, redes sociais e lojas virtuais. A oportunidade não é prometer “fotos profissionais” de forma genérica, mas entregar um pacote claro para um tipo de produto, com padrão visual e uso combinado.</p>

      <h2 id="nicho-pacote">Escolha um nicho e um pacote</h2>
      <p>Selecione produtos que você consegue fotografar com segurança: alimentos embalados, artesanato, roupas, acessórios ou itens pequenos. Defina quantidade de produtos e fotos finais, fundo, proporção, nível de tratamento, prazo e como os itens serão recebidos. Comece com um pacote; variações ilimitadas tornam a comparação impossível.</p>

      <h2 id="portfolio-honesto">Monte um portfólio que represente a entrega</h2>
      <p>Produza uma série com seus próprios objetos ou com autorização do dono. Mostre imagens do mesmo padrão que pretende vender, sem usar trabalhos de terceiros. Explique quando o cenário, modelo, deslocamento ou retoque avançado não está incluído. O cliente precisa comparar proposta e resultado.</p>

      <h2 id="cenario-investimento">Cenário de teste e equipamento</h2>
      <p>R$ 100 a R$ 800 pode cobrir fundos simples, rebatedores, iluminação de apoio, transporte e armazenamento, supondo que você já tenha câmera ou celular adequado e computador. É um cenário editorial. Não compre lente ou iluminação cara antes de descobrir qual problema seus clientes pagam para resolver.</p>

      <h2 id="preco-e-uso">Preço envolve produção, edição e uso</h2>
      <p>Calcule briefing, preparação, montagem, fotografia, seleção, edição, exportação, envio, revisões e administração. Some deslocamento, assistente, aluguel e materiais exclusivos. Descreva onde e por quanto tempo as imagens poderão ser usadas quando houver licenciamento específico. Para pacotes simples, ao menos registre a finalidade comercial acordada.</p>
      <p>Defina número de revisões e diferença entre corrigir uma edição e refazer uma foto por mudança de briefing. Sem essa fronteira, um ensaio pequeno pode consumir dias.</p>

      <h2 id="primeiros-clientes">Prospecção baseada em um problema visível</h2>
      <ul>
        <li>Escolha dez negócios locais com produtos compatíveis com seu portfólio.</li>
        <li>Mostre um exemplo e proponha um pacote piloto, sem depreciar o trabalho atual do cliente.</li>
        <li>Use briefing e sinal para reservar a data.</li>
        <li>Entregue arquivos organizados nos formatos prometidos.</li>
        <li>Peça autorização separada antes de publicar o trabalho no portfólio.</li>
      </ul>

      <h2 id="ocupacao">Ocupação e combinados comerciais</h2>
      <p>O Portal do Empreendedor lista <strong>Fotógrafo(a) independente</strong> no CNAE <strong>7420-0/01</strong>. Confirme se essa ocupação descreve seu serviço real. Além de regras locais, cuide de autorização de imagem, marcas visíveis, propriedade das fotos e dados de clientes. Um contrato simples reduz conflitos sobre entrega e utilização.</p>

      <h2 id="plano-sete-dias">Plano de validação em sete dias</h2>
      <ol>
        <li>Escolha um nicho e escreva um pacote.</li>
        <li>Produza cinco imagens de exemplo.</li>
        <li>Converse com cinco comerciantes sobre uso e dificuldade atual.</li>
        <li>Envie propostas individuais para dez negócios.</li>
        <li>Feche até três pilotos com sinal e briefing.</li>
        <li>Entregue no prazo e registre todas as horas.</li>
        <li>Compare preço, esforço, aprovação e chance de recompra.</li>
      </ol>

      <h2 id="criterio-decisao">Quando o modelo mostra potencial</h2>
      <p>Avance se o mesmo pacote resolve problemas de mais de um cliente e a edição cabe no preço. Ajuste quando cada trabalho exige produção totalmente diferente. A meta não é ganhar seguidores; é obter propostas aceitas, entregas aprovadas e indicação ou recompra.</p>
    `,
    sources: [
      { name: 'Portal do Empreendedor — ocupações permitidas com a letra F', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/atividades-permitidas/f' },
      { name: 'Portal do Empreendedor — como escolher ocupações', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/quais-as-ocupacoes-que-podem-ser-mei' },
      { name: 'Sebrae — como validar uma ideia de negócio', url: 'https://blog.rn.sebrae.com.br/como-validar-ideia/' }
    ],
    relatedTool: { name: 'Calculadora de Precificação', path: '/calculadora-preco-hora-autonomo' },
    seo: {
      metaTitle: 'Fotografia de produtos: como começar e validar clientes',
      metaDescription: 'Monte um pacote de fotografia de produtos, calcule produção e edição, crie portfólio e valide pequenos negócios como clientes.'
    }
  },
  {
    slug: 'eletricista-residencial-comercial',
    title: 'Eletricista residencial e comercial: como estruturar um serviço seguro',
    summary: 'Um plano para quem já tem capacitação técnica definir escopo, vistoria, orçamento, segurança e primeiros atendimentos.',
    category: 'Manutenção',
    tags: ['eletricista', 'instalações', 'segurança', 'serviços locais'],
    date: '2026-08-02',
    updatedAt: '2026-08-02',
    readTime: 9,
    featured: false,
    audience: 'Somente quem possui capacitação prática para trabalho elétrico e conhece os procedimentos de segurança aplicáveis.',
    investmentRange: 'Teste editorial: R$ 300 a R$ 1.500',
    validationGoal: 'Realizar 5 atendimentos pagos dentro do escopo, com checklist e sem incidente ou retrabalho evitável.',
    occupation: {
      name: 'Eletricista em residências e estabelecimentos comerciais independente',
      cnae: '4321-5/00',
      note: 'Eletricidade envolve risco grave. Capacitação, desenergização, equipamentos adequados e cumprimento das normas não são opcionais.'
    },
    content: `
      <p>Serviço elétrico não é uma ideia para aprender enquanto atende clientes. Este guia parte da existência de capacitação técnica e experiência prática. A validação comercial deve ocorrer dentro do que você já executa com segurança, nunca ampliando o risco para fechar uma venda.</p>

      <h2 id="escopo-inicial">Delimite o escopo inicial</h2>
      <p>Liste serviços compatíveis com sua formação, ferramentas e condições de trabalho: avaliação, troca de componentes, instalação de pontos ou pequenos reparos, por exemplo. Defina o que exige projeto, responsabilidade técnica, trabalho em altura, intervenção da concessionária ou outro profissional. Recuse ambientes inseguros e instalações que não possam ser desenergizadas conforme o procedimento.</p>

      <h2 id="vistoria-orcamento">Vistoria vem antes da promessa</h2>
      <p>Peça informações e fotos apenas para triagem; orçamento definitivo pode exigir visita. Registre problema relatado, circuito envolvido, condições aparentes, medições, materiais, exclusões, prazo e garantia do serviço. Não confirme a causa sem diagnóstico. Mudanças encontradas durante a execução precisam de novo aceite.</p>

      <h2 id="cenario-investimento">Cenário editorial de investimento</h2>
      <p>R$ 300 a R$ 1.500 representa apenas uma hipótese para deslocamento, materiais administrativos, reposição de itens básicos e equipamentos que complementem uma estrutura já profissional. Não cobre necessariamente instrumentos, equipamentos de proteção ou capacitação exigidos. Se esses recursos faltam, não use o limite do cenário para improvisar: suspenda a oferta até estar preparado.</p>

      <h2 id="formar-preco">Como formar preço sem esconder risco</h2>
      <p>Considere deslocamento, vistoria, diagnóstico, preparação, execução, testes, documentação e retorno previsto. Materiais devem ser especificados e aprovados. Serviços urgentes, fora da região ou em condições especiais exigem avaliação própria. Um valor por “ponto” só é comparável quando escopo e condições são equivalentes.</p>
      <p>Registre horas e retornos. Retrabalho frequente não deve ser coberto com mais volume; exige revisar diagnóstico, execução, material e teste final.</p>

      <h2 id="conseguir-clientes">Primeiros clientes com confiança</h2>
      <ul>
        <li>Apresente capacitação, escopo e processo de segurança sem exagerar credenciais.</li>
        <li>Use orçamento escrito com materiais, exclusões e validade.</li>
        <li>Comece em uma área pequena e com agenda que permita vistoria adequada.</li>
        <li>Entregue registro do que foi realizado e recomendações restantes.</li>
        <li>Peça indicação após o teste e a entrega aprovados.</li>
      </ul>

      <h2 id="ocupacao-seguranca">Ocupação não substitui qualificação</h2>
      <p>A ocupação <strong>Eletricista em residências e estabelecimentos comerciais independente</strong> está relacionada ao CNAE <strong>4321-5/00</strong>. Ser uma ocupação permitida ao MEI não elimina normas de segurança, regras municipais, requisitos de capacitação ou responsabilidade técnica aplicáveis ao serviço. Consulte os órgãos competentes e mantenha procedimentos e equipamentos adequados.</p>

      <h2 id="plano-sete-dias">Plano comercial de sete dias</h2>
      <ol>
        <li>Defina somente serviços dentro da sua capacitação.</li>
        <li>Prepare checklist de vistoria e modelo de orçamento.</li>
        <li>Mapeie ferramentas, proteção e condições de recusa.</li>
        <li>Converse com cinco clientes potenciais sobre problemas e atendimento atual.</li>
        <li>Ofereça até três vistorias dentro da região.</li>
        <li>Execute apenas o que estiver seguro e aprovado.</li>
        <li>Revise preço, tempo, retorno e incidentes quase ocorridos.</li>
      </ol>

      <h2 id="decisao">A métrica principal é segurança com sustentabilidade</h2>
      <p>Avance quando há demanda paga, o serviço cabe no escopo e o preço remunera vistoria, execução e teste. Ajuste quando deslocamento ou diagnóstico é subestimado. Pare imediatamente diante de risco não controlado, falta de qualificação ou exigência legal não atendida.</p>
    `,
    sources: [
      { name: 'Portal do Empreendedor — ocupações permitidas com a letra E', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/atividades-permitidas/e' },
      { name: 'Ministério do Trabalho e Emprego — Norma Regulamentadora nº 10', url: 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-10-nr-10' },
      { name: 'Portal do Empreendedor — como escolher ocupações', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/quais-as-ocupacoes-que-podem-ser-mei' }
    ],
    relatedTool: { name: 'Calculadora de Precificação', path: '/calculadora-preco-hora-autonomo' },
    seo: {
      metaTitle: 'Eletricista residencial: como estruturar e validar o serviço',
      metaDescription: 'Veja como delimitar serviços elétricos, preparar vistoria e orçamento, calcular preço e validar clientes com segurança.'
    }
  }
];

export function getRelatedBusinessIdeas(idea: BusinessIdea, limit = 3) {
  return businessIdeas
    .filter((candidate) => candidate.slug !== idea.slug)
    .sort((a, b) => {
      const aScore = a.category === idea.category ? 2 : a.tags.filter((tag) => idea.tags.includes(tag)).length;
      const bScore = b.category === idea.category ? 2 : b.tags.filter((tag) => idea.tags.includes(tag)).length;
      return bScore - aScore;
    })
    .slice(0, limit);
}
