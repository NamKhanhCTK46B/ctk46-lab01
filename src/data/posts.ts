export interface Post {
  slug: string;
  title: string;
  author: string;
  publishedAt: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "hanh-trinh-hoc-nextjs",
    title: "Hành trình tự học Next.js của một sinh viên CNTT",
    author: "Nguyễn Hoàng Nam Khánh",
    publishedAt: "2026-03-12",
    excerpt:
      "Chia sẻ những kinh nghiệm và bài học khi lần đầu tiếp cận Next.js App Router, từ cấu trúc thư mục đến render phía máy chủ.",
    content:
      "Khi mới bắt đầu, mình khá bối rối với mô hình App Router của Next.js vì nó khác hẳn so với Pages Router cũ. Mọi tệp đặc biệt như layout.tsx, page.tsx, loading.tsx hay error.tsx đều có vai trò riêng và được hệ thống định tuyến nhận diện một cách quy ước. Sau vài buổi mày mò, mình nhận ra cách tốt nhất để hiểu rõ là tự tay tạo từng trang, từng layout lồng nhau và quan sát kết quả trên trình duyệt. Bài viết này tổng hợp lại những kinh nghiệm đó.",
  },
  {
    slug: "react-server-components-de-hieu",
    title: "Hiểu nhanh về React Server Components",
    author: "Nguyễn Hoàng Nam Khánh",
    publishedAt: "2026-03-28",
    excerpt:
      "Vì sao Server Components giúp ứng dụng nhẹ hơn? Khi nào nên thêm 'use client'? Những lưu ý nhỏ nhưng quan trọng.",
    content:
      "React Server Components cho phép phần lớn cây thành phần được render ngay trên máy chủ, gửi xuống trình duyệt dưới dạng đã được tối ưu. Điều này giúp giảm kích thước JavaScript phía client và cải thiện hiệu năng hiển thị. Tuy nhiên không phải mọi nơi đều có thể là Server Component: bất cứ khi nào cần state, sự kiện hoặc các API trình duyệt thì ta phải đánh dấu 'use client' ở đầu tệp. Việc tách bạch giữa logic phía máy chủ và tương tác phía client chính là chìa khóa để tận dụng tối đa kiến trúc mới này.",
  },
  {
    slug: "tailwind-v4-co-gi-moi",
    title: "Tailwind CSS v4 có gì mới đáng chú ý?",
    author: "Nguyễn Hoàng Nam Khánh",
    publishedAt: "2026-04-05",
    excerpt:
      "Cấu hình tối giản, hiệu năng tốt hơn và cách bật chế độ tối bằng class trong Tailwind CSS v4.",
    content:
      "Phiên bản 4 của Tailwind CSS đem đến trải nghiệm cấu hình tối giản: không còn tệp tailwind.config.js bắt buộc, thay vào đó là chỉ thị @theme ngay trong CSS. Để bật chế độ tối theo class, ta dùng @custom-variant dark (&:is(.dark *)) trong globals.css. Việc cài đặt PostCSS cũng gọn hơn nhờ plugin chính thức @tailwindcss/postcss. Đây là một bước tiến đáng kể giúp dự án Next.js mới khởi tạo nhanh và rõ ràng hơn rất nhiều.",
  },
];
