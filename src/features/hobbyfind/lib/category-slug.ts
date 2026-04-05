import type { HobbyCategory } from '@/constants/hobbies';

const SLUG_TO_CATEGORY: Record<string, HobbyCategory> = {
  physical: 'physical',
  intellectual: 'intellectual',
  artistic: 'artistic',
};

export function slugToCategory(slug: string): HobbyCategory | null {
  return SLUG_TO_CATEGORY[slug] ?? null;
}
