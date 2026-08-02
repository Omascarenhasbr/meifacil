import type { ReactNode } from 'react';

export function InstitutionalPage({
  eyebrow,
  title,
  intro,
  children,
  updatedAt = '2 de agosto de 2026'
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  updatedAt?: string;
}) {
  return (
    <article className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
      <header className="bg-mei-dark text-white p-7 md:p-10">
        <p className="text-[10px] text-mei-light font-black uppercase tracking-[0.24em] mb-3">{eyebrow}</p>
        <h1 className="text-3xl md:text-4xl font-serif italic mb-4">{title}</h1>
        <p className="text-green-100 leading-relaxed max-w-3xl">{intro}</p>
      </header>
      <div className="p-7 md:p-10 prose-mei institutional-copy">{children}</div>
      <footer className="px-7 md:px-10 py-5 bg-gray-50 border-t border-gray-100 text-xs text-gray-500">
        Última atualização: {updatedAt}
      </footer>
    </article>
  );
}
