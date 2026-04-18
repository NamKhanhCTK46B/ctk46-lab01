export default function Loading() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-6 h-4 w-40 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

      <header className="mb-8 border-b border-slate-200 pb-6 dark:border-slate-800">
        <div className="mb-3 h-9 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="flex gap-3">
          <div className="h-3 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-3 w-28 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>
      </header>

      <div className="mb-6 h-20 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />

      <div className="space-y-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="h-3 animate-pulse rounded bg-slate-200 dark:bg-slate-800"
            style={{ width: `${90 - (i % 3) * 10}%` }}
          />
        ))}
      </div>
    </article>
  );
}
