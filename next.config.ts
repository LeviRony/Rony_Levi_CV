/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true, // Fix for Next.js images on GitHub Pages
  },
  assetPrefix: isProd ? "https://github.com/LeviRony/Rony_Levi_CV" : "", // Ensure correct URL format
  basePath: isProd ? "/Rony_Levi_CV" : "",
};

module.exports = nextConfig;
