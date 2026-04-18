import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Comment, Post, User } from "@/types/post";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { next: { revalidate: 60 } },
  );
  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Không thể tải bài viết");
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) throw new Error("Không thể tải thông tin tác giả");
  return res.json();
}

async function getComments(postId: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Không thể tải bình luận");
  return res.json();
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const post = await getPost(id);
    return { title: `${post.title} | Blog`, description: post.body.slice(0, 120) };
  } catch {
    return { title: "Không tìm thấy bài viết" };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getPost(id);
  const [author, comments] = await Promise.all([
    getUser(post.userId),
    getComments(id),
  ]);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/blog"
        className="mb-6 inline-block text-sm text-indigo-700 hover:underline dark:text-indigo-300"
      >
        ← Quay lại danh sách bài viết
      </Link>

      <header className="mb-8 border-b border-slate-200 pb-6 dark:border-slate-800">
        <h1 className="mb-3 text-3xl font-bold capitalize tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Badge variant="secondary">Tác giả</Badge>
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {author.name}
          </span>
          <span>•</span>
          <span>{author.email}</span>
          <span>•</span>
          <span>Bài #{post.id}</span>
        </div>
      </header>

      <div className="prose prose-slate mb-8 max-w-none whitespace-pre-line text-base leading-7 text-slate-700 dark:text-slate-300">
        {post.body}
      </div>

      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-base">Về tác giả</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm">
          <p>
            <strong>{author.name}</strong> (@{author.username}) — {author.company.name}
          </p>
          <p className="italic text-slate-500 dark:text-slate-400">
            “{author.company.catchPhrase}”
          </p>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          Bình luận ({comments.length})
        </h2>
        <ul className="space-y-3">
          {comments.map((c) => (
            <li
              key={c.id}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-1 flex flex-wrap items-center gap-2 text-sm">
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  {c.name}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {c.email}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{c.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
