import createMiddleware from "next-intl/middleware";
import { pathnames } from "./navigation";

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: "ro",
  // A list of all locales that are supported
  locales: ["ro", "en"],
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ro|en)/:path*"],
};
