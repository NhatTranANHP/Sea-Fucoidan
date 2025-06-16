import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  matcher: ['/history']
};

module.exports = {
  i18n: {
    locales: ['vi', 'ja'],
    defaultLocale: 'vi',
  },
};

export default nextConfig;
