'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function getHeroVariants(reduceMotion: boolean | null) {
  const instant = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: 0.1,
              delayChildren: 0.06,
            },
      },
    },
    item: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: instant,
      },
    },
  };
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { container, item } = getHeroVariants(reduceMotion);

  return (
    <motion.section
      className="px-4 py-12 text-center sm:py-16"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl"
        variants={item}
      >
        나에게 맞는 취미를 찾아보세요
      </motion.h1>
      <motion.p
        className="mx-auto mt-4 max-w-xl text-base text-neutral-500 sm:text-lg"
        variants={item}
      >
        운동형, 지능형, 예술형 취미를 탐색해보세요
      </motion.p>
      <motion.div
        className="mt-8 flex justify-center"
        variants={item}
      >
        <Button asChild size="lg" className="gap-2 rounded-full px-8">
          <a href="#explore-hobbies">
            취미 탐색하기
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
