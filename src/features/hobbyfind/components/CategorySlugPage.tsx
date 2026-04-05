'use client';

import {
  HOBBY_CATEGORIES,
  getHobbiesByCategory,
} from '@/constants/hobbies';
import { slugToCategory } from '@/features/hobbyfind/lib/category-slug';
import { HobbyGrid } from './HobbyGrid';

type CategorySlugPageProps = {
  slug: string;
};

export function CategorySlugPage({ slug }: CategorySlugPageProps) {
  const category = slugToCategory(slug);
  if (!category) return null;

  const meta = HOBBY_CATEGORIES[category];
  const hobbies = getHobbiesByCategory(category);

  return (
    <>
      <header className="border-b border-neutral-100 px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
          {meta.label} 취미
        </h1>
        <p className="mt-2 max-w-2xl text-neutral-500">{meta.description}</p>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <HobbyGrid hobbies={hobbies} />
      </div>
    </>
  );
}
