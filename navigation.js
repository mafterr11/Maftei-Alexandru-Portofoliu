import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const pathnames = {
  "/projects": {
    ro: "/proiecte",
    en: "/projects",
  },
};

export const { Link, permanentRedirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({  pathnames });
