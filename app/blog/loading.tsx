import { Skeleton } from '@/components/ui/skeleton';

export default function BlogLoading() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="space-y-4 mb-10">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-6 w-full max-w-md" />
        </div>

        <div className="grid gap-6">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
            ))}
        </div>
      </div>
    </div>
  );
}
