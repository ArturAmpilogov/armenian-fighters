import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static HTML in `out/`, so the site can be hosted anywhere for free.
  output: "export",
  // `/hy` is emitted as `/hy/index.html`, which every static host serves.
  trailingSlash: true,
  experimental: {
    // English and the other languages use separate root layouts, so the 404
    // page cannot be composed from a single layout.
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
