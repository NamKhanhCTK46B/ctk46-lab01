import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type BookSummary, type TrendingResponse, workIdFromKey } from "@/types/book";

export const metadata: Metadata = {
  title: "Sách thịnh hành | Nguyễn Hoàng Nam Khánh",
  description: "Khám phá những đầu sách đang được quan tâm trên Open Library.",
};

async function getTrendingBooks(): Promise<BookSummary[]> {
  const res = await fetch(
    "https://openlibrary.org/trending/daily.json?limit=20",
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) {
    throw new Error("Không tải được danh sách sách thịnh hành.");
  }
  const data = (await res.json()) as TrendingResponse;
  return data.works ?? [];
}

function coverUrl(coverId?: number): string {
  if (!coverId) {
    return "https://placehold.co/300x450/e2e8f0/64748b?text=Kh%C3%B4ng+c%C3%B3+%E1%BA%A3nh";
  }
  return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
}

export default async function BooksPage() {
  const books = await getTrendingBooks();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Sách thịnh hành hôm nay
      </h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Dữ liệu từ <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-200">openlibrary.org</code> — cập nhật mỗi giờ.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => {
          const id = workIdFromKey(book.key);
          return (
            <Link
              key={book.key}
              href={`/books/${id}`}
              className="group block transition hover:-translate-y-0.5"
            >
              <Card className="h-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverUrl(book.cover_i)}
                  alt={`Bìa sách ${book.title}`}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:underline">
                    {book.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-2">
                  {book.first_publish_year && (
                    <Badge variant="secondary">{book.first_publish_year}</Badge>
                  )}
                  {book.author_name && book.author_name.length > 0 && (
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {book.author_name[0]}
                    </span>
                  )}
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
