'use client';

import type { HobbyItem } from '@/constants/hobbies';
import { HobbyCard } from './HobbyCard';

type HobbyGridProps = {
  hobbies: HobbyItem[];
};

export function HobbyGrid({ hobbies }: HobbyGridProps) {
  return (
    <div
      className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
      role="list"
    >
      {hobbies.map((hobby) => (
        <div key={hobby.id} role="listitem">
          <HobbyCard hobby={hobby} />
        </div>
      ))}
    </div>
  );
}
