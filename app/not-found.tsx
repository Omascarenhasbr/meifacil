import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-[2.5rem] p-8 md:p-12 text-center shadow-sm">
      <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-800 flex items-center justify-center mx-auto mb-6"><Compass size={30} aria-hidden="true" /></div>
      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-3">Erro 404</p>
      <h1 className="text-4xl font-serif italic text-mei-dark mb-4">Esta página não foi encontrada</h1>
      <p className="text-gray-600 leading-relaxed mb-8">O endereço pode ter mudado. Volte ao início para escolher sua jornada ou use a central de serviços oficiais.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="bg-mei-dark text-white rounded-xl px-6 py-3 text-sm font-bold inline-flex items-center gap-2"><ArrowLeft size={16} aria-hidden="true" />Voltar ao início</Link>
        <Link href="/servicos-oficiais" className="bg-green-50 text-green-900 border border-green-200 rounded-xl px-6 py-3 text-sm font-bold">Serviços oficiais</Link>
      </div>
    </section>
  );
}
