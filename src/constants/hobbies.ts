export type HobbyCategory = 'physical' | 'intellectual' | 'artistic';

/** Fixed assets under `public/thumbnails/thumbnails/` */
export const HOBBY_THUMBNAIL_DIR = '/thumbnails/thumbnails' as const;

export type HobbyItem = {
  id: string;
  name: string;
  /** 카드에 표시할 한 줄 요약 설명 */
  description: string;
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
    description: '페이스를 정해 달리며 체력과 스트레스를 함께 관리해요.',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/running.jpg`,
  },
  {
    id: 'yoga',
    name: '요가',
    description: '호흡과 자세로 몸과 마음의 균형을 맞추는 운동이에요.',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/yoga.jpg`,
  },
  {
    id: 'swimming',
    name: '수영',
    description: '물에서 전신을 쓰는 유산소로 관절 부담이 적어요.',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/swimming.jpg`,
  },
  {
    id: 'cycling',
    name: '자전거',
    description: '페달을 밟으며 이동과 풍경 즐기기를 한 번에.',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/cycling.jpg`,
  },
  {
    id: 'climbing',
    name: '클라이밍',
    description: '암벽을 오르며 집중력과 근력을 함께 키워요.',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/climbing.jpg`,
  },
  {
    id: 'dance',
    name: '댄스',
    description: '리듬에 맞춰 몸으로 감정을 표현하고 스트레스를 풀어요.',
    category: 'physical',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/dance.jpg`,
  },
  {
    id: 'reading',
    name: '독서',
    description: '글을 읽으며 상상력과 지식을 넓히는 고요한 시간.',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/reading.jpg`,
  },
  {
    id: 'puzzle',
    name: '퍼즐',
    description: '논리와 관찰로 맞추는 두뇌 트레이닝이에요.',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/puzzle.jpg`,
  },
  {
    id: 'chess',
    name: '체스',
    description: '수를 읽으며 전략으로 승부하는 보드게임.',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/chess.jpg`,
  },
  {
    id: 'programming',
    name: '프로그래밍',
    description: '코드로 앱·자동화 등 원하는 것을 직접 만들어요.',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/programming.jpg`,
  },
  {
    id: 'language',
    name: '외국어 학습',
    description: '새 언어로 말하고 듣으며 문화도 함께 배워요.',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/foreign_language_learning.jpg`,
  },
  {
    id: 'photography',
    name: '사진 촬영',
    description: '빛과 구도로 순간을 담는 시각적 기록 활동.',
    category: 'intellectual',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/photography.jpg`,
  },
  {
    id: 'drawing',
    name: '그림 그리기',
    description: '연필·붓으로 형태와 색을 표현하는 창작이에요.',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/drawing.jpg`,
  },
  {
    id: 'instrument',
    name: '악기 연주',
    description: '소리를 내어 곡을 완성하며 음악을 즐겨요.',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/instrument_playing.jpg`,
  },
  {
    id: 'cooking',
    name: '요리',
    description: '재료를 다루며 맛과 향을 완성하는 과정.',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/cooking.jpg`,
  },
  {
    id: 'calligraphy',
    name: '서예',
    description: '붓글씨로 글자의 흐름과 아름다움을 익혀요.',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/calligraphy.jpg`,
  },
  {
    id: 'pottery',
    name: '도자기 만들기',
    description: '점토를 빚고 구워 나만의 그릇·작품을 만듭니다.',
    category: 'artistic',
    thumbnailSrc: `${HOBBY_THUMBNAIL_DIR}/pottery.jpg`,
  },
  {
    id: 'gardening',
    name: '정원 가꾸기',
    description: '식물을 키우며 계절과 자연과 천천히 교감해요.',
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
