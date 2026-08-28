import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, CalendarCheck, ChevronRight, ExternalLink, Hash, Link as LinkIcon, ShieldCheck, UserRound } from 'lucide-react';
import type { BusinessIdea } from '../data/businessIdeas';
import { getRelatedBusinessIdeas } from '../data/businessIdeas';

function extractH2Headings(html: string) {
  const regex = /<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gi;
  const headings: Array<{ id: string; text: string }> = [];
  let match;
  while ((match = regex.exec(html)) !== null) headings.push({ id: match[1], text: match[2].replace(/<[^>]+>/g, '') });
  return headings;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}

export function BusinessIdeaArticle({ idea }: { idea: BusinessIdea }) {
  const headings = extractH2Headings(idea.content);
  const related = getRelatedBusinessIdeas(idea);

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <Link href="/ideias-de-negocios" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-mei-dark transition-colors mb-6 group">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" /> Voltar para Ideias de Negócios
      </Link>

      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] font-bold px-3 py-1.5 rounded-full border bg-green-50 text-green-800 border-green-200">{idea.category}</span>
              <span className="text-[10px] font-bold text-gray-500">Plano editorial de validação</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif italic text-mei-dark leading-tight mb-6">{idea.title}</h1>
            <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-200">
              <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-bold"><UserRound size={12} className="text-mei-light" /> Equipe Editorial MEI Fácil</span>
              <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-bold"><CalendarCheck size={12} className="text-mei-light" /> Revisado em {formatDate(idea.updatedAt)} · {idea.readTime} min</span>
            </div>
            <p className="mt-6 text-base text-gray-600 leading-relaxed font-medium bg-green-50 border-l-4 border-mei-light pl-5 py-3 rounded-r-xl">{idea.summary}</p>
          </header>

          <section className="grid sm:grid-cols-2 gap-4 mb-8" aria-label="Resumo da ideia">
            <div className="bg-white border border-gray-200 rounded-2xl p-5"><p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-2">Para quem faz sentido</p><p className="text-sm text-gray-700 leading-relaxed">{idea.audience}</p></div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5"><p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-2">Cenário de teste</p><p className="text-sm font-bold text-gray-800 mb-1">{idea.investmentRange}</p><p className="text-xs text-gray-500">Hipótese editorial; faça cotações na sua região.</p></div>
            <div className="sm:col-span-2 bg-mei-dark text-white rounded-2xl p-5">
              <p className="text-[10px] font-black uppercase tracking-wider text-mei-light mb-2">Ocupação de referência</p>
              <p className="font-bold mb-2">{idea.occupation.name} · CNAE {idea.occupation.cnae}</p>
              <p className="text-xs text-green-100 leading-relaxed">{idea.occupation.note}</p>
            </div>
          </section>

          <div className="prose-mei" dangerouslySetInnerHTML={{ __html: idea.content }} />

          <section className="mt-10 p-6 bg-white border border-gray-200 rounded-2xl" aria-labelledby="fontes-da-ideia">
            <h2 id="fontes-da-ideia" className="!mt-0 text-lg! flex items-center gap-2"><LinkIcon size={18} aria-hidden="true" /> Fontes consultadas</h2>
            <p className="text-sm text-gray-500">Ocupações e orientações verificadas na última revisão. Confirme a lista vigente e as regras do seu município.</p>
            <ul className="!mb-0">
              {idea.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-green-700 underline underline-offset-2">{source.name}</a></li>)}
            </ul>
          </section>

          <section className="mt-6 p-6 bg-green-50 border border-green-100 rounded-2xl">
            <div className="flex gap-4"><span className="w-10 h-10 rounded-full bg-mei-dark text-white flex items-center justify-center shrink-0"><ShieldCheck size={18} /></span><div><h2 className="!mt-0 !mb-2 text-base!">Transparência editorial</h2><p className="text-sm !mb-2">Pesquisa, redação e revisão documental realizadas pela Equipe Editorial MEI Fácil. Este conteúdo organiza hipóteses para pesquisa e não garante renda, aprovação como MEI ou licença de funcionamento.</p><Link href="/politica-editorial" className="text-sm font-bold text-green-800 underline underline-offset-2">Conheça nossa política editorial</Link></div></div>
          </section>

          <div className="mt-8 flex flex-wrap gap-2">{idea.tags.map((tag) => <span key={tag} className="text-[10px] font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200 flex items-center gap-1"><Hash size={9} /> {tag}</span>)}</div>
        </article>

        <aside className="hidden lg:block w-72 shrink-0 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm sticky top-20">
            <div className="bg-mei-dark text-white px-5 py-4"><h2 className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2"><BookOpen size={14} className="text-mei-light" /> Neste plano</h2></div>
            <nav className="p-4 space-y-1">{headings.map((heading) => <a key={heading.id} href={`#${heading.id}`} className="flex items-start gap-2 p-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-green-50 hover:text-mei-dark transition-all"><ChevronRight size={12} className="shrink-0 mt-0.5 text-mei-light" /><span>{heading.text}</span></a>)}</nav>
          </div>

          <div className="bg-mei-dark text-white rounded-2xl p-5 shadow-lg">
            <p className="text-[9px] font-black uppercase tracking-widest text-mei-light mb-3">Próximo passo</p>
            <h2 className="font-bold text-base mb-2">{idea.relatedTool.name}</h2>
            <p className="text-green-100/80 text-[11px] leading-relaxed mb-4">Troque o cenário editorial pelos seus custos, horas e margem.</p>
            <Link href={idea.relatedTool.path} className="w-full bg-mei-light text-mei-dark py-2.5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:brightness-110 transition flex items-center justify-center gap-2">Abrir ferramenta <ExternalLink size={11} /></Link>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-mei-dark text-white px-5 py-4"><h2 className="text-[11px] font-black uppercase tracking-widest">Outras ideias</h2></div>
            <div className="p-3 space-y-1">{related.map((item) => <Link key={item.slug} href={`/ideias-de-negocios/${item.slug}`} className="block p-3 rounded-xl hover:bg-green-50 transition"><span className="text-xs font-bold text-gray-700 leading-snug block mb-1">{item.title}</span><span className="text-[10px] text-gray-400 inline-flex items-center gap-1">Abrir plano <ArrowRight size={10} /></span></Link>)}</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
