"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { guestbookEntries } from "@/data/guestbook";

const guestbookSchema = z.object({
  name: z
    .string()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  message: z
    .string()
    .min(1, "Lời nhắn không được để trống")
    .max(500, "Lời nhắn không được quá 500 ký tự"),
});

export interface ActionState {
  success: boolean;
  errors?: {
    name?: string[];
    message?: string[];
    _form?: string[];
  };
}

const DUPLICATE_WINDOW_MS = 60_000;

export async function createGuestbookEntry(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const rawData = {
    name: (formData.get("name") as string | null)?.trim() ?? "",
    message: (formData.get("message") as string | null)?.trim() ?? "",
  };

  const result = guestbookSchema.safeParse(rawData);
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  const now = Date.now();
  const isDuplicate = guestbookEntries.some((entry) => {
    const sameContent =
      entry.name === result.data.name && entry.message === result.data.message;
    const within = now - new Date(entry.createdAt).getTime() < DUPLICATE_WINDOW_MS;
    return sameContent && within;
  });
  if (isDuplicate) {
    return {
      success: false,
      errors: { _form: ["Bạn vừa gửi lời nhắn giống hệt — vui lòng đợi 1 phút."] },
    };
  }

  guestbookEntries.unshift({
    id: now.toString(),
    name: result.data.name,
    message: result.data.message,
    createdAt: new Date(now).toISOString(),
  });

  revalidatePath("/guestbook");
  return { success: true };
}

export async function deleteGuestbookEntry(id: string): Promise<ActionState> {
  const index = guestbookEntries.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return { success: false, errors: { _form: ["Không tìm thấy lời nhắn"] } };
  }
  guestbookEntries.splice(index, 1);
  revalidatePath("/guestbook");
  return { success: true };
}
