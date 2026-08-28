"use client";

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import {
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  CheckSquare,
  Clock,
  LayoutDashboard,
  Landmark,
  Lightbulb,
  Map,
  Menu,
  Receipt,
  Rocket,
  TrendingUp,
  UserRound,
  X
} from 'lucide-react';

export const menuItems = [
  { id: 'home', label: 'Início', path: '/', icon: LayoutDashboard, desc: 'Visão geral' },
  { id: 'quero-ser-mei', label: 'Quero ser MEI', path: '/quero-ser-mei', icon: Rocket, desc: 'Da ideia ao CNPJ' },
  { id: 'ja-sou-mei', label: 'Já sou MEI', path: '/ja-sou-mei', icon: BriefcaseBusiness, desc: 'Rotina e crescimento' },
  { id: 'ideias', label: 'Ideias de Negócios', path: '/ideias-de-negocios', icon: Lightbulb, desc: 'Modelos para validar' },
  { id: 'guias', label: 'Trilha do MEI', path: '/guia-iniciante', icon: Map, desc: 'Passo a passo' },
  { id: 'das', label: 'Calculadora DAS', path: '/calculadora-das-mei', icon: Calculator, desc: 'Impostos mensais' },
  { id: 'limite', label: 'Limite de Receita', path: '/limite-faturamento-mei', icon: TrendingUp, desc: 'Faturamento anual' },
  { id: 'preco', label: 'Precificação PJ', path: '/calculadora-preco-hora-autonomo', icon: Clock, desc: 'Preço sustentável' },
  { id: 'recibo', label: 'Emissor de Recibo', path: '/emissor-recibo-mei', icon: Receipt, desc: 'Documentos' },
  { id: 'obrigacoes', label: 'Checklist Mensal', path: '/checklist-mensal-mei', icon: CheckSquare, desc: 'Agenda fiscal' },
  { id: 'aposentadoria', label: 'Aposentadoria', path: '/simulador-aposentadoria-mei', icon: UserRound, desc: 'Projeção educativa' },
  { id: 'servicos', label: 'Serviços Oficiais', path: '/servicos-oficiais', icon: Landmark, desc: 'Atalhos gov.br' },
  { id: 'blog', label: 'Guias', path: '/blog', icon: BookOpen, desc: 'Conteúdo revisado' }
];

const institutionalLinks = [
  { href: '/sobre', label: 'Sobre' },
  { href: '/politica-editorial', label: 'Política editorial' },
  { href: '/politica-de-publicidade', label: 'Publicidade' },
  { href: '/contato', label: 'Contato' },
  { href: '/politica-de-privacidade', label: 'Privacidade' },
  { href: '/termos-de-uso', label: 'Termos' }
];

export function ClientLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() || '/';

  useEffect(() => setIsMenuOpen(false), [pathname]);

  const activeMenuId = pathname === '/'
    ? 'home'
    : pathname.startsWith('/ideias-de-negocios')
      ? 'ideias'
    : pathname.startsWith('/blog')
      ? 'blog'
      : menuItems.find((item) => item.path === pathname)?.id;

  const currentItem = menuItems.find((item) => item.id === activeMenuId);
  const isInstitutional = institutionalLinks.some((item) => item.href === pathname);
  const pageHeading = pathname.startsWith('/ideias-de-negocios/')
    ? 'Plano de validação'
    : pathname.startsWith('/blog/')
    ? 'Guia prático'
    : isInstitutional
      ? 'MEI Fácil'
      : currentItem?.label || 'MEI Fácil';

  return (
    <div className="min-h-screen bg-mei-bg flex flex-col font-sans text-gray-900">
      <header className="min-h-16 bg-mei-dark text-white flex items-center justify-between px-4 md:px-8 border-b-2 border-mei-light sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 py-3" aria-label="Ir para a página inicial">
          <span className="bg-mei-light p-1.5 rounded-lg">
            <Calculator className="w-6 h-6 text-mei-dark" aria-hidden="true" />
          </span>
          <span>
            <strong className="text-lg tracking-tight leading-none uppercase block">MEI FÁCIL</strong>
            <span className="hidden sm:block text-[9px] text-green-200 uppercase tracking-widest mt-1 font-bold">
              Ferramentas e informação para autônomos
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex gap-7 text-[11px] font-bold uppercase tracking-wider items-center" aria-label="Navegação principal">
          <Link href="/" className="hover:text-mei-light transition-colors">Início</Link>
          <Link href="/blog" className="hover:text-mei-light transition-colors">Guias</Link>
          <Link href="/ideias-de-negocios" className="hover:text-mei-light transition-colors">Ideias</Link>
          <Link href="/servicos-oficiais" className="hover:text-mei-light transition-colors">Serviços oficiais</Link>
          <Link href="/sobre" className="hover:text-mei-light transition-colors">Sobre</Link>
          <Link href="/contato" className="hover:text-mei-light transition-colors">Contato</Link>
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden md:block text-right border-r border-green-800 pr-5">
            <p className="text-[9px] opacity-60 uppercase font-black">Referência 2026</p>
            <p className="text-xs font-mono font-bold text-mei-light">Salário mínimo: R$ 1.621</p>
          </div>
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl bg-green-900/40"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 items-stretch">
        <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col shrink-0" aria-label="Ferramentas">
          <div className="p-4 sticky top-16 max-h-[calc(100vh-64px)] overflow-y-auto">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 px-3">Ferramentas e conteúdo</p>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const isActive = activeMenuId === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all ${
                      isActive
                        ? 'bg-green-50 text-mei-dark border-l-4 border-mei-dark shadow-sm'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                  >
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                    <span>
                      <span className="text-xs font-bold block">{item.label}</span>
                      <span className="text-[9px] font-medium opacity-60">{item.desc}</span>
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              className="lg:hidden fixed inset-0 z-40 bg-mei-dark pt-20 overflow-y-auto"
            >
              <nav className="p-6 space-y-3" aria-label="Menu móvel">
                {menuItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold ${
                      activeMenuId === item.id ? 'bg-mei-light text-mei-dark' : 'text-white hover:bg-green-800'
                    }`}
                  >
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-green-800 grid grid-cols-2 gap-2">
                  {institutionalLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="text-green-100 p-3 text-xs font-bold">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-1 min-w-0 p-4 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[10px] font-mono text-green-700 mb-1 uppercase tracking-widest font-bold">
                {pathname.startsWith('/ideias-de-negocios/') ? (
                  <span><Link href="/">Início</Link> / <Link href="/ideias-de-negocios">Ideias de Negócios</Link> / Plano</span>
                ) : pathname.startsWith('/blog/') ? (
                  <span><Link href="/">Início</Link> / <Link href="/blog">Guias</Link> / Artigo</span>
                ) : (
                  <span><Link href="/">Início</Link> / {pageHeading}</span>
                )}
              </p>
              <p className="text-3xl md:text-4xl font-serif italic text-mei-dark">{pageHeading}</p>
            </div>
            {!isInstitutional && pathname !== '/' && !pathname.startsWith('/blog') && !pathname.startsWith('/ideias-de-negocios') && (
              <div className="bg-white px-5 py-2 rounded-full border border-gray-200 flex items-center gap-3 shadow-sm self-start">
                <span className="w-2 h-2 rounded-full bg-red-500" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-tighter">DAS: vencimento mensal no dia 20</span>
              </div>
            )}
          </div>

          <motion.div key={pathname} initial={false} animate={{ opacity: 1 }} className="min-h-[50vh]">
            {children}
          </motion.div>
        </main>
      </div>

      <footer className="bg-white border-t border-gray-200 px-4 md:px-8 py-7 text-sm text-gray-500 no-print">
        <div className="max-w-6xl mx-auto flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <strong className="text-mei-dark block mb-2">MEI Fácil</strong>
            <p className="text-xs leading-relaxed">
              Ferramentas educativas e guias revisados para microempreendedores. Não somos um órgão público e não substituímos orientação contábil, fiscal ou previdenciária individual.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold" aria-label="Links institucionais">
            {institutionalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-mei-dark">{item.label}</Link>
            ))}
          </nav>
        </div>
        <p className="max-w-6xl mx-auto mt-5 pt-5 border-t border-gray-100 text-[11px]">© 2026 MEI Fácil. Conteúdo revisado em agosto de 2026.</p>
      </footer>
    </div>
  );
}
