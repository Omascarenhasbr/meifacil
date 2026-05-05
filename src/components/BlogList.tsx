/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Clock, Eye, TrendingUp, BookOpen, ChevronRight, Flame } from 'lucide-react';
import { posts, categories, getCategoryStyle, formatDate } from '../data/posts';
import type { Post } from '../data/posts';

interface BlogListProps {
  onNavigateToPost: (slug: string) => void;
}

type SortOrder = 'recent' | 'popular';

const topViewsIds = [...posts].sort((a, b) => b.views - a.views).slice(0, 3).map(p => p.id);
const top5ByViews = [...posts].sort((a, b) => b.views - a.views).slice(0, 5);

function getCategoryCounts() {
  const counts: Record<string, number> = {};
  posts.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
}

export function BlogList({ onNavigateToPost }: BlogListProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('recent');

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

    if (sortOrder === 'popular') {
      result.sort((a, b) => b.views - a.views);
    } else {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [search, activeCategory, sortOrder]);

  const featuredPost = posts.find(p => p.featured) || posts[0];
  const gridPosts = filteredPosts.filter(p => !p.featured || search || activeCategory);

  return (
    <div className="pb-12">
      {/* Hero Featured Article */}
      {!search && !activeCategory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-mei-dark text-white rounded-[2rem] overflow-hidden mb-10 cursor-pointer group shadow-2xl"
          onClick={() => onNavigateToPost(featuredPost.slug)}
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
                <span className="flex items-center gap-1.5"><Eye size={12} />{featuredPost.views.toLocaleString('pt-BR')} leituras</span>
                <span>{formatDate(featuredPost.date)}</span>
              </div>
            </div>
          </div>
        </motion.div>
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

        <div className="ml-auto flex items-center gap-2">
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value as SortOrder)}
            className="px-4 py-2 rounded-xl text-[11px] font-bold border border-gray-200 bg-white text-gray-700 outline-none focus:border-mei-dark cursor-pointer"
          >
            <option value="recent">Mais recentes</option>
            <option value="popular">Mais lidos</option>
          </select>
        </div>
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
                    isHot={topViewsIds.includes(post.id)}
                    onNavigate={onNavigateToPost}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar (30%) */}
        <aside className="hidden lg:block w-72 shrink-0 space-y-6">
          {/* Most read widget */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-mei-dark text-white px-5 py-4">
              <h3 className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                <TrendingUp size={14} className="text-mei-light" />
                Mais lidos
              </h3>
            </div>
            <div className="p-4 space-y-1">
              {top5ByViews.map((post, i) => (
                <button
                  key={post.slug}
                  onClick={() => onNavigateToPost(post.slug)}
                  className="w-full text-left p-3 rounded-xl hover:bg-green-50 transition-all group flex items-start gap-3"
                >
                  <span className="text-2xl font-black text-gray-100 group-hover:text-mei-light transition-colors leading-none mt-0.5 w-6 shrink-0">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-700 group-hover:text-mei-dark transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                      <Eye size={9} /> {post.views.toLocaleString('pt-BR')}
                    </p>
                  </div>
                </button>
              ))}
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

          {/* AdSense sidebar */}
          <div className="bg-mei-bg border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center gap-2">
            <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Publicidade</p>
            {/* ADSENSE: sidebar 300x250 */}
            <div className="w-full h-[250px] flex items-center justify-center text-[10px] text-gray-300 font-mono bg-gray-50 rounded-xl border border-dashed border-gray-200">
              [ ADSENSE 300×250 ]
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
  isHot: boolean;
  onNavigate: (slug: string) => void;
}

function ArticleCardWithAd({ post, index, isHot, onNavigate }: ArticleCardProps) {
  const catStyle = getCategoryStyle(post.category);
  const showAd = index > 0 && index % 3 === 0;

  return (
    <>
      {showAd && (
        <div className="bg-mei-bg border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center gap-2">
          <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Publicidade</p>
          {/* ADSENSE: in-feed 300x250 */}
          <div className="w-[300px] h-[100px] flex items-center justify-center text-[10px] text-gray-300 font-mono">
            [ ADSENSE - in-feed 300×250 ]
          </div>
        </div>
      )}

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04 }}
        onClick={() => onNavigate(post.slug)}
        className="bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-mei-light hover:shadow-xl transition-all group"
      >
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${catStyle.color}`}>
            {post.category}
          </span>
          {isHot && (
            <span className="inline-flex items-center gap-1 text-[10px] font-black text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">
              <Flame size={10} /> Em alta
            </span>
          )}
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
            <span className="flex items-center gap-1"><Eye size={10} /> {post.views.toLocaleString('pt-BR')}</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <span className="text-[10px] font-black text-mei-dark opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1">
            Ler <ChevronRight size={12} />
          </span>
        </div>
      </motion.article>
    </>
  );
}
