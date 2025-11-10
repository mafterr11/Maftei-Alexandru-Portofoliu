import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  /* config options here */
  cacheComponents: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
