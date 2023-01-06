const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/LetterCutter2",
  // this is important:
    // changes to this returned the site to showing readme as the page
  assetPrefix: isProd ? "https://BarkMulcher.github.io/LetterCutter2" : '',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig, {
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about/about' },
  //     '/memorials': { page: 'memorials/memorials'},
  //   }
  // },
}
