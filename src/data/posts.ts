export interface Source {
  name: string;
  url: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  updatedAt: string;
  readTime: number;
  featured: boolean;
  sources: Source[];
  relatedTool: {
    name: string;
    path: string;
  } | null;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export const posts: Post[] = [
  {
    id: 1,
    slug: "dasn-simei-2026",
    title: "DASN-SIMEI 2026: prazo, passo a passo e como corrigir erros",
    summary: "Guia para declarar o faturamento de 2025, inclusive sem receita, entender a multa por atraso e guardar o recibo corretamente.",
    content: `
      <p>A DASN-SIMEI é a declaração anual em que o Microempreendedor Individual informa a receita bruta total do ano anterior e se teve empregado. Em 2026, a declaração se refere ao movimento de 2025. Ela não substitui o pagamento mensal do DAS nem a declaração de Imposto de Renda da pessoa física.</p>

      <h2 id="quem-precisa-entregar">Quem precisa entregar a DASN-SIMEI em 2026?</h2>
      <p>Deve declarar quem foi optante pelo Simei em qualquer período de 2025. A obrigação continua existindo quando o CNPJ não teve faturamento, ficou ativo por poucos meses ou foi baixado durante o ano. Sem receita, os campos de faturamento são informados com valor zero.</p>
      <p>Antes de começar, reúna o relatório mensal de receitas, notas fiscais emitidas e comprovantes das vendas feitas sem nota. Some a receita bruta: use o valor total das vendas e dos serviços, sem descontar DAS, taxas de cartão, combustível, aluguel ou outras despesas.</p>

      <h2 id="prazo-e-multa">Qual foi o prazo e o que acontece com o atraso?</h2>
      <p>O prazo regular de 2026 terminou em <strong>31 de maio</strong>. Quem ainda não entregou deve transmitir a declaração assim que possível. O sistema gera a Multa por Atraso na Entrega da Declaração (MAED): 2% ao mês-calendário ou fração, limitada a 20% dos tributos declarados, com valor mínimo de R$ 50.</p>
      <p>Na entrega espontânea há redução de 50% da multa. A notificação e o documento para pagamento são emitidos junto com o recibo. Atrasar a DASN não cancela automaticamente o CNPJ, mas mantém uma obrigação pendente e pode impedir a emissão de DAS de períodos seguintes até a regularização.</p>

      <h2 id="passo-a-passo">Como preencher sem misturar receita e lucro</h2>
      <ol>
        <li>Acesse o serviço oficial da DASN-SIMEI no Portal do Simples Nacional ou no App MEI.</li>
        <li>Informe o CNPJ e escolha o ano-calendário de 2025.</li>
        <li>Separe a receita de comércio/indústria da receita de prestação de serviços. Quem exerceu as duas atividades preenche os dois campos.</li>
        <li>Informe se houve empregado no período.</li>
        <li>Revise os totais, transmita e salve o recibo e a declaração completa.</li>
      </ol>
      <p><strong>Exemplo:</strong> um MEI recebeu R$ 48.000 de clientes, pagou R$ 3.000 em taxas e teve R$ 12.000 de despesas. Na DASN-SIMEI, informa R$ 48.000. A declaração pede receita bruta, não lucro.</p>

      <h2 id="erros-comuns">Erros que merecem uma segunda conferência</h2>
      <ul>
        <li>Declarar apenas valores cobertos por nota fiscal e esquecer vendas a pessoa física.</li>
        <li>Informar saldo bancário ou transferências entre contas como se fossem faturamento.</li>
        <li>Descontar despesas antes de preencher a receita.</li>
        <li>Somar salário de emprego CLT ou outros rendimentos pessoais à receita do CNPJ.</li>
        <li>Ignorar o limite proporcional quando o CNPJ foi aberto durante 2025.</li>
      </ul>

      <h2 id="retificar">Enviei um valor errado. Posso retificar?</h2>
      <p>Sim. A declaração pode ser retificada no mesmo sistema, selecionando o ano e a opção retificadora. Use o número do recibo anterior quando solicitado e guarde o novo comprovante. Se a correção revelar faturamento acima do limite do MEI, procure orientação contábil antes de concluir os recolhimentos, porque os efeitos variam conforme o tamanho do excesso e o ano de abertura.</p>

      <h2 id="checklist-final">Checklist depois da transmissão</h2>
      <ul>
        <li>Baixe o recibo e mantenha uma cópia fora do celular.</li>
        <li>Confira se todos os DAS de 2025 aparecem como pagos ou parcelados.</li>
        <li>Compare a receita declarada com seus controles mensais.</li>
        <li>Verifique separadamente se você precisa entregar a declaração de Imposto de Renda da pessoa física.</li>
      </ul>
      <p>Este guia é educativo e foi revisado com base nos canais oficiais. Situações com excesso de receita, baixa retroativa ou divergência de dados pedem análise individual.</p>
    `,
    category: "Obrigações MEI",
    tags: ["DASN-SIMEI", "declaração anual", "faturamento", "multa"],
    date: "2026-05-12",
    updatedAt: "2026-08-02",
    readTime: 7,
    featured: true,
    sources: [
      { name: "Portal do Empreendedor — Declaração Anual de Faturamento", url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/declaracao-anual-de-faturamento" },
      { name: "Gov.br — Declarar receita bruta anual para o MEI", url: "https://www.gov.br/pt-br/servicos/declarar-receita-bruta-anual-para-o-mei" }
    ],
    relatedTool: { name: "Checklist Mensal", path: "obrigacoes" },
    seo: {
      metaTitle: "DASN-SIMEI 2026: prazo, multa e passo a passo",
      metaDescription: "Veja quem deve entregar a DASN-SIMEI 2026, como informar o faturamento de 2025, corrigir erros e calcular a multa por atraso."
    }
  },
  {
    id: 2,
    slug: "calcular-preco-hora-autonomo",
    title: "Como calcular o preço por hora como autônomo: fórmula e exemplo",
    summary: "Uma metodologia transparente para transformar renda desejada, custos, horas faturáveis, férias e margem de segurança em um preço sustentável.",
    content: `
      <p>Preço por hora não é o salário desejado dividido por todas as horas do mês. O valor precisa pagar o trabalho entregue ao cliente e também o tempo de orçamento, administração, estudo, cobrança e descanso. A conta abaixo é um ponto de partida; mercado, especialização, urgência e risco do projeto também influenciam a proposta final.</p>

      <h2 id="custos-pessoais-e-negocio">1. Separe retirada pessoal e custos do negócio</h2>
      <p>Comece pela retirada mensal que você precisa receber. Depois liste custos do negócio: DAS, internet, ferramentas, contador, equipamentos, taxas bancárias, marketing e uma reserva para manutenção. Não trate o DAS como um percentual genérico: para o MEI comum ele é um valor mensal fixo, atualizado com o salário mínimo e acrescido de ISS e/ou ICMS conforme a atividade.</p>

      <h2 id="horas-faturaveis">2. Calcule horas realmente faturáveis</h2>
      <p>Se você trabalha 160 horas por mês, nem todas podem ser vendidas. Reuniões comerciais, elaboração de propostas, emissão de notas, aprendizado e intervalos consomem parte da agenda. Registre seu tempo durante quatro semanas para descobrir sua realidade. Enquanto não tiver histórico, use uma estimativa conservadora e ajuste depois.</p>
      <p><strong>Exemplo:</strong> 160 horas disponíveis menos 45 horas administrativas e 15 horas de reserva resultam em 100 horas faturáveis. Dividir por 160 faria você cobrar abaixo do necessário.</p>

      <h2 id="formula">3. Use uma fórmula que possa ser auditada</h2>
      <p><strong>Preço-base por hora = (retirada desejada + custos mensais + reservas) ÷ horas faturáveis.</strong></p>
      <p>Considere uma retirada de R$ 5.000, custos de R$ 900 e reservas de R$ 600, com 100 horas faturáveis. O preço-base é R$ 65 por hora. Se o projeto tiver escopo incerto ou exigir responsabilidade adicional, a margem de risco deve ser calculada sobre esse preço, não escondida em uma estimativa aleatória.</p>

      <h2 id="ferias-decimo-terceiro">4. Inclua férias, períodos sem projeto e benefícios</h2>
      <p>Quem trabalha por conta própria não recebe férias remuneradas nem décimo terceiro automaticamente. Uma forma simples é calcular quanto precisa retirar ao longo do ano, acrescentar a reserva anual desejada e dividir pelos meses efetivamente trabalhados. Se pretende trabalhar 11 meses, os custos dos 12 meses precisam ser cobertos pela receita desses 11.</p>
      <p>Também crie uma reserva para inadimplência e ociosidade. Ela não é lucro: é proteção para meses com menos trabalho. O lucro vem depois de pagar sua retirada, custos e reservas.</p>

      <h2 id="projeto-fechado">5. Converta a hora interna em preço de projeto</h2>
      <p>Você não precisa mostrar preço por hora ao cliente. Estime as horas de produção, revisão, reunião e gestão, multiplique pelo preço-base e detalhe o que está incluído. Defina quantidade de revisões, prazo, forma de pagamento e valor de mudanças fora do escopo.</p>
      <p>Exemplo: 18 horas de produção + 4 horas de reunião e revisão = 22 horas. A R$ 65, o piso técnico é R$ 1.430. Acrescente custos exclusivos do projeto e, quando fizer sentido, margem pelo valor e risco assumidos.</p>

      <h2 id="validar-preco">Como saber se o preço funciona na prática?</h2>
      <ul>
        <li>Compare o preço calculado com propostas aceitas e recusadas, sem copiar concorrentes cegamente.</li>
        <li>Revise as horas estimadas ao final de cada projeto.</li>
        <li>Atualize custos sempre que uma ferramenta, imposto ou rotina mudar.</li>
        <li>Não prometa escopo aberto por preço fixo.</li>
        <li>Se a demanda estiver cheia por meses, reavalie preço, prazo e posicionamento.</li>
      </ul>

      <h2 id="limites-calculadora">O que a calculadora consegue — e o que não consegue</h2>
      <p>A calculadora do MEI Fácil organiza os componentes matemáticos e mostra o impacto de cada premissa. Ela não determina o preço de mercado, não mede sua experiência e não substitui uma proposta comercial. Use o resultado como piso de sustentabilidade e registre suas premissas para poder revisá-las.</p>
    `,
    category: "Gestão financeira",
    tags: ["precificação", "freelancer", "custos", "preço por hora"],
    date: "2026-04-28",
    updatedAt: "2026-08-02",
    readTime: 7,
    featured: false,
    sources: [
      { name: "Sebrae — Como formar preços para MEI", url: "https://sebrae.com.br/Sebrae/Portal%20Sebrae/UFs/BA/Anexos/Infogr%C3%A1fico%20-%20como%20formar%20pre%C3%A7os%20para%20MEI.pdf" },
      { name: "Portal do Empreendedor — Pagamento da contribuição mensal", url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/pagamento-de-contribuicao-mensal/pagamento-da-contribuicao-mensal-das" }
    ],
    relatedTool: { name: "Calculadora de Precificação", path: "preco" },
    seo: {
      metaTitle: "Preço por hora do autônomo: fórmula e exemplo",
      metaDescription: "Calcule seu preço por hora com retirada, custos, horas faturáveis, férias e margem de segurança. Veja fórmula e exemplo prático."
    }
  },
  {
    id: 3,
    slug: "mei-nota-fiscal",
    title: "Nota fiscal para MEI: quando é obrigatória e como emitir em 2026",
    summary: "Entenda as regras para pessoa física e jurídica, a diferença entre produto e serviço e o uso do Emissor Nacional de NFS-e.",
    content: `
      <p>O MEI pode emitir nota fiscal e, em algumas operações, é obrigado a fazê-lo. A regra não depende de a venda passar de R$ 200. O que importa é quem recebe, o tipo de operação e situações como envio de mercadoria.</p>

      <h2 id="quando-obrigatoria">Quando o MEI precisa emitir nota fiscal?</h2>
      <p>Em regra, a nota é obrigatória ao vender ou prestar serviço para outra pessoa jurídica, inclusive governo. Há exceções específicas, como a operação em que o destinatário emite nota fiscal de entrada. Para consumidor pessoa física, o MEI costuma ser dispensado, mas deve emitir quando o cliente solicitar.</p>
      <p>Na venda de produtos com envio ao cliente — por internet, telefone ou catálogo — o documento fiscal acompanha a circulação da mercadoria. Como regras estaduais podem variar, o comerciante deve conferir a orientação da Secretaria da Fazenda do seu estado.</p>

      <h2 id="produto-ou-servico">NF-e, nota avulsa ou NFS-e: qual documento usar?</h2>
      <ul>
        <li><strong>Prestação de serviço:</strong> usa NFS-e. Desde setembro de 2023, o MEI prestador utiliza o padrão nacional, pelo site ou aplicativo NFS-e Mobile.</li>
        <li><strong>Venda de produto:</strong> normalmente usa documento fiscal autorizado pela Secretaria da Fazenda estadual, que pode oferecer NF-e, NFC-e ou nota avulsa conforme o estado e a operação.</li>
        <li><strong>Atividade mista:</strong> pode precisar de documentos diferentes para serviço e mercadoria.</li>
      </ul>
      <p>Recibo comprova pagamento, mas não substitui nota fiscal quando a legislação exige o documento fiscal.</p>

      <h2 id="emitir-nfse">Como emitir NFS-e de serviço pelo padrão nacional</h2>
      <ol>
        <li>Acesse o Emissor Nacional de NFS-e e faça o primeiro acesso com conta Gov.br ou uma das formas aceitas pelo portal.</li>
        <li>Cadastre os dados do serviço e, se quiser usar a emissão simplificada, configure os serviços favoritos.</li>
        <li>Informe tomador, data, descrição, valor e local da prestação conforme a operação real.</li>
        <li>Revise antes de emitir. Baixe o DANFSe e envie ao cliente.</li>
      </ol>
      <p>O MEI não precisa de certificado digital para usar o emissor nacional. Não invente uma atividade para fazer a nota caber no cadastro: a descrição precisa ser compatível com a ocupação registrada.</p>

      <h2 id="imposto-adicional">Emitir nota aumenta o DAS?</h2>
      <p>Para o MEI dentro das regras do Simei, a emissão da nota não cria um imposto percentual separado sobre cada operação. O DAS mensal continua fixo conforme a atividade. Porém, toda receita documentada entra no faturamento anual e conta para o limite do regime. O excesso pode gerar complemento e desenquadramento.</p>

      <h2 id="guardar-documentos">Quais documentos guardar?</h2>
      <p>Mantenha notas emitidas e recebidas, comprovantes de cancelamento, relatório mensal de receitas e documentos de compra. Organize por mês e faça cópia de segurança. Esses registros ajudam a preencher a DASN-SIMEI e a explicar diferenças entre movimentação bancária e faturamento.</p>

      <h2 id="erros-comuns">Erros comuns na emissão</h2>
      <ul>
        <li>Usar recibo quando o cliente CNPJ precisa de nota.</li>
        <li>Emitir NFS-e municipal antiga quando o MEI prestador deve usar o padrão nacional.</li>
        <li>Escolher código ou descrição incompatível com a atividade cadastrada.</li>
        <li>Confundir valor recebido com valor líquido após taxa da plataforma.</li>
        <li>Cancelar a nota sem verificar se a operação também foi desfeita.</li>
      </ul>

      <h2 id="casos-especiais">Quando buscar orientação local?</h2>
      <p>Venda interestadual, substituição tributária, devolução, exportação, marketplace e transporte de mercadorias podem ter regras próprias. Para produto, consulte a Sefaz do estado; para serviço, use os canais do Emissor Nacional e, se necessário, o atendimento do Sebrae. Este texto não substitui análise fiscal individual.</p>
    `,
    category: "Obrigações MEI",
    tags: ["nota fiscal", "NFS-e", "NF-e", "recibo"],
    date: "2026-04-25",
    updatedAt: "2026-08-02",
    readTime: 8,
    featured: false,
    sources: [
      { name: "Portal do Empreendedor — Nota Fiscal", url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/nota-fiscal" },
      { name: "Portal NFS-e — Perguntas frequentes para MEI", url: "https://www.gov.br/nfse/pt-br/copy_of_perguntas-frequentes" }
    ],
    relatedTool: { name: "Emissor de Recibos", path: "recibo" },
    seo: {
      metaTitle: "Nota fiscal MEI 2026: quando e como emitir",
      metaDescription: "Saiba quando o MEI deve emitir nota para pessoa física ou jurídica e como usar a NFS-e nacional para serviços em 2026."
    }
  },
  {
    id: 4,
    slug: "ultrapassar-limite-mei",
    title: "Limite do MEI em 2026: o que acontece ao ultrapassar R$ 81 mil",
    summary: "Veja como funciona o limite proporcional, a faixa de até 20%, o desenquadramento retroativo e quais providências tomar.",
    content: `
      <p>Em agosto de 2026, o limite anual vigente para o MEI comum é de <strong>R$ 81.000</strong>. Projetos de mudança e cronogramas futuros não alteram a regra aplicável ao faturamento atual até sua entrada em vigor. Para o MEI Caminhoneiro, existem valores e contribuição próprios, não tratados neste guia.</p>

      <h2 id="receita-bruta">O que entra na conta do limite?</h2>
      <p>Some a receita bruta de vendas e serviços do CNPJ no ano-calendário. Não desconte taxa de cartão, comissão de marketplace, combustível, materiais ou outras despesas. Em regra, transferências entre contas próprias e empréstimos não são receita de venda, mas devem estar documentados para não se confundirem com faturamento.</p>

      <h2 id="limite-proporcional">Como funciona no ano de abertura?</h2>
      <p>No primeiro ano, o limite é proporcional aos meses entre a abertura e dezembro, contando o mês de abertura. A referência é R$ 6.750 por mês. Um CNPJ aberto em julho, por exemplo, tem seis meses no cálculo e limite proporcional de R$ 40.500 naquele ano.</p>

      <h2 id="ate-vinte">Excesso de até 20%: entre R$ 81 mil e R$ 97.200</h2>
      <p>Para empresa que não está no primeiro ano, o desenquadramento produz efeitos a partir de 1º de janeiro do ano seguinte. Na DASN-SIMEI, o sistema calcula tributos sobre o valor excedente. O empreendedor deve organizar a migração e buscar apoio contábil, porque passará a cumprir as regras aplicáveis à microempresa.</p>
      <p>“Até 20%” não é um novo teto para continuar indefinidamente como MEI. É uma faixa que muda a data dos efeitos e a forma de regularização do excesso.</p>

      <h2 id="mais-vinte">Excesso superior a 20%: acima de R$ 97.200</h2>
      <p>Fora do ano de abertura, os efeitos do desenquadramento voltam a 1º de janeiro do próprio ano em que ocorreu o excesso. Isso exige apurar e recolher tributos pelas regras do Simples Nacional desde o início do ano. No primeiro ano de atividade, o efeito pode retroagir à data de abertura.</p>
      <p>É por isso que esperar dezembro pode sair caro: o problema não começa apenas no mês em que o total passou do limite.</p>

      <h2 id="o-que-fazer">O que fazer ao perceber que vai ultrapassar</h2>
      <ol>
        <li>Feche a receita bruta acumulada com documentos, mês a mês.</li>
        <li>Projete contratos já assinados e vendas prováveis até dezembro.</li>
        <li>Não deixe de faturar nem desvie receita para outro CNPJ apenas para permanecer no regime.</li>
        <li>Converse com profissional de contabilidade antes do excesso, especialmente se a projeção estiver próxima de R$ 97.200.</li>
        <li>Planeje preço, fluxo de caixa e obrigações da futura microempresa.</li>
      </ol>

      <h2 id="exemplo">Exemplo prático</h2>
      <p>Um MEI já existente faturou R$ 90.000 em 2026. O excesso de R$ 9.000 ficou dentro de 20%; ele informa o total na DASN-SIMEI, recolhe o complemento gerado e passa a atuar fora do Simei em 2027. Se tivesse faturado R$ 105.000, o efeito seria retroativo a janeiro de 2026 e a apuração precisaria ser refeita como microempresa.</p>

      <h2 id="monitoramento">Como usar o simulador com segurança</h2>
      <p>O simulador ajuda a visualizar percentual consumido e projeção, mas depende dos números informados. Atualize o faturamento ao menos uma vez por mês e compare com notas, vendas sem nota e extratos. Ele não executa desenquadramento nem calcula todos os tributos retroativos.</p>

      <p>Regras tributárias podem mudar. Antes de tomar decisão de enquadramento, confira a página oficial e peça orientação individual para o seu histórico.</p>
    `,
    category: "Obrigações MEI",
    tags: ["limite do MEI", "faturamento", "desenquadramento", "Simples Nacional"],
    date: "2026-06-30",
    updatedAt: "2026-08-02",
    readTime: 8,
    featured: false,
    sources: [
      { name: "Portal do Empreendedor — Quero crescer (desenquadramento)", url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/quero-crescer-desenquadramento" },
      { name: "Portal do Empreendedor — Data de efeito do desenquadramento", url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/perguntas-frequentes/desenquadramento/a-partir-de-que-data" }
    ],
    relatedTool: { name: "Simulador de Limite", path: "limite" },
    seo: {
      metaTitle: "Limite MEI 2026: excesso e desenquadramento",
      metaDescription: "Entenda o limite de R$ 81 mil, a faixa de 20%, o cálculo proporcional e os efeitos do desenquadramento do MEI em 2026."
    }
  },
  {
    id: 5,
    slug: "aposentadoria-mei",
    title: "Aposentadoria do MEI em 2026: contribuição, idade e complementação",
    summary: "Entenda o que os 5% do DAS cobrem, as carências, a regra por idade e quando a complementação previdenciária pode ser necessária.",
    content: `
      <p>Ao pagar o DAS, o MEI destina 5% do salário mínimo ao INSS e mantém proteção previdenciária, desde que cumpra os requisitos de cada benefício. O pagamento não significa aposentadoria imediata nem garante, sozinho, todas as modalidades.</p>

      <h2 id="o-que-das-cobre">Quais benefícios a contribuição do MEI pode gerar?</h2>
      <p>Com contribuições válidas e carência cumprida, o segurado pode ter acesso a aposentadoria por idade, benefício por incapacidade temporária ou permanente e salário-maternidade. Dependentes podem ter direito a pensão por morte e auxílio-reclusão, conforme as regras do INSS.</p>
      <p>DAS em atraso pode ser regularizado, mas pagamento tardio nem sempre conta automaticamente para carência. Antes de pagar períodos antigos apenas para “completar tempo”, consulte o CNIS e confirme o tratamento aplicável.</p>

      <h2 id="idade-tempo-minimo">Idade e tempo mínimo de contribuição</h2>
      <p>Na regra geral informada pelo INSS para trabalhadores que começaram após a Reforma da Previdência, a idade é de 65 anos para homens e 62 para mulheres. O tempo mínimo é de 20 anos para homens e 15 para mulheres. Quem já contribuía antes de novembro de 2019 pode entrar em regras de transição diferentes.</p>
      <p>Por isso, um simulador baseado apenas em idade e número de DAS pagos oferece estimativa, não decisão do INSS. Vínculos CLT, contribuições como autônomo, períodos rurais e lacunas no CNIS podem alterar o resultado.</p>

      <h2 id="tempo-contribuicao">O DAS de 5% dá aposentadoria por tempo de contribuição?</h2>
      <p>A contribuição reduzida do MEI não vale, por si só, para aposentadoria por tempo de contribuição nem para emissão de Certidão de Tempo de Contribuição. Como essa aposentadoria foi extinta para novos segurados, a complementação interessa principalmente a quem se enquadra em direito adquirido ou regra de transição e precisa usar aqueles meses para essa finalidade.</p>

      <h2 id="complementacao">Como funciona a complementação?</h2>
      <p>Em situações cabíveis, complementa-se a diferença entre os 5% já recolhidos no DAS e a alíquota de 20%, equivalente a mais 15% sobre o salário mínimo da competência, com os encargos aplicáveis se houver atraso. Não faça pagamentos em massa sem confirmar código, competência e necessidade no Meu INSS ou com profissional previdenciário.</p>
      <p>Complementar não aumenta automaticamente a aposentadoria para um valor escolhido. O cálculo considera o histórico contributivo e as regras válidas para o segurado.</p>

      <h2 id="valor-beneficio">O MEI sempre se aposenta com um salário mínimo?</h2>
      <p>Quando todo o histórico está no piso, o benefício tende ao valor mínimo. Mas uma pessoa pode ter salários de contribuição anteriores como empregada ou contribuinte individual. O valor final depende da média e da regra aplicada, respeitado o piso previdenciário. Dizer que todo MEI receberá exatamente um salário mínimo ignora esses históricos mistos.</p>

      <h2 id="conferir-cnis">Checklist para conferir sua situação</h2>
      <ol>
        <li>Acesse o Meu INSS e baixe o Extrato de Contribuição (CNIS).</li>
        <li>Compare as competências com seus comprovantes de DAS.</li>
        <li>Identifique vínculos sem data de saída, remunerações ausentes e pagamentos abaixo do mínimo.</li>
        <li>Use o serviço oficial “Simular Aposentadoria” como referência inicial.</li>
        <li>Peça correção de dados antes de protocolar o benefício quando houver divergência.</li>
      </ol>

      <h2 id="limites-simulador">Como interpretar nossa simulação</h2>
      <p>O simulador do MEI Fácil faz uma projeção educativa a partir dos dados digitados e não consulta o CNIS. Ele não verifica direito adquirido, atividade especial, deficiência, contribuição rural ou regras específicas. Para decisão financeira ou pedido de benefício, confirme no Meu INSS.</p>
    `,
    category: "Previdência",
    tags: ["aposentadoria", "INSS", "CNIS", "contribuição"],
    date: "2026-01-22",
    updatedAt: "2026-08-02",
    readTime: 8,
    featured: false,
    sources: [
      { name: "INSS — MEIs e autônomos: contribuição e benefícios", url: "https://www.gov.br/inss/pt-br/assuntos/saiba-como-meis-e-autonomos-podem-contribuir-e-regularizar-pendencias-com-o-inss" },
      { name: "INSS — Microempreendedor Individual", url: "https://www.gov.br/inss/pt-br/saiba-mais/seus-direitos-e-deveres/categorias-de-segurados/microempreendedor-individual" }
    ],
    relatedTool: { name: "Simulador de Aposentadoria", path: "aposentadoria" },
    seo: {
      metaTitle: "Aposentadoria MEI 2026: idade e contribuição",
      metaDescription: "Veja como os 5% do DAS contam no INSS, idade e tempo mínimo, valor do benefício e quando avaliar a complementação do MEI."
    }
  },
  {
    id: 6,
    slug: "das-mei-salario-minimo-2026",
    title: "DAS MEI 2026: valores, vencimento e como pagar com segurança",
    summary: "Confira a composição do DAS com salário mínimo de R$ 1.621, as diferenças por atividade e os cuidados com boletos falsos.",
    content: `
      <p>O DAS reúne a contribuição previdenciária e, conforme a atividade, ISS e/ou ICMS. Em 2026, o salário mínimo é R$ 1.621 e a parcela previdenciária do MEI comum corresponde a 5%, ou R$ 81,05 por mês.</p>

      <h2 id="valores-2026">Quanto o MEI comum paga em 2026?</h2>
      <ul>
        <li><strong>Comércio ou indústria:</strong> R$ 81,05 de INSS + R$ 1 de ICMS = R$ 82,05.</li>
        <li><strong>Prestação de serviços:</strong> R$ 81,05 de INSS + R$ 5 de ISS = R$ 86,05.</li>
        <li><strong>Comércio e serviços:</strong> R$ 81,05 + R$ 1 + R$ 5 = R$ 87,05.</li>
      </ul>
      <p>O MEI Caminhoneiro segue contribuição previdenciária de 12% do salário mínimo e tem valores diferentes. A calculadora desta página é destinada ao MEI comum.</p>

      <h2 id="vencimento">Quando vence o DAS?</h2>
      <p>O vencimento mensal é, em regra, no dia 20 do mês seguinte ao da competência. Se a data não for dia útil bancário, consulte o documento emitido pelo sistema oficial para confirmar o vencimento aplicável. O DAS é devido mesmo quando o CNPJ não faturou naquele mês.</p>

      <h2 id="onde-emitir">Onde emitir sem cair em boleto falso</h2>
      <p>Use o Portal do Empreendedor, o PGMEI no Portal do Simples Nacional ou o App MEI oficial. A abertura do MEI é gratuita e o governo não envia cobranças de associações privadas como se fossem obrigatórias.</p>
      <p>Antes de pagar, confira CNPJ, período de apuração, valor e favorecido. Links patrocinados e mensagens por WhatsApp podem imitar páginas oficiais. Prefira iniciar pelo endereço gov.br, não por um link recebido.</p>

      <h2 id="atraso">Como emitir o DAS atrasado?</h2>
      <p>No PGMEI, selecione os períodos pendentes e gere a guia atualizada. O sistema calcula multa e juros até a data prevista de pagamento. Se houver muitos meses em aberto, verifique as opções oficiais de parcelamento e compare o impacto no fluxo de caixa.</p>
      <p>O pagamento em atraso pode afetar carência e manutenção da qualidade de segurado. Quitar hoje não significa que todo período antigo produzirá imediatamente o mesmo efeito previdenciário de uma contribuição paga no prazo.</p>

      <h2 id="debito-automatico">Pix, débito automático e comprovantes</h2>
      <p>As formas disponíveis aparecem nos canais oficiais e podem incluir código de barras, Pix e débito automático. Guarde o comprovante até o pagamento constar no extrato do PGMEI. Um comprovante bancário isolado não corrige guia emitida para CNPJ ou competência errados.</p>

      <h2 id="dasnao-inclui">O que o DAS não resolve sozinho?</h2>
      <ul>
        <li>Não entrega a DASN-SIMEI anual.</li>
        <li>Não substitui nota fiscal quando ela é obrigatória.</li>
        <li>Não regulariza atividade não permitida ou excesso de faturamento.</li>
        <li>Não quita impostos pessoais eventualmente devidos na declaração de Imposto de Renda.</li>
      </ul>

      <h2 id="usar-calculadora">Como usar a calculadora do MEI Fácil</h2>
      <p>Selecione a atividade para visualizar a composição prevista do DAS. Use o resultado para conferência e planejamento; gere a cobrança apenas no canal oficial. A ferramenta não emite boleto, não recebe pagamento e não acessa dados do seu CNPJ.</p>
    `,
    category: "Obrigações MEI",
    tags: ["DAS", "salário mínimo", "INSS", "pagamento"],
    date: "2026-01-10",
    updatedAt: "2026-08-02",
    readTime: 7,
    featured: false,
    sources: [
      { name: "Decreto nº 12.797/2025 — salário mínimo de 2026", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12797.htm" },
      { name: "Portal do Empreendedor — Pagamento da contribuição mensal", url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/pagamento-de-contribuicao-mensal/pagamento-da-contribuicao-mensal-das" },
      { name: "INSS — contribuição de MEIs e autônomos", url: "https://www.gov.br/inss/pt-br/assuntos/saiba-como-meis-e-autonomos-podem-contribuir-e-regularizar-pendencias-com-o-inss" }
    ],
    relatedTool: { name: "Calculadora DAS", path: "das" },
    seo: {
      metaTitle: "DAS MEI 2026: valores e como pagar",
      metaDescription: "Confira os valores do DAS MEI 2026 para comércio, serviço e atividade mista, vencimento, atraso e canais oficiais de pagamento."
    }
  }
];

export const categories = [
  { name: "Obrigações MEI", color: "bg-orange-100 text-orange-800 border-orange-200", dot: "bg-orange-500" },
  { name: "Gestão financeira", color: "bg-blue-100 text-blue-800 border-blue-200", dot: "bg-blue-500" },
  { name: "Previdência", color: "bg-indigo-100 text-indigo-800 border-indigo-200", dot: "bg-indigo-500" }
];

export function getCategoryStyle(category: string) {
  return categories.find((item) => item.name === category) || categories[0];
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

export function getRelatedPosts(current: Post, all: Post[]): Post[] {
  const sameCategory = all.filter((post) => post.id !== current.id && post.category === current.category);
  const otherCategories = all.filter((post) => post.id !== current.id && post.category !== current.category);
  return [...sameCategory, ...otherCategories].slice(0, 3);
}
