import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu | Nguyễn Hoàng Nam Khánh",
  description:
    "Giới thiệu về Nguyễn Hoàng Nam Khánh — sinh viên CNTT, sở thích và mục tiêu học tập.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Giới thiệu
      </h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Một vài thông tin về bản thân, sở thích và mục tiêu học tập.
      </p>

      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-slate-500 dark:text-slate-400">
              Họ và tên
            </dt>
            <dd className="text-base font-semibold text-slate-900 dark:text-white">
              Nguyễn Hoàng Nam Khánh
            </dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500 dark:text-slate-400">MSSV</dt>
            <dd className="text-base font-semibold text-slate-900 dark:text-white">
              2212391
            </dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500 dark:text-slate-400">Lớp</dt>
            <dd className="text-base font-semibold text-slate-900 dark:text-white">
              CTK46B
            </dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500 dark:text-slate-400">
              Trường
            </dt>
            <dd className="text-base font-semibold text-slate-900 dark:text-white">
              Đại học Đà Lạt
            </dd>
          </div>
        </dl>
      </div>

      <p className="mb-8 rounded-xl border-l-4 border-indigo-500 bg-indigo-50 p-4 italic text-indigo-900 dark:border-indigo-400 dark:bg-slate-900 dark:text-indigo-200">
        Là sinh viên CNTT đam mê học hỏi công nghệ web hiện đại, tôi mong muốn
        xây dựng được những ứng dụng hữu ích cho cộng đồng.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-3 text-lg font-semibold text-blue-700 dark:text-blue-300">
            Sở thích
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            <li>Lập trình web</li>
            <li>Đọc sách công nghệ</li>
            <li>Nghe nhạc</li>
            <li>Đọc truyện</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-3 text-lg font-semibold text-emerald-700 dark:text-emerald-300">
            Mục tiêu học tập
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            <li>Sử dụng thành thạo Next.js</li>
            <li>Hiểu sâu về React và TypeScript</li>
            <li>Làm chủ quy trình làm việc với Git</li>
            <li>Tham gia một dự án mã nguồn mở</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
