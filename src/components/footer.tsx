import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-600 sm:px-6 md:flex-row dark:text-slate-300">
        <p>© 2026 Nguyễn Hoàng Nam Khánh — MSSV 2212391</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/NamKhanhCTK46B"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-indigo-700 transition hover:underline dark:text-indigo-300"
          >
            <span aria-hidden>🐙</span> GitHub
          </Link>
          <a
            href="mailto:2212391@dlu.edu.vn"
            className="inline-flex items-center gap-1 text-indigo-700 transition hover:underline dark:text-indigo-300"
          >
            <span aria-hidden>✉️</span> 2212391@dlu.edu.vn
          </a>
        </div>
      </div>
    </footer>
  );
}
