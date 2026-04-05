'use client';

import type { ReactNode } from 'react';
import { TopBar } from './TopBar';
import { SiteFooter } from './SiteFooter';

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopBar />
      {children}
      <SiteFooter />
    </div>
  );
}
