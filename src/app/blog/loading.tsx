import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Skeleton className="mb-2 h-8 w-32" />
      <Skeleton className="mb-8 h-4 w-2/3" />
      <ul className="grid gap-4 sm:grid-cols-2">
        {[0, 1, 2, 3].map((i) => (
          <li key={i}>
            <Card>
              <CardHeader>
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="mb-2 h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
