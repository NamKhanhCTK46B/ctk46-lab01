import type { Metadata } from "next";
import Link from "next/link";
import { guestbookEntries } from "@/data/guestbook";
import GuestbookForm from "@/components/guestbook-form";
import DeleteButton from "@/components/delete-button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Lưu bút | Nguyễn Hoàng Nam Khánh",
  description: "Lời nhắn từ những người ghé thăm portfolio.",
};

const PAGE_SIZE = 5;

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function GuestbookPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const pageNum = Math.max(1, Number.parseInt(sp.page ?? "1", 10) || 1);
  const totalPages = Math.max(1, Math.ceil(guestbookEntries.length / PAGE_SIZE));
  const currentPage = Math.min(pageNum, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageEntries = guestbookEntries.slice(start, start + PAGE_SIZE);

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Lưu bút
      </h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Để lại một lời nhắn dễ thương cho mình nhé!
      </p>

      <GuestbookForm />

      <Separator className="my-8" />

      <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
        Tất cả lời nhắn ({guestbookEntries.length})
      </h2>

      {pageEntries.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
          Chưa có lời nhắn nào. Hãy là người đầu tiên!
        </p>
      ) : (
        <ul className="space-y-4">
          {pageEntries.map((entry) => (
            <li key={entry.id}>
              <Card>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <Avatar size="lg">
                      <AvatarFallback>
                        {entry.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {entry.name}
                        </p>
                        <time className="text-xs text-slate-500 dark:text-slate-400">
                          {formatDate(entry.createdAt)}
                        </time>
                      </div>
                      <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                        {entry.message}
                      </p>
                    </div>
                    <DeleteButton id={entry.id} />
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <nav className="mt-6 flex items-center justify-between">
          {currentPage > 1 ? (
            <Button variant="outline" size="sm" render={<Link href={`/guestbook?page=${currentPage - 1}`} />}>
              ← Trang trước
            </Button>
          ) : (
            <span />
          )}
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Trang {currentPage} / {totalPages}
          </span>
          {currentPage < totalPages ? (
            <Button variant="outline" size="sm" render={<Link href={`/guestbook?page=${currentPage + 1}`} />}>
              Trang sau →
            </Button>
          ) : (
            <span />
          )}
        </nav>
      )}
    </section>
  );
}
