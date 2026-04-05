'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  HOBBY_CATEGORIES,
  type HobbyCategory,
} from '@/constants/hobbies';

const NAV_ORDER: HobbyCategory[] = [
  'physical',
  'intellectual',
  'artistic',
];

export function TopBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 bg-white/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/80 sm:px-6">
      <Link
        href="/"
        className="text-xl font-bold tracking-tight text-neutral-900 transition hover:text-primary-600"
      >
        HobbyFind
      </Link>

      <nav
        className="flex flex-wrap items-center gap-2 sm:gap-3"
        aria-label="카테고리"
      >
        {NAV_ORDER.map((key) => {
          const meta = HOBBY_CATEGORIES[key];
          const href = `/category/${meta.slug}`;
          const active = pathname === href;

          return (
            <Link
              key={key}
              href={href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition duration-200',
                active
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-neutral-700 hover:bg-neutral-100',
              )}
            >
              {meta.label}
            </Link>
          );
        })}
        {!isHome && (
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            전체
          </Link>
        )}
      </nav>
    </header>
  );
}
