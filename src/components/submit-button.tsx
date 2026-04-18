"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function SubmitButton({
  pendingLabel = "Đang gửi...",
  children,
  className,
}: {
  pendingLabel?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className={className}>
      {pending ? pendingLabel : children}
    </Button>
  );
}
