import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Không tìm thấy bài viết" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/blog"
        className="mb-6 inline-block text-sm text-indigo-700 hover:underline dark:text-indigo-300"
      >
        ← Quay lại danh sách bài viết
      </Link>

      <header className="mb-8 border-b border-slate-200 pb-6 dark:border-slate-800">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
          <p>
            Tác giả:{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {post.author}
            </span>
          </p>
          <p>Đăng ngày: {post.publishedAt}</p>
        </div>
      </header>

      <p className="mb-6 rounded-xl bg-indigo-50 p-4 italic text-indigo-900 dark:bg-slate-900 dark:text-indigo-200">
        {post.excerpt}
      </p>

      <div className="prose prose-slate max-w-none whitespace-pre-line text-base leading-7 text-slate-700 dark:text-slate-300">
        {post.content}
      </div>
    </article>
  );
}
