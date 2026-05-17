/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/for-creators", destination: "/for/content-creators", permanent: true },
      { source: "/for-agencies", destination: "/for/agencies", permanent: true },
      { source: "/for-coaches", destination: "/for/coaches", permanent: true },
      { source: "/vs-otter", destination: "/vs/otter-ai", permanent: true },
      { source: "/vs-descript", destination: "/vs/descript", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
    ];
  },
};

export default nextConfig;
