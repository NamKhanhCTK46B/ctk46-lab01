"use client";

import { useActionState } from "react";
import { createGuestbookEntry, type ActionState } from "@/app/guestbook/actions";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/submit-button";

const initialState: ActionState = { success: false };

export default function GuestbookForm() {
  const [state, formAction] = useActionState(createGuestbookEntry, initialState);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Viết lời nhắn</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Tên của bạn</Label>
            <Input
              id="name"
              name="name"
              placeholder="Nhập tên của bạn"
              required
            />
            {state.errors?.name && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {state.errors.name[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Lời nhắn</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Viết lời nhắn của bạn..."
              required
              rows={3}
            />
            {state.errors?.message && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {state.errors.message[0]}
              </p>
            )}
          </div>

          {state.errors?._form && (
            <p className="text-sm text-red-500 dark:text-red-400">
              {state.errors._form[0]}
            </p>
          )}

          <SubmitButton>Gửi lời nhắn</SubmitButton>

          {state.success && (
            <p className="text-sm text-green-600 dark:text-green-400">
              Gửi lời nhắn thành công!
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
