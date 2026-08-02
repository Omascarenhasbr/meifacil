import Link from 'next/link';
import { ArrowRight, ExternalLink, Flag, ShieldCheck } from 'lucide-react';

type JourneyStep = {
  title: string;
  description: string;
  href: string;
  action: string;
  external?: boolean;
  note?: string;
};

export function JourneyPage({
  eyebrow,
  title,
  intro,
  checklist,
  steps,
  warning,
  related
}: {
  eyebrow: string;
  title: string;
  intro: string;
  checklist: string[];
  steps: JourneyStep[];
  warning: string;
  related: Array<{ label: string; href: string }>;
}) {
  return (
    <article className="max-w-5xl mx-auto space-y-7">
      <header className="bg-mei-dark text-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
        <div className="relative z-10 max-w-3xl">
          <p className="text-[10px] text-mei-light font-black uppercase tracking-[0.25em] mb-4">{eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-serif italic leading-tight mb-5">{title}</h1>
          <p className="text-green-100 text-lg leading-relaxed">{intro}</p>
        </div>
        <div className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-mei-light/10" aria-hidden="true" />
      </header>

      <section className="bg-white border border-gray-200 rounded-3xl p-7 md:p-9">
        <div className="flex items-center gap-3 mb-5">
          <ShieldCheck className="text-green-700" aria-hidden="true" />
          <h2 className="text-2xl font-serif italic text-mei-dark">Antes de começar</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-3">
          {checklist.map((item) => (
            <li key={item} className="bg-green-50 border border-green-100 rounded-2xl p-4 text-sm leading-relaxed text-green-950 flex gap-3">
              <span className="text-green-600 font-black" aria-hidden="true">✓</span>{item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="passos-da-jornada">
        <div className="px-2 mb-5">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.25em] mb-2">Ordem recomendada</p>
          <h2 id="passos-da-jornada" className="text-3xl font-serif italic text-mei-dark">Sua jornada, etapa por etapa</h2>
        </div>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-white border border-gray-200 rounded-3xl p-6 md:p-7 grid md:grid-cols-[56px_1fr_auto] gap-5 md:items-center">
              <span className="w-12 h-12 rounded-2xl bg-mei-dark text-white flex items-center justify-center font-serif italic text-xl">{index + 1}</span>
              <div>
                <h3 className="text-lg font-bold text-mei-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                {step.note && <p className="text-xs text-amber-800 mt-2 font-bold">{step.note}</p>}
              </div>
              {step.external ? (
                <a href={step.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-50 text-green-900 border border-green-200 rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider hover:bg-green-100 transition">
                  {step.action}<ExternalLink size={15} aria-hidden="true" />
                </a>
              ) : (
                <Link href={step.href} className="inline-flex items-center justify-center gap-2 bg-green-50 text-green-900 border border-green-200 rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider hover:bg-green-100 transition">
                  {step.action}<ArrowRight size={15} aria-hidden="true" />
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>

      <aside className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex gap-4 text-sm leading-relaxed text-amber-950">
        <Flag className="shrink-0 text-amber-700" aria-hidden="true" />
        <p><strong>Atenção:</strong> {warning}</p>
      </aside>

      <nav className="bg-white border border-gray-200 rounded-3xl p-7" aria-label="Conteúdos relacionados">
        <h2 className="text-xl font-bold text-mei-dark mb-4">Continue no MEI Fácil</h2>
        <div className="flex flex-wrap gap-3">
          {related.map((item) => <Link key={item.href} href={item.href} className="rounded-full bg-gray-100 hover:bg-green-100 px-4 py-2 text-sm font-bold text-gray-700 transition">{item.label}</Link>)}
        </div>
      </nav>
    </article>
  );
}
