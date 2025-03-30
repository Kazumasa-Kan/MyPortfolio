import { NextConfig } from "next"

const repoName = 'MyPortfolio'; //GitHubのリポジトリ名
const nextConfig: NextConfig = {
  // 🚀 Next.js の設定
  // reactStrictMode: true,

  // 🚀 Turbo Pack の Webpack ローダー設定
  experimental: {
    turbo: {
      rules: {
        "*.(glsl|vert|frag)": {
          loaders: ["raw-loader"],
        },
      },
    },
  },

  // 🚀 Webpack のカスタム設定
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vert|frag)$/i,
      type: "asset/source",
    });
    return config;
  },

  // for GitHub Pages
  output: 'export', // ← 静的HTMLに変換
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
