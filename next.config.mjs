import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ro",
        permanent: true,
      },
      {
        source: "/ro/projects",
        destination: "/ro/proiecte",
        permanent: true,
      },
    ];
  },
  // Add other Next.js configurations here
};

export default withNextIntl(nextConfig);
