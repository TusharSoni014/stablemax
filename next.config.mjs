/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.pollinations.ai",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
