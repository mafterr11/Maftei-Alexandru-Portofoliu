import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const pathnames = {
  "/projects": {
    en: "/projects",
    ro: "/proiecte",
  },
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({  pathnames });
