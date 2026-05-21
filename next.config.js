/** @type {import('next').NextConfig} */
const nextConfig = {
  // ده اللي بيخلي المشروع يطلع فولدر out جاهز للنشر
  output: 'export',

  // إعداد الصور اللي كتبتيه
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
