import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
