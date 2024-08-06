import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const pathnames = {
  "/projects": {
    ro: "/proiecte",
    en: "/projects",
  },
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({  pathnames });
