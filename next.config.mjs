const repoName = "Portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
