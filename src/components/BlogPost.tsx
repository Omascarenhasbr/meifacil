/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CalendarCheck, ChevronRight, Hash, BookOpen, ExternalLink, UserRound, Link as LinkIcon } from 'lucide-react';
import { posts, getCategoryStyle, formatDate, getRelatedPosts } from '../data/posts';

interface BlogPostProps {
  slug?: string;
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

export function BlogPost({ slug: slugProp = '', onBack, onNavigateToPost, onNavigateTool }: BlogPostProps) {
  const slug = slugProp;
  const post = posts.find(p => p.slug === slug);
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
    <motion.div initial={false} animate={{ opacity: 1 }} className="pb-12">
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
              <span className="text-[10px] font-bold text-gray-500">Conteúdo revisado</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif italic text-mei-dark leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-200">
              <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-bold">
                <UserRound size={12} className="text-mei-light" />
                Equipe Editorial MEI Fácil
              </span>
              <span className="text-[11px] text-gray-500 font-bold">Publicado em {formatDate(post.date)}</span>
              <span className="flex items-center gap-1.5 text-[11px] text-gray-500 font-bold">
                <CalendarCheck size={12} className="text-mei-light" />
                Revisado em {formatDate(post.updatedAt)} · {post.readTime} min
              </span>
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

          <section className="mt-10 p-6 bg-white border border-gray-200 rounded-2xl" aria-labelledby="fontes-do-artigo">
            <h2 id="fontes-do-artigo" className="!mt-0 text-lg! flex items-center gap-2">
              <LinkIcon size={18} aria-hidden="true" /> Fontes consultadas
            </h2>
            <p className="text-sm text-gray-500">Links oficiais ou de referência verificados na última revisão deste guia.</p>
            <ul className="!mb-0">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-green-700 underline underline-offset-2">
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 p-6 bg-green-50 border border-green-100 rounded-2xl">
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-mei-dark text-white flex items-center justify-center shrink-0">
                <UserRound size={18} aria-hidden="true" />
              </span>
              <div>
                <h2 className="!mt-0 !mb-2 text-base!">Sobre a autoria</h2>
                <p className="text-sm !mb-2">Pesquisa, redação e revisão documental realizadas pela Equipe Editorial MEI Fácil. As fontes abaixo sustentam as regras principais; quando não há revisão profissional externa assinada, não sugerimos que ela exista.</p>
                <a href="/politica-editorial" className="text-sm font-bold text-green-800 underline underline-offset-2">Conheça nossa política editorial</a>
              </div>
            </div>
          </section>

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
                      {rel.readTime} min de leitura
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </motion.div>
  );
}
