import type { Metadata } from "next";
import Link from "next/link";
import CopyButton from "@/components/copy-button";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Liên hệ | Nguyễn Hoàng Nam Khánh",
  description: "Thông tin liên hệ với Nguyễn Hoàng Nam Khánh.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Liên hệ
      </h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Rất vui được kết nối với bạn qua các kênh dưới đây.
      </p>

      <div className="space-y-4">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
            <a
              href="mailto:2212391@dlu.edu.vn"
              className="text-base font-semibold text-indigo-700 hover:underline dark:text-indigo-300"
            >
              2212391@dlu.edu.vn
            </a>
          </div>
          <CopyButton text="2212391@dlu.edu.vn" />
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
            <Link
              href="https://github.com/NamKhanhCTK46B"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-indigo-700 hover:underline dark:text-indigo-300"
            >
              github.com/NamKhanhCTK46B
            </Link>
          </div>
          <CopyButton text="https://github.com/NamKhanhCTK46B" />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">Trường</p>
          <p className="text-base font-semibold text-slate-900 dark:text-white">
            Đại học Đà Lạt — lớp CTK46B
          </p>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
