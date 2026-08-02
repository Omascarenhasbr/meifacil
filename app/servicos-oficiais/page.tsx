import type { Metadata } from 'next';
import { ExternalLink, Landmark, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Serviços Oficiais para MEI',
  description: 'Atalhos conferidos para formalização, CCMEI, DAS, relatório mensal, DASN-SIMEI, nota fiscal, baixa e Meu INSS.',
  alternates: { canonical: '/servicos-oficiais' }
};

const groups = [
  { title: 'Abrir e consultar', items: [
    { label: 'Formalização do MEI', description: 'Confira requisitos e abra o CNPJ gratuitamente.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei' },
    { label: 'Emitir o CCMEI', description: 'Obtenha o comprovante oficial da condição de MEI.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/emissao-de-comprovante-ccmei' },
    { label: 'Atualização cadastral', description: 'Consulte orientações para alterar dados do MEI.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/atualizacao-cadastral-de-mei' }
  ]},
  { title: 'Rotina e impostos', items: [
    { label: 'Emitir e pagar DAS', description: 'Acesse as opções oficiais de boleto, Pix e pagamento.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/pagamento-de-contribuicao-mensal/como-pagar-o-das' },
    { label: 'Relatório mensal', description: 'Veja a orientação e o modelo de receitas brutas.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/relatorio-mensal' },
    { label: 'Declaração anual DASN-SIMEI', description: 'Entenda o prazo e entre no serviço de transmissão.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/declaracao-anual-de-faturamento' }
  ]},
  { title: 'Documentos e previdência', items: [
    { label: 'Orientação sobre nota fiscal', description: 'Saiba quando e por qual sistema emitir.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/nota-fiscal' },
    { label: 'Emissor Nacional de NFS-e', description: 'Emita nota fiscal de serviço no ambiente nacional.', href: 'https://www.nfse.gov.br/EmissorNacional' },
    { label: 'Meu INSS', description: 'Consulte CNIS, benefícios e a simulação oficial de aposentadoria.', href: 'https://meu.inss.gov.br/' }
  ]},
  { title: 'Mudanças no negócio', items: [
    { label: 'Transição para microempresa', description: 'Veja hipóteses e orientações de desenquadramento.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/quero-crescer-desenquadramento' },
    { label: 'Baixa do MEI', description: 'Consulte os efeitos e solicite a baixa quando necessário.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/baixa-de-mei' },
    { label: 'Todos os serviços para MEI', description: 'Abra a central mantida pelo Portal do Empreendedor.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei' }
  ]}
];

export default function ServicosOficiaisPage() {
  return (
    <article className="max-w-5xl mx-auto space-y-7">
      <header className="bg-mei-dark text-white rounded-[2.5rem] p-8 md:p-12">
        <div className="flex items-center gap-3 text-mei-light mb-4"><Landmark aria-hidden="true" /><p className="text-[10px] font-black uppercase tracking-[0.25em]">Atalhos conferidos em agosto de 2026</p></div>
        <h1 className="text-4xl md:text-5xl font-serif italic mb-5">Serviços oficiais para MEI</h1>
        <p className="text-green-100 text-lg leading-relaxed max-w-3xl">Use o MEI Fácil para se preparar e os portais responsáveis para concluir cada obrigação. Todos os links abaixo abrem fora do nosso site.</p>
      </header>

      <aside className="bg-green-50 border border-green-200 rounded-3xl p-6 flex gap-4 text-sm text-green-950 leading-relaxed">
        <ShieldCheck className="shrink-0 text-green-700" aria-hidden="true" />
        <p><strong>Segurança:</strong> confira o domínio antes de informar CPF, senha ou dados do CNPJ. A formalização do MEI é gratuita e o MEI Fácil nunca solicita sua senha gov.br.</p>
      </aside>

      {groups.map((group) => (
        <section key={group.title} aria-labelledby={`grupo-${group.title.replaceAll(' ', '-').toLowerCase()}`}>
          <h2 id={`grupo-${group.title.replaceAll(' ', '-').toLowerCase()}`} className="text-2xl font-serif italic text-mei-dark mb-4 px-2">{group.title}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {group.items.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-mei-light hover:shadow-lg transition group">
                <div className="flex justify-between gap-3 mb-3"><h3 className="font-bold text-mei-dark group-hover:text-green-700">{item.label}</h3><ExternalLink className="shrink-0 text-gray-400" size={17} aria-hidden="true" /></div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                <span className="block mt-5 text-[10px] font-black uppercase tracking-wider text-green-800">Abrir canal oficial</span>
              </a>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
