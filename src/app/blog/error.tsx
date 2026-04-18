"use client";

import { useEffect } from "react";

export default function BlogError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <p className="mb-4 text-5xl" aria-hidden>
        📰
      </p>
      <h1 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
        Không thể tải bài viết
      </h1>
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        Đã xảy ra lỗi khi tải khu vực blog. Bạn vui lòng thử lại nhé.
      </p>
      <button
        type="button"
        onClick={() => unstable_retry()}
        className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Thử lại
      </button>
    </section>
  );
}
