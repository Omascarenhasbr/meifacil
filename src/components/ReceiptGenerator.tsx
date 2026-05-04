/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Receipt, Printer, Download, User, Building, FileText, Zap } from 'lucide-react';

export const ReceiptGenerator = () => {
  const [data, setData] = useState({
    emissor: '',
    cnpj: '',
    cliente: '',
    valor: '',
    descricao: '',
    data: new Date().toLocaleDateString('pt-BR')
  });

  const update = (field: string, val: string) => setData(prev => ({ ...prev, [field]: val }));

  const handlePrint = () => {
    if (!data.emissor || !data.cliente || !data.valor) {
      alert('Por favor, preencha pelo menos o emissor, cliente e valor antes de imprimir.');
      return;
    }
    window.print();
  };

  const handleWhatsApp = () => {
    if (!data.emissor || !data.cliente || !data.valor) {
      alert('Preencha os dados básicos para gerar o link de compartilhamento.');
      return;
    }
    const text = encodeURIComponent(
      `*RECIBO DE PAGAMENTO*\n\n` +
      `*Emissor:* ${data.emissor}\n` +
      `*Cliente:* ${data.cliente}\n` +
      `*Valor:* R$ ${data.valor}\n` +
      `*Data:* ${data.data}\n` +
      `*Serviço:* ${data.descricao || 'Prestação de serviços'}\n\n` +
      `_Gerado por Hub MEI 2026_`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleReset = () => {
    if (confirm('Deseja limpar todos os campos do recibo?')) {
      setData({
        emissor: '',
        cnpj: '',
        cliente: '',
        valor: '',
        descricao: '',
        data: new Date().toLocaleDateString('pt-BR')
      });
    }
  };

  return (
    <div className="animate-fadeIn max-w-4xl mx-auto space-y-8 pb-20">
      <div className="no-print space-y-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-serif italic text-mei-dark mb-2">Emissor de Recibo Profissional</h1>
          <p className="text-gray-500 font-medium">Documente seus serviços de forma elegante e técnica em segundos.</p>
        </div>
      </div>

      <div className="no-print bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 md:col-span-2">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2 border-b border-gray-50 pb-4">
            <User size={14} className="text-mei-light" />
            Dados do Emissor (Credor)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-mei-dark block ml-1 uppercase tracking-widest italic">Seu Nome ou Razão Social</label>
              <input 
                className="w-full p-4 border-2 rounded-2xl text-sm font-bold bg-mei-bg border-gray-100 focus:border-mei-dark outline-none transition-all" 
                placeholder="Ex: João da Silva MEI"
                value={data.emissor} onChange={e => update('emissor', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-mei-dark block ml-1 uppercase tracking-widest italic">CNPJ ou CPF</label>
              <input 
                className="w-full p-4 border-2 rounded-2xl text-sm font-bold bg-mei-bg border-gray-100 focus:border-mei-dark outline-none transition-all" 
                placeholder="00.000.000/0001-00"
                value={data.cnpj} onChange={e => update('cnpj', e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6 md:col-span-2">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2 border-b border-gray-50 pb-4">
            <Building size={14} className="text-mei-light" />
            Dados do Recebimento (Devedor)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-mei-dark block ml-1 uppercase tracking-widest italic">Cliente (Pagador)</label>
              <input 
                className="w-full p-4 border-2 rounded-2xl text-sm font-bold bg-mei-bg border-gray-100 focus:border-mei-dark outline-none transition-all" 
                placeholder="Nome da pessoa ou empresa"
                value={data.cliente} onChange={e => update('cliente', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-mei-dark block ml-1 uppercase tracking-widest italic">Valor Líquido (R$)</label>
              <input 
                className="w-full p-4 border-2 rounded-2xl text-sm font-bold bg-mei-bg border-gray-100 focus:border-mei-dark outline-none transition-all" 
                placeholder="0,00"
                value={data.valor} onChange={e => update('valor', e.target.value)}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black text-mei-dark block ml-1 uppercase tracking-widest italic">Descrição do Serviço ou Produto</label>
              <textarea 
                className="w-full p-4 border-2 rounded-2xl text-sm font-bold bg-mei-bg border-gray-100 h-28 focus:border-mei-dark outline-none transition-all" 
                placeholder="Descreva detalhadamente o serviço prestado..."
                value={data.descricao} onChange={e => update('descricao', e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 pt-6 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handlePrint}
            className="flex-1 bg-mei-dark text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-black transition shadow-xl active:scale-95 text-xs uppercase tracking-[0.2em]"
          >
            <Printer size={18} />
            Imprimir ou Gerar PDF
          </button>
          <button 
            onClick={handleWhatsApp}
            className="flex-1 bg-green-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-green-700 transition shadow-xl active:scale-95 text-xs uppercase tracking-[0.2em]"
          >
            <Zap size={18} />
            Enviar via WhatsApp
          </button>
          <button 
            onClick={handleReset}
            className="px-8 bg-gray-100 text-gray-500 font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-200 transition text-xs uppercase tracking-widest"
          >
            Limpar
          </button>
        </div>
      </div>

      <div className="no-print flex items-center gap-3 bg-blue-50 p-6 rounded-3xl border border-blue-100">
        <FileText className="text-blue-500 shrink-0" />
        <p className="text-xs text-blue-700 font-medium leading-relaxed">
          <strong>Dica Técnica:</strong> Ao clicar em imprimir, escolha a opção "Salvar como PDF" no destino da impressora para gerar o arquivo digital.
        </p>
      </div>

      {/* Recibo para Impressão - Hidden normally, shown during print */}
      <div id="receipt-printable" className="hidden print:block bg-white p-12 m-auto max-w-[210mm] min-h-[148mm] border-2 border-black">
        <div className="flex justify-between items-center border-b-[12px] border-black pb-8 mb-12">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center">
                <Receipt size={32} />
             </div>
             <h2 className="text-6xl font-black uppercase tracking-tighter italic">Recibo</h2>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black text-gray-500 block mb-1 uppercase tracking-widest">TOTAL</span>
            <span className="text-5xl font-mono font-black">R$ {data.valor || '0,00'}</span>
          </div>
        </div>

        <div className="space-y-10 leading-[1.8] text-2xl text-black font-medium">
          <p>
            Recebi(emos) de <strong className="border-b border-black inline-block px-2 min-w-[300px]">{data.cliente || '(____________________________________)'}</strong>, 
          </p>
          <p>
            a quantia de <strong>R$ {data.valor || '0,00'}</strong> referente à prestação de serviços de: 
            <br />
            <span className="border-b border-gray-300 block py-4 min-h-[100px] italic leading-tight">
              {data.descricao || '_________________________________________________________________________________'}
            </span>
          </p>
          
          <p className="text-lg italic text-gray-600 pt-10">Damos por este o presente recibo como prova de plena quitação.</p>
        </div>
        
        <div className="mt-24">
          <div className="flex justify-between items-end gap-16">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">DATA DE EMISSÃO</span>
              <p className="text-3xl font-black border-b-2 border-black pb-2">{data.data}</p>
            </div>
            <div className="flex-grow flex flex-col items-center">
              <div className="w-full border-t-2 border-black pt-6 text-center">
                <p className="font-black text-3xl uppercase tracking-tighter mb-1">{data.emissor || '____________________________________'}</p>
                <p className="text-base font-bold text-gray-600">CNPJ/CPF: {data.cnpj || '____.____.____/____-____'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          /* Global hide of everything */
          body * { visibility: hidden !important; }
          /* Show only the printable area and its content */
          #receipt-printable, #receipt-printable * { visibility: visible !important; }
          #receipt-printable { 
            display: block !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            padding: 40px !important;
            border: 2px solid black !important;
            margin: 0 !important;
          }
          /* Ensure backgrounds are printed */
          @page {
            margin: 0;
            size: auto;
          }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
};
