"use client";

import { useRouter } from 'next/navigation';
import { BlogList } from '../../src/components/BlogList';

export function BlogListClient() {
  const router = useRouter();
  return (
    <BlogList onNavigateToPost={(slug) => router.push(`/blog/${slug}`)} />
  );
}
