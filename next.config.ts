import type { NextConfig } from 'next';

const isPages = process.env.GITHUB_ACTIONS === 'true';
const repo = 'shortforge';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isPages ? `/${repo}` : '',
  assetPrefix: isPages ? `/${repo}/` : '',
};

export default nextConfig;
