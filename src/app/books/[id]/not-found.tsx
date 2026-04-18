import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BookNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <h1 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
        Không tìm thấy cuốn sách này
      </h1>
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        Có thể mã định danh không đúng hoặc cuốn sách đã bị xoá khỏi Open Library.
      </p>
      <Button render={<Link href="/books" />}>← Quay lại danh sách sách</Button>
    </section>
  );
}
