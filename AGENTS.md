<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version (16.2.3) has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ctk46-lab01 — Hướng dẫn phát triển

Portfolio/blog cá nhân của **Nguyễn Hoàng Nam Khánh** (MSSV `2212391`, lớp CTK46B, Trường Đại học Đà Lạt). Là bài thực hành môn *Các công nghệ mới trong PTPM*.

## Stack

| Mục | Phiên bản |
|---|---|
| Next.js | **16.2.3** (App Router) |
| React | 19.2.4 (React Compiler bật trong `next.config.ts`) |
| TypeScript | ^5, `strict: true`, alias `@/*` → `./src/*` |
| Styling | **Tailwind CSS v4** (PostCSS plugin `@tailwindcss/postcss`) |
| ESLint | v9 flat config (`eslint.config.mjs`) |

## Lệnh

```bash
npm run dev         # clean .next + next dev --webpack (tránh Turbopack flake)
npm run dev:turbo   # next dev --turbopack
npm run build       # next build (Turbopack)  ← luôn chạy trước khi commit lớn
npm run lint        # eslint
```

> **Trước build/lint**, nếu thấy lỗi lạ kiểu `Cannot find module '../../.../src/app/<đã-xoá>/page.js'` thì xoá `.next/` rồi chạy lại — đó là type stub cũ của route đã xoá.

## Cấu trúc thư mục

```
src/
├── app/
│   ├── layout.tsx              # bọc <Navbar/> + <main/> + <Footer/>
│   ├── page.tsx                # trang chủ (hero + CTA + Counter)
│   ├── globals.css             # Tailwind v4 + @custom-variant dark
│   ├── error.tsx               # 'use client', root error boundary
│   ├── not-found.tsx           # 404 toàn cục
│   ├── about/page.tsx
│   ├── contact/page.tsx        # nhúng <CopyButton/>
│   ├── skills/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # list từ data/posts.ts
│   │   ├── loading.tsx         # skeleton list
│   │   ├── error.tsx           # 'use client'
│   │   └── [slug]/
│   │       ├── page.tsx        # generateStaticParams + notFound()
│   │       ├── loading.tsx     # skeleton chi tiết
│   │       └── not-found.tsx
│   └── projects/
│       ├── page.tsx
│       └── [id]/page.tsx       # generateStaticParams + notFound()
├── components/                 # tất cả file kebab-case .tsx, default export
│   ├── navbar.tsx              # 'use client', hamburger md:hidden
│   ├── footer.tsx              # server component
│   ├── counter.tsx             # 'use client'
│   ├── theme-toggle.tsx        # 'use client', toggle class .dark trên <html>
│   └── copy-button.tsx         # 'use client'
└── data/                       # nguồn dữ liệu tĩnh (interface + array)
    ├── posts.ts                # Post { slug, title, author, publishedAt, excerpt, content }
    └── projects.ts             # Project { id, title, description, longDescription, repo, tech, demo? }
```

## Quy ước (BẮT BUỘC tuân thủ)

1. **Toàn bộ chuỗi UI viết bằng tiếng Việt có dấu.** Không lẫn tiếng Anh trong nhãn nút, tiêu đề, thông báo lỗi/loading.
2. **Thông tin cá nhân thật** ở mọi nơi: tên `Nguyễn Hoàng Nam Khánh`, MSSV `2212391`, email `2212391@dlu.edu.vn`, GitHub `https://github.com/NamKhanhCTK46B`. Không dùng dữ liệu mẫu kiểu "Nguyễn Văn A".
3. **Server Components mặc định.** Chỉ thêm `'use client'` khi cần `useState`, sự kiện DOM, hoặc API trình duyệt (ví dụ `navigator.clipboard`, `localStorage`).
4. **Mỗi class Tailwind đều phải có biến thể `dark:` tương ứng** cho nền/chữ/viền — vì `ThemeToggle` toggle class `.dark` thật trên `<html>`.
5. Mọi điều hướng nội bộ dùng `<Link>` của `next/link`, không dùng `<a>`. Link ngoài (`http://`/`https://`) dùng `target="_blank" rel="noopener noreferrer"`.
6. Tên file component và route dùng **kebab-case** (`theme-toggle.tsx`, không phải `ThemeToggle.tsx`).
7. Luôn dùng path alias `@/components/...`, `@/data/...` thay cho relative `../../`.

## Bẫy Next.js 16 cần nhớ

### 1. `params` là **Promise** — phải `await`

```tsx
// app/blog/[slug]/page.tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;   // ★ Promise, không còn sync
}) {
  const { slug } = await params;
  // ...
}
```

Áp dụng tương tự cho `searchParams`, `cookies()`, `headers()` (tất cả đều async ở v15+).

### 2. `error.tsx` dùng prop `unstable_retry`, KHÔNG còn là `reset`

```tsx
'use client';   // bắt buộc
import { useEffect } from 'react';

export default function Error({
  error,
  unstable_retry,                                 // ★ Tên mới ở v16
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => { console.error(error); }, [error]);
  return <button onClick={() => unstable_retry()}>Thử lại</button>;
}
```

### 3. `notFound()` import từ `next/navigation`

```tsx
import { notFound } from 'next/navigation';
if (!post) notFound();
```

### 4. `generateStaticParams` cho mọi dynamic route

Cả `/blog/[slug]` và `/projects/[id]` đều phải xuất hàm này để build sinh static page sẵn cho từng entry trong `data/`.

### 5. Tailwind v4 dark mode

Trong `globals.css`:
```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```
KHÔNG cần `tailwind.config.js`. Bật/tắt qua `document.documentElement.classList.toggle('dark', isDark)` trong `theme-toggle.tsx`, lưu trạng thái vào `localStorage` key `theme` (`"dark"` | `"light"`).

## Hướng dẫn thêm mới

### Thêm bài viết mới
1. Mở `src/data/posts.ts`, thêm phần tử vào mảng `posts` với đủ các trường (`slug` phải là duy nhất, viết kebab-case không dấu).
2. Build lại — `generateStaticParams` trong `app/blog/[slug]/page.tsx` tự pick up.

### Thêm dự án mới
1. Mở `src/data/projects.ts`, thêm phần tử với `id` duy nhất (kebab-case không dấu), điền `tech` thành mảng các tag ngắn. `demo` là tuỳ chọn.
2. Build lại.

### Thêm trang tĩnh mới (ví dụ `/cv`)
1. Tạo `src/app/cv/page.tsx` với default export là server component.
2. Thêm `{ href: '/cv', label: 'CV' }` vào mảng `navLinks` trong `src/components/navbar.tsx`.
3. Cân nhắc thêm `loading.tsx` nếu trang fetch dữ liệu chậm.

### Thêm client component mới
1. File ở `src/components/<ten-component>.tsx`, dòng đầu `"use client";`.
2. Default export. Đặt mọi class Tailwind kèm biến thể `dark:`.
3. Nhúng vào server component bằng `import X from "@/components/x"`.

## Đối chiếu checklist Lab 02 (giữ làm tham chiếu)

- ✅ Layout dùng chung Navbar+Footer trên mọi trang (`src/app/layout.tsx`).
- ✅ ≥5 trang: `/`, `/about`, `/blog`, `/projects`, `/contact`, `/skills` (= 6).
- ✅ Dynamic `/blog/[slug]` hiển thị `author`.
- ✅ Dynamic `/projects/[id]` hiển thị `longDescription` + link demo (nếu có).
- ✅ `loading.tsx` cho `/blog` và `/blog/[slug]`.
- ✅ `error.tsx` cho root và `/blog`.
- ✅ `not-found.tsx` toàn cục và cho `/blog/[slug]`.
- ✅ Lưới responsive (`md:grid-cols-2` ở `/skills`, `/projects`, `/about`).
- ✅ Client components tương tác: `Counter`, `ThemeToggle`, `CopyButton`, `Navbar`.
- ✅ Toàn bộ giao diện tiếng Việt có dấu.
- ✅ Thông tin cá nhân thật.
