'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  HOBBY_CATEGORIES,
  type HobbyCategory,
} from '@/constants/hobbies';
import { HobbyFindLogo } from '@/features/hobbyfind/components/HobbyFindLogo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NAV_ORDER: HobbyCategory[] = [
  'physical',
  'intellectual',
  'artistic',
];

const navLinkClass = (active: boolean) =>
  cn(
    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
    active
      ? 'bg-primary/10 text-primary'
      : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground',
  );

export function TopBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isOnCategoryPage = pathname.startsWith('/category/');

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-2 text-foreground transition-opacity hover:opacity-80"
        >
          <HobbyFindLogo className="h-7 w-7 shrink-0 transition-transform group-hover:scale-[1.03]" />
          <span className="truncate text-[15px] font-semibold tracking-tight">
            HobbyFind
          </span>
        </Link>

        <nav
          className="flex min-w-0 shrink-0 items-center gap-0.5"
          aria-label="주요 내비게이션"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cn(
                  navLinkClass(isOnCategoryPage),
                  'inline-flex items-center gap-1',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background',
                )}
                aria-label="카테고리 메뉴"
              >
                카테고리
                <ChevronDown
                  className="h-4 w-4 shrink-0 opacity-70"
                  strokeWidth={2}
                  aria-hidden
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[11rem]">
              {NAV_ORDER.map((key) => {
                const meta = HOBBY_CATEGORIES[key];
                const href = `/category/${meta.slug}`;
                const active = pathname === href;

                return (
                  <DropdownMenuItem key={key} asChild>
                    <Link
                      href={href}
                      className={cn(
                        active && 'bg-accent font-medium text-accent-foreground',
                      )}
                    >
                      {meta.label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          {!isHome && (
            <Link href="/" className={navLinkClass(false)}>
              전체
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
