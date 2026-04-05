export type HobbyCategory = 'physical' | 'intellectual' | 'artistic';

/** Fixed assets under `public/thumbnails/thumbnails/` */
export const HOBBY_THUMBNAIL_DIR = '/thumbnails/thumbnails' as const;

export type HobbyItem = {
  id: string;
  name: string;
  category: HobbyCategory;
  /** Public URL path for the card thumbnail (served from `public/`) */
  thumbnailSrc: string;
};

export const HOBBY_CATEGORIES: Record<
  HobbyCategory,
  { label: string; slug: string; description: string }
> = {
  physical: {
    label: '운동형',
    slug: 'physical',
    description: '몸을 움직이며 즐기는 활동',
  },
  intellectual: {
    label: '지능형',
    slug: 'intellectual',
    description: '생각하고 배우며 즐기는 활동',
  },
  artistic: {
    label: '예술형',
    slug: 'artistic',
    description: '만들고 표현하며 즐기는 활동',
  },
};

export const HOBBIES: HobbyItem[] = [
  {
    id: 'jogging',
    name: '조깅/러닝',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/running.jpg`,
  },
  {
    id: 'yoga',
    name: '요가',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/yoga.jpg`,
  },
  {
    id: 'swimming',
    name: '수영',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/swimming.jpg`,
  },
  {
    id: 'cycling',
    name: '자전거',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/cycling.jpg`,
  },
  {
    id: 'climbing',
    name: '클라이밍',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/climbing.jpg`,
  },
  {
    id: 'dance',
    name: '댄스',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/dance.jpg`,
  },
  {
    id: 'reading',
    name: '독서',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/reading.jpg`,
  },
  {
    id: 'puzzle',
    name: '퍼즐',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/puzzle.jpg`,
  },
  {
    id: 'chess',
    name: '체스',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/chess.jpg`,
  },
  {
    id: 'programming',
    name: '프로그래밍',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/programming.jpg`,
  },
  {
    id: 'language',
    name: '외국어 학습',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/foreign_language_learning.jpg`,
  },
  {
    id: 'photography',
    name: '사진 촬영',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/photography.jpg`,
  },
  {
    id: 'drawing',
    name: '그림 그리기',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/drawing.jpg`,
  },
  {
    id: 'instrument',
    name: '악기 연주',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/instrument_playing.jpg`,
  },
  {
    id: 'cooking',
    name: '요리',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/cooking.jpg`,
  },
  {
    id: 'calligraphy',
    name: '서예',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/calligraphy.jpg`,
  },
  {
    id: 'pottery',
    name: '도자기 만들기',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/pottery.jpg`,
  },
  {
    id: 'gardening',
    name: '정원 가꾸기',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/gardening.jpg`,
  },
];

export const CATEGORY_SLUGS = [
  'physical',
  'intellectual',
  'artistic',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export function isCategorySlug(value: string): value is CategorySlug {
  return (CATEGORY_SLUGS as readonly string[]).includes(value);
}

export function getHobbiesByCategory(category: HobbyCategory): HobbyItem[] {
  return HOBBIES.filter((h) => h.category === category);
}
