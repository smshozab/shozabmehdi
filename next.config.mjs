/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/profile", destination: "/#profile", permanent: true },
      { source: "/achievements", destination: "/#achievements", permanent: true },
      { source: "/research", destination: "/#research", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/experience", destination: "/#experience", permanent: true },
      { source: "/education", destination: "/#education", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/skills", destination: "/#research", permanent: true },
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
