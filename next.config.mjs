/** @type {import('next').NextConfig} */
const nextConfig = {
  // for Next versions that expose turbopack config:
  turbopack: {
    rules: {
      // map .svg to the svgr loader, and output it "as" a JS module
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
