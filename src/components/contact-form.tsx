"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SubmitButton from "@/components/submit-button";

const initialState: ContactFormState = { success: false };

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      setShowSuccess(true);
      formRef.current?.reset();
    }
  }, [state.success]);

  function handleReset() {
    setShowSuccess(false);
    formRef.current?.reset();
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Gửi tin nhắn</CardTitle>
      </CardHeader>
      <CardContent>
        {showSuccess ? (
          <div className="space-y-4">
            <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
              Đã gửi tin nhắn thành công! Mình sẽ phản hồi sớm nhất có thể.
            </p>
            <Button variant="outline" onClick={handleReset}>
              Gửi tin nhắn khác
            </Button>
          </div>
        ) : (
          <form ref={formRef} action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Họ tên</Label>
              <Input id="name" name="name" placeholder="Nguyễn Văn ..." required />
              {state.errors?.name && (
                <p className="text-sm text-red-500 dark:text-red-400">
                  {state.errors.name[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ban@example.com"
                required
              />
              {state.errors?.email && (
                <p className="text-sm text-red-500 dark:text-red-400">
                  {state.errors.email[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Tiêu đề</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Liên hệ về việc..."
                required
              />
              {state.errors?.subject && (
                <p className="text-sm text-red-500 dark:text-red-400">
                  {state.errors.subject[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Nội dung</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Viết nội dung tin nhắn..."
                required
                rows={5}
              />
              {state.errors?.message && (
                <p className="text-sm text-red-500 dark:text-red-400">
                  {state.errors.message[0]}
                </p>
              )}
            </div>

            <SubmitButton pendingLabel="Đang gửi...">Gửi tin nhắn</SubmitButton>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
