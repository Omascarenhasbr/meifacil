import { Calculator, TrendingUp, Clock, Receipt, CheckSquare, UserRound, ArrowRight, ShieldCheck, Zap, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  onNavigate: (view: string) => void;
}

const tools = [
  { 
    id: 'das', 
    label: 'Calculadora DAS', 
    icon: Calculator, 
    desc: 'Cálculo mensal do boleto DAS MEI atualizado para 2026.',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    stats: 'Incluso: INSS + ISS/ICMS'
  },
  { 
    id: 'limite', 
    label: 'Limite de Receita', 
    icon: TrendingUp, 
    desc: 'Simule seu faturamento e evite o desenquadramento do MEI.',
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
    desc: 'Emita recibos profissionais em segundos para seus clientes.',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    stats: 'Exportação em PDF/Print'
  },
  { 
    id: 'obrigacoes', 
    label: 'Agenda Fiscal', 
    icon: CheckSquare, 
    desc: 'Não perca prazos! Checklist completo de obrigações anuais.',
    color: 'bg-red-50 text-red-600 border-red-100',
    stats: 'DASN-SIMEI + Mensal'
  },
  { 
    id: 'aposentadoria', 
    label: 'Aposentadoria', 
    icon: UserRound, 
    desc: 'Simulador de tempo e valor para MEIs.',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    stats: 'Regras da Previdência'
  },
];

export function Home({ onNavigate }: HomeProps) {
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
            Ferramentas técnicas projetadas para o Microempreendedor Moderno. 
            Cálculos precisos, alertas fiscais e produtividade em um só lugar.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('das')}
              className="bg-mei-light text-mei-dark px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-105 transition shadow-lg"
            >
              Começar agora
            </button>
            <div className="flex items-center gap-2 px-4 text-[10px] uppercase font-bold tracking-tighter opacity-80 border border-green-700 rounded-xl">
              <ShieldCheck size={16} className="text-mei-light" />
              Baseado em dados oficiais
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-900 to-transparent opacity-20 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-mei-light rounded-full opacity-10 blur-3xl pointer-events-none" />
      </section>

      {/* Grid Header */}
      <div className="flex items-center justify-between px-2">
        <div>
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Painel Técnico</h3>
          <p className="text-sm font-bold text-mei-dark font-serif italic">Selecione uma ferramenta p/ processar dados</p>
        </div>
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        </div>
      </div>

      {/* Tool Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onNavigate(tool.id)}
            className="group bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-mei-light transition-all cursor-pointer flex flex-col h-full"
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
          </motion.div>
        ))}
      </div>

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
