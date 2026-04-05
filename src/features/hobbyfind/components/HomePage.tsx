'use client';

import { useMemo, useState } from 'react';
import { HOBBIES } from '@/constants/hobbies';
import { HeroSection } from './HeroSection';
import {
  CategoryFilterSection,
  type HomeFilterValue,
} from './CategoryFilterSection';
import { HobbyGrid } from './HobbyGrid';

export function HomePage() {
  const [filter, setFilter] = useState<HomeFilterValue>('all');

  const visibleHobbies = useMemo(() => {
    if (filter === 'all') return HOBBIES;
    return HOBBIES.filter((h) => h.category === filter);
  }, [filter]);

  return (
    <main className="min-h-0 flex-1 bg-white">
      <HeroSection />
      <CategoryFilterSection value={filter} onChange={setFilter} />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <HobbyGrid hobbies={visibleHobbies} />
      </div>
    </main>
  );
}
