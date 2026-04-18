"use client";

import { useEffect } from "react";

export default function RootError({
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
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-20 text-center sm:px-6">
      <p className="mb-4 text-6xl" aria-hidden>
        💥
      </p>
      <h1 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
        Đã có lỗi xảy ra
      </h1>
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        Rất tiếc, ứng dụng vừa gặp sự cố. Bạn có thể thử lại hoặc quay lại sau
        ít phút.
      </p>
      {error.digest && (
        <p className="mb-6 text-xs text-slate-400">Mã lỗi: {error.digest}</p>
      )}
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
