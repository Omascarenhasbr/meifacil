"use client";

import { useRouter } from 'next/navigation';
import { Home } from '../src/components/Home';
import { menuItems } from '../src/components/ClientLayout';

export default function HomePage() {
  const router = useRouter();
  return (
    <Home
      onNavigate={(id) => {
        const item = menuItems.find(m => m.id === id);
        if (item) router.push(item.path);
      }}
    />
  );
}
