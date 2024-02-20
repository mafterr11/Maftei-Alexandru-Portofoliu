"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Socials from "./Socials";
import { useTranslations } from "next-intl";
import LocalSwitcher from './LocalSwitcher';

const Nav = ({ containerStyles, linkStyles }) => {
  const t = useTranslations("Nav");

  const links = [
    {
      path: t("home.link"),
      name: t("home.name"),
    },
    {
      path: t("projects.link"),
      name: t("projects.name"),
    },
    {
      path: t("contact.link"),
      name: t("contact.name"),
    },
  ];
  const currentRoute = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      <div className="flex items-center justify-center gap-x-8">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${linkStyles} ${
                currentRoute === link.path
                  ? "underline decoration-accent decoration-2 underline-offset-[0.5rem] capitalize text-base hover:scale-[0.97]"
                  : "capitalize text-base hover hover:scale-[0.97]"
              }`}
            >
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
      <Socials />
      <LocalSwitcher />
    </nav>
  );
};

export default Nav;
