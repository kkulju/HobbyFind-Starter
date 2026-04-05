import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  CATEGORY_SLUGS,
  HOBBY_CATEGORIES,
  isCategorySlug,
  type CategorySlug,
} from '@/constants/hobbies';
import { CategorySlugPage } from '@/features/hobbyfind/components/CategorySlugPage';

export function generateStaticParams(): { slug: CategorySlug }[] {
  return CATEGORY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!isCategorySlug(slug)) {
    return { title: 'HobbyFind' };
  }

  const meta = HOBBY_CATEGORIES[slug];

  return {
    title: `${meta.label} 취미 | HobbyFind`,
    description: `${meta.description} HobbyFind에서 ${meta.label} 취미를 한곳에 모았습니다.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isCategorySlug(slug)) {
    notFound();
  }

  return (
    <main className="min-h-0 flex-1 bg-white">
      <CategorySlugPage slug={slug} />
    </main>
  );
}
