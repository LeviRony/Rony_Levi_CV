/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true, 
  },
  assetPrefix: isProd ? "https://github.com/LeviRony/Rony_Levi_CV" : "", 
  basePath: isProd ? "/Rony_Levi_CV" : "",
};

module.exports = nextConfig;
