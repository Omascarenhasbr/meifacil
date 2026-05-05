/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Eye, ChevronRight, Hash, BookOpen, ExternalLink, Flame } from 'lucide-react';
import { posts, getCategoryStyle, formatDate, getRelatedPosts } from '../data/posts';

interface BlogPostProps {
  slug: string;
  onBack: () => void;
  onNavigateToPost: (slug: string) => void;
  onNavigateTool: (toolId: string) => void;
}

function extractH2Headings(html: string): { id: string; text: string }[] {
  const regex = /<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gi;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    headings.push({ id: match[1], text: match[2].replace(/<[^>]+>/g, '') });
  }
  return headings;
}

export function BlogPost({ slug, onBack, onNavigateToPost, onNavigateTool }: BlogPostProps) {
  const post = posts.find(p => p.slug === slug);
  const [views, setViews] = useState(post?.views ?? 0);

  useEffect(() => {
    if (!post) return;
    // Increment views counter (simulated)
    setViews(v => v + 1);
    // Update SEO meta tags
    document.title = post.seo.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', post.seo.metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = post.seo.metaDescription;
      document.head.appendChild(meta);
    }

    return () => {
      document.title = 'MEI Fácil | Dashboard de Gestão';
    };
  }, [slug, post]);

  const headings = useMemo(() => (post ? extractH2Headings(post.content) : []), [post]);
  const relatedPosts = useMemo(() => (post ? getRelatedPosts(post, posts) : []), [post]);
  const catStyle = post ? getCategoryStyle(post.category) : getCategoryStyle('');

  if (!post) {
    return (
      <div className="text-center py-20">
        <BookOpen size={48} className="mx-auto mb-4 text-gray-300" />
        <p className="font-bold text-gray-500">Artigo não encontrado</p>
        <button onClick={onBack} className="mt-4 text-mei-dark font-bold text-sm underline">
          Voltar ao Blog
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-12"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-mei-dark transition-colors mb-6 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Voltar ao Blog
      </button>

      <div className="flex gap-8">
        {/* Main article content */}
        <article className="flex-1 min-w-0">
          {/* Article header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full border ${catStyle.color}`}>
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-[10px] font-black text-orange-500">
                <Flame size={10} />
                <span>Em alta</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif italic text-mei-dark leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-200">
              <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-bold">
                <Clock size={12} className="text-mei-light" />
                {post.readTime} min de leitura
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-bold">
                <Eye size={12} className="text-mei-light" />
                {views.toLocaleString('pt-BR')} leituras
              </span>
              <span className="text-[11px] text-gray-500 font-bold">{formatDate(post.date)}</span>
            </div>

            {/* Summary / lead */}
            <p className="mt-6 text-base text-gray-600 leading-relaxed font-medium bg-green-50 border-l-4 border-mei-light pl-5 py-3 rounded-r-xl">
              {post.summary}
            </p>
          </header>

          {/* Article body */}
          <div
            className="prose-mei"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200 flex items-center gap-1"
                >
                  <Hash size={9} /> {tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom ad */}
          <div className="mt-10 bg-mei-bg border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center gap-2">
            <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Publicidade</p>
            {/* ADSENSE: article bottom 728x90 */}
            <div className="w-full h-[90px] flex items-center justify-center text-[10px] text-gray-300 font-mono bg-gray-50 rounded-xl border border-dashed border-gray-200">
              [ ADSENSE - article bottom 728×90 ]
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 space-y-6">
          {/* Table of contents */}
          {headings.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm sticky top-20">
              <div className="bg-mei-dark text-white px-5 py-4">
                <h3 className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                  <BookOpen size={14} className="text-mei-light" />
                  Neste artigo
                </h3>
              </div>
              <nav className="p-4 space-y-1">
                {headings.map(h => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    className="flex items-start gap-2 p-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-green-50 hover:text-mei-dark transition-all group"
                  >
                    <ChevronRight size={12} className="shrink-0 mt-0.5 text-mei-light group-hover:translate-x-0.5 transition-transform" />
                    <span className="line-clamp-2">{h.text}</span>
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Related tool CTA */}
          {post.relatedTool && (
            <div className="bg-mei-dark text-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-5">
                <p className="text-[9px] font-black uppercase tracking-widest text-mei-light mb-3">
                  Ferramenta relacionada
                </p>
                <h4 className="font-bold text-base mb-2">{post.relatedTool.name}</h4>
                <p className="text-green-200/70 text-[11px] leading-relaxed mb-4">
                  Use nossa ferramenta gratuita para calcular e gerenciar suas obrigações MEI com facilidade.
                </p>
                <button
                  onClick={() => onNavigateTool(post.relatedTool!.path)}
                  className="w-full bg-mei-light text-mei-dark py-2.5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:brightness-110 transition flex items-center justify-center gap-2"
                >
                  Acessar ferramenta <ExternalLink size={11} />
                </button>
              </div>
            </div>
          )}

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-mei-dark text-white px-5 py-4">
                <h3 className="text-[11px] font-black uppercase tracking-widest">
                  Artigos relacionados
                </h3>
              </div>
              <div className="p-4 space-y-1">
                {relatedPosts.map(rel => (
                  <button
                    key={rel.slug}
                    onClick={() => onNavigateToPost(rel.slug)}
                    className="w-full text-left p-3 rounded-xl hover:bg-green-50 transition-all group"
                  >
                    <p className="text-xs font-bold text-gray-700 group-hover:text-mei-dark transition-colors line-clamp-2 leading-snug mb-1">
                      {rel.title}
                    </p>
                    <p className="text-[10px] text-gray-400 flex items-center gap-1">
                      <Clock size={9} /> {rel.readTime} min
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

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
    </motion.div>
  );
}
