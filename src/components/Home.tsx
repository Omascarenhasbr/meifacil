"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Calculator, TrendingUp, Clock, Receipt, CheckSquare, UserRound, ArrowRight, ShieldCheck, Zap, Info, Rocket, BriefcaseBusiness, Landmark } from 'lucide-react';
import { menuItems } from './ClientLayout';


interface HomeProps {
  onNavigate?: (view: string) => void;
}

const tools = [
  { 
    id: 'das', 
    label: 'Calculadora DAS', 
    icon: Calculator, 
    desc: 'Confira a composição estimada do DAS MEI com as referências de 2026.',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    stats: 'Incluso: INSS + ISS/ICMS'
  },
  { 
    id: 'limite', 
    label: 'Limite de Receita', 
    icon: TrendingUp, 
    desc: 'Acompanhe o faturamento e identifique cedo o risco de ultrapassar o teto.',
    color: 'bg-green-50 text-green-600 border-green-100',
    stats: 'Teto 2026: R$ 81.000,00'
  },
  { 
    id: 'preco', 
    label: 'Precificação PJ', 
    icon: Clock, 
    desc: 'Quanto cobrar por hora para ter o lucro desejado no fim do mês.',
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    stats: 'Cálculo de margem real'
  },
  { 
    id: 'recibo', 
    label: 'Gerador de Recibos', 
    icon: Receipt, 
    desc: 'Monte, revise e imprima um comprovante simples de pagamento.',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    stats: 'Exportação em PDF/Print'
  },
  { 
    id: 'obrigacoes', 
    label: 'Agenda Fiscal', 
    icon: CheckSquare, 
    desc: 'Organize rotinas mensais e anuais sem confundir marcação com transmissão.',
    color: 'bg-red-50 text-red-600 border-red-100',
    stats: 'DASN-SIMEI + Mensal'
  },
  { 
    id: 'aposentadoria', 
    label: 'Aposentadoria', 
    icon: UserRound, 
    desc: 'Projeção educativa de idade e contribuições para comparar com o Meu INSS.',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    stats: 'Não consulta o CNIS'
  },
];

export function Home({ onNavigate }: HomeProps) {
  const router = useRouter();
  const handleNavigate = (id: string) => {
    if (onNavigate) { onNavigate(id); return; }
    const item = menuItems.find(m => m.id === id);
    if (item) router.push(item.path);
  };
  return (
    <div className="space-y-8 pb-12">
      {/* Hero Welcome Section */}
      <section className="bg-mei-dark text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-green-500 bg-opacity-20 px-3 py-1 rounded-full mb-6 border border-green-500 border-opacity-30">
            <Zap size={14} className="text-white" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Ferramentas para MEI em 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif italic mb-6 leading-tight">
            Gestão simplificada para quem faz o Brasil girar.
          </h1>
          <p className="text-green-100 text-lg mb-8 opacity-90 leading-relaxed font-medium">
            Simulações com premissas visíveis, guias com fontes e atalhos para os canais oficiais.
            Organize os números antes de cumprir a obrigação no portal responsável.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => handleNavigate('quero-ser-mei')}
              className="bg-mei-light text-mei-dark px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-105 transition shadow-lg"
            >
              Escolher minha jornada
            </button>
            <div className="flex items-center gap-2 px-4 text-[10px] uppercase font-bold tracking-tighter opacity-80 border border-green-700 rounded-xl">
              <ShieldCheck size={16} className="text-mei-light" />
              Fontes e revisão identificadas
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-900 to-transparent opacity-20 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-mei-light rounded-full opacity-10 blur-3xl pointer-events-none" />
      </section>

      <section aria-labelledby="escolha-jornada" className="space-y-5">
        <div className="px-2">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">Comece pelo seu momento</p>
          <h2 id="escolha-jornada" className="text-3xl font-serif italic text-mei-dark">O que você precisa resolver hoje?</h2>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">A ordem importa: primeiro entenda a etapa, depois use a ferramenta e conclua a obrigação no canal oficial.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <Link href="/quero-ser-mei" className="group bg-white border-2 border-green-200 hover:border-mei-light rounded-3xl p-7 md:p-8 transition shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-green-100 text-green-800 rounded-2xl flex items-center justify-center mb-5"><Rocket aria-hidden="true" /></div>
            <p className="text-[10px] font-black uppercase tracking-wider text-green-700 mb-2">Antes do CNPJ</p>
            <h3 className="text-2xl font-bold text-mei-dark mb-3">Quero ser MEI</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">Confira se pode ser MEI, planeje atividade e preço, formalize gratuitamente e organize os primeiros passos.</p>
            <span className="inline-flex items-center gap-2 text-sm font-black text-green-800">Seguir esta jornada <ArrowRight size={16} className="group-hover:translate-x-1 transition" aria-hidden="true" /></span>
          </Link>
          <Link href="/ja-sou-mei" className="group bg-white border-2 border-blue-100 hover:border-blue-300 rounded-3xl p-7 md:p-8 transition shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-5"><BriefcaseBusiness aria-hidden="true" /></div>
            <p className="text-[10px] font-black uppercase tracking-wider text-blue-700 mb-2">CNPJ em atividade</p>
            <h3 className="text-2xl font-bold text-mei-dark mb-3">Já sou MEI</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">Organize DAS, receita, nota fiscal, declaração anual, previdência e o crescimento do negócio.</p>
            <span className="inline-flex items-center gap-2 text-sm font-black text-blue-800">Abrir meu painel <ArrowRight size={16} className="group-hover:translate-x-1 transition" aria-hidden="true" /></span>
          </Link>
        </div>
        <Link href="/servicos-oficiais" className="bg-gray-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-black transition">
          <span className="flex gap-3 items-center"><Landmark className="text-mei-light" aria-hidden="true" /><span><strong className="block">Precisa emitir ou transmitir algo agora?</strong><span className="text-xs text-gray-300">Use nossa central de links conferidos para os serviços oficiais.</span></span></span>
          <span className="text-xs font-black uppercase tracking-wider flex items-center gap-2">Abrir central <ArrowRight size={15} aria-hidden="true" /></span>
        </Link>
      </section>

      {/* Grid Header */}
      <div className="flex items-center justify-between px-2">
        <div>
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Ferramentas gratuitas</h2>
          <p className="text-sm font-bold text-mei-dark font-serif italic">Calcule, organize e entenda o próximo passo</p>
        </div>
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        </div>
      </div>

      {/* Tool Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={menuItems.find((item) => item.id === tool.id)?.path || '/'}
            className="group bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-mei-light transition-all cursor-pointer flex flex-col h-full text-left"
          >
            <div className={`w-14 h-14 rounded-2xl ${tool.color} border flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
              <tool.icon className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold text-mei-dark mb-3 flex items-center justify-between group-hover:text-mei-light transition-colors">
              {tool.label}
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </h3>
            
            <p className="text-gray-500 text-sm mb-auto leading-relaxed">
              {tool.desc}
            </p>
            
            <div className="mt-6 pt-5 border-t border-gray-50 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Status</span>
              <span className="text-[10px] font-bold text-mei-dark bg-mei-bg px-2.5 py-1 rounded-lg border border-gray-100">
                {tool.stats}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5" aria-labelledby="como-usar">
        <div className="md:col-span-3 px-2">
          <h2 id="como-usar" className="text-2xl font-serif italic text-mei-dark">Como usar o MEI Fácil com segurança</h2>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <strong className="text-mei-dark block mb-2">1. Entenda a premissa</strong>
          <p className="text-sm text-gray-600 leading-relaxed">Veja quais valores e regras entram no cálculo. Resultado sem premissa clara não deve orientar uma decisão.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <strong className="text-mei-dark block mb-2">2. Confira o guia</strong>
          <p className="text-sm text-gray-600 leading-relaxed">Nossos artigos mostram data de revisão, autoria editorial, limitações e links para as fontes consultadas.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <strong className="text-mei-dark block mb-2">3. Conclua no canal oficial</strong>
          <p className="text-sm text-gray-600 leading-relaxed">Boletos, declarações e benefícios são emitidos nos serviços responsáveis. Nós não recebemos tributos nem acessamos seu CNPJ.</p>
        </div>
        <div className="md:col-span-3 flex flex-wrap gap-4 px-2 pt-2">
          <Link href="/blog" className="text-sm font-black text-green-800 underline underline-offset-4">Ler guias revisados</Link>
          <Link href="/politica-editorial" className="text-sm font-black text-green-800 underline underline-offset-4">Ver política editorial</Link>
          <Link href="/sobre" className="text-sm font-black text-green-800 underline underline-offset-4">Conhecer o projeto</Link>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-white border-2 border-mei-dark border-dashed rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
        <div className="w-16 h-16 bg-mei-bg rounded-2xl flex items-center justify-center text-mei-dark shrink-0">
          <Info size={32} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-lg font-bold text-mei-dark mb-2 font-serif italic">Mantenha seu MEI em dia</h4>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
            Lembre-se que o DAS deve ser pago até o dia 20 de cada mês, mesmo que você não tenha faturado nada. 
            O não pagamento pode acarretar em multas e perda dos benefícios previdenciários.
          </p>
        </div>
        <a 
          href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-mei-dark text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition whitespace-nowrap"
        >
          Ver Guia Oficial
        </a>
      </section>
    </div>
  );
}
