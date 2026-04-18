export type ProjectStatus = "Hoàn thành" | "Đang phát triển";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  repo: string;
  tech: string[];
  demo?: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: "nifi-cafe",
    title: "NifiCafe — Website quán cà phê",
    description:
      "Website quán cà phê xây dựng bằng WordPress với child theme tự viết hoàn toàn, không dùng plugin form builder.",
    longDescription:
      "NifiCafe là bài tập môn học mô phỏng trang web giới thiệu cho một quán cà phê với khẩu hiệu “Nơi mỗi tách cà phê kể một câu chuyện”. Toàn bộ giao diện được tuỳ biến qua một child theme tự viết dựa trên theme cha Astra, kết hợp jQuery và Animate.css để tạo các hiệu ứng nhỏ. Backend sử dụng WordPress 6.x trên PHP 8 với cơ sở dữ liệu MySQL/MariaDB, môi trường phát triển XAMPP và được triển khai thử nghiệm trên hosting InfinityFree. Dự án giúp mình thực hành quy trình tuỳ biến CMS thay vì lệ thuộc plugin có sẵn.",
    repo: "https://github.com/NamKhanhCTK46B/NifiCafe",
    tech: ["WordPress", "PHP", "MySQL", "jQuery", "Astra Child Theme"],
    demo: "https://nificafe.rf.gd",
    status: "Hoàn thành",
  },
  {
    id: "caro-game",
    title: "Caro Game — JavaFX với 3 mức AI",
    description:
      "Trò chơi cờ caro (Gomoku) viết bằng Java/JavaFX với 3 mức độ AI và undo/redo không giới hạn.",
    longDescription:
      "Caro Game là bài kiểm tra kết thúc học phần môn Mẫu thiết kế. Trò chơi được xây dựng bằng Java và JavaFX, áp dụng kiến trúc MVC kết hợp một số mẫu thiết kế cơ bản. Người chơi có thể chọn 3 mức độ AI: Easy đi ngẫu nhiên, Medium dùng hàm đánh giá heuristic, Hard sử dụng thuật toán Minimax kết hợp cắt tỉa Alpha-Beta. Ngoài ra, ứng dụng có các tính năng tiện dụng như undo/redo không giới hạn, làm nổi bật đường thắng và thống kê điểm số sau mỗi ván.",
    repo: "https://github.com/NamKhanhCTK46B/Caro-Game",
    tech: [
      "Java",
      "JavaFX",
      "Minimax + Alpha-Beta",
      "Mẫu thiết kế (MVC)",
    ],
    status: "Hoàn thành",
  },
  {
    id: "ebook-to-latex",
    title: "Ebook2LateX — Chuyển ebook sang LaTeX",
    description:
      "Ứng dụng web fullstack chuyển nội dung ebook sang mã LaTeX, gồm backend Python và frontend React.",
    longDescription:
      "Ebook2LateX là ứng dụng web fullstack giúp chuyển nội dung ebook sang mã LaTeX có cấu trúc, thuận tiện cho việc biên tập tài liệu và in ấn. Phần backend được viết bằng Python, dùng SQLAlchemy làm ORM và Alembic để quản lý migration cho cơ sở dữ liệu PostgreSQL. Phần frontend là một ứng dụng React (App.jsx) đảm nhiệm phần giao tiếp với người dùng. Toàn bộ dự án được điều phối bằng Docker Compose, giúp việc khởi chạy môi trường phát triển trở nên đơn giản và đồng nhất giữa các máy.",
    repo: "https://github.com/NamKhanhCTK46B/Ebook2LateX",
    tech: [
      "Python",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "React",
      "Docker Compose",
    ],
    status: "Đang phát triển",
  },
  {
    id: "group-assignment-nhom-4",
    title: "Bài tập nhóm — Nhóm 4",
    description:
      "Bài tập lớn theo nhóm trong môn học, tập trung vào quy trình làm việc cộng tác qua Git và GitHub.",
    longDescription:
      "Đây là bài tập lớn được thực hiện cùng các bạn trong Nhóm 4 của lớp. Vai trò chính của dự án không chỉ là hoàn thành các yêu cầu kỹ thuật mà còn là dịp để cả nhóm rèn luyện quy trình làm việc cộng tác trên Git: chia nhánh tính năng, mở pull request, review chéo và giải quyết xung đột mã nguồn. Vai trò của mình trong nhóm bao gồm thiết kế cấu trúc dự án, viết tài liệu hướng dẫn và đảm bảo các nhánh được hợp nhất sạch sẽ vào nhánh chính.",
    repo: "https://github.com/lqtdlu/group-assignment-nhom-4",
    tech: ["Git", "GitHub Flow", "Làm việc nhóm"],
    status: "Hoàn thành",
  },
];
