import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Skeleton className="mb-6 h-4 w-40" />
      <div className="grid gap-8 md:grid-cols-[260px_1fr]">
        <Skeleton className="h-[390px] w-full max-w-[260px] rounded-xl" />
        <div>
          <Skeleton className="mb-3 h-9 w-3/4" />
          <Skeleton className="mb-4 h-4 w-48" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-5 w-20" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
