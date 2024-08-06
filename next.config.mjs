import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ro", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/ro/projects",
        destination: "/ro/proiecte", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
