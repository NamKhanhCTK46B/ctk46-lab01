"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function BooksError({
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
      <h1 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
        Không tải được danh sách sách
      </h1>
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        Có vẻ máy chủ Open Library đang gặp sự cố. Bạn vui lòng thử lại sau ít phút.
      </p>
      <Button onClick={() => unstable_retry()}>Thử lại</Button>
    </section>
  );
}
