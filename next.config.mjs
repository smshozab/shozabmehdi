/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/experience", destination: "/profile", permanent: true },
      { source: "/education", destination: "/profile", permanent: true },
      { source: "/projects", destination: "/profile", permanent: true },
      { source: "/skills", destination: "/research", permanent: true },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
