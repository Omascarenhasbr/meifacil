import Link from 'next/link';
import { ArrowRight, BadgeCheck, Calculator, Lightbulb, MapPinCheck, ShieldCheck } from 'lucide-react';
import { businessIdeas } from '../data/businessIdeas';

export function BusinessIdeasHub() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <header className="bg-mei-dark text-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
        <div className="relative z-10 max-w-3xl">
          <p className="text-[10px] text-mei-light font-black uppercase tracking-[0.25em] mb-4">Da ideia ao primeiro cliente</p>
          <h1 className="text-4xl md:text-5xl font-serif italic leading-tight mb-5">Ideias de negócios para validar antes de abrir o CNPJ</h1>
          <p className="text-green-100 text-lg leading-relaxed">Guias para transformar uma habilidade em uma oferta pequena, buscar demanda paga e conferir se a ocupação pode ser MEI — sem promessa de renda ou investimento milagroso.</p>
        </div>
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-mei-light/10" aria-hidden="true" />
      </header>

      <section className="grid md:grid-cols-3 gap-4" aria-label="Como os guias funcionam">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-3">
          <Lightbulb className="text-green-700 shrink-0" aria-hidden="true" />
          <div><h2 className="font-bold text-mei-dark mb-1">Oferta mínima</h2><p className="text-sm text-gray-600 leading-relaxed">Um serviço específico para testar sem começar com estrutura grande.</p></div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-3">
          <BadgeCheck className="text-green-700 shrink-0" aria-hidden="true" />
          <div><h2 className="font-bold text-mei-dark mb-1">Demanda paga</h2><p className="text-sm text-gray-600 leading-relaxed">Metas de vendas reais, não curtidas ou respostas de quem não compraria.</p></div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-3">
          <MapPinCheck className="text-green-700 shrink-0" aria-hidden="true" />
          <div><h2 className="font-bold text-mei-dark mb-1">Enquadramento</h2><p className="text-sm text-gray-600 leading-relaxed">Ocupação e CNAE de referência, com alerta para exigências locais.</p></div>
        </div>
      </section>

      <section aria-labelledby="guias-de-negocios">
        <div className="px-2 mb-5">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.25em] mb-2">Escolha pelo que você já sabe fazer</p>
          <h2 id="guias-de-negocios" className="text-3xl font-serif italic text-mei-dark">Seis ideias com plano de validação</h2>
          <p className="text-sm text-gray-600 mt-2 max-w-3xl leading-relaxed">Cada guia parte de uma ocupação permitida ao MEI, mas você deve confirmar a descrição vigente e as licenças do seu município antes de formalizar.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {businessIdeas.map((idea) => (
            <article key={idea.slug} className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col hover:border-mei-light hover:shadow-xl transition-all">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-green-800 bg-green-50 border border-green-100 px-3 py-1 rounded-full">{idea.category}</span>
                <span className="text-[10px] font-bold text-gray-400">{idea.readTime} min</span>
              </div>
              <h3 className="text-xl font-bold text-mei-dark leading-snug mb-3">{idea.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{idea.summary}</p>
              <dl className="space-y-3 text-xs mb-6">
                <div><dt className="font-black uppercase tracking-wider text-gray-400">Cenário de teste</dt><dd className="font-bold text-gray-800 mt-1">{idea.investmentRange}</dd></div>
                <div><dt className="font-black uppercase tracking-wider text-gray-400">Ocupação de referência</dt><dd className="font-bold text-gray-800 mt-1">{idea.occupation.name} · CNAE {idea.occupation.cnae}</dd></div>
                <div><dt className="font-black uppercase tracking-wider text-gray-400">Meta de validação</dt><dd className="text-gray-700 leading-relaxed mt-1">{idea.validationGoal}</dd></div>
              </dl>
              <Link href={`/ideias-de-negocios/${idea.slug}`} className="mt-auto inline-flex items-center justify-between gap-2 bg-green-50 text-green-900 border border-green-200 rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider hover:bg-green-100 transition">
                Abrir plano <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 border border-amber-200 rounded-3xl p-6 md:p-8" aria-labelledby="como-ler-numeros">
        <div className="flex gap-4">
          <ShieldCheck className="text-amber-700 shrink-0" aria-hidden="true" />
          <div>
            <h2 id="como-ler-numeros" className="text-xl font-bold text-amber-950 mb-2">Como usamos os números</h2>
            <p className="text-sm text-amber-950 leading-relaxed mb-4">Os intervalos são cenários editoriais para uma rodada pequena de teste. Não são cotação, promessa de faturamento ou garantia de que a estrutura é suficiente. Preços, capacitação, equipamentos e licenças variam. Faça orçamento local e registre seus próprios dados.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/calculadora-preco-hora-autonomo" className="inline-flex items-center gap-2 text-sm font-black text-amber-950 underline underline-offset-4"><Calculator size={15} /> Calcular meu preço</Link>
              <Link href="/quero-ser-mei" className="inline-flex items-center gap-2 text-sm font-black text-amber-950 underline underline-offset-4">Seguir a jornada do CNPJ <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
