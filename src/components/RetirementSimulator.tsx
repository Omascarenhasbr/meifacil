/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { UserRound, Heart, Info, ChevronRight } from 'lucide-react';

export const RetirementSimulator = () => {
  const [gender, setGender] = useState<'M' | 'F'>('M');
  const [birthYear, setBirthYear] = useState(1985);
  const [startYear, setStartYear] = useState(new Date().getFullYear() - 5);
  
  const currentYear = 2026;
  const age = Math.max(0, currentYear - birthYear);
  
  const yearsContributed = Math.max(0, currentYear - startYear);
  
  const minAge = gender === 'M' ? 65 : 62;
  const minContrib = gender === 'M' ? 20 : 15;

  const yearsRemAge = Math.max(0, minAge - age);
  const yearsRemContrib = Math.max(0, minContrib - yearsContributed);
  const remaining = Math.max(yearsRemAge, yearsRemContrib);

  const canRetire = age >= minAge && yearsContributed >= minContrib;

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn pb-20">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-serif italic text-mei-dark mb-4">Simulador de Aposentadoria MEI</h1>
        <p className="text-gray-500 font-medium">Calcule seu horizonte previdenciário com base nas regras vigentes de 2026.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-between">
          <div className="space-y-10">
            <div>
              <label className="text-[10px] font-black text-gray-400 block mb-3 uppercase tracking-widest text-center italic">Perfil do Contribuinte</label>
              <div className="flex gap-4">
                <button 
                  onClick={() => setGender('M')}
                  className={`flex-1 py-5 rounded-2xl font-black text-xs uppercase tracking-widest border-2 transition shadow-sm ${gender === 'M' ? 'border-mei-dark bg-mei-bg text-mei-dark' : 'border-gray-50 text-gray-300'}`}
                >
                  Masculino
                </button>
                <button 
                  onClick={() => setGender('F')}
                  className={`flex-1 py-5 rounded-2xl font-black text-xs uppercase tracking-widest border-2 transition shadow-sm ${gender === 'F' ? 'border-mei-dark bg-mei-bg text-mei-dark' : 'border-gray-50 text-gray-300'}`}
                >
                  Feminino
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-black text-mei-dark block mb-2 uppercase tracking-widest italic">Ano de Nascimento</label>
                <input 
                  type="number" 
                  min="1940"
                  max="2010"
                  className="w-full p-5 border-2 rounded-2xl text-2xl font-mono font-black text-center bg-mei-bg border-gray-50 focus:border-mei-dark outline-none transition-all"
                  value={birthYear}
                  onChange={e => setBirthYear(Math.min(currentYear, Number(e.target.value)))}
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-mei-dark block mb-2 uppercase tracking-widest italic">Início da Contribuição</label>
                <input 
                  type="number" 
                  min="1960"
                  max="2026"
                  className="w-full p-5 border-2 rounded-2xl text-2xl font-mono font-black text-center bg-mei-bg border-gray-50 focus:border-mei-dark outline-none transition-all"
                  value={startYear}
                  onChange={e => setStartYear(Math.min(currentYear, Number(e.target.value)))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-mei-dark text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-110 transition-transform">
               <UserRound className="w-48 h-48" />
            </div>
            
            <span className="text-[10px] font-black text-mei-light uppercase underline decoration-mei-light decoration-2 underline-offset-8 mb-8 tracking-[0.2em] relative z-10 italic">Tempo Faltante Estimado</span>
            <motion.div 
              key={`${gender}-${birthYear}-${startYear}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-8xl font-mono font-black mb-4 relative z-10 tracking-tighter"
            >
              {canRetire ? 'OK' : remaining}
            </motion.div>
            <p className="text-xl font-bold text-mei-light relative z-10 uppercase tracking-widest">
              {canRetire ? 'Aptidão Alcançada' : 'Anos para Descanso'}
            </p>
            
            <div className="w-full grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-green-900 relative z-10">
              <div className="text-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2 opacity-60">Idade Atual</span>
                <p className="text-2xl font-mono font-black">{age} <span className="text-xs">anos</span></p>
              </div>
              <div className="text-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2 opacity-60">Contribuição</span>
                <p className="text-2xl font-mono font-black">{yearsContributed} <span className="text-xs">anos</span></p>
              </div>
            </div>
          </div>

          <div className={`p-8 rounded-3xl border flex gap-6 items-start transition-all ${canRetire ? 'bg-green-50 border-green-100' : 'bg-white border-gray-100'}`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${canRetire ? 'bg-mei-light text-mei-dark' : 'bg-mei-bg text-mei-light'}`}>
              <Heart className="w-7 h-7" />
            </div>
            <div>
              <p className="font-black text-mei-dark uppercase text-xs tracking-widest mb-1 italic">Diagnóstico Previdenciário</p>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                {canRetire 
                 ? 'Você já cumpre os requisitos mínimos de idade e contribuição para solicitar sua aposentadoria por idade.' 
                 : `Sua previsão de faturamento previdenciário é atingir a idade mínima aos ${minAge} anos com pelo menos ${minContrib} anos pagos.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <article className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm prose-mei">
        <div className="flex items-center gap-2 mb-6">
          <Info className="text-mei-light w-6 h-6" />
          <h2 className="text-2xl font-bold text-mei-dark m-0">Regras da Aposentadoria MEI</h2>
        </div>
        <p>A contribuição do MEI (5% do mínimo) dá direito apenas à **Aposentadoria por Idade**. Você não pode se aposentar apenas por tempo de contribuição como MEI padrão.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
             <h4 className="font-bold text-mei-dark mb-2 flex items-center gap-2"><ChevronRight className="w-4 h-4 text-mei-light"/> REGRAS PARA MULHERES</h4>
             <ul className="text-xs space-y-2 font-medium">
                <li>Idade mínima: 62 anos</li>
                <li>Tempo de contribuição: 15 anos (180 meses)</li>
             </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
             <h4 className="font-bold text-mei-dark mb-2 flex items-center gap-2"><ChevronRight className="w-4 h-4 text-mei-light"/> REGRAS PARA HOMENS</h4>
             <ul className="text-xs space-y-2 font-medium">
                <li>Idade mínima: 65 anos</li>
                <li>Tempo de contribuição: 20 anos (para novos inscritos)</li>
             </ul>
          </div>
        </div>
      </article>
    </div>
  );
};
