import { notFound } from 'next/navigation';
import { isCategorySlug } from '@/constants/hobbies';
import { CategorySlugPage } from '@/features/hobbyfind/components/CategorySlugPage';

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
