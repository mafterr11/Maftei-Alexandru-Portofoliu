"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Socials from './Socials';

export const links = [
  {
    path: "/",
    name: "acasă",
  },
  {
    path: "/portofoliu",
    name: "portofoliu",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
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
    </nav>
  );
};

export default Nav;
