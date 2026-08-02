import Link from 'next/link';
import { AlertTriangle, ArrowRight, BookOpenCheck, ExternalLink } from 'lucide-react';

export type ToolGuideData = {
  name: string;
  description: string;
  purpose: string;
  steps: string[];
  interpretation: string[];
  limitations: string[];
  nextSteps: Array<{ label: string; href: string; external?: boolean }>;
  sources: Array<{ label: string; href: string }>;
};

export function ToolGuide({ guide }: { guide: ToolGuideData }) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'WebApplication', name: guide.name,
    description: guide.description, applicationCategory: 'FinanceApplication',
    operatingSystem: 'Qualquer navegador moderno', isAccessibleForFree: true, inLanguage: 'pt-BR',
    provider: { '@type': 'Organization', name: 'MEI Fácil', url: 'https://meifacil.blog' }
  };

  return (
    <article className="mt-8 max-w-5xl mx-auto space-y-6" aria-labelledby="guia-da-ferramenta">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="bg-white border border-gray-200 rounded-3xl p-7 md:p-9 shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-green-800">
          <BookOpenCheck aria-hidden="true" size={22} />
          <p className="text-[10px] font-black uppercase tracking-[0.24em]">Entenda antes de decidir</p>
        </div>
        <h2 id="guia-da-ferramenta" className="text-2xl md:text-3xl font-serif italic text-mei-dark mb-4">Como usar este resultado</h2>
        <p className="text-gray-600 leading-relaxed">{guide.purpose}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-white border border-gray-200 rounded-3xl p-7">
          <h2 className="text-xl font-bold text-mei-dark mb-5">Passo a passo</h2>
          <ol className="space-y-4">
            {guide.steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                <span className="shrink-0 w-7 h-7 rounded-full bg-green-100 text-green-800 flex items-center justify-center font-black text-xs">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="bg-white border border-gray-200 rounded-3xl p-7">
          <h2 className="text-xl font-bold text-mei-dark mb-5">Como interpretar</h2>
          <ul className="space-y-4">
            {guide.interpretation.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                <ArrowRight className="shrink-0 mt-0.5 text-mei-light" size={17} aria-hidden="true" /><span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="bg-amber-50 border border-amber-200 rounded-3xl p-7">
        <div className="flex gap-3">
          <AlertTriangle className="shrink-0 text-amber-700" size={22} aria-hidden="true" />
          <div>
            <h2 className="text-lg font-bold text-amber-950 mb-3">O que esta ferramenta não faz</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-amber-950/80 list-disc pl-5">{guide.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="bg-mei-dark text-white rounded-3xl p-7">
          <h2 className="text-xl font-serif italic mb-4">Próximos passos</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {guide.nextSteps.map((item) => item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/15 rounded-xl p-4 text-sm font-bold hover:bg-white/15 transition flex justify-between gap-3">{item.label}<ExternalLink size={16} aria-hidden="true" /></a>
            ) : (
              <Link key={item.href} href={item.href} className="bg-white/10 border border-white/15 rounded-xl p-4 text-sm font-bold hover:bg-white/15 transition flex justify-between gap-3">{item.label}<ArrowRight size={16} aria-hidden="true" /></Link>
            ))}
          </div>
        </div>
        <aside className="bg-white border border-gray-200 rounded-3xl p-7">
          <h2 className="text-lg font-bold text-mei-dark mb-4">Fontes oficiais consultadas</h2>
          <ul className="space-y-3 text-sm">
            {guide.sources.map((source) => (
              <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-green-800 font-bold underline underline-offset-4 inline-flex items-start gap-2">{source.label}<ExternalLink size={14} className="mt-0.5 shrink-0" aria-hidden="true" /></a></li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 leading-relaxed mt-5 pt-5 border-t border-gray-100">Conteúdo educativo revisado em agosto de 2026. Confirme regras aplicáveis ao seu caso no canal responsável.</p>
        </aside>
      </section>
    </article>
  );
}
