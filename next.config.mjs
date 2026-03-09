/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure TypeScript paths are resolved correctly
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
