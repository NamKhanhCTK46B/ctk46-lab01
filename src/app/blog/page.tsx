import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/types/post";

export const metadata: Metadata = {
  title: "Blog | Nguyễn Hoàng Nam Khánh",
  description: "Các bài viết chia sẻ về lập trình và công nghệ web.",
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Không thể tải danh sách bài viết");
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Blog
      </h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Tổng cộng {posts.length} bài viết từ JSONPlaceholder API — hiển thị 10 bài đầu.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {posts.slice(0, 10).map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block">
            <Card className="h-full cursor-pointer transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-1 flex items-center gap-2">
                  <Badge variant="secondary">Tác giả #{post.userId}</Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Bài #{post.id}
                  </span>
                </div>
                <CardTitle className="line-clamp-2 capitalize">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.body}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Đọc tiếp →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
