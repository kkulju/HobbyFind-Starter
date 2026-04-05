'use client';

import { cn } from '@/lib/utils';

type HobbyFindLogoProps = {
  className?: string;
};

/** Inline brand mark: lens + handle suggesting discovery of hobbies. */
export function HobbyFindLogo({ className }: HobbyFindLogoProps) {
  return (
    <svg
      className={cn('h-8 w-8 shrink-0', className)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        width="40"
        height="40"
        rx="10"
        className="fill-primary-100"
      />
      <circle
        cx="17"
        cy="17"
        r="7.5"
        fill="none"
        className="stroke-primary-500"
        strokeWidth="2.25"
      />
      <path
        d="M22.5 22.5L31 31"
        className="stroke-primary-500"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <circle cx="17" cy="17" r="2" className="fill-primary-500" />
    </svg>
  );
}
