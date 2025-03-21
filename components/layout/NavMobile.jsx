"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoCloseOutline, IoHome, IoChatbubblesSharp } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import Socials from "../Socials";
import { useTranslations } from "next-intl";
import Logo from "./Logo";
import LocalSwitcher from "../ui/LocalSwitcher";
import HireMe from "./HireMe";

const NavMobile = () => {
  const t = useTranslations("Nav");
  const links = [
    {
      path: t("home.link"),
      name: t("home.name"),
      icon: <IoHome />,
    },
    {
      path: t("projects.link"),
      name: t("projects.name"),
      icon: <BiSolidFoodMenu />,
    },
    {
      path: t("contact.link"),
      name: t("contact.name"),
      icon: <IoChatbubblesSharp />,
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="xl:hidden">
      {/* Nav trigger btn */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer outline-hidden"
      >
        <RiMenu2Line className="text-4xl" />
      </div>
      {/* Nav contents wrapper */}
      <aside
        className={`${
          isMenuOpen ? "top-0 right-0" : "-top-full -right-full"
        } fixed top-0 bottom-0 z-20 w-full transition-all duration-700 ease-in-out`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="h-screen border-accent bg-body absolute top-0 right-0 bottom-0 flex flex-col items-center justify-between border-l-2 px-8 pt-8 pb-16 text-black"
        >
          {/* Close btn */}
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute top-2 right-3 flex h-8 w-8 cursor-pointer items-center justify-center text-4xl"
          >
            <IoCloseOutline />
          </div>
          {/* Logo */}
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="mt-3">
            <Logo
              source={"/Myriad Tech header logo telefon.png"}
              size={"h-[3.75rem]"}
            />
          </div>
          {/* Links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="justify-base hover:text-orange flex items-center gap-x-3"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div className="text-accent text-3xl">{link.icon}</div>
                  <div className="uppercase">{link.name}</div>
                </Link>
              );
            })}
          </div>

          {/* Bottom part */}
          <div className="flex flex-col items-center justify-center gap-y-5">
            <HireMe />
            <LocalSwitcher />
            <Socials />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
