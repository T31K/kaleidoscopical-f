/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // On Cloudflare (OpenNext) we don't use the Vercel image optimizer.
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
};

export default nextConfig;

// OpenNext: make Cloudflare bindings available during `next dev`.
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
