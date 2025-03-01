"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../ui/LocalSwitcher";
import HireMe from "./HireMe";
import { MotionDiv } from "@/lib/motion-client";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [hovered, setHovered] = useState(t("home.name"));
  return (
    <nav className={`${containerStyles}`}>
      <div className="flex items-center justify-center gap-x-8">
        {links.map((link, index) => {
          return (
            <MotionDiv
              key={index}
              onHoverStart={() => setHovered(link.name)}
              className="relative"
            >
              <Link
                href={link.path}
                className={`${linkStyles} relative   ${hovered === link.name && "z-50 p-1.5 text-white"}`}
              >
                {link.name}
              </Link>
              {hovered === link.name && (
                <motion.span
                  layoutId="highlight"
                  className="bg-accent absolute inset-0 z-40 rounded-sm"
                ></motion.span>
              )}
            </MotionDiv>
          );
        })}
      </div>
      <HireMe />
      <LocalSwitcher />
    </nav>
  );
};

export default Nav;
