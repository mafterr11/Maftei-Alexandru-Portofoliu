import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
 
  // Add other Next.js configurations here
};

export default withNextIntl(nextConfig);