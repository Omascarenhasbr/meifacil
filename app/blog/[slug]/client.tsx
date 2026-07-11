"use client";

import { useRouter } from 'next/navigation';
import { BlogPost } from '../../../src/components/BlogPost';
import { menuItems } from '../../../src/components/ClientLayout';

export function BlogPostClient({ slug }: { slug: string }) {
  const router = useRouter();
  return (
    <BlogPost
      slug={slug}
      onBack={() => router.push('/blog')}
      onNavigateToPost={(s) => router.push(`/blog/${s}`)}
      onNavigateTool={(toolId) => {
        const item = menuItems.find((m) => m.id === toolId);
        if (item) router.push(item.path);
      }}
    />
  );
}
