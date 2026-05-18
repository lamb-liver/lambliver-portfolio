import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import path from "path";

const root = path.resolve(process.cwd());
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  outputFileTracingRoot: root,
  experimental: {
    optimizePackageImports: ["next-themes"],
    optimizeCss: true,
  },
  turbopack: {
    root,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 828],
    imageSizes: [32, 48, 64, 96, 128, 176, 256, 352],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
