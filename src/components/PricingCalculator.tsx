/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, DollarSign, PieChart, CheckCircle } from 'lucide-react';

export const PricingCalculator = () => {
  const [targetIncome, setTargetIncome] = useState(3000);
  const [expenses, setExpenses] = useState(500);
  const [workHoursPerMonth, setWorkHoursPerMonth] = useState(160);
  const [idlePercent, setIdlePercent] = useState(30);
  const [includeDAS, setIncludeDAS] = useState(true);

  const dashCost = includeDAS ? 86.05 : 0;
  const totalNeed = targetIncome + expenses + dashCost;
  const realHours = workHoursPerMonth * (1 - (idlePercent / 100));
  const hourRate = totalNeed / Math.max(realHours, 1);

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fadeIn">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-mei-dark mb-4">Simulador de Valor por Hora</h1>
        <p className="text-gray-600">Não trabalhe de graça. Saiba exatamente quanto cobrar para ter lucro real.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 space-y-8">
          <div className="space-y-8">
            <h3 className="font-bold text-xl border-b pb-4 flex items-center gap-2">
              <PieChart className="text-mei-light" />
              Parâmetros de Custo
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Quanto você quer de salário limpo? (R$)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none font-bold text-gray-400">R$</span>
                  <input 
                    type="number" 
                    value={targetIncome} 
                    onChange={(e) => setTargetIncome(Number(e.target.value))}
                    className="w-full pl-14 pr-5 py-4 border-2 rounded-2xl text-xl font-bold focus:border-mei-light outline-none border-gray-100 bg-gray-50" 
                  />
                </div>
                <p className="text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-tight">Valor que sobrará no seu bolso após pagar as contas do negócio.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Custos Fixos (R$)</label>
                  <input 
                    type="number" 
                    value={expenses} 
                    onChange={(e) => setExpenses(Number(e.target.value))}
                    className="w-full p-4 border-2 rounded-2xl text-sm font-bold bg-gray-50 border-gray-100" 
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Luz, internet, software, insumos...</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Horas no Mês</label>
                  <input 
                    type="number" 
                    value={workHoursPerMonth} 
                    onChange={(e) => setWorkHoursPerMonth(Number(e.target.value))}
                    className="w-full p-4 border-2 rounded-2xl text-sm font-bold bg-gray-50 border-gray-100" 
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Ex: 8h p/ dia x 20 dias = 160h</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-gray-500 uppercase">Tempo Ocioso / Prospecção ({idlePercent}%)</label>
                  <span className="text-sm font-black text-mei-light">{idlePercent}%</span>
                </div>
                <input 
                  type="range" min="0" max="70" step="5"
                  value={idlePercent} 
                  onChange={(e) => setIdlePercent(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-mei-light border-2 border-white shadow-inner"
                />
                <p className="text-[10px] text-gray-400 mt-2 font-medium">Tempo gasto com reuniões, orçamentos, financeiro e pausas necessárias.</p>
              </div>

              <label className="flex items-center gap-4 p-5 bg-mei-bg rounded-2xl cursor-pointer hover:bg-gray-100 transition border-2 border-gray-100">
                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${includeDAS ? 'bg-mei-light border-mei-light' : 'border-gray-300'}`}>
                  {includeDAS && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
                <input 
                  type="checkbox" 
                  checked={includeDAS} 
                  onChange={(e) => setIncludeDAS(e.target.checked)}
                  className="hidden"
                />
                <span className="text-sm font-bold text-gray-700">Incluir DAS MEI (R$ 86,05) como despesa</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-mei-dark text-white p-10 md:p-14 rounded-3xl shadow-2xl flex flex-col justify-center text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <Clock className="w-32 h-32" />
            </div>
            
            <span className="text-[10px] font-bold text-green-300 uppercase tracking-[0.2em] mb-4">Sua hora de trabalho vale</span>
            <motion.div 
              key={hourRate}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-7xl font-black mb-8 leading-none tracking-tighter"
            >
              R$ {hourRate.toFixed(2).replace('.', ',')}
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6 text-left border-t border-green-800 pt-10">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Por Dia (8h)</span>
                <p className="text-2xl font-bold">R$ {(hourRate * 8).toFixed(2).replace('.', ',')}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Projeto (40h)</span>
                <p className="text-2xl font-bold">R$ {(hourRate * 40).toFixed(2).replace('.', ',')}</p>
              </div>
            </div>
          </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <h4 className="font-bold text-lg flex items-center gap-2"><DollarSign className="w-5 h-5 text-mei-light" /> Detalhamento do Cálculo</h4>
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-medium">
          <p>Para sobrar R$ {targetIncome.toLocaleString('pt-BR')} limpos no seu bolso, considerando {workHoursPerMonth}h mensais, você precisa faturar:</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-mei-light" /> Salário desejado:</span>
              <span className="font-bold text-gray-800">R$ {targetIncome.toLocaleString('pt-BR')}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-mei-light" /> Custos Operacionais + DAS:</span>
              <span className="font-bold text-gray-800">R$ {(expenses + dashCost).toLocaleString('pt-BR')}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-mei-bg rounded-xl border border-mei-light">
              <span className="font-bold text-mei-dark">Faturamento Mínimo Necessário:</span>
              <span className="font-black text-mei-dark">R$ {totalNeed.toLocaleString('pt-BR')}</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">
            Horas produtivas (após {idlePercent}% ociosidade): {realHours.toFixed(1)}h/mês
          </p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};
