import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog | Nguyễn Hoàng Nam Khánh",
  description: "Các bài viết chia sẻ về lập trình và công nghệ web.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Blog
      </h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Những bài viết chia sẻ về hành trình học lập trình của mình.
      </p>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="mb-1 text-xl font-semibold text-slate-900 hover:text-indigo-700 dark:text-white dark:hover:text-indigo-300">
                {post.title}
              </h2>
              <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
                Bởi {post.author} • {post.publishedAt}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {post.excerpt}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                Đọc tiếp →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
