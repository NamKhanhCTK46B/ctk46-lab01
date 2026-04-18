import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Dự án | Nguyễn Hoàng Nam Khánh",
  description: "Danh sách các dự án cá nhân và bài tập nhóm.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Dự án
      </h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Một số dự án tiêu biểu mà tôi đã thực hiện.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="flex h-full flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <Badge
                  variant={
                    project.status === "Hoàn thành" ? "default" : "secondary"
                  }
                >
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Link
                href={`/projects/${project.id}`}
                className="text-sm font-semibold text-indigo-700 hover:underline dark:text-indigo-300"
              >
                Xem chi tiết →
              </Link>
              <div className="flex items-center gap-3">
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-700 hover:underline dark:text-emerald-300"
                  >
                    Demo ↗
                  </Link>
                )}
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:underline dark:text-slate-400"
                >
                  Mã nguồn
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
