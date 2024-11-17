import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ro", "en"],
  defaultLocale: "ro",
  pathnames: {
    "/": "/",
    "/contact": "/contact",
    "/projects": {
      ro: "/proiecte",
      en: "/projects",
    },
  },
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
