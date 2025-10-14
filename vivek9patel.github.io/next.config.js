/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ xuất ra thư mục out/
  images: {
    unoptimized: true, // ✅ nếu bạn dùng <Image>, tránh lỗi tối ưu ảnh
  },
};

module.exports = nextConfig;
