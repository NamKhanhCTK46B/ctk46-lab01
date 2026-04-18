"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-3 rounded-xl border border-indigo-200 bg-white/70 px-4 py-3 shadow-sm dark:border-indigo-900 dark:bg-slate-800/60">
      <span className="text-sm text-slate-600 dark:text-slate-300">
        Bộ đếm lượt nhấn:
      </span>
      <button
        type="button"
        onClick={() => setCount((c) => c - 1)}
        className="h-8 w-8 rounded-lg bg-indigo-100 text-lg font-bold text-indigo-700 transition hover:bg-indigo-200 dark:bg-slate-700 dark:text-indigo-200 dark:hover:bg-slate-600"
        aria-label="Giảm"
      >
        −
      </button>
      <span className="min-w-[2.5rem] text-center text-xl font-semibold tabular-nums text-indigo-700 dark:text-indigo-200">
        {count}
      </span>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="h-8 w-8 rounded-lg bg-indigo-600 text-lg font-bold text-white transition hover:bg-indigo-700"
        aria-label="Tăng"
      >
        +
      </button>
    </div>
  );
}
