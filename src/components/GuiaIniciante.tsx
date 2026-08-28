import Link from 'next/link';
import { ArrowRight, CheckCircle2, ExternalLink, FileCheck2, Landmark, ListChecks, ShieldCheck } from 'lucide-react';

const officialSources = [
  { label: 'Portal do Empreendedor — Quero ser MEI', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei' },
  { label: 'Portal do Empreendedor — ocupações permitidas', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/quais-as-ocupacoes-que-podem-ser-mei' },
  { label: 'Portal do Empreendedor — formalização do MEI', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/formalize-se' },
  { label: 'Portal do Empreendedor — serviços e obrigações do MEI', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei' }
];

export default function GuiaIniciante() {
  return (
    <article className="max-w-5xl mx-auto space-y-7 pb-12">
      <header className="bg-mei-dark text-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
        <div className="relative z-10 max-w-3xl">
          <p className="text-[10px] text-mei-light font-black uppercase tracking-[0.25em] mb-4">Guia completo · Revisado em 28 de agosto de 2026</p>
          <h1 className="text-4xl md:text-5xl font-serif italic leading-tight mb-5">Como abrir MEI: decisões, formalização e primeiros 30 dias</h1>
          <p className="text-green-100 text-lg leading-relaxed">Uma trilha verificável para descobrir se o regime combina com sua atividade, evitar cadastros inadequados e começar a rotina do CNPJ nos canais corretos.</p>
        </div>
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-mei-light/10" aria-hidden="true" />
      </header>

      <aside className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex gap-4 text-sm leading-relaxed text-amber-950">
        <ShieldCheck className="shrink-0 text-amber-700" aria-hidden="true" />
        <p><strong>A abertura do MEI é gratuita no Portal do Empreendedor.</strong> Desconfie de cobranças para “ativar”, “registrar” ou “liberar” um CNPJ recém-aberto. Este site não formaliza empresas e nunca solicita senha gov.br.</p>
      </aside>

      <section className="bg-white border border-gray-200 rounded-3xl p-7 md:p-9 prose-mei" aria-labelledby="antes-cnpj">
        <div className="flex items-center gap-3 mb-4"><ListChecks className="text-green-700" aria-hidden="true" /><h2 id="antes-cnpj" className="!m-0">1. Confirme se o MEI cabe no negócio</h2></div>
        <p>Não escolha o regime apenas porque ele é simples. Antes do cadastro, confira se a atividade exercida aparece na lista de ocupações permitidas, se a projeção de receita cabe no limite vigente, se você não participa de outra empresa como titular, sócio ou administrador e se a estrutura de pessoal respeita as regras do MEI.</p>
        <p>A ocupação deve descrever o trabalho real. Cada ocupação está ligada a um CNAE e influencia tributação, nota fiscal e exigências locais. É possível registrar uma ocupação principal e ocupações secundárias permitidas, mas adicionar códigos “por garantia” pode criar obrigações que não correspondem ao negócio.</p>
        <p>Quem recebe benefício previdenciário, seguro-desemprego, é servidor público ou exerce profissão regulamentada deve verificar os efeitos específicos antes de formalizar. Quando houver dúvida, use o atendimento do Sebrae ou procure orientação contábil.</p>
      </section>

      <section className="bg-white border border-gray-200 rounded-3xl p-7 md:p-9 prose-mei" aria-labelledby="validar-ideia">
        <div className="flex items-center gap-3 mb-4"><CheckCircle2 className="text-green-700" aria-hidden="true" /><h2 id="validar-ideia" className="!m-0">2. Valide cliente, oferta e preço</h2></div>
        <p>A formalização não cria demanda. Descreva o problema que você resolve, escolha uma oferta pequena e converse com potenciais clientes. Busque sinais mais fortes do que curtidas: pedido, orçamento aceito, reserva ou compra dentro das regras aplicáveis à atividade.</p>
        <p>Calcule materiais, taxas, deslocamento, tempo não faturável e reserva. Depois projete quantas vendas seriam necessárias por mês. Se a conta só funciona ignorando seu trabalho ou ultrapassa rapidamente o teto do MEI, ajuste a oferta ou avalie outro enquadramento antes de abrir o CNPJ.</p>
        <div className="flex flex-wrap gap-3 not-prose">
          <Link href="/ideias-de-negocios" className="inline-flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 text-green-900 px-4 py-3 text-xs font-black uppercase tracking-wider">Ver planos de validação <ArrowRight size={15} /></Link>
          <Link href="/calculadora-preco-hora-autonomo" className="inline-flex items-center gap-2 rounded-xl bg-gray-100 text-gray-800 px-4 py-3 text-xs font-black uppercase tracking-wider">Calcular preço <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-3xl p-7 md:p-9" aria-labelledby="passo-formalizacao">
        <div className="flex items-center gap-3 mb-6"><Landmark className="text-green-700" aria-hidden="true" /><h2 id="passo-formalizacao" className="text-2xl font-bold text-mei-dark">3. Faça a formalização no canal oficial</h2></div>
        <ol className="space-y-4">
          {[
            ['Entre no Portal do Empreendedor', 'Acesse a área “Quero ser MEI” e use sua conta gov.br. Confira o domínio antes de digitar qualquer credencial.'],
            ['Revise seus dados', 'Verifique informações pessoais, contato, endereço residencial e endereço de exercício da atividade conforme solicitado pelo serviço.'],
            ['Escolha as ocupações corretas', 'Use a lista oficial e leia a descrição das ocupações. Selecione como principal aquela que melhor representa a maior parte do trabalho.'],
            ['Leia as declarações', 'Confirme somente condições verdadeiras sobre requisitos, independência, funcionamento e responsabilidade pelas informações.'],
            ['Conclua e guarde o CCMEI', 'Revise antes de finalizar. Depois, salve o Certificado da Condição de Microempreendedor Individual e confira CNPJ, ocupações e endereços.']
          ].map(([title, description], index) => (
            <li key={title} className="grid sm:grid-cols-[48px_1fr] gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <span className="w-11 h-11 rounded-xl bg-mei-dark text-white flex items-center justify-center font-serif italic text-lg">{index + 1}</span>
              <div><h3 className="font-bold text-mei-dark mb-1">{title}</h3><p className="text-sm text-gray-600 leading-relaxed">{description}</p></div>
            </li>
          ))}
        </ol>
        <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/formalize-se" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-mei-dark text-white rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider">Abrir formalização oficial <ExternalLink size={15} /></a>
      </section>

      <section className="bg-white border border-gray-200 rounded-3xl p-7 md:p-9 prose-mei" aria-labelledby="licenciamento">
        <div className="flex items-center gap-3 mb-4"><FileCheck2 className="text-green-700" aria-hidden="true" /><h2 id="licenciamento" className="!m-0">4. Verifique licenciamento e endereço</h2></div>
        <p>Ter CCMEI não significa que toda atividade pode funcionar em qualquer endereço. Prefeitura, Vigilância Sanitária, Corpo de Bombeiros, órgãos ambientais e conselhos profissionais podem ter exigências próprias. Consulte a viabilidade e o licenciamento da atividade no município, inclusive quando o trabalho é realizado em casa, pela internet ou de forma ambulante.</p>
        <p>Guarde protocolos e orientações recebidas. Não anuncie uma licença que não possui e não trate a dispensa de alvará como dispensa de cumprir regras sanitárias, ambientais, de segurança ou de uso do imóvel.</p>
      </section>

      <section className="bg-white border border-gray-200 rounded-3xl p-7 md:p-9 prose-mei" aria-labelledby="primeiros-dias">
        <h2 id="primeiros-dias">5. Organize os primeiros 30 dias</h2>
        <ul>
          <li><strong>Separe registros:</strong> anote toda receita bruta, inclusive venda a pessoa física sem nota, e arquive documentos de compra e venda.</li>
          <li><strong>Entenda o DAS:</strong> a contribuição mensal é devida mesmo sem faturamento. Emita somente no canal oficial e confira o beneficiário antes de pagar.</li>
          <li><strong>Defina a nota correta:</strong> prestação de serviço e venda de mercadoria usam sistemas diferentes. Recibo comprova pagamento, mas não substitui nota quando ela é obrigatória.</li>
          <li><strong>Acompanhe o limite:</strong> no ano de abertura, o teto é proporcional aos meses de atividade, contando o mês de abertura.</li>
          <li><strong>Prepare a declaração anual:</strong> a DASN-SIMEI informa a receita do ano anterior e também é enviada quando não houve faturamento.</li>
        </ul>
        <div className="flex flex-wrap gap-3 not-prose">
          <Link href="/ja-sou-mei" className="inline-flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 text-green-900 px-4 py-3 text-xs font-black uppercase tracking-wider">Abrir jornada mensal <ArrowRight size={15} /></Link>
          <Link href="/servicos-oficiais" className="inline-flex items-center gap-2 rounded-xl bg-gray-100 text-gray-800 px-4 py-3 text-xs font-black uppercase tracking-wider">Conferir canais oficiais <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-3xl p-7 md:p-9 prose-mei" aria-labelledby="fontes-guia">
        <h2 id="fontes-guia" className="!mt-0">Fontes oficiais consultadas</h2>
        <p>Esta página resume o caminho e não substitui as condições exibidas pelo serviço oficial no momento da formalização.</p>
        <ul className="!mb-0">{officialSources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul>
      </section>
    </article>
  );
}
