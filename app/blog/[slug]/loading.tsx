import { Skeleton } from '@/components/ui/skeleton';

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <Skeleton className="h-6 w-24 mb-8" />

        <div className="space-y-6">
          <Skeleton className="h-12 w-full max-w-lg" />

          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-24" />
          </div>

          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-60 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    </div>
  );
}
