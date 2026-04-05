import { HomePage } from '@/features/hobbyfind/components/HomePage';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await searchParams;
  return <HomePage />;
}
