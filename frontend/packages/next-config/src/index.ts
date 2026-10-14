import type { NextConfig } from 'next';

const createNextConfig = (overrides: NextConfig = {}): NextConfig => {
  return {
    reactStrictMode: true,
    poweredByHeader: false,
    ...overrides,
    transpilePackages: [
      ...new Set(['@repo/ui', '@repo/shared', ...(overrides.transpilePackages ?? [])]),
    ],
  };
};

export default createNextConfig;
