import Link from "next/link";
import Counter from "@/components/counter";

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-white p-8 shadow-sm sm:p-12 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
          Xin chào, tôi là
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Nguyễn Hoàng Nam Khánh
        </h1>
        <p className="mb-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Sinh viên ngành Công nghệ thông tin tại Trường Đại học Đà Lạt, đam mê
          xây dựng ứng dụng web hiện đại với Next.js, React và TypeScript.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 dark:border-slate-700 dark:bg-slate-800 dark:text-indigo-300 dark:hover:bg-slate-700"
          >
            Liên hệ với tôi
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Giới thiệu thêm →
          </Link>
        </div>

        <Counter />
      </div>
    </section>
  );
}
