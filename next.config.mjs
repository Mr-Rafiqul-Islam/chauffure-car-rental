/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https", // or "http" if the image source is not secure
        hostname: "images.unsplash.com",
        pathname: "/**", // This allows all paths under the domain
      },
      {
        protocol: "https", // or "http" if the image source is not secure
        hostname: process.env.NEXT_IMAGE_DOMAIN,
        pathname: "/**", // This allows all paths under the domain
      },
    ],
  },
};

export default nextConfig;
