import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kỹ năng | Nguyễn Hoàng Nam Khánh",
  description: "Các kỹ năng lập trình của Nguyễn Hoàng Nam Khánh.",
};

interface SkillGroup {
  title: string;
  emoji: string;
  items: string[];
  accent: string;
}

const groups: SkillGroup[] = [
  {
    title: "Cơ sở dữ liệu",
    emoji: "🗄️",
    items: ["SQL — PostgreSQL", "SQL — SQL Server"],
    accent: "from-sky-50 to-white dark:from-slate-900 dark:to-slate-950",
  },
  {
    title: "Phát triển Web",
    emoji: "🌐",
    items: ["HTML", "CSS", "JavaScript"],
    accent: "from-amber-50 to-white dark:from-slate-900 dark:to-slate-950",
  },
  {
    title: "Ngôn ngữ Python",
    emoji: "🐍",
    items: ["Python — viết script và xử lý dữ liệu"],
    accent: "from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950",
  },
  {
    title: "Ngôn ngữ C#",
    emoji: "💠",
    items: ["C# — lập trình ứng dụng .NET"],
    accent: "from-violet-50 to-white dark:from-slate-900 dark:to-slate-950",
  },
];

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Kỹ năng lập trình
      </h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Những công nghệ và ngôn ngữ tôi đã và đang sử dụng trong quá trình học
        tập.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <article
            key={g.title}
            className={`rounded-2xl border border-slate-200 bg-gradient-to-br ${g.accent} p-6 shadow-sm dark:border-slate-800`}
          >
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
              <span aria-hidden className="text-2xl">
                {g.emoji}
              </span>
              {g.title}
            </h2>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                >
                  <span
                    aria-hidden
                    className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-indigo-500"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
