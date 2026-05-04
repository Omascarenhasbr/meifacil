/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Wallet, Info, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';

export const DasCalculator = () => {
  const [activity, setActivity] = useState<'comercio' | 'servicos' | 'ambos'>('servicos');
  
  const values = {
    comercio: { total: 82.05, inss: 81.05, extra: 1.00, extraLabel: 'ICMS', desc: 'Incide apenas ICMS' },
    servicos: { total: 86.05, inss: 81.05, extra: 5.00, extraLabel: 'ISS', desc: 'Incide apenas ISS' },
    ambos: { total: 87.05, inss: 81.05, extra: 6.00, extraLabel: 'ICMS + ISS', desc: 'Incide ICMS e ISS juntos' }
  };

  const current = values[activity];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Tool Interface Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Configuration Section */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm transition-all hover:border-mei-light">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-mei-bg flex items-center justify-center text-mei-dark border border-gray-200">1</span>
              Seleção de Atividade Econômica
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {(['comercio', 'servicos', 'ambos'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setActivity(type)}
                  className={`flex items-center justify-between p-5 rounded-2xl transition-all text-left border-2 group ${
                    activity === type 
                    ? 'border-mei-dark bg-green-50 shadow-md ring-4 ring-green-100' 
                    : 'border-gray-100 hover:border-mei-light hover:bg-mei-bg'
                  }`}
                >
                  <div>
                    <p className={`font-bold transition-colors ${activity === type ? 'text-lg text-mei-dark' : 'text-gray-700'}`}>
                      {type === 'comercio' && 'Comércio / Indústria'}
                      {type === 'servicos' && 'Prestação de Serviços'}
                      {type === 'ambos' && 'Comércio + Serviços'}
                    </p>
                    <p className={`text-xs font-medium opacity-60 transition-colors ${activity === type ? 'text-mei-dark' : 'text-gray-500'}`}>
                      {values[type].desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold transition-opacity ${activity === type ? 'opacity-100 text-mei-dark' : 'opacity-0 group-hover:opacity-60 text-gray-500'}`}>
                      R$ {values[type].total.toFixed(2).replace('.', ',')}
                    </span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${activity === type ? 'border-mei-dark bg-mei-dark' : 'border-gray-200'}`}>
                      {activity === type && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-mei-dark text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-black text-mei-light uppercase mb-2 tracking-[0.2em] italic">Valor Final DAS Mensal</p>
              <div className="text-6xl md:text-7xl font-mono tracking-tighter transition-transform group-hover:scale-105 duration-500">
                R$ {current.total.toFixed(2).replace('.', ',')}
              </div>
            </div>
            <div className="text-right border-l border-green-800 pl-8 relative z-10 w-full md:w-auto">
              <p className="text-[10px] font-black uppercase text-mei-light mb-3 italic tracking-widest">Composição</p>
              <ul className="text-xs space-y-2 opacity-90 font-bold">
                <li className="flex justify-between gap-8 font-mono"><span>INSS (5%)</span> <span>R$ 81,05</span></li>
                <li className="flex justify-between gap-8 font-mono"><span>{current.extraLabel}</span> <span>R$ {current.extra.toFixed(2).replace('.', ',')}</span></li>
              </ul>
            </div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-mei-light opacity-5 blur-3xl rounded-full" />
          </div>
        </div>

        {/* Summary/Insights Section */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <TrendingUp size={14} className="text-mei-light" />
              Projeção Anual 2026
            </h3>
            <div className="flex items-end gap-3 mb-4">
              <span className="text-3xl font-mono font-black text-mei-dark tracking-tighter">R$ {(current.total * 12).toFixed(2).replace('.', ',')}</span>
              <span className="text-[10px] text-red-500 font-black mb-1 bg-red-50 px-2 py-0.5 rounded-lg border border-red-100">+5.2% vs 2025</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              Considerando o novo salário mínimo projetado, seu custo fixo para manter o CNPJ ativo será de aproximadamente R$ {current.total.toFixed(0)} por mês.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-3xl border-2 border-mei-light border-dashed">
            <h3 className="text-[10px] font-black text-mei-dark uppercase mb-4 tracking-widest flex items-center gap-2">
              <ShieldCheck size={14} />
              Destaque Fiscal
            </h3>
            <p className="text-sm text-mei-dark font-black mb-3">O que garante o pagamento?</p>
            <p className="text-xs text-mei-dark opacity-80 leading-relaxed font-medium mb-6">
              O DAS não é apenas um imposto, é sua contribuição previdenciária. Pagando em dia, você tem direito a auxílios oficiais e aposentadoria.
            </p>
            <a 
              href="https://www.gov.br/pt-br/servicos/pedir-aposentadoria-por-idade-urbana" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-mei-dark border-b-2 border-mei-dark pb-1 hover:gap-3 transition-all"
            >
              Consultar Direitos Inss <ArrowRight size={12} />
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Ação Imediata</h3>
            <a 
              href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/pagamento-de-contribuicao-mensal" 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-4 bg-mei-light text-mei-dark rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:brightness-105 active:scale-95 transition text-center flex items-center justify-center gap-3"
            >
              Emitir Guia DAS Oficial
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Educational Content */}
      <article className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-sm prose-mei">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-mei-bg rounded-xl flex items-center justify-center text-mei-light">
            <Info size={24} />
          </div>
          <h2 className="text-2xl font-serif italic text-mei-dark m-0">Informações Técnicas</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-bold text-mei-dark mb-4 group underline decoration-mei-light decoration-4 underline-offset-4">Composição do DAS MEI</p>
            <p className="text-sm text-gray-600 mb-4">O Simples Nacional unifica o pagamento de 5% do Salário Mínimo para o INSS mais os impostos sobre atividade.</p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-mei-light font-black">01.</span>
                <span className="text-sm text-gray-600"><strong>INSS:</strong> Valor fixo de 5% sobre o salário mínimo (R$ 81,05).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-mei-light font-black">02.</span>
                <span className="text-sm text-gray-600"><strong>ICMS:</strong> R$ 1,00 para comércio e indústria.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-mei-light font-black">03.</span>
                <span className="text-sm text-gray-600"><strong>ISS:</strong> R$ 5,00 para prestadores de serviços.</span>
              </li>
            </ul>
          </div>
          <div className="bg-mei-bg p-8 rounded-3xl border border-gray-100 self-start">
            <h4 className="text-mei-dark font-black text-xs uppercase tracking-widest mb-4 italic">Calendário Fiscal</h4>
            <p className="text-sm text-gray-600 leading-loose">
              O vencimento ocorre no <strong>dia 20 de cada mês</strong>. 
              A falta de pagamento pode acarretar em multas e perda de benefícios.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
