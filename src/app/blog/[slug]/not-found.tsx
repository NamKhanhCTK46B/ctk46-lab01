import Link from "next/link";

export default function BlogNotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-20 text-center sm:px-6">
      <p className="mb-4 text-7xl" aria-hidden>
        🔎
      </p>
      <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
        Bài viết không tồn tại
      </h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Có vẻ như đường dẫn này không trỏ đến bài viết nào. Hãy quay lại danh
        sách để chọn một bài khác nhé.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        ← Về trang Blog
      </Link>
    </section>
  );
}
