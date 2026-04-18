export default function Loading() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-2 h-8 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
      <div className="mb-8 h-4 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
      <ul className="space-y-4">
        {[0, 1, 2].map((i) => (
          <li
            key={i}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            <div className="mb-3 h-3 w-40 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            <div className="mb-1 h-3 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          </li>
        ))}
      </ul>
    </section>
  );
}
