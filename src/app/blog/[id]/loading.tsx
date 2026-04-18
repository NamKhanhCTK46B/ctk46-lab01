import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Skeleton className="mb-6 h-4 w-40" />

      <header className="mb-8 border-b border-slate-200 pb-6 dark:border-slate-800">
        <Skeleton className="mb-3 h-9 w-3/4" />
        <div className="flex gap-3">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-3 w-28" />
        </div>
      </header>

      <Skeleton className="mb-6 h-20 rounded-xl" />

      <div className="space-y-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Skeleton
            key={i}
            className="h-3"
            style={{ width: `${90 - (i % 3) * 10}%` }}
          />
        ))}
      </div>
    </article>
  );
}
