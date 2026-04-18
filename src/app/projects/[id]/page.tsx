import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Không tìm thấy dự án" };
  return {
    title: `${project.title} | Dự án`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/projects"
        className="mb-6 inline-block text-sm text-indigo-700 hover:underline dark:text-indigo-300"
      >
        ← Quay lại danh sách dự án
      </Link>

      <header className="mb-6">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {project.title}
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
      </header>

      <ul className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-slate-800 dark:text-indigo-300"
          >
            {t}
          </li>
        ))}
      </ul>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
          Mô tả chi tiết
        </h2>
        <p className="whitespace-pre-line leading-7 text-slate-700 dark:text-slate-300">
          {project.longDescription}
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Xem mã nguồn trên GitHub
        </Link>
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 dark:border-slate-700 dark:bg-slate-800 dark:text-indigo-300 dark:hover:bg-slate-700"
          >
            Truy cập bản demo ↗
          </Link>
        )}
      </div>
    </article>
  );
}
