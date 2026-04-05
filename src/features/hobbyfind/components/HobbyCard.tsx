'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { HobbyItem } from '@/constants/hobbies';

type HobbyCardProps = {
  hobby: HobbyItem;
  className?: string;
};

export function HobbyCard({ hobby, className }: HobbyCardProps) {
  return (
    <Card
      className={cn(
        'overflow-hidden rounded-xl border-neutral-200 bg-white shadow-sm transition duration-200 hover:shadow-md',
        className,
      )}
    >
      <div className="relative aspect-[3/2] w-full bg-neutral-100">
        <Image
          src={hobby.thumbnailSrc}
          alt={hobby.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <CardContent className="p-4">
        <p className="text-lg font-medium text-neutral-900">{hobby.name}</p>
      </CardContent>
    </Card>
  );
}
