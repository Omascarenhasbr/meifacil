/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, TrendingUp, ShieldCheck, ArrowRight, Info, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';

const ACTIVITIES = [
  { value: 'servicos', label: 'Prestação de Serviços', sublabel: 'ISS incluso', das: 86.05, inss: 81.05, tax: 5.00, taxLabel: 'ISS' },
  { value: 'comercio', label: 'Comércio / Indústria', sublabel: 'ICMS incluso', das: 82.05, inss: 81.05, tax: 1.00, taxLabel: 'ICMS' },
  { value: 'ambos', label: 'Comércio + Serviços', sublabel: 'ICMS + ISS', das: 87.05, inss: 81.05, tax: 6.00, taxLabel: 'ICMS + ISS' },
];

const TEMPO_OPTIONS = [
  { value: '12', label: 'Ativo há mais de 1 ano' },
  { value: '11', label: '11 meses' },
  { value: '10', label: '10 meses' },
  { value: '9', label: '9 meses' },
  { value: '8', label: '8 meses' },
  { value: '7', label: '7 meses' },
  { value: '6', label: '6 meses' },
  { value: '5', label: '5 meses' },
  { value: '4', label: '4 meses' },
  { value: '3', label: '3 meses' },
  { value: '2', label: '2 meses' },
  { value: '1', label: '1 mês (recém aberto)' },
];

const MEI_LIMIT_ANNUAL = 81000;

function parseBRL(val: string): number {
  const cleaned = val.replace(/\./g, '').replace(',', '.');
  return parseFloat(cleaned) || 0;
}

function formatBRL(val: number): string {
  return val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function maskBRL(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (!digits) return '';
  const num = parseInt(digits, 10) / 100;
  return num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

interface Result {
  dasMensal: number;
  inss: number;
  tax: number;
  taxLabel: string;
  dasAnual: number;
  limiteProportional: number;
  receitaAnual: number;
  receitaMes: number;
  percentUsed: number;
  remainingLimit: number;
  mesesRestantes: number | null;
  status: 'ok' | 'atencao' | 'perigo';
  mesesAtivo: number;
}

export const DasCalculator = () => {
  const [activity, setActivity] = useState('servicos');
  const [tempo, setTempo] = useState('12');
  const [receita12Raw, setReceita12Raw] = useState('');
  const [receitaMesRaw, setReceitaMesRaw] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [calculated, setCalculated] = useState(false);

  const activityData = ACTIVITIES.find(a => a.value === activity)!;

  function calcular() {
    const mesesAtivo = parseInt(tempo, 10);
    const receitaAnual = parseBRL(receita12Raw);
    const receitaMes = parseBRL(receitaMesRaw);
    const limiteProportional = mesesAtivo >= 12 ? MEI_LIMIT_ANNUAL : (MEI_LIMIT_ANNUAL / 12) * mesesAtivo;
    const percentUsed = limiteProportional > 0 ? Math.min((receitaAnual / limiteProportional) * 100, 100) : 0;
    const remainingLimit = Math.max(limiteProportional - receitaAnual, 0);

    let mesesRestantes: number | null = null;
    if (receitaMes > 0 && remainingLimit > 0) {
      mesesRestantes = Math.floor(remainingLimit / receitaMes);
    }

    let status: 'ok' | 'atencao' | 'perigo' = 'ok';
    if (percentUsed >= 100) status = 'perigo';
    else if (percentUsed >= 75) status = 'atencao';

    setResult({
      dasMensal: activityData.das,
      inss: activityData.inss,
      tax: activityData.tax,
      taxLabel: activityData.taxLabel,
      dasAnual: activityData.das * 12,
      limiteProportional,
      receitaAnual,
      receitaMes,
      percentUsed,
      remainingLimit,
      mesesRestantes,
      status,
      mesesAtivo,
    });
    setCalculated(true);
  }

  function resetar() {
    setResult(null);
    setCalculated(false);
    setReceita12Raw('');
    setReceitaMesRaw('');
    setActivity('servicos');
    setTempo('12');
  }

  const statusConfig = {
    ok: { color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', bar: 'bg-emerald-500', icon: CheckCircle2, label: 'Dentro do limite' },
    atencao: { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', bar: 'bg-amber-500', icon: AlertTriangle, label: 'Atenção: acima de 75%' },
    perigo: { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', bar: 'bg-red-500', icon: AlertTriangle, label: 'Limite atingido!' },
  };

  return (
    <div className="space-y-8 animate-fadeIn">

      {/* ── FORM CARD ── */}
      <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-mei-bg rounded-xl flex items-center justify-center">
            <Calculator size={22} className="text-mei-dark" />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Preencha os dados</p>
            <h3 className="text-lg font-serif italic text-mei-dark leading-tight">Calculadora DAS MEI 2026</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Atividade */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Atividade</label>
            <div className="relative">
              <select
                value={activity}
                onChange={e => setActivity(e.target.value)}
                className="w-full appearance-none bg-gray-50 border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-gray-800 outline-none focus:border-mei-light transition-all cursor-pointer pr-10"
              >
                {ACTIVITIES.map(a => (
                  <option key={a.value} value={a.value}>{a.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 font-medium pl-1">{activityData.sublabel} · R$ {formatBRL(activityData.das)}/mês</p>
          </div>

          {/* Tempo de atividade */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Tempo de atividade</label>
            <div className="relative">
              <select
                value={tempo}
                onChange={e => setTempo(e.target.value)}
                className="w-full appearance-none bg-gray-50 border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-gray-800 outline-none focus:border-mei-light transition-all cursor-pointer pr-10"
              >
                {TEMPO_OPTIONS.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 font-medium pl-1">
              Limite proporcional: R$ {formatBRL(parseInt(tempo) >= 12 ? MEI_LIMIT_ANNUAL : (MEI_LIMIT_ANNUAL / 12) * parseInt(tempo))}
            </p>
          </div>

          {/* Receita últimos 12 meses */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Receita últimos 12 meses</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-black text-gray-400">R$</span>
              <input
                type="text"
                inputMode="numeric"
                value={receita12Raw}
                onChange={e => setReceita12Raw(maskBRL(e.target.value))}
                placeholder="0,00"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl pl-10 pr-4 py-3.5 text-sm font-bold text-gray-800 outline-none focus:border-mei-light transition-all"
              />
            </div>
            <p className="text-[10px] text-gray-400 font-medium pl-1">Faturamento bruto acumulado</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* Receita mês atual */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Receita mês atual</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-black text-gray-400">R$</span>
              <input
                type="text"
                inputMode="numeric"
                value={receitaMesRaw}
                onChange={e => setReceitaMesRaw(maskBRL(e.target.value))}
                placeholder="0,00"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl pl-10 pr-4 py-3.5 text-sm font-bold text-gray-800 outline-none focus:border-mei-light transition-all"
              />
            </div>
            <p className="text-[10px] text-gray-400 font-medium pl-1">Usado para projetar meses restantes</p>
          </div>

          {/* Calcular button */}
          <div className="md:col-span-2 flex gap-3">
            <button
              onClick={calcular}
              className="flex-1 py-4 bg-mei-dark text-white rounded-2xl font-black text-sm uppercase tracking-[0.15em] shadow-lg hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-3"
            >
              <Calculator size={18} />
              Calcular DAS
            </button>
            {calculated && (
              <button
                onClick={resetar}
                className="px-5 py-4 bg-gray-100 text-gray-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-200 active:scale-95 transition flex items-center gap-2"
              >
                <RefreshCw size={15} />
                Limpar
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── RESULTS ── */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-12 gap-6">

              {/* DAS Value Card */}
              <div className="col-span-12 lg:col-span-5">
                <div className="bg-mei-dark text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-between group">
                  <div className="relative z-10">
                    <p className="text-[10px] font-black text-mei-light uppercase mb-2 tracking-[0.2em] italic">Valor DAS Mensal</p>
                    <div className="text-6xl md:text-7xl font-mono tracking-tighter mb-1 group-hover:scale-105 transition-transform duration-500 origin-left">
                      R$ {formatBRL(result.dasMensal)}
                    </div>
                    <p className="text-xs text-green-300 font-medium opacity-80">Vence todo dia 20 do mês</p>
                  </div>
                  <div className="border-t border-green-800 pt-6 mt-6 relative z-10">
                    <p className="text-[10px] font-black uppercase text-mei-light mb-3 italic tracking-widest">Composição</p>
                    <ul className="text-xs space-y-2 font-bold">
                      <li className="flex justify-between font-mono"><span>INSS (5% s/ sal. mínimo)</span><span>R$ {formatBRL(result.inss)}</span></li>
                      <li className="flex justify-between font-mono"><span>{result.taxLabel}</span><span>R$ {formatBRL(result.tax)}</span></li>
                      <li className="flex justify-between font-mono border-t border-green-800 pt-2 text-mei-light"><span>Total mensal</span><span>R$ {formatBRL(result.dasMensal)}</span></li>
                      <li className="flex justify-between font-mono opacity-70"><span>Total anual (12×)</span><span>R$ {formatBRL(result.dasAnual)}</span></li>
                    </ul>
                  </div>
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-mei-light opacity-5 blur-3xl rounded-full" />
                </div>
              </div>

              {/* Limit Status */}
              <div className="col-span-12 lg:col-span-7 space-y-6">

                {/* Progress Card */}
                {result.receitaAnual > 0 && (() => {
                  const s = statusConfig[result.status];
                  const StatusIcon = s.icon;
                  return (
                    <div className={`bg-white p-8 rounded-3xl border-2 ${s.border} shadow-sm`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                          <TrendingUp size={14} className={s.color} />
                          Limite MEI 2026
                        </h3>
                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase ${s.bg} ${s.color} border ${s.border}`}>
                          <StatusIcon size={10} />
                          {s.label}
                        </div>
                      </div>

                      {/* Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-[10px] font-black text-gray-500 mb-2">
                          <span>R$ {formatBRL(result.receitaAnual)} faturado</span>
                          <span>{result.percentUsed.toFixed(1)}%</span>
                        </div>
                        <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${result.percentUsed}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className={`h-full rounded-full ${s.bar}`}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] font-medium text-gray-400 mt-2">
                          <span>R$ 0</span>
                          <span>Limite: R$ {formatBRL(result.limiteProportional)}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-2xl p-4">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Saldo disponível</p>
                          <p className="text-xl font-mono font-black text-mei-dark">R$ {formatBRL(result.remainingLimit)}</p>
                        </div>
                        {result.mesesRestantes !== null && (
                          <div className="bg-gray-50 rounded-2xl p-4">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Meses restantes</p>
                            <p className="text-xl font-mono font-black text-mei-dark">
                              {result.mesesRestantes === 0 ? '< 1 mês' : `${result.mesesRestantes} ${result.mesesRestantes === 1 ? 'mês' : 'meses'}`}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}

                {/* Projeção + Ação */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <TrendingUp size={13} className="text-mei-light" /> Projeção anual
                    </h3>
                    <p className="text-2xl font-mono font-black text-mei-dark">R$ {formatBRL(result.dasAnual)}</p>
                    <p className="text-[10px] text-gray-400 font-medium mt-1">em DAS durante 12 meses</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-3xl border-2 border-mei-light border-dashed flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck size={14} className="text-mei-dark" />
                      <h3 className="text-[10px] font-black text-mei-dark uppercase tracking-widest">O DAS garante</h3>
                    </div>
                    <ul className="text-[10px] text-mei-dark font-bold space-y-1 opacity-80">
                      <li>✓ Aposentadoria por idade</li>
                      <li>✓ Auxílio-doença (após 12 meses)</li>
                      <li>✓ Salário-maternidade</li>
                    </ul>
                  </div>
                </div>

                {/* CTA */}
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── INFO CARD ── */}
      <article className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-mei-bg rounded-xl flex items-center justify-center text-mei-light">
            <Info size={22} />
          </div>
          <h2 className="text-2xl font-serif italic text-mei-dark m-0">Informações Técnicas</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="font-bold text-mei-dark mb-4 underline decoration-mei-light decoration-4 underline-offset-4">Composição do DAS MEI</p>
            <p className="text-sm text-gray-600 mb-4">O Simples Nacional unifica o pagamento de 5% do Salário Mínimo para o INSS mais os impostos sobre atividade.</p>
            <ul className="space-y-4">
              {[
                { n: '01', text: <><strong>INSS:</strong> Valor fixo de 5% sobre o salário mínimo (R$ 81,05).</> },
                { n: '02', text: <><strong>ICMS:</strong> R$ 1,00 para comércio e indústria.</> },
                { n: '03', text: <><strong>ISS:</strong> R$ 5,00 para prestadores de serviços.</> },
              ].map(i => (
                <li key={i.n} className="flex gap-4">
                  <span className="text-mei-light font-black">{i.n}.</span>
                  <span className="text-sm text-gray-600">{i.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-mei-bg p-8 rounded-3xl border border-gray-100 self-start">
            <h4 className="text-mei-dark font-black text-xs uppercase tracking-widest mb-4 italic">Calendário Fiscal</h4>
            <p className="text-sm text-gray-600 leading-loose">
              O vencimento ocorre no <strong>dia 20 de cada mês</strong>.
              A falta de pagamento pode acarretar em multas e perda de benefícios como auxílio-doença e salário-maternidade.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
