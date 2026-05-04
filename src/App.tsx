/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, TrendingUp, Clock, Receipt, CheckSquare, UserRound, Menu, X, ChevronRight, LayoutDashboard, FileText, Settings, HelpCircle } from 'lucide-react';
import { Home } from './components/Home';
import { DasCalculator } from './components/DasCalculator';
import { LimitSimulator } from './components/LimitSimulator';
import { PricingCalculator } from './components/PricingCalculator';
import { ReceiptGenerator } from './components/ReceiptGenerator';
import { Checklist } from './components/Checklist';
import { RetirementSimulator } from './components/RetirementSimulator';

const menuItems = [
  { id: 'home', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'das', label: 'Calculadora DAS', icon: Calculator, desc: 'Impostos Mensais' },
  { id: 'limite', label: 'Limite de Receita', icon: TrendingUp, desc: 'Faturamento Anual' },
  { id: 'preco', label: 'Precificação PJ', icon: Clock, desc: 'Cálculo de Lucro' },
  { id: 'recibo', label: 'Emissor de Recibo', icon: Receipt, desc: 'Documentos' },
  { id: 'obrigacoes', label: 'Checklist Mensal', icon: CheckSquare, desc: 'Agenda Fiscal' },
  { id: 'aposentadoria', label: 'Aposentadoria', icon: UserRound, desc: 'Previdência' },
];

export default function App() {
  const [view, setView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const titles: Record<string, string> = {
      home: 'MEI Fácil | Dashboard de Gestão',
      das: 'Calculadora DAS MEI 2026 | Técnico',
      limite: 'Limite de Faturamento MEI | Monitoramento',
      preco: 'Precificação Autônomo | Ferramenta Profissional',
      recibo: 'Emissor de Recibos Profissionais',
      obrigacoes: 'Checklist Fiscal MEI 2026',
      aposentadoria: 'Simulador Previdenciário MEI'
    };
    
    document.title = titles[view] || 'MEI Fácil — Hub de Ferramentas para MEI e Autônomo';
  }, [view]);

  const modalData: Record<string, { title: string, content: React.ReactNode }> = {
    docs: {
      title: 'Guias & Documentação MEI',
      content: (
        <div className="space-y-6">
          <p className="text-sm font-medium text-gray-600 italic">Central de links oficiais para a gestão do seu CNPJ em 2026.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" target="_blank" rel="noopener noreferrer" className="p-4 bg-mei-bg rounded-2xl border border-gray-100 hover:border-mei-light transition-all group">
              <h5 className="font-black text-[10px] uppercase tracking-widest text-mei-dark mb-1">Portal Gov.br</h5>
              <p className="text-[10px] text-gray-500">Página oficial do Microempreendedor Individual.</p>
            </a>
            <a href="https://wwws.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/identificacao" target="_blank" rel="noopener noreferrer" className="p-4 bg-mei-bg rounded-2xl border border-gray-100 hover:border-mei-light transition-all group">
              <h5 className="font-black text-[10px] uppercase tracking-widest text-mei-dark mb-1">PGMEI (Emissão das)</h5>
              <p className="text-[10px] text-gray-500">Emita seu boleto mensal diretamente na Receita.</p>
            </a>
            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/emissao-de-comprovante-ccmei" target="_blank" rel="noopener noreferrer" className="p-4 bg-mei-bg rounded-2xl border border-gray-100 hover:border-mei-light transition-all group">
              <h5 className="font-black text-[10px] uppercase tracking-widest text-mei-dark mb-1">Comprovante CCMEI</h5>
              <p className="text-[10px] text-gray-500">Gere o documento que comprova sua situação cadastral.</p>
            </a>
            <a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/declaracao-anual-de-faturamento" target="_blank" rel="noopener noreferrer" className="p-4 bg-mei-bg rounded-2xl border border-gray-100 hover:border-mei-light transition-all group">
              <h5 className="font-black text-[10px] uppercase tracking-widest text-mei-dark mb-1">DASN-SIMEI</h5>
              <p className="text-[10px] text-gray-500">Realize sua declaração anual de faturamento.</p>
            </a>
          </div>
        </div>
      )
    },
    support: {
      title: 'Suporte & Ajuda Técnica',
      content: (
        <div className="space-y-6">
          <div className="bg-mei-dark text-white p-6 rounded-3xl">
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-4 text-mei-light italic">Atendimento Direto</h5>
            <p className="text-sm font-serif italic mb-6">Oferecemos suporte técnico para as ferramentas e orientações básicas sobre MEI.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[10px] font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-mei-light shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                suporte@meifacil.app
              </div>
              <div className="flex items-center gap-3 text-[10px] font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-mei-light shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                ads@meifacil.app
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest italic">Ou envie uma mensagem rápida</p>
            <div className="space-y-2">
              <input type="text" placeholder="Seu nome" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-xs outline-none focus:border-mei-light transition-all" />
              <textarea placeholder="Como podemos ajudar?" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-xs outline-none focus:border-mei-light h-20 resize-none transition-all"></textarea>
              <button 
                onClick={() => alert('Sua mensagem foi enviada! Responderemos em breve.')}
                className="w-full py-3 bg-mei-light text-mei-dark font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-green-400 transition-all shadow-lg active:scale-95"
              >
                Enviar Solicitação
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
               <h6 className="font-black text-[9px] uppercase mb-1">Dúvida Comum</h6>
               <p className="text-[9px] text-gray-500 leading-relaxed italic">"Meu boleto vence hoje?"</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
               <h6 className="font-black text-[9px] uppercase mb-1">Horário</h6>
               <p className="text-[9px] text-gray-500 leading-relaxed font-bold">24h via Automação</p>
            </div>
          </div>
        </div>
      )
    },
    terms: {
      title: 'Termos de Utilização',
      content: (
        <div className="space-y-4 text-[11px] leading-relaxed text-gray-600 font-medium">
          <p className="font-black text-mei-dark uppercase italic mb-2 tracking-widest">Acordo de Uso do Sistema</p>
          <p>O Hub MEI Fácil é uma plataforma de ferramentas auxiliares. Ao utilizá-la, você compreende que:</p>
          <ul className="list-decimal pl-4 space-y-3">
            <li><strong>Finalidade Educativa:</strong> Os cálculos e ferramentas são simulações baseadas na legislação de 2026. Não substituem registros oficiais da Receita Federal ou orientação contábil individualizada.</li>
            <li><strong>Isenção de Responsabilidade:</strong> Não nos responsabilizamos por multas, atrasos ou desenquadramentos decorrentes do uso das ferramentas. A responsabilidade fiscal é exclusiva do titular do CNPJ.</li>
            <li><strong>Disponibilidade:</strong> O sistema pode sofrer atualizações ou instabilidades sem aviso prévio.</li>
            <li><strong>Uso Pessoal:</strong> É proibido o uso da plataforma para fins ilícitos ou cópia integral do código fonte sem autorização.</li>
          </ul>
        </div>
      )
    },
    privacy: {
      title: 'Política de Privacidade',
      content: (
        <div className="space-y-4 text-[11px] leading-relaxed text-gray-600 font-medium">
          <p className="font-black text-mei-dark uppercase italic mb-2 tracking-widest">Segurança de Dados 2026</p>
          <p>Sua privacidade é técnica e estruturalmente protegida nesta plataforma:</p>
          <ul className="list-disc pl-4 space-y-3">
            <li><strong>Armazenamento Local (Client-Side):</strong> Informações como faturamento simulado e checklist de tarefas são salvas exclusivamente no <i>Local Storage</i> do seu navegador. Não coletamos essas informações em nossos servidores.</li>
            <li><strong>Zero Tracking:</strong> Não utilizamos cookies de rastreamento de comportamento pessoal. Utilizamos apenas identificadores anônimos para publicidade (Adsense) e estatísticas de uso geral.</li>
            <li><strong>Direito ao Esquecimento:</strong> Você pode apagar todos os dados salvos pelo app limpando o cache e dados de site do seu navegador.</li>
            <li><strong>Publicidade:</strong> Utilizamos o Google Adsense para manter o serviço gratuito. Parceiros terceiros podem utilizar cookies para exibir anúncios baseados em suas visitas.</li>
          </ul>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-mei-bg flex flex-col font-sans text-gray-900">
      {/* Modals Overlay */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-mei-dark/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-serif italic text-mei-dark">{modalData[activeModal]?.title}</h3>
                  <button onClick={() => setActiveModal(null)} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-mei-dark transition-colors">
                    <X size={20} />
                  </button>
                </div>
                
                <div className={(activeModal === 'docs' || activeModal === 'support') ? 'mb-10' : ''}>
                  {modalData[activeModal]?.content}
                </div>

                {/* Ad Space in Modal - Hidden for Terms and Privacy */}
                {(activeModal === 'docs' || activeModal === 'support') && (
                  <div className="bg-mei-bg border-2 border-dashed border-gray-200 p-4 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-2">Publicidade</p>
                      <div className="w-[300px] h-[100px] flex items-center justify-center text-[10px] text-gray-400 font-mono">
                        [ ADSENSE - MODAL BANNER ]
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Top Header Bar */}
      <header className="h-16 md:h-18 bg-mei-dark text-white flex items-center justify-between px-4 md:px-8 border-b-2 border-mei-light sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => setView('home')} className="bg-mei-light p-1.5 rounded-lg transition-transform hover:rotate-6">
            <Calculator className="w-6 h-6 text-mei-dark" />
          </button>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight leading-none uppercase flex items-center">
              MEI FÁCIL <span className="text-mei-light text-[10px] font-mono ml-2 border border-mei-light px-1.5 py-0.5 rounded uppercase">v2026.1</span>
            </h1>
            <p className="text-[9px] text-green-200 uppercase tracking-widest mt-0.5 font-bold">Hub de Ferramentas & Gestão Autônoma</p>
          </div>
          <div className="sm:hidden font-bold tracking-tighter">MEI FÁCIL</div>
        </div>

        <nav className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-wider items-center">
          <button 
            onClick={() => setView('home')} 
            className={`transition-colors hover:text-mei-light pb-1 ${view === 'home' ? 'text-mei-light border-b-2 border-mei-light' : ''}`}
          >
            Dashboard
          </button>
          <button onClick={() => setActiveModal('docs')} className="hover:text-green-300 transition-colors uppercase">Guias & Docs</button>
          <button onClick={() => setActiveModal('support')} className="hover:text-green-300 transition-colors uppercase">Suporte</button>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:block text-right border-r border-green-800 pr-6 mr-2">
            <p className="text-[9px] opacity-60 uppercase font-black">Salário Mínimo</p>
            <p className="text-xs font-mono font-bold text-mei-light tracking-wider">R$ 1.621,00</p>
          </div>
          <button className="lg:hidden p-2 rounded-xl bg-green-900 bg-opacity-30" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation - Sticky for Desktop */}
        <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col sticky top-16 h-[calc(100vh-64px)]">
          <div className="p-4 border-b border-gray-100 flex-1 overflow-y-auto">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 px-3">Sessões Ativas</p>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all group ${
                    view === item.id 
                    ? 'bg-green-50 text-mei-dark border-l-4 border-mei-dark shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${view === item.id ? 'text-mei-dark' : 'opacity-60 group-hover:opacity-100'}`} />
                  <div>
                    <span className="text-xs font-bold block">{item.label}</span>
                    <span className="text-[9px] font-medium opacity-60">{item.desc}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6">
            <div className="bg-mei-bg rounded-2xl p-4 border border-gray-100">
              <p className="text-[10px] font-black text-gray-400 uppercase mb-3 text-center tracking-widest">Publicidade</p>
              <div className="w-full aspect-square bg-gray-200 rounded-xl flex items-center justify-center text-[10px] text-gray-400 font-mono text-center border-2 border-dashed border-gray-300">
                ADSENSE<br/>300x250
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="lg:hidden fixed inset-0 z-40 bg-mei-dark bg-opacity-95 pt-20"
            >
              <div className="p-6 space-y-4">
                {menuItems.map(item => (
                  <button 
                    key={item.id} 
                    onClick={() => { setView(item.id); setIsMenuOpen(false); }}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl transition text-left font-bold ${view === item.id ? 'bg-mei-light text-mei-dark' : 'text-white hover:bg-green-800'}`}
                  >
                    <item.icon className="w-6 h-6" />
                    <div className="flex flex-col">
                      <span className="text-sm">{item.label}</span>
                      <span className="text-[10px] opacity-60 font-medium">{item.desc}</span>
                    </div>
                  </button>
                ))}
                
                <div className="pt-6 border-t border-green-800 space-y-2 mt-4 text-xs font-bold uppercase tracking-widest text-mei-light">
                   <button onClick={() => { setActiveModal('docs'); setIsMenuOpen(false); }} className="w-full p-4 text-left">Guias & Docs</button>
                   <button onClick={() => { setActiveModal('support'); setIsMenuOpen(false); }} className="w-full p-4 text-left">Suporte</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Workspace */}
        <main className="flex-1 flex flex-col p-4 md:p-8 overflow-y-auto">
          {/* Breadcrumbs & Active Tool Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[10px] font-mono text-mei-light mb-1 italic uppercase tracking-widest font-bold">
                Home / Ferramentas / {menuItems.find(i => i.id === view)?.label || 'Dashboard'}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif italic text-mei-dark">
                {menuItems.find(i => i.id === view)?.label || 'Hub MEI Fácil'}
              </h2>
            </div>
            {view !== 'home' && (
              <div className="bg-white px-5 py-2 rounded-full border border-gray-200 flex items-center gap-3 shadow-sm self-start">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-tighter">Vencimento DAS: 20 de cada mês</span>
              </div>
            )}
          </div>

          <motion.div
             key={view}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3 }}
             className="flex-1"
          >
            {view === 'home' && <Home onNavigate={setView} />}
            {view === 'das' && <DasCalculator />}
            {view === 'limite' && <LimitSimulator />}
            {view === 'preco' && <PricingCalculator />}
            {view === 'recibo' && <ReceiptGenerator />}
            {view === 'obrigacoes' && <Checklist />}
            {view === 'aposentadoria' && <RetirementSimulator />}
          </motion.div>

          {/* Global Footer Ad */}
          <div className="mt-16 border-t border-gray-200 pt-8 no-print">
            <div className="w-full flex flex-col items-center gap-2">
               <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Publicidade</p>
               <div className="w-full h-[90px] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 font-mono text-[10px] tracking-widest uppercase font-bold">
                  [ ADSENSE - BANNER 728x90 ]
               </div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Micro-Bar */}
      <footer className="h-10 bg-white border-t border-gray-200 flex items-center justify-between px-4 md:px-8 text-[9px] font-black text-gray-400 uppercase tracking-widest no-print">
        <div className="flex gap-4 md:gap-8">
          <button onClick={() => setActiveModal('terms')} className="hover:text-mei-dark transition uppercase">Termos</button>
          <button onClick={() => setActiveModal('privacy')} className="hover:text-mei-dark transition uppercase">Privacidade</button>
          <span className="hidden sm:inline">Dados: Gov.br / Receita Federal</span>
        </div>
        <div className="text-mei-dark text-right">
          © 2026 MEI FÁCIL - HUB DE GESTÃO PARA AUTÔNOMOS
        </div>
      </footer>
    </div>
  );
}

