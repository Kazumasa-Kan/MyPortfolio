import { NextConfig } from "next"

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
};

export default nextConfig;
