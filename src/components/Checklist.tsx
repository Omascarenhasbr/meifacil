/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckSquare, AlertTriangle, Info, Calendar, Bell } from 'lucide-react';

export const Checklist = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Pagamento do Mensal (DAS)', desc: 'Vence todo dia 20. Garante sua previdência.', done: false, priority: 'high' },
    { id: 2, title: 'Preencher Relatório Mensal', desc: 'Anote o faturamento bruto total do mês anterior.', done: false, priority: 'medium' },
    { id: 3, title: 'DASN-SIMEI (Declaração Anual)', desc: 'Prazo até 31 de maio. Uma vez ao ano.', done: false, priority: 'high' },
    { id: 4, title: 'Emitir NF para clientes PJ', desc: 'Sempre obrigatório vender para outras empresas.', done: false, priority: 'medium' },
    { id: 5, title: 'Conferir Limite de Faturamento', desc: 'Monitorar para não passar dos R$ 81 mil/ano.', done: false, priority: 'medium' },
    { id: 6, title: 'Regularizar Funcionário', desc: 'Geração de guia de FGTS e folha (se houver).', done: false, priority: 'low' }
  ]);

  useEffect(() => {
    const saved = localStorage.getItem('hub_mei_tasks_v2');
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('hub_mei_tasks_v2', JSON.stringify(tasks));
  }, [tasks]);

  const toggle = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const completedCount = tasks.filter(t => t.done).length;
  const progress = (completedCount / tasks.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-mei-dark mb-4">Checklist de Obrigações</h1>
        <p className="text-gray-600">Não deixe nada passar. Checklist mensal de conformidade para seu MEI.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
            <AnimatePresence>
              {completedCount === tasks.length && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-mei-dark/95 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center text-white"
                >
                  <div className="w-20 h-20 bg-mei-light rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <CheckSquare size={40} className="text-mei-dark" />
                  </div>
                  <h3 className="text-3xl font-serif italic mb-2">Tudo em Dia!</h3>
                  <p className="text-sm font-medium text-green-200 opacity-80 max-w-xs mb-8 italic">Você concluiu todas as obrigações para este período conforme as normas vigentes de 2026.</p>
                  <button 
                    onClick={() => setTasks(tasks.map(t => ({ ...t, done: false })))}
                    className="px-8 py-4 bg-white text-mei-dark font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-green-50 transition-all active:scale-95"
                  >
                    Resetar Checklist
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-gray-50 bg-opacity-50">
               <div>
                  <h3 className="font-bold text-xl text-mei-dark">Tarefas de Controle</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Sincronizado com regras 2026</p>
               </div>
               <div className="text-right">
                  <div className="text-2xl font-black text-mei-light">{completedCount}/{tasks.length}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Concluídas</div>
               </div>
            </div>

            <div className="w-full h-1 bg-gray-100">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-mei-light shadow-[0_0_10px_rgba(82,183,136,0.5)]"
              />
            </div>

            <div className="p-4 md:p-8 space-y-4">
              {tasks.map((task) => (
                <motion.div 
                  key={task.id}
                  onClick={() => toggle(task.id)}
                  whileTap={{ scale: 0.98 }}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                    task.done 
                    ? 'bg-green-50 border-mei-light opacity-60' 
                    : 'bg-white border-gray-100 hover:border-mei-light shadow-sm'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    task.done ? 'bg-mei-light border-mei-light rotate-0' : 'border-gray-200 rotate-45'
                  }`}>
                    {task.done && <CheckSquare className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-bold transition-all ${task.done ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                        {task.title}
                      </h4>
                      {task.priority === 'high' && !task.done && (
                        <span className="text-[8px] font-bold px-2 py-0.5 bg-red-100 text-red-600 rounded-full uppercase">Alta Prioridade</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{task.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-6">
          <div className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
              <Bell className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-red-800 leading-tight">DASN-SIMEI 2026</h4>
            <p className="text-sm text-red-700 leading-relaxed font-medium">O prazo final para declarar seu faturamento bruto é **31 de maio**. A não entrega gera multa e bloqueio do DAS.</p>
            <a href="https://www.gov.br/mei" target="_blank" rel="noreferrer" className="block text-center py-3 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 transition">Portal Oficial</a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
             <Calendar className="text-mei-light w-8 h-8" />
             <h4 className="font-bold text-mei-dark">Agenda do MEI</h4>
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-mei-light" />
                   <span className="text-xs font-medium text-gray-600">Todo dia 20: Vencimento DAS</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-gray-300" />
                   <span className="text-xs font-medium text-gray-600">Jan-Mai: Declaração Anual</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-gray-300" />
                   <span className="text-xs font-medium text-gray-600">Mensal: Relatório de Vendas</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
