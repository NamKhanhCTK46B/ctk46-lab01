export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-indigo-700">Xin chào!</h1>
          <p className="text-lg text-gray-600">
            Chào mừng đến với trang giới thiệu cá nhân của tôi
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <p className="text-xl text-gray-700">
            Họ và tên: <strong>Nguyễn Hoàng Nam Khánh</strong>
          </p>
          <p className="text-xl text-gray-700">
            MSSV: <strong>2212319</strong>
          </p>
          <p className="text-xl text-gray-700">
            Lớp: <strong>CTK46B</strong>
          </p>
          <p className="text-xl text-gray-700">
            Môn học: <strong>Các công nghệ mới trong PTPM</strong>
          </p>
        </div>

        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-4 mb-6">
          <p className="text-indigo-800 italic">
            Là sinh viên CNTT đam mê học hỏi công nghệ web hiện đại, tôi mong
            muốn xây dựng được những ứng dụng hữu ích cho cộng đồng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">
              Sở thích
            </h2>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              <li>Lập trình web</li>
              <li>Đọc sách công nghệ</li>
              <li>Nghe nhạc</li>
              <li>Đọc truyện</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-800 mb-2">
              Mục tiêu học tập
            </h2>
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>Có thể sử dụng Next.JS</li>
              <li>Hiểu được React & TypeScript</li>
              <li>Làm chủ Git workflow</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Project Next.JS đầu tiên — Bài thực hành 1
        </p>
      </div>
    </main>
  );
}
