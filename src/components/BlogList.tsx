/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Search, Clock, BookOpen, ChevronRight, Flame, Lightbulb } from 'lucide-react';
import { posts, categories, getCategoryStyle, formatDate } from '../data/posts';
import type { Post } from '../data/posts';

function getCategoryCounts() {
  const counts: Record<string, number> = {};
  posts.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
}

export function BlogList() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categoryCounts = useMemo(() => getCategoryCounts(), []);

  const filteredPosts = useMemo(() => {
    let result = [...posts];

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    return result;
  }, [search, activeCategory]);

  const featuredPost = posts.find(p => p.featured) || posts[0];
  const gridPosts = filteredPosts.filter(p => !p.featured || search || activeCategory);

  return (
    <div className="pb-12">
      <header className="mb-8 max-w-3xl">
        <p className="text-[10px] font-black text-green-700 uppercase tracking-[0.24em] mb-3">Conteúdo revisado e aplicado</p>
        <h1 className="text-3xl md:text-5xl font-serif italic text-mei-dark mb-4">Guias práticos para a jornada do MEI</h1>
        <p className="text-gray-600 leading-relaxed">Entenda obrigações, decisões financeiras e previdência com contexto, limitações e links para as fontes responsáveis.</p>
      </header>
      <Link href="/ideias-de-negocios" className="mb-8 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-300 transition group">
        <span className="flex items-start gap-3"><Lightbulb className="text-amber-700 shrink-0" aria-hidden="true" /><span><strong className="text-amber-950 block mb-1">Procurando uma ideia para começar?</strong><span className="text-sm text-amber-900 leading-relaxed">Veja planos de validação, custos de teste e ocupações MEI antes de abrir o CNPJ.</span></span></span>
        <span className="text-xs font-black uppercase tracking-wider text-amber-950 inline-flex items-center gap-2 whitespace-nowrap">Explorar ideias <ChevronRight size={15} className="group-hover:translate-x-1 transition" /></span>
      </Link>
      {/* Hero Featured Article */}
      {!search && !activeCategory && (
        <Link
          href={`/blog/${featuredPost.slug}`}
          className="relative bg-mei-dark text-white rounded-[2rem] overflow-hidden mb-10 cursor-pointer group shadow-2xl"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-mei-dark to-black opacity-90" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-800/30 to-transparent" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-mei-light/10 rounded-full blur-3xl" />
          <div className="absolute top-8 right-8 w-32 h-32 bg-mei-light/5 rounded-full blur-2xl" />

          <div className="relative z-10 p-8 md:p-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-mei-light/20 border border-mei-light/30 text-mei-light text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                <Flame size={10} />
                Em destaque
              </span>
              <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full border ${getCategoryStyle(featuredPost.category).color}`}>
                {featuredPost.category}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif italic leading-tight mb-4 group-hover:text-mei-light transition-colors">
              {featuredPost.title}
            </h2>

            <p className="text-green-100/80 text-base leading-relaxed mb-8 max-w-2xl">
              {featuredPost.summary}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-mei-light text-mei-dark px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:brightness-110 transition shadow-lg flex items-center gap-2 group-hover:gap-3">
                Ler artigo <ChevronRight size={14} />
              </button>
              <div className="flex items-center gap-4 text-[11px] text-green-200/70 font-bold">
                <span className="flex items-center gap-1.5"><Clock size={12} />{featuredPost.readTime} min de leitura</span>
                <span>Revisado em {formatDate(featuredPost.updatedAt)}</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Filter & Sort Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wide border transition-all ${
              !activeCategory
                ? 'bg-mei-dark text-white border-mei-dark shadow-md'
                : 'bg-white text-gray-500 border-gray-200 hover:border-mei-dark hover:text-mei-dark'
            }`}
          >
            Todos
          </button>
          {categories.map(cat => {
            const count = categoryCounts[cat.name] || 0;
            if (count === 0) return null;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name === activeCategory ? null : cat.name)}
                className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wide border transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.name
                    ? 'bg-mei-dark text-white border-mei-dark shadow-md'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-mei-dark hover:text-mei-dark'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
                {cat.name}
                <span className="ml-1 text-[9px] opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        <p className="ml-auto text-xs text-gray-500 self-center">Ordenados pela revisão mais recente</p>
      </div>

      {/* Two-column layout: articles + sidebar */}
      <div className="flex gap-8">
        {/* Main content column (70%) */}
        <div className="flex-1 min-w-0">
          {/* Search bar */}
          <div className="relative mb-6">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              aria-label="Buscar artigos por título ou assunto"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar artigos por título ou assunto..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-mei-dark transition-all placeholder:text-gray-400"
            />
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
              <p className="font-bold text-sm">Nenhum artigo encontrado</p>
              <p className="text-xs mt-1">Tente outro termo de busca ou categoria</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <div key={post.slug}>
                  <ArticleCardWithAd
                    post={post}
                    index={index}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar (30%) */}
        <aside className="hidden lg:block w-72 shrink-0 space-y-6">
          {/* Editorial widget */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-mei-dark text-white px-5 py-4">
              <h3 className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                <BookOpen size={14} className="text-mei-light" />
                Como revisamos
              </h3>
            </div>
            <div className="p-5">
              <p className="text-xs text-gray-600 leading-relaxed mb-4">Cada guia mostra autoria, data de revisão e fontes consultadas. Regras oficiais prevalecem sobre nossas simulações.</p>
              <a href="/politica-editorial" className="text-xs font-black text-green-800 underline underline-offset-2">Ler política editorial</a>
            </div>
          </div>

          {/* Categories widget */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-mei-dark text-white px-5 py-4">
              <h3 className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                <BookOpen size={14} className="text-mei-light" />
                Categorias
              </h3>
            </div>
            <div className="p-4 space-y-2">
              {categories.map(cat => {
                const count = categoryCounts[cat.name] || 0;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name === activeCategory ? null : cat.name)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-left ${
                      activeCategory === cat.name
                        ? 'bg-green-50 border-mei-dark'
                        : 'border-transparent hover:bg-gray-50'
                    }`}
                  >
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-700">
                      <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
                      {cat.name}
                    </span>
                    <span className="text-[10px] font-black text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}

// ─── Article Card with periodic AdSense ────────────────────────────────────

interface ArticleCardProps {
  post: Post;
  index: number;
}

function ArticleCardWithAd({ post, index }: ArticleCardProps) {
  const catStyle = getCategoryStyle(post.category);

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <motion.article
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.04 }}
        className="bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-mei-light hover:shadow-xl transition-all group"
      >
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${catStyle.color}`}>
            {post.category}
          </span>
          <span className="text-[10px] font-bold text-gray-400">Revisado</span>
        </div>

        <h3 className="text-lg font-bold text-mei-dark mb-2 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {post.summary}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold">
            <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime} min</span>
            <span>{formatDate(post.updatedAt)}</span>
          </div>
          <span className="text-[10px] font-black text-mei-dark opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1">
            Ler <ChevronRight size={12} />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
