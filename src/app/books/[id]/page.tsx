import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { extractDescription, type WorkDetail } from "@/types/book";

async function getWorkDetail(id: string): Promise<WorkDetail | null> {
  const res = await fetch(`https://openlibrary.org/works/${id}.json`, {
    next: { revalidate: 3600 },
  });
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error("Không tải được thông tin sách.");
  }
  return (await res.json()) as WorkDetail;
}

function coverUrl(coverId?: number): string {
  if (!coverId) {
    return "https://placehold.co/400x600/e2e8f0/64748b?text=Kh%C3%B4ng+c%C3%B3+%E1%BA%A3nh";
  }
  return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const work = await getWorkDetail(id);
  if (!work) {
    return { title: "Không tìm thấy sách" };
  }
  return {
    title: `${work.title} | Sách`,
    description: extractDescription(work.description)?.slice(0, 160),
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = await getWorkDetail(id);
  if (!work) notFound();

  const description = extractDescription(work.description);
  const cover = work.covers?.[0];
  const subjects = work.subjects?.slice(0, 12) ?? [];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link
        href="/books"
        className="mb-6 inline-block text-sm font-medium text-indigo-700 hover:underline dark:text-indigo-300"
      >
        ← Quay lại danh sách sách
      </Link>

      <div className="grid gap-8 md:grid-cols-[260px_1fr]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverUrl(cover)}
          alt={`Bìa sách ${work.title}`}
          className="w-full max-w-[260px] rounded-xl border border-slate-200 object-cover shadow-sm dark:border-slate-800"
        />
        <div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {work.title}
          </h1>

          {work.first_publish_date && (
            <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
              Xuất bản lần đầu: {work.first_publish_date}
            </p>
          )}

          {description ? (
            <p className="mb-6 whitespace-pre-line leading-relaxed text-slate-700 dark:text-slate-300">
              {description}
            </p>
          ) : (
            <p className="mb-6 italic text-slate-500 dark:text-slate-400">
              Chưa có mô tả cho cuốn sách này.
            </p>
          )}

          {subjects.length > 0 && (
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Chủ đề
              </h2>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <Badge key={subject} variant="outline">
                    {subject}
                  </Badge>
                ))}
              </div>
            </section>
          )}

          <div className="mt-8">
            <Button
              variant="outline"
              size="sm"
              render={
                <Link
                  href={`https://openlibrary.org/works/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Xem trên Open Library ↗
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
