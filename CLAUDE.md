@AGENTS.md

# Ghi chú dành riêng cho Claude Code

- File này tự động được load mỗi phiên làm việc trong thư mục `ctk46-lab01/`. Nội dung chính nằm ở `AGENTS.md` (đã `@AGENTS.md` ở dòng đầu).
- **Trước khi viết code mới**, đọc tài liệu trong `node_modules/next/dist/docs/01-app/01-getting-started/` cho phần liên quan — Next.js 16 có nhiều breaking change so với dữ liệu huấn luyện (xem mục *Bẫy Next.js 16 cần nhớ* trong `AGENTS.md`).
- Mọi chuỗi UI **phải bằng tiếng Việt có dấu**. Đừng tự dịch hay rút gọn ngược lại sang tiếng Anh.
- Khi sửa danh sách dự án/bài viết, ưu tiên cập nhật mảng trong `src/data/*.ts` thay vì hard-code vào page; `generateStaticParams` sẽ tự sinh route mới khi build.
- Trước khi báo "đã xong", chạy `npm run build` (không chỉ `lint`) để bắt lỗi type về `params: Promise<...>` và stale type stub trong `.next/`.
