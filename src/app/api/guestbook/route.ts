import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");
  const limit = limitParam ? Number.parseInt(limitParam, 10) : undefined;

  if (limit !== undefined && (Number.isNaN(limit) || limit < 1)) {
    return NextResponse.json(
      { error: "Tham số limit không hợp lệ" },
      { status: 400 },
    );
  }

  const data =
    limit !== undefined ? guestbookEntries.slice(0, limit) : guestbookEntries;
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Dữ liệu không hợp lệ" },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 50) {
    return NextResponse.json(
      { error: "Tên phải từ 2 đến 50 ký tự" },
      { status: 400 },
    );
  }

  if (message.length < 1 || message.length > 500) {
    return NextResponse.json(
      { error: "Lời nhắn phải từ 1 đến 500 ký tự" },
      { status: 400 },
    );
  }

  const newEntry = {
    id: Date.now().toString(),
    name,
    message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(newEntry);
  return NextResponse.json(newEntry, { status: 201 });
}
