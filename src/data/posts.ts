/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Post {
  id: number;
  slug: string;
  title: string;
  summary: string;
  content: string; // HTML completo do artigo
  category: string;
  tags: string[];
  date: string;
  readTime: number; // minutos
  featured: boolean;
  views: number; // simulado para "mais lidos"
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
    slug: "mei-uber-das-ativo-2026",
    title: "MEI para Uber: por que o DAS precisa estar em dia para dirigir em 2026",
    summary: "Entenda por que motoristas de aplicativo precisam manter o CNPJ regularizado e o DAS pago para não perder o acesso às plataformas.",
    content: `
      <h2 id="por-que-uber-exige-mei">Por que o Uber exige MEI ativo?</h2>
      <p>Desde 2024, o Uber e outras plataformas de transporte passaram a exigir que motoristas parceiros mantenham o CNPJ MEI regularizado como condição para continuar operando. Isso significa que qualquer pendência no pagamento do DAS pode resultar na suspensão do acesso ao aplicativo.</p>
      <h2 id="das-atrasado">O que acontece se o DAS estiver atrasado?</h2>
      <p>Quando o DAS fica em atraso, o CNPJ MEI entra em situação irregular perante a Receita Federal. As plataformas cruzam esses dados periodicamente e podem suspender o cadastro do motorista até a regularização.</p>
      <h2 id="como-regularizar">Como regularizar o DAS atrasado?</h2>
      <p>Acesse o portal gov.br/mei, emita os boletos em atraso (com juros e multa calculados automaticamente) e pague. A regularização é processada em até 2 dias úteis.</p>
      <h2 id="quanto-custa-das">Quanto custa o DAS para motorista de app em 2026?</h2>
      <p>O valor do DAS para motoristas de aplicativo (CNAE 5229-0/99) em 2026 é de R$ 86,05 por mês, já incluindo INSS e ISS.</p>
      <h2 id="perguntas-frequentes">Perguntas frequentes</h2>
      <h3>O Uber verifica o DAS todo mês?</h3>
      <p>A verificação não é diária, mas as plataformas fazem checagens periódicas. Manter o DAS em dia evita surpresas.</p>
      <h3>Posso dirigir no Uber sem MEI?</h3>
      <p>Depende da modalidade. Para transporte de passageiros por app, o MEI é fortemente recomendado e exigido pela maioria das plataformas.</p>
    `,
    category: "Motoristas de App",
    tags: ["uber", "das", "cnpj", "motorista"],
    date: "2026-05-04",
    readTime: 4,
    featured: true,
    views: 1250,
    relatedTool: { name: "Calculadora DAS", path: "das" },
    seo: {
      metaTitle: "MEI para Uber 2026: DAS precisa estar em dia para dirigir",
      metaDescription: "Saiba por que motoristas Uber precisam do DAS em dia em 2026. Calcule seu DAS grátis e evite suspensão do cadastro."
    }
  },
  {
    id: 2,
    slug: "cnae-motorista-aplicativo",
    title: "CNAE para motorista de app: qual código usar no Uber, 99 e iFood em 2026",
    summary: "Descubra o CNAE correto para cada plataforma e evite problemas na emissão de nota fiscal e na declaração anual.",
    content: `
      <h2 id="o-que-e-cnae">O que é CNAE e por que importa para o MEI?</h2>
      <p>O CNAE (Código Nacional de Atividades Econômicas) define sua atividade no cadastro MEI. Escolher o código errado pode causar problemas na emissão de nota fiscal e até no acesso às plataformas.</p>
      <h2 id="cnae-uber-99">CNAE para motorista Uber e 99</h2>
      <p>Para transporte de passageiros por aplicativo, o código correto é <strong>5229-0/99</strong> — Motorista (por aplicativo ou não) independente. DAS mensal: R$ 86,05.</p>
      <h2 id="cnae-ifood-rappi">CNAE para entregador iFood e Rappi</h2>
      <p>Para entregas rápidas, use o código <strong>5320-2/01</strong> — Entregador de encomendas independente. DAS mensal: R$ 82,05.</p>
      <h2 id="dois-cnaes">Posso ter os dois CNAEs?</h2>
      <p>Sim. O MEI permite até 15 atividades secundárias. Se você dirige no Uber e entrega no iFood, adicione os dois códigos no Portal do Empreendedor gratuitamente.</p>
    `,
    category: "Motoristas de App",
    tags: ["cnae", "uber", "ifood", "motorista"],
    date: "2026-05-03",
    readTime: 3,
    featured: false,
    views: 890,
    relatedTool: { name: "Calculadora DAS", path: "das" },
    seo: {
      metaTitle: "CNAE para motorista de app 2026: Uber, 99 e iFood",
      metaDescription: "Qual CNAE usar no MEI para dirigir Uber, 99 ou entregar no iFood? Veja os códigos corretos e o valor do DAS de cada um."
    }
  },
  {
    id: 3,
    slug: "dasn-simei-2026",
    title: "DASN-SIMEI 2026: o que é, prazo final e como declarar sem erros",
    summary: "A declaração anual do MEI vence em 31 de maio. Veja o passo a passo para declarar corretamente e evitar multa de R$ 50.",
    content: `
      <h2 id="o-que-e-dasn">O que é a DASN-SIMEI?</h2>
      <p>A DASN-SIMEI é a Declaração Anual do Simples Nacional para MEI. É obrigatória para todos os MEIs, mesmo quem não faturou nada no ano.</p>
      <h2 id="prazo-2026">Prazo 2026</h2>
      <p>O prazo para declarar o faturamento de 2025 é <strong>31 de maio de 2026</strong>. Não há prorrogação.</p>
      <h2 id="o-que-acontece">O que acontece se não declarar?</h2>
      <p>Multa mínima de R$ 50. CNPJ pode ser suspenso. Perda de benefícios como auxílio-doença e salário-maternidade.</p>
      <h2 id="como-declarar">Como declarar passo a passo</h2>
      <p>1. Acesse gov.br/mei com sua conta Gov.br. 2. Clique em "Declaração Anual (DASN-SIMEI)". 3. Informe o faturamento bruto de 2025. 4. Confirme e imprima o recibo.</p>
    `,
    category: "Obrigações MEI",
    tags: ["dasn", "declaração", "prazo", "obrigações"],
    date: "2026-05-01",
    readTime: 3,
    featured: false,
    views: 2100,
    relatedTool: { name: "Checklist Mensal", path: "obrigacoes" },
    seo: {
      metaTitle: "DASN-SIMEI 2026: prazo, como declarar e evitar multa",
      metaDescription: "Declaração anual MEI 2026 vence em 31 de maio. Veja como declarar em 5 minutos e evitar multa de R$50."
    }
  },
  {
    id: 4,
    slug: "calcular-preco-hora-autonomo",
    title: "Como calcular quanto cobrar por hora como autônomo ou freelancer em 2026",
    summary: "Descubra a fórmula correta para precificar seu trabalho, incluir impostos MEI e garantir o lucro desejado no fim do mês.",
    content: `
      <h2 id="por-que-maioria-cobra-errado">Por que a maioria dos autônomos cobra errado?</h2>
      <p>A resposta rápida: a maioria dos freelancers calcula o preço pela hora de trabalho executado, mas esquece de incluir horas não produtivas, impostos, férias e lucro. O resultado é trabalhar muito e sobrar pouco.</p>
      <h2 id="formula-preco-hora">A fórmula do preço por hora correto</h2>
      <p>O preço mínimo por hora deve cobrir: <strong>salário desejado ÷ horas produtivas mensais + encargos MEI + margem de lucro</strong>. Veja o exemplo:</p>
      <p>Se você quer receber R$ 5.000/mês e trabalha 160 horas, mas apenas 100 são produtivas (com clientes pagantes), seu custo base é R$ 50/hora. Adicione 10% de encargos (DAS + reservas) = R$ 55/hora mínimo.</p>
      <h2 id="horas-nao-pagas">O que são horas não pagas?</h2>
      <p>Prospecção de clientes, reuniões sem contrato, emissão de nota fiscal, deslocamento, aprendizado — tudo isso é trabalho real que não gera receita direta. Um autônomo típico tem 30% a 40% do tempo em atividades não faturáveis.</p>
      <h2 id="incluir-ferias-mei">Como incluir férias no preço?</h2>
      <p>Divida o salário desejado anual por 11 meses (reservando 1 mês para férias) em vez de 12. Isso embute automaticamente o direito ao descanso no seu preço hora.</p>
      <h2 id="use-calculadora">Use a calculadora de precificação</h2>
      <p>O MEI Fácil tem uma calculadora de precificação que faz todo esse cálculo automaticamente. Insira seu salário desejado, horas disponíveis e margem de lucro — e veja o preço mínimo por hora ou projeto.</p>
      <h2 id="faq-preco-hora">Perguntas frequentes</h2>
      <h3>Quanto cobra um freelancer de design por hora em 2026?</h3>
      <p>A média no Brasil vai de R$ 60 a R$ 180/hora dependendo da experiência e especialização. Iniciantes ficam em R$ 40–80/hora; seniores com portfólio consolidado chegam a R$ 200+.</p>
      <h3>Posso cobrar menos para pegar mais clientes?</h3>
      <p>Cobrar abaixo do mínimo sustentável gera prejuízo no longo prazo. É melhor ter menos clientes pagando um valor justo do que muitos clientes que inviabilizam o negócio.</p>
    `,
    category: "Prestadores de Serviço",
    tags: ["precificação", "freelancer", "autônomo", "hora"],
    date: "2026-04-28",
    readTime: 5,
    featured: false,
    views: 760,
    relatedTool: { name: "Calculadora de Precificação", path: "preco" },
    seo: {
      metaTitle: "Quanto cobrar por hora como autônomo em 2026: fórmula completa",
      metaDescription: "Aprenda a calcular o preço por hora correto como freelancer em 2026. Use nossa calculadora grátis e pare de cobrar barato."
    }
  },
  {
    id: 5,
    slug: "mei-nota-fiscal",
    title: "MEI pode emitir nota fiscal? Quando é obrigatório e como fazer em 2026",
    summary: "Entenda em quais situações o MEI precisa emitir nota fiscal, quais tipos existem e como emitir sem pagar nada.",
    content: `
      <h2 id="mei-pode-emitir-nota">MEI pode emitir nota fiscal?</h2>
      <p>Sim. O MEI pode e deve emitir nota fiscal quando solicitado por pessoa jurídica (empresa) ou quando o valor da venda/serviço superar R$ 200. Para pessoa física, a emissão é opcional, mas recomendada para profissionalizar o negócio.</p>
      <h2 id="quando-obrigatorio">Quando a nota fiscal é obrigatória para o MEI?</h2>
      <p>A nota fiscal é obrigatória para o MEI em três situações: <strong>1)</strong> Quando o cliente é pessoa jurídica (CNPJ). <strong>2)</strong> Quando o valor do serviço ou produto supera R$ 200. <strong>3)</strong> Quando o cliente solicitar, independente do valor.</p>
      <h2 id="tipos-nota-fiscal">Tipos de nota fiscal para MEI</h2>
      <p><strong>NFS-e (Nota Fiscal de Serviço Eletrônica):</strong> para quem presta serviços. Emitida pelo site ou app da prefeitura do seu município. Gratuita.</p>
      <p><strong>NF-e (Nota Fiscal Eletrônica):</strong> para quem vende produtos (comércio). Emitida pelo portal da Receita Federal ou app do governo. Gratuita.</p>
      <h2 id="como-emitir">Como emitir nota fiscal como MEI?</h2>
      <p>Para serviços: acesse o site da prefeitura da sua cidade, faça login com CNPJ, preencha os dados do cliente e do serviço, e emita. O processo leva menos de 5 minutos após o primeiro cadastro.</p>
      <h2 id="faq-nota-fiscal">Perguntas frequentes</h2>
      <h3>MEI precisa pagar imposto na nota fiscal?</h3>
      <p>Não há imposto adicional. O MEI já paga o DAS mensal que cobre todos os impostos. A nota fiscal não gera tributação extra, exceto em casos de ultrapassagem do limite anual.</p>
      <h3>Posso emitir recibo em vez de nota fiscal?</h3>
      <p>O recibo vale como comprovante de pagamento, mas não substitui a nota fiscal para fins contábeis do cliente pessoa jurídica. Use o Emissor de Recibos do MEI Fácil para recibos rápidos e profissionais.</p>
    `,
    category: "Prestadores de Serviço",
    tags: ["nota fiscal", "nfs-e", "serviço", "mei"],
    date: "2026-04-25",
    readTime: 4,
    featured: false,
    views: 640,
    relatedTool: { name: "Emissor de Recibo", path: "recibo" },
    seo: {
      metaTitle: "MEI pode emitir nota fiscal em 2026? Quando é obrigatório",
      metaDescription: "Saiba quando o MEI precisa emitir nota fiscal, os tipos disponíveis e como emitir gratuitamente em 2026. Guia prático e atualizado."
    }
  },
  {
    id: 6,
    slug: "ultrapassar-limite-mei",
    title: "O que acontece se eu ultrapassar o limite de R$ 81 mil como MEI em 2026",
    summary: "Ultrapassar o teto do MEI tem consequências sérias. Entenda o que acontece, quando o desenquadramento é obrigatório e como se planejar.",
    content: `
      <h2 id="qual-o-limite-mei">Qual é o limite de faturamento do MEI em 2026?</h2>
      <p>O limite anual do MEI em 2026 é de <strong>R$ 81.000,00</strong>, o equivalente a R$ 6.750 por mês. Este valor é o faturamento bruto total — somas de todas as vendas e serviços prestados no ano-calendário.</p>
      <h2 id="o-que-acontece-ultrapassa">O que acontece se ultrapassar o limite?</h2>
      <p>Se o faturamento superar R$ 81.000 em até 20% (até R$ 97.200), o MEI é desenquadrado somente no ano seguinte, retroagindo a janeiro. Se ultrapassar mais de 20% no mesmo ano, o desenquadramento é imediato a partir do mês do excesso.</p>
      <h2 id="consequencias-desenquadramento">Quais são as consequências do desenquadramento?</h2>
      <p>O CNPJ passa para Microempresa (ME) no Simples Nacional. Isso significa: <strong>1)</strong> Aumento de impostos — alíquota pode subir de ~5% para 6–15% dependendo do faturamento. <strong>2)</strong> Necessidade de contador obrigatório. <strong>3)</strong> Declaração de IR empresarial mais complexa.</p>
      <h2 id="como-se-planejar">Como se planejar para não ultrapassar?</h2>
      <p>Use o Simulador de Limite do MEI Fácil para monitorar seu faturamento mês a mês. Com 70% do limite atingido, é hora de avaliar se vale a pena migrar para ME ou ajustar o ritmo de faturamento.</p>
      <h2 id="faq-limite-mei">Perguntas frequentes</h2>
      <h3>Posso dividir faturamento com outra empresa para não passar do limite?</h3>
      <p>Não. Isso é considerado "pejotização" ilegal. O faturamento deve refletir a realidade da operação do MEI.</p>
      <h3>O limite do MEI vai aumentar em 2026?</h3>
      <p>Há discussões no Congresso sobre elevação do teto, mas até maio de 2026, o limite permanece em R$ 81.000 anuais. Acompanhe o blog para atualizações.</p>
    `,
    category: "Obrigações MEI",
    tags: ["limite", "faturamento", "desenquadramento", "mei"],
    date: "2026-04-20",
    readTime: 4,
    featured: false,
    views: 1050,
    relatedTool: { name: "Simulador de Limite", path: "limite" },
    seo: {
      metaTitle: "Ultrapassar limite MEI 2026: o que acontece e como evitar",
      metaDescription: "Ultrapassar R$ 81 mil como MEI em 2026 pode causar desenquadramento imediato. Entenda as consequências e use o simulador grátis."
    }
  },
  {
    id: 7,
    slug: "influencer-mei",
    title: "Influencer pode ser MEI? Como receber do YouTube, Hotmart e redes sociais em 2026",
    summary: "Criadores de conteúdo e influencers podem abrir MEI para receber de plataformas digitais — mas há limitações importantes que você precisa conhecer.",
    content: `
      <h2 id="influencer-pode-ser-mei">Influencer pode ser MEI?</h2>
      <p>Sim, com ressalvas. Criadores de conteúdo que monetizam canais no YouTube, vendem cursos na Hotmart ou recebem por publicidade podem abrir MEI — desde que o faturamento anual não ultrapasse R$ 81.000 e a atividade esteja prevista no CNAE permitido.</p>
      <h2 id="cnae-para-influencer">Qual CNAE usar para influencer e criador de conteúdo?</h2>
      <p>O CNAE mais indicado para criadores de conteúdo é <strong>7490-1/04</strong> — Atividades de intermediação e agenciamento de serviços e negócios em geral. Para quem produz conteúdo audiovisual: <strong>5911-1/99</strong>.</p>
      <h2 id="receber-do-exterior">Como receber do YouTube e plataformas estrangeiras como MEI?</h2>
      <p>Receber do exterior como MEI é possível, mas complexo. O dinheiro entra como "exportação de serviços" e pode ser isento de ISS. Porém, o câmbio e remessa internacional exigem conta em corretora habilitada (como Wise ou Remessa Online).</p>
      <h2 id="hotmart-kiwify-mei">MEI pode vender cursos na Hotmart e Kiwify?</h2>
      <p>Sim. A venda de infoprodutos (cursos, ebooks, mentorias) é permitida para MEI. O CNAE para ensino à distância é o <strong>8599-6/04</strong>. Fique atento ao limite de faturamento anual.</p>
      <h2 id="faq-influencer-mei">Perguntas frequentes</h2>
      <h3>Influencer com menos de 18 anos pode abrir MEI?</h3>
      <p>Não. O MEI exige que o titular tenha no mínimo 18 anos. Menores de idade precisam de representante legal e não podem ser MEI.</p>
      <h3>Preciso declarar o que ganho nas redes como MEI?</h3>
      <p>Sim. Todo faturamento — incluindo permutas, brindes e patrocínios — entra no cálculo do limite anual do MEI e deve ser declarado na DASN-SIMEI.</p>
    `,
    category: "MEI Digital",
    tags: ["influencer", "youtube", "hotmart", "criador de conteúdo"],
    date: "2026-04-15",
    readTime: 5,
    featured: false,
    views: 920,
    relatedTool: { name: "Simulador de Limite", path: "limite" },
    seo: {
      metaTitle: "Influencer pode ser MEI em 2026? YouTube, Hotmart e redes sociais",
      metaDescription: "Saiba se influencers e criadores de conteúdo podem ser MEI em 2026, qual CNAE usar e como receber do exterior legalmente."
    }
  },
  {
    id: 8,
    slug: "aposentadoria-mei",
    title: "MEI aposentadoria 2026: quanto tempo precisa contribuir e como funciona",
    summary: "O MEI tem direito à aposentadoria pelo INSS através do DAS. Entenda as regras, tempo de contribuição e como calcular o benefício.",
    content: `
      <h2 id="mei-tem-direito-aposentadoria">MEI tem direito à aposentadoria?</h2>
      <p>Sim. Ao pagar o DAS mensalmente, o MEI contribui automaticamente para o INSS como segurado individual. Isso garante acesso à aposentadoria por idade, auxílio-doença, salário-maternidade e pensão por morte.</p>
      <h2 id="tempo-contribuicao-aposentadoria">Quanto tempo precisa contribuir para se aposentar?</h2>
      <p>Pela regra de transição vigente em 2026, homens precisam de <strong>35 anos de contribuição</strong> e mulheres <strong>30 anos</strong> para aposentadoria por tempo de contribuição. Para aposentadoria por idade: 65 anos (homem) ou 62 anos (mulher), com mínimo de 15 anos de contribuição.</p>
      <h2 id="valor-aposentadoria-mei">Qual o valor da aposentadoria do MEI?</h2>
      <p>O MEI contribui com 5% do salário mínimo (R$ 81,05/mês em 2026). Essa alíquota reduzida garante apenas a aposentadoria por idade no valor de <strong>1 salário mínimo (R$ 1.621,00)</strong>. Para aposentadoria maior, é necessário complementar a contribuição para 20%.</p>
      <h2 id="como-complementar-contribuicao">Como complementar a contribuição do MEI?</h2>
      <p>Acesse o site do INSS ou app Meu INSS, emita uma GPS (Guia de Previdência Social) complementar com a diferença entre 5% e 20% do salário mínimo. O valor da complementação em 2026 é de R$ 243,15/mês.</p>
      <h2 id="faq-aposentadoria-mei">Perguntas frequentes</h2>
      <h3>O tempo como MEI conta para aposentadoria?</h3>
      <p>Sim, cada mês com DAS pago conta como 1 mês de contribuição ao INSS. Anos anteriores como CLT também somam ao tempo total.</p>
      <h3>MEI tem acesso ao auxílio-doença?</h3>
      <p>Sim, após 12 meses consecutivos de contribuição (carência). O valor é de 1 salário mínimo para quem não complementou a contribuição.</p>
    `,
    category: "Finanças",
    tags: ["aposentadoria", "inss", "previdência", "benefícios"],
    date: "2026-04-10",
    readTime: 5,
    featured: false,
    views: 830,
    relatedTool: { name: "Simulador de Aposentadoria", path: "aposentadoria" },
    seo: {
      metaTitle: "Aposentadoria MEI 2026: tempo de contribuição e valor do benefício",
      metaDescription: "Entenda como funciona a aposentadoria do MEI em 2026, quanto tempo contribuir e como complementar para receber mais. Simule grátis."
    }
  },
  {
    id: 9,
    slug: "das-mei-salario-minimo-2026",
    title: "Salário mínimo 2026 e o impacto no DAS MEI: quanto você vai pagar",
    summary: "Com o novo salário mínimo de R$ 1.621 em 2026, o valor do DAS MEI mudou. Veja os novos valores para cada tipo de atividade.",
    content: `
      <h2 id="novo-salario-minimo-2026">Salário mínimo 2026: qual o novo valor?</h2>
      <p>O salário mínimo em 2026 é de <strong>R$ 1.621,00</strong>, reajustado com base na política de valorização que combina inflação (IPCA) e crescimento do PIB de dois anos anteriores. Esse valor afeta diretamente o DAS MEI.</p>
      <h2 id="como-das-muda-salario-minimo">Como o salário mínimo afeta o DAS MEI?</h2>
      <p>O DAS MEI é calculado como percentual do salário mínimo: 5% de INSS + alíquota de ISS (1%) ou ICMS (0,5%) dependendo da atividade. Com o salário mínimo de R$ 1.621,00, o INSS fixo é de R$ 81,05/mês.</p>
      <h2 id="tabela-das-2026">Tabela do DAS MEI 2026 por atividade</h2>
      <p><strong>Prestador de serviços (ISS):</strong> R$ 81,05 (INSS) + R$ 5,00 (ISS) = <strong>R$ 86,05/mês</strong></p>
      <p><strong>Comércio e indústria (ICMS):</strong> R$ 81,05 (INSS) + R$ 1,00 (ICMS) = <strong>R$ 82,05/mês</strong></p>
      <p><strong>Serviços + Comércio (ambos):</strong> R$ 81,05 + R$ 5,00 + R$ 1,00 = <strong>R$ 87,05/mês</strong></p>
      <h2 id="quando-vence-das">Quando vence o DAS MEI?</h2>
      <p>O DAS vence sempre no dia 20 de cada mês. Pagamentos após o vencimento geram multa de 0,33% ao dia (máximo 20%) e juros Selic. Use a Calculadora DAS do MEI Fácil para emitir o boleto atualizado.</p>
      <h2 id="faq-das-2026">Perguntas frequentes</h2>
      <h3>O DAS MEI vai mudar em 2027?</h3>
      <p>Sim. O DAS é reajustado todo janeiro junto com o salário mínimo. Volte aqui em janeiro de 2027 para os valores atualizados.</p>
      <h3>O DAS MEI inclui o IRPF?</h3>
      <p>Não. O MEI é isento de Imposto de Renda sobre o lucro da empresa. Apenas se o pró-labore (salário do sócio) superar a faixa de isenção da tabela do IR pessoal, há tributação na declaração individual.</p>
    `,
    category: "Novidades",
    tags: ["das", "salário mínimo", "2026", "tabela"],
    date: "2026-01-10",
    readTime: 3,
    featured: false,
    views: 1840,
    relatedTool: { name: "Calculadora DAS", path: "das" },
    seo: {
      metaTitle: "DAS MEI 2026: novo valor com salário mínimo de R$ 1.621",
      metaDescription: "Veja quanto custa o DAS MEI em 2026 com o novo salário mínimo de R$1.621. Tabela completa por atividade e calculadora grátis."
    }
  }
];

export const categories = [
  { name: "Motoristas de App", color: "bg-amber-100 text-amber-800 border-amber-200", dot: "bg-amber-500" },
  { name: "Prestadores de Serviço", color: "bg-teal-100 text-teal-800 border-teal-200", dot: "bg-teal-500" },
  { name: "Obrigações MEI", color: "bg-orange-100 text-orange-800 border-orange-200", dot: "bg-orange-500" },
  { name: "Finanças", color: "bg-blue-100 text-blue-800 border-blue-200", dot: "bg-blue-500" },
  { name: "MEI Digital", color: "bg-purple-100 text-purple-800 border-purple-200", dot: "bg-purple-500" },
  { name: "Novidades", color: "bg-rose-100 text-rose-800 border-rose-200", dot: "bg-rose-500" },
];

export function getCategoryStyle(category: string) {
  return categories.find(c => c.name === category) || categories[0];
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

export function getRelatedPosts(current: Post, all: Post[]): Post[] {
  return all
    .filter(p => p.id !== current.id && p.category === current.category)
    .slice(0, 3);
}
