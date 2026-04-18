# ctk46-lab01 — Portfolio/Blog cá nhân

Bài thực hành **Lab 02** môn *Các công nghệ mới trong Phát triển phần mềm* — sinh viên **Nguyễn Hoàng Nam Khánh** (MSSV `2212391`, lớp CTK46B, Trường Đại học Đà Lạt).

Trang web gồm trang chủ, giới thiệu, dự án (có chi tiết từng dự án), blog (có chi tiết từng bài), kỹ năng và liên hệ — toàn bộ giao diện bằng **tiếng Việt có dấu**.

## Stack

- **Next.js 16.2.3** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (PostCSS plugin) — bật chế độ tối qua `@custom-variant dark`
- React Compiler (bật trong `next.config.ts`)
- ESLint v9 (flat config)

## Cấu trúc

```
src/
├── app/
│   ├── layout.tsx              # bọc Navbar + Footer cho mọi trang
│   ├── page.tsx                # trang chủ (hero + Counter)
│   ├── globals.css             # Tailwind v4 + biến thể dark
│   ├── error.tsx               # 'use client' — root error boundary
│   ├── not-found.tsx           # 404 toàn cục
│   ├── about/   contact/   skills/
│   ├── blog/
│   │   ├── page.tsx            # danh sách bài viết
│   │   ├── loading.tsx · error.tsx
│   │   └── [slug]/             # chi tiết bài viết (hiển thị author)
│   │       ├── page.tsx
│   │       ├── loading.tsx · not-found.tsx
│   └── projects/
│       ├── page.tsx
│       └── [id]/page.tsx       # chi tiết dự án (longDescription, demo)
├── components/
│   ├── navbar.tsx              # responsive + hamburger md:hidden
│   ├── footer.tsx
│   ├── counter.tsx · theme-toggle.tsx · copy-button.tsx   # 'use client'
└── data/
    ├── posts.ts                # Post { slug, title, author, ... }
    └── projects.ts             # Project { id, title, longDescription, repo, demo? }
```

## Lệnh

```bash
npm install
npm run dev          # clean .next + next dev --webpack (ổn định)
npm run dev:turbo    # next dev --turbopack
npm run build        # next build (Turbopack)
npm run lint         # ESLint
```

Mở [http://localhost:3000](http://localhost:3000) để xem.

> Nếu build báo `Cannot find module '../../.../src/app/<đã-xoá>/page.js'`, xoá thư mục `.next/` và build lại — đó là type stub cũ của route đã bị xoá.

## Các trang

| URL | Mô tả |
|---|---|
| `/` | Trang chủ — hero giới thiệu + bộ đếm tương tác |
| `/about` | Thông tin cá nhân, sở thích, mục tiêu học tập |
| `/projects` | Danh sách 4 dự án thật từ GitHub |
| `/projects/[id]` | Chi tiết dự án (mô tả dài, công nghệ, link mã nguồn + demo) |
| `/blog` | Danh sách bài viết |
| `/blog/[slug]` | Chi tiết bài viết (có hiển thị **tác giả**) |
| `/skills` | Lưới kỹ năng lập trình (responsive, không thanh tiến độ) |
| `/contact` | Email + GitHub kèm nút **Sao chép** |

## Liên kết cá nhân

- GitHub: <https://github.com/NamKhanhCTK46B>
- Email: <2212391@dlu.edu.vn>

## Tài liệu cho người phát triển sau này

Xem [`AGENTS.md`](./AGENTS.md) cho:
- Quy ước viết code (tiếng Việt, dark variant, kebab-case, alias `@/*`...)
- Bẫy Next.js 16 cần nhớ (`params: Promise<...>`, `error.tsx` dùng `unstable_retry`, `notFound()` từ `next/navigation`...)
- Hướng dẫn thêm bài viết / dự án / trang / client component mới
