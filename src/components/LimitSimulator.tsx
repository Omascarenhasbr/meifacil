/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, CheckCircle, HelpCircle, Calendar, DollarSign, Layout, ArrowRight } from 'lucide-react';

export const LimitSimulator = () => {
  const [openingMonth, setOpeningMonth] = useState(1);
  const [isOpeningCurrentYear, setIsOpeningCurrentYear] = useState(false);
  const [revenue, setRevenue] = useState(0);

  const months = [
    { v: 1, l: 'Janeiro' }, { v: 2, l: 'Fevereiro' }, { v: 3, l: 'Março' },
    { v: 4, l: 'Abril' }, { v: 5, l: 'Maio' }, { v: 6, l: 'Junho' },
    { v: 7, l: 'Julho' }, { v: 8, l: 'Agosto' }, { v: 9, l: 'Setembro' },
    { v: 10, l: 'Outubro' }, { v: 11, l: 'Novembro' }, { v: 12, l: 'Dezembro' }
  ];

  const maxAnnual = 81000;
  const monthlyRef = 6750;
  
  const currentLimit = isOpeningCurrentYear 
    ? (13 - openingMonth) * monthlyRef 
    : maxAnnual;

  const usagePercent = Math.min((revenue / currentLimit) * 100, 100);
  const remaining = Math.max(currentLimit - revenue, 0);

  const getStatus = () => {
    if (revenue > currentLimit * 1.2) return { label: 'ACIMA DE 20%', color: 'bg-red-600', text: 'Pode haver efeito retroativo. Procure orientação contábil imediatamente.', theme: 'red' };
    if (revenue > currentLimit) return { label: 'LIMITE EXCEDIDO', color: 'bg-orange-600', text: 'Excesso de até 20%: prepare a transição para o ano seguinte.', theme: 'orange' };
    if (usagePercent > 90) return { label: 'ALERTA MÁXIMO', color: 'bg-red-500', text: 'Risco iminente de desenquadramento.', theme: 'red' };
    if (usagePercent > 70) return { label: 'ZONA DE ATENÇÃO', color: 'bg-yellow-500', text: 'Monitoramento contábil sugerido.', theme: 'yellow' };
    return { label: 'OPERACIONAL', color: 'bg-green-500', text: 'Faturamento dentro da zona segura.', theme: 'green' };
  };

  const status = getStatus();

  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="max-w-3xl">
        <p className="text-[10px] font-black text-green-700 uppercase tracking-[0.22em] mb-3">Planejamento de receita</p>
        <h1 className="text-3xl md:text-5xl font-serif italic text-mei-dark mb-4">Limite de Faturamento MEI</h1>
        <p className="text-gray-600 leading-relaxed">Compare a receita bruta informada com o teto de referência e com o limite proporcional do primeiro ano.</p>
      </header>
      {/* Simulation Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Input Configuration */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-2">
              <Layout size={14} className="text-mei-light" />
              Configuração Fiscal
            </h3>
            
            <div className="space-y-6">
              <label className="flex items-start gap-4 p-5 border-2 rounded-2xl cursor-pointer transition-all hover:bg-mei-bg group border-gray-100">
                <input 
                  type="checkbox" 
                  checked={isOpeningCurrentYear} 
                  onChange={(e) => setIsOpeningCurrentYear(e.target.checked)}
                  className="w-5 h-5 text-mei-light rounded mt-0.5 border-gray-300 focus:ring-mei-light"
                />
                <div>
                  <span className="text-sm font-black text-gray-700 block mb-1">Empresa no 1º Ano</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Limites Proporcionais Ativados</span>
                </div>
              </label>

              {isOpeningCurrentYear && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-2 pt-2 border-t border-gray-50 overflow-hidden"
                >
                  <label className="text-[10px] font-black text-mei-light block mb-2 uppercase tracking-widest italic">Mês de Abertura / Cadastro</label>
                  <select 
                    className="w-full p-4 border-2 rounded-2xl text-sm font-black bg-mei-bg border-gray-100 focus:border-mei-light outline-none appearance-none"
                    value={openingMonth}
                    onChange={(e) => setOpeningMonth(Number(e.target.value))}
                  >
                    {months.map(m => <option key={m.v} value={m.v}>{m.l}</option>)}
                  </select>
                </motion.div>
              )}

              <div className="space-y-2 pt-4 border-t border-gray-50 text-mei-dark">
                <label className="text-[10px] font-black text-gray-400 block mb-2 uppercase tracking-widest italic">Faturamento Acumulado 2026</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <DollarSign size={18} className="text-mei-light" />
                  </div>
                  <input 
                    type="number" 
                    className="w-full pl-12 pr-5 py-5 border-2 border-gray-100 rounded-2xl text-2xl font-mono font-black focus:border-mei-dark focus:ring-4 focus:ring-green-50 outline-none bg-mei-bg transition-all"
                    placeholder="0,00"
                    value={revenue || ''}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                  />
                </div>
                <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest px-1 mt-2">
                  NF-e Emitidas + Vendas sem Nota
                </p>
              </div>
            </div>
          </div>

          <div className="bg-mei-bg p-8 rounded-3xl border border-gray-100 flex flex-col justify-center items-center text-center">
            <Calendar className="text-mei-light mb-4" size={32} />
            <h4 className="text-sm font-bold text-mei-dark mb-1">Ciclo de Renovação</h4>
            <p className="text-xs text-gray-500 font-medium">A apuração recomeça em 1º de janeiro de cada ano.</p>
          </div>
        </div>

        {/* Dashboard / Analytics */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <span className="text-[10px] font-black text-gray-400 block mb-2 uppercase tracking-[0.2em] italic">Limite Anual Autorizado</span>
                <div className="text-5xl md:text-6xl font-mono font-black text-mei-dark tracking-tighter">
                  R$ {currentLimit.toLocaleString('pt-BR')}
                </div>
              </div>
              <div className={`px-5 py-2.5 rounded-xl text-white font-black text-[10px] uppercase shadow-lg tracking-widest ${status.color}`}>
                Status: {status.label}
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <div className="flex justify-between text-[10px] font-black mb-4 text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-mei-dark"/> Consumido</span>
                  <span>R$ {revenue.toLocaleString('pt-BR')} ({usagePercent.toFixed(1)}%)</span>
                </div>
                <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-200 p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${usagePercent}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full rounded-full ${status.color} shadow-[0_0_15px_rgba(0,0,0,0.1)]`}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-mei-bg rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-black text-gray-400 uppercase mb-2">Margem Disponível</p>
                  <p className="text-xl font-mono font-black text-mei-dark">R$ {remaining.toLocaleString('pt-BR')}</p>
                </div>
                <div className="p-5 bg-mei-bg rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-black text-gray-400 uppercase mb-2">Utilização Total</p>
                  <p className={`text-xl font-mono font-black ${usagePercent > 80 ? 'text-red-500' : 'text-mei-dark'}`}>{usagePercent.toFixed(1)}%</p>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border flex items-start gap-4 transition-all ${
                status.theme === 'green' ? 'bg-green-50 border-green-100' : 
                status.theme === 'yellow' ? 'bg-yellow-50 border-yellow-100' : 
                'bg-red-50 border-red-100'
              }`}>
                <div className={`p-2 rounded-xl ${status.color} bg-opacity-20 flex-shrink-0`}>
                  <AlertCircle size={20} className={status.color.replace('bg-', 'text-')} />
                </div>
                <div>
                  <p className="font-black text-mei-dark text-sm uppercase tracking-tighter mb-1">Leitura da simulação</p>
                  <p className="text-xs text-gray-600 font-bold leading-relaxed">{status.text}</p>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="/blog/ultrapassar-limite-mei"
            className="bg-mei-dark text-white p-8 rounded-[2rem] shadow-xl flex items-center justify-between group cursor-pointer overflow-hidden relative block no-underline"
          >
            <div className="relative z-10">
              <h4 className="text-xs font-black text-mei-light uppercase tracking-widest mb-2 italic">Dúvidas Fiscais?</h4>
              <p className="text-sm font-serif italic opacity-90 max-w-xs">Entenda datas de efeito e providências no nosso guia revisado.</p>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-mei-dark transition-transform group-hover:scale-110 relative z-10 shrink-0">
              <ArrowRight size={24} />
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-mei-light opacity-5 skew-x-12 translate-x-10 group-hover:translate-x-0 transition-transform" />
          </a>
        </div>
      </div>

      {/* Manual Content */}
      <article className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-sm prose-mei">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-mei-bg rounded-xl flex items-center justify-center text-mei-light">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-2xl font-serif italic text-mei-dark m-0">Protocolo de Faturamento</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <section>
              <h4 className="text-mei-dark font-black text-xs uppercase tracking-[0.2em] mb-4">A Regra Proporcional</h4>
              <p className="text-sm text-gray-600 leading-loose">
                O limite anual vigente é <strong>R$ 81.000,00</strong>. No ano de abertura, o teto total é proporcional a <strong>R$ 6.750,00 por mês contado entre a abertura e dezembro</strong>. Isso não cria um teto isolado para cada mês.
              </p>
            </section>
            <div className="bg-mei-bg border border-gray-100 p-6 rounded-2xl">
              <p className="text-[10px] font-black text-gray-400 uppercase mb-2">Exemplo Técnico</p>
              <p className="text-xs font-bold text-mei-dark leading-relaxed">
                Abertura em Agosto:<br/>
                5 meses ativos x R$ 6.750,00 = <strong>R$ 33.750,00</strong> no total do ano.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h4 className="text-mei-dark font-black text-xs uppercase tracking-[0.2em] mb-4">Multas e Transição</h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <p className="text-xs text-gray-600"><strong>Até 20% acima:</strong> Você paga uma guia complementar e migra oficialmente para Microempresa (ME) no ano seguinte.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <p className="text-xs text-gray-600"><strong>Mais de 20% acima:</strong> Os efeitos podem retroagir ao início do ano ou à abertura, exigindo apuração do Simples Nacional no período.</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};
