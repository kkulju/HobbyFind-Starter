'use client';

import { match } from 'ts-pattern';
import { cn } from '@/lib/utils';
import {
  HOBBY_CATEGORIES,
  type HobbyCategory,
} from '@/constants/hobbies';

export type HomeFilterValue = 'all' | HobbyCategory;

type CategoryFilterSectionProps = {
  value: HomeFilterValue;
  onChange: (value: HomeFilterValue) => void;
};

const FILTER_KEYS: HomeFilterValue[] = [
  'all',
  'physical',
  'intellectual',
  'artistic',
];

export function CategoryFilterSection({
  value,
  onChange,
}: CategoryFilterSectionProps) {
  return (
    <section
      className="border-y border-neutral-100 bg-neutral-50/80 px-4 py-8 sm:px-6"
      aria-label="메인 카테고리 필터"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-sm font-medium text-neutral-500">
          카테고리로 모아보기
        </h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FILTER_KEYS.map((key) => {
            const label = match(key)
              .with('all', () => '전체')
              .with('physical', () => HOBBY_CATEGORIES.physical.label)
              .with('intellectual', () => HOBBY_CATEGORIES.intellectual.label)
              .with('artistic', () => HOBBY_CATEGORIES.artistic.label)
              .exhaustive();

            const selected = value === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => onChange(key)}
                className={cn(
                  'rounded-full px-5 py-2.5 text-sm font-medium transition duration-200',
                  selected
                    ? 'bg-primary-500 text-white shadow-sm'
                    : 'bg-white text-neutral-700 shadow-sm ring-1 ring-neutral-200 hover:bg-neutral-100',
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
